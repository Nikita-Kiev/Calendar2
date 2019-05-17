'use strict';

function getDaysInMonth(year, month) {
    return new Date(year, month, 0).getDate();
}

function createCalendar(id, year, month)
{
    const days = [
        'пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'нд'
    ];

    const table = document.createElement('table');
    const header = document.createElement('tr');
    header.className = 'header';

    for (const day of days) {
        header.insertAdjacentHTML('beforeend', `<th>${day}</th>`);
    }
    table.append(header);

    const date = new Date(year, month - 1);
    let firstDay = date.getDay();
    firstDay = firstDay === 0 ? 6 : firstDay - 1;

    const daysInMonth = getDaysInMonth(year, month);
    let nextDayToAdd = 1 - firstDay;

    while (nextDayToAdd <= daysInMonth) {
        const week = document.createElement('tr');
        for (let i = 0; i < 7; i++) {
            const day = document.createElement('td');
            if (nextDayToAdd > 0 && nextDayToAdd <= daysInMonth) {
                day.innerHTML = nextDayToAdd;
            }
            nextDayToAdd++;
            week.append(day);
        }
        table.append(week);
    }

    return table;
}

document.querySelector('#container').append(
    createCalendar("cal", 2018, 7)
);