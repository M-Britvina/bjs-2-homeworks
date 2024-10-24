function getArrayParams(...arr) {
	let min = arr[0];
	let max = arr[0];
	let sum = 0;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > max) {
			max = arr[i];
		} else if (arr[i] < min) {
			min = arr[i];
		}

		sum = sum + arr[i];
	}

	return {
		min: min,
		max: max,
		avg: parseFloat((sum / arr.length).toFixed(2))
	};
}

function summElementsWorker(...arr) {
	return arr.reduce(function(currentSum, currentNumber) {
		return currentSum + currentNumber;
	}, 0);
}

function differenceMaxMinWorker(...arr) {
	if (arr === undefined || arr.length === 0) {
		return 0;
	}

	return Math.max(...arr) - Math.min(...arr);
}

function differenceEvenOddWorker(...arr) {
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