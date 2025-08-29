// Learn Page JavaScript Functionality

// Learning categories data
const learningCategories = {
    greetings: {
        title: "Basic Greetings",
        lessons: [
            { id: 1, title: "Hello & Goodbye", duration: "5 min", difficulty: "Beginner" },
            { id: 2, title: "Good Morning/Afternoon", duration: "4 min", difficulty: "Beginner" },
            { id: 3, title: "How are you?", duration: "6 min", difficulty: "Beginner" },
            { id: 4, title: "Nice to meet you", duration: "5 min", difficulty: "Beginner" },
            { id: 5, title: "Thank you & Please", duration: "4 min", difficulty: "Beginner" }
        ]
    },
    family: {
        title: "Family & People",
        lessons: [
            { id: 1, title: "Family Members", duration: "8 min", difficulty: "Beginner" },
            { id: 2, title: "Relationships", duration: "7 min", difficulty: "Beginner" },
            { id: 3, title: "Personal Pronouns", duration: "6 min", difficulty: "Beginner" },
            { id: 4, title: "Age & Numbers", duration: "5 min", difficulty: "Beginner" },
            { id: 5, title: "Physical Descriptions", duration: "7 min", difficulty: "Beginner" },
            { id: 6, title: "Emotions & Feelings", duration: "8 min", difficulty: "Beginner" },
            { id: 7, title: "Occupations", duration: "9 min", difficulty: "Beginner" },
            { id: 8, title: "Nationalities", duration: "6 min", difficulty: "Beginner" }
        ]
    },
    food: {
        title: "Food & Dining",
        lessons: [
            { id: 1, title: "Basic Food Items", duration: "6 min", difficulty: "Beginner" },
            { id: 2, title: "Fruits & Vegetables", duration: "7 min", difficulty: "Beginner" },
            { id: 3, title: "Meals & Times", duration: "5 min", difficulty: "Beginner" },
            { id: 4, title: "Cooking & Kitchen", duration: "8 min", difficulty: "Beginner" },
            { id: 5, title: "Restaurant Signs", duration: "9 min", difficulty: "Beginner" },
            { id: 6, title: "Dietary Preferences", duration: "6 min", difficulty: "Beginner" }
        ]
    },
    health: {
        title: "Health & Emergency",
        lessons: [
            { id: 1, title: "Body Parts", duration: "8 min", difficulty: "Intermediate" },
            { id: 2, title: "Medical Terms", duration: "10 min", difficulty: "Intermediate" },
            { id: 3, title: "Emergency Signs", duration: "7 min", difficulty: "Intermediate" },
            { id: 4, title: "Health Questions", duration: "9 min", difficulty: "Intermediate" }
        ]
    },
    education: {
        title: "Education & Work",
        lessons: [
            { id: 1, title: "School Subjects", duration: "8 min", difficulty: "Intermediate" },
            { id: 2, title: "Classroom Signs", duration: "6 min", difficulty: "Intermediate" },
            { id: 3, title: "Workplace Terms", duration: "9 min", difficulty: "Intermediate" },
            { id: 4, title: "Meetings & Presentations", duration: "7 min", difficulty: "Intermediate" },
            { id: 5, title: "Technology Terms", duration: "8 min", difficulty: "Intermediate" },
            { id: 6, title: "Professional Skills", duration: "10 min", difficulty: "Intermediate" },
            { id: 7, title: "Career Development", duration: "9 min", difficulty: "Intermediate" }
        ]
    },
    travel: {
        title: "Travel & Places",
        lessons: [
            { id: 1, title: "Transportation", duration: "7 min", difficulty: "Intermediate" },
            { id: 2, title: "Directions & Location", duration: "8 min", difficulty: "Intermediate" },
            { id: 3, title: "Countries & Cities", duration: "9 min", difficulty: "Intermediate" },
            { id: 4, title: "Tourist Activities", duration: "6 min", difficulty: "Intermediate" },
            { id: 5, title: "Accommodation", duration: "7 min", difficulty: "Intermediate" },
            { id: 6, title: "Cultural Signs", duration: "8 min", difficulty: "Intermediate" }
        ]
    }
};

// User progress tracking
let userProgress = {
    completedLessons: [],
    currentStreak: 0,
    totalTime: 0,
    lastPracticeDate: null
};

// Load user progress from localStorage
function loadUserProgress() {
    const saved = localStorage.getItem('islUserProgress');
    if (saved) {
        userProgress = JSON.parse(saved);
        updateProgressDisplay();
    }
}

// Save user progress to localStorage
function saveUserProgress() {
    localStorage.setItem('islUserProgress', JSON.stringify(userProgress));
}

// Start a learning category
function startCategory(categoryId) {
    const category = learningCategories[categoryId];
    if (category) {
        // Create and show category modal
        showCategoryModal(category);
    }
}

// Show category modal with lessons
function showCategoryModal(category) {
    const modal = document.createElement('div');
    modal.className = 'category-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h2>${category.title}</h2>
                <button class="close-modal" onclick="this.closest('.category-modal').remove()">×</button>
            </div>
            <div class="modal-body">
                <div class="lessons-list">
                    ${category.lessons.map(lesson => `
                        <div class="lesson-item ${isLessonCompleted(category.title, lesson.id) ? 'completed' : ''}">
                            <div class="lesson-info">
                                <h4>${lesson.title}</h4>
                                <div class="lesson-meta">
                                    <span class="duration">${lesson.duration}</span>
                                    <span class="difficulty">${lesson.difficulty}</span>
                                </div>
                            </div>
                            <button class="lesson-btn" onclick="startLesson('${category.title}', ${lesson.id})">
                                ${isLessonCompleted(category.title, lesson.id) ? 'Review' : 'Start'}
                            </button>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Add modal styles
    if (!document.getElementById('modal-styles')) {
        const style = document.createElement('style');
        style.id = 'modal-styles';
        style.textContent = `
            .category-modal {
                position: fixed;
                top: 0;
                left: 0;
                width: 100vw;
                height: 100vh;
                background: rgba(0, 0, 0, 0.8);
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 10000;
            }
            .modal-content {
                background: rgba(44, 47, 84, 0.95);
                border-radius: 20px;
                padding: 2rem;
                max-width: 600px;
                width: 90%;
                max-height: 80vh;
                overflow-y: auto;
                border: 1px solid rgba(123, 47, 242, 0.3);
            }
            .modal-header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-bottom: 1.5rem;
                padding-bottom: 1rem;
                border-bottom: 1px solid rgba(123, 47, 242, 0.3);
            }
            .close-modal {
                background: none;
                border: none;
                color: #fff;
                font-size: 1.5rem;
                cursor: pointer;
                padding: 0.5rem;
                border-radius: 50%;
                transition: background-color 0.3s ease;
            }
            .close-modal:hover {
                background-color: rgba(123, 47, 242, 0.3);
            }
            .lesson-item {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 1rem;
                margin-bottom: 1rem;
                background: rgba(123, 47, 242, 0.1);
                border-radius: 15px;
                border: 1px solid rgba(123, 47, 242, 0.2);
                transition: all 0.3s ease;
            }
            .lesson-item:hover {
                background: rgba(123, 47, 242, 0.2);
                border-color: rgba(123, 47, 242, 0.4);
            }
            .lesson-item.completed {
                background: rgba(76, 175, 80, 0.2);
                border-color: rgba(76, 175, 80, 0.4);
            }
            .lesson-meta {
                display: flex;
                gap: 1rem;
                margin-top: 0.5rem;
            }
            .duration, .difficulty {
                font-size: 0.8rem;
                color: #ccc;
                padding: 0.2rem 0.5rem;
                background: rgba(0, 0, 0, 0.3);
                border-radius: 10px;
            }
            .lesson-btn {
                background: linear-gradient(135deg, #7b2ff2, #f39108);
                border: none;
                color: white;
                padding: 0.5rem 1rem;
                border-radius: 20px;
                cursor: pointer;
                transition: all 0.3s ease;
            }
            .lesson-btn:hover {
                transform: translateY(-2px);
                box-shadow: 0 4px 15px rgba(123, 47, 242, 0.4);
            }
        `;
        document.head.appendChild(style);
    }
}

// Check if lesson is completed
function isLessonCompleted(categoryTitle, lessonId) {
    return userProgress.completedLessons.some(lesson => 
        lesson.category === categoryTitle && lesson.id === lessonId
    );
}

// Start a specific lesson
function startLesson(categoryTitle = null, lessonId = null) {
    if (categoryTitle && lessonId) {
        // Start specific lesson
        console.log(`Starting lesson ${lessonId} from ${categoryTitle}`);
        // Here you would implement the actual lesson interface
        showLessonInterface(categoryTitle, lessonId);
    } else {
        // Start featured lesson
        console.log('Starting featured lesson');
        showLessonInterface('Basic Greetings', 1);
    }
}

// Show lesson interface
function showLessonInterface(categoryTitle, lessonId) {
    // Create lesson interface modal
    const modal = document.createElement('div');
    modal.className = 'lesson-modal';
    modal.innerHTML = `
        <div class="lesson-modal-content">
            <div class="lesson-modal-header">
                <h2>${categoryTitle} - Lesson ${lessonId}</h2>
                <button class="close-lesson-modal" onclick="this.closest('.lesson-modal').remove()">×</button>
            </div>
            <div class="lesson-modal-body">
                <div class="lesson-video-section">
                    <div class="video-player">
                        <div class="video-placeholder-large">
                            <div class="play-button-large">▶️</div>
                            <p>Lesson video will appear here</p>
                        </div>
                    </div>
                </div>
                <div class="lesson-controls">
                    <button class="control-btn" onclick="previousStep()">Previous</button>
                    <button class="control-btn primary" onclick="nextStep()">Next</button>
                    <button class="control-btn" onclick="completeLesson()">Complete Lesson</button>
                </div>
                <div class="lesson-progress-indicator">
                    <div class="step-indicator active">1</div>
                    <div class="step-indicator">2</div>
                    <div class="step-indicator">3</div>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Add lesson modal styles
    if (!document.getElementById('lesson-modal-styles')) {
        const style = document.createElement('style');
        style.id = 'lesson-modal-styles';
        style.textContent = `
            .lesson-modal {
                position: fixed;
                top: 0;
                left: 0;
                width: 100vw;
                height: 100vh;
                background: rgba(0, 0, 0, 0.9);
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 10001;
            }
            .lesson-modal-content {
                background: rgba(44, 47, 84, 0.95);
                border-radius: 20px;
                padding: 2rem;
                max-width: 800px;
                width: 95%;
                max-height: 90vh;
                overflow-y: auto;
                border: 1px solid rgba(123, 47, 242, 0.3);
            }
            .lesson-modal-header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-bottom: 1.5rem;
                padding-bottom: 1rem;
                border-bottom: 1px solid rgba(123, 47, 242, 0.3);
            }
            .close-lesson-modal {
                background: none;
                border: none;
                color: #fff;
                font-size: 1.5rem;
                cursor: pointer;
                padding: 0.5rem;
                border-radius: 50%;
                transition: background-color 0.3s ease;
            }
            .close-lesson-modal:hover {
                background-color: rgba(123, 47, 242, 0.3);
            }
            .video-player {
                width: 100%;
                height: 300px;
                background: #000;
                border-radius: 15px;
                display: flex;
                align-items: center;
                justify-content: center;
                margin-bottom: 1.5rem;
            }
            .video-placeholder-large {
                text-align: center;
                color: #fff;
            }
            .play-button-large {
                font-size: 3rem;
                margin-bottom: 1rem;
                cursor: pointer;
            }
            .lesson-controls {
                display: flex;
                gap: 1rem;
                justify-content: center;
                margin-bottom: 1.5rem;
            }
            .control-btn {
                padding: 0.8rem 1.5rem;
                border: none;
                border-radius: 25px;
                cursor: pointer;
                transition: all 0.3s ease;
                font-weight: 500;
            }
            .control-btn:not(.primary) {
                background: rgba(123, 47, 242, 0.2);
                color: #fff;
                border: 1px solid rgba(123, 47, 242, 0.3);
            }
            .control-btn.primary {
                background: linear-gradient(135deg, #7b2ff2, #f39108);
                color: #fff;
            }
            .control-btn:hover {
                transform: translateY(-2px);
                box-shadow: 0 4px 15px rgba(123, 47, 242, 0.4);
            }
            .lesson-progress-indicator {
                display: flex;
                justify-content: center;
                gap: 1rem;
            }
            .step-indicator {
                width: 40px;
                height: 40px;
                border-radius: 50%;
                background: rgba(123, 47, 242, 0.2);
                border: 2px solid rgba(123, 47, 242, 0.3);
                display: flex;
                align-items: center;
                justify-content: center;
                color: #fff;
                font-weight: 600;
                transition: all 0.3s ease;
            }
            .step-indicator.active {
                background: linear-gradient(135deg, #7b2ff2, #f39108);
                border-color: transparent;
            }
        `;
        document.head.appendChild(style);
    }
}

// Lesson navigation functions
function previousStep() {
    console.log('Previous step');
    // Implement previous step logic
}

function nextStep() {
    console.log('Next step');
    // Implement next step logic
}

// Complete lesson
function completeLesson() {
    // Mark lesson as completed
    const lesson = {
        category: 'Basic Greetings', // This should be dynamic
        id: 1, // This should be dynamic
        completedAt: new Date().toISOString(),
        timeSpent: 5 // This should be tracked
    };
    
    if (!isLessonCompleted(lesson.category, lesson.id)) {
        userProgress.completedLessons.push(lesson);
        userProgress.totalTime += lesson.timeSpent;
        
        // Update streak
        const today = new Date().toDateString();
        if (userProgress.lastPracticeDate !== today) {
            userProgress.currentStreak++;
            userProgress.lastPracticeDate = today;
        }
        
        saveUserProgress();
        updateProgressDisplay();
        
        // Show completion message
        showCompletionMessage();
    }
    
    // Close lesson modal
    document.querySelector('.lesson-modal').remove();
}

// Show completion message
function showCompletionMessage() {
    const message = document.createElement('div');
    message.className = 'completion-message';
    message.innerHTML = `
        <div class="completion-content">
            <div class="completion-icon">🎉</div>
            <h3>Lesson Completed!</h3>
            <p>Great job! You've completed another lesson.</p>
            <button onclick="this.closest('.completion-message').remove()">Continue</button>
        </div>
    `;
    
    document.body.appendChild(message);
    
    // Auto-remove after 3 seconds
    setTimeout(() => {
        if (message.parentNode) {
            message.remove();
        }
    }, 3000);
    
    // Add completion message styles
    if (!document.getElementById('completion-styles')) {
        const style = document.createElement('style');
        style.id = 'completion-styles';
        style.textContent = `
            .completion-message {
                position: fixed;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                background: rgba(44, 47, 84, 0.95);
                border-radius: 20px;
                padding: 2rem;
                text-align: center;
                border: 1px solid rgba(123, 47, 242, 0.3);
                z-index: 10002;
                animation: slideIn 0.3s ease-out;
            }
            @keyframes slideIn {
                from { opacity: 0; transform: translate(-50%, -60%); }
                to { opacity: 1; transform: translate(-50%, -50%); }
            }
            .completion-icon {
                font-size: 3rem;
                margin-bottom: 1rem;
            }
            .completion-content button {
                background: linear-gradient(135deg, #7b2ff2, #f39108);
                border: none;
                color: #fff;
                padding: 0.8rem 1.5rem;
                border-radius: 25px;
                cursor: pointer;
                margin-top: 1rem;
                transition: all 0.3s ease;
            }
            .completion-content button:hover {
                transform: translateY(-2px);
                box-shadow: 0 4px 15px rgba(123, 47, 242, 0.4);
            }
        `;
        document.head.appendChild(style);
    }
}

// Update progress display
function updateProgressDisplay() {
    const totalLessons = Object.values(learningCategories).reduce((total, category) => 
        total + category.lessons.length, 0
    );
    
    const completedCount = userProgress.completedLessons.length;
    const progressPercentage = Math.round((completedCount / totalLessons) * 100);
    
    // Update progress elements
    const progressElements = document.querySelectorAll('.progress-number, .progress-fill');
    progressElements.forEach(element => {
        if (element.classList.contains('progress-number')) {
            element.textContent = `${progressPercentage}%`;
        } else if (element.classList.contains('progress-fill')) {
            element.style.width = `${progressPercentage}%`;
        }
    });
    
    // Update lesson count
    const lessonCountElements = document.querySelectorAll('.progress-card p');
    lessonCountElements.forEach(element => {
        if (element.textContent.includes('lessons completed')) {
            element.textContent = `${completedCount} of ${totalLessons} lessons completed`;
        }
    });
    
    // Update streak
    const streakElements = document.querySelectorAll('.streak-counter');
    streakElements.forEach(element => {
        element.textContent = `${userProgress.currentStreak} days`;
    });
    
    // Update time spent
    const timeElements = document.querySelectorAll('.time-counter');
    timeElements.forEach(element => {
        const hours = Math.round(userProgress.totalTime / 60);
        element.textContent = `${hours} hours`;
    });
}

// Scroll to top function
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Initialize the learn page
document.addEventListener('DOMContentLoaded', function() {
    loadUserProgress();
    
    // Add click event for video placeholder
    const videoPlaceholder = document.querySelector('.video-placeholder');
    if (videoPlaceholder) {
        videoPlaceholder.addEventListener('click', () => startLesson());
    }
    
    // Add hover effects for category cards
    const categoryCards = document.querySelectorAll('.category-card');
    categoryCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
});
