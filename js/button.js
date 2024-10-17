// Получаем кнопку и основной контейнер
var button = document.getElementById('movingButton');
var main = document.getElementById('main');

// Обработчик события прокрутки
main.addEventListener('scroll', function() {
  // Получаем вертикальную позицию прокрутки
  var scrollTop = main.scrollTop;
  // Устанавливаем новое свойство CSS для кнопки
  button.style.top = (scrollTop + main.clientHeight - button.clientHeight - 20) + 'px';
});