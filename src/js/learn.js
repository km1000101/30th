// Learn Page JavaScript Functionality

// Learning categories data with actual video links and preview images
const learningCategories = {
    greetings: {
        title: "Basic Greetings",
        lessons: [
            { 
                id: 1, 
                title: "Hello & Goodbye", 
                duration: "5 min", 
                difficulty: "Beginner",
                videoUrl: "https://drive.google.com/file/d/1U-Pr4r1-cupgNOOq9NH_uTsQnPSVEKco/view?usp=sharing",
                previewImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop",
                description: "Learn the basic signs for greeting and saying goodbye"
            },
            { 
                id: 2, 
                title: "Good Morning/Afternoon", 
                duration: "4 min", 
                difficulty: "Beginner",
                videoUrl: "https://drive.google.com/file/d/1U-Pr4r1-cupgNOOq9NH_uTsQnPSVEKco/view?usp=sharing",
                previewImage: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
                description: "Time-based greetings for different parts of the day"
            },
            { 
                id: 3, 
                title: "How are you?", 
                duration: "6 min", 
                difficulty: "Beginner",
                videoUrl: "https://drive.google.com/file/d/1U-Pr4r1-cupgNOOq9NH_uTsQnPSVEKco/view?usp=sharing",
                previewImage: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=300&fit=crop",
                description: "Asking about someone's well-being and responding"
            },
            { 
                id: 4, 
                title: "Nice to meet you", 
                duration: "5 min", 
                difficulty: "Beginner",
                videoUrl: "https://drive.google.com/file/d/1U-Pr4r1-cupgNOOq9NH_uTsQnPSVEKco/view?usp=sharing",
                previewImage: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=300&fit=crop",
                description: "Introduction and meeting new people"
            },
            { 
                id: 5, 
                title: "Thank you & Please", 
                duration: "4 min", 
                difficulty: "Beginner",
                videoUrl: "https://drive.google.com/file/d/1U-Pr4r1-cupgNOOq9NH_uTsQnPSVEKco/view?usp=sharing",
                previewImage: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400&h=300&fit=crop",
                description: "Essential polite expressions in sign language"
            }
        ]
    },
    family: {
        title: "Family & People",
        lessons: [
            { 
                id: 1, 
                title: "Family Members", 
                duration: "8 min", 
                difficulty: "Beginner",
                videoUrl: "https://drive.google.com/file/d/1U-Pr4r1-cupgNOOq9NH_uTsQnPSVEKco/view?usp=sharing",
                previewImage: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=400&h=300&fit=crop",
                description: "Signs for immediate family members"
            },
            { 
                id: 2, 
                title: "Relationships", 
                duration: "7 min", 
                difficulty: "Beginner",
                videoUrl: "https://drive.google.com/file/d/1U-Pr4r1-cupgNOOq9NH_uTsQnPSVEKco/view?usp=sharing",
                previewImage: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&h=300&fit=crop",
                description: "Extended family and relationship terms"
            },
            { 
                id: 3, 
                title: "Personal Pronouns", 
                duration: "6 min", 
                difficulty: "Beginner",
                videoUrl: "https://drive.google.com/file/d/1U-Pr4r1-cupgNOOq9NH_uTsQnPSVEKco/view?usp=sharing",
                previewImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
                description: "I, you, he, she, we, they in sign language"
            },
            { 
                id: 4, 
                title: "Age & Numbers", 
                duration: "5 min", 
                difficulty: "Beginner",
                videoUrl: "https://drive.google.com/file/d/1U-Pr4r1-cupgNOOq9NH_uTsQnPSVEKco/view?usp=sharing",
                previewImage: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
                description: "Counting and expressing age"
            },
            { 
                id: 5, 
                title: "Physical Descriptions", 
                duration: "7 min", 
                difficulty: "Beginner",
                videoUrl: "https://drive.google.com/file/d/1U-Pr4r1-cupgNOOq9NH_uTsQnPSVEKco/view?usp=sharing",
                previewImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=300&fit=crop",
                description: "Describing people's appearance"
            },
            { 
                id: 6, 
                title: "Emotions & Feelings", 
                duration: "8 min", 
                difficulty: "Beginner",
                videoUrl: "https://drive.google.com/file/d/1U-Pr4r1-cupgNOOq9NH_uTsQnPSVEKco/view?usp=sharing",
                previewImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=300&fit=crop",
                description: "Expressing emotions and feelings"
            },
            { 
                id: 7, 
                title: "Occupations", 
                duration: "9 min", 
                difficulty: "Beginner",
                videoUrl: "https://drive.google.com/file/d/1U-Pr4r1-cupgNOOq9NH_uTsQnPSVEKco/view?usp=sharing",
                previewImage: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop",
                description: "Common job and profession signs"
            },
            { 
                id: 8, 
                title: "Nationalities", 
                duration: "6 min", 
                difficulty: "Beginner",
                videoUrl: "https://drive.google.com/file/d/1U-Pr4r1-cupgNOOq9NH_uTsQnPSVEKco/view?usp=sharing",
                previewImage: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&h=300&fit=crop",
                description: "Countries and nationalities in sign language"
            }
        ]
    },
    food: {
        title: "Food & Dining",
        lessons: [
            { 
                id: 1, 
                title: "Basic Food Items", 
                duration: "6 min", 
                difficulty: "Beginner",
                videoUrl: "https://drive.google.com/file/d/1U-Pr4r1-cupgNOOq9NH_uTsQnPSVEKco/view?usp=sharing",
                previewImage: "https://images.unsplash.com/photo-1504674900244-1b47e9d6b5a3?w=400&h=300&fit=crop",
                description: "Common food items and meals"
            },
            { 
                id: 2, 
                title: "Fruits & Vegetables", 
                duration: "7 min", 
                difficulty: "Beginner",
                videoUrl: "https://drive.google.com/file/d/1U-Pr4r1-cupgNOOq9NH_uTsQnPSVEKco/view?usp=sharing",
                previewImage: "https://images.unsplash.com/photo-1519996529931-28324d5a630e?w=400&h=300&fit=crop",
                description: "Fresh produce and healthy foods"
            },
            { 
                id: 3, 
                title: "Meals & Times", 
                duration: "5 min", 
                difficulty: "Beginner",
                videoUrl: "https://drive.google.com/file/d/1U-Pr4r1-cupgNOOq9NH_uTsQnPSVEKco/view?usp=sharing",
                previewImage: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop",
                description: "Breakfast, lunch, dinner and meal times"
            },
            { 
                id: 4, 
                title: "Cooking & Kitchen", 
                duration: "8 min", 
                difficulty: "Beginner",
                videoUrl: "https://drive.google.com/file/d/1U-Pr4r1-cupgNOOq9NH_uTsQnPSVEKco/view?usp=sharing",
                previewImage: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop",
                description: "Kitchen utensils and cooking terms"
            },
            { 
                id: 5, 
                title: "Restaurant Signs", 
                duration: "9 min", 
                difficulty: "Beginner",
                videoUrl: "https://drive.google.com/file/d/1U-Pr4r1-cupgNOOq9NH_uTsQnPSVEKco/view?usp=sharing",
                previewImage: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop",
                description: "Dining out and restaurant communication"
            },
            { 
                id: 6, 
                title: "Dietary Preferences", 
                duration: "6 min", 
                difficulty: "Beginner",
                videoUrl: "https://drive.google.com/file/d/1U-Pr4r1-cupgNOOq9NH_uTsQnPSVEKco/view?usp=sharing",
                previewImage: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400&h=300&fit=crop",
                description: "Vegetarian, vegan, and dietary restrictions"
            }
        ]
    },
    health: {
        title: "Health & Emergency",
        lessons: [
            { 
                id: 1, 
                title: "Body Parts", 
                duration: "8 min", 
                difficulty: "Intermediate",
                videoUrl: "https://drive.google.com/file/d/1U-Pr4r1-cupgNOOq9NH_uTsQnPSVEKco/view?usp=sharing",
                previewImage: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
                description: "Anatomy and body part signs"
            },
            { 
                id: 2, 
                title: "Medical Terms", 
                duration: "10 min", 
                difficulty: "Intermediate",
                videoUrl: "https://drive.google.com/file/d/1U-Pr4r1-cupgNOOq9NH_uTsQnPSVEKco/view?usp=sharing",
                previewImage: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop",
                description: "Medical terminology and health conditions"
            },
            { 
                id: 3, 
                title: "Emergency Signs", 
                duration: "7 min", 
                difficulty: "Intermediate",
                videoUrl: "https://drive.google.com/file/d/1U-Pr4r1-cupgNOOq9NH_uTsQnPSVEKco/view?usp=sharing",
                previewImage: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=300&fit=crop",
                description: "Emergency situations and urgent communication"
            },
            { 
                id: 4, 
                title: "Health Questions", 
                duration: "9 min", 
                difficulty: "Intermediate",
                videoUrl: "https://drive.google.com/file/d/1U-Pr4r1-cupgNOOq9NH_uTsQnPSVEKco/view?usp=sharing",
                previewImage: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop",
                description: "Asking and answering health-related questions"
            }
        ]
    },
    education: {
        title: "Education & Work",
        lessons: [
            { 
                id: 1, 
                title: "School Subjects", 
                duration: "8 min", 
                difficulty: "Intermediate",
                videoUrl: "https://drive.google.com/file/d/1U-Pr4r1-cupgNOOq9NH_uTsQnPSVEKco/view?usp=sharing",
                previewImage: "https://images.unsplash.com/photo-1523050854058-8df90110c9e1?w=400&h=300&fit=crop",
                description: "Academic subjects and learning areas"
            },
            { 
                id: 2, 
                title: "Classroom Signs", 
                duration: "6 min", 
                difficulty: "Intermediate",
                videoUrl: "https://drive.google.com/file/d/1U-Pr4r1-cupgNOOq9NH_uTsQnPSVEKco/view?usp=sharing",
                previewImage: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=400&h=300&fit=crop",
                description: "Classroom communication and instructions"
            },
            { 
                id: 3, 
                title: "Workplace Terms", 
                duration: "9 min", 
                difficulty: "Intermediate",
                videoUrl: "https://drive.google.com/file/d/1U-Pr4r1-cupgNOOq9NH_uTsQnPSVEKco/view?usp=sharing",
                previewImage: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=400&h=300&fit=crop",
                description: "Professional and workplace vocabulary"
            },
            { 
                id: 4, 
                title: "Meetings & Presentations", 
                duration: "7 min", 
                difficulty: "Intermediate",
                videoUrl: "https://drive.google.com/file/d/1U-Pr4r1-cupgNOOq9NH_uTsQnPSVEKco/view?usp=sharing",
                previewImage: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=400&h=300&fit=crop",
                description: "Business meetings and presentation skills"
            },
            { 
                id: 5, 
                title: "Technology Terms", 
                duration: "8 min", 
                difficulty: "Intermediate",
                videoUrl: "https://drive.google.com/file/d/1U-Pr4r1-cupgNOOq9NH_uTsQnPSVEKco/view?usp=sharing",
                previewImage: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop",
                description: "Digital and technology-related signs"
            },
            { 
                id: 6, 
                title: "Professional Skills", 
                duration: "10 min", 
                difficulty: "Intermediate",
                videoUrl: "https://drive.google.com/file/d/1U-Pr4r1-cupgNOOq9NH_uTsQnPSVEKco/view?usp=sharing",
                previewImage: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop",
                description: "Skills and competencies in the workplace"
            },
            { 
                id: 7, 
                title: "Career Development", 
                duration: "9 min", 
                difficulty: "Intermediate",
                videoUrl: "https://drive.google.com/file/d/1U-Pr4r1-cupgNOOq9NH_uTsQnPSVEKco/view?usp=sharing",
                previewImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop",
                description: "Career growth and professional development"
            }
        ]
    },
    travel: {
        title: "Travel & Places",
        lessons: [
            { 
                id: 1, 
                title: "Transportation", 
                duration: "7 min", 
                difficulty: "Intermediate",
                videoUrl: "https://drive.google.com/file/d/1U-Pr4r1-cupgNOOq9NH_uTsQnPSVEKco/view?usp=sharing",
                previewImage: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=300&fit=crop",
                description: "Different modes of transportation"
            },
            { 
                id: 2, 
                title: "Directions & Location", 
                duration: "8 min", 
                difficulty: "Intermediate",
                videoUrl: "https://drive.google.com/file/d/1U-Pr4r1-cupgNOOq9NH_uTsQnPSVEKco/view?usp=sharing",
                previewImage: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=300&fit=crop",
                description: "Giving and following directions"
            },
            { 
                id: 3, 
                title: "Countries & Cities", 
                duration: "9 min", 
                difficulty: "Intermediate",
                videoUrl: "https://drive.google.com/file/d/1U-Pr4r1-cupgNOOq9NH_uTsQnPSVEKco/view?usp=sharing",
                previewImage: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&h=300&fit=crop",
                description: "Geographic locations and place names"
            },
            { 
                id: 4, 
                title: "Tourist Activities", 
                duration: "6 min", 
                difficulty: "Intermediate",
                videoUrl: "https://drive.google.com/file/d/1U-Pr4r1-cupgNOOq9NH_uTsQnPSVEKco/view?usp=sharing",
                previewImage: "https://images.unsplash.com/photo-1527631746610-bca00a040d63?w=400&h=300&fit=crop",
                description: "Sightseeing and tourist activities"
            },
            { 
                id: 5, 
                title: "Accommodation", 
                duration: "7 min", 
                difficulty: "Intermediate",
                videoUrl: "https://drive.google.com/file/d/1U-Pr4r1-cupgNOOq9NH_uTsQnPSVEKco/view?usp=sharing",
                previewImage: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop",
                description: "Hotels, booking, and accommodation terms"
            },
            { 
                id: 6, 
                title: "Cultural Signs", 
                duration: "8 min", 
                difficulty: "Intermediate",
                videoUrl: "https://drive.google.com/file/d/1U-Pr4r1-cupgNOOq9NH_uTsQnPSVEKco/view?usp=sharing",
                previewImage: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=400&h=300&fit=crop",
                description: "Cultural events and traditions"
            }
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
    try {
        const category = learningCategories[categoryId];
        if (category) {
            // Create and show category modal
            showCategoryModal(category);
        } else {
            console.error(`Category ${categoryId} not found`);
            alert('Sorry, this category is not available at the moment.');
        }
    } catch (error) {
        console.error('Error starting category:', error);
        alert('Sorry, there was an error loading this category. Please try again.');
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
                <div class="lessons-grid">
                    ${category.lessons.map(lesson => `
                        <div class="lesson-card ${isLessonCompleted(category.title, lesson.id) ? 'completed' : ''}">
                            <div class="lesson-preview">
                                <img src="${lesson.previewImage}" alt="${lesson.title}" class="lesson-thumbnail">
                                <div class="lesson-overlay">
                                    <div class="play-icon">▶️</div>
                                </div>
                            </div>
                            <div class="lesson-info">
                                <h4>${lesson.title}</h4>
                                <p class="lesson-description">${lesson.description}</p>
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
            .lessons-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                gap: 1.5rem;
                padding: 1rem 0;
            }
            .lesson-card {
                background: rgba(123, 47, 242, 0.1);
                border-radius: 15px;
                border: 1px solid rgba(123, 47, 242, 0.2);
                transition: all 0.3s ease;
                overflow: hidden;
            }
            .lesson-card:hover {
                background: rgba(123, 47, 242, 0.2);
                border-color: rgba(123, 47, 242, 0.4);
                transform: translateY(-5px);
            }
            .lesson-card.completed {
                background: rgba(76, 175, 80, 0.2);
                border-color: rgba(76, 175, 80, 0.4);
            }
            .lesson-preview {
                position: relative;
                height: 200px;
                overflow: hidden;
            }
            .lesson-thumbnail {
                width: 100%;
                height: 100%;
                object-fit: cover;
                transition: transform 0.3s ease;
            }
            .lesson-card:hover .lesson-thumbnail {
                transform: scale(1.05);
            }
            .lesson-overlay {
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background: rgba(0, 0, 0, 0.4);
                display: flex;
                align-items: center;
                justify-content: center;
                opacity: 0;
                transition: opacity 0.3s ease;
            }
            .lesson-card:hover .lesson-overlay {
                opacity: 1;
            }
            .play-icon {
                font-size: 2rem;
                color: white;
                background: rgba(123, 47, 242, 0.8);
                border-radius: 50%;
                width: 60px;
                height: 60px;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            .lesson-info {
                padding: 1rem;
            }
            .lesson-description {
                color: #ccc;
                font-size: 0.9rem;
                margin: 0.5rem 0;
                line-height: 1.4;
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
    try {
        if (categoryTitle && lessonId) {
            // Start specific lesson
            console.log(`Starting lesson ${lessonId} from ${categoryTitle}`);
            showLessonInterface(categoryTitle, lessonId);
        } else {
            // Start featured lesson
            console.log('Starting featured lesson');
            showLessonInterface('Basic Greetings', 1);
        }
    } catch (error) {
        console.error('Error starting lesson:', error);
        alert('Sorry, there was an error starting the lesson. Please try again.');
    }
}

// Show lesson interface
function showLessonInterface(categoryTitle, lessonId) {
    // Find the lesson data
    let lesson = null;
    for (const categoryKey in learningCategories) {
        const category = learningCategories[categoryKey];
        if (category.title === categoryTitle) {
            lesson = category.lessons.find(l => l.id === lessonId);
            break;
        }
    }
    
    if (!lesson) {
        console.error('Lesson not found');
        return;
    }
    
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
                        <iframe 
                            src="${lesson.videoUrl.replace('/view?usp=sharing', '/preview')}" 
                            width="100%" 
                            height="400" 
                            frameborder="0" 
                            allowfullscreen
                            class="lesson-video">
                        </iframe>
                        <div class="coming-soon-text">Coming Soon</div>
                    </div>
                    <div class="lesson-details">
                        <h3>${lesson.title}</h3>
                        <p class="lesson-description">${lesson.description}</p>
                        <div class="lesson-meta">
                            <span class="duration">${lesson.duration}</span>
                            <span class="difficulty">${lesson.difficulty}</span>
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
    
    // Reset step indicators for new lesson
    currentStep = 1;
    setTimeout(() => {
        updateStepIndicators();
    }, 100);
    
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
                height: 400px;
                background: #000;
                border-radius: 15px;
                margin-bottom: 1.5rem;
                overflow: hidden;
                position: relative;
            }
            .lesson-video {
                width: 100%;
                height: 100%;
                border-radius: 15px;
            }
            .coming-soon-text {
                position: absolute;
                bottom: 20px;
                left: 50%;
                transform: translateX(-50%);
                background: rgba(123, 47, 242, 0.9);
                color: #fff;
                padding: 8px 16px;
                border-radius: 20px;
                font-size: 14px;
                font-weight: 500;
                border: 1px solid rgba(123, 47, 242, 0.3);
                backdrop-filter: blur(10px);
                z-index: 10;
            }
            .lesson-details {
                margin-bottom: 1.5rem;
                padding: 1rem;
                background: rgba(123, 47, 242, 0.1);
                border-radius: 15px;
                border: 1px solid rgba(123, 47, 242, 0.2);
            }
            .lesson-details h3 {
                margin: 0 0 0.5rem 0;
                color: #fff;
            }
            .lesson-details .lesson-description {
                color: #ccc;
                margin-bottom: 1rem;
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
let currentStep = 1;
const totalSteps = 3;

function previousStep() {
    if (currentStep > 1) {
        currentStep--;
        updateStepIndicators();
        console.log(`Moved to step ${currentStep}`);
    }
}

function nextStep() {
    if (currentStep < totalSteps) {
        currentStep++;
        updateStepIndicators();
        console.log(`Moved to step ${currentStep}`);
    }
}

function updateStepIndicators() {
    const indicators = document.querySelectorAll('.step-indicator');
    indicators.forEach((indicator, index) => {
        if (index + 1 === currentStep) {
            indicator.classList.add('active');
        } else {
            indicator.classList.remove('active');
        }
    });
}

// Complete lesson
function completeLesson() {
    // Get current lesson info from the modal
    const modal = document.querySelector('.lesson-modal');
    if (!modal) {
        console.error('Lesson modal not found');
        return;
    }
    
    const modalHeader = modal.querySelector('.lesson-modal-header h2');
    if (!modalHeader) {
        console.error('Lesson modal header not found');
        return;
    }
    
    // Extract category and lesson info from the header
    const headerText = modalHeader.textContent;
    const parts = headerText.split(' - Lesson ');
    const categoryTitle = parts[0];
    const lessonId = parseInt(parts[1]) || 1;
    
    // Mark lesson as completed
    const lesson = {
        category: categoryTitle,
        id: lessonId,
        completedAt: new Date().toISOString(),
        timeSpent: 5 // This should be tracked in a real implementation
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
    modal.remove();
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

// Initialize chat functionality for learn page
function initializeChatFunctionality() {
    const chatBubble = document.getElementById('chat-bubble');
    const chatWindow = document.getElementById('chat-window');
    const closeChat = document.getElementById('close-chat');
    const chatInput = document.getElementById('chat-input');
    const chatSend = document.getElementById('chat-send');
    const chatBody = document.getElementById('chat-body');

    if (!chatBubble || !chatWindow || !closeChat || !chatInput || !chatSend || !chatBody) {
        console.warn('Chat elements not found on learn page');
        return;
    }

    // Chat functionality
    chatBubble.addEventListener('click', () => {
        chatWindow.style.display = 'flex';
        chatBubble.style.display = 'none';
        chatInput.focus();
    });

    closeChat.addEventListener('click', () => {
        chatWindow.style.display = 'none';
        chatBubble.style.display = 'flex';
    });

    chatSend.addEventListener('click', async () => {
        await sendMessage();
    });

    chatInput.addEventListener('keypress', async (e) => {
        if (e.key === 'Enter') {
            await sendMessage();
        }
    });

    async function sendMessage() {
        const userMessage = chatInput.value.trim();
        if (userMessage === '') return;

        appendMessage(userMessage, 'user');
        chatInput.value = '';

        // Show typing indicator
        const typingIndicator = appendMessage('Typing...', 'bot');
        
        try {
            const botResponse = await getBotResponse(userMessage);
            
            // Remove typing indicator and show actual response
            typingIndicator.remove();
            appendMessage(botResponse, 'bot');
        } catch (error) {
            typingIndicator.remove();
            appendMessage('Sorry, I encountered an error. Please try again.', 'bot');
        }
    }

    function appendMessage(message, sender) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('chat-message', sender);
        const p = document.createElement('p');
        p.innerText = message;
        messageElement.appendChild(p);
        chatBody.appendChild(messageElement);
        chatBody.scrollTop = chatBody.scrollHeight;
        return messageElement;
    }

    async function getBotResponse(message) {
        const apiKey = 'AIzaSyCDbO3317S6nblaTpbcAa6iLzfqAf6YaQ8';
        const endpoint = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=' + apiKey;

        // Allowed topics keywords for broader matching
        const allowedTopics = [
            'sign language','what is sign language','why is sign laguage used', 'gesture', 'deaf', 'hard-of-hearing', 'media pipe', 
            'tensorflow', 'machine learning', 'project', 'technology', 'tech',
            'model', 'webcam', 'pose', 'hand tracking', 'pytorch', 'deep learning',
            'ai', 'artificial intelligence', 'computer vision', 'neural network' , 'what' , 'why not pytorch?' , 'what is tensorflow?',
            'learn', 'learning', 'lesson', 'practice', 'education', 'tutorial', 'course'
        ];

        const lowerCaseMessage = message.toLowerCase();

        // Check if message contains ANY allowed topic word as substring
        const isAllowed = allowedTopics.some(topic => lowerCaseMessage.includes(topic));
        
        if (!isAllowed) {
            return "Sorry, I can only answer questions about sign language, learning, or the technology used in this project. Feel free to ask about lessons, MediaPipe, TensorFlow, computer vision, or sign language in general!";
        }

        try {
            const response = await fetch(endpoint, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    contents: [{
                        parts: [{
                            text: `Answer only about sign language learning, lessons, or the technology used in this sign language detection project. Stay on topic and be helpful. Question: "${message}"`
                        }]
                    }]
                })
            });
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            const data = await response.json();

            if (data && data.candidates && data.candidates[0] && data.candidates[0].content && data.candidates[0].content.parts[0].text) {
                let responseText = data.candidates[0].content.parts[0].text;

                // Replace markdown headers with bold text
                responseText = responseText.replace(/^#+\s*(.*)$/gm, (_, title) => `\n${title}\n`);
                // Replace markdown bold (**text**) with just text
                responseText = responseText.replace(/\*\*(.*?)\*\*/g, '$1');
                // Replace markdown italics (*text*) with just text
                responseText = responseText.replace(/\*(.*?)\*/g, '$1');
                // Replace markdown lists with simple bullet points
                responseText = responseText.replace(/^\s*[-*]\s+/gm, '• ');
                // Remove code block markers
                responseText = responseText.replace(/```[\s\S]*?```/g, '');
                // Remove horizontal rules
                responseText = responseText.replace(/^---$/gm, '');

                // Trim extra newlines
                responseText = responseText.replace(/\n{3,}/g, '\n\n').trim();
                return responseText;
            } else {
                return "Sorry, I couldn't get a proper response from the AI service. Please try asking your question again.";
            }
        } catch (error) {
            console.error('Chat API error:', error);
            return "Sorry, there was an error connecting to the AI service. Please check your internet connection and try again.";
        }
    }

    // Keyboard navigation for accessibility
    document.addEventListener('keydown', (e) => {
        // Escape key to close chat
        if (e.key === 'Escape' && chatWindow.style.display === 'flex') {
            chatWindow.style.display = 'none';
            chatBubble.style.display = 'flex';
        }
        
        // Ctrl/Cmd + K to open chat
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
            e.preventDefault();
            if (chatWindow.style.display !== 'flex') {
                chatWindow.style.display = 'flex';
                chatBubble.style.display = 'none';
                chatInput.focus();
            }
        }
    });
}

// Initialize floating action button
function initializeFloatingActionButton() {
    const floatingActionBtn = document.querySelector('.floating-action-btn');
    
    if (!floatingActionBtn) {
        console.warn('Floating action button not found');
        return;
    }

    // Add click event listener
    floatingActionBtn.addEventListener('click', scrollToTop);

    // Show/hide button based on scroll position
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            floatingActionBtn.style.display = 'flex';
            floatingActionBtn.style.opacity = '1';
        } else {
            floatingActionBtn.style.opacity = '0';
            setTimeout(() => {
                if (window.pageYOffset <= 300) {
                    floatingActionBtn.style.display = 'none';
                }
            }, 300);
        }
    });

    // Initially hide the button
    floatingActionBtn.style.display = 'none';
    floatingActionBtn.style.opacity = '0';
    floatingActionBtn.style.transition = 'opacity 0.3s ease';
}

// Initialize the learn page
document.addEventListener('DOMContentLoaded', function() {
    loadUserProgress();
    
    // Add click event for video placeholder
    const videoPlaceholder = document.querySelector('.video-placeholder');
    if (videoPlaceholder) {
        videoPlaceholder.addEventListener('click', () => startLesson());
    }
    
    // Add click event for featured video preview
    const featuredVideoPreview = document.querySelector('.featured-video-preview');
    if (featuredVideoPreview) {
        featuredVideoPreview.addEventListener('click', () => startLesson());
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
    
    // Initialize chat functionality for learn page
    initializeChatFunctionality();
    
    // Initialize floating action button
    initializeFloatingActionButton();
});
