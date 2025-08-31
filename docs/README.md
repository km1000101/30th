# Indian Sign Language Translator 🤟

A comprehensive web application for real-time Indian Sign Language (ISL) detection and learning, powered by AI and computer vision.

## 🌟 Features

### 🎥 Real-time Sign Detection
- **Live camera feed** with instant hand gesture recognition
- **AI-powered detection** using TensorFlow.js and MediaPipe
- **Real-time translation** of ISL gestures to text
- **Confidence indicators** showing detection accuracy

### 📚 Learning Platform
- **Video lessons** from Google Drive integration
- **Interactive tutorials** with GIF demonstrations
- **Categorized learning** (Basic Greetings, Family & People, Food & Dining, etc.)
- **Progress tracking** for learning journey

### 🔤 Character Recognition
- **Real-time character detection** (A-Z, numbers, special characters)
- **Hand tracking** using MediaPipe Hands
- **Detection history** with timestamps and confidence levels
- **Visual reference guide** for ISL characters

### 📖 Sign Dictionary
- **Comprehensive ISL dictionary** with GIF demonstrations
- **Search functionality** for quick sign lookup
- **Categorized signs** for easy navigation
- **Visual learning** with animated demonstrations

## 🚀 Quick Start

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Camera access for real-time detection
- Internet connection for video lessons and model loading

### Installation
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd 30th
   ```

2. Open the application:
   - Navigate to `src/pages/index.html`
   - Open in your web browser
   - Or serve using a local web server

3. Allow camera access when prompted

### Usage
1. **Home Page**: Real-time sign detection with live camera feed
2. **Learn to Sign**: Video lessons and interactive tutorials
3. **Sign Dictionary**: Browse and search ISL signs
4. **Character Recognition**: Real-time character detection
5. **About ISL**: Information about Indian Sign Language

## 🏗️ Project Structure

```
30th/
├── docs/                              # Documentation
│   ├── README.md                      # This file
│   ├── PROJECT_STRUCTURE.md           # Detailed project organization
│   ├── CHARACTER_RECOGNITION_README.md # Character recognition guide
│   └── VIDEO_INTEGRATION_README.md    # Video integration guide
├── notebooks/                         # Development notebooks
│   ├── Action Detection Refined.ipynb  
├── src/                               # Main application
│   ├── pages/                         # HTML pages
│   │   ├── index.html                 # Main page with real-time detection
│   │   ├── learn.html                 # Learning platform
│   │   ├── dictionary.html            # Sign dictionary
│   │   ├── character.html             # Character recognition
│   │   └── about.html                 # About ISL
│   ├── css/                           # Styling
│   │   └── style.css                  # Main stylesheet
│   ├── js/                            # JavaScript functionality
│   │   ├── script.js                  # Main application logic
│   │   ├── character.js               # Character recognition
│   │   ├── dictionary.js              # Dictionary functionality
│   │   ├── learn.js                   # Learning page logic
│   │   └── video-content.js           # Video content management
│   ├── models/                        # AI models
│   │   ├── action.h5                  # Action detection model
│   │   ├── isl_model_final.h5         # Main ISL model
│   │   ├── isl_character_model/       # Character recognition model
│   │   ├── tfjs_model/                # TensorFlow.js models
│   │   └── model/                     # Additional models
│   ├── assets/                        # Media assets
│   │   └── gifs/                      # ISL demonstration GIFs
│   └── scripts/                       # Python utilities
│       ├── main2.py                   # Main Python application
│       ├── convert_model.py           # Model conversion
│       └── convert_model_simple.py    # Simplified conversion
```

## 🛠️ Technology Stack

### Frontend
- **HTML5** - Structure and semantics
- **CSS3** - Styling and responsive design
- **JavaScript (ES6+)** - Interactive functionality
- **TensorFlow.js** - Client-side machine learning
- **MediaPipe** - Hand tracking and pose detection

### Backend & AI
- **Python** - Model training and conversion
- **TensorFlow/Keras** - Deep learning models
- **OpenCV** - Computer vision processing
- **Jupyter Notebooks** - Development and experimentation

### External Services
- **Google Drive** - Video lesson hosting
- **Unsplash** - High-quality preview images
- **CDN Services** - TensorFlow.js and MediaPipe libraries

## 🎯 Key Features Explained

### Real-time Detection
The application uses MediaPipe for hand tracking and TensorFlow.js for gesture recognition. The system processes video frames in real-time to detect ISL gestures and convert them to text.

### Video Learning Integration
Video lessons are hosted on Google Drive and integrated with beautiful preview images from Unsplash. The system supports categorized learning with progress tracking.

### Character Recognition
Advanced character recognition system using CNN models converted to TensorFlow.js format. Supports real-time detection of ISL alphabets and numbers.

### Responsive Design
The application is fully responsive and works seamlessly across desktop, tablet, and mobile devices.

## 🔧 Development

### Setting Up Development Environment
1. Install Python dependencies:
   ```bash
   pip install tensorflow opencv-python numpy jupyter
   ```

2. For model conversion:
   ```bash
   python scripts/convert_model_simple.py
   ```

3. Open Jupyter notebooks for experimentation:
   ```bash
   jupyter notebook notebooks/
   ```

### Model Training
- Use the notebooks in the `notebooks/` directory for model development
- Models are saved in `src/models/` directory
- Convert models to TensorFlow.js format for web deployment

## 🌐 Browser Compatibility

- **Chrome** (Recommended) - Full feature support
- **Firefox** - Full feature support
- **Safari** - Full feature support
- **Edge** - Full feature support

## 📱 Mobile Support

The application is fully responsive and optimized for mobile devices:
- Touch-friendly interface
- Responsive video player
- Optimized camera access
- Mobile-optimized performance

## 🔒 Privacy & Security

- **Client-side processing** - All AI processing happens in your browser
- **No data transmission** - Video feeds stay local to your device
- **Secure camera access** - Uses standard browser APIs
- **Privacy-focused** - No personal data collection

## 👥 Team
- **[Kishan KM](https://www.linkedin.com/in/kishankm08)** - Team Member and Collaborator
- **[Nikhil M](https://www.linkedin.com/in/nikhil-m27)** - Team Member and Collaborator
- **[Mayur R](https://www.linkedin.com/in/mayurx75)** - Team Member and Collaborator
- **[Manya BJ](https://www.linkedin.com/in/manya-b-j)** - Team Member and Collaborator

## 🙏 Acknowledgments

- **[Dr. Victor Ikechukwu Agughasi](https://www.linkedin.com/in/victor-ikechukwu-agughasi)** - Our amazing project guide and mentor who has been with us every step of the way! His wisdom, patience, and unwavering support made this project possible. Thank you for believing in us and pushing us to create something meaningful that can truly help people communicate better.
- **Indian Sign Language community** for inspiration and guidance

## 📞 Support

For support and questions:
- Check the documentation in the `docs/` folder
- Review the project structure guide
- Examine the feature-specific README files

## 🚀 Future Roadmap

- [ ] Enhanced model accuracy
- [ ] Offline support
- [ ] Mobile app development
- [ ] Multi-language support
- [ ] User-generated content
- [ ] Advanced analytics
- [ ] Custom model training interface

---

**Happy signing!** 🤟

*Empowering communication through technology and AI*
