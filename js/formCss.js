const forms = document.getElementsByClassName("form");

Array.from(forms).forEach((form) => {
  const input = form.querySelector('input[type="text"]');
  input.addEventListener("input, submit", () => {
    const font = window.getComputedStyle(input).font;
    const enteredText = input.value;
    const textWidth = getTextWidth(enteredText, font) || getTextWidth(input.placeholder, font);
    console.log(textWidth);
    const borderLength =  textWidth;
    input.style.width = `${borderLength}px`;
  });
});

function getTextWidth(text, font) {
  // Create a temporary canvas element
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");

  // Set the font for the context
  context.font = font;

  // Measure the width of the text
  const metrics = context.measureText(text);
  const width = metrics.width;

  // Clean up and remove the temporary canvas
  canvas.remove();

  return width;
}
