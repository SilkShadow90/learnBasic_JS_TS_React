const carA = {
  construct: {
    isMechanic: true,
    maxSpeed: 200,
  },
  color: 'red',
};

const carB = {
  construct: {
    isMechanic: true,
    maxSpeed: 200,
  },
  color: 'red',
  radio: true,
};

function isEqualCar(car1, car2) {
  // превращение обекта в массив
  const keysList = Object.keys(car1);

  // Object.keys(obj) = key[] | Object.values(obj) - value[] | Object.entries(obj) = [key, value][]

  const isLenghtEqual = keysList.length === Object.keys(car2).length;

  if (!isLenghtEqual) {
    return false;
  }

  return keysList.every((key) => {
    // car1[key] - value
    // если значение ключа является объектом то уходим в рекурсию
    if (typeof car1[key] === 'object') {
      return isEqualCar(car1[key], car2[key]);
    }

    const isEqual = car1[key] === car2[key];

    if (!isEqual) {
      console.log(key);
    }

    return isEqual;
  });
}

console.log(isEqualCar(carA, carB));
