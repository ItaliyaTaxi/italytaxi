import os
from PIL import Image

input_path = r'd:\Documents\GitHub\italy\public\images\almafi.webp'
output_path = r'd:\Documents\GitHub\italy\public\images\beach-transfer.webp'

with Image.open(input_path) as img:
    # Resize slightly if needed or just compress
    quality = 85
    while quality > 10:
        img.save(output_path, 'WEBP', quality=quality, method=6)
        if os.path.getsize(output_path) < 100 * 1024:
            break
        quality -= 5
    print(f"Compressed beach-transfer to {os.path.getsize(output_path) / 1024:.2f} KB with quality {quality}")
