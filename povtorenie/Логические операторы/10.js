// https://learn.javascript.ru/task/check-login
// Напишите код, который будет спрашивать логин с помощью prompt.

// Если посетитель вводит «Админ», то prompt запрашивает пароль, если ничего не введено или нажата клавиша Esc – показать «Отменено», в противном случае отобразить «Я вас не знаю».

// Пароль проверять так:

// Если введён пароль «Я главный», то выводить «Здравствуйте!»,
// Иначе – «Неверный пароль»,
// При отмене или в случае если ничего не введено – «Отменено».
// Блок-схема:

// Для решения используйте вложенные блоки if. Обращайте внимание на стиль и читаемость кода.

// Подсказка: передача пустого ввода в приглашение prompt возвращает пустую строку ''. Нажатие клавиши Esc во время запроса возвращает null.

let login = prompt('Vvedite login');
if (login == '' || login == null) {
	alert('otmeneno');
} else if (login !== 'Admin') {
	alert("i don't know you");
} else if (login === 'Admin') {
	password = prompt('Vvedite parol', '');
}
if (password == null || password == '') {
	alert('otmeneno');
} else if (password !== 'ya glavny') {
	alert('neverny parol');
} else if (password == 'ya glavny') {
	alert('hello!');
}
