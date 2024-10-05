function getArrayParams(...arr) {
	if (arr === undefined || arr.length === 0) {
		return 0;
	}

	let min = arr[0];
	let max = arr[0];
	let sum = 0;

	for (let i = 0; i < arr.length; i++) {
		let a = arr[i];

		if (a > max) {
			max = a;
		} else if (a < min) {
			min = a;
		}

		sum = sum + a;
	}

	let avg = sum / arr.length;

	return {
		min: min,
		max: max,
		avg: parseFloat(avg.toFixed(2))
	};
}

function summElementsWorker(...arr) {
	if (arr === undefined || arr.length === 0) {
		return 0;
	}

	const sum = arr.reduce(function(currentSum, currentNumber) {
		return currentSum + currentNumber;
	}, 0);
	return sum;
}

function differenceMaxMinWorker(...arr) {
	if (arr === undefined || arr.length === 0) {
		return 0;
	}

	let max = Math.max(...arr);
	let min = Math.min(...arr);

	const diff = max - min;

	return diff;
}

function differenceEvenOddWorker(...arr) {
	if (arr === undefined || arr.length === 0) {
		return 0;
	}

	let sumEvenElement = 0;
	let sumOddElement = 0;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 === 0) {
			sumEvenElement += arr[i];
		} else if (arr[i] % 2 !== 0) {
			sumOddElement += arr[i];
		}
	}

	return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
	if (arr === undefined || arr.length === 0) {
		return 0;
	}

	let sumEvenElement = 0;
	let countEvenElement = 0;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 === 0) {
			sumEvenElement += arr[i];
			countEvenElement += 1;
		}
	}

	return sumEvenElement / countEvenElement;
}

function makeWork(arrOfArr, func) {
	let maxWorkerResult = -Infinity;

	for (let i = 0; i < arrOfArr.length; i++) {
		const currentResult = func(...arrOfArr[i]);

		if (currentResult > maxWorkerResult) {
			maxWorkerResult = currentResult;
		}
	}

	return maxWorkerResult;
}