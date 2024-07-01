document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const shabbatDate = urlParams.get('date');
    const eveningCount = urlParams.get('evening');
    const morningCount = urlParams.get('morning');

    const detailsElement = document.getElementById('registration-details');
    detailsElement.textContent = `נרשמת בהצלחה לשבת ${shabbatDate} עם ${eveningCount} אנשים בערב ו-${morningCount} אנשים בבוקר.`;
});