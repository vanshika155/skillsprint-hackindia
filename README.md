# SkillSprint — HackIndia Front-End Project

SkillSprint is a responsive student skill-discovery landing page built with **semantic HTML5, CSS3, and vanilla JavaScript**. It helps learners explore paths in web development, UI/UX design, and data/AI, then join a sample community newsletter.

## Run locally

No build tools or dependencies are required.

1. Download and unzip the project.
2. Open `index.html` in a modern browser.
3. Optional: run a local static server from this directory, for example `python3 -m http.server 8000`, then visit `http://localhost:8000`.

## Project structure

```text
skillsprint-hackindia/
├── index.html   # Semantic page structure and form
├── styles.css   # Responsive layout, visual design, focus and motion preferences
├── script.js    # Mobile navigation and demo form interaction
└── README.md    # Project and accessibility documentation
```

## Layout choices

- **Header:** A clear brand, primary navigation, and call-to-action. On small screens, navigation becomes a toggleable menu.
- **Hero:** A two-column introduction pairs the main value proposition with a CSS-built learning dashboard illustration. It collapses to one column on narrow screens.
- **Statistics:** A compact four-column strip communicates community scale and becomes a two-column grid on mobile.
- **Learning paths:** Three cards use consistent spacing and color accents to make the available areas easy to scan.
- **How it works:** A two-column explanation pairs the project message with a numbered learning sequence.
- **Join form:** A contrasting section gives the form a clear visual boundary and keeps labels close to their controls.
- **Footer:** Repeats the brand and provides a back-to-top link.

The layout uses CSS Grid and Flexbox, a constrained content width, fluid heading sizes with `clamp()`, and breakpoints at 800px and 640px. There are no external frameworks, fonts, images, or runtime dependencies.

## Accessibility choices

- Uses landmarks and semantic elements: `header`, `nav`, `main`, `section`, `article`, `ol`, `form`, and `footer`.
- Includes a **Skip to main content** link for keyboard and assistive-technology users.
- Uses a single page-level `h1`, followed by logically nested section headings.
- Every form control has a programmatically associated `<label>`, meaningful input types, autocomplete hints, and native required-field validation.
- The mobile navigation button exposes its state with `aria-expanded` and its target with `aria-controls`.
- Form feedback is announced through a dedicated `role="status"` / `aria-live="polite"` region.
- Keyboard focus is visible through a high-contrast `:focus-visible` outline.
- Decorative symbols are hidden from assistive technology with `aria-hidden="true"`; the dashboard illustration has a descriptive accessible label.
- Respects the user's reduced-motion preference with `prefers-reduced-motion`.
- Text and controls are laid out to reflow on smaller screens without requiring horizontal scrolling at common mobile widths.

## Demo form behavior

The join form uses native browser validation and displays an on-page confirmation. It does **not** send or store personal information; connect it to a trusted backend before using it in production.

## Before submitting to HackIndia

1. Create a **public** GitHub repository for this project.
2. Extract these files into the repository.
3. Review and personalize the copy/design so the final submission reflects your own work.
4. Commit and push from your own GitHub account, ensuring the commits are authored by **@vanshika155**.
5. Confirm the repository contains the HTML and CSS files and this README.

Example Git commands:

```bash
git init
git add index.html styles.css script.js README.md
git commit -m "Build responsive SkillSprint frontend"
git branch -M main
git remote add origin https://github.com/vanshika155/skillsprint-hackindia.git
git push -u origin main
```

Replace the remote URL if you choose a different repository name.
