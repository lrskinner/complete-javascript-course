'use strict'

const mark = {
  fullName: 'Mark Miller',
  height: 1.69,
  mass: 78,
  calcBmi: function() {
		this.bmi = this.mass / this.height ** 2
		return this.bmi
  }
}

const john = {
  fullName: 'John Smith',
  height: 1.95,
  mass: 92,
  calcBmi: function() {
		this.bmi = this.mass / this.height ** 2
		return this.bmi
  }
}

//call the functions from each object so the result can be accessed
mark.calcBmi();
john.calcBmi();

//by accessing the value from the calcBmi functions we can determine who has the higher BMI
const markHigherBmi = mark.bmi > john.bmi;

//if mark has a higher BMI, the first string will print. If not, the second string will print
if (markHigherBmi) {
  console.log(`${mark.fullName}'s BMI of ${mark.bmi} is higher than ${john.fullName}'s BMI of ${john.bmi}`)
} else {
  console.log(`${john.fullName}'s BMI of ${john.bmi} is higher than ${mark.fullName}'s BMI of ${mark.bmi}`)
}
