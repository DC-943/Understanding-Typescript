abstract class Department {
  // private name:string;
  // private id:string;
  static fiscalYear = 2020
  protected employees: string[] = []
  constructor(protected readonly id: string, public name: string) {
    // this.name = n
    // this.id = id
  }
  static createEmployee(name: string) {
    return { name: name }
  }

  abstract describe(this: Department): void

  addEmployee(employee: string) {
    this.employees.push(employee)
  }

  printEmployeeInformation() {
    console.log(this.employees.length)
    console.log(this.employees)
  }
}

class ITDepartment extends Department {
  admins: string[]
  constructor(id: string, admins: string[]) {
    super(id, "IT")
    this.admins = admins
  }
  describe() {
    console.log(`Accounting Department- ID:${this.id}`)
  }
}

class AccountingDepartment extends Department {
  private static instance: AccountingDepartment
  private lastReport: string

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport
    }
    throw new Error("No report found")
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("Please provide a valid value")
    }

    this.addReport(value)
  }

  private constructor(id: string, private reports: string[]) {
    super(id, "accounting")
    this.lastReport = reports[0] || ""
  }
  public static getInstance(): AccountingDepartment {
    if (AccountingDepartment.instance) {
      return this.instance
    }

    this.instance = new AccountingDepartment("d2", [])
    return this.instance
  }

  describe() {
    console.log("Accounting Department- ID:")
  }
  addEmployee(name: string) {
    if (name === "Max") {
      return
    }
    this.employees.push(name)
  }

  addReport(text: string) {
    this.reports.push(text)
    this.lastReport = text
  }
  printReports() {
    console.log(this.reports)
  }
}

const employee1 = ITDepartment.createEmployee("Max")
console.log(employee1, Department.fiscalYear)

const it = new ITDepartment("d1", ["Max"])

//it.describe() // Department: Accounting;

it.addEmployee("Max")
it.addEmployee("Menu")

//accounting.employees[2] = "Anna"

it.describe()
it.name = "NEW NAME"
it.printEmployeeInformation()

console.log(it)

//const accounting = new AccountingDepartment("d2", [])
const accounting = AccountingDepartment.getInstance()

const accounting2 = AccountingDepartment.getInstance()

console.log("accounting and accounting2 : ", accounting, accounting2)

accounting.mostRecentReport = "Year End Report"

accounting.addReport("Something went wrong")

console.log(accounting.mostRecentReport)

accounting.addEmployee("Anna")

accounting.addEmployee("Manu")

// accounting.printReports()

// accounting.printEmployeeInformation()
accounting.describe()

// const accountingCopy = { name: "DUMMY", describe: accounting.describe }

// accountingCopy.describe()
