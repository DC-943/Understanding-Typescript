type Admin1 = {
  name: string
  privileges: string[]
}

type Employee1 = {
  name: string
  startDate: Date
}

type ElevatedEmployee1 = Admin1 & Employee1

const el: ElevatedEmployee1 = {
  name: "Max",
  privileges: ["create-server"],
  startDate: new Date(),
}

type Combinable1 = string | number
type Numeric1 = number | boolean

type Universal1 = Combinable1 & Numeric1

function add(a: string, b: string): string
function add(a: string, b: number): string
function add(a: number, b: string): string

function add(a: Combinable1, b: Combinable1) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString()
  }
  return a + b
}

const result = add("dong", "chen")
result.split(" ")
const fetchedUserData = {
  id: "u1",
  name: "Max",
  job: { title: "CEO", description: "My own company" },
}

console.log(fetchedUserData?.job?.title)

const userInput = undefined

const storeDate = userInput ?? "DEFAULT"

console.log(storeDate)

type UnknownEmployee = Employee1 | Admin1

function printEmployeeInformation(emp: UnknownEmployee) {
  console.log("Name:" + emp.name)
  if ("privileges" in emp) {
    console.log("Privileges:" + emp.privileges)
  }
  if ("startDate" in emp) {
    console.log("Start Date:" + emp.startDate)
  }
}

printEmployeeInformation(el)

class Car {
  drive() {
    console.log("Driving...")
  }
}

class Truck {
  drive() {
    console.log("Driving a truck...")
  }
  loadCargo(amount: number) {
    console.log("Loading cargo..." + amount)
  }
}

type Vehicle = Car | Truck

const v1 = new Car()
const v2 = new Truck()

function useVehicle(vehicle: Vehicle) {
  vehicle.drive()
  if ("loadCargo" in vehicle) {
    vehicle.loadCargo(1000)
  }
}

useVehicle(v1)
useVehicle(v2)

interface Bird {
  type: "bird"
  flyingSpeed: number
}
interface Horse {
  type: "horse"
  runningSpeed: number
}

type Animal = Bird | Horse

function moveAnimal(animal: Animal) {
  let speed
  switch (animal.type) {
    case "bird":
      speed = animal.flyingSpeed
      break
    case "horse":
      speed = animal.runningSpeed
  }
  console.log("moving at speed: " + speed)
}

moveAnimal({ type: "bird", flyingSpeed: 10 })

const userInputElement = document.getElementById("user-input")

//console.log(userInputElement)

//userInputElement.value = "Hi There"

if (userInputElement) {
  ;(userInputElement as HTMLInputElement).value = "Hi There"
}

interface ErrorContainer {
  //{email:"Not a valid email", username:"Must start with a valid email"}
  [prop: string]: string
}

const errorBag: ErrorContainer = {
  email: "Not a valid email",
  username: "Must start with a capital character!",
}
