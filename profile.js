// Load and Save User Profile on DOM Ready
document.addEventListener("DOMContentLoaded", () => {
    const saveBtn = document.getElementById("saveStatus");
  
    // Save profile to localStorage
    if (saveBtn) {
      saveBtn.addEventListener("click", () => {
        const profile = {
          name: document.getElementById("name")?.value.trim(),
          age: document.getElementById("age")?.value.trim(),
          weight: document.getElementById("weight")?.value.trim(),
          height: document.getElementById("height")?.value.trim(),
          nationality: document.getElementById("nationality")?.value.trim()
        };
        localStorage.setItem("userProfile", JSON.stringify(profile));
        alert("Profile saved successfully!");
      });
    }
  
    // Load profile from localStorage
    const profile = JSON.parse(localStorage.getItem("userProfile"));
    if (profile) {
      if (document.getElementById("name")) document.getElementById("name").value = profile.name || "";
      if (document.getElementById("age")) document.getElementById("age").value = profile.age || "";
      if (document.getElementById("weight")) document.getElementById("weight").value = profile.weight || "";
      if (document.getElementById("height")) document.getElementById("height").value = profile.height || "";
      if (document.getElementById("nationality")) document.getElementById("nationality").value = profile.nationality || "";
  
      // Optional: Display greeting with emoji
      const header = document.querySelector("header h1");
      if (header && profile.name) {
        header.innerText = `Welcome back, ${profile.name}! ${getEmoji(profile)}`;
      }
    }
  });
  
  // Helper: Get emoji based on age and nationality
  function getEmoji(profile) {
    const age = parseInt(profile.age);
    const mood = age < 18 ? "🧒" : age < 30 ? "🧑" : "🧓";
    const flag = getFlagEmoji((profile.nationality || "").toLowerCase());
    return `${mood} ${flag}`;
  }
  
  // Helper: Basic flag emoji logic
  function getFlagEmoji(nation) {
    if (nation.includes("india")) return "🇮🇳";
    if (nation.includes("usa") || nation.includes("america")) return "🇺🇸";
    if (nation.includes("korea")) return "🇰🇷";
    if (nation.includes("japan")) return "🇯🇵";
    return "🌍";
  }
  
  // Reset profile data
  function resetProfile() {
    localStorage.removeItem("userProfile");
    alert("Profile reset. Refresh the page to start over.");
    location.reload();
  }
  