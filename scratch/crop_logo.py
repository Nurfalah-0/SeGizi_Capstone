from PIL import Image
import os

def crop_logo():
    # Path to the original logo
    input_path = 'resources/images/logo-NutriFlow.php' # Wait, why .php? No it's .png
    input_path = 'resources/images/logo-NutriFlow.png'
    output_path = 'public/logo-nutriflow-favicon.png'
    
    if not os.path.exists(input_path):
        print(f"Error: {input_path} not found")
        return

    img = Image.open(input_path).convert("RGBA")
    
    # Get the non-transparent bounding box
    bbox = img.getbbox()
    if not bbox:
        print("Error: Image is empty")
        return
        
    # In "Icon + Text", the icon is on the left.
    # We crop the left part based on height to get a square-ish icon
    w, h = img.size
    # Guessing the icon is the leftmost part up to roughly its height
    # But let's be smarter: crop based on the first major gap or just the left bbox
    
    # Let's crop to the full height but only the left part
    # A safe guess for NutriFlow logo: the icon is roughly the first 25% of width if horizontal
    # Or just crop a square from the left
    icon_crop = img.crop((0, 0, h, h))
    
    # Now get the EXACT bounding box of just that icon
    symbol_bbox = icon_crop.getbbox()
    if symbol_bbox:
        symbol = icon_crop.crop(symbol_bbox)
        
        # Make it square with padding
        sw, sh = symbol.size
        # Add 10% padding
        pad = int(max(sw, sh) * 0.1)
        side = max(sw, sh) + (pad * 2)
        
        final = Image.new("RGBA", (side, side), (0,0,0,0))
        final.paste(symbol, (pad + (side - pad*2 - sw)//2, pad + (side - pad*2 - sh)//2))
        
        final.save(output_path)
        print(f"Successfully saved cropped icon to {output_path}")
    else:
        print("Could not find symbol bbox")

if __name__ == "__main__":
    crop_logo()
