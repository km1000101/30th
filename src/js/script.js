// --- Integrated Node Animation Background ---
(function createNodeBackground() {
    const canvas = document.createElement('canvas');
    canvas.id = 'node-bg-canvas';
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100vw';
    canvas.style.height = '100vh';
    canvas.style.zIndex = '-1';
    canvas.style.pointerEvents = 'none';
    document.body.prepend(canvas);
    const ctx = canvas.getContext('2d');

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    window.addEventListener('resize', () => {
        width = window.innerWidth;
        height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;
    });

    const NODES = 60;
    const nodes = [];
    for (let i = 0; i < NODES; i++) {
        nodes.push({
            x: Math.random() * width,
            y: Math.random() * height,
            vx: (Math.random() - 0.5) * 0.7,
            vy: (Math.random() - 0.5) * 0.7
        });
    }

    function draw() {
        ctx.clearRect(0, 0, width, height);
        // Draw lines
        for (let i = 0; i < NODES; i++) {
            for (let j = i + 1; j < NODES; j++) {
                const dx = nodes[i].x - nodes[j].x;
                const dy = nodes[i].y - nodes[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 140) {
                    ctx.strokeStyle = 'rgba(123,47,242,' + (1 - dist / 140) + ')';
                    ctx.lineWidth = 1.2;
                    ctx.beginPath();
                    ctx.moveTo(nodes[i].x, nodes[i].y);
                    ctx.lineTo(nodes[j].x, nodes[j].y);
                    ctx.stroke();
                }
            }
        }
        // Draw nodes
        for (let i = 0; i < NODES; i++) {
            ctx.beginPath();
            ctx.arc(nodes[i].x, nodes[i].y, 3, 0, 2 * Math.PI);
            ctx.fillStyle = '#fff';
            ctx.shadowColor = '#7b2ff2';
            ctx.shadowBlur = 8;
            ctx.fill();
            ctx.shadowBlur = 0;
        }
    }

    function update() {
        for (let i = 0; i < NODES; i++) {
            nodes[i].x += nodes[i].vx;
            nodes[i].y += nodes[i].vy;
            if (nodes[i].x < 0 || nodes[i].x > width) nodes[i].vx *= -1;
            if (nodes[i].y < 0 || nodes[i].y > height) nodes[i].vy *= -1;
        }
    }

    function animate() {
        update();
        draw();
        requestAnimationFrame(animate);
    }
    animate();
})();

// DOM Elements
const videoElement = document.getElementById('video');
const canvasElement = document.getElementById('canvas');
const canvasCtx = canvasElement.getContext('2d');
const outputElement = document.getElementById('output');
const loadingOverlay = document.getElementById('loading-overlay');
const statusText = document.querySelector('.status-text');
const statusDot = document.querySelector('.status-dot');
const cameraOverlay = document.querySelector('.camera-overlay');

// Audio Input Elements
const micButton = document.getElementById('mic-button');
const audioStatusText = document.getElementById('audio-status-text');
const speechText = document.getElementById('speech-text');
const gifContainer = document.getElementById('gif-container');

// State variables
let model;
let sequence = [];
const SEQUENCE_LENGTH = 30;
const actions = ['i love you', 'thank you', 'hello']; // The actions your model can predict

// Speech Recognition Setup
let recognition;
let isRecording = false;

// Initialize speech recognition
function initSpeechRecognition() {
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
        recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
        recognition.continuous = false;
        recognition.interimResults = false;
        recognition.lang = 'en-US';
        
        recognition.onstart = () => {
            isRecording = true;
            micButton.classList.add('recording');
            micButton.querySelector('.mic-text').textContent = 'Listening...';
            audioStatusText.textContent = 'Listening...';
            speechText.textContent = 'Listening...';
        };
        
        recognition.onresult = (event) => {
            const transcript = event.results[0][0].transcript.toLowerCase();
            speechText.textContent = transcript;
            audioStatusText.textContent = 'Processing...';
            
            // Find matching GIF
            const matchingGif = findMatchingGif(transcript);
            if (matchingGif) {
                displayGif(matchingGif);
                audioStatusText.textContent = 'GIF found!';
            } else {
                displayNoMatch();
                audioStatusText.textContent = 'No matching sign found';
            }
        };
        
        recognition.onerror = (event) => {
            console.error('Speech recognition error:', event.error);
            audioStatusText.textContent = 'Error: ' + event.error;
            resetMicButton();
        };
        
        recognition.onend = () => {
            resetMicButton();
        };
        
        console.log('Speech recognition initialized');
    } else {
        console.warn('Speech recognition not supported');
        micButton.style.display = 'none';
        audioStatusText.textContent = 'Speech recognition not supported in this browser';
    }
}

// Find matching GIF based on speech input
function findMatchingGif(speech) {
    const speechWords = speech.split(' ');
    
    // Define keyword mappings for each GIF - expanded to include more gifs
    const gifMappings = {
        'hello': {
            keywords: ['hello', 'hi', 'hey', 'greetings', 'good morning', 'good afternoon', 'good evening'],
            gifPath: '../assets/gifs/hello.gif',
            description: 'Hello sign'
        },
        'thank you': {
            keywords: ['thank you', 'thanks', 'thank', 'grateful', 'appreciate', 'bless you'],
            gifPath: '../assets/gifs/thank you.gif',
            description: 'Thank you sign'
        },
        'i love you': {
            keywords: ['i love you', 'love you', 'love', 'heart', 'care', 'affection'],
            gifPath: '../assets/gifs/i love you.gif',
            description: 'I love you sign'
        },
        'how are you': {
            keywords: ['how are you', 'how you doing', 'how do you feel', 'are you ok', 'are you okay'],
            gifPath: '../assets/gifs/how are you.gif',
            description: 'How are you sign'
        },
        'good morning': {
            keywords: ['good morning', 'morning', 'rise and shine', 'early'],
            gifPath: '../assets/gifs/good morning.gif',
            description: 'Good morning sign'
        },
        'good afternoon': {
            keywords: ['good afternoon', 'afternoon', 'midday'],
            gifPath: '../assets/gifs/good afternoon.gif',
            description: 'Good afternoon sign'
        },
        'what is your name': {
            keywords: ['what is your name', 'your name', 'name', 'who are you', 'identify yourself'],
            gifPath: '../assets/gifs/what is your name.gif',
            description: 'What is your name sign'
        },

        'nice to meet you': {
            keywords: ['nice to meet you', 'pleasure to meet you', 'glad to meet you', 'good to see you'],
            gifPath: '../assets/gifs/nice to meet you.gif',
            description: 'Nice to meet you sign'
        },
        'please wait for sometime': {
            keywords: ['please wait', 'wait', 'hold on', 'give me a moment', 'wait for sometime'],
            gifPath: '../assets/gifs/please wait for sometime.gif',
            description: 'Please wait sign'
        },
        'what are you doing': {
            keywords: ['what are you doing', 'what you doing', 'what\'s up', 'whats up', 'what\'s happening'],
            gifPath: '../assets/gifs/what are you doing.gif',
            description: 'What are you doing sign'
        },
        'are you busy': {
            keywords: ['are you busy', 'busy', 'occupied', 'do you have time', 'free'],
            gifPath: '../assets/gifs/are you busy.gif',
            description: 'Are you busy sign'
        },
        'i am fine': {
            keywords: ['i am fine', 'i\'m fine', 'fine', 'good', 'okay', 'alright', 'well'],
            gifPath: '../assets/gifs/i am fine.gif',
            description: 'I am fine sign'
        },
        'i am sorry': {
            keywords: ['i am sorry', 'i\'m sorry', 'sorry', 'apologize', 'excuse me', 'pardon'],
            gifPath: '../assets/gifs/i am sorry.gif',
            description: 'I am sorry sign'
        },
        'i am thinking': {
            keywords: ['i am thinking', 'i\'m thinking', 'thinking', 'thought', 'considering', 'pondering'],
            gifPath: '../assets/gifs/i am thinking.gif',
            description: 'I am thinking sign'
        },
        'i am tired': {
            keywords: ['i am tired', 'i\'m tired', 'tired', 'exhausted', 'sleepy', 'fatigued'],
            gifPath: '../assets/gifs/i am tired.gif',
            description: 'I am tired sign'
        },
        'i am a clerk': {
            keywords: ['i am a clerk', 'i\'m a clerk', 'clerk', 'office worker', 'administrative', 'job'],
            gifPath: '../assets/gifs/i am a clerk.gif',
            description: 'I am a clerk sign'
        },
        'i go to a theatre': {
            keywords: ['i go to a theatre', 'theatre', 'movie', 'cinema', 'entertainment', 'show'],
            gifPath: '../assets/gifs/i go to a theatre.gif',
            description: 'I go to a theatre sign'
        },
        'i love to shop': {
            keywords: ['i love to shop', 'shopping', 'buy', 'retail', 'mall', 'store'],
            gifPath: '../assets/gifs/i love to shop.gif',
            description: 'I love to shop sign'
        },
        'i like pink colour': {
            keywords: ['i like pink colour', 'pink', 'color', 'colour', 'favorite color', 'prefer pink'],
            gifPath: '../assets/gifs/i like pink colour.gif',
            description: 'I like pink colour sign'
        },
        'i had to say something but I forgot': {
            keywords: ['i forgot', 'forgot', 'memory', 'remember', 'remind me', 'lost my thought'],
            gifPath: '../assets/gifs/i had to say something but I forgot.gif',
            description: 'I forgot what I was going to say sign'
        },
        'lets go for lunch': {
            keywords: ['lets go for lunch', 'lunch', 'eat', 'meal', 'food', 'dining', 'restaurant'],
            gifPath: '../assets/gifs/lets go for lunch.gif',
            description: 'Let\'s go for lunch sign'
        },
        'shall I help you': {
            keywords: ['shall I help you', 'help you', 'assist', 'support', 'aid', 'can I help'],
            gifPath: '../assets/gifs/shall I help you.gif',
            description: 'Shall I help you sign'
        },
        'shall we go together tommorow': {
            keywords: ['shall we go together', 'tomorrow', 'tommorow', 'together', 'accompany', 'join'],
            gifPath: '../assets/gifs/shall we go together tommorow.gif',
            description: 'Shall we go together tomorrow sign'
        },
        'open the door': {
            keywords: ['open the door', 'door', 'open', 'entrance', 'exit', 'gate'],
            gifPath: '../assets/gifs/open the door.gif',
            description: 'Open the door sign'
        },
        'please call me later': {
            keywords: ['please call me later', 'call me later', 'call back', 'phone later', 'contact later'],
            gifPath: '../assets/gifs/please call me later.gif',
            description: 'Please call me later sign'
        },
        'sit down': {
            keywords: ['sit down', 'sit', 'seat', 'chair', 'rest', 'take a seat'],
            gifPath: '../assets/gifs/sit down.gif',
            description: 'Sit down sign'
        },
        'stand up': {
            keywords: ['stand up', 'stand', 'rise', 'get up', 'upright', 'on your feet'],
            gifPath: '../assets/gifs/stand up.gif',
            description: 'Stand up sign'
        },
        'take care': {
            keywords: ['take care', 'care', 'be careful', 'look after yourself', 'stay safe', 'goodbye'],
            gifPath: '../assets/gifs/take care.gif',
            description: 'Take care sign'
        },
        'what is the problem': {
            keywords: ['what is the problem', 'problem', 'issue', 'trouble', 'what\'s wrong', 'difficulty'],
            gifPath: '../assets/gifs/what is the problem.gif',
            description: 'What is the problem sign'
        },
        'what is today\'s date': {
            keywords: ['what is today\'s date', 'date', 'today', 'day', 'calendar', 'what day is it'],
            gifPath: '../assets/gifs/what is today\'s date.gif',
            description: 'What is today\'s date sign'
        },
        'what is your father do': {
            keywords: ['what is your father do', 'father', 'dad', 'parent', 'occupation', 'job'],
            gifPath: '../assets/gifs/what is your father do.gif',
            description: 'What does your father do sign'
        },
        'what is your mobile number': {
            keywords: ['what is your mobile number', 'mobile number', 'phone number', 'contact number', 'cell'],
            gifPath: '../assets/gifs/what is your mobile number.gif',
            description: 'What is your mobile number sign'
        },
        'where is the bathroom': {
            keywords: ['where is the bathroom', 'bathroom', 'toilet', 'restroom', 'washroom', 'wc'],
            gifPath: '../assets/gifs/where is the bathroom.gif',
            description: 'Where is the bathroom sign'
        },
        'where is the police station': {
            keywords: ['where is the police station', 'police station', 'police', 'station', 'law enforcement'],
            gifPath: '../assets/gifs/where is the police station.gif',
            description: 'Where is the police station sign'
        },
        'you are wrong': {
            keywords: ['you are wrong', 'wrong', 'incorrect', 'mistake', 'error', 'not right'],
            gifPath: '../assets/gifs/you are wrong.gif',
            description: 'You are wrong sign'
        },
        'dont worry': {
            keywords: ['dont worry', 'don\'t worry', 'worry', 'anxious', 'concerned', 'relax'],
            gifPath: '../assets/gifs/dont worry.gif',
            description: 'Don\'t worry sign'
        },
        'be careful': {
            keywords: ['be careful', 'careful', 'caution', 'watch out', 'attention', 'mindful'],
            gifPath: '../assets/gifs/be careful.gif',
            description: 'Be careful sign'
        },
        'any questions': {
            keywords: ['any questions', 'questions', 'ask', 'inquiry', 'doubt', 'clarification'],
            gifPath: '../assets/gifs/any questions.gif',
            description: 'Any questions sign'
        },
        'are you angry': {
            keywords: ['are you angry', 'angry', 'mad', 'upset', 'furious', 'irritated'],
            gifPath: '../assets/gifs/are you angry.gif',
            description: 'Are you angry sign'
        },
        'are you hungry': {
            keywords: ['are you hungry', 'hungry', 'starving', 'food', 'eat', 'appetite'],
            gifPath: '../assets/gifs/are you hungry.gif',
            description: 'Are you hungry sign'
        },
        'are you ok': {
            keywords: ['are you ok', 'are you okay', 'okay', 'ok', 'alright', 'fine'],
            gifPath: '../assets/gifs/are you ok.gif',
            description: 'Are you ok sign'
        },
        'are you okay': {
            keywords: ['are you okay', 'are you ok', 'okay', 'ok', 'alright', 'fine'],
            gifPath: '../assets/gifs/are you okay.gif',
            description: 'Are you okay sign'
        },
        'did you finish homework': {
            keywords: ['did you finish homework', 'homework', 'assignment', 'complete', 'finish', 'study'],
            gifPath: '../assets/gifs/did you finish homework.gif',
            description: 'Did you finish homework sign'
        },
        'do not know': {
            keywords: ['do not know', 'don\'t know', 'unknown', 'unsure', 'uncertain', 'no idea'],
            gifPath: '../assets/gifs/do not know.gif',
            description: 'Do not know sign'
        },
        'do you have money': {
            keywords: ['do you have money', 'money', 'cash', 'funds', 'currency', 'wealth'],
            gifPath: '../assets/gifs/do you have money.gif',
            description: 'Do you have money sign'
        },
        'do you want something to drink': {
            keywords: ['do you want something to drink', 'drink', 'beverage', 'thirsty', 'water', 'juice'],
            gifPath: '../assets/gifs/do you want something to drink.gif',
            description: 'Do you want something to drink sign'
        },
        'do you watch TV': {
            keywords: ['do you watch TV', 'TV', 'television', 'watch', 'program', 'show'],
            gifPath: '../assets/gifs/do you watch TV.gif',
            description: 'Do you watch TV sign'
        },
        'flower is beautiful': {
            keywords: ['flower is beautiful', 'flower', 'beautiful', 'pretty', 'bloom', 'nature'],
            gifPath: '../assets/gifs/flower is beautiful.gif',
            description: 'Flower is beautiful sign'
        },
        'good question': {
            keywords: ['good question', 'question', 'inquiry', 'ask', 'curious', 'wonder'],
            gifPath: '../assets/gifs/good question.gif',
            description: 'Good question sign'
        },
        'grapes': {
            keywords: ['grapes', 'fruit', 'grape', 'vine', 'wine', 'purple'],
            gifPath: '../assets/gifs/grapes.gif',
            description: 'Grapes sign'
        },
        'hindu': {
            keywords: ['hindu', 'religion', 'faith', 'belief', 'spiritual', 'temple'],
            gifPath: '../assets/gifs/hindu.gif',
            description: 'Hindu sign'
        },
        'hyderabad': {
            keywords: ['hyderabad', 'city', 'place', 'location', 'india', 'telangana'],
            gifPath: '../assets/gifs/hyderabad.gif',
            description: 'Hyderabad sign'
        },
        'job': {
            keywords: ['job', 'work', 'employment', 'career', 'profession', 'occupation'],
            gifPath: '../assets/gifs/job.gif',
            description: 'Job sign'
        },
        'july': {
            keywords: ['july', 'month', 'summer', 'jul', '7th month', 'vacation'],
            gifPath: '../assets/gifs/july.gif',
            description: 'July sign'
        },
        'june': {
            keywords: ['june', 'month', 'summer', 'jun', '6th month', 'vacation'],
            gifPath: '../assets/gifs/june.gif',
            description: 'June sign'
        },
        'karnataka': {
            keywords: ['karnataka', 'state', 'india', 'bangalore', 'bengaluru', 'south india'],
            gifPath: '../assets/gifs/karnataka.gif',
            description: 'Karnataka sign'
        },
        'kerala': {
            keywords: ['kerala', 'state', 'india', 'god\'s own country', 'south india', 'coastal'],
            gifPath: '../assets/gifs/kerala.gif',
            description: 'Kerala sign'
        },
        'krishna': {
            keywords: ['krishna', 'god', 'deity', 'hindu', 'divine', 'spiritual'],
            gifPath: '../assets/gifs/krishna.gif',
            description: 'Krishna sign'
        },
        'love you': {
            keywords: ['love you', 'love', 'affection', 'care', 'heart', 'romance'],
            gifPath: '../assets/gifs/love you.gif',
            description: 'Love you sign'
        },
        'mango': {
            keywords: ['mango', 'fruit', 'summer', 'tropical', 'sweet', 'yellow'],
            gifPath: '../assets/gifs/mango.gif',
            description: 'Mango sign'
        },
        'may': {
            keywords: ['may', 'month', 'spring', '5th month', 'flowers', 'bloom'],
            gifPath: '../assets/gifs/may.gif',
            description: 'May sign'
        },
        'mile': {
            keywords: ['mile', 'distance', 'measurement', 'unit', 'length', 'road'],
            gifPath: '../assets/gifs/mile.gif',
            description: 'Mile sign'
        },
        'mumbai': {
            keywords: ['mumbai', 'city', 'bombay', 'maharashtra', 'india', 'financial capital'],
            gifPath: '../assets/gifs/mumbai.gif',
            description: 'Mumbai sign'
        },
        'nagpur': {
            keywords: ['nagpur', 'city', 'maharashtra', 'india', 'orange city', 'central india'],
            gifPath: '../assets/gifs/nagpur.gif',
            description: 'Nagpur sign'
        },
        'police station': {
            keywords: ['police station', 'police', 'station', 'law enforcement', 'security', 'help'],
            gifPath: '../assets/gifs/police station.gif',
            description: 'Police station sign'
        },
        'post office': {
            keywords: ['post office', 'post', 'mail', 'letter', 'package', 'communication'],
            gifPath: '../assets/gifs/post office.gif',
            description: 'Post office sign'
        },
        'pune': {
            keywords: ['pune', 'city', 'maharashtra', 'india', 'oxford of the east', 'cultural'],
            gifPath: '../assets/gifs/pune.gif',
            description: 'Pune sign'
        },
        'punjab': {
            keywords: ['punjab', 'state', 'india', 'land of five rivers', 'north india', 'agricultural'],
            gifPath: '../assets/gifs/punjab.gif',
            description: 'Punjab sign'
        },
        'saturday': {
            keywords: ['saturday', 'saturday', 'weekend', '6th day', 'sat', 'free time'],
            gifPath: '../assets/gifs/saturday.gif',
            description: 'Saturday sign'
        },
        'shop': {
            keywords: ['shop', 'store', 'buy', 'retail', 'purchase', 'market'],
            gifPath: '../assets/gifs/shop.gif',
            description: 'Shop sign'
        },
        'sign language interpreter': {
            keywords: ['sign language interpreter', 'interpreter', 'translator', 'sign language', 'communication', 'deaf'],
            gifPath: '../assets/gifs/sign language interpreter.gif',
            description: 'Sign language interpreter sign'
        },
        'temple': {
            keywords: ['temple', 'worship', 'prayer', 'religious', 'sacred', 'spiritual'],
            gifPath: '../assets/gifs/temple.gif',
            description: 'Temple sign'
        },
        'there was traffic jam': {
            keywords: ['there was traffic jam', 'traffic jam', 'traffic', 'congestion', 'stuck', 'delay'],
            gifPath: '../assets/gifs/there was traffic jam.gif',
            description: 'There was traffic jam sign'
        },
        'thursday': {
            keywords: ['thursday', 'thursday', '4th day', 'thu', 'weekday', 'work'],
            gifPath: '../assets/gifs/thursday.gif',
            description: 'Thursday sign'
        },
        'toilet': {
            keywords: ['toilet', 'bathroom', 'restroom', 'washroom', 'wc', 'facility'],
            gifPath: '../assets/gifs/toilet.gif',
            description: 'Toilet sign'
        },
        'tomato': {
            keywords: ['tomato', 'vegetable', 'red', 'fruit', 'cooking', 'salad'],
            gifPath: '../assets/gifs/tomato.gif',
            description: 'Tomato sign'
        },
        'tuesday': {
            keywords: ['tuesday', 'tuesday', '2nd day', 'tue', 'weekday', 'work'],
            gifPath: '../assets/gifs/tuesday.gif',
            description: 'Tuesday sign'
        },
        'usa': {
            keywords: ['usa', 'united states', 'america', 'country', 'nation', 'states'],
            gifPath: '../assets/gifs/usa.gif',
            description: 'USA sign'
        },
        'village': {
            keywords: ['village', 'rural', 'countryside', 'small town', 'community', 'agricultural'],
            gifPath: '../assets/gifs/village.gif',
            description: 'Village sign'
        },
        'wednesday': {
            keywords: ['wednesday', 'wednesday', '3rd day', 'wed', 'weekday', 'work'],
            gifPath: '../assets/gifs/wednesday.gif',
            description: 'Wednesday sign'
        },
        'address': {
            keywords: ['address', 'location', 'place', 'where', 'residence', 'home'],
            gifPath: '../assets/gifs/address.gif',
            description: 'Address sign'
        },
        'ahemdabad': {
            keywords: ['ahemdabad', 'ahmedabad', 'city', 'gujarat', 'india', 'textile'],
            gifPath: '../assets/gifs/ahemdabad.gif',
            description: 'Ahmedabad sign'
        },
        'all': {
            keywords: ['all', 'everything', 'total', 'complete', 'whole', 'entire'],
            gifPath: '../assets/gifs/all.gif',
            description: 'All sign'
        },
        'assam': {
            keywords: ['assam', 'state', 'india', 'northeast', 'tea', 'brahmaputra'],
            gifPath: '../assets/gifs/assam.gif',
            description: 'Assam sign'
        },
        'august': {
            keywords: ['august', 'month', 'summer', 'aug', '8th month', 'vacation'],
            gifPath: '../assets/gifs/august.gif',
            description: 'August sign'
        },
        'banana': {
            keywords: ['banana', 'fruit', 'yellow', 'tropical', 'potassium', 'healthy'],
            gifPath: '../assets/gifs/banana.gif',
            description: 'Banana sign'
        },
        'banaras': {
            keywords: ['banaras', 'varanasi', 'city', 'uttar pradesh', 'india', 'holy city'],
            gifPath: '../assets/gifs/banaras.gif',
            description: 'Banaras sign'
        },
        'banglore': {
            keywords: ['banglore', 'bangalore', 'bengaluru', 'city', 'karnataka', 'india', 'it hub'],
            gifPath: '../assets/gifs/banglore.gif',
            description: 'Bangalore sign'
        },
        'bridge': {
            keywords: ['bridge', 'crossing', 'river', 'connection', 'structure', 'engineering'],
            gifPath: '../assets/gifs/bridge.gif',
            description: 'Bridge sign'
        },
        'cat': {
            keywords: ['cat', 'feline', 'pet', 'animal', 'meow', 'domestic'],
            gifPath: '../assets/gifs/cat.gif',
            description: 'Cat sign'
        },
        'christmas': {
            keywords: ['christmas', 'holiday', 'celebration', 'december', 'gift', 'christian'],
            gifPath: '../assets/gifs/christmas.gif',
            description: 'Christmas sign'
        },
        'church': {
            keywords: ['church', 'worship', 'christian', 'religion', 'prayer', 'holy'],
            gifPath: '../assets/gifs/church.gif',
            description: 'Church sign'
        },
        'cilinic': {
            keywords: ['cilinic', 'clinic', 'medical', 'health', 'doctor', 'hospital'],
            gifPath: '../assets/gifs/cilinic.gif',
            description: 'Clinic sign'
        },
        'dasara': {
            keywords: ['dasara', 'dussehra', 'festival', 'hindu', 'celebration', 'victory'],
            gifPath: '../assets/gifs/dasara.gif',
            description: 'Dasara sign'
        },
        'december': {
            keywords: ['december', 'month', 'winter', 'dec', '12th month', 'christmas'],
            gifPath: '../assets/gifs/december.gif',
            description: 'December sign'
        }
    };
    
    // Check for exact matches first
    for (const [key, mapping] of Object.entries(gifMappings)) {
        if (speech.includes(key)) {
            return mapping;
        }
    }
    
    // Check for keyword matches
    for (const [key, mapping] of Object.entries(gifMappings)) {
        for (const keyword of mapping.keywords) {
            if (speechWords.some(word => word.includes(keyword) || keyword.includes(word))) {
                return mapping;
            }
        }
    }
    
    return null;
}

// Display the matching GIF
function displayGif(gifMapping) {
    gifContainer.innerHTML = `
        <img src="${gifMapping.gifPath}" alt="${gifMapping.description}" class="matching-gif">
        <div class="gif-label">${gifMapping.description}</div>
    `;
}

// Display no match message
function displayNoMatch() {
    gifContainer.innerHTML = `
        <div class="no-match">
            <div class="no-match-icon">❓</div>
            <div class="no-match-text">No matching sign found</div>
            <div class="no-match-hint">Try saying: "hello", "thank you", "i love you", "how are you", "good morning", "what is your name", "nice to meet you", "please wait", "what are you doing", "are you busy", "i am fine", "i am sorry", "i am thinking", "i am tired", "i am a clerk", "i go to a theatre", "i love to shop", "i like pink colour", "i forgot", "let's go for lunch", "shall I help you", "shall we go together", "open the door", "please call me later", "sit down", "stand up", "take care", "what is the problem", "what is today's date", "what does your father do", "what is your mobile number", "where is the bathroom", "where is the police station", "you are wrong", "don't worry", "be careful", "any questions", "are you angry", "are you hungry", "are you ok", "are you okay", "did you finish homework", "do not know", "do you have money", "do you want something to drink", "do you watch TV", "flower is beautiful", "good question", "grapes", "hindu", "hyderabad", "job", "july", "june", "karnataka", "kerala", "krishna", "love you", "mango", "may", "mile", "mumbai", "nagpur", "police station", "post office", "pune", "punjab", "saturday", "shop", "sign language interpreter", "temple", "there was traffic jam", "thursday", "toilet", "tomato", "tuesday", "usa", "village", "wednesday", "address", "ahmedabad", "all", "assam", "august", "banana", "banaras", "bangalore", "bridge", "cat", "christmas", "church", "clinic", "dasara", "december"</div>
        </div>
    `;
}

// Reset microphone button
function resetMicButton() {
    isRecording = false;
    micButton.classList.remove('recording');
    micButton.querySelector('.mic-text').textContent = 'Click to Speak';
    audioStatusText.textContent = 'Ready to listen';
}

// Toggle speech recognition
function toggleSpeechRecognition() {
    if (isRecording) {
        recognition.stop();
    } else {
        try {
            recognition.start();
        } catch (error) {
            console.error('Error starting speech recognition:', error);
            audioStatusText.textContent = 'Error starting recognition';
        }
    }
}

// Add these configurations at the top of your file
const holisticConfig = {
    locateFile: (file) => {
        return `https://cdn.jsdelivr.net/npm/@mediapipe/holistic/${file}`;
    }
};

const modelConfig = {
    maxHands: 1,
    complexity: 'lite',
    smoothLandmarks: true,
    minDetectionConfidence: 0.7,
    minTrackingConfidence: 0.5
};

// Update your video constraints
const constraints = {
    video: {
        width: 640,
        height: 480,
        frameRate: { ideal: 30 }
    }
};

// Status update functions
function updateStatus(message, type = 'info') {
    if (statusText) {
        statusText.textContent = message;
        
        // Update status dot color based on type
        if (statusDot) {
            statusDot.style.background = type === 'error' ? '#ff4444' : 
                                       type === 'success' ? '#44ff44' : '#f39108';
        }
    }
}

function hideLoadingOverlay() {
    if (loadingOverlay) {
        loadingOverlay.style.display = 'none';
    }
}

function showCameraOverlay() {
    if (cameraOverlay) {
        cameraOverlay.style.display = 'block';
    }
}

function hideCameraOverlay() {
    if (cameraOverlay) {
        cameraOverlay.style.display = 'none';
    }
}

// Function to extract keypoints from MediaPipe results
function extractKeypoints(results) {
    const pose = results.poseLandmarks ? results.poseLandmarks.map(res => [res.x, res.y, res.z, res.visibility]).flat() : new Array(33 * 4).fill(0);
    const face = results.faceLandmarks ? results.faceLandmarks.map(res => [res.x, res.y, res.z]).flat() : new Array(468 * 3).fill(0);
    const lh = results.leftHandLandmarks ? results.leftHandLandmarks.map(res => [res.x, res.y, res.z]).flat() : new Array(21 * 3).fill(0);
    const rh = results.rightHandLandmarks ? results.rightHandLandmarks.map(res => [res.x, res.y, res.z]).flat() : new Array(21 * 3).fill(0);
    return [...pose, ...face, ...lh, ...rh];
}

async function onResults(results) {
    canvasCtx.save();
    canvasCtx.clearRect(0, 0, canvasElement.width, canvasElement.height);
    canvasCtx.drawImage(results.image, 0, 0, canvasElement.width, canvasElement.height);

    // Draw landmarks
    drawConnectors(canvasCtx, results.poseLandmarks, POSE_CONNECTIONS, { color: '#00FF00', lineWidth: 4 });
    drawLandmarks(canvasCtx, results.poseLandmarks, { color: '#FF0000', lineWidth: 2 });
    drawConnectors(canvasCtx, results.faceLandmarks, FACEMESH_TESSELATION, { color: '#C0C0C070', lineWidth: 1 });
    drawConnectors(canvasCtx, results.leftHandLandmarks, HAND_CONNECTIONS, { color: '#CC0000', lineWidth: 5 });
    drawLandmarks(canvasCtx, results.leftHandLandmarks, { color: '#00FF00', lineWidth: 2 });
    drawConnectors(canvasCtx, results.rightHandLandmarks, HAND_CONNECTIONS, { color: '#00CC00', lineWidth: 5 });
    drawLandmarks(canvasCtx, results.rightHandLandmarks, { color: '#FF0000', lineWidth: 2 });
    canvasCtx.restore();

    // Hide camera overlay when landmarks are detected
    if (results.poseLandmarks || results.leftHandLandmarks || results.rightHandLandmarks) {
        hideCameraOverlay();
    }

    // Prediction logic
    const keypoints = extractKeypoints(results);
    sequence.push(keypoints);
    sequence = sequence.slice(-SEQUENCE_LENGTH); // Keep the sequence to the last 30 frames

    if (model && sequence.length === SEQUENCE_LENGTH) {
        try {
            const tensor = tf.tensor([sequence]);
            const prediction = await model.predict(tensor).data();
            tensor.dispose();
            
            const predictedIndex = prediction.indexOf(Math.max(...prediction));
            const predictedAction = actions[predictedIndex];
            
            if (outputElement.innerText !== predictedAction) {
                outputElement.innerText = predictedAction;
                
                // Text-to-speech
                if ('speechSynthesis' in window) {
                    const utterance = new SpeechSynthesisUtterance(predictedAction);
                    utterance.rate = 0.8;
                    utterance.pitch = 1.2;
                    speechSynthesis.speak(utterance);
                }
                
                // Update status
                updateStatus(`Detected: ${predictedAction}`, 'success');
            }
        } catch (error) {
            console.error('Prediction error:', error);
            updateStatus('Prediction error', 'error');
        }
    }
}

async function main() {
    try {
        // Show loading overlay
        updateStatus('Loading AI Model...', 'info');
        
        // Load the model
        console.log('Loading model...');
        model = await tf.loadLayersModel('../models/model/model.json');
        console.log('Model loaded.');
        
        updateStatus('Model loaded successfully!', 'success');
        
        // Initialize MediaPipe Holistic
        updateStatus('Initializing MediaPipe...', 'info');
        const holistic = new Holistic(holisticConfig);
        holistic.setOptions(modelConfig);
        holistic.onResults(onResults);
        
        updateStatus('Setting up camera...', 'info');
        
        // Setup camera
        const camera = new Camera(videoElement, {
            onFrame: async () => {
                await holistic.send({ image: videoElement });
            },
            width: 640,
            height: 480
        });
        
        camera.start();
        
        // Hide loading overlay and show camera overlay
        setTimeout(() => {
            hideLoadingOverlay();
            updateStatus('Camera active - Ready for detection', 'success');
            showCameraOverlay();
        }, 1000);
        
    } catch (error) {
        console.error('Initialization error:', error);
        updateStatus('Failed to initialize system', 'error');
        
        // Show error message to user
        if (outputElement) {
            outputElement.innerHTML = '<span style="color: #ff4444;">Error: Failed to load system</span>';
        }
        
        // Hide loading overlay after error
        setTimeout(() => {
            hideLoadingOverlay();
        }, 2000);
    }
}

// Initialize the system
main();

// Initialize speech recognition
initSpeechRecognition();

// Add microphone button event listener
if (micButton) {
    micButton.addEventListener('click', toggleSpeechRecognition);
}

// Chatbot logic
const chatBubble = document.getElementById('chat-bubble');
const chatWindow = document.getElementById('chat-window');
const closeChat = document.getElementById('close-chat');
const chatInput = document.getElementById('chat-input');
const chatSend = document.getElementById('chat-send');
const chatBody = document.getElementById('chat-body');

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
  const apiKey = 'AIzaSyCDbO3317S6nblaTpbcAa6iLzfqAf6YaQ8'; // Replace with your actual Gemini API key
  const endpoint = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=' + apiKey;

  // Allowed topics keywords for broader matching
  const allowedTopics = [
    'sign language','what is sign language','why is sign laguage used', 'gesture', 'deaf', 'hard-of-hearing', 'media pipe', 
    'tensorflow', 'machine learning', 'project', 'technology', 'tech',
    'model', 'webcam', 'pose', 'hand tracking', 'pytorch', 'deep learning',
    'ai', 'artificial intelligence', 'computer vision', 'neural network' , 'what' , 'why not pytorch?' , 'what is tensorflow?'
  ];

  const lowerCaseMessage = message.toLowerCase();

  // Check if message contains ANY allowed topic word as substring
  const isAllowed = allowedTopics.some(topic => lowerCaseMessage.includes(topic));
  
  if (!isAllowed) {
    return "Sorry, I can only answer questions about sign language or the technology used in this project. Feel free to ask about MediaPipe, TensorFlow, computer vision, or sign language in general!";
  }

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{
          parts: [{
            text: `Answer only about sign language or the technology used in this sign language detection project. Stay on topic and be helpful. Question: "${message}"`
          }]
        }]
      })
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();

    console.log(data);
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

// Auto-hide camera overlay after a delay
setTimeout(() => {
    if (cameraOverlay) {
        cameraOverlay.style.opacity = '0.6';
    }
}, 5000);

// Performance optimization: Reduce background animation on mobile
if (window.innerWidth <= 768) {
    const nodeCanvas = document.getElementById('node-bg-canvas');
    if (nodeCanvas) {
        nodeCanvas.style.display = 'none';
    }
}


