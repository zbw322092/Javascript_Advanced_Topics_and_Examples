/* setter */
var language = {
	log: [],
	set current(name) {
		this.log.push(name);
	}
};

console.log(language);
language.current = 'EN';
console.log(language.log);

language.current = 'CN';
console.log(language.log);

console.log(language.current); // undefined

// defined setter on an existing object using defineProperty
var o = {
	a: 0
};
Object.defineProperty(o, 'b', { set: function(x) {this.a = x / 2} });
console.log(o);
o.b = 10;
console.log(o); // { a: 5 }


/* getter */
var obj = {
	log: ['test'],
	get latest() {
		if (this.log.length == 0) return undefined;
		return this.log[this.log.length - 1];
	}
};
console.log(obj.latest); // test
