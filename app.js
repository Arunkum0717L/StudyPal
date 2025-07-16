document.addEventListener("DOMContentLoaded", () => {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('service-worker.js')
      .then(() => console.log("✅ Service Worker Registered"))
      .catch(err => console.error("❌ Service Worker Failed:", err));
  }

  // Optional: Show a welcome toast/alert
  const welcomeShown = localStorage.getItem("welcomeShown");
  if (!welcomeShown) {
    alert("👋 Welcome to StudyPal! Plan smart, stay ahead.");
    localStorage.setItem("welcomeShown", "true");
  }
});
