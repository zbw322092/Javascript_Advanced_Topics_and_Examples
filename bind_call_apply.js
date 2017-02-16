/* example one */
// var button = document.getElementsByClassName('click-button');
// var heading = document.getElementsByClassName('heading');

// var users = {
// 	data: [
// 		{name: 'Bowen', age: 25},
// 		{name: 'Hui', age:26}
// 	],
// 	clickHandler: function() {
// 		var randomNumber = Math.floor(Math.random()*2);
// 		heading[0].innerHTML = this.data[randomNumber].name + ' ' +this.data[randomNumber].age;
// 	}
// };

// // if we do not use bind here, 'this' in clickHandler will bind to button object, and an error will be thrown
// button[0].onclick = users.clickHandler.bind(users);


/* example two */
var data = [
	{name: 'person1', age: 30},
	{name: 'person2', age: 35}
];

var users = {
	data: [
		{name: 'Bowen', age: 25},
		{name: 'Hui', age:26}
	],
	showData: function() {
		var randomNumber = Math.floor(Math.random()*2);
		console.log(this.data[randomNumber].name + ' ' + this.data[randomNumber].age);
	}
};

// the following code will console log user data inner users object, since users.showData() execute inside 
// users object and 'this' opints to data property inner users object.
var showUsersData = users.showData();

// 'this' will point to the data outside users object.
// Notice: the following code will generate an error in node.js environment, since 'this' in node.js
// global scope is not point to window object whhich is true in browser.
var showUsersData2 = users.showData;
showUsersData2();

showUsersData2.bind(users)();




/* example three */
var cars = {
	data:[
		{name:"Honda Accord", age:14},
		{name:"Tesla Model S", age:2}
	]
};

users.showData.bind(cars)();
// or
cars.showData = users.showData.bind(cars);
cars.showData();














