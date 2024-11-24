document.getElementById("bra-calculator").addEventListener("submit", function(e) {
    e.preventDefault();

    const underbust = parseFloat(document.getElementById("underbust").value);
    const bust = parseFloat(document.getElementById("bust").value);

    if (isNaN(underbust) || isNaN(bust) || underbust <= 0 || bust <= 0) {
        document.getElementById("result").textContent = "Please enter valid measurements.";
        return;
    }

    // Calculate band size
    let bandSize = Math.round(underbust + 4);

    // Calculate cup size difference
    let cupSizeDifference = Math.round(bust - underbust);
    let cupSize;

    // Determine cup size
    if (cupSizeDifference <= 0) {
        cupSize = "AA";
    } else if (cupSizeDifference === 1) {
        cupSize = "A";
    } else if (cupSizeDifference === 2) {
        cupSize = "B";
    } else if (cupSizeDifference === 3) {
        cupSize = "C";
    } else if (cupSizeDifference === 4) {
        cupSize = "D";
    } else if (cupSizeDifference === 5) {
        cupSize = "DD";
    } else if (cupSizeDifference >= 6) {
        cupSize = "E+";
    }

    // Display result
    const resultText = `Your bra size is ${bandSize}${cupSize}.`;
    document.getElementById("result").textContent = resultText;
});
