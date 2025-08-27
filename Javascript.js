





function setupCounter(buttonSelector, displayId) {
  const buttons = document.querySelectorAll(buttonSelector);
  const display = document.getElementById(displayId);
  let count = 0;
  buttons.forEach(btn => {
    btn.addEventListener("click", function() {
      count++;
      display.textContent = count;
    });
  });
}

setupCounter(".fa-heart", "heartCount");
setupCounter(".copy-btn", "copyCount");
