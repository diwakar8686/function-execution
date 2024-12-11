let age = 25;
function displayAge() {
  console.log("Current age:", age);
}
displayAge();  
function changeAge(newAge) {
  age = newAge;
  console.log("Updated age inside changeAge function:", age);
}
changeAge(30);  
displayAge();  