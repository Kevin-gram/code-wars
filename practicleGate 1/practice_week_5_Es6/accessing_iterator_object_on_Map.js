const students=new Map();
students.set('Developer',{
    name:"superFly",
    age:24,
    location:"NewYork"
})
students.set('Engineer',{
    name:"Chance",
    age:30,
    location:"Losangels"
})
students.set('Doctor',{
    name:"Henriette",
    age:28,
    location:"London"
})
students.set('Doctor',{
    name:"Henriette",
    age:28,
    location:"London"
})
students.set('Doctor',{
    name:"Henriette",
    age:28,
    location:"London"
})
students.set('Doctor',{
    name:"Henriette",
    age:28,
    location:"London"
})
students.set('Doctor',{
    name:"Henriette",
    age:38,
    location:"London"
})
students.delete('Doctor')
let k=students.values()
console.log(students.values())