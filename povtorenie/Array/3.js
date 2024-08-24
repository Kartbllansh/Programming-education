// https://learn.javascript.ru/task/call-array-this
// Каков результат? Почему?

let arr = ['a', 'b'];

arr.push(function () {
	alert(this);
});

arr[2](); // ? а, б function() {...
alert(this);

// Вызов arr[2]() синтаксически – старый добрый obj[method](), в роли obj – arr, а в роли method – 2.

// Итак, у нас есть вызов функции arr[2] как метода объекта. Соответственно, он получает в качестве this объект arr и выводит массив:

// let arr = ["a", "b"];

// arr.push(function() {
//   alert( this );
// })

// arr[2](); // a,b,function(){...}
// У массива в итоге 3 элемента: сначала их было 2, плюс функция.
