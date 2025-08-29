const videoElement = document.getElementById('video');
const canvasElement = document.getElementById('canvas');
const canvasCtx = canvasElement.getContext('2d');
const outputElement = document.getElementById('output');

let model;
let sequence = [];
const SEQUENCE_LENGTH = 30;
const actions = ['i love you', 'thank you', 'hello']; // The actions your model can predict

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

    // Prediction logic
    const keypoints = extractKeypoints(results);
    sequence.push(keypoints);
    sequence = sequence.slice(-SEQUENCE_LENGTH); // Keep the sequence to the last 30 frames

    if (model && sequence.length === SEQUENCE_LENGTH) {
        const tensor = tf.tensor([sequence]);
        const prediction = await model.predict(tensor).data();
        tensor.dispose();
        
        const predictedIndex = prediction.indexOf(Math.max(...prediction));
        const predictedAction = actions[predictedIndex];
        
        if (outputElement.innerText !== predictedAction) {
            outputElement.innerText = predictedAction;
            const utterance = new SpeechSynthesisUtterance(predictedAction);
            speechSynthesis.speak(utterance);
        }
    }
}

async function main() {
    // Load the model
    console.log('Loading model...');
    model = await tf.loadLayersModel('model/model.json');
    console.log('Model loaded.');

    // Initialize MediaPipe Holistic
    const holistic = new Holistic({
        locateFile: (file) => {
            return `https://cdn.jsdelivr.net/npm/@mediapipe/holistic/${file}`;
        }
    });

    holistic.setOptions({
        minDetectionConfidence: 0.5,
        minTrackingConfidence: 0.5
    });

    holistic.onResults(onResults);

    // Setup camera
    const camera = new Camera(videoElement, {
        onFrame: async () => {
            await holistic.send({ image: videoElement });
        },
        width: 640,
        height: 480
    });
    camera.start();
}

main();

// Chatbot logic
const chatBubble = document.getElementById('chat-bubble');
const chatWindow = document.getElementById('chat-window');
const closeChat = document.getElementById('close-chat');
const chatInput = document.getElementById('chat-input');
const chatSend = document.getElementById('chat-send');
const chatBody = document.getElementById('chat-body');

chatBubble.addEventListener('click', () => {
    chatWindow.style.display = 'flex';
    chatBubble.style.display = 'none';
});

closeChat.addEventListener('click', () => {
    chatWindow.style.display = 'none';
    chatBubble.style.display = 'flex';
});

chatSend.addEventListener('click', () => {
    sendMessage();
});

chatInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

function sendMessage() {
    const userMessage = chatInput.value.trim();
    if (userMessage === '') return;

    appendMessage(userMessage, 'user');
    chatInput.value = '';

    setTimeout(() => {
        const botResponse = getBotResponse(userMessage);
        appendMessage(botResponse, 'bot');
    }, 500);
}

function appendMessage(message, sender) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('chat-message', sender);
    const p = document.createElement('p');
    p.innerText = message;
    messageElement.appendChild(p);
    chatBody.appendChild(messageElement);
    chatBody.scrollTop = chatBody.scrollHeight;
}

function getBotResponse(message) {
    const lowerCaseMessage = message.toLowerCase();

    if (lowerCaseMessage.includes('hello') || lowerCaseMessage.includes('hi')) {
        return "Hello there! How can I help you today?";
    }

    if (lowerCaseMessage.includes('how does this work') || lowerCaseMessage.includes('how it works')) {
        return "This website uses your webcam to capture video. A machine learning model called MediaPipe Holistic tracks your body and hand movements. This data is then fed into a custom TensorFlow.js model that recognizes specific sign language gestures and displays the meaning!";
    }

    if (lowerCaseMessage.includes('technology') || lowerCaseMessage.includes('tech')) {
        return "I'm built with HTML, CSS, and JavaScript. The core technologies are TensorFlow.js for the machine learning model and MediaPipe for real-time hand and pose tracking in the browser.";
    }

    if (lowerCaseMessage.includes('what is this project') || lowerCaseMessage.includes('about this project')) {
        return "This is a real-time sign language detection project. It aims to translate sign language gestures into text, making communication more accessible.";
    }

    if (lowerCaseMessage.includes('sign language')) {
        return "Sign language is a visual language that uses hand shapes, facial expressions, and body movements to convey meaning. It's the primary language for many deaf and hard-of-hearing people.";
    }
    
    if (lowerCaseMessage.includes('who are you') || lowerCaseMessage.includes('what are you')) {
        return "I'm a friendly bot created to answer your questions about this sign language detection project. I'm here to help you understand how it works and learn more about sign language!";
    }

    if (lowerCaseMessage.includes('thank you') || lowerCaseMessage.includes('thanks')) {
        return "You're welcome! I'm happy to help. Do you have any other questions?";
    }

    return "I'm sorry, I don't have an answer for that right now. You can try asking about how the project works, the technology used, or general questions about sign language.";
}

