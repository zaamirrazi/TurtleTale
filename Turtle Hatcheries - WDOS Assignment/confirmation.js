// Load details from local storage
document.getElementById('full-name').textContent = localStorage.getItem('fullName');
document.getElementById('visit-date').textContent = localStorage.getItem('visitDate');
document.getElementById('visit-time').textContent = localStorage.getItem('visitTime');
document.getElementById('duration').textContent = localStorage.getItem('duration');
document.getElementById('mobile').textContent = localStorage.getItem('mobile');
document.getElementById('email').textContent = localStorage.getItem('email');
document.getElementById('gender').textContent = localStorage.getItem('gender') || 'Not Specified';
document.getElementById('total-payable').textContent = `$${localStorage.getItem('totalAmount')}`;

// Load ticket summary from local storage
const summaryTable = document.getElementById('summary-table');
const ticketCategories = ['SL Adult', 'SL Child', 'Foreigner Adult', 'Foreigner Child', 'Infant'];
ticketCategories.forEach(category => {
    const count = localStorage.getItem(`ticketCount_${category}`);
    const charge = localStorage.getItem(`ticketCharge_${category}`);
    if (count > 0) {
        const row = summaryTable.insertRow();
        row.insertCell().textContent = `${count} ${category}`;
        row.insertCell().textContent = `$${charge}`;
    }
});
