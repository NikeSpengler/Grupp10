class Person {
    constructor(firstName, lastName, age, phone, mobile) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.phone = phone;
        this.mobile = mobile;
    }
}

// Initierar en tom array
let persons = [];

persons.push(new Person("Marcus", "Henriksson", 32, "031234567", "0701234567"));
persons.push(new Person("Cihan", "Yasar", 46, "034973", "0709876543"));
persons.push(new Person("Rebecka", "Hedlin", 37, "1223345", "073456789"));
persons.push(new Person("Adam", "Bertilsson", 29, "1234567", "7777777"));

console.log(persons);

function generateTable(data) {
    // Loop för array
    data.forEach(object => {
        // Skapa ny tabellrad
        document.write("<tr>");

        for (x in object) {
            //skapa td tag
            document.write("<td>");

            //Hämta värde från objekt
            document.write(object[x]);

            //stänga td tag
            document.write("</td>");
        }