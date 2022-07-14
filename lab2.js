/* Create an object for a "Teacher" with the following properties
- Name (with anyone's name)
- Classes (with an empty array)
- currentlyTeaching (true or false, your choice)

Now with the above object do the following:
- Add a new class name (of your choice) to the "Classes" array 
- Add another class.
- Display the Teacher's Name
- Display the Teacher's Classes
- Display the full Teacher Object */

let teacher = {
    name: 'Damian',
    classes: [],
    currentlyTeaching: true,
    
}
teacher.classes.push('Javascript');

// teach name disp.
console.log("Teacher's name ", teacher.name)

//adding class
teacher.classes.push('array')

// classes disp.
//console.log(teacher.classes);

//full teach objects
console.log(teacher);
