//const names: Array<string> = []

//names[0].split("")
// const promise: Promise<number> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(10)
//   }, 2000)
// })

function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB)
}

const mergedObj = merge({ name: "Max" }, { age: 30 })

console.log(mergedObj.age)

interface Lengthy {
  length: number
}

function countAndPrint<T extends Lengthy>(element: T) {
  let descriptionText = "Got no value"
  if (element.length === 1) {
    descriptionText = "Got 1 elements."
  } else if (element.length > 1) {
    descriptionText = "Got " + element.length + "  elements"
  }
  return [element, descriptionText]
}

console.log(countAndPrint("Hi there"))

function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return "Value: " + obj[key]
}

extractAndConvert({ name: "Dong Chen" }, "name")

class DataStorage<T extends string | number | boolean | object> {
  private data: T[] = []
  addItem(item: T) {
    this.data.push(item)
  }
  removeItem(item: T) {
    if (!this.data.includes(item)) {
      return
    }
    this.data.splice(this.data.indexOf(item), 1)
  }
  getItems() {
    return [...this.data]
  }
}

const textStorage = new DataStorage<string>()
textStorage.addItem("Dong Chen")
textStorage.addItem("Manu")
textStorage.removeItem("Dong Chen")
console.log(textStorage.getItems())

const numberStorage = new DataStorage<number>()

const objectStorage = new DataStorage<object>()
const maxObj = { name: "Max" }
objectStorage.addItem({ name: "Max" })
objectStorage.addItem({ name: "Manu" })

objectStorage.removeItem({ name: "Max" })
console.log(objectStorage.getItems())

interface CourseGoal {
  title: string
  description: string
  completeUntil: Date
}

function createCourseGoal(
  title: string,
  description: string,
  date: Date
): CourseGoal {
  let courseGoal: Partial<CourseGoal> = {}
  courseGoal.title = title
  courseGoal.description = description
  courseGoal.completeUntil = date
  return courseGoal as CourseGoal
}
const names: Readonly<string[]> = ["Max", "Anna"]
// names.push('Manu')
// names.pop("Max")
