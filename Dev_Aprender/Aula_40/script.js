// Date

const data1 = new Date()
console.log(data1)

const data2 = new Date('March 25 2020 09:30')
console.log(data2)

const data3 = new Date(1984,5,30,12,30,25)
console.log(data3)

console.log(data1.toDateString())

console.log(data1.toTimeString())

console.log(data1.toISOString())