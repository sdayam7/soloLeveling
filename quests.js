// Initialize coin value from localStorage or default to 0
let coins = parseInt(localStorage.getItem("coins")) || 0;

// Update UI
function updateStats() {
  document.querySelectorAll("#coinCount").forEach(el => el.innerText = coins);
  const coinProgress = document.getElementById("coinProgress");
  if (coinProgress) coinProgress.value = coins;
}

// Save coins to localStorage
function saveStats() {
  localStorage.setItem("coins", coins);
}

// Handle quest clicks
document.querySelectorAll(".quest").forEach(el => {
  el.addEventListener("click", () => {
    const reward = parseInt(el.dataset.reward) || 0;

    // Award coins
    coins += reward > 0 ? reward : 10;
    saveStats();
    updateStats();

    // Save category coins
    if (reward > 0) {
      let studyCoins = parseInt(localStorage.getItem("studyCoins")) || 0;
      studyCoins += reward;
      localStorage.setItem("studyCoins", studyCoins);
    } else {
      let workoutCoins = parseInt(localStorage.getItem("workoutCoins")) || 0;
      workoutCoins += 10;
      localStorage.setItem("workoutCoins", workoutCoins);
    }

    // Animate and alert
    el.classList.add("completed");
    setTimeout(() => el.classList.remove("completed"), 1000);
    alert(`Quest "${el.innerText}" completed! You earned ${reward || 10} gold coins.`);
  });
});

// Load coin stats on page load
document.addEventListener("DOMContentLoaded", updateStats);
