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

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd svg-live-previewer
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:3000` (or the port specified in your terminal).

## Usage

1. Paste or type your SVG code into the left editor pane.
2. Watch the preview update automatically on the right pane.
3. Click the **Download SVG** button in the top right corner of the editor to save your work as `diagram.svg`.

## License

This project is open-source and available under the [MIT License](LICENSE).
