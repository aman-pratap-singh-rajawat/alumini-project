document.addEventListener('DOMContentLoaded', function() {
    const amount = 500; // Replace with dynamic amount
    const transactionId = 'UPI1234567890'; // Replace with dynamic transaction ID
    const date = new Date().toLocaleDateString();

    document.getElementById('amount').innerText = amount;
    document.getElementById('transaction-id').innerText = transactionId;
    document.getElementById('date').innerText = date;

    document.getElementById('print-button').addEventListener('click', function() {
        window.print();
    });
});
