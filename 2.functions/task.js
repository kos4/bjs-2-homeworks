function getArrayParams(...arr) {
  const min = Math.min.apply(null, arr);
  const max = Math.max.apply(null, arr);
  let avg = 0;
  const sum = arr.reduce((prevValue, curValue) => prevValue + curValue, avg);
  avg = Number((sum / arr.length).toFixed(2));

  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  let result = 0;

  if (arr.length > 0) {
    let initValue = 0;
    result = arr.reduce((prevValue, curValue) => prevValue + curValue, initValue);
  }

  return result;
}

function differenceMaxMinWorker(...arr) {
  let result = 0;

  if (arr.length > 0) {
    const min = Math.min.apply(null, arr);
    const max = Math.max.apply(null, arr);
    result = max - min;
    result = Number.isFinite(result) ? result : 0;
  }

  return result;
}

function differenceEvenOddWorker(...arr) {
  let result = 0;

  if (arr.length > 0) {
    let sumEvenElement = 0;
    let sumOddElement = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
        sumEvenElement += arr[i];
      } else {
        sumOddElement += arr[i];
      }
    }
    result = sumEvenElement - sumOddElement;
  }

  return result;
}

function averageEvenElementsWorker(...arr) {
  let result = 0;

  if (arr.length > 0) {
    let sumEvenElement = 0;
    let countEvenElement = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
        sumEvenElement += arr[i];
        countEvenElement++;
      }
    }
    result = sumEvenElement / countEvenElement;
  }

  return result;
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