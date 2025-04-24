// Update rewards display on load
function updateStats() {
    const coins = parseInt(localStorage.getItem("coins")) || 0;
    const studyCoins = parseInt(localStorage.getItem("studyCoins")) || 0;
    const workoutCoins = parseInt(localStorage.getItem("workoutCoins")) || 0;
  
    // Total coins
    document.querySelectorAll("#coinCount").forEach(el => el.innerText = coins);
    const coinProgress = document.getElementById("coinProgress");
    if (coinProgress) coinProgress.value = coins;
  
    // Study coins
    const studyProgress = document.getElementById("studyProgress");
    const studyText = document.getElementById("studyCoins");
    if (studyProgress) studyProgress.value = studyCoins;
    if (studyText) studyText.innerText = studyCoins;
  
    // Workout coins
    const workoutProgress = document.getElementById("workoutProgress");
    const workoutText = document.getElementById("workoutCoins");
    if (workoutProgress) workoutProgress.value = workoutCoins;
    if (workoutText) workoutText.innerText = workoutCoins;
  }
  
  document.addEventListener("DOMContentLoaded", updateStats);
  