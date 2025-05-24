const questionsDatabase = {
    "parts-of-speech": [
        {
            question: "Which type of noun is 'happiness' in the sentence 'Happiness is the key to success'?",
            options: {
                A: "Concrete noun",
                B: "Abstract noun", 
                C: "Proper noun",
                D: "Collective noun"
            },
            correct: "B",
            explanation: "Abstract nouns refer to ideas, concepts, or emotions that cannot be touched or seen physically. 'Happiness' is an emotion, making it an abstract noun."
        },
        {
            question: "Choose the correct possessive form: 'The _______ books are on the shelf.'",
            options: {
                A: "childrens",
                B: "children's",
                C: "childrens'", 
                D: "childrens's"
            },
            correct: "B",
            explanation: "For irregular plural nouns like 'children', add apostrophe + s ('s) to form the possessive."
        },
        {
            question: "Which sentence uses a reflexive pronoun correctly?",
            options: {
                A: "John and myself went to the store",
                B: "I bought myself a new book",
                C: "Give the book to myself",
                D: "Myself completed the assignment"
            },
            correct: "B",
            explanation: "Reflexive pronouns are used when the subject and object refer to the same person. 'I bought myself a new book' correctly shows the subject 'I' performing action on 'myself'."
        },
        {
            question: "Select the superlative form: 'This is the _______ movie I have ever watched.'",
            options: {
                A: "more interesting",
                B: "most interesting",
                C: "interestinger",
                D: "interestingest"
            },
            correct: "B",
            explanation: "For adjectives with three or more syllables, use 'most' + adjective to form the superlative degree."
        },
        {
            question: "Choose the correct preposition: 'The meeting is scheduled _______ Monday morning.'",
            options: {
                A: "in",
                B: "on",
                C: "at",
                D: "for"
            },
            correct: "B",
            explanation: "Use 'on' with specific days and dates. 'On Monday morning' is the correct usage."
        },
        {
            question: "Identify the demonstrative pronoun: '_______ books on the table belong to me.'",
            options: {
                A: "This",
                B: "These",
                C: "That",
                D: "Those"
            },
            correct: "D",
            explanation: "'Those' is a demonstrative pronoun referring to plural objects at a distance from the speaker."
        },
        {
            question: "Choose the correct comparative form: 'This exercise is _______ than the previous one.'",
            options: {
                A: "more difficult",
                B: "most difficult", 
                C: "difficulter",
                D: "difficultly"
            },
            correct: "A",
            explanation: "For adjectives with three or more syllables, use 'more' + adjective to form the comparative degree."
        },
        {
            question: "Which type of pronoun is 'themselves' in 'The students prepared themselves for the exam'?",
            options: {
                A: "Personal pronoun",
                B: "Possessive pronoun",
                C: "Reflexive pronoun", 
                D: "Demonstrative pronoun"
            },
            correct: "C",
            explanation: "'Themselves' is a reflexive pronoun used when the subject and object of the sentence refer to the same people."
        }
    ],
    
    "tenses": [
        {
            question: "Complete with the correct present perfect form: 'She _______ three novels this year.'",
            options: {
                A: "has written",
                B: "have written",
                C: "had written",
                D: "will write"
            },
            correct: "A",
            explanation: "Present perfect tense uses 'has/have + past participle'. Since 'she' is third person singular, use 'has written'."
        },
        {
            question: "Choose the correct past continuous: 'While I _______, the phone rang.'",
            options: {
                A: "was study",
                B: "was studying", 
                C: "were studying",
                D: "had studied"
            },
            correct: "B",
            explanation: "Past continuous tense uses 'was/were + verb-ing'. For first person singular 'I', use 'was studying'."
        },
        {
            question: "Form the correct question tag: 'They haven't arrived yet, _______?'",
            options: {
                A: "have they",
                B: "haven't they",
                C: "did they",
                D: "didn't they"
            },
            correct: "A",
            explanation: "When the main clause is negative ('haven't'), the question tag should be positive ('have they')."
        },
        {
            question: "Which sentence shows future perfect tense?",
            options: {
                A: "I will complete the work tomorrow",
                B: "I will have completed the work by tomorrow",
                C: "I am completing the work tomorrow", 
                D: "I have completed the work tomorrow"
            },
            correct: "B",
            explanation: "Future perfect tense uses 'will have + past participle' to show an action that will be completed before a specific time in the future."
        },
        {
            question: "Choose the correct negative form of 'He speaks English fluently.'",
            options: {
                A: "He don't speak English fluently",
                B: "He doesn't speaks English fluently",
                C: "He doesn't speak English fluently",
                D: "He not speak English fluently"
            },
            correct: "C",
            explanation: "For third person singular in simple present, use 'doesn't + base form of verb'."
        },
        {
            question: "Complete with the correct future perfect continuous tense: 'By next year, I _______ here for five years.'",
            options: {
                A: "will be working",
                B: "will have been working",
                C: "will work",
                D: "have been working"
            },
            correct: "B",
            explanation: "Future perfect continuous uses 'will have been + verb-ing' to show duration of an action up to a point in the future."
        },
        {
            question: "Choose the correct past perfect form: 'She _______ the assignment before the deadline.'",
            options: {
                A: "has completed",
                B: "had completed",
                C: "will complete",
                D: "completes"
            },
            correct: "B",
            explanation: "Past perfect tense uses 'had + past participle' to show an action completed before another past action."
        }
    ],
    
    "modals": [
        {
            question: "Complete with the appropriate modal for obligation: 'All students _______ attend the orientation program.'",
            options: {
                A: "may",
                B: "might", 
                C: "must",
                D: "could"
            },
            correct: "C",
            explanation: "'Must' expresses strong obligation or necessity. Students are required to attend the orientation."
        },
        {
            question: "Choose the correct modal for past ability: 'When I was young, I _______ swim very well.'",
            options: {
                A: "can",
                B: "could",
                C: "may",
                D: "might"
            },
            correct: "B",
            explanation: "'Could' is used to express past ability or what someone was able to do in the past."
        },
        {
            question: "Which sentence expresses prohibition correctly?",
            options: {
                A: "You mustn't smoke here",
                B: "You don't have to smoke here",
                C: "You needn't smoke here",
                D: "You couldn't smoke here"
            },
            correct: "A",
            explanation: "'Mustn't' expresses prohibition - something that is not allowed or forbidden."
        },
        {
            question: "Complete with the correct modal for advice: 'You _______ consult a doctor about your headaches.'",
            options: {
                A: "must",
                B: "should",
                C: "can", 
                D: "will"
            },
            correct: "B",
            explanation: "'Should' is used to give advice or recommendations."
        },
        {
            question: "Choose the appropriate modal for permission: '_______ I use your computer for a moment?'",
            options: {
                A: "Must",
                B: "Should",
                C: "May",
                D: "Will"
            },
            correct: "C",
            explanation: "'May' is used to ask for permission politely."
        },
        {
            question: "Which sentence shows correct usage of modal for possibility?",
            options: {
                A: "It must rain tomorrow",
                B: "It should rain tomorrow", 
                C: "It might rain tomorrow",
                D: "It will rain tomorrow"
            },
            correct: "C",
            explanation: "'Might' expresses possibility - something that could happen but is not certain."
        },
        {
            question: "Complete with appropriate modal: 'You _______ have informed me earlier.'",
            options: {
                A: "should",
                B: "must",
                C: "can",
                D: "will"
            },
            correct: "A",
            explanation: "'Should have + past participle' expresses regret or criticism about a past action that didn't happen."
        }
    ],
    
    "articles": [
        {
            question: "Choose the correct articles: 'I saw _______ old man feeding _______ birds in the park.'",
            options: {
                A: "a, the",
                B: "an, the",
                C: "the, a",
                D: "an, a"
            },
            correct: "B",
            explanation: "Use 'an' before words starting with vowel sounds ('old'), and 'the' for specific things already mentioned or understood ('the birds')."
        },
        {
            question: "Complete with the appropriate article: '_______ English is spoken worldwide.'",
            options: {
                A: "A",
                B: "An",
                C: "The", 
                D: "No article"
            },
            correct: "D",
            explanation: "Language names don't take articles when referring to the language in general."
        },
        {
            question: "Which sentence uses the definite article correctly?",
            options: {
                A: "The Mount Everest is the highest peak",
                B: "Mount Everest is the highest peak",
                C: "A Mount Everest is the highest peak",
                D: "An Mount Everest is the highest peak"
            },
            correct: "B",
            explanation: "Mountain names don't take articles unless they're part of a range. 'Mount Everest' doesn't need 'the'."
        },
        {
            question: "Choose the correct usage: 'She plays _______ guitar and _______ tennis.'",
            options: {
                A: "the, the",
                B: "a, a",
                C: "the, no article",
                D: "no article, the"
            },
            correct: "C",
            explanation: "Musical instruments take 'the' (the guitar), but sports don't take articles (tennis)."
        },
        {
            question: "Complete: '_______ honesty and _______ integrity are important values.'",
            options: {
                A: "The, the",
                B: "A, an",
                C: "No article, no article",
                D: "An, a"
            },
            correct: "C",
            explanation: "Abstract nouns used in general sense don't take articles."
        },
        {
            question: "Choose the correct articles: 'I need _______ pen and _______ eraser.'",
            options: {
                A: "a, a",
                B: "a, an",
                C: "an, a",
                D: "the, the"
            },
            correct: "B",
            explanation: "Use 'a' before consonant sounds (pen) and 'an' before vowel sounds (eraser)."
        },
        {
            question: "Complete with the appropriate article: '_______ honesty is the best policy.'",
            options: {
                A: "A",
                B: "An", 
                C: "The",
                D: "No article"
            },
            correct: "D",
            explanation: "Abstract nouns used in general statements don't take articles."
        }
    ],
    
    "active-passive": [
        {
            question: "Convert to passive voice: 'The committee will announce the results tomorrow.'",
            options: {
                A: "The results will be announced by the committee tomorrow",
                B: "The results are announced by the committee tomorrow",
                C: "The results were announced by the committee tomorrow",
                D: "The results have been announced by the committee tomorrow"
            },
            correct: "A",
            explanation: "Future tense active (will + verb) becomes future passive (will be + past participle)."
        },
        {
            question: "Which sentence is in passive voice?",
            options: {
                A: "The students completed the project",
                B: "The project was completed by the students",
                C: "The students are completing the project",
                D: "The students will complete the project"
            },
            correct: "B",
            explanation: "Passive voice uses 'be + past participle'. The subject receives the action rather than performing it."
        },
        {
            question: "Choose the correct active form of 'The cake is being baked by my mother.'",
            options: {
                A: "My mother bakes the cake",
                B: "My mother baked the cake",
                C: "My mother is baking the cake",
                D: "My mother has baked the cake"
            },
            correct: "C",
            explanation: "Present continuous passive (is being + past participle) becomes present continuous active (is + verb-ing)."
        },
        {
            question: "Convert to passive: 'Someone has stolen my bicycle.'",
            options: {
                A: "My bicycle has been stolen",
                B: "My bicycle was stolen",
                C: "My bicycle is stolen",
                D: "My bicycle will be stolen"
            },
            correct: "A",
            explanation: "Present perfect active (has + past participle) becomes present perfect passive (has been + past participle)."
        },
        {
            question: "Which passive construction is grammatically correct?",
            options: {
                A: "The letter was wrote by him",
                B: "The letter was written by him",
                C: "The letter has wrote by him", 
                D: "The letter is wrote by him"
            },
            correct: "B",
            explanation: "Passive voice requires the past participle form. 'Written' is the past participle of 'write', not 'wrote'."
        },
        {
            question: "Choose the correct passive form: 'They are painting the house.'",
            options: {
                A: "The house is painted by them",
                B: "The house was being painted by them",
                C: "The house is being painted by them",
                D: "The house has been painted by them"
            },
            correct: "C",
            explanation: "Present continuous active (are + verb-ing) becomes present continuous passive (is/are being + past participle)."
        },
        {
            question: "Convert to active: 'The problem has been solved by the team.'",
            options: {
                A: "The team solve the problem",
                B: "The team solved the problem",
                C: "The team has solved the problem",
                D: "The team is solving the problem"
            },
            correct: "C",
            explanation: "Present perfect passive (has been + past participle) becomes present perfect active (has + past participle)."
        }
    ],
    
    "phrasal-verbs": [
        {
            question: "Choose the correct phrasal verb: 'Please _______ your shoes before entering.'",
            options: {
                A: "take off",
                B: "take up",
                C: "take in",
                D: "take over"
            },
            correct: "A",
            explanation: "'Take off' means to remove something, especially clothing or shoes."
        },
        {
            question: "Complete: 'I need to _______ this problem before the meeting.'",
            options: {
                A: "sort out",
                B: "sort up",
                C: "sort in",
                D: "sort through"
            },
            correct: "A",
            explanation: "'Sort out' means to resolve or deal with a problem or difficult situation."
        },
        {
            question: "What does 'put up with' mean?",
            options: {
                A: "to construct",
                B: "to tolerate",
                C: "to postpone",
                D: "to organize"
            },
            correct: "B",
            explanation: "'Put up with' means to tolerate or endure something unpleasant without complaining."
        },
        {
            question: "Choose the correct phrasal verb: 'The company decided to _______ the new employee.'",
            options: {
                A: "take on",
                B: "take off",
                C: "take up",
                D: "take in"
            },
            correct: "A",
            explanation: "'Take on' means to hire or employ someone, or to accept a responsibility or challenge."
        },
        {
            question: "Complete: 'Don't _______ on your dreams.'",
            options: {
                A: "give up",
                B: "give in",
                C: "give out",
                D: "give away"
            },
            correct: "A",
            explanation: "'Give up' means to stop trying or to quit doing something."
        },
        {
            question: "Choose the correct phrasal verb: 'I need to _______ some information about the course.'",
            options: {
                A: "find out",
                B: "find up",
                C: "find in",
                D: "find over"
            },
            correct: "A",
            explanation: "'Find out' means to discover or learn information about something."
        },
        {
            question: "What does 'run into' mean in 'I ran into my old friend yesterday'?",
            options: {
                A: "to collide with",
                B: "to meet unexpectedly",
                C: "to chase",
                D: "to avoid"
            },
            correct: "B",
            explanation: "'Run into' can mean to meet someone unexpectedly or by chance."
        },
        {
            question: "Complete: 'The meeting was _______ due to bad weather.'",
            options: {
                A: "called up",
                B: "called off",
                C: "called in",
                D: "called out"
            },
            correct: "B",
            explanation: "'Call off' means to cancel an event or activity."
        }
    ]
};
