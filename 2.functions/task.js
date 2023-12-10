function getArrayParams(...arr) {
  return {
    min: Math.min.apply(null, arr),
    max: Math.max.apply(null, arr),
    avg: Number(
      arr.reduce((acc, item) => acc + item / arr.length , 0
    ).toFixed(2)),
  };
}

function summElementsWorker(...arr) {
  if (arr.length === 0) return 0;

  return arr.reduce((acc, item) => acc + item, 0);
}

function differenceMaxMinWorker(...arr) {
  if (arr.length === 0) return 0;

  let result = Math.max.apply(null, arr) - Math.min.apply(null, arr);
  return Number.isFinite(result) ? result : 0;
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

  let countEvenElement = 0;
  let sumEvenElement = 0;
  arr.reduce((acc, item) => {
    if (item % 2 === 0) {
      sumEvenElement += item;
      countEvenElement++;
    }
  }, 0)

  return sumEvenElement / countEvenElement;
}

function makeWork (arrOfArr, func) {
  let result = 0;
  arrOfArr.reduce((acc, item) => {
    const tmp = func(...item);
    if (tmp > result) {
      result = tmp;
    }
  }, 0);

  return result;
}