document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const shabbatDate = urlParams.get('date');
    const shabbatTime = urlParams.get('time');

    document.getElementById('shabbat-details').textContent = `הרשמה לשבת ${shabbatDate} בשעה ${shabbatTime}`;

    const eveningCount = document.getElementById('evening-count');
    const morningCount = document.getElementById('morning-count');

    for (let i = 1; i <= 20; i++) {
        let optionEvening = document.createElement('option');
        optionEvening.value = i;
        optionEvening.textContent = i;
        eveningCount.appendChild(optionEvening);

        let optionMorning = document.createElement('option');
        optionMorning.value = i;
        optionMorning.textContent = i;
        morningCount.appendChild(optionMorning);
    }

    document.getElementById('signup-form').addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = new FormData(this);
        const data = {
            date: shabbatDate,
            time: shabbatTime,
            eveningCount: formData.get('evening-count'),
            morningCount: formData.get('morning-count'),
            firstName: formData.get('first-name'),
            lastName: formData.get('last-name'),
            phone: formData.get('phone'),
            email: formData.get('email')
        };

        // כאן נשלח את הנתונים לשרת או ל-Google Sheets
        sendDataToGoogleSheets(data);
    });
});

function sendDataToGoogleSheets(data) {
    // כאן תהיה הפונקציה לשליחת הנתונים ל-Google Sheets
    // לצורך הדוגמה, נדפיס את הנתונים לקונסול ונעבור לדף האישור
    console.log('Sending data to Google Sheets:', data);
    
    // מעבר לדף אישור ההרשמה
    window.location.href = `confirmation.html?date=${data.date}&evening=${data.eveningCount}&morning=${data.morningCount}`;
}