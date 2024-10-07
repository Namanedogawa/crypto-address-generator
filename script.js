// Ждем, пока все скрипты загрузятся
window.addEventListener('DOMContentLoaded', () => {
    const generateButton = document.getElementById("generateButton");
    const output = document.getElementById("output");

    // Проверяем, загружен ли ethers.js
    if (typeof ethers === 'undefined') {
        output.textContent = "Ethers.js library failed to load.";
        console.error("Ethers.js library not loaded.");
        return;
    }

    generateButton.addEventListener("click", generateAddress);
});

async function generateAddress() {
    try {
        // Используем ethers.js для генерации случайного адреса
        const randomWallet = ethers.Wallet.createRandom();
        const address = randomWallet.address;

        // Отобразить адрес на странице
        document.getElementById("output").textContent = `Generated Address: ${address}`;
    } catch (error) {
        console.error("Error generating address:", error);
        document.getElementById("output").textContent = "Error generating address. Please try again.";
    }
}
