# Web Core

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript: ES Modules](https://img.shields.io/badge/JavaScript-ES%20Modules-F7DF1E?style=flat&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)
[![Dependencies: Zero](https://img.shields.io/badge/Dependencies-0-brightgreen.svg)]()
[![Template: Starter Kit](https://img.shields.io/badge/Template-Starter%20Kit-blueviolet.svg)]()
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

A minimal, modern baseline starter template for static web projects.

## Features

- **Modern CSS Reset**: Box-sizing, text-rendering, form element normalization, and accessible focus outlines (`src/css/reset.css`).
- **Semantic HTML5 Base**: Clean starter template (`src/index.html`).
- **ES Module Setup**: Clean JavaScript entry point (`src/js/index.js`).
- **HTML5 Element Test Suite**: Comprehensive visual testing suite (`tests/demo.html`) covering standard HTML5 elements.

## Project Structure

```text
.
├── src/
│   ├── css/
│   │   ├── reset.css   # CSS reset and browser baseline
│   │   └── screen.css  # Main stylesheet entry point (@import reset.css)
│   ├── js/
│   │   └── index.js    # Entry JavaScript module
│   └── index.html      # Main HTML entry point
├── tests/
│   └── demo.html       # Alphabetical HTML5 element visual test suite
├── LICENSE
└── README.md
```

## Getting Started

### 1. Clone or Template

Clone or use this repository as a baseline for new web projects:

```bash
git clone https://github.com/joncody/webcore.git my-project
cd my-project
```

### 2. Local Development

Serve the `src/` directory locally using any static file server:

```bash
# Python 3
python3 -m http.server 8000 --directory src

# Node.js (npx)
npx serve src
```

### 3. Running Visual Tests

To preview how native HTML elements render with the CSS reset applied, open `tests/demo.html` in your browser or serve the repository root:

```bash
# Serve repository root
python3 -m http.server 8000
```

Then navigate to `http://localhost:8000/tests/demo.html`.

## License

[MIT](LICENSE)
