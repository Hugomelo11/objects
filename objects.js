let person = {
    name: ":Hugo",
    lastName: "Salles",
    age: 25,
    inClass: true,
    classesTaught: ['Javascript', 'arrays']

}
person.name = "Oogs" // edit
person.hasGlasses = true; // add a new property
console.log(person);

person.Age = 21 // mistyped age, on purpose 
console.log(person)



// const allProps = Object.keys(person)
// console.log(allProps)
// const hasAge = allProps.indexOf("age") != -1
// console.log(hasAge)


// let {name,age} = person
// console.log(name)
// console.log(age)





// delete person.lastName
// console.log(person)

// console.log(person.name)
// person.name = "Hugo"
// console.log(person.name)