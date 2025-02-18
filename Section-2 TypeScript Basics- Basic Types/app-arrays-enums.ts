// const person: {
//   name: string
//   age: number
// } =

// const ADMIN = 0
// const READ_ONLY = 1
// const AUTHOR = 2

enum Role {
  ADMIN = "ADMIN",
  READ_ONLY = 100,
  AUTHOR = "AUTHOR",
}

const person = {
  name: "MAX",
  age: 30,
  hobbies: ["Sports", "Cooking"],
  role: Role.ADMIN,
}

// person.role.push("admin")
// person.role[1] = 10

let favoriteActivities: string[] = ["Sports", "Sports"]

console.log(person.name)

for (const hobby of favoriteActivities) {
  console.log(hobby.toUpperCase())
}

if (person.role === Role.AUTHOR) {
  console.log("is auth")
}
