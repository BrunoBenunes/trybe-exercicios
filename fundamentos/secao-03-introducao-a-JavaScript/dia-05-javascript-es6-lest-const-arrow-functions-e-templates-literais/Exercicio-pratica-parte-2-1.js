const car = {
  status: 'on'
}

const startStopCar = (power) => {
  if (car.status === power) {
    car.status = 'off'
  } else {
    car.status = 'on'
  }
}

startStopCar('on')
console.log(car)