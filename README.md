# Portfolio Website

This project is a static personal portfolio website for Gohar Zafar. The refactor keeps the same design and frontend behavior while separating structure, styling, assets, and JavaScript into clearer folders.

## Project Structure

```text
Portfolio/
|-- assets/
|   |-- documents/
|   |   `-- cv.pdf
|   `-- images/
|       |-- profile.jpeg
|       |-- trademe.png
|       |-- kc.png
|       |-- mylink.png
|       |-- bwc.png
|       |-- fscs.png
|       `-- fgc.png
|-- backend/
|   |-- send_mail.php
|   `-- PHPMailer/
|-- components/
|   `-- README.md
|-- css/
|   `-- styles.css
|-- js/
|   `-- main.js
`-- index.html
```

## Folder And File Purpose

- [`index.html`](C:/Users/HP/Desktop/Projects/Github/Portfolio/index.html) is the single page entry point. It contains the semantic page structure and the major content sections:
  - Navbar
  - Hero
  - About
  - Experience
  - Portfolio
  - Contact
  - Footer
- [`css/styles.css`](C:/Users/HP/Desktop/Projects/Github/Portfolio/css/styles.css) contains all presentation logic that was previously inline in the page. It includes theme variables, layout rules, animations, responsive behavior, accessibility rules, and print styles.
- [`js/main.js`](C:/Users/HP/Desktop/Projects/Github/Portfolio/js/main.js) contains all frontend behavior that was previously inline in the page. It handles:
  - mobile navigation
  - active nav state on scroll
  - navbar scroll styling
  - contact form submission through EmailJS
  - reveal animations
  - smooth scrolling
  - external link click feedback
  - lazy-loading support
  - hero parallax effect
- [`assets/images`](C:/Users/HP/Desktop/Projects/Github/Portfolio/assets/images) stores profile and project imagery used by the page.
- [`assets/documents`](C:/Users/HP/Desktop/Projects/Github/Portfolio/assets/documents) stores downloadable files such as the CV.
- [`backend/send_mail.php`](C:/Users/HP/Desktop/Projects/Github/Portfolio/backend/send_mail.php) is the PHP mail handler included with the project.
- [`backend/PHPMailer`](C:/Users/HP/Desktop/Projects/Github/Portfolio/backend/PHPMailer) contains the PHPMailer dependency used by the PHP mail handler.
- [`components`](C:/Users/HP/Desktop/Projects/Github/Portfolio/components) is reserved for future reusable HTML partials or templated sections if the project later adopts a component/include workflow.

## How Everything Connects

1. The browser loads [`index.html`](C:/Users/HP/Desktop/Projects/Github/Portfolio/index.html).
2. `index.html` links to [`css/styles.css`](C:/Users/HP/Desktop/Projects/Github/Portfolio/css/styles.css) for all styling.
3. `index.html` references images and downloadable files from the `assets/` directory.
4. `index.html` loads the EmailJS CDN script and then [`js/main.js`](C:/Users/HP/Desktop/Projects/Github/Portfolio/js/main.js) for interactivity.
5. The contact form is currently wired through EmailJS on the frontend. The PHP mail handler remains in the repository as a backend option.

## Refactor Notes

- The visual design was intentionally preserved.
- The page content remains in one HTML entry file to avoid introducing a templating/runtime dependency that could change how the site is served.
- Comments were kept focused on section boundaries and behavior so the code stays readable without becoming noisy.
