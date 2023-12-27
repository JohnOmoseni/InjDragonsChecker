// Initialize the array to store wallet addresses
let walletAddresses = [];
              
// Hardcoded path to the CSV file
const csvFilePath = 'assets/address.csv';

// Function to load wallet addresses from the CSV file
function loadWalletAddresses() {
  Papa.parse(csvFilePath, {
    download: true,
    header: false,
    complete: function (result) {
      // Extract addresses from the parsed CSV data
      walletAddresses = result.data.map(row => row[0].trim()).filter(Boolean);
    }
  });
}

// Call the function to load wallet addresses on page load
window.onload = loadWalletAddresses;

// Function to search for a wallet address
function searchAddress() {
  const searchInput = document.getElementById('searchInput').value;
  const resultDiv = document.getElementById('result');

  if (walletAddresses.includes(searchInput)) {
    resultDiv.innerHTML = `<p>${searchInput} Dragon has been whitelisted.</p>`;
  } else {
    resultDiv.innerHTML = `<p>Unfortunately, your address is not whitelisted.<br>Keep Grinding Bruvhhh!</p>`;
  }

  // Optional: Clear the input field after adding addresses
  document.getElementById('searchInput').value = '';
}