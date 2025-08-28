// Select elements
const heartButtons = document.querySelectorAll(".fa-heart");
const copyButtons = document.querySelectorAll(".copy-btn");
const callButtons = document.querySelectorAll(".call-btn");
const heartCountEl = document.getElementById("heartCount");
const coinEl = document.getElementById("coin");
const copyCountEl = document.getElementById("copyCount");

const historyList = document.getElementById("call-history");
const clearHistoryBtn = document.getElementById("call-history-clear");


// Initialize counts
let heartCount = 0;
let coins = parseInt(coinEl.innerText);
let copyCount = 0;

// Heart button functionality
for (const btn of heartButtons) {
    btn.addEventListener("click", function() {
        heartCount++;
        heartCountEl.innerText = heartCount;
    });
};

// Copy button functionality
for (const btn of copyButtons) {
    btn.addEventListener("click", function() {
        const card = btn.closest(".card-parent");
        const number = card.querySelector(".number").innerText;
        const serviceName = card.querySelector(".serviceName").innerText;

        navigator.clipboard.writeText(number).then(() => {
            alert(`Hotline number of "${serviceName}" copied: ${number}`);
            copyCount++;
            copyCountEl.innerText = copyCount;
        });
    });
};

// Call button functionality
for (const btn of callButtons) {
    btn.addEventListener("click", function() {
        const card = btn.closest(".card-parent");
        const number = card.querySelector(".number").innerText;
        const serviceName = card.querySelector(".serviceName").innerText;

        if (coins < 20) {
            alert("Not enough coins to make a call.");
            return;
        }

        coins -= 20;
        coinEl.textContent = coins;

        alert(`Calling "${serviceName}" at ${number}`);

        addToCallHistory(serviceName, number);
    });
};

// Add call history function
function addToCallHistory(name, number) {
    const div = document.createElement("div");
    div.innerHTML = `<div class="flex justify-between items-center bg-gray-100 px-2 py-1 rounded">
            <div>
                <h3 class ="font-semibold text-[18px]">${name}</h3>
                <p>${number}</p>
            </div>
            <div>
                <span>${new Date().toLocaleTimeString()}</span>
            </div>
            </div>`;

    historyList.appendChild(div);
}

// Clear Call History functionality
clearHistoryBtn.addEventListener("click", function () {
    historyList.innerHTML = "";
});
