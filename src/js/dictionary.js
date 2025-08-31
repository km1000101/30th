// Dictionary Page JavaScript Functionality

// Signs database - Updated to use only available GIFs from gifs folder
const signsDatabase = {
    greetings: [
        { id: 'hello', name: 'Hello', gif: '../assets/gifs/hello.gif', difficulty: 'beginner', description: 'A friendly greeting sign', category: 'greetings' },
        { id: 'thank you', name: 'Thank You', gif: '../assets/gifs/thank you.gif', difficulty: 'beginner', description: 'Expression of gratitude', category: 'greetings' },
        { id: 'good morning', name: 'Good Morning', gif: '../assets/gifs/good morning.gif', difficulty: 'beginner', description: 'Morning greeting', category: 'greetings' },
        { id: 'good afternoon', name: 'Good Afternoon', gif: '../assets/gifs/good afternoon.gif', difficulty: 'beginner', description: 'Afternoon greeting', category: 'greetings' },
        { id: 'nice to meet you', name: 'Nice to Meet You', gif: '../assets/gifs/nice to meet you.gif', difficulty: 'beginner', description: 'Pleasure to meet someone', category: 'greetings' },
        { id: 'how are you', name: 'How Are You', gif: '../assets/gifs/how are you.gif', difficulty: 'beginner', description: 'Asking about someone\'s well-being', category: 'greetings' },
        { id: 'good question', name: 'Good Question', gif: '../assets/gifs/good question.gif', difficulty: 'intermediate', description: 'Acknowledging a good question', category: 'greetings' },
        { id: 'any questions', name: 'Any Questions', gif: '../assets/gifs/any questions.gif', difficulty: 'intermediate', description: 'Asking if there are any questions', category: 'greetings' }
    ],
    emotions: [
        { id: 'i love you', name: 'I Love You', gif: '../assets/gifs/i love you.gif', difficulty: 'beginner', description: 'Expression of love and affection', category: 'emotions' },
        { id: 'love you', name: 'Love You', gif: '../assets/gifs/love you.gif', difficulty: 'beginner', description: 'Expression of love', category: 'emotions' },
        { id: 'i am fine', name: 'I Am Fine', gif: '../assets/gifs/i am fine.gif', difficulty: 'beginner', description: 'Expressing well-being', category: 'emotions' },
        { id: 'i am sorry', name: 'I Am Sorry', gif: '../assets/gifs/i am sorry.gif', difficulty: 'beginner', description: 'Apologizing', category: 'emotions' },
        { id: 'i am tired', name: 'I Am Tired', gif: '../assets/gifs/i am tired.gif', difficulty: 'intermediate', description: 'Expressing fatigue', category: 'emotions' },
        { id: 'i am thinking', name: 'I Am Thinking', gif: '../assets/gifs/i am thinking.gif', difficulty: 'intermediate', description: 'Expressing thought process', category: 'emotions' },
        { id: 'dont worry', name: 'Don\'t Worry', gif: '../assets/gifs/dont worry.gif', difficulty: 'intermediate', description: 'Reassuring someone', category: 'emotions' },
        { id: 'take care', name: 'Take Care', gif: '../assets/gifs/take care.gif', difficulty: 'intermediate', description: 'Wishing someone well', category: 'emotions' },
        { id: 'you are wrong', name: 'You Are Wrong', gif: '../assets/gifs/you are wrong.gif', difficulty: 'intermediate', description: 'Disagreeing with someone', category: 'emotions' },
        { id: 'are you angry', name: 'Are You Angry', gif: '../assets/gifs/are you angry.gif', difficulty: 'intermediate', description: 'Asking about anger', category: 'emotions' },
        { id: 'are you busy', name: 'Are You Busy', gif: '../assets/gifs/are you busy.gif', difficulty: 'intermediate', description: 'Asking about availability', category: 'emotions' },
        { id: 'are you hungry', name: 'Are You Hungry', gif: '../assets/gifs/are you hungry.gif', difficulty: 'intermediate', description: 'Asking about hunger', category: 'emotions' },
        { id: 'are you ok', name: 'Are You OK', gif: '../assets/gifs/are you ok.gif', difficulty: 'intermediate', description: 'Checking on someone\'s well-being', category: 'emotions' },
        { id: 'are you okay', name: 'Are You Okay', gif: '../assets/gifs/are you okay.gif', difficulty: 'intermediate', description: 'Checking on someone\'s condition', category: 'emotions' }
    ],
    food: [
        { id: 'banana', name: 'Banana', gif: '../assets/gifs/banana.gif', difficulty: 'beginner', description: 'Banana fruit', category: 'food' },
        { id: 'grapes', name: 'Grapes', gif: '../assets/gifs/grapes.gif', difficulty: 'beginner', description: 'Grape fruit', category: 'food' },
        { id: 'mango', name: 'Mango', gif: '../assets/gifs/mango.gif', difficulty: 'beginner', description: 'Mango fruit', category: 'food' },
        { id: 'tomato', name: 'Tomato', gif: '../assets/gifs/tomato.gif', difficulty: 'beginner', description: 'Tomato vegetable', category: 'food' },
        { id: 'lets go for lunch', name: 'Let\'s Go for Lunch', gif: '../assets/gifs/lets go for lunch.gif', difficulty: 'intermediate', description: 'Inviting for lunch', category: 'food' },
        { id: 'do you want something to drink', name: 'Do You Want Something to Drink', gif: '../assets/gifs/do you want something to drink.gif', difficulty: 'advanced', description: 'Offering a drink', category: 'food' }
    ],
    places: [
        { id: 'address', name: 'Address', gif: '../assets/gifs/address.gif', difficulty: 'intermediate', description: 'Location or address', category: 'places' },
        { id: 'ahemdabad', name: 'Ahmedabad', gif: '../assets/gifs/ahemdabad.gif', difficulty: 'intermediate', description: 'City of Ahmedabad', category: 'places' },
        { id: 'assam', name: 'Assam', gif: '../assets/gifs/assam.gif', difficulty: 'intermediate', description: 'State of Assam', category: 'places' },
        { id: 'banglore', name: 'Bangalore', gif: '../assets/gifs/banglore.gif', difficulty: 'intermediate', description: 'City of Bangalore', category: 'places' },
        { id: 'banaras', name: 'Banaras', gif: '../assets/gifs/banaras.gif', difficulty: 'intermediate', description: 'City of Banaras', category: 'places' },
        { id: 'bridge', name: 'Bridge', gif: '../assets/gifs/bridge.gif', difficulty: 'intermediate', description: 'Bridge structure', category: 'places' },
        { id: 'church', name: 'Church', gif: '../assets/gifs/church.gif', difficulty: 'intermediate', description: 'Church building', category: 'places' },
        { id: 'cilinic', name: 'Clinic', gif: '../assets/gifs/cilinic.gif', difficulty: 'intermediate', description: 'Medical clinic', category: 'places' },
        { id: 'hyderabad', name: 'Hyderabad', gif: '../assets/gifs/hyderabad.gif', difficulty: 'intermediate', description: 'City of Hyderabad', category: 'places' },
        { id: 'karnataka', name: 'Karnataka', gif: '../assets/gifs/karnataka.gif', difficulty: 'intermediate', description: 'State of Karnataka', category: 'places' },
        { id: 'kerala', name: 'Kerala', gif: '../assets/gifs/kerala.gif', difficulty: 'intermediate', description: 'State of Kerala', category: 'places' },
        { id: 'mumbai', name: 'Mumbai', gif: '../assets/gifs/mumbai.gif', difficulty: 'intermediate', description: 'City of Mumbai', category: 'places' },
        { id: 'nagpur', name: 'Nagpur', gif: '../assets/gifs/nagpur.gif', difficulty: 'intermediate', description: 'City of Nagpur', category: 'places' },
        { id: 'pakistan', name: 'Pakistan', gif: '../assets/gifs/pakistan.gif', difficulty: 'intermediate', description: 'Country of Pakistan', category: 'places' },
        { id: 'police station', name: 'Police Station', gif: '../assets/gifs/police station.gif', difficulty: 'intermediate', description: 'Police station', category: 'places' },
        { id: 'post office', name: 'Post Office', gif: '../assets/gifs/post office.gif', difficulty: 'intermediate', description: 'Post office', category: 'places' },
        { id: 'pune', name: 'Pune', gif: '../assets/gifs/pune.gif', difficulty: 'intermediate', description: 'City of Pune', category: 'places' },
        { id: 'punjab', name: 'Punjab', gif: '../assets/gifs/punjab.gif', difficulty: 'intermediate', description: 'State of Punjab', category: 'places' },
        { id: 'shop', name: 'Shop', gif: '../assets/gifs/shop.gif', difficulty: 'intermediate', description: 'Shop or store', category: 'places' },
        { id: 'temple', name: 'Temple', gif: '../assets/gifs/temple.gif', difficulty: 'intermediate', description: 'Temple building', category: 'places' },
        { id: 'toilet', name: 'Toilet', gif: '../assets/gifs/toilet.gif', difficulty: 'intermediate', description: 'Bathroom or toilet', category: 'places' },
        { id: 'usa', name: 'USA', gif: '../assets/gifs/usa.gif', difficulty: 'intermediate', description: 'United States of America', category: 'places' },
        { id: 'village', name: 'Village', gif: '../assets/gifs/village.gif', difficulty: 'intermediate', description: 'Village or rural area', category: 'places' },
        { id: 'where is the bathroom', name: 'Where is the Bathroom', gif: '../assets/gifs/where is the bathroom.gif', difficulty: 'intermediate', description: 'Asking for bathroom location', category: 'places' },
        { id: 'where is the police station', name: 'Where is the Police Station', gif: '../assets/gifs/where is the police station.gif', difficulty: 'intermediate', description: 'Asking for police station location', category: 'places' }
    ],
    time: [
        { id: 'august', name: 'August', gif: '../assets/gifs/august.gif', difficulty: 'intermediate', description: 'Month of August', category: 'time' },
        { id: 'december', name: 'December', gif: '../assets/gifs/december.gif', difficulty: 'intermediate', description: 'Month of December', category: 'time' },
        { id: 'july', name: 'July', gif: '../assets/gifs/july.gif', difficulty: 'intermediate', description: 'Month of July', category: 'time' },
        { id: 'june', name: 'June', gif: '../assets/gifs/june.gif', difficulty: 'intermediate', description: 'Month of June', category: 'time' },
        { id: 'may', name: 'May', gif: '../assets/gifs/may.gif', difficulty: 'intermediate', description: 'Month of May', category: 'time' },
        { id: 'saturday', name: 'Saturday', gif: '../assets/gifs/saturday.gif', difficulty: 'intermediate', description: 'Day of the week', category: 'time' },
        { id: 'thursday', name: 'Thursday', gif: '../assets/gifs/thursday.gif', difficulty: 'intermediate', description: 'Day of the week', category: 'time' },
        { id: 'tuesday', name: 'Tuesday', gif: '../assets/gifs/tuesday.gif', difficulty: 'intermediate', description: 'Day of the week', category: 'time' },
        { id: 'wednesday', name: 'Wednesday', gif: '../assets/gifs/wednesday.gif', difficulty: 'intermediate', description: 'Day of the week', category: 'time' },
        { id: 'what is today\'s date', name: 'What is Today\'s Date', gif: '../assets/gifs/what is today\'s date.gif', difficulty: 'intermediate', description: 'Asking for current date', category: 'time' },
        { id: 'shall we go together tommorow', name: 'Shall We Go Together Tomorrow', gif: '../assets/gifs/shall we go together tommorow.gif', difficulty: 'advanced', description: 'Making plans for tomorrow', category: 'time' }
    ],
    actions: [
        { id: 'all', name: 'All', gif: '../assets/gifs/all.gif', difficulty: 'beginner', description: 'Everything or all', category: 'actions' },
        { id: 'be careful', name: 'Be Careful', gif: '../assets/gifs/be careful.gif', difficulty: 'intermediate', description: 'Warning to be cautious', category: 'actions' },
        { id: 'did you finish homework', name: 'Did You Finish Homework', gif: '../assets/gifs/did you finish homework.gif', difficulty: 'advanced', description: 'Asking about homework completion', category: 'actions' },
        { id: 'do not know', name: 'Do Not Know', gif: '../assets/gifs/do not know.gif', difficulty: 'intermediate', description: 'Expressing lack of knowledge', category: 'actions' },
        { id: 'do you have money', name: 'Do You Have Money', gif: '../assets/gifs/do you have money.gif', difficulty: 'intermediate', description: 'Asking about money', category: 'actions' },
        { id: 'do you watch TV', name: 'Do You Watch TV', gif: '../assets/gifs/do you watch TV.gif', difficulty: 'intermediate', description: 'Asking about TV watching', category: 'actions' },
        { id: 'flower is beautiful', name: 'Flower is Beautiful', gif: '../assets/gifs/flower is beautiful.gif', difficulty: 'intermediate', description: 'Complimenting a flower', category: 'actions' },
        { id: 'i am a clerk', name: 'I Am a Clerk', gif: '../assets/gifs/i am a clerk.gif', difficulty: 'intermediate', description: 'Stating occupation', category: 'actions' },
        { id: 'i go to a theatre', name: 'I Go to a Theatre', gif: '../assets/gifs/i go to a theatre.gif', difficulty: 'intermediate', description: 'Stating activity', category: 'actions' },
        { id: 'i had to say something but I forgot', name: 'I Had to Say Something but I Forgot', gif: '../assets/gifs/i had to say something but I forgot.gif', difficulty: 'advanced', description: 'Expressing forgotten thought', category: 'actions' },
        { id: 'i like pink colour', name: 'I Like Pink Colour', gif: '../assets/gifs/i like pink colour.gif', difficulty: 'intermediate', description: 'Expressing color preference', category: 'actions' },
        { id: 'i love to shop', name: 'I Love to Shop', gif: '../assets/gifs/i love to shop.gif', difficulty: 'intermediate', description: 'Expressing shopping preference', category: 'actions' },
        { id: 'job', name: 'Job', gif: '../assets/gifs/job.gif', difficulty: 'intermediate', description: 'Work or employment', category: 'actions' },
        { id: 'mile', name: 'Mile', gif: '../assets/gifs/mile.gif', difficulty: 'intermediate', description: 'Distance measurement', category: 'actions' },
        { id: 'open the door', name: 'Open the Door', gif: '../assets/gifs/open the door.gif', difficulty: 'intermediate', description: 'Instruction to open door', category: 'actions' },
        { id: 'please call me later', name: 'Please Call Me Later', gif: '../assets/gifs/please call me later.gif', difficulty: 'intermediate', description: 'Request for later call', category: 'actions' },
        { id: 'please wait for sometime', name: 'Please Wait for Sometime', gif: '../assets/gifs/please wait for sometime.gif', difficulty: 'intermediate', description: 'Request to wait', category: 'actions' },
        { id: 'shall I help you', name: 'Shall I Help You', gif: '../assets/gifs/shall I help you.gif', difficulty: 'intermediate', description: 'Offering help', category: 'actions' },
        { id: 'sign language interpreter', name: 'Sign Language Interpreter', gif: '../assets/gifs/sign language interpreter.gif', difficulty: 'intermediate', description: 'Professional interpreter', category: 'actions' },
        { id: 'sit down', name: 'Sit Down', gif: '../assets/gifs/sit down.gif', difficulty: 'beginner', description: 'Instruction to sit', category: 'actions' },
        { id: 'stand up', name: 'Stand Up', gif: '../assets/gifs/stand up.gif', difficulty: 'beginner', description: 'Instruction to stand', category: 'actions' },
        { id: 'there was traffic jam', name: 'There Was Traffic Jam', gif: '../assets/gifs/there was traffic jam.gif', difficulty: 'intermediate', description: 'Explaining traffic situation', category: 'actions' },
        { id: 'what are you doing', name: 'What Are You Doing', gif: '../assets/gifs/what are you doing.gif', difficulty: 'intermediate', description: 'Asking about current activity', category: 'actions' },
        { id: 'what is the problem', name: 'What is the Problem', gif: '../assets/gifs/what is the problem.gif', difficulty: 'intermediate', description: 'Asking about issues', category: 'actions' },
        { id: 'what is your father do', name: 'What is Your Father Do', gif: '../assets/gifs/what is your father do.gif', difficulty: 'intermediate', description: 'Asking about father\'s occupation', category: 'actions' },
        { id: 'what is your mobile number', name: 'What is Your Mobile Number', gif: '../assets/gifs/what is your mobile number.gif', difficulty: 'intermediate', description: 'Asking for phone number', category: 'actions' },
        { id: 'what is your name', name: 'What is Your Name', gif: '../assets/gifs/what is your name.gif', difficulty: 'intermediate', description: 'Asking for name', category: 'actions' },
        { id: 'whats up', name: 'What\'s Up', gif: '../assets/gifs/whats up.gif', difficulty: 'intermediate', description: 'Casual greeting', category: 'actions' }
    ],
    culture: [
        { id: 'christmas', name: 'Christmas', gif: '../assets/gifs/christmas.gif', difficulty: 'intermediate', description: 'Christmas celebration', category: 'culture' },
        { id: 'dasara', name: 'Dasara', gif: '../assets/gifs/dasara.gif', difficulty: 'intermediate', description: 'Dasara festival', category: 'culture' },
        { id: 'hindu', name: 'Hindu', gif: '../assets/gifs/hindu.gif', difficulty: 'intermediate', description: 'Hindu religion', category: 'culture' },
        { id: 'krishna', name: 'Krishna', gif: '../assets/gifs/krishna.gif', difficulty: 'intermediate', description: 'Lord Krishna', category: 'culture' }
    ],
    animals: [
        { id: 'cat', name: 'Cat', gif: '../assets/gifs/cat.gif', difficulty: 'beginner', description: 'Cat animal', category: 'animals' }
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
                <img src="${sign.gif}" alt="${sign.name} sign" class="sign-gif" onerror="this.src='../assets/gifs/placeholder.gif'">
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
