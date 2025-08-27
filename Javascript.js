

// heart count section
const heartButtons = document.querySelectorAll(".fa-heart"); 

const heartCount = document.getElementById("heartCount");

let count = 0;

heartButtons.forEach(btn => {
  btn.addEventListener("click", function() {
    count++; 
    heartCount.textContent = count; 
  });
});


// 