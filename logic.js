document.getElementById('transactionForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from refreshing the page
    submitForm();
  });
  
  function submitForm() {
    // Collect form data
    const location = document.getElementById('location').value.trim();
    const upiId = document.getElementById('upiId').value.trim();
    const bankDetails = document.getElementById('bankDetails').value.trim();
    const time = document.getElementById('time').value;
    const statements = document.getElementById('statements').value.trim();
  
    // Validate inputs
    if (!location || !upiId || !bankDetails || !time) {
      alert('Please fill in all required fields.');
      return;
    }
  
    if (!validateUPI(upiId)) {
      alert('Invalid UPI ID format.');
      return;
    }
  
    // Display the output
    const outputDiv = document.getElementById('output');
    outputDiv.style.display = 'block';
    outputDiv.innerHTML = `
      <h3>Transaction Summary</h3>
      <p><strong>Location:</strong> ${location}</p>
      <p><strong>Recipient UPI ID:</strong> ${upiId}</p>
      <p><strong>Bank Details:</strong> ${bankDetails}</p>
      <p><strong>Time of Transaction:</strong> ${new Date(time).toLocaleString()}</p>
      <p><strong>Previous Bank Statements:</strong></p>
      <pre>${statements || 'No statements provided.'}</pre>
    `;
  }
  
  function validateUPI(upiId) {
    // Simple regex to validate UPI ID format (e.g., user@bank)
    const upiRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z]+$/;
    return upiRegex.test(upiId);
  }
  