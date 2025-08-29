# Sign Language to Text Translator

A real-time Indian Sign Language (ISL) detection system that translates hand gestures to text using AI and computer vision technologies.

## ✨ New Features & Improvements

### 🎨 Enhanced User Interface
- **Modern Design**: Clean, professional interface with improved visual hierarchy
- **Responsive Layout**: Fully responsive design that works on all devices
- **Loading States**: Visual feedback during system initialization
- **Status Indicators**: Real-time status updates for camera and model loading
- **Camera Overlay**: Helpful guidance text for users positioning their hands

### 🚀 Better User Experience
- **Help Section**: Step-by-step instructions for new users
- **Enhanced Tutorial Panel**: More sign language examples with descriptions
- **Improved Chat Support**: Better AI responses and error handling
- **Keyboard Shortcuts**: 
  - `Esc` to close chat
  - `Ctrl/Cmd + K` to open chat
- **Accessibility**: ARIA labels and improved screen reader support

### 🔧 Technical Improvements
- **Error Handling**: Comprehensive error handling with user-friendly messages
- **Performance Optimization**: Background animations disabled on mobile devices
- **Status Management**: Real-time system status updates
- **Better Chat API**: Improved error handling and response formatting
- **Text-to-Speech**: Enhanced speech synthesis with better pronunciation

### 📱 Mobile Optimization
- **Responsive Design**: Adapts to all screen sizes
- **Touch-Friendly**: Optimized for mobile interactions
- **Performance**: Reduced animations on mobile for better performance

## 🛠️ Technology Stack

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **AI/ML**: TensorFlow.js for sign language detection
- **Computer Vision**: MediaPipe Holistic for pose and hand tracking
- **AI Chat**: Google Gemini API for intelligent responses
- **Styling**: Modern CSS with backdrop filters and animations

## 🚀 Getting Started

### Prerequisites
- Modern web browser with camera access
- Internet connection for AI model loading
- Camera device (webcam or mobile camera)
- Microphone access for voice recognition (optional)

### Installation
1. Clone the repository
2. Open `index.html` in a web browser
3. Allow camera access when prompted
4. Wait for the AI model to load
5. Start using sign language gestures!

### Using Voice Recognition
1. **Click the microphone button** in the "Voice to Sign Language" section
2. **Speak clearly** when the button shows "Listening..."
3. **View the matching GIF** that appears based on your speech
4. **Try different phrases** - the system understands various ways to say each sign

### Usage
1. **Allow Camera Access**: Grant permission when prompted
2. **Position Your Hands**: Place your hands clearly in the camera view
3. **Perform Signs**: Use the tutorial panel to learn supported gestures
4. **View Results**: See real-time text translation of your signs

## 📚 Supported Signs

The system currently recognizes:
- **Hello** - Wave your hand in greeting
- **Thank You** - Touch your chin and move forward
- **I Love You** - Extend thumb, index, and pinky

### Voice Recognition Keywords
The speech recognition system understands various ways to say each sign:
- **Hello**: "hello", "hi", "hey", "greetings", "good morning", "good afternoon", "good evening"
- **Thank You**: "thank you", "thanks", "thank", "grateful", "appreciate", "bless you"
- **I Love You**: "i love you", "love you", "love", "heart", "care", "affection"
- **How Are You** - Point to yourself then others

## 🎯 Key Features

### Real-time Detection
- Instant sign language recognition
- Live camera feed with landmark visualization
- Continuous monitoring and updates

### Voice-to-Sign Translation
- **NEW!** Speech recognition for hands-free operation
- Speak to see matching ISL GIFs instantly
- Supports natural language variations
- Real-time audio processing and feedback

### Interactive Tutorial
- Visual examples of supported signs
- Step-by-step instructions
- Helpful descriptions for each gesture

### AI-Powered Chat Support
- Intelligent responses about sign language
- Technology explanations
- Project information and guidance

### Professional UI/UX
- Modern glassmorphism design
- Smooth animations and transitions
- Intuitive navigation and controls

## 🔍 How It Works

1. **Camera Input**: Captures video from user's webcam
2. **MediaPipe Processing**: Extracts pose, face, and hand landmarks
3. **Feature Extraction**: Converts landmarks to numerical features
4. **AI Prediction**: TensorFlow.js model predicts sign language gestures
5. **Text Output**: Displays detected signs with text-to-speech

## 🎨 Design Features

- **Glassmorphism**: Modern translucent design elements
- **Gradient Backgrounds**: Beautiful color transitions
- **Smooth Animations**: CSS animations and transitions
- **Responsive Grid**: Adaptive layout for all screen sizes
- **Interactive Elements**: Hover effects and visual feedback

## 📱 Responsive Design

The website automatically adapts to different screen sizes:
- **Desktop**: Full layout with side-by-side panels
- **Tablet**: Stacked layout with optimized spacing
- **Mobile**: Single-column layout with touch-friendly controls

## 🚀 Performance Features

- **Lazy Loading**: AI models load only when needed
- **Mobile Optimization**: Reduced animations on small screens
- **Efficient Rendering**: Optimized canvas and background animations
- **Error Recovery**: Graceful handling of system failures

## 🔧 Customization

### Adding New Signs
1. Train new models with additional sign language data
2. Update the `actions` array in `script.js`
3. Add corresponding tutorial GIFs to the `ISL_Gifs` folder

### Styling Changes
- Modify `style.css` for visual updates
- Adjust color schemes and animations
- Customize responsive breakpoints

## 🐛 Troubleshooting

### Common Issues
- **Camera Not Working**: Check browser permissions and camera availability
- **Model Loading Failed**: Ensure stable internet connection
- **Detection Issues**: Ensure good lighting and clear hand positioning

### Browser Compatibility
- **Chrome**: Full support (recommended)
- **Firefox**: Full support
- **Safari**: Full support
- **Edge**: Full support

## 🤝 Contributing

Contributions are welcome! Areas for improvement:
- Additional sign language support
- UI/UX enhancements
- Performance optimizations
- Documentation improvements

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

- MediaPipe team for computer vision capabilities
- TensorFlow.js for machine learning framework
- Google Gemini for AI chat functionality
- Open source community for inspiration and tools

---

**Built with ❤️ for the sign language community**
