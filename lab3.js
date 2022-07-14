/* Lab 3 - Object

Create an object for a "TeacherAssistant" with the following properties
- Name 
- inClass (with true or false)

Now with the above object do the following:
- Display the TeacherAssistant object
- Add a new "property" called "Classes" with an empty array.
- Add a new class name (just string) to the newly added property
- Display the TeacherAssistant Object. */

// let teacherAssistant = {
//     name: "William",
//     inClass: true,
//}

let TeacherAssistants = [];
//----
let TeacherAssistant = {
  Name: "matt",
  inClass: false,
};
TeacherAssistants.push(TeacherAssistant);
console.log(TeacherAssistants[0].Name);
//-----
let TeacherAssistant2 = {
  Name: "Manny",
  inClass: false,
};
TeacherAssistants.push(TeacherAssistant2);
console.log(TeacherAssistants[1].Name);

// teacherAssistant.Classes = []
// teacherAssistant.Classes.push('array');

// console.log(teacherAssistant);
