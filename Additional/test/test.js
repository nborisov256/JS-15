// Функция sum должна возвращать тип данных true. Проверить её на это.
const sum = require('../js/1');

test('Функция sum должна возвращать тип данных true', () => {
	expect(sum(2, 2)).Truthy();
});


// Переменная num должна быть равна 5. Проверить на соответствие.
const num = require('../js/2');

test('Переменная num должна быть равна 5', () => {
	expect(num).toBe(5);
});


// Узнать, что нам вернет функция each в данных условиях. Проверить её на тип данных, который она возвращает,
// на соответствие ожидаемому результату (который вы получили) и на свойство length.
const each = require('../js/3');

test('Проверка на тип данных each и свойство length', () => {
	expect(typeof(each)).toBe('object');
	expect(each).toHaveLength(5);
});