let convertBtnEl = document.getElementById("convertBtn");
convertBtnEl.addEventListener("click", function() {
    var hours = parseInt(document.getElementById('hoursInput').value);
    var minutes = parseInt(document.getElementById('minutesInput').value);
    var showSeconds = document.getElementById("timeInSeconds");
    var showError = document.getElementById("errorMsg");

    // Clear previous error message and result
    showError.textContent = "";
    showSeconds.textContent = "";

    if (isNaN(hours) || isNaN(minutes)) {
        showError.textContent = "Please enter valid numbers for hours and minutes";
    } else {
        var seconds = (hours * 60 + minutes) * 60;
        showSeconds.textContent = seconds;
    }
});