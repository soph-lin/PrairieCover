# PrairieCover

A Chrome extension that helps students practice past PrairieLearn assignments by toggling the visibility of correct/incorrect answers.

## 🚀 Features

- Toggle answer visibility with a simple keyboard shortcut (Shift + S)
- Works seamlessly with PrairieLearn's interface
- Preserves the original exam experience while allowing for practice
- Lightweight and fast performance
- No data collection or external dependencies

## 💻 Technical Skills Demonstrated

- **Chrome Extension Development**
  - Manifest V3 implementation
  - Content script injection
  - Dynamic CSS manipulation
  - Keyboard event handling
- **Web Development**
  - JavaScript (ES6+)
  - CSS3
  - DOM manipulation
  - Event-driven programming
- **Software Engineering**
  - Clean code architecture
  - Modular design
  - Cross-browser compatibility
  - Performance optimization

## 🛠️ Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/soph-lin/PrairieCover.git
   ```

2. Load the extension in Chrome:
   - Open Chrome and navigate to `chrome://extensions/`
   - Enable "Developer mode" in the top right
   - Click "Load unpacked" and select the PrairieCover directory

## 🎯 Usage

1. Navigate to any PrairieLearn exam question
2. Press `Shift + S` to toggle answer visibility
3. Practice without seeing the correct answers until you're ready

## 🔧 Development

The extension consists of:

- `manifest.json`: Extension configuration and permissions
- `src/content/hide.js`: Core functionality for toggling answers
- `src/css/hide.css`: Styling for hidden answers
- `src/css/show.css`: Styling for visible answers

## 📝 License

This project is open source and available under the MIT License.
