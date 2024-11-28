# Project Template: HTML + CSS + JS Starter

Welcome to the **HTML + CSS + JS Starter Template**! This is a simple, beginner-friendly template designed for quickly getting started with web development. It includes a basic structure and styling, along with a couple of JavaScript examples to help you explore the fundamentals.

---

## 🎯 **Project Overview**

This project includes:

1. **HTML**: A semantic structure for the page.
2. **CSS**: Styling with modern best practices and variables for reusability.
3. **JavaScript**: Interactive functionality with event handlers.

---

## 📂 **Project Structure**

Here's what each file does:

- **`index.html`**: The main HTML file that defines the structure of the webpage.
- **`style.css`**: The CSS file for styling the webpage, including variables and reusable classes.
- **`script.js`**: The JavaScript file with interactive functions.

---

## 🌟 **How to Use This Template**

1. **Download or Clone the Project**:

```bash
git clone <repository_url>
cd project-template
```

2. **Open the Files**:  
   You can open the `index.html` file in any modern browser to view the page.

3. **Edit the Code**:  
   Use a code editor (like [VS Code](https://code.visualstudio.com/)) to modify the files and experiment with HTML, CSS, and JS.

---

## 🔧 **Features & Functionalities**

### 1. **HTML**

- A clean and semantic structure.
- Organized into `header`, `main`, and `footer` sections for better readability.
- Includes a section for JavaScript examples.

### 2. **CSS**

- Modern **CSS Variables** for consistent color theming.
- Styles for body, header, footer, and buttons.
- Example of reusable button styling with `.primary-btn`.
- Responsive layout for the main content area.

### 3. **JavaScript**

The `script.js` file includes two simple interactive functions:

- **`handleClick()`**  
  Prints "Hello World!" in the browser console when the first button is clicked.
- How to try:

1.  Open the developer console (Ctrl + Shift + J on Chrome/Edge, Cmd + Option + J on macOS).
2.  Click the "Click me and check in the console!" button.

- **`handleBackgroundColorClick()`**  
  Changes the background color of the page to a random color when the second button is clicked.
- How to try:  
  Click the "Not liking the background color?" button.

---

## 🖌️ **Customize the Template**

1. **HTML**

- Modify headings, text, or sections in `index.html`.
- Add new buttons or elements to extend functionality.

2. **CSS**

- Update color variables in `style.css` to match your design preferences.
- Add more styles to enhance the appearance.

3. **JavaScript**

- Write new functions in `script.js` to add interactive features.
- Experiment with DOM manipulation, event handling, or animations.

---

## 🛠️ **Development Tips**

- Use **browser developer tools** to inspect elements, debug JavaScript, and tweak CSS.
- Experiment with changing CSS variables for instant design updates.
- Break the code! Try changing parts of the HTML, CSS, or JavaScript to see what happens and learn by doing.

---

## 📄 **Sample Code Highlights**

### Example HTML

```html
<button onclick="handleClick()">Click me and check in the console!</button>
```

### Example CSS

```css
.primary-btn:hover {
  background-color: var(--color-slate-900);
  color: var(--color-slate-200);
}
```

### Example JavaScript

```js
function handleBackgroundColorClick() {
  const color = Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = "#" + color;
}
```

## 💡 **Next Steps**

- Add your own sections, styles, or functionality to the template.
- Explore advanced CSS features like flexbox, grid, or animations.
- Enhance the interactivity with more JavaScript functions.

---

Happy coding! 🚀
