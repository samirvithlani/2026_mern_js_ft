var users = [
  { id: 1, name: "amit", age: 23 },
  { id: 2, name: "sumit", age: 24 },
  { id: 3, name: "jay", age: 21 },
  { id: 4, name: "jaya", age: 26 },
];
console.log(users);
//get all name
var names = users.map((user) => user.name);
console.log(names);

///updated full array with full obbjecy
//id+1000 ,name:upper, age+1

var updatedUser = users.map((u) => {
  return { id: u.id + 1000, name: u.name.toUpperCase(), age: u.age + 1 };
});
console.log(updatedUser);

//filter age 23 >

var users = [
  { id: 1, name: "amit", age: 23 },
  { id: 2, name: "sumit", age: 24 },
  { id: 3, name: "jay", age: 21 },
  { id: 1, name: "amita", age: 23 },
  { id: 4, name: "jaya", age: 26 },
  { id: 4, name: "jaya", age: 27 },
];

//object -->name
//var foundUser = users.find((u)=>u.name =="jaya")
var foundUser = users.find((u) => u.age == 23);
console.log(foundUser);

var compnaies = [
  {
    name: "Jio",
    employees: [
      { name: "Dhirubhai", post: "founder",sal:1200 },
      { name: "Mukesh", post: "Chairman" ,sal:1800},
      { name: "akash", post: "Chairman" ,sal:500},
    ],
  },
  {
    name: "Tata",
    employees: [
      { name: "Jamshedji", post: "founder",sal:2500 },
      { name: "Ratan Tata", post: "Chairman" ,sal:3000},
      { name: "abcd", post: "Chairman" ,sal:4000},
    ],
  },
];

//give all employee name of jio :
const jioemp = compnaies.find((c)=>c.name == "Jio").employees.map((emp)=>emp.name)
console.log(jioemp)
//const tataEMp = compnaies.find((c)=>c.name=="Tata").employees.filter((em)=>em.sal>2500)
const tataEMp = compnaies.find((c)=>c.name=="Tata").employees.filter((em)=>em.sal>2500).map((emp)=>emp.name)
console.log(tataEMp)

