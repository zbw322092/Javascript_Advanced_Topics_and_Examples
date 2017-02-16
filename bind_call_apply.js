var button = document.getElementsByClassName('click-button');
var heading = document.getElementsByClassName('heading');

var users = {
	data: [
		{name: 'Bowen', age: 25},
		{name: 'Hui', age:26}
	],
	clickHandler: function() {
		var randomNumber = Math.floor(Math.random()*2);
		heading[0].innerHTML = this.data[randomNumber].name + ' ' +this.data[randomNumber].age;
	}
};

// if we do not use bind here, 'this' in clickHandler will bind to button object, and an error will be thrown
button[0].onclick = users.clickHandler.bind(users);

