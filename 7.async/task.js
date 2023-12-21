class AlarmClock {
  constructor() {
    this.alarmCollection = [];
    this.intervalId = null;
  }

  addClock (time, callback) {
    if (!time || !callback) {
      throw new Error('Отсутствуют обязательные аргументы');
    }

    if (this.checkTime(time)) {
      console.warn('Уже присутствует звонок на это же время');
    }

    this.alarmCollection.push({
      callback,
      time,
      canCall: true,
    });
  }

  checkTime (time) {
    return this.alarmCollection.some(item => item.time === time);
  }

  removeClock (time) {
    this.alarmCollection = this.alarmCollection.filter(item => item.time !== time);
  }

  getCurrentFormattedTime () {
    const date = new Date();
    return (date.getHours() > 9 ? date.getHours() : "0" + date.getHours()) + ":" + (date.getMinutes() > 9 ? date.getMinutes() : "0" + date.getMinutes());
  }

  start () {
    if (this.intervalId) {
      return false;
    }

    this.intervalId = setInterval(() => this.alarmCollection.forEach(item => {
      if (item.canCall && item.time === this.getCurrentFormattedTime()) {
        item.canCall = false;
        item.callback();
      }
    }), 1000);
  }

  stop () {
    clearInterval(this.intervalId);
    this.intervalId = null;
  }

  resetAllCalls () {
    this.alarmCollection.forEach(item => item.canCall = true);
  }

  clearAlarms () {
    this.stop();
    this.alarmCollection = [];
  }
}