https://learn.javascript.ru/task/alert-and-or

Что выведет код ниже?

alert( null || 2 && 3 || 4 ); // 3
Приоритет оператора && выше, чем ||, поэтому он выполнится первым.

Результат 2 && 3 = 3, поэтому выражение приобретает вид:

null || 3 || 4