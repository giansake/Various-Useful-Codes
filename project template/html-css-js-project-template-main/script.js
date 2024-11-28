function handleClick() {
  console.log("Hello World!");
}

function handleBackgroundColorClick() {
  // a random color code
  const color = Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = "#" + color;
}
