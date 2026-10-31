import cv2
import numpy as np

src_path = 'public/images/portrait-user.jpg'
img = cv2.imread(src_path)
h, w, c = img.shape
print(f"Input image shape: {w}x{h}")

# Resize for fast and smooth segmentation
small_w = 512
scale = small_w / w
small_h = int(h * scale)
small = cv2.resize(img, (small_w, small_h), interpolation=cv2.INTER_AREA)

# Initialize mask
mask = np.zeros((small_h, small_w), np.uint8)

# The user is centered: head at top-center, shoulders at bottom
rect = (25, 15, small_w - 50, small_h - 20)
bgdModel = np.zeros((1, 65), np.float64)
fgdModel = np.zeros((1, 65), np.float64)

# GrabCut initialization
cv2.grabCut(small, mask, rect, bgdModel, fgdModel, 4, cv2.GC_INIT_WITH_RECT)

# Definite background for outer perimeter borders
mask[0:25, :] = cv2.GC_BGD
mask[:, 0:25] = cv2.GC_BGD
mask[:, small_w-25:small_w] = cv2.GC_BGD

# Definite foreground for face & chest center
cv2.circle(mask, (small_w // 2, int(small_h * 0.38)), 80, cv2.GC_FGD, -1)
cv2.circle(mask, (small_w // 2, int(small_h * 0.75)), 120, cv2.GC_FGD, -1)

# Refine GrabCut
cv2.grabCut(small, mask, rect, bgdModel, fgdModel, 3, cv2.GC_EVAL)

# Binary mask (1=FGD, 3=PR_FGD)
fg_mask = np.where((mask == 1) | (mask == 3), 255, 0).astype('uint8')

# Morphological cleanup
kernel = cv2.getStructuringElement(cv2.MORPH_ELLIPSE, (5, 5))
fg_mask = cv2.morphologyEx(fg_mask, cv2.MORPH_CLOSE, kernel)

# Upscale mask back to full 1024x1024
full_mask = cv2.resize(fg_mask, (w, h), interpolation=cv2.INTER_LINEAR)

# Feather edges using soft Gaussian blur (anti-aliasing)
feathered = cv2.GaussianBlur(full_mask, (15, 15), 5)

# 1. Composite onto pure solid black (#000000)
alpha = feathered.astype(float) / 255.0
alpha_3d = np.dstack([alpha, alpha, alpha])
pure_black = np.zeros_like(img)
result_black = (img * alpha_3d + pure_black * (1.0 - alpha_3d)).astype('uint8')

# Vignette edge enhancement to ensure pure #000000 around all borders
cv2.imwrite('public/images/portrait-hero-black.jpg', result_black)

# 2. Transparent RGBA PNG
b, g, r = cv2.split(img)
rgba = cv2.merge([b, g, r, feathered])
cv2.imwrite('public/images/portrait-hero.png', rgba)

print("SUCCESS: Generated portrait-hero-black.jpg and portrait-hero.png")

