function Student(name, gender, age) {
	this.name = name;
	this.gender = gender;
	this.age = age;
	this.marks = [];
}

let student1 = new Student('Anna', 'female', 18);

let student2 = new Student('Oleg', 'male', 19);

let student3 = new Student('Irina', 'female', 20);

Student.prototype.setSubject = function(subjectName) {
	this.subject = subjectName;
}

Student.prototype.addMarks = function(...marksToAdd) {
	if (this.marks != undefined) {
		this.marks.push(...marksToAdd);
	}
}

Student.prototype.getAverage = function() {
	if (this.marks === undefined || this.marks.length === 0) {
		return 0;
	}
	const sum = this.marks.reduce((previousValue, item) => previousValue + item, 0);
	return sum / this.marks.length;
}

Student.prototype.exclude = function(reason) {
	delete this.subject;
	delete this.marks;
	this.excluded = reason;
}