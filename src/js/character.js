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
const videoElement = document.getElementById('character-video');
const canvasElement = document.getElementById('character-canvas');
const canvasCtx = canvasElement.getContext('2d');
const outputElement = document.getElementById('character-output');
const loadingOverlay = document.getElementById('loading-overlay');
const statusText = document.querySelector('.status-text');
const statusDot = document.querySelector('.status-dot');
const cameraOverlay = document.querySelector('.camera-overlay');
const confidenceFill = document.getElementById('confidence-fill');
const confidenceText = document.getElementById('confidence-text');

// Stats elements
const totalDetections = document.getElementById('total-detections');
const accuracy = document.getElementById('accuracy');
const lastDetected = document.getElementById('last-detected');
const historyList = document.getElementById('history-list');
const clearHistoryBtn = document.getElementById('clear-history');

// Global variables
let model = null;
let hands = null;
let camera = null;
let detectionHistory = [];
let totalDetectionsCount = 0;
let correctDetections = 0;

// Character classes based on the actual training dataset
const characterClasses = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
    'N', 'nothing', 'O', 'P', 'Q', 'R', 'S', 'space', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
];

// Hand connections for MediaPipe Hands
const HAND_CONNECTIONS = [
    [0, 1], [1, 2], [2, 3], [3, 4], // thumb
    [0, 5], [5, 6], [6, 7], [7, 8], // index finger
    [0, 9], [9, 10], [10, 11], [11, 12], // middle finger
    [0, 13], [13, 14], [14, 15], [15, 16], // ring finger
    [0, 17], [17, 18], [18, 19], [19, 20], // pinky
    [0, 5], [5, 9], [9, 13], [13, 17] // palm connections
];

// MediaPipe Hands configuration
const handsConfig = {
    locateFile: (file) => {
        return `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`;
    }
};

const modelConfig = {
    maxNumHands: 1,
    modelComplexity: 1,
    minDetectionConfidence: 0.5,
    minTrackingConfidence: 0.5
};

// Status update function
function updateStatus(message, type = 'info') {
    if (statusText) {
        statusText.textContent = message;
    }
    
    if (statusDot) {
        statusDot.className = 'status-dot ' + type;
    }
    
    console.log(`Status: ${message} (${type})`);
}

// Loading overlay functions
function showLoadingOverlay() {
    if (loadingOverlay) {
        loadingOverlay.style.display = 'flex';
    }
}

function hideLoadingOverlay() {
    if (loadingOverlay) {
        loadingOverlay.style.display = 'none';
    }
}

function showCameraOverlay() {
    if (cameraOverlay) {
        cameraOverlay.style.display = 'flex';
    }
}

// Preprocess hand landmarks for model input
function preprocessLandmarks(landmarks) {
    if (!landmarks || landmarks.length === 0) return null;
    
    // Extract hand landmarks (21 points with x, y, z coordinates)
    const handLandmarks = landmarks[0];
    
    // Create a 128x128x3 image-like tensor from hand landmarks
    // This is a simplified approach - in a real implementation, you'd want to
    // create a proper image representation from the hand landmarks
    
    // For now, we'll create a placeholder image tensor
    const imageTensor = tf.zeros([1, 128, 128, 3]);
    
    return imageTensor;
}

// Predict character from hand landmarks
async function predictCharacter(landmarks) {
    try {
        if (!model) {
            console.warn('Model not loaded yet');
            return null;
        }
        
        const input = preprocessLandmarks(landmarks);
        if (!input) return null;
        
        // Make prediction using the loaded model
        const predictions = await model.predict(input);
        const predictionArray = await predictions.array();
        
        // Get the predicted class and confidence
        const maxIndex = predictionArray[0].indexOf(Math.max(...predictionArray[0]));
        const confidence = predictionArray[0][maxIndex];
        
        // Map index to character based on the actual training dataset
        const character = characterClasses[maxIndex] || 'Unknown';
        
        return {
            character: character,
            confidence: confidence
        };
        
    } catch (error) {
        console.error('Prediction error:', error);
        return null;
    }
}

// Update confidence bar
function updateConfidenceBar(confidence) {
    if (confidenceFill) {
        confidenceFill.style.width = `${confidence * 100}%`;
    }
    
    if (confidenceText) {
        confidenceText.textContent = `Confidence: ${(confidence * 100).toFixed(1)}%`;
    }
}

// Add detection to history
function addToHistory(character, confidence) {
    const timestamp = new Date().toLocaleTimeString();
    const historyItem = {
        character,
        confidence,
        timestamp
    };
    
    detectionHistory.unshift(historyItem);
    
    // Keep only last 20 items
    if (detectionHistory.length > 20) {
        detectionHistory = detectionHistory.slice(0, 20);
    }
    
    updateHistoryDisplay();
    updateStats();
}

// Update history display
function updateHistoryDisplay() {
    if (!historyList) return;
    
    if (detectionHistory.length === 0) {
        historyList.innerHTML = '<div class="history-placeholder">No characters detected yet</div>';
        return;
    }
    
    const historyHTML = detectionHistory.map(item => `
        <div class="history-item">
            <div class="history-character">${item.character}</div>
            <div class="history-confidence">${(item.confidence * 100).toFixed(1)}%</div>
            <div class="history-time">${item.timestamp}</div>
        </div>
    `).join('');
    
    historyList.innerHTML = historyHTML;
}

// Update statistics
function updateStats() {
    if (totalDetections) {
        totalDetections.textContent = totalDetectionsCount;
    }
    
    if (accuracy) {
        const accuracyPercent = totalDetectionsCount > 0 ? 
            (correctDetections / totalDetectionsCount * 100).toFixed(1) : 0;
        accuracy.textContent = `${accuracyPercent}%`;
    }
    
    if (lastDetected && detectionHistory.length > 0) {
        lastDetected.textContent = detectionHistory[0].character;
    }
}

// MediaPipe Hands results handler
function onResults(results) {
    canvasCtx.save();
    canvasCtx.clearRect(0, 0, canvasElement.width, canvasElement.height);
    
    // Draw the video frame
    if (results.image) {
        canvasCtx.drawImage(results.image, 0, 0, canvasElement.width, canvasElement.height);
    }
    
    // Draw hand landmarks
    if (results.multiHandLandmarks) {
        for (const landmarks of results.multiHandLandmarks) {
            drawConnectors(canvasCtx, landmarks, HAND_CONNECTIONS, { color: '#00FF00', lineWidth: 2 });
            drawLandmarks(canvasCtx, landmarks, { color: '#FF0000', lineWidth: 1, radius: 3 });
        }
        
        // Predict character if hands are detected
        if (results.multiHandLandmarks.length > 0) {
            predictCharacter(results.multiHandLandmarks).then(prediction => {
                if (prediction) {
                    outputElement.textContent = prediction.character;
                    updateConfidenceBar(prediction.confidence);
                    
                    // Add to history if confidence is high enough
                    if (prediction.confidence > 0.7) {
                        totalDetectionsCount++;
                        addToHistory(prediction.character, prediction.confidence);
                    }
                }
            });
        }
    }
    
    canvasCtx.restore();
}

// Initialize the character recognition system
async function main() {
    try {
        showLoadingOverlay();
        updateStatus('Loading Character Recognition Model...', 'info');
        
        // Load the model
        console.log('Loading character recognition model...');
        model = await tf.loadLayersModel('../models/isl_character_model/model.json');
        console.log('Model loaded.');
        
        updateStatus('Model loaded successfully!', 'success');
        
        // Initialize MediaPipe Hands
        updateStatus('Initializing MediaPipe Hands...', 'info');
        hands = new Hands(handsConfig);
        hands.setOptions(modelConfig);
        hands.onResults(onResults);
        
        updateStatus('Setting up camera...', 'info');
        
        // Setup camera
        camera = new Camera(videoElement, {
            onFrame: async () => {
                await hands.send({ image: videoElement });
            },
            width: 640,
            height: 480
        });
        
        camera.start();
        
        // Hide loading overlay and show camera overlay
        setTimeout(() => {
            hideLoadingOverlay();
            updateStatus('Camera active - Ready for character recognition', 'success');
            showCameraOverlay();
        }, 1000);
        
    } catch (error) {
        console.error('Initialization error:', error);
        updateStatus('Failed to initialize character recognition system', 'error');
        
        if (outputElement) {
            outputElement.innerHTML = '<span style="color: #ff4444;">Error: Failed to load character recognition system. Please check if the model files are accessible.</span>';
        }
        
        // Try alternative model path if the first one fails
        if (error.message.includes('model.json') || error.message.includes('404')) {
            try {
                console.log('Trying alternative model path...');
                model = await tf.loadLayersModel('../../models/isl_character_model/model.json');
                console.log('Model loaded with alternative path.');
                updateStatus('Model loaded successfully with alternative path!', 'success');
                
                // Continue with initialization
                hands = new Hands(handsConfig);
                hands.setOptions(modelConfig);
                hands.onResults(onResults);
                
                camera = new Camera(videoElement, {
                    onFrame: async () => {
                        await hands.send({ image: videoElement });
                    },
                    width: 640,
                    height: 480
                });
                
                camera.start();
                
                setTimeout(() => {
                    hideLoadingOverlay();
                    updateStatus('Camera active - Ready for character recognition', 'success');
                    showCameraOverlay();
                }, 1000);
                
                return;
            } catch (altError) {
                console.error('Alternative model path also failed:', altError);
            }
        }
        
        setTimeout(() => {
            hideLoadingOverlay();
        }, 2000);
    }
}

// Clear history button event listener
if (clearHistoryBtn) {
    clearHistoryBtn.addEventListener('click', () => {
        detectionHistory = [];
        totalDetectionsCount = 0;
        correctDetections = 0;
        updateHistoryDisplay();
        updateStats();
    });
}

// Initialize the system
main();
