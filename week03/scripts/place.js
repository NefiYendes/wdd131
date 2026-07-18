document.getElementById("currentyear").innerHTML = new Date().getFullYear();
document.getElementById("lastModified").innerHTML = `Last Modification: ${document.lastModified}`;

document.addEventListener("DOMContentLoaded", () => {
    const yearSpan = document.getElementById("currentyear");
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    const modifiedParagraph = document.getElementById("lastModified");
    if (modifiedParagraph) {
        modifiedParagraph.textContent = `Last Modified: ${document.lastModified}`;
    }

    const tempElement = document.getElementById("temperature");
    const windElement = document.getElementById("windspeed");
    const chillElement = document.getElementById("windchill");

    if (tempElement && windElement && chillElement) {
        const temp = parseFloat(tempElement.textContent);
        const windSpeed = parseFloat(windElement.textContent);

        if (temp <= 10 && windSpeed > 4.8) {
            const calculatedChill = calculateWindChill(temp, windSpeed);
            chillElement.textContent = `${calculatedChill.toFixed(1)} °C`;
        } else {
            chillElement.textContent = "N/A";
        }
    }
});

function calculateWindChill(temp, speed) {
    return 13.12 + (0.6215 * temp) - (11.37 * Math.pow(speed, 0.16)) + (0.3965 * temp * Math.pow(speed, 0.16));
}