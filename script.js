document.getElementById("continueBtn").addEventListener("click", function () {
  const cityDropdown = document.getElementById("city");
  const city = cityDropdown.value;

  if (!city) {
    alert("Please select a city to continue!");
    return;
  }

  window.location.href = `movies.html?city=${encodeURIComponent(city)}`;
});
