import tensorflow as tf
import os

def convert_h5_to_tfjs():
    """Convert the isl_model_final.h5 model to TensorFlow.js format"""
    
    # Load the H5 model
    print("Loading H5 model...")
    model = tf.keras.models.load_model('isl_model_final.h5')
    
    # Create output directory for the converted model
    output_dir = 'isl_character_model'
    if not os.path.exists(output_dir):
        os.makedirs(output_dir)
    
    # Convert to TensorFlow.js format
    print("Converting to TensorFlow.js format...")
    tfjs.converters.save_keras_model(model, output_dir)
    
    print(f"Model converted successfully! Saved to {output_dir}/")
    print("Files created:")
    for file in os.listdir(output_dir):
        print(f"  - {file}")

if __name__ == "__main__":
    try:
        import tensorflowjs as tfjs
        convert_h5_to_tfjs()
    except ImportError:
        print("tensorflowjs not found. Installing...")
        os.system("pip install tensorflowjs")
        import tensorflowjs as tfjs
        convert_h5_to_tfjs()
