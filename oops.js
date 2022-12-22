// property and methods


// const train = {
//     trainNumber : 15061,
//     sourceStation: 'Delhi',
//     destinationStation: 'Banglore',
//     totalDistance: function () {
//         return '1500km'
//     } 
// }

// console.log(train.hasOwnProperty('ticketPrice'))

// class Train {
//     constructor(number, source,destination) {
//         this.number = number
//         this.source = source
//         this.destination = destination
//     }
//     totalDistance () {
//         return `${calculateDistanceBetweenTwoStations(this.source,this.destination)}Km`
//     }
// }

// function calculateDistanceBetweenTwoStations(source, destination) {
//     // call some api
//     if(destination === 'Banglore') {
//         return 1500
//     } else {
//         return 700
//     }
// }


// const bangloreExpress = new Train(15061, "Delhi", "Banglore")
// const indoreExpress = new Train(14021, "New Delhi", "Indore")

// console.log(indoreExpress.totalDistance())

// class Vehicle {
//     constructor(color, brand, maxSpeed) {
//         this.color = color
//         this.brand = brand
//         this.maxSpeed = maxSpeed
//     }
//     getBrand() {
//         return 'hello'
//     }
// }

// class Car extends Vehicle {
//     constructor(color, brand, maxSpeed, noa, childLock)  {
//         super(color,brand,maxSpeed)
//         this.noa = noa
//         this.childLock = childLock
//         this.brand = 'hyndaui'
//     }
//     getBrand() {
//         return 'bye'
//     }
// }

// class Bike extends Vehicle {
//     constructor(color, brand, maxSpeed, sideCar) {
//         super(color,brand,maxSpeed)
//         this.sideCar = sideCar
//     }


// }

// const ertiga = new Car('white', 'maruti', 140, 4, true)
// console.log(ertiga.getBrand())

// const pulsar = new Bike('black', 'bjaj', 180, false)
// console.log(pulsar)


// const obj = {
//     'name': 'bhavesh',
//     'name': 'sidharth'
// }



// class Person {
//     set personName (name) {
//         this.name = name
//     }
// }

// const me = new Person()
// me.personName = 'bhavesh bansal'

// console.log(me.name)