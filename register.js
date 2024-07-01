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
    const scriptURL = 'https://script.google.com/macros/s/AKfycbzZ4Q8Tq8tTZwN9dPf5PB-kXCejoWnuRe3uAAuUxc6_z0fLZybjAlkYuy2RpH1jpXPi7Q/exec'; // החלף עם ה-URL שקיבלת בשלב הקודם
    
    fetch(scriptURL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        console.log('Success!', response);
        window.location.href = `confirmation.html?date=${data.date}&evening=${data.eveningCount}&morning=${data.morningCount}`;
    })
    .catch(error => {
        console.error('Error:', error);
        alert('אירעה שגיאה בעת ההרשמה. אנא נסה שנית.');
    });
}
