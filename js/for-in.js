// for ... in

let person = {
    Name: "luis Fernando Machado",
    Age: 45,
    Weigth: 78
};

for (let property in person){
    console.log(property);
}

//
// Forma de obter os valores das propredades do objeto
console.log(person.Name);
console.log(person.Age);
console.log(person.Weigth);

console.log(person["Name"]);
console.log(person["Age"]);
console.log(person["Weigth"]);

//
// Simplificando com o uso de For...In

for (let property in person){
    console.log(person[property]);
}