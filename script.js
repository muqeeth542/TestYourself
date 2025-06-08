class QuizApp {
    constructor() {
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.selectedUnit = 'all';
        this.questions = [];
        this.userAnswers = [];
        this.timeLeft = 60;
        this.timer = null;
        this.isAnswered = false;
        this.studentData = null;
        this.quizStartTime = null;
        this.quizEndTime = null;
        this.isAdminAuthenticated = false;
        
        // Admin credentials
        this.adminCredentials = {
            name: "Mohammed Abdul Muqeeth",
            id: "12402988",
            email: "muqeethm2009@gmail.com"
        };
        
        this.initializeElements();
        this.bindEvents();
        this.checkAdminSession();
    }

    initializeElements() {
        // Screen elements
        this.loginScreen = document.getElementById('login-screen');
        this.startScreen = document.getElementById('start-screen');
        this.quizScreen = document.getElementById('quiz-screen');
        this.resultScreen = document.getElementById('result-screen');
        this.reviewScreen = document.getElementById('review-screen');
        
        // Login elements
        this.loginForm = document.getElementById('login-form');
        this.studentNameInput = document.getElementById('student-name');
        this.studentIdInput = document.getElementById('student-id');
        this.studentEmailInput = document.getElementById('student-email');
        
        // Quiz elements
        this.questionText = document.getElementById('question-text');
        this.optionsContainer = document.getElementById('options-container');
        this.optionButtons = document.querySelectorAll('.option-btn');
        this.feedback = document.getElementById('feedback');
        this.nextBtn = document.getElementById('next-btn');
        
        // Progress elements
        this.progressBar = document.getElementById('progress');
        this.questionCounter = document.getElementById('question-counter');
        this.scoreDisplay = document.getElementById('score-display');
        this.timerDisplay = document.getElementById('timer');
        
        // Result elements
        this.finalScore = document.getElementById('final-score');
        this.performanceAnalysis = document.getElementById('performance-analysis');
        this.unitBreakdown = document.getElementById('unit-breakdown');
        
        // Review elements
        this.reviewContainer = document.getElementById('review-container');
        
        // Admin elements
        this.adminToggle = document.getElementById('admin-toggle');
        this.adminContent = document.getElementById('admin-content');
        this.recordsTable = document.getElementById('records-table');
        this.adminAuthModal = document.getElementById('admin-auth-modal');
        this.adminAuthForm = document.getElementById('admin-auth-form');
        this.authError = document.getElementById('auth-error');
    }

    bindEvents() {
        // Login form
        this.loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleLogin();
        });

        // Unit selection buttons
        document.querySelectorAll('.unit-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.selectedUnit = e.target.dataset.unit;
                this.startQuiz();
            });
        });

        // Option buttons
        this.optionButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                if (!this.isAnswered) {
                    this.selectOption(e.target);
                }
            });
        });

        // Next button
        this.nextBtn.addEventListener('click', () => {
            this.nextQuestion();
        });

        // Result screen buttons
        document.getElementById('restart-btn').addEventListener('click', () => {
            this.restartQuiz();
        });

        document.getElementById('review-btn').addEventListener('click', () => {
            this.showReview();
        });

        document.getElementById('download-report').addEventListener('click', () => {
            this.downloadReport();
        });

        document.getElementById('back-to-results').addEventListener('click', () => {
            this.showResults();
        });

        // Admin panel events
        this.adminToggle.addEventListener('click', () => {
            this.handleAdminToggle();
        });

        // Admin authentication modal
        this.adminAuthForm.addEventListener('submit', (e) => {
            e.preventDefault();
            this.authenticateAdmin();
        });

        document.querySelector('.close').addEventListener('click', () => {
            this.adminAuthModal.style.display = 'none';
        });

        window.addEventListener('click', (e) => {
            if (e.target === this.adminAuthModal) {
                this.adminAuthModal.style.display = 'none';
            }
        });

        // Admin control buttons
        document.getElementById('export-csv').addEventListener('click', () => {
            this.exportRecordsCSV();
        });

        document.getElementById('clear-records').addEventListener('click', () => {
            this.clearAllRecords();
        });

        document.getElementById('export-detailed').addEventListener('click', () => {
            this.exportDetailedReport();
        });

        document.getElementById('admin-logout').addEventListener('click', () => {
            this.logoutAdmin();
        });
    }

    checkAdminSession() {
        const adminSession = localStorage.getItem('adminSession');
        if (adminSession) {
            const session = JSON.parse(adminSession);
            const now = new Date().getTime();
            // Session expires after 24 hours
            if (now - session.timestamp < 24 * 60 * 60 * 1000) {
                this.isAdminAuthenticated = true;
                this.updateAdminUI();
            } else {
                localStorage.removeItem('adminSession');
            }
        }
    }

    handleAdminToggle() {
        if (!this.isAdminAuthenticated) {
            this.adminAuthModal.style.display = 'block';
        } else {
            this.toggleAdminPanel();
        }
    }

    authenticateAdmin() {
        const name = document.getElementById('admin-name').value.trim();
        const id = document.getElementById('admin-id').value.trim();
        const email = document.getElementById('admin-email').value.trim();

        if (name === this.adminCredentials.name && 
            id === this.adminCredentials.id && 
            email === this.adminCredentials.email) {
            
            this.isAdminAuthenticated = true;
            
            // Store session
            const session = {
                timestamp: new Date().getTime(),
                admin: name
            };
            localStorage.setItem('adminSession', JSON.stringify(session));
            
            this.adminAuthModal.style.display = 'none';
            this.updateAdminUI();
            this.toggleAdminPanel();
            
            // Clear form
            this.adminAuthForm.reset();
            this.authError.style.display = 'none';
        } else {
            this.authError.textContent = 'Invalid credentials. Access denied.';
            this.authError.style.display = 'block';
        }
    }

    updateAdminUI() {
        if (this.isAdminAuthenticated) {
            document.getElementById('admin-user-info').textContent = this.adminCredentials.name;
        }
    }

    logoutAdmin() {
        this.isAdminAuthenticated = false;
        localStorage.removeItem('adminSession');
        this.adminContent.classList.remove('active');
        document.getElementById('admin-user-info').textContent = '';
    }

    toggleAdminPanel() {
        if (!this.isAdminAuthenticated) return;
        
        this.adminContent.classList.toggle('active');
        if (this.adminContent.classList.contains('active')) {
            this.loadStoredRecords();
            this.updateStatistics();
        }
    }

    updateStatistics() {
        const records = JSON.parse(localStorage.getItem('quizRecords') || '[]');
        
        // Total attempts
        document.getElementById('total-attempts').textContent = records.length;
        
        // Average score
        if (records.length > 0) {
            const avgScore = records.reduce((sum, record) => sum + record.percentage, 0) / records.length;
            document.getElementById('average-score').textContent = Math.round(avgScore) + '%';
        } else {
            document.getElementById('average-score').textContent = '0%';
        }
        
        // Unique students
        const uniqueStudents = new Set(records.map(record => record.studentId)).size;
        document.getElementById('unique-students').textContent = uniqueStudents;
    }

    exportDetailedReport() {
        if (!this.isAdminAuthenticated) return;
        
        const records = JSON.parse(localStorage.getItem('quizRecords') || '[]');
        if (records.length === 0) {
            alert('No records to export');
            return;
        }

        let reportContent = `
PEL121 Communication Skills I - Detailed Admin Report
===================================================
Generated on: ${new Date().toLocaleString()}
Total Records: ${records.length}

SUMMARY STATISTICS:
==================
`;

        // Calculate statistics
        const totalAttempts = records.length;
        const avgScore = records.reduce((sum, r) => sum + r.percentage, 0) / totalAttempts;
        const uniqueStudents = new Set(records.map(r => r.studentId)).size;
        const unitStats = {};

        records.forEach(record => {
            if (!unitStats[record.unit]) {
                unitStats[record.unit] = { attempts: 0, totalScore: 0 };
            }
            unitStats[record.unit].attempts++;
            unitStats[record.unit].totalScore += record.percentage;
        });

        reportContent += `
- Total Attempts: ${totalAttempts}
- Unique Students: ${uniqueStudents}
- Average Score: ${Math.round(avgScore)}%
- Best Performance: ${Math.max(...records.map(r => r.percentage))}%
- Lowest Performance: ${Math.min(...records.map(r => r.percentage))}%

UNIT-WISE PERFORMANCE:
=====================
`;

        Object.entries(unitStats).forEach(([unit, stats]) => {
            const avgUnitScore = stats.totalScore / stats.attempts;
            reportContent += `
${this.formatUnitName(unit)}:
  - Attempts: ${stats.attempts}
  - Average Score: ${Math.round(avgUnitScore)}%
`;
        });

        reportContent += `

DETAILED RECORDS:
================
`;

        records.forEach((record, index) => {
            reportContent += `
${index + 1}. Student: ${record.studentName} (ID: ${record.studentId})
   Email: ${record.email}
   Date: ${record.date}
   Unit: ${this.formatUnitName(record.unit)}
   Score: ${record.score}/${record.totalQuestions} (${record.percentage}%)
   Duration: ${Math.floor(record.duration / 60)}:${(record.duration % 60).toString().padStart(2, '0')}
   Start Time: ${new Date(record.startTime).toLocaleString()}
   End Time: ${new Date(record.endTime).toLocaleString()}
   
   Question-by-Question Analysis:
`;

            record.userAnswers.forEach((answer, qIndex) => {
                reportContent += `   Q${qIndex + 1}: ${answer.correct ? 'CORRECT' : 'INCORRECT'} (Time: ${answer.timeSpent}s)\n`;
            });
            
            reportContent += '\n' + '='.repeat(80) + '\n';
        });

        const blob = new Blob([reportContent], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `PEL121_Detailed_Admin_Report_${new Date().toISOString().split('T')[0]}.txt`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }

    // All other existing methods remain the same...
    handleLogin() {
        const name = this.studentNameInput.value.trim();
        const id = this.studentIdInput.value.trim();
        const email = this.studentEmailInput.value.trim();

        if (!name || !id || !email) {
            alert('Please fill in all fields');
            return;
        }

        this.studentData = {
            name: name,
            id: id,
            email: email,
            loginTime: new Date().toISOString()
        };

        document.getElementById('welcome-name').textContent = name;
        document.getElementById('welcome-id').textContent = id;

        this.showScreen('start-screen');
    }

    startQuiz() {
        this.loadQuestions();
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.userAnswers = [];
        this.quizStartTime = new Date();
        
        document.getElementById('quiz-student-name').textContent = this.studentData.name;
        document.getElementById('quiz-student-id').textContent = this.studentData.id;
        
        this.showScreen('quiz-screen');
        this.displayQuestion();
        this.startTimer();
    }

    loadQuestions() {
        if (this.selectedUnit === 'all' || this.selectedUnit === 'random40') {
    this.questions = [];
    Object.values(questionsDatabase).forEach(unitQuestions => {
        this.questions = this.questions.concat(unitQuestions);
    });
    const total = this.selectedUnit === 'random40' ? 40 : 240;
    this.questions = this.shuffleArray(this.questions).slice(0, total);
} else {
    this.questions = [...questionsDatabase[this.selectedUnit]];
    this.questions = this.shuffleArray(this.questions);
}

    }

    shuffleArray(array) {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    }

    displayQuestion() {
        this.stopTimer(); // Make sure no overlapping timer
this.startTimer(); // Then start fresh timer

        const question = this.questions[this.currentQuestionIndex];
        this.isAnswered = false;
        
        this.questionText.textContent = question.question;
        
        this.optionButtons.forEach((btn, index) => {
            const optionKey = Object.keys(question.options)[index];
            btn.textContent = `${optionKey}. ${question.options[optionKey]}`;
            btn.dataset.option = optionKey;
            btn.className = 'option-btn';
            btn.disabled = false;
        });
        
        this.feedback.textContent = '';
        this.feedback.className = 'feedback';
        this.nextBtn.style.display = 'none';
        
        this.updateProgress();
        this.resetTimer();
    }

    selectOption(selectedBtn) {
        if (this.isAnswered) return;
        
        this.optionButtons.forEach(btn => {
            btn.classList.remove('selected');
        });
        
        selectedBtn.classList.add('selected');
        
        setTimeout(() => {
            this.checkAnswer(selectedBtn.dataset.option);
        }, 300);
    }

    checkAnswer(selectedOption) {
    this.isAnswered = true;
    this.stopTimer();

    const question = this.questions[this.currentQuestionIndex];
    const isCorrect = selectedOption === question.correct;

    this.userAnswers.push({
        question: question,
        userAnswer: selectedOption || 'none',
        correct: isCorrect,
        timeSpent: 60 - this.timeLeft
    });

    // disable all buttons
    this.optionButtons.forEach(btn => {
        btn.disabled = true;
        if (btn.dataset.option === question.correct) {
            btn.classList.add('correct');
        } else if (btn.dataset.option === selectedOption && !isCorrect) {
            btn.classList.add('incorrect');
        }
    });

    this.showFeedback(isCorrect, question.explanation);
    this.scoreDisplay.textContent = `Score: ${this.score}`;

    this.nextBtn.style.display = 'block';
    this.nextBtn.textContent = this.currentQuestionIndex === this.questions.length - 1
        ? 'Finish Quiz'
        : 'Next Question';
}


    showFeedback(isCorrect, explanation) {
        this.feedback.className = `feedback ${isCorrect ? 'correct' : 'incorrect'}`;
        this.feedback.innerHTML = `
            <strong>${isCorrect ? '✓ Correct!' : '✗ Incorrect'}</strong><br>
            ${explanation}
        `;
    }

    nextQuestion() {
        this.currentQuestionIndex++;
        
        if (this.currentQuestionIndex < this.questions.length) {
            this.displayQuestion();
        } else {
            this.finishQuiz();
        }
    }

    finishQuiz() {
        this.quizEndTime = new Date();
        this.saveQuizRecord();
        this.showResults();
    }

    updateProgress() {
        const progress = ((this.currentQuestionIndex + 1) / this.questions.length) * 100;
        this.progressBar.style.width = `${progress}%`;
        this.questionCounter.textContent = `Question ${this.currentQuestionIndex + 1} of ${this.questions.length}`;
    }

    startTimer() {
    this.stopTimer(); // ← Stops any existing timer

    this.timeLeft = 60;
    this.updateTimerDisplay();

    this.timer = setInterval(() => {
        if (this.timeLeft > 0) {
            this.timeLeft--;
            this.updateTimerDisplay();

            if (this.timeLeft <= 10) {
                this.timerDisplay.classList.add('warning');
            }

            if (this.timeLeft === 0) {
                this.timeUp(); // auto-submit
            }
        }
    }, 1500);
}

  updateTimerDisplay() {
    this.timerDisplay.textContent = `Time: ${this.timeLeft}s`;
    this.timerDisplay.className = 'timer-2x';
    if (this.timeLeft <= 10) {
        this.timerDisplay.classList.add('warning');
    }
}

    resetTimer() {
        this.stopTimer();
        this.timerDisplay.classList.remove('warning');
        this.startTimer();
    }

    stopTimer() {
    if (this.timer) {
        clearInterval(this.timer);
        this.timer = null;
    }
}

    timeUp() {
    clearInterval(this.timer);
    this.timer = null;
    this.checkAnswer(null);
}


    saveQuizRecord() {
        const record = {
            id: Date.now(),
            studentName: this.studentData.name,
            studentId: this.studentData.id,
            email: this.studentData.email,
            unit: this.selectedUnit,
            score: this.score,
            totalQuestions: this.questions.length,
            percentage: Math.round((this.score / this.questions.length) * 100),
            startTime: this.quizStartTime.toISOString(),
            endTime: this.quizEndTime.toISOString(),
            duration: Math.round((this.quizEndTime - this.quizStartTime) / 1000),
            date: new Date().toLocaleDateString(),
            userAnswers: this.userAnswers
        };

        let records = JSON.parse(localStorage.getItem('quizRecords') || '[]');
        records.push(record);
        localStorage.setItem('quizRecords', JSON.stringify(records));
    }

    loadStoredRecords() {
        if (!this.isAdminAuthenticated) return;
        
        const records = JSON.parse(localStorage.getItem('quizRecords') || '[]');
        this.displayRecords(records);
    }

    displayRecords(records) {
        if (records.length === 0) {
            this.recordsTable.innerHTML = '<p>No records found.</p>';
            return;
        }

        let tableHTML = `
            <table class="records-table">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Student Name</th>
                        <th>Student ID</th>
                        <th>Email</th>
                        <th>Unit</th>
                        <th>Score</th>
                        <th>Percentage</th>
                        <th>Duration</th>
                    </tr>
                </thead>
                <tbody>
        `;

        records.forEach(record => {
            tableHTML += `
                <tr>
                    <td>${record.date}</td>
                    <td>${record.studentName}</td>
                    <td>${record.studentId}</td>
                    <td>${record.email}</td>
                    <td>${this.formatUnitName(record.unit)}</td>
                    <td>${record.score}/${record.totalQuestions}</td>
                    <td>${record.percentage}%</td>
                    <td>${Math.floor(record.duration / 60)}:${(record.duration % 60).toString().padStart(2, '0')}</td>
                </tr>
            `;
        });

        tableHTML += '</tbody></table>';
        this.recordsTable.innerHTML = tableHTML;
    }

    showResults() {
        this.stopTimer();
        this.showScreen('result-screen');
        
        const percentage = Math.round((this.score / this.questions.length) * 100);
        
        document.getElementById('result-student-name').textContent = this.studentData.name;
        document.getElementById('result-student-id').textContent = this.studentData.id;
        document.getElementById('result-date').textContent = new Date().toLocaleDateString();
        
        this.finalScore.innerHTML = `
            <div>${this.score}/${this.questions.length}</div>
            <div style="font-size: 1.5rem; margin-top: 10px;">${percentage}%</div>
        `;
        
        let performance = '';
        if (percentage >= 90) performance = 'Excellent! Outstanding performance!';
        else if (percentage >= 80) performance = 'Very Good! Well done!';
        else if (percentage >= 70) performance = 'Good! Keep practicing!';
        else if (percentage >= 60) performance = 'Fair. More practice needed.';
        else performance = 'Needs improvement. Review the concepts.';
        
        this.performanceAnalysis.innerHTML = `
            <h3>Performance Analysis</h3>
            <p><strong>${performance}</strong></p>
            <p>You answered ${this.score} out of ${this.questions.length} questions correctly.</p>
            <p>Accuracy: ${percentage}%</p>
            <p>Quiz Duration: ${Math.floor((this.quizEndTime - this.quizStartTime) / 60000)} minutes</p>
        `;
        
        this.showUnitBreakdown();
    }

    showUnitBreakdown() {
        const unitStats = {};
        
        this.userAnswers.forEach(answer => {
            const unit = this.getQuestionUnit(answer.question);
            if (!unitStats[unit]) {
                unitStats[unit] = { correct: 0, total: 0 };
            }
            unitStats[unit].total++;
            if (answer.correct) {
                unitStats[unit].correct++;
            }
        });
        
        let breakdownHTML = '<h3>Unit-wise Performance</h3>';
        Object.entries(unitStats).forEach(([unit, stats]) => {
            const percentage = Math.round((stats.correct / stats.total) * 100);
            breakdownHTML += `
                <div style="margin: 10px 0; padding: 10px; background: white; border-radius: 8px;">
                    <strong>${this.formatUnitName(unit)}:</strong> 
                    ${stats.correct}/${stats.total} (${percentage}%)
                    <div style="width: 100%; height: 8px; background: #e0e0e0; border-radius: 4px; margin-top: 5px;">
                        <div style="width: ${percentage}%; height: 100%; background: ${percentage >= 70 ? '#51cf66' : percentage >= 50 ? '#ffd43b' : '#ff6b6b'}; border-radius: 4px;"></div>
                    </div>
                </div>
            `;
        });
        
        this.unitBreakdown.innerHTML = breakdownHTML;
    }

    getQuestionUnit(question) {
        for (const [unit, questions] of Object.entries(questionsDatabase)) {
            if (questions.includes(question)) {
                return unit;
            }
        }
        return 'unknown';
    }

    formatUnitName(unit) {
        return unit.split('-').map(word => 
            word.charAt(0).toUpperCase() + word.slice(1)
        ).join(' ');
    }

    showReview() {
        this.showScreen('review-screen');
        
        let reviewHTML = '';
        this.userAnswers.forEach((answer, index) => {
            const isCorrect = answer.correct;
            reviewHTML += `
                <div class="review-question ${isCorrect ? '' : 'incorrect'}">
                    <h4>Question ${index + 1}: ${answer.question.question}</h4>
                    <div class="review-options">
                        ${Object.entries(answer.question.options).map(([key, value]) => {
                            let className = 'review-option';
                            if (key === answer.userAnswer && !isCorrect) {
                                className += ' user-answer';
                            }
                            if (key === answer.question.correct) {
                                className += ' correct-answer';
                            }
                            return `<div class="${className}">${key}. ${value}</div>`;
                        }).join('')}
                    </div>
                    <div class="review-explanation">
                        <strong>Explanation:</strong> ${answer.question.explanation}
                    </div>
                    <div style="margin-top: 10px; font-size: 0.9rem; color: #666;">
                        Your answer: ${answer.userAnswer || 'No answer'} | 
                        Correct answer: ${answer.question.correct} | 
                        Time spent: ${answer.timeSpent}s
                    </div>
                </div>
            `;
        });
        
        this.reviewContainer.innerHTML = reviewHTML;
    }

    downloadReport() {
        const percentage = Math.round((this.score / this.questions.length) * 100);
        const duration = Math.floor((this.quizEndTime - this.quizStartTime) / 60000);
        
        let reportContent = `
PEL121 Communication Skills I - Quiz Report
==========================================

Student Information:
- Name: ${this.studentData.name}
- Student ID: ${this.studentData.id}
- Email: ${this.studentData.email}
- Date: ${new Date().toLocaleDateString()}

Quiz Results:
- Unit: ${this.formatUnitName(this.selectedUnit)}
- Score: ${this.score}/${this.questions.length}
- Percentage: ${percentage}%
- Duration: ${duration} minutes

Detailed Answers:
`;

        this.userAnswers.forEach((answer, index) => {
            reportContent += `
${index + 1}. ${answer.question.question}
   Your Answer: ${answer.userAnswer || 'No answer'}
   Correct Answer: ${answer.question.correct}
   Result: ${answer.correct ? 'Correct' : 'Incorrect'}
   Time Spent: ${answer.timeSpent}s
`;
        });

        const blob = new Blob([reportContent], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `Quiz_Report_${this.studentData.name}_${this.studentData.id}_${new Date().toISOString().split('T')[0]}.txt`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }

    exportRecordsCSV() {
        if (!this.isAdminAuthenticated) return;
        
        const records = JSON.parse(localStorage.getItem('quizRecords') || '[]');
        if (records.length === 0) {
            alert('No records to export');
            return;
        }

        let csvContent = 'Date,Student Name,Student ID,Email,Unit,Score,Total Questions,Percentage,Duration (minutes),Start Time,End Time\n';
        
        records.forEach(record => {
            csvContent += `${record.date},"${record.studentName}","${record.studentId}","${record.email}","${this.formatUnitName(record.unit)}",${record.score},${record.totalQuestions},${record.percentage},${Math.floor(record.duration / 60)},${record.startTime},${record.endTime}\n`;
        });

        const blob = new Blob([csvContent], { type: 'text/csv' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `Quiz_Records_${new Date().toISOString().split('T')[0]}.csv`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }

    clearAllRecords() {
        if (!this.isAdminAuthenticated) return;
        
        if (confirm('Are you sure you want to clear all records? This action cannot be undone.')) {
            localStorage.removeItem('quizRecords');
            this.loadStoredRecords();
            this.updateStatistics();
            alert('All records have been cleared.');
        }
    }

    restartQuiz() {
        this.showScreen('start-screen');
    }

    showScreen(screenId) {
        document.querySelectorAll('.screen').forEach(screen => {
            screen.classList.remove('active');
        });
        document.getElementById(screenId).classList.add('active');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new QuizApp();
});
// Sample questions database
