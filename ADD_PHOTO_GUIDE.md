# How to Add Your Profile Photo

## Quick Steps

1. **Prepare Your Photo**
   - Use a square photo (recommended: 800x800px or larger)
   - Supported formats: JPG, PNG, WebP
   - Make sure it's a clear, professional photo

2. **Add Photo to Project**
   
   **Option A: Using the public folder (Recommended)**
   - Create a folder: `d:\New folder\Portfolio\public\assets`
   - Place your photo there as: `profile.jpg`
   
   **Option B: Using the src folder**
   - Create a folder: `d:\New folder\Portfolio\src\assets`
   - Place your photo there as: `profile.jpg`

3. **Update the ProfilePhoto Component**
   
   Open: `src/components/About/ProfilePhoto.tsx`
   
   Find this section (around line 33-37):
   ```tsx
   {/* Uncomment and use this when you add your photo */}
   {/* <img 
       src="/src/assets/profile.jpg" 
       alt="Deepanshu Gupta"
       className="w-full h-full object-cover"
   /> */}
   ```
   
   **If using public folder:**
   Uncomment and change to:
   ```tsx
   <img 
       src="/assets/profile.jpg" 
       alt="Deepanshu Gupta"
       className="w-full h-full object-cover"
   />
   ```
   
   **If using src folder:**
   Add import at the top of the file:
   ```tsx
   import profileImage from '@/assets/profile.jpg';
   ```
   
   Then uncomment and change to:
   ```tsx
   <img 
       src={profileImage} 
       alt="Deepanshu Gupta"
       className="w-full h-full object-cover"
   />
   ```

4. **Remove the Placeholder**
   
   Delete or comment out the placeholder div (lines 20-30):
   ```tsx
   {/* Placeholder - DELETE THIS when you add your photo */}
   <div className="w-full h-full bg-gradient-to-br from-primary/20 via-secondary/20 to-accent-pink/20 flex items-center justify-center">
       ...
   </div>
   ```

## Current Setup

✅ **ProfilePhoto component created** - Features:
- Animated gradient border (rotating)
- Pulsing glow effect
- Responsive sizing (320px x 320px)
- Placeholder with instructions

✅ **Integrated into About section** - Replaces the 3D morphing avatar

## Photo Tips

- **Lighting**: Use good lighting, avoid shadows on face
- **Background**: Clean, simple background works best
- **Framing**: Center yourself in the frame
- **Expression**: Professional but approachable
- **Quality**: High resolution for crisp display

## File Structure
```
Portfolio/
├── public/
│   └── assets/
│       └── profile.jpg  ← Place photo here (Option A)
├── src/
│   ├── assets/
│   │   └── profile.jpg  ← Or place photo here (Option B)
│   └── components/
│       └── About/
│           └── ProfilePhoto.tsx  ← Update this file
```

## Need Help?

If you encounter any issues:
1. Check the browser console for errors
2. Verify the file path is correct
3. Make sure the image file name matches exactly
4. Try refreshing the page after adding the photo
