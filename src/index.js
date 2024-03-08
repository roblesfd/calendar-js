import './main.css';
const calendarContainer = document.getElementById('calendar');
const viewTitle = document.querySelector('.viewTitle');
const prevBtnMain = document.getElementById('prevBtnMain');
const nextBtnMain = document.getElementById('nextBtnMain');
const prevBtnSide = document.getElementById('prevBtnSide');
const nextBtnSide = document.getElementById('nextBtnSide');
const sideCalendar = document.querySelector('#side-calendar');
console.log('Hola');

const daysWeekCompleto = [
  'Domingo',
  'Lunes',
  'Martes',
  'Miércoles',
  'Jueves',
  'Viernes',
  'Sábado',
];

const daysWeekInicial = ['D', 'L', 'M', 'M', 'J', 'V', 'S'];

let currentDate = new Date();

function generateDaysInMonth(year, month, container) {
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = new Date(year, month, 1).getDay();
  const isSideCalendar = container.id == 'side-calendar';

  container.innerHTML = '';

  // Agregar nombres de los días de la semana
  const daysOfWeek = !isSideCalendar ? daysWeekCompleto : daysWeekInicial;

  // añade nombres dias de la semana
  daysOfWeek.forEach((day) => {
    const dayOfWeek = document.createElement('div');
    dayOfWeek.textContent = day;
    if (!isSideCalendar) {
      dayOfWeek.classList.add(
        'font-bold',
        'borderless',
        'bg-secondary-100',
        'paddingMedium'
      );
    } else {
      dayOfWeek.classList.add('font-bold', 'borderless', 'paddingless');
    }
    container.appendChild(dayOfWeek);
  });
  // añade espacios vacios
  for (let i = 0; i < firstDayOfMonth; i++) {
    const emptyDay = document.createElement('div');
    if (isSideCalendar) {
      emptyDay.classList.add('borderless', 'paddingless');
    }
    container.appendChild(emptyDay);
  }
  // añade dias del mes
  for (let i = 1; i <= daysInMonth; i++) {
    const day = document.createElement('div');
    day.textContent = i;
    if (isSideCalendar) {
      day.classList.add('paddingless', 'borderless');
    }
    container.appendChild(day);
  }

  viewTitle.textContent = `${new Intl.DateTimeFormat('es-ES', { month: 'long', year: 'numeric' }).format(currentDate)}`;
}

function addButtonListener(element, container, operator) {
  element.addEventListener('click', () => {
    if (operator === '+') {
      currentDate.setMonth(currentDate.getMonth() + 1);
    } else {
      currentDate.setMonth(currentDate.getMonth() - 1);
    }
    generateDaysInMonth(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      container
    );
  });
}

document.addEventListener('DOMContentLoaded', () => {
  // Generar días del mes actual al cargar la página
  generateDaysInMonth(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    calendarContainer
  );
  generateDaysInMonth(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    sideCalendar
  );

  addButtonListener(prevBtnMain, calendarContainer, '-');
  addButtonListener(nextBtnMain, calendarContainer, '+');
  addButtonListener(prevBtnSide, sideCalendar, '-');
  addButtonListener(nextBtnSide, sideCalendar, '+');
});
