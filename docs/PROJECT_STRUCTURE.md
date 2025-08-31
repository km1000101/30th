# Project Structure - Your Guide to Our Codebase! 🏗️

 This document shows you exactly how we've structured our Sign Language Translator project. Think of it as a map to our digital house - everything has its perfect spot! 🏠

## Here's How We've Organized Everything 📁

```
30th/
├── README.md                          # Your main guide to the project
├── PROJECT_STRUCTURE.md               # This very file you're reading!
├── docs/                              # All our documentation lives here
│   ├── CHARACTER_RECOGNITION_README.md
│   └── VIDEO_INTEGRATION_README.md
├── notebooks/                         # Where we experiment and learn
│   ├── Action Detection Refined.ipynb
│   └── Tutorial (3).ipynb
├── src/                               # The heart of our application
│   ├── pages/                         # All our beautiful web pages
│   │   ├── index.html                 # The main page that welcomes everyone
│   │   ├── about.html                 # Learn all about ISL
│   │   ├── character.html             # Where the character magic happens
│   │   ├── dictionary.html            # Your sign language dictionary
│   │   └── learn.html                 # Your learning playground
│   ├── css/                           # Making everything look gorgeous
│   │   └── style.css                  # Our main styling wizard
│   ├── js/                            # All the interactive magic
│   │   ├── script.js                  # The brain of our application
│   │   ├── character.js               # Character recognition wizardry
│   │   ├── dictionary.js              # Dictionary functionality
│   │   ├── learn.js                   # Learning page logic
│   │   └── video-content.js           # Video content management
│   ├── models/                        # Our AI/ML superheroes
│   │   ├── action.h5                  # Action detection model
│   │   ├── isl_model_final.h5         # Our main ISL model
│   │   ├── isl_character_model/       # Character recognition model files
│   │   ├── tfjs_model/                # TensorFlow.js model files
│   │   └── model/                     # Additional model files
│   ├── assets/                        # All our media treasures
│   │   └── gifs/                      # Sign language GIF demonstrations
│   │       └──               # Indian Sign Language GIFs
│   └── scripts/                       # Our Python helpers
│       ├── main2.py                   # Main Python application
│       ├── convert_model.py           # Model conversion script
│       └── convert_model_simple.py    # Simplified model conversion

```

## Why We Organized It This Way 🎯

### 📁 **Everything Has Its Perfect Spot**
- **Frontend files**: All your HTML, CSS, and JavaScript are neatly organized by type
- **Backend magic**: Python scripts are separated from frontend code (no confusion!)
- **AI models**: All our smart models are in one cozy location
- **Media assets**: GIFs and other media files are properly organized

### 🧭 **Finding Things is a Breeze**
- **Pages**: All HTML files are in one place - no hunting around!
- **Styles**: CSS files are centralized (because we love consistency!)
- **Scripts**: JavaScript files are grouped together (teamwork makes the dream work!)
- **Documentation**: All README files are in the docs folder (knowledge is power!)

### 🔬 **Development Made Easy**
- **Notebooks**: Jupyter notebooks for when we want to experiment and learn
- **Scripts**: Python utilities that help us convert and process models
- **Models**: Organized storage for different AI tasks (because variety is the spice of life!)

### 🚀 **Ready for the Real World**
- Clear structure makes deployment super smooth
- Asset paths are properly organized (no broken links!)
- No messy files scattered in the root directory (we're neat freaks!)

## How We Keep Everything Connected 🔗

All our HTML files have been updated to reference the new file structure perfectly:
- **CSS files**: `../css/style.css` - Making everything look beautiful
- **JavaScript files**: `../js/filename.js` - Adding all the interactive magic
- **Asset files**: `../assets/gifs/filename.gif` - Showing those amazing sign language demonstrations
- **Model files**: `../models/filename.h5` - Loading our AI superheroes

## Pro Tips for Navigating Our Codebase 💡

1. **Start with the pages**: Check out `src/pages/` to see all our web pages
2. **Style it up**: Look in `src/css/` for all our beautiful styling
3. **Add some magic**: Explore `src/js/` for all the interactive features
4. **Meet our AI friends**: Visit `src/models/` to see our machine learning models
5. **Learn and experiment**: Check out `notebooks/` for our development work
6. **Read the docs**: Everything you need to know is in the `docs/` folder

## Why This Structure Rocks! 🎸

- **Scalable**: Easy to add new features without messing up existing ones
- **Maintainable**: Finding and fixing issues is super simple
- **Collaborative**: Multiple developers can work without stepping on each other's toes
- **Professional**: Shows we know what we're doing (because we do!)

---

**Happy coding!** 💻 We hope this structure makes your journey through our codebase as smooth as possible!

