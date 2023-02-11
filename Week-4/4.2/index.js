var Person = function () {};

Person.prototype.initialize = function (name) {
  this.name = name;
};

var Teacher = function () {};

/**
 * sets the prototype of the Teacher class to a
 * new object created from the Person.prototype object
 **/
Teacher.prototype = Object.create(Person.prototype);

Teacher.prototype.teach = function (subject) {
  console.log(`${this.name} is now teaching ${subject}`);
};

var obj = new Teacher();

obj.initialize("Dillip");
obj.teach("Web Development");
