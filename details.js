// JS for details
// Populate country codes (you can expand this list)
const countryCodeSelect = document.getElementById('country-code');
const countryCodes = [
    { code: '+1', flag: '🇺🇸' },
    { code: '+44', flag: '🇬🇧' },
    // Add more country codes here
];

countryCodes.forEach(country => {
    const option = document.createElement('option');
    option.value = country.code;
    option.text = `${country.flag} ${country.code}`;
    countryCodeSelect.appendChild(option);
});

// Form validation and enable continue button
const detailsForm = document.getElementById('details-form');
const continueButtonDetails = document.getElementById('continue-buttondetails');
const emailInput = document.getElementById('email');
const confirmEmailInput = document.getElementById('confirm-email');

detailsForm.addEventListener('input', () => {
    // Check if emails match and other required fields are filled
    if (emailInput.value && emailInput.value === confirmEmailInput.value && detailsForm.checkValidity()) {
        continueButtonDetails.removeAttribute('disabled');
    } else {
        continueButtonDetails.setAttribute('disabled', 'true');
    }
});

// Handle form submission
detailsForm.addEventListener('submit', event => {
    event.preventDefault();
    
    // Store details in local storage
    localStorage.setItem('fullName', document.getElementById('full-name').value);
    localStorage.setItem('mobileNumber', `${document.getElementById('country-code').value} ${document.getElementById('mobile-number').value}`);
    localStorage.setItem('email', emailInput.value);
    localStorage.setItem('gender', document.getElementById('gender').value);

    // Redirect to Payment page
    window.location.href = 'payment.html';
});
