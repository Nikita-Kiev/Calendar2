'use strict';

function getDaysInMonth(year, month) {
    return new Date(year, month, 0).getDate();
}

function createCalendar(id, year, month)
{
    let days = [
      'пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'нд'
    ];

    let table = document.createElement('table');
    let header = document.createElement('tr');
    header.classList.add('header');

    for (let day of days) {
      header.insertAdjacentHTML('beforeend', `<th>${day}</th>`);
    }
    table.append(header);

    let date = new Date(year, month - 1);
    let firstDay = date.getDay();
    firstDay = firstDay === 0 ? 6 : firstDay - 1;

    let daysInMonth = getDaysInMonth(year, month);
    let nextDayToAdd = 1 - firstDay;

    while (nextDayToAdd <= daysInMonth) {
      let week = document.createElement('tr');
      for (let i = 0; i < 7; i++) {
        let day = document.createElement('td');
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

document.querySelector('#calendar').append(
    createCalendar("cal", 2019, 5)
);