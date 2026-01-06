# Tōst Brand Guidelines

## Brand Identity

### Brand Name
**Tōst** (with macron over 'o')
- Always use the macron in official branding
- Pronunciation: "Toast" with emphasis on the long 'o' sound

### Brand Positioning
Tōst is an upscale casual dining destination specializing in artisanal sandwiches and gourmet burgers. We blend comfort food with culinary craftsmanship, creating memorable dining experiences in the heart of Andheri West, Mumbai.

### Brand Values
- **Quality First:** Premium ingredients, expertly crafted
- **Warmth & Hospitality:** Welcoming atmosphere, genuine service
- **Modern Tradition:** Classic comfort food, elevated
- **Local Pride:** Rooted in Mumbai's vibrant food culture

---

## Color Palette

### Primary Colors

**Deep Red** - #8d2424
- RGB: 141, 36, 36
- Use for: CTAs, accent elements, highlights
- Represents: Passion, appetite, energy

**Rich Gold** - #c69d54
- RGB: 198, 157, 84
- Use for: Luxury accents, borders, icons
- Represents: Premium quality, warmth, sophistication

**Navy Blue** - #013961
- RGB: 1, 57, 97
- Use for: Headers, text, navigation
- Represents: Trust, reliability, elegance

### Secondary Colors

**Warm Cream** - #f5f1e8
- Use for: Backgrounds, cards, sections

**Soft Beige** - #e8dcc4
- Use for: Dividers, subtle backgrounds

**Charcoal** - #2d2d2d
- Use for: Body text, descriptions

**Off White** - #fafaf8
- Use for: Main backgrounds, breathing room

### Color Usage Guidelines
- Navy Blue: 40% of design elements
- Deep Red: 20% (strategic accents only)
- Rich Gold: 15% (highlights and premium touches)
- Neutrals (Cream/Beige/White): 25%

---

## Typography

### Primary Typeface
**Playfair Display** (Headings & Brand Name)
- Weights: Bold (700), SemiBold (600)
- Use for: H1, H2, brand name, section headers
- Character: Elegant, sophisticated, high-end

**Fallback:** Georgia, serif

### Secondary Typeface
**Inter** (Body & UI Text)
- Weights: Regular (400), Medium (500), SemiBold (600)
- Use for: Body text, descriptions, navigation, buttons
- Character: Clean, modern, highly readable

**Fallback:** -apple-system, sans-serif

### Type Scale
- **H1 (Hero):** 3.5rem - 4.5rem (56px-72px) - Playfair Display Bold
- **H2 (Section Headers):** 2.5rem - 3rem (40px-48px) - Playfair Display SemiBold
- **H3 (Subsections):** 1.75rem - 2rem (28px-32px) - Playfair Display SemiBold
- **Body Large:** 1.125rem (18px) - Inter Regular
- **Body:** 1rem (16px) - Inter Regular
- **Small/Captions:** 0.875rem (14px) - Inter Regular

### Typography Guidelines
- Line height: 1.6 for body text, 1.2 for headings
- Letter spacing: Slightly increased (0.01em) for gold accents
- Never use all caps for body text
- Maximum line length: 70 characters for readability

---

## Visual Style

### Photography Style
- **Food Photography:**
  - Natural lighting preferred
  - Close-ups showing texture and detail
  - Warm color grading
  - Shallow depth of field
  - Styled but not overly staged

- **Ambiance Photography:**
  - Capture warmth and inviting atmosphere
  - Show people enjoying the space (when possible)
  - Golden hour lighting or warm interior shots
  - Showcase the store's character

### Imagery Guidelines
- High resolution (min 1920px width for hero images)
- Aspect ratios: 16:9 (hero), 4:3 (food), 1:1 (gallery)
- Warm color temperature
- Avoid harsh shadows or overexposure
- Minimal filters - maintain authentic food colors

### Layout Principles
- **Whitespace is Essential:** Don't crowd elements
- **Grid-Based:** Use 12-column grid system
- **Asymmetry with Balance:** Modern, dynamic layouts
- **Visual Hierarchy:** Clear primary and secondary elements
- **Mobile-First:** Design for mobile, scale up to desktop

---

## UI Components

### Buttons

**Primary Button**
- Background: #8d2424 (Deep Red)
- Text: #fafaf8 (Off White)
- Font: Inter SemiBold, 1rem
- Padding: 14px 32px
- Border Radius: 4px
- Hover: Darken background by 10%, subtle scale (1.02)

**Secondary Button**
- Border: 2px solid #c69d54 (Gold)
- Text: #013961 (Navy)
- Font: Inter Medium, 1rem
- Background: Transparent
- Hover: Background #c69d54, Text #fafaf8

### Cards
- Background: #fafaf8 or #f5f1e8
- Border Radius: 8px
- Shadow: 0 4px 12px rgba(0, 0, 0, 0.08)
- Padding: 24px
- Hover: Lift effect (translateY -4px, stronger shadow)

### Navigation
- Position: Fixed top or side
- Background: #013961 with 95% opacity
- Text: #fafaf8
- Active state: #c69d54 underline or highlight
- Mobile: Hamburger menu (≤768px)

### Icons
- Style: Line icons (2px stroke)
- Color: #c69d54 or #013961
- Size: 24px standard, 32px for featured items

---

## Animation & Interactions

### Micro-interactions
- **Hover Effects:** Smooth 0.3s ease transitions
- **Scroll Animations:** Fade in and slide up (stagger by 100ms)
- **Button Presses:** Subtle scale (0.98) on active state
- **Image Hovers:** Slight zoom (1.05) with overlay

### Page Transitions
- Smooth scroll behavior
- Section entrance: Fade + translate Y (20px to 0)
- Parallax effect on hero image (subtle, 0.5 speed)

### Loading States
- Skeleton screens for images
- Smooth fade-in when content loads
- Progress indicators use gold (#c69d54)

---

## Technical Stack

### Frontend Framework
**React 18+**
- Functional components with hooks
- No class components

### Styling
**Tailwind CSS**
- Use utility classes
- Custom theme configuration for brand colors
- Responsive design utilities

### Additional Libraries
- **lucide-react:** For icons
- **Intersection Observer API:** For scroll animations
- **React Hooks:** useState, useEffect, useRef for interactions

### Performance
- Lazy load images below the fold
- Optimize images (WebP format when possible)
- Code splitting for faster initial load
- Lighthouse score target: 90+ on all metrics

---

## Spacing System

Use consistent spacing multiples of 4px:

- **4px** (0.25rem) - xs: Tight spacing
- **8px** (0.5rem) - sm: Small gaps
- **16px** (1rem) - md: Standard spacing
- **24px** (1.5rem) - lg: Section padding
- **32px** (2rem) - xl: Large gaps
- **48px** (3rem) - 2xl: Section margins
- **64px** (4rem) - 3xl: Major section breaks

---

## Responsive Breakpoints

- **Mobile:** < 640px
- **Tablet:** 640px - 1024px
- **Desktop:** > 1024px
- **Large Desktop:** > 1440px

### Responsive Behavior
- Single column on mobile
- 2-column grid on tablet
- 3-4 column grid on desktop
- Hero text scales proportionally
- Navigation collapses to hamburger on mobile

---

## Content Tone & Voice

### Brand Voice
- **Warm but Professional:** Friendly without being overly casual
- **Confident not Boastful:** Proud of quality, not arrogant
- **Inviting:** Use inclusive language ("our," "we," "you")
- **Descriptive:** Paint pictures with words (sensory language)

### Writing Style
- Short sentences for impact
- Active voice over passive
- Avoid jargon or overly fancy terms
- Show, don't tell (describe experiences, not features)

### Example Copy Snippets
- ❌ "We serve sandwiches and burgers"
- ✅ "Artisanal sandwiches and gourmet burgers, crafted with passion"

- ❌ "Visit our location"
- ✅ "Find us in the heart of Andheri West"

---

## Accessibility

### Requirements
- Color contrast ratio minimum 4.5:1 (WCAG AA)
- All images have descriptive alt text
- Keyboard navigation support
- Focus indicators visible
- Semantic HTML elements
- ARIA labels where needed

### Testing
- Test with screen readers
- Verify keyboard-only navigation
- Check color blindness simulation

---

## File Structure

```
/src
  /components
    - Hero.jsx
    - About.jsx
    - MenuHighlights.jsx
    - Gallery.jsx
    - LocationContact.jsx
  /assets
    /images (organized by section)
  /styles
    - tailwind.config.js (custom theme)
  App.jsx
```

---

## Implementation Notes

### Image Placeholders
Use Unsplash API with search terms:
- "gourmet burger"
- "artisan sandwich"
- "cozy cafe interior"
- "restaurant food photography"

### Google Fonts Import
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
```

### Tailwind Custom Theme
```javascript
colors: {
  brand: {
    red: '#8d2424',
    gold: '#c69d54',
    navy: '#013961',
    cream: '#f5f1e8',
    beige: '#e8dcc4',
    charcoal: '#2d2d2d',
    offwhite: '#fafaf8',
  }
}
fontFamily: {
  heading: ['Playfair Display', 'Georgia', 'serif'],
  body: ['Inter', '-apple-system', 'sans-serif'],
}
```

---

## Launch Checklist

- [ ] All brand colors implemented correctly
- [ ] Typography scale consistent across pages
- [ ] Responsive on all breakpoints
- [ ] Images optimized and loading properly
- [ ] Animations smooth (60fps)
- [ ] Accessibility standards met
- [ ] Cross-browser testing complete
- [ ] Performance optimized (Lighthouse 90+)
- [ ] Contact information accurate
- [ ] Social media links functional

---

**Document Version:** 1.0  
**Last Updated:** January 2026  
**Contact:** Tōst Brand Team