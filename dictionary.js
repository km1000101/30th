// Dictionary Page JavaScript Functionality

// Signs database
const signsDatabase = {
    greetings: [
        { id: 'hello', name: 'Hello', gif: 'ISL_Gifs/hello.gif', difficulty: 'beginner', description: 'A friendly greeting sign', category: 'greetings' },
        { id: 'thank you', name: 'Thank You', gif: 'ISL_Gifs/thank you.gif', difficulty: 'beginner', description: 'Expression of gratitude', category: 'greetings' },
        { id: 'good morning', name: 'Good Morning', gif: 'ISL_Gifs/good morning.gif', difficulty: 'beginner', description: 'Morning greeting', category: 'greetings' },
        { id: 'good afternoon', name: 'Good Afternoon', gif: 'ISL_Gifs/good afternoon.gif', difficulty: 'beginner', description: 'Afternoon greeting', category: 'greetings' },
        { id: 'nice to meet you', name: 'Nice to Meet You', gif: 'ISL_Gifs/nice to meet you.gif', difficulty: 'beginner', description: 'Pleasure to meet someone', category: 'greetings' }
    ],
    family: [
        { id: 'family', name: 'Family', gif: 'ISL_Gifs/family.gif', difficulty: 'beginner', description: 'Family members', category: 'family' },
        { id: 'mother', name: 'Mother', gif: 'ISL_Gifs/mother.gif', difficulty: 'beginner', description: 'Mother or mom', category: 'family' },
        { id: 'father', name: 'Father', gif: 'ISL_Gifs/father.gif', difficulty: 'beginner', description: 'Father or dad', category: 'family' },
        { id: 'sister', name: 'Sister', gif: 'ISL_Gifs/sister.gif', difficulty: 'beginner', description: 'Sister', category: 'family' },
        { id: 'brother', name: 'Brother', gif: 'ISL_Gifs/brother.gif', difficulty: 'beginner', description: 'Brother', category: 'family' }
    ],
    food: [
        { id: 'food', name: 'Food', gif: 'ISL_Gifs/food.gif', difficulty: 'beginner', description: 'General food sign', category: 'food' },
        { id: 'water', name: 'Water', gif: 'ISL_Gifs/water.gif', difficulty: 'beginner', description: 'Water or drink', category: 'food' },
        { id: 'bread', name: 'Bread', gif: 'ISL_Gifs/bread.gif', difficulty: 'beginner', description: 'Bread or loaf', category: 'food' },
        { id: 'milk', name: 'Milk', gif: 'ISL_Gifs/milk.gif', difficulty: 'beginner', description: 'Milk', category: 'food' },
        { id: 'rice', name: 'Rice', gif: 'ISL_Gifs/rice.gif', difficulty: 'beginner', description: 'Rice or grain', category: 'food' }
    ],
    health: [
        { id: 'doctor', name: 'Doctor', gif: 'ISL_Gifs/doctor.gif', difficulty: 'intermediate', description: 'Medical doctor', category: 'health' },
        { id: 'hospital', name: 'Hospital', gif: 'ISL_Gifs/hospital.gif', difficulty: 'intermediate', description: 'Hospital or medical center', category: 'health' },
        { id: 'medicine', name: 'Medicine', gif: 'ISL_Gifs/medicine.gif', difficulty: 'intermediate', description: 'Medicine or medication', category: 'health' },
        { id: 'pain', name: 'Pain', gif: 'ISL_Gifs/pain.gif', difficulty: 'intermediate', description: 'Pain or hurt', category: 'health' },
        { id: 'help', name: 'Help', gif: 'ISL_Gifs/help.gif', difficulty: 'intermediate', description: 'Help or assistance', category: 'health' }
    ],
    education: [
        { id: 'school', name: 'School', gif: 'ISL_Gifs/school.gif', difficulty: 'intermediate', description: 'Educational institution', category: 'education' },
        { id: 'teacher', name: 'Teacher', gif: 'ISL_Gifs/teacher.gif', difficulty: 'intermediate', description: 'Teacher or instructor', category: 'education' },
        { id: 'student', name: 'Student', gif: 'ISL_Gifs/student.gif', difficulty: 'intermediate', description: 'Student or learner', category: 'education' },
        { id: 'book', name: 'Book', gif: 'ISL_Gifs/book.gif', difficulty: 'intermediate', description: 'Book or reading material', category: 'education' },
        { id: 'learn', name: 'Learn', gif: 'ISL_Gifs/learn.gif', difficulty: 'intermediate', description: 'To learn or study', category: 'education' }
    ],
    travel: [
        { id: 'car', name: 'Car', gif: 'ISL_Gifs/car.gif', difficulty: 'intermediate', description: 'Automobile or vehicle', category: 'travel' },
        { id: 'bus', name: 'Bus', gif: 'ISL_Gifs/bus.gif', difficulty: 'intermediate', description: 'Bus or public transport', category: 'travel' },
        { id: 'train', name: 'Train', gif: 'ISL_Gifs/train.gif', difficulty: 'intermediate', description: 'Train or railway', category: 'travel' },
        { id: 'airplane', name: 'Airplane', gif: 'ISL_Gifs/airplane.gif', difficulty: 'intermediate', description: 'Airplane or aircraft', category: 'travel' },
        { id: 'hotel', name: 'Hotel', gif: 'ISL_Gifs/hotel.gif', difficulty: 'intermediate', description: 'Hotel or accommodation', category: 'travel' }
    ],
    emotions: [
        { id: 'i love you', name: 'I Love You', gif: 'ISL_Gifs/i love you.gif', difficulty: 'beginner', description: 'Expression of love and affection', category: 'emotions' },
        { id: 'happy', name: 'Happy', gif: 'ISL_Gifs/happy.gif', difficulty: 'beginner', description: 'Happy or joyful', category: 'emotions' },
        { id: 'sad', name: 'Sad', gif: 'ISL_Gifs/sad.gif', difficulty: 'beginner', description: 'Sad or unhappy', category: 'emotions' },
        { id: 'angry', name: 'Angry', gif: 'ISL_Gifs/angry.gif', difficulty: 'beginner', description: 'Angry or mad', category: 'emotions' },
        { id: 'surprised', name: 'Surprised', gif: 'ISL_Gifs/surprised.gif', difficulty: 'beginner', description: 'Surprised or shocked', category: 'emotions' }
    ],
    numbers: [
        { id: 'one', name: 'One', gif: 'ISL_Gifs/one.gif', difficulty: 'beginner', description: 'Number one', category: 'numbers' },
        { id: 'two', name: 'Two', gif: 'ISL_Gifs/two.gif', difficulty: 'beginner', description: 'Number two', category: 'numbers' },
        { id: 'three', name: 'Three', gif: 'ISL_Gifs/three.gif', difficulty: 'beginner', description: 'Number three', category: 'numbers' },
        { id: 'four', name: 'Four', gif: 'ISL_Gifs/four.gif', difficulty: 'beginner', description: 'Number four', category: 'numbers' },
        { id: 'five', name: 'Five', gif: 'ISL_Gifs/five.gif', difficulty: 'beginner', description: 'Number five', category: 'numbers' }
    ],
    colors: [
        { id: 'red', name: 'Red', gif: 'ISL_Gifs/red.gif', difficulty: 'beginner', description: 'Color red', category: 'colors' },
        { id: 'blue', name: 'Blue', gif: 'ISL_Gifs/blue.gif', difficulty: 'beginner', description: 'Color blue', category: 'colors' },
        { id: 'green', name: 'Green', gif: 'ISL_Gifs/green.gif', difficulty: 'beginner', description: 'Color green', category: 'colors' },
        { id: 'yellow', name: 'Yellow', gif: 'ISL_Gifs/yellow.gif', difficulty: 'beginner', description: 'Color yellow', category: 'colors' },
        { id: 'black', name: 'Black', gif: 'ISL_Gifs/black.gif', difficulty: 'beginner', description: 'Color black', category: 'colors' }
    ]
};

// Current state
let currentView = 'grid';
let currentCategory = '';
let currentDifficulty = '';
let searchQuery = '';

// Initialize the dictionary page
document.addEventListener('DOMContentLoaded', function() {
    loadAllSigns();
    setupEventListeners();
    setupCategoryButtons();
});

// Setup event listeners
function setupEventListeners() {
    const searchInput = document.getElementById('search-input');
    const categoryFilter = document.getElementById('category-filter');
    const difficultyFilter = document.getElementById('difficulty-filter');
    const viewButtons = document.querySelectorAll('.view-btn');

    // Search input
    searchInput.addEventListener('input', function() {
        searchQuery = this.value.toLowerCase();
        filterSigns();
    });

    // Category filter
    categoryFilter.addEventListener('change', function() {
        currentCategory = this.value;
        filterSigns();
    });

    // Difficulty filter
    difficultyFilter.addEventListener('change', function() {
        currentDifficulty = this.value;
        filterSigns();
    });

    // View toggle
    viewButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const view = this.dataset.view;
            setView(view);
        });
    });
}

// Setup category buttons
function setupCategoryButtons() {
    const categoryButtons = document.querySelectorAll('.category-btn');
    
    categoryButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const category = this.dataset.category;
            setCategory(category);
        });
    });
}

// Set category filter
function setCategory(category) {
    currentCategory = category;
    
    // Update active button
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.category === category) {
            btn.classList.add('active');
        }
    });
    
    // Update category filter dropdown
    document.getElementById('category-filter').value = category;
    
    filterSigns();
}

// Set view mode
function setView(view) {
    currentView = view;
    
    // Update active button
    document.querySelectorAll('.view-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.view === view) {
            btn.classList.add('active');
        }
    });
    
    // Update container class
    const container = document.getElementById('signs-container');
    container.className = `signs-${view}`;
    
    // Reload signs with new view
    filterSigns();
}

// Load all signs
function loadAllSigns() {
    const allSigns = [];
    Object.values(signsDatabase).forEach(category => {
        allSigns.push(...category);
    });
    
    displaySigns(allSigns);
    updateResultsCount(allSigns.length);
}

// Filter signs based on current criteria
function filterSigns() {
    let filteredSigns = [];
    
    // Get all signs
    Object.values(signsDatabase).forEach(category => {
        filteredSigns.push(...category);
    });
    
    // Apply category filter
    if (currentCategory) {
        filteredSigns = filteredSigns.filter(sign => sign.category === currentCategory);
    }
    
    // Apply difficulty filter
    if (currentDifficulty) {
        filteredSigns = filteredSigns.filter(sign => sign.difficulty === currentDifficulty);
    }
    
    // Apply search filter
    if (searchQuery) {
        filteredSigns = filteredSigns.filter(sign => 
            sign.name.toLowerCase().includes(searchQuery) ||
            sign.description.toLowerCase().includes(searchQuery)
        );
    }
    
    displaySigns(filteredSigns);
    updateResultsCount(filteredSigns.length);
}

// Display signs in the container
function displaySigns(signs) {
    const container = document.getElementById('signs-container');
    
    if (signs.length === 0) {
        container.innerHTML = `
            <div class="no-results">
                <div class="no-results-icon">🔍</div>
                <h3>No signs found</h3>
                <p>Try adjusting your search criteria or filters</p>
            </div>
        `;
        return;
    }
    
    const signsHTML = signs.map(sign => createSignCard(sign)).join('');
    container.innerHTML = signsHTML;
}

// Create sign card HTML
function createSignCard(sign) {
    return `
        <div class="sign-card" data-category="${sign.category}" data-difficulty="${sign.difficulty}">
            <div class="sign-video">
                <img src="${sign.gif}" alt="${sign.name} sign" class="sign-gif" onerror="this.src='ISL_Gifs/placeholder.gif'">
                <div class="play-overlay" onclick="playSign('${sign.id}')">▶️</div>
            </div>
            <div class="sign-info">
                <h3>${sign.name}</h3>
                <p class="sign-description">${sign.description}</p>
                <div class="sign-meta">
                    <span class="difficulty ${sign.difficulty}">${sign.difficulty.charAt(0).toUpperCase() + sign.difficulty.slice(1)}</span>
                    <span class="category">${sign.category.charAt(0).toUpperCase() + sign.category.slice(1)}</span>
                </div>
                <button class="learn-sign-btn" onclick="showSignDetails('${sign.id}')">Learn More</button>
            </div>
        </div>
    `;
}

// Update results count
function updateResultsCount(count) {
    const resultsCount = document.getElementById('results-count');
    if (count === 0) {
        resultsCount.textContent = 'No signs found';
    } else if (count === 1) {
        resultsCount.textContent = 'Showing 1 sign';
    } else {
        resultsCount.textContent = `Showing ${count} signs`;
    }
}

// Search signs function
function searchSigns() {
    const searchInput = document.getElementById('search-input');
    searchQuery = searchInput.value.toLowerCase();
    filterSigns();
}

// Play sign animation
function playSign(signId) {
    console.log(`Playing sign: ${signId}`);
    // Here you could implement video playback or animation
}

// Show sign details
function showSignDetails(signId) {
    // Find the sign in the database
    let sign = null;
    for (const category of Object.values(signsDatabase)) {
        sign = category.find(s => s.id === signId);
        if (sign) break;
    }
    
    if (!sign) return;
    
    // Create and show details modal
    showSignModal(sign);
}

// Show sign details modal
function showSignModal(sign) {
    const modal = document.createElement('div');
    modal.className = 'sign-modal';
    modal.innerHTML = `
        <div class="sign-modal-content">
            <div class="sign-modal-header">
                <h2>${sign.name}</h2>
                <button class="close-sign-modal" onclick="this.closest('.sign-modal').remove()">×</button>
            </div>
            <div class="sign-modal-body">
                <div class="sign-demo">
                    <img src="${sign.gif}" alt="${sign.name} sign demonstration" class="sign-gif-large">
                    <div class="sign-controls">
                        <button class="control-btn" onclick="playSign('${sign.id}')">Play</button>
                        <button class="control-btn" onclick="slowMotion('${sign.id}')">Slow Motion</button>
                    </div>
                </div>
                <div class="sign-details">
                    <div class="detail-section">
                        <h3>Description</h3>
                        <p>${sign.description}</p>
                    </div>
                    <div class="detail-section">
                        <h3>How to Sign</h3>
                        <div class="signing-steps">
                            <div class="step">
                                <span class="step-number">1</span>
                                <p>Position your hands as shown in the demonstration</p>
                            </div>
                            <div class="step">
                                <span class="step-number">2</span>
                                <p>Follow the hand movement pattern</p>
                            </div>
                            <div class="step">
                                <span class="step-number">3</span>
                                <p>Practice the sign slowly at first</p>
                            </div>
                        </div>
                    </div>
                    <div class="detail-section">
                        <h3>Tips</h3>
                        <ul class="sign-tips">
                            <li>Keep your hands steady and clear</li>
                            <li>Practice in front of a mirror</li>
                            <li>Start slow and increase speed gradually</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Add modal styles if not already present
    if (!document.getElementById('sign-modal-styles')) {
        const style = document.createElement('style');
        style.id = 'sign-modal-styles';
        style.textContent = `
            .sign-modal {
                position: fixed;
                top: 0;
                left: 0;
                width: 100vw;
                height: 100vh;
                background: rgba(0, 0, 0, 0.9);
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 10000;
            }
            .sign-modal-content {
                background: rgba(44, 47, 84, 0.95);
                border-radius: 20px;
                padding: 2rem;
                max-width: 900px;
                width: 95%;
                max-height: 90vh;
                overflow-y: auto;
                border: 1px solid rgba(123, 47, 242, 0.3);
            }
            .sign-modal-header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-bottom: 2rem;
                padding-bottom: 1rem;
                border-bottom: 1px solid rgba(123, 47, 242, 0.3);
            }
            .close-sign-modal {
                background: none;
                border: none;
                color: #fff;
                font-size: 1.5rem;
                cursor: pointer;
                padding: 0.5rem;
                border-radius: 50%;
                transition: background-color 0.3s ease;
            }
            .close-sign-modal:hover {
                background-color: rgba(123, 47, 242, 0.3);
            }
            .sign-demo {
                text-align: center;
                margin-bottom: 2rem;
            }
            .sign-gif-large {
                width: 100%;
                max-width: 400px;
                border-radius: 15px;
                margin-bottom: 1rem;
            }
            .sign-controls {
                display: flex;
                gap: 1rem;
                justify-content: center;
            }
            .control-btn {
                background: rgba(123, 47, 242, 0.2);
                border: 1px solid rgba(123, 47, 242, 0.3);
                color: #fff;
                padding: 0.5rem 1rem;
                border-radius: 20px;
                cursor: pointer;
                transition: all 0.3s ease;
            }
            .control-btn:hover {
                background: rgba(123, 47, 242, 0.4);
                border-color: rgba(123, 47, 242, 0.6);
            }
            .detail-section {
                margin-bottom: 2rem;
            }
            .detail-section h3 {
                color: #f39108;
                margin-bottom: 1rem;
                font-size: 1.3rem;
            }
            .signing-steps .step {
                display: flex;
                align-items: center;
                gap: 1rem;
                margin-bottom: 1rem;
                padding: 1rem;
                background: rgba(123, 47, 242, 0.1);
                border-radius: 10px;
            }
            .step-number {
                width: 30px;
                height: 30px;
                background: linear-gradient(135deg, #7b2ff2, #f39108);
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                color: white;
                font-weight: 600;
            }
            .sign-tips ul {
                list-style: none;
                padding: 0;
            }
            .sign-tips li {
                padding: 0.5rem 0;
                border-bottom: 1px solid rgba(123, 47, 242, 0.2);
            }
            .sign-tips li:before {
                content: '💡';
                margin-right: 0.5rem;
            }
        `;
        document.head.appendChild(style);
    }
}

// Slow motion function
function slowMotion(signId) {
    console.log(`Slow motion for sign: ${signId}`);
    // Here you could implement slow motion playback
}

// Scroll to top function
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}
