document.addEventListener('DOMContentLoaded', function() {
    const shabbatList = document.getElementById('shabbat-list');
    const nextFourShabbats = getNextFourShabbats();

    nextFourShabbats.forEach(shabbat => {
        const shabbatItem = document.createElement('div');
        shabbatItem.className = 'shabbat-item';
        shabbatItem.innerHTML = `
            <h2>${shabbat.date}</h2>
            <p>שעת כניסת שבת: ${shabbat.time}</p>
            <button onclick="registerForShabbat('${shabbat.date}', '${shabbat.time}')">הירשם</button>
        `;
        shabbatList.appendChild(shabbatItem);
    });
});

function getNextFourShabbats() {
    // פונקציה זו תחזיר את ארבעת השבתות הבאות
    // לצורך הדוגמה, נשתמש בתאריכים קבועים
    return [
        { date: '2024-07-06', time: '19:30' },
        { date: '2024-07-13', time: '19:25' },
        { date: '2024-07-20', time: '19:20' },
        { date: '2024-07-27', time: '19:15' }
    ];
}

function registerForShabbat(date, time) {
    // מעבר לדף ההרשמה עם פרמטרים של תאריך ושעה
    window.location.href = `register.html?date=${date}&time=${time}`;
}