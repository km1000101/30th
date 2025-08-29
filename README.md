# Sign Language to Text Translator
hgyidgosuhfyvdhkv
## Overview
This project is a real-time Indian Sign Language (ISL) to text translator that uses machine learning and computer vision to bridge communication gaps between the deaf/hard of hearing community and others. It leverages TensorFlow.js and MediaPipe for accurate hand gesture recognition and translation.

## Features
- Real-time sign language detection
- Live video feed processing
- Instant text translation
- Interactive chatbot for learning and support
- Cross-browser compatibility
- User-friendly interface

## Technologies Used
- **TensorFlow.js** (v3.11.0) - For running machine learning models in the browser
- **MediaPipe Holistic** - For hand, face, and pose landmark detection
- **HTML5 Canvas** - For rendering video and detection overlays
- **Modern JavaScript** - For real-time processing and UI updates
- **Responsive CSS** - For cross-device compatibility

## Why ISL Translation Matters
Indian Sign Language (ISL) is used by millions of deaf and hard of hearing individuals in India. Some key statistics:
- Over 63 million people in India have significant hearing impairment
- ISL is the primary mode of communication for many deaf communities
- Only a small percentage of the general population understands ISL
- Digital tools like this can help bridge the communication gap

## Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Webcam access
- Internet connection for loading ML models

### Installation
1. Clone the repository:
```bash
git clone https://github.com/km1000101/30th.git
```

2. Navigate to the project directory:
```bash
cd 30th
```

3. Open `index.html` in a web browser or serve it using a local server

## Usage
1. Allow camera access when prompted
2. Position yourself in front of the camera
3. Make ISL signs within the camera frame
4. View real-time translations in the output area
5. Use the chatbot for help or questions about signs

## Features of the Chatbot
The integrated chatbot can help with:
- Learning basic ISL signs
- Understanding sign language detection
- Technical support and troubleshooting
- General information about sign language
- Tips for improving signing accuracy

## Technical Architecture
- **Front-end**: HTML5, CSS3, JavaScript
- **ML Model**: TensorFlow.js custom model trained on ISL dataset
- **Hand Tracking**: MediaPipe Holistic for precise landmark detection
- **Video Processing**: HTML5 Canvas and Camera API
- **Real-time Processing**: Optimized for low-latency detection

## Model Information
The project uses two key components:
1. `action.h5` - The trained model for sign recognition
2. `model/` directory containing:
   - `model.json` - Model architecture and metadata
   - `group1-shard1of1.bin` - Model weights and parameters

## Contributing
Contributions are welcome! Here's how you can help:
1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## Future Enhancements
- Support for more ISL signs
- Offline functionality
- Mobile app version
- Multi-language support
- Sign language learning games
- Enhanced accuracy in various lighting conditions

## License
This project is open source and available under the MIT License.

## Acknowledgments
- The Indian Sign Language Research and Training Center
- TensorFlow.js and MediaPipe teams
- Contributors and supporters of the ISL translation project

## Contact
For questions, suggestions, or collaboration opportunities, please:
1. Open an issue in this repository
2. Contact through GitHub
3. Use the in-app chatbot for immediate assistance

---
Made with ❤️ for the deaf and hard of hearing community
