# SVG Live Previewer

A real-time SVG code editor and previewer built with React, Vite, and Tailwind CSS.

## Features

- **Real-Time Preview**: Instantly see the rendered SVG as you type or modify the code.
- **Split-Pane Interface**: Clean, side-by-side layout with a dark-themed code editor on the left and a light-themed preview area on the right.
- **Download Functionality**: Easily export and save your current SVG code as a `.svg` file with a single click.
- **Responsive Design**: Adapts to your screen size for optimal viewing and editing.

## Tech Stack

- **Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)

## How to Start the Project

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Make sure you have the following installed on your machine:
- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- npm (comes with Node.js) or [Yarn](https://yarnpkg.com/)

### 1. Clone the Repository

First, clone the project to your local machine using Git:

```bash
git clone https://github.com/Sunk011/preview-svg.git
cd preview-svg
```

### 2. Install Dependencies

Install the required packages using npm or yarn:

```bash
npm install
# or
yarn install
```

### 3. Start the Development Server

To run the app in development mode with hot-reloading:

```bash
npm run dev
# or
yarn dev
```

Once the server starts, open your browser and navigate to the URL provided in your terminal (usually `http://localhost:3000` or `http://localhost:5173`).

### 4. Build for Production (Optional)

If you want to build the app for production deployment:

```bash
npm run build
```

This will generate a `dist` folder containing the optimized static files. You can preview the production build locally using:

```bash
npm run preview
```

## Detailed Usage Guide

The SVG Live Previewer is designed to be intuitive and fast. Here is a detailed breakdown of how to get the most out of the tool:

### 1. Editing SVG Code
- **The Editor Pane (Left):** This is your primary workspace. It features a dark-themed, monospace text area optimized for code readability.
- **Real-Time Rendering:** As soon as you type or paste valid SVG code into the editor, the right pane will instantly update to reflect your changes. There is no need to press a "Run" or "Refresh" button.
- **Initial Template:** When you first load the application, a complex sample SVG (featuring gradients, drop shadows, and text) is provided to demonstrate the tool's capabilities. You can safely select all text (`Ctrl+A` / `Cmd+A`) and delete it to start from scratch.

### 2. Previewing Your Graphic
- **The Preview Pane (Right):** This area displays the visual output of your SVG code on a clean, light background.
- **Responsive Scaling:** The preview container centers your SVG automatically. To ensure your SVG scales correctly within the preview window, it is highly recommended to use the `viewBox` attribute in your `<svg>` tag (e.g., `viewBox="0 0 800 400" width="100%"`) rather than fixed pixel dimensions.
- **Error Handling:** If your SVG code contains syntax errors (e.g., unclosed tags or missing quotes), the preview might temporarily freeze or disappear. Simply correct the syntax in the editor, and the preview will instantly recover.

### 3. Exporting Your Work
- **Download Button:** Located at the top right of the Editor Pane, you will find a blue **Download SVG** button.
- **Saving Locally:** Clicking this button will instantly package your current code into a valid `.svg` file and trigger a download to your local machine. The default filename is `diagram.svg`.
- **Integration:** The downloaded `.svg` file can be directly imported into vector design tools (like Figma, Adobe Illustrator, or Inkscape) or embedded directly into your HTML/React web projects.

## License

This project is open-source and available under the [MIT License](LICENSE).
