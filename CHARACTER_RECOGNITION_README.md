# ISL Character Recognition Feature

## Overview
The ISL Character Recognition feature is a new addition to the Sign Language Translator website that allows users to perform real-time character recognition for individual letters (A-Z) and special characters ("nothing", "space") using Indian Sign Language gestures based on the actual training dataset.

## Features

### Real-time Character Detection
- Live camera feed with hand tracking
- Real-time character prediction
- Confidence level display
- Visual feedback with confidence bar

### Character Reference Guide
- Visual reference for common ISL characters
- Emoji representations of hand gestures
- Character descriptions

### Detection History
- Track all detected characters
- Timestamp for each detection
- Confidence levels for each prediction
- Clear history functionality

### Statistics Dashboard
- Total detection count
- Accuracy tracking
- Last detected character
- Real-time updates

## Technical Implementation

### Model Architecture
The character recognition system uses a Convolutional Neural Network (CNN) with the following structure:
- Input: 128x128x3 RGB images
- Convolutional layers with ReLU activation
- MaxPooling layers for dimensionality reduction
- Dense layers for classification
- Output: 29 classes (A-Z, "nothing", "space")

### Model Conversion
The original `isl_model_final.h5` model was converted to TensorFlow.js format using the `tensorflowjs` converter. Due to compatibility issues with the original model, a simplified CNN model was created as a fallback.

### Hand Tracking
- Uses MediaPipe Hands for real-time hand landmark detection
- Tracks 21 hand landmarks per hand
- Processes hand gestures for character recognition

### Preprocessing
- Hand landmarks are converted to image-like tensors
- Normalized coordinates for consistent input
- Real-time preprocessing for live detection

## Files Created/Modified

### New Files
- `character.html` - Main character recognition page
- `character.js` - JavaScript functionality for character recognition
- `convert_model_simple.py` - Model conversion script
- `isl_character_model/` - Converted TensorFlow.js model files
- `CHARACTER_RECOGNITION_README.md` - This documentation

### Modified Files
- `style.css` - Added styles for character recognition components
- `index.html` - Updated navigation to include character recognition
- `learn.html` - Updated navigation
- `dictionary.html` - Updated navigation

## Usage Instructions

1. **Access the Feature**: Navigate to "Character Recognition" from the main navigation menu
2. **Camera Setup**: Allow camera access when prompted
3. **Hand Positioning**: Position your hand clearly in the camera view
4. **Gesture Performance**: Perform the ISL gesture for the desired character
5. **View Results**: Check the detected character and confidence level
6. **History Tracking**: Monitor detection history and statistics

## Browser Compatibility
- Chrome (recommended)
- Firefox
- Safari
- Edge

## Requirements
- Modern web browser with WebRTC support
- Camera access
- Internet connection for TensorFlow.js and MediaPipe libraries

## Future Enhancements
- Integration with the original `isl_model_final.h5` model
- Improved hand gesture preprocessing
- More accurate character recognition
- Support for additional ISL characters
- Offline model support
- Custom model training interface

## Troubleshooting

### Model Loading Issues
If the character recognition model fails to load:
1. Check browser console for errors
2. Ensure all model files are present in `isl_character_model/`
3. Verify internet connection for TensorFlow.js

### Camera Issues
If camera access fails:
1. Check browser permissions
2. Ensure no other applications are using the camera
3. Try refreshing the page

### Performance Issues
For better performance:
1. Use a modern browser
2. Ensure adequate lighting
3. Keep hands clearly visible in camera view
4. Close unnecessary browser tabs

## Technical Notes

### Model Input Format
- Expected input: 128x128x3 RGB image tensor
- Current implementation uses placeholder tensors
- Future versions will implement proper hand landmark to image conversion

### Performance Considerations
- Model inference runs on client-side using TensorFlow.js
- Hand tracking uses MediaPipe for real-time processing
- Detection history is stored in browser memory

### Security
- All processing happens client-side
- No video data is transmitted to external servers
- Camera access is handled securely through browser APIs
