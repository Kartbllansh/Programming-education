// https://learn.javascript.ru/task/endless-loop-error
// Этот цикл – бесконечный. Он никогда не завершится, почему?

let i = 0;
while (i != 10) {
	i += 0.2;
}
//  потому что 2/10 == 1/5, что в двоичной системе бесконечная дробь. Из-за потери точности i никогда не будет === 10
