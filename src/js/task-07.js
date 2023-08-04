let slideRange = document.getElementById("font-size-control");
let text = document.getElementById("text");

slideRange.addEventListener("input", (event) => {
  text.style.fontSize = `${event.currentTarget.value}px`;
});
