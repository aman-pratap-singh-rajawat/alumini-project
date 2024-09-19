function generateQRCode() {
    const name = document.getElementById('name').value;
    const amount = document.getElementById('amount').value;

    if (name && amount) {
        const upiId = '7974291518@paytm';
        const upiString = `upi://pay?pa=${upiId}&pn=${name}&am=${amount}&cu=INR`;

        const qr = new QRious({
            element: document.getElementById('qr-code'),
            value: upiString,
            size: 200,
        });

        document.getElementById('qr-code-container').classList.remove('hidden');
        document.getElementById('confirmation-message').classList.remove('hidden');
    } else {
        alert('Please fill in all fields');
    }
}