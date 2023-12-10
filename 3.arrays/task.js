function compareArrays(arr1, arr2) {
  return arr1.every((item, index, arr) => item === arr2[index] && arr.length === arr2.length);
}

function getUsersNamesInAgeRange(users, gender) {
  return users.filter(user => user.gender === gender).reduce((acc, item, index, arr) => acc + item.age / arr.length, 0);
}