function getArrayParams(...arr) {
  const min = Math.min.apply(null, arr);
  const max = Math.max.apply(null, arr);
  let avg = 0;
  const sum = arr.reduce((prevValue, curValue) => prevValue + curValue, avg);
  avg = Number((sum / arr.length).toFixed(2));

  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  if (arr.length === 0) return 0;

  let initValue = 0;

  return arr.reduce((prevValue, curValue) => prevValue + curValue, initValue);
}

function differenceMaxMinWorker(...arr) {
  if (arr.length === 0) return 0;

  const min = Math.min.apply(null, arr);
  const max = Math.max.apply(null, arr);
  let result = max - min;
  result = Number.isFinite(result) ? result : 0;

  return result;
}

function differenceEvenOddWorker(...arr) {
  if (arr.length === 0) return 0;

  let sumEvenElement = 0;
  let sumOddElement = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
    } else {
      sumOddElement += arr[i];
    }
  }

  return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
  if (arr.length === 0) return 0;

  let sumEvenElement = 0;
  let countEvenElement = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
      countEvenElement++;
    }
  }

  return sumEvenElement / countEvenElement;
}

function makeWork (arrOfArr, func) {
  let maxWorkerResult = -Infinity;
  for (let i = 0; i < arrOfArr.length; i++) {
    const tmp = func(...arrOfArr[i]);

    if (tmp > maxWorkerResult) {
      maxWorkerResult = tmp;
    }
  }

  return maxWorkerResult;
}