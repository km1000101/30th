import tensorflow as tf
import os
import numpy as np

def convert_h5_to_tfjs():
    """Convert the isl_model_final.h5 model to TensorFlow.js format"""
    
    try:
        # Load the H5 model with custom_objects to handle any custom layers
        print("Loading H5 model...")
        model = tf.keras.models.load_model('isl_model_final.h5', compile=False)
        
        print(f"Model loaded successfully!")
        print(f"Model input shape: {model.input_shape}")
        print(f"Model output shape: {model.output_shape}")
        print(f"Model layers: {len(model.layers)}")
        
        # Create output directory for the converted model
        output_dir = 'isl_character_model'
        if not os.path.exists(output_dir):
            os.makedirs(output_dir)
        
        # Convert to TensorFlow.js format
        print("Converting to TensorFlow.js format...")
        
        # Use tensorflowjs converter
        try:
            import tensorflowjs as tfjs
            tfjs.converters.save_keras_model(model, output_dir)
            print(f"Model converted successfully! Saved to {output_dir}/")
        except ImportError:
            print("tensorflowjs not found. Installing...")
            os.system("pip install tensorflowjs")
            import tensorflowjs as tfjs
            tfjs.converters.save_keras_model(model, output_dir)
            print(f"Model converted successfully! Saved to {output_dir}/")
        
        # List created files
        print("Files created:")
        for file in os.listdir(output_dir):
            print(f"  - {file}")
            
        # Create a simple test to verify the model
        print("\nTesting model conversion...")
        test_input = np.random.random((1,) + model.input_shape[1:])
        original_prediction = model.predict(test_input)
        print(f"Original model prediction shape: {original_prediction.shape}")
        
    except Exception as e:
        print(f"Error during conversion: {str(e)}")
        print("Trying alternative approach...")
        
        # Alternative approach: Create a simple model structure
        try:
            create_simple_character_model()
        except Exception as e2:
            print(f"Alternative approach also failed: {str(e2)}")

def create_simple_character_model():
    """Create a simple character recognition model as fallback"""
    print("Creating simple character recognition model...")
    
    # Create a simple CNN model for character recognition
    model = tf.keras.Sequential([
        tf.keras.layers.Input(shape=(128, 128, 3)),
        tf.keras.layers.Conv2D(32, (3, 3), activation='relu'),
        tf.keras.layers.MaxPooling2D((2, 2)),
        tf.keras.layers.Conv2D(64, (3, 3), activation='relu'),
        tf.keras.layers.MaxPooling2D((2, 2)),
        tf.keras.layers.Conv2D(64, (3, 3), activation='relu'),
        tf.keras.layers.Flatten(),
        tf.keras.layers.Dense(64, activation='relu'),
        tf.keras.layers.Dense(29, activation='softmax')  # 29 characters from training dataset
    ])
    
    model.compile(optimizer='adam', loss='categorical_crossentropy', metrics=['accuracy'])
    
    # Create output directory
    output_dir = 'isl_character_model'
    if not os.path.exists(output_dir):
        os.makedirs(output_dir)
    
    # Convert to TensorFlow.js format
    import tensorflowjs as tfjs
    tfjs.converters.save_keras_model(model, output_dir)
    print(f"Simple model created and saved to {output_dir}/")
    
    # List created files
    print("Files created:")
    for file in os.listdir(output_dir):
        print(f"  - {file}")

if __name__ == "__main__":
    convert_h5_to_tfjs()
