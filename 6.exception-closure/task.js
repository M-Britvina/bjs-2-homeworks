function parseCount(str) {
	const num = Number.parseFloat(str);
	if (isNaN(num)) {
		throw new Error("Невалидное значение");
	}
	return num;
}

function validateCount(str) {
	try {
		return parseCount(str);
	} catch (e) {
		return e;
	}
}

class Triangle {
	constructor(a, b, c) {
		if (a + b < c || b + c < a || c + a < b) {
			throw new Error("Треугольник с такими сторонами не существует");
		}
		this.a = a;
		this.b = b;
		this.c = c;
	}

	get perimeter() {
		return this.a + this.b + this.c;
	}

	get area() {
		const p = this.perimeter / 2;
		return parseFloat((Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)).toFixed(3)));
	}
}

function getTriangle(a, b, c) {
	try {
		return new Triangle(a, b, c);
	} catch (e) {
		return {
			get area() {
				return "Ошибка! Треугольник не существует";
			},
			get perimeter() {
				return "Ошибка! Треугольник не существует";
			}
		}
	}
}