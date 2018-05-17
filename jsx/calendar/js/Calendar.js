
Date.prototype.daysInMonth = function() {
    return 33 - new Date(this.getFullYear(), this.getMonth(), 33).getDate();
};

const days = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"];
const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", 
            "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

  let daysArray = [];
  let weeksArray = [];
  for (let x = 0; x < 5; x++) {
    weeksArray[x] = [];
  }

function test(date) {
  const year = date.getFullYear();
  const CurrMonth = date.getMonth();
  const firstCurr = new Date(year, CurrMonth, 1);
  const firstCurrDay = firstCurr.getDay();
  const PrevMonth = new Date(year, CurrMonth - 1);
  const lastDatePrevMonth = new Date(year, PrevMonth.getMonth(), PrevMonth.daysInMonth());
  const lastDateCurrMonth = new Date(year, CurrMonth, firstCurr.daysInMonth());
  const lastPrevDay = lastDatePrevMonth.getDay();
  const lastCurrDay = lastDateCurrMonth.getDay();
  const allDates = lastPrevDay + date.daysInMonth() + (7 - lastCurrDay);
  
  
  let lastDaysCount = 7 - lastCurrDay;
  let prevDaysCount = lastPrevDay;
  let currDaysCount = date.daysInMonth();
  let day = 1;
  let nextMonthDay = 1;
  let prevElem = {};
  let currElem = {};
  let nextElem = {};

  for (let i = 0; i < allDates;) {
    if (prevDaysCount > 0) {
      prevElem = {
        num : lastDatePrevMonth.getDate() - i,
        other : true
      }
      daysArray.push(prevElem);
      prevDaysCount--;
    }
    if ((currDaysCount > 0) && (prevDaysCount === 0)) {
      currElem = {
        num : day
      }
      if (day == date.getDate()) {
        currElem.today = true;
      }
      daysArray.push(currElem)
      day++;
      currDaysCount--;
    }
    if ((currDaysCount === 0) && (lastDaysCount > 0)) {
      nextElem = {
        num : nextMonthDay,
        other : true
      }
      daysArray.push(nextElem);
      nextMonthDay++;
      lastDaysCount--;
    }
  i++;
  }
}

function createWeeks(daysArray) {
    for (let i = 0, k = 0; i < daysArray.length; i++) {
      weeksArray[k].push(daysArray[i])
      if (weeksArray[k].length == 7) {
        k++;
      }
    }
}


function showWeeks(item, index) {
    return (
      <tr>
      { item.map(showDays) }
      </tr>
    )
}

function showDays(item, index) {
  let dayClass = '';
  if (item.today) {
    dayClass = 'ui-datepicker-today';
  }
  if (item.other) {
    dayClass = 'ui-datepicker-other-month';
  }
  return (
      <td key={index} className={dayClass}>{item.num}</td>
  )
}

function changeMonthEnding(month) {
  if (month.slice(-1) === "ь" || month.slice(-1) === "й")
    return month.slice(0, -1) + "я";
  else return month + "а";
}

const Calendar = function(date) {
    test(date.date);
    createWeeks(daysArray);
    const {now} = date;
    const DateNow = date.date.getDate();
    const month = months[date.date.getMonth()];
    const year = date.date.getFullYear();
 
    return (
      <div className="ui-datepicker">
        <div className="ui-datepicker-material-header">
          <div className="ui-datepicker-material-day">Среда</div>
          <div className="ui-datepicker-material-date">
            <div className="ui-datepicker-material-day-num">{DateNow}</div>
            <div className="ui-datepicker-material-month">{changeMonthEnding(month)}</div>
            <div className="ui-datepicker-material-year">{year}</div>
          </div>
        </div>
        <div className="ui-datepicker-header">
          <div className="ui-datepicker-title">
            <span className="ui-datepicker-month">{month}</span>&nbsp;<span class="ui-datepicker-year">{year}</span>
          </div>
        </div>
        <table className="ui-datepicker-calendar">
          <colgroup>
            <col />
            <col />
            <col />
            <col />
            <col />
            <col className="ui-datepicker-week-end" />
            <col className="ui-datepicker-week-end" />
          </colgroup>
          <thead>
            <tr>
              <th scope="col" title="Понедельник">Пн</th>
              <th scope="col" title="Вторник">Вт</th>
              <th scope="col" title="Среда">Ср</th>
              <th scope="col" title="Четверг">Чт</th>
              <th scope="col" title="Пятница">Пт</th>
              <th scope="col" title="Суббота">Сб</th>
              <th scope="col" title="Воскресенье">Вс</th>
            </tr>
          </thead>
          <tbody>
            { weeksArray.map(showWeeks) }
          </tbody>
        </table>
      </div>
    )
}
