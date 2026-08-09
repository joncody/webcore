# Web Core

A minimal, modern baseline starter template for static web projects.

## Features

- **Modern CSS Reset**: Box-sizing, text-rendering, form element normalization, and accessible focus outlines (`src/css/reset.css`).
- **Semantic HTML5 Base**: Clean starter template (`src/index.html`).
- **ES Module Setup**: Safe global environment initializer (`src/js/index.js`).
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
