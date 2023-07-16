const forms = document.getElementsByClassName("form");

Array.from(forms).forEach((form) => {
  const input = form.querySelector('input[type="text"]');
  input.addEventListener("input", repaint);
  input.addEventListener("submit", repaint);
});

function repaint(event) {
  const input = event.target;
  const font = window.getComputedStyle(input).font;
  const enteredText = input.value;
  const textWidth = getTextWidth(enteredText, font) || getTextWidth(input.placeholder, font);
  console.log(textWidth);
  console.log("HELLLOO");
  const borderLength = textWidth;
  input.style.width = `${borderLength}px`;
}

function getTextWidth(text, font) {
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");

  context.font = font;

  const metrics = context.measureText(text);
  const width = metrics.width;

  canvas.remove();

  return width;
}
