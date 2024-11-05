class PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		this.name = name;
		this.releaseDate = releaseDate;
		this.pagesCount = pagesCount;
		this.state = 100;
		this.type = null;
	}
	fix() {
		this.state = this.state * 1.5;
	}
	get state() {
		return this._state;
	}
	set state(state) {
		if (state < 0) {
			this._state = 0;
		} else if (state > 100) {
			this._state = 100;
		} else {
			this._state = state;
		}
	}
}

class Magazine extends PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.type = "magazine";
	}
}

class Book extends PrintEditionItem {
	constructor(author, name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.author = author;
		this.type = "book";
	}
}

class NovelBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = "novel";
	}
}

class FantasticBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = "fantastic";
	}
}

class DetectiveBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = "detective";
	}
}

class Library {
	constructor(name) {
		this.name = name;
		this.books = [];
	}
	addBook(book) {
		if (book.state > 30) {
			this.books.push(book);
		}
	}
	findBookBy(type, value) {
		const book = this.books.find(item => item[type] === value);
		return book === undefined ? null : book;
	}
	giveBookByName(bookName) {
		const book = this.findBookBy("name", bookName);
		if (!book) return null;
		this.books = this.books.filter((item) => item.name !== bookName);
		return book;
	}
}

const library = new Library("Моя библиотека");

library.addBook(new NovelBook("Л.Н. Толстой", "Анна Каренина", 1987, 445));
library.addBook(new DetectiveBook("А.К. Дойл", "Записки о Шерлоке Холмсе", 1990, 789));
library.addBook(new DetectiveBook("Дж. Р.Р. Толкин", "Властелин Колец. Хранители Кольца", 2006, 478));
library.addBook(new Magazine("Журнал 1919", 1919, 100));
console.log(library.findBookBy("releaseDate", 1919));
let myBook = library.giveBookByName("Анна Каренина");
console.log(myBook);
myBook.state = 50;
console.log(myBook);
myBook.fix();
console.log(myBook);
library.addBook(myBook);


//Журнал успеваемости
class Student {
	constructor(name) {
		this.name = name;
		this.marks = {};
	}

	addMark(mark, subject) {
		if (mark < 2 || mark > 5) {
			return;
		}
		let subjectMarks = this.marks[subject];
		if (subjectMarks === undefined) {
			subjectMarks = [];
			this.marks[subject] = subjectMarks;
		}
		subjectMarks.push(mark);
	}

	getAverageBySubject(subject) {
		let subjectMarks = this.marks[subject];
		if (subjectMarks === undefined) {
			return 0;
		}
		const sum = subjectMarks.reduce((previousValue, item) => previousValue + item, 0);
		return sum / subjectMarks.length;
	}

	getAverage() {
		const subjects = Object.keys(this.marks);
		if (subjects.length === 0) {
			return 0;
		}
		const sum = subjects.reduce((previousValue, item) => previousValue + this.getAverageBySubject(item), 0);
		return sum / subjects.length;
	}
}