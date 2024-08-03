type Combinable = number | string;

function combine(
  input1: Combinable;
  input2: Combinable;
  resultConversion: "as-number" | "as-string"
) {
  let result
  if (typeof input1 === "number" && typeof input2 === "number") {
    result = input1 + input2
  } else {
    result = input1.toString() + input2.toString()
  }
  if (resultConversion === "as-number") {
    return +result
  } else {
    return result.toString()
  }
}

const combinedAges = combine(30, 26, "as-number")
console.log(combinedAges)

const combineNames = combine("30", "20", "as-text")

const combinedNames = combine("Max", "Anna", "as-text")
console.log(combinedNames)
