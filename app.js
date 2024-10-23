let students = require("./data.json");

let getAllStudents = () => {
  return students;
};
//console.log(getAllStudents());

let getFirstStudent = () => {
  return students[0];
};
//console.log(getFirstStudent());

let getLastStudent = () => {
  return students[students.length - 1]
}
//console.log(getLastStudent());
let getStudentById = (id) => {
  return students.find(student =>
     student.id === id) 
}
//console.log(getStudentById(3));
let getStudentsByStage = (stage) => {
  return students.filter(student =>
    student.stage === stage) 
};
//console.log(getStudentsByStage("Grade 11"));

let addStudent = (newStudent) => {
  return students.push( newStudent)
};
//console.log(addStudent(" "));
let removeStudentById = (id) => {
  return students.filter( student =>student.id !== id)
};
//console.log(removeStudentById());
let updateStudentById = (id, updatedData) => { 
  return students.map(student => {
    if (student.id === id) {
      return Object.assign({}, student, updatedData);
    }
    return student;
  });
}; 
//console.log(updateStudentById());

let getAverageAge = () => {
  let sumAge = students.reduce((sum,student)=> sum + student.age ,0 )
  return sumAge/students.length
};
//console.log(getAverageAge());

let getStudentsAboveAge = (age) => {
  return students.filter( student=>student.age > age )
};
///console.log(getStudentsAboveAge(12));

let getStudentsBelowAge = (age) => {
  return students.filter (student=> student.age < age)
};
//console.log(getStudentsBelowAge(17));


let getStudentByName = (name) => {
  return students.find( student => student.name===name)
};
//console.log(getStudentByName("Bob Brown"));


let sortStudentsByName = () => {
  return students.sort((a, b) => a.name - b.name);
};
//console.log(sortStudentsByName())

let sortStudentsByAge = () => {
  return students.sort((a, b) => a.age - b.age);
};
//console.log(sortStudentsByAge())

let filterStudentsByAge = (age) => {
    return students.filter(student=> student.age===age) 
};
//console.log(filterStudentsByAge(16));

let filterStudentsByStage = (stage) => {
  return students.filter(student=> student.stage===stage) 
};
//console.log(filterStudentsByStage("Grade 11"))

let countStudents = () => {
  return students.length
};
///console.log(countStudents())

let countStudentsByStage = (stage) => {
  return students.filter(student => student.stage === stage).length;
};
//console.log(countStudentsByStage("Grade 11"))

let incrementStudentAgeById = (id) => {
 let student=students.find(student => student.id === id)
 student.age= student.age+1
 return student
};
//console.log(incrementStudentAgeById(2))
let decrementStudentAgeById = (id) => {
  let student=students.find(student => student.id === id)
 student.age= student.age-1
 return student
};
//console.log(decrementStudentAgeById(2))
let getStudentsWithIdGreaterThan = (id) => {
  return students.filter(student => student.id > id);
};
 //console.log(getStudentsWithIdGreaterThan(2))

let getStudentsWithIdLessThan = (id) => {
  return students.filter(student => student.id < id);
};
//console.log(getStudentsWithIdLessThan(4))

let getStudentsInRangeOfIds = (startId, endId) => {
  return students.filter(student => startId<=student.id && endId >=student.id ) ;
};
//console.log(getStudentsInRangeOfIds(1,4))
let getTotalAgeOfStudents = () => {
  let totalAge = students.reduce((sum,student)=> sum + student.age ,0 )
  return totalAge
};
//console.log(getTotalAgeOfStudents())

let getAverageAgeByStage = (stage) => {
  let totalAge =students.reduce((sum,student)=>sum + student.age ,0)
  return totalAge/students.length
};
//console.log(getAverageAgeByStage("Grade 10"))

let getYoungestStudent = () => {
  return students.reduce((youngest, student) => {
    return student.age < youngest.age ? student : youngest; 
})
}
//console.log(getYoungestStudent())

let getOldestStudent = () => {
  return students.reduce((oldest, student) => {
    return student.age >oldest.age ? student : oldest; 
})};
//console.log(getOldestStudent())
let hasStudentWithName = (name) => {
  return students.some(student => student.name === name);
};
//console.log(hasStudentWithName("Jane"))

let getNamesOfAllStudents = () => {
  return students.map(student => student)
};
//console.log(getNamesOfAllStudents())

let getAllStudentIds = () => {
  return students.map((student) => student.id)
};
//console.log(getAllStudentIds())

let getAllStudentStages = () => {
  return students.map((student) => student.stage)
};
//console.log(getAllStudentStages())

let getStudentsWithNamesStartingWith = (letter) => {
  return students.filter(student => student.name.startsWith(letter));
};
//console.log(getStudentsWithNamesStartingWith("a"))


let getStudentsWithNamesEndingWith = (letter) => {
  return students.filter(student => student.name.endsWith(letter));
};
//console.log(getStudentsWithNamesEndingWith())

let getStudentsWithNameLengthGreaterThan = (length) => {
 return students.filter(student => student.name.length > length)
};
//console.log(getStudentsWithNameLengthGreaterThan())

let getStudentsWithNameLengthLessThan = (length) => {
  return students.filter(student => student.name.length < length)
};
//console.log(getStudentsWithNameLengthLessThan(15))

let getAllStudentsSortedById = () => {
  return students.sort((a,b) => a.id -b.id)
};
//console.log(getAllStudentsSortedById())

let reverseStudentList = () => {
  return students.reverse();
};
//console.log(reverseStudentList())

let getRandomStudent = () => {
  let randomStudent = Math.floor(Math.random() * students.length);
  return students[randomStudent];
};
///console.log(getRandomStudent())

let removeStudentsAboveAge = (age) => {
  return students.filter( student =>student.age <= age)
};
//console.log(removeStudentsAboveAge(12))

let removeStudentsBelowAge = (age) => {
  return students.filter( student =>student.age >= age)
};
//console.log(removeStudentsBelowAge(15))

let getStudentsBetweenAges = (minAge, maxAge) => {
  return students.filter( student =>student.age >minAge && student.age < maxAge) 
};
//console.log(getStudentsBetweenAges())

let countStudentsAboveAge = (age) => {
  return students.filter(student => student.age<=age).length
};
//console.log(countStudentsAboveAge(13))

let countStudentsBelowAge = (age) => {
  return students.filter(student => student.age >=age).length
};
////console.log(countStudentsBelowAge(13))

let addMultipleStudents = (newStudents) => {
  newStudents.map(student => { students.push(student)})
};
//console.log(addMultipleStudents())

let removeMultipleStudentsById = (ids) => {
  return students.filter(student => !ids.includes(student.id));
};
//console.log(removeMultipleStudentsById())

let updateMultipleStudentsById = (ids, updatedData) => {
  let student = students.find(student => student.id === id);
  if (student) {
    Object.assign(student, updatedData);
};}
//console.log(updateMultipleStudentsById())

let isAllStudentsAboveAge = (age) => {
   return students.every(student => student.age > age);
  };
 // console.log(isAllStudentsAboveAge(13))

let isAllStudentsBelowAge = (age) => {
    return students.every(student => student.age < age);
  };
 // console.log(isAllStudentsBelowAge(13))

let hasStudentsInStage = (stage) => {
  return students.some(student => student.stage === stage);
};
//console.log(hasStudentsInStage("Grade 11"))

let getStudentNamesWithIds = (ids) => {
  return students.filter(student => ids.includes(student.id))
  .map(student => student.name);

};
//console.log(getStudentNamesWithIds(1))
