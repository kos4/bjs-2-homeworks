function compareArrays(arr1, arr2) {
  return arr1.every((item, index, arr) => item === arr2[index] && arr.length === arr2.length);
}

function getUsersNamesInAgeRange(users, gender) {
  let sum = 0;

  return users.filter(user => user.gender === gender).reduce((acc, item, index, arr) => {
    sum += item.age;
    if (arr.length === index + 1) {
      return sum/arr.length;
    }
  }, 0);
}