let coins = parseInt(localStorage.getItem("coins")) || 0;

// Update coin display
function updateStats() {
  document.querySelectorAll("#coinCount").forEach(el => el.innerText = coins);
  const coinProgress = document.getElementById("coinProgress");
  if (coinProgress) coinProgress.value = coins;
}

// Save updated coin count
function saveStats() {
  localStorage.setItem("coins", coins);
}

// Generic purchase handler
function purchase(cost, successMsg, callback) {
  if (coins >= cost) {
    coins -= cost;
    saveStats();
    updateStats();
    alert(successMsg);
    if (callback) callback();
  } else {
    alert(`You need ${cost} coins to perform this action.`);
  }
}

// Specific unlock functions
function unlockCategoryQuest(cost) {
  purchase(cost, "Study/Workout quest slot unlocked!");
}

function unlockNewCategory(cost) {
  purchase(cost, "New custom quest category unlocked!");
}

function unlockNextQuestSlot(cost) {
  purchase(cost, "Next-level (elite/daily) quest slot unlocked!");
}

function addMoreToCurrentCategory(cost) {
  purchase(cost, "More quests can now be added to the current category.");
}

// Initialize display
document.addEventListener("DOMContentLoaded", updateStats);
