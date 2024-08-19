// Code goes here!

// const add = (a: number, b: number) => a + b

// const printOutput: (a: number | string) => void = (output: string | number) =>
//   console.log(output)

// const button = document.querySelector("button")

// if (button) {
//   button.addEventListener("click", (event) => console.log(event))
// }

// printOutput(add(5, 1))

const hobbies = ["sports", "cooking"]
const activeHobbies = ["Hikings"]

activeHobbies.push(...hobbies)

const person = {
  firstName: "Max",
  age: 30,
}

const copiedPerson = { ...person }

const add = (...numbers: number[]) => {
  return numbers.reduce((curResult, curValue) => {
    return curResult + curValue
  }, 0)
}
const addedNumbers = add(5, 10, 2, 3, 7)
console.log(addedNumbers)

//const hobby1 = hobbies[0];
//const hobby2 = hobbies[1];
const [hobby1, hobby2, ...remainingHobbies] = hobbies

console.log(hobbies, hobby1, hobby2)

const { firstName: userName, age } = person

console.log(userName, age, person)
