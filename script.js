'use strict';
// Объект
// let car = {
// 	doors: 4,
// 	turbo: false,
// 	// метод ride
// 	ride: function name(params) {
// 		console.log('Машина едет');
// 	}
// };

// // Метод создания объекта Object create 
// let newCar = Object.create(car);

// newCar.model = 'mazda 3';

// console.log('newCar', newCar);

// console.log(newCar.doors);
// // Метод hasOwnProperty() возвращает логическое значение, указывающее, содержит ли объект указанное свойство.
// console.log(newCar.__proto__.hasOwnProperty('model'));
// console.log(newCar.__proto__.hasOwnProperty('doors'));

// // Метод isPrototypeOf() проверяет, входит ли объект в цепочку прототипов другого объекта.
// console.log(car.isPrototypeOf(newCar));

// Создание конструктора
// function Car(model, color){
// 	this.model = model;
// 	this.color = color;
// }

// Car.prototype.ride = function(){
// 	console.log('Ехать');
// };

// let car1 = new Car('Mazda', 'Red');
// let car2 = new Car('VAZ', 'Black');

// car1.ride();

// console.log(car1);

// console.dir(Car);
// let carTest = {
// 	model: 'Mazda'
// };


// Class
// function Car(brand, model, options) {
// 	this.brand = brand;
// 	this.model = model;
// 	options = options || {};
// 	this.color = options.color;
// 	this.transmission = options.transmission;

// }

// Car.prototype.ride = function(){
// 	console.log(this.brand + ' ' + this.model + ' поехала');
// };

// // Экземпляр класса
// let car1 = new Car ('Mazda', '3', {color: 'blue'});
// let car2 = new Car ('BMW', 'X3', {ABS: true});

// // Метод isPrototypeOf() проверяет, входит ли объект в цепочку прототипов другого объекта.
// console.log(Car.prototype.isPrototypeOf(car1));
// Оператор instanceof проверяет, принадлежит ли объект к определённому классу.
// console.log(car2 instanceof Car);

// car1.ride();
// car2.ride();

// Class
function Car(countyBuild, options) {
	this.countyBuild = countyBuild;
	options = options || {};
	this.color = options.color;
	this.transmission = options.transmission;
}
// Method
Car.prototype.ride = function(){
	console.log(this.brand + ' ' + this.model + ' поехала');
};
// Constructor
function Audi(countyBuild, options, model, type){
	this.brand = 'Audi';
	Car.apply(this, arguments); // Наследование
	this.model = model;
	this.type = type;
}

// Привязка класса и конструктора
Audi.prototype = Object.create(Car.prototype);
Audi.prototype.constructor = Audi;

// Создание объекта на основе класса
let car_q7 = new Audi('Germany', {color: 'red'}, 'Q7', 'S');

console.log(car_q7);

console.log(car_q7 instanceof Audi);
console.log(car_q7 instanceof Car);


car_q7.ride();