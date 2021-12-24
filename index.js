const scores = [
    {
      marks: 32,
      name: "Yvette Merritt"
    },
    {
      marks: 57,
      name: "Lillian Ellis"
    },
    {
      marks: 22,
      name: "Mccall Carter"
    },
    {
      marks: 21,
      name: "Pate Collier"
    },
    {
      marks: 91,
      name: "Debra Beard"
    },
    {
      marks: 75,
      name: "Nettie Hancock"
    },
    {
      marks: 20,
      name: "Hatfield Hodge"
    }
  ];
  // [32, 57, 22]
  // Task 1
  // Print the name list - As an array
  // Expected Output
  // ["Yvette Merritt", "Lillian Ellis", "Mccall Carter", "Pate Collier" ,
  //  "Debra Beard", "Nettie Hancock",  "Hatfield Hodge"]
  const student =({name}) =>`${name}`;
  console.log(scores.map(student))

 let students = scores.filter (function (value){
     return value.marks >= 40;
 });
 console.log(students);
 let students = scores.filter(function (name){
     return name.marks < 40;
 });
 console.log(students);