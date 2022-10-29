//Typescript basics

//Typescript allows for statical scripting
console.log("testing")
let _name: string = "Favour Syre"
let _age: number = 23
let career: any = "Life Hacker"
let items: any[] = [1, 3, "Hello"]
// let _name: string = window.prompt("Enter name: ")
// let _age: number = parseInt(window.prompt("Enter age: "))
console.log(`My name is ${_name}, I'm ${_age}'s old and I'm a ${career}.
${items}
`)

//Tuple
let person_: [number, boolean] = [1, true]
let persons: [string, number][]

persons = [
    ["Syre Musk", 23],
    ["Uchiha Syre", 20],
    ["Syre Chi", 27],
]
console.log(person_)

//Union
let user_: number | string
user_ = 22

// Objects
type User = {
    id: number
    name: string
}
  
const user: User = {
id: 1,
name: 'John',
}

console.log(`User: ${user.id}`)

// Functions
function addNum(x: number, y: number): number { //This hints that the result would be an integer
    return x + y
}

// Void
function log(message: string | number): void { //This means that no value would be returned
    console.log(message)
}

// Interfaces
interface UserInterface {
    readonly id: number
    name: string
    age?: number
}

const user1: UserInterface = {
id: 1,
name: 'John',
}

interface MathFunc {
(x: number, y: number): number
}

const add: MathFunc = (x: number, y: number): number => x + y
const sub: MathFunc = (x: number, y: number): number => x - y
  
interface PersonInterface {
id: number
name: string
register(): string
}

// Classes
class Person implements PersonInterface {
    id: number
    name: string
  
    constructor(id: number, name: string) {
      this.id = id
      this.name = name
    }
  
    register() {
      return `${this.name} is now registered`
    }
  }
  
const brad = new Person(1, 'Brad Traversy')
const mike = new Person(2, 'Mike Jordan')

// Subclasses
class Employee extends Person {
position: string

constructor(id: number, name: string, position: string) {
    super(id, name)
    this.position = position
}
}

const emp = new Employee(3, 'Shawn', 'Developer')

// Generics
function getArray<T>(items: T[]): T[] { //This allows for generic datatype hinting
    return new Array().concat(items)
}

let numArray = getArray<number>([1, 2, 3, 4]) //Passing another datatype asside from int to this variable would throw an error
let strArray = getArray<string>(['brad', 'John', 'Jill'])

strArray.push(1) // Throws error


export {} //This helps to share the various variables without errors