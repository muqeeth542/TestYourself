class QuizApp {
    constructor() {
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.selectedUnit = 'all';
        this.questions = [];
        this.userAnswers = [];
        this.timeLeft = 30;
        this.timer = null;
        this.isAnswered = false;
        
        this.initializeElements();
        this.bindEvents();
    }

    initializeElements() {
        // Screen elements
        this.startScreen = document.getElementById('start-screen');
        this.quizScreen = document.getElementById('quiz-screen');
        this.resultScreen = document.getElementById('result-screen');
        this.reviewScreen = document.getElementById('review-screen');
        
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
    }

    bindEvents() {
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

        document.getElementById('back-to-results').addEventListener('click', () => {
            this.showResults();
        });
    }

    startQuiz() {
        this.loadQuestions();
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.userAnswers = [];
        this.showScreen('quiz-screen');
        this.displayQuestion();
        this.startTimer();
    }

    loadQuestions() {
        if (this.selectedUnit === 'all') {
            this.questions = [];
            Object.values(questionsDatabase).forEach(unitQuestions => {
                this.questions = this.questions.concat(unitQuestions);
            });
            this.questions = this.shuffleArray(this.questions).slice(0, 50);
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
        const question = this.questions[this.currentQuestionIndex];
        this.isAnswered = false;
        
        // Update question text
        this.questionText.textContent = question.question;
        
        // Update options
        this.optionButtons.forEach((btn, index) => {
            const optionKey = Object.keys(question.options)[index];
            btn.textContent = `${optionKey}. ${question.options[optionKey]}`;
            btn.dataset.option = optionKey;
            btn.className = 'option-btn';
            btn.disabled = false;
        });
        
        // Clear feedback and hide next button
        this.feedback.textContent = '';
        this.feedback.className = 'feedback';
        this.nextBtn.style.display = 'none';
        
        // Update progress
        this.updateProgress();
        
        // Reset timer
        this.resetTimer();
    }

    selectOption(selectedBtn) {
        if (this.isAnswered) return;
        
        // Remove previous selections
        this.optionButtons.forEach(btn => {
            btn.classList.remove('selected');
        });
        
        // Mark selected option
        selectedBtn.classList.add('selected');
        
        // Check answer after a short delay for better UX
        setTimeout(() => {
            this.checkAnswer(selectedBtn.dataset.option);
        }, 300);
    }

    checkAnswer(selectedOption) {
        this.isAnswered = true;
        this.stopTimer();
        
        const question = this.questions[this.currentQuestionIndex];
        const isCorrect = selectedOption === question.correct;
        
        // Store user answer
        this.userAnswers.push({
            question: question,
            userAnswer: selectedOption,
            correct: isCorrect,
            timeSpent: 30 - this.timeLeft
        });
        
        // Update score
        if (isCorrect) {
            this.score++;
        }
        
        // Show correct/incorrect styling
        this.optionButtons.forEach(btn => {
            btn.disabled = true;
            if (btn.dataset.option === question.correct) {
                btn.classList.add('correct');
            } else if (btn.dataset.option === selectedOption && !isCorrect) {
                btn.classList.add('incorrect');
            }
        });
        
        // Show feedback
        this.showFeedback(isCorrect, question.explanation);
        
        // Update score display
        this.scoreDisplay.textContent = `Score: ${this.score}`;
        
        // Show next button
        this.nextBtn.style.display = 'block';
        this.nextBtn.textContent = this.currentQuestionIndex === this.questions.length - 1 ? 'Finish Quiz' : 'Next Question';
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
            this.showResults();
        }
    }

    updateProgress() {
        const progress = ((this.currentQuestionIndex + 1) / this.questions.length) * 100;
        this.progressBar.style.width = `${progress}%`;
        this.questionCounter.textContent = `Question ${this.currentQuestionIndex + 1} of ${this.questions.length}`;
    }

    startTimer() {
        this.timeLeft = 30;
        this.updateTimerDisplay();
        
        this.timer = setInterval(() => {
            this.timeLeft--;
            this.updateTimerDisplay();
            
            if (this.timeLeft <= 10) {
                this.timerDisplay.classList.add('warning');
            }
            
            if (this.timeLeft <= 0) {
                this.timeUp();
            }
        }, 1000);
    }

    updateTimerDisplay() {
        this.timerDisplay.textContent = `Time: ${this.timeLeft}s`;
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
        if (!this.isAnswered) {
            this.checkAnswer(''); // Empty answer for timeout
        }
    }

    showResults() {
        this.stopTimer();
        this.showScreen('result-screen');
        
        const percentage = Math.round((this.score / this.questions.length) * 100);
        
        // Display final score
        this.finalScore.innerHTML = `
            <div>${this.score}/${this.questions.length}</div>
            <div style="font-size: 1.5rem; margin-top: 10px;">${percentage}%</div>
        `;
        
        // Performance analysis
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
        `;
        
        // Unit breakdown
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

// Initialize the quiz app when the page loads
document.addEventListener('DOMContentLoaded', () => {
    new QuizApp();
});
