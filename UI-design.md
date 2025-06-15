# 🎨 PromptMotion UI/UX Design Guidelines

Welcome to the UI/UX design specification for PromptMotion. These principles are intended to guide the development of a cohesive, accessible, and intuitive interface for all users — from educators to developers.

---

## 🧭 Design Principles

- **Simplicity First**: Minimize friction. Every screen should guide users toward one clear action.
- **Visual-First Interface**: Prioritize previews, video elements, and code blocks in hierarchy.
- **Accessibility**: Comply with WCAG 2.1 Level AA.

---

## 🌘 Visual Style

| Element       | Specification                               |
| ------------- | ------------------------------------------- |
| Color Theme   | Default: Dark Mode                          |
| Primary Color | #7F5AF0 (Soft Purple)                       |
| Accent Color  | #2CB67D (Mint Green)                        |
| Background    | #16161A (Main), #242629 (Surface)           |
| Text Colors   | #FFFFFF (Primary), #94A1B2 (Secondary)      |
| Fonts         | `Inter` for UI, `Fira Code` for code blocks |
| Corner Radius | 12px for cards/buttons                      |
| Shadows       | Soft drop shadows for depth                 |

---

## 🧱 Layout Structure

### Main UI Flow

1. **Prompt Input View**

   - Textbox with placeholder: `"e.g., Show a cache miss from CPU to DB"`
   - "Generate" button triggers code and preview pipeline.

2. **Code Editor View**

   - Powered by CodeMirror
   - Syntax highlighting for Python
   - Editable but optional

3. **Render Preview View**

   - Shows MP4 preview
   - Includes download, share link, and re-render options

4. **History View**
   - Lists previously rendered scenes
   - Sortable by creation time, success/failure, or keyword

---

## ♿ Accessibility Features

- Full keyboard navigation
- Alt-text for previews
- Focus states for interactive elements
- Contrast ratios > 4.5:1
- Captions or transcripts for voiceover in future updates

---

## 💡 Design Inspirations

- Figma’s fluid UI interactions
- Manim Community Site structure
- Replit's embedded editor layout

---

## 🛠 Future Design Ideas

- Multi-scene timeline/stitcher interface
- Public gallery with tags and filters
- Voiceover settings panel (pitch, speed, gender)

---

For visual mockups and Figma links, contact the design team or refer to the `assets/figma-promptmotion/` directory.
