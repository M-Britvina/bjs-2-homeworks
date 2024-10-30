class AlarmClock {
	constructor() {
		this.alarmCollection = [];
		this.intervalId = null;
	}

	addClock(time, callback) {
		if (time === undefined || time === null || callback === undefined || callback === null) {
			throw new Error('Отсутствуют обязательные аргументы');
		}
		if (this.alarmCollection.find(item => item.time === time)) {
			console.warn('Уже присутствует звонок на это же время')
		}
		this.alarmCollection.push({
			callback,
			time,
			canCall: true
		})
	}

	removeClock(time) {
		this.alarmCollection = this.alarmCollection.filter(item => item.time != time);
	}

	getCurrentFormattedTime() {
		const current = new Date();
		const hours = current.getHours();
		const minutes = current.getMinutes();
		return (hours < 10 ? '0' + hours : hours) + ':' + (minutes < 10 ? '0' + minutes : minutes);
	}

	start() {
		if (this.intervalId != null) {
			return;
		}
		this.intervalId = setInterval(() => {
			this.alarmCollection.forEach(alarm => {
				if (alarm.canCall && this.getCurrentFormattedTime() === alarm.time) {
					alarm.canCall = false;
					alarm.callback();
				}
			})
		}, 1000);
	}

	stop() {
		clearInterval(this.intervalId);
		this.intervalId = null;
	}

	resetAllCalls() {
		this.alarmCollection.forEach(alarm => alarm.canCall = true);
	}

	clearAlarms() {
		this.stop();
		this.alarmCollection = [];
	}
}