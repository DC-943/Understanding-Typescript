// import _ from "lodash"

// //declare var GLOBAL: any

// console.log(_.shuffle([1, 2, 4]))
import { IsNotEmpty, IsNumber, IsPositive } from "class-validator"
// //console.log(GLOBAL)
export class Product {
  @IsNotEmpty()
  title: string
  @IsNumber()
  @IsPositive()
  price: number
  constructor(t: string, p: number) {
    this.title = t
    this.price = p
  }
  getInformation() {
    return [this.title, `$${this.price}`]
  }
}
