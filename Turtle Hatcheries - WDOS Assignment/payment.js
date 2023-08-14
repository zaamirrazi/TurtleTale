// Load total payable from local storage
const totalAmountSpan = document.getElementById('total-amount');
const totalAmount = localStorage.getItem('totalAmount') || '0.00';
totalAmountSpan.textContent = `$${totalAmount}`;

// Form validation and enable pay button
const paymentForm = document.getElementById('payment-form');
const payButton = document.getElementById('pay-button');

paymentForm.addEventListener('input', () => {
    if (paymentForm.checkValidity()) {
        payButton.removeAttribute('disabled');
    } else {
        payButton.setAttribute('disabled', 'true');
    }
});

// Handle form submission
paymentForm.addEventListener('submit', event => {
    event.preventDefault();

    // Store payment details in local storage (in a real application, these would be sent securely to the server)
    localStorage.setItem('cardNumber', document.getElementById('card-number').value);
    localStorage.setItem('expiryDate', document.getElementById('expiry-date').value);
    localStorage.setItem('cvc', document.getElementById('cvc').value);
    localStorage.setItem('nameOnCard', document.getElementById('name-on-card').value);

    // Redirect to Confirmation page
    window.location.href = 'confirmation.html';
});
