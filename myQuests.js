// Load saved quests and display them
function loadMyQuests() {
  const quests = JSON.parse(localStorage.getItem("myQuests")) || [];
  const questList = document.getElementById("myQuestList");
  questList.innerHTML = "";

  quests.forEach((quest) => {
    const li = document.createElement("li");
    li.textContent = `${quest.name} — 💰 ${quest.reward} coins`;
    questList.appendChild(li);
  });
}

// Add a new quest
function addMyQuest() {
  const name = document.getElementById("myQuestName").value.trim();
  const reward = parseInt(document.getElementById("myQuestReward").value);

  if (!name || isNaN(reward) || reward <= 0) {
    alert("Please enter a valid quest name and reward.");
    return;
  }

  const quests = JSON.parse(localStorage.getItem("myQuests")) || [];
  quests.push({ name, reward });
  localStorage.setItem("myQuests", JSON.stringify(quests));

  loadMyQuests();

  alert("Your quest has been added!");
  document.getElementById("myQuestName").value = "";
  document.getElementById("myQuestReward").value = "";
}

// Update coin display
function updateCoinStats() {
  const coins = parseInt(localStorage.getItem("coins")) || 0;
  document.querySelectorAll("#coinCount").forEach(el => el.innerText = coins);
  const coinProgress = document.getElementById("coinProgress");
  if (coinProgress) coinProgress.value = coins;
}

// Initialize on page load
document.addEventListener("DOMContentLoaded", () => {
  loadMyQuests();
  updateCoinStats();
});
