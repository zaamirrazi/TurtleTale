// Get the time slot select element
const timeSlotSelect = document.getElementById('time-slot');

// Event listeners to enable continue button
const continueButtonTickets = document.getElementById('continue-buttontickets');
const dateInput = document.getElementById('visit-date');
const guestsInputs = [
    document.getElementById('sl-adult'),
    document.getElementById('sl-child'),
    document.getElementById('foreigner-adult'),
    document.getElementById('foreigner-child'),
    document.getElementById('infant'),
];

dateInput.addEventListener('change', checkInputs);
guestsInputs.forEach(input => input.addEventListener('input', checkInputs));
timeSlotSelect.addEventListener('change', checkInputs);

// Function to check inputs and enable continue button
function checkInputs() {
    if (dateInput.value && guestsInputs.some(input => input.value > 0) && timeSlotSelect.selectedOptions.length > 0) {
        continueButtonTickets.removeAttribute('disabled');
    } else {
        continueButtonTickets.setAttribute('disabled', 'true');
    }
}

// Redirect to Details page and store selected values in local storage
continueButtonTickets.addEventListener('click', () => {
    localStorage.setItem('visitDate', dateInput.value);
    localStorage.setItem('slAdult', guestsInputs[0].value);
    localStorage.setItem('slChild', guestsInputs[1].value);
    localStorage.setItem('foreignerAdult', guestsInputs[2].value);
    localStorage.setItem('foreignerChild', guestsInputs[3].value);
    localStorage.setItem('infant', guestsInputs[4].value);
    localStorage.setItem('timeSlots', JSON.stringify([...timeSlotSelect.selectedOptions].map(opt => opt.value)));
    
    // Redirect to Details page
    window.location.href = 'details.html';
});
