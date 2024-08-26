function calculateTemp() {
    const temp = parseFloat(document.getElementById('temp').value);
    const tempDiff = document.getElementById('temp_diff').value;
    let result;

    if (isNaN(temp)) {
        alert("Please enter a valid temperature.");
        return;
    }

    if (tempDiff === "cel") {
        result = (temp * 9 / 5) + 32;
        result = `${result.toFixed(2)} °F`;
    } else if (tempDiff === "fah") {
        result = (temp - 32) * 5 / 9;
        result = `${result.toFixed(2)} °C`;
    }

    document.getElementById('resultContainer').innerText = `Converted Result : ${result}`;
}
