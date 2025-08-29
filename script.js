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

// State variables
let model;
let sequence = [];
const SEQUENCE_LENGTH = 30;
const actions = ['i love you', 'thank you', 'hello']; // The actions your model can predict

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
        model = await tf.loadLayersModel('model/model.json');
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


