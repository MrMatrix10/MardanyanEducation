const form = document.querySelector('form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const phoneInput = document.querySelector('#phone');

// Добавляем обработчик события на отправку формы
form.addEventListener('submit', (event) => {
    // Предотвращаем перезагрузку страницы
    event.preventDefault();
     // Получаем значения и убираем лишние пробелы
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const phone = phoneInput.value.trim();
    if (name === '' || email === '' || phone === '') {
        alert('Пожалуйста, заполните все поля формы');
    } else {
        alert(`Спасибо, ${name}! Ваша заявка отправлена, ожидайте звонка`);
        form.reset();
    }
});

/*Объяснение кода:
Пользователь заполняет форму обратной связи, код проверяет заполнены ли все поля имени, эл.почты и номера телефона. 
Если какое-то поле пустое, то код выводит предупреждение, если оба заполнены, код выводит сообщение с благодарностью и сбрасывает его */