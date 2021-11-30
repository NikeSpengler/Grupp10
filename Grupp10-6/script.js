class Wine {
    constructor(name1, country, age) {
        this.name1 = name1;
        this.country = country;
        this.age = age;
    }
}

// Initierar en tom array
let Wines = [];

persons.push(new Wine("Anfora Arancione", "Japan", 2019));
persons.push(new Wine("Cihan", "Yasar", 46));
persons.push(new Wine("Rebecka", "Hedlin", 37));
persons.push(new Wine("Adam", "Bertilsson", 29));

console.log(Wines);

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

        // Stänga tabellrad
        document.write("</tr>");
    });
}