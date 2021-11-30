class Wine {
    constructor(name1, country, age) {
        this.name1 = name1;
        this.country = country;
        this.age = age;
    }
}

// Initierar en tom array
let Wines = [];

persons.push(new Wine("Arc", "Frankrike", 2019));
persons.push(new Wine("Bubbly", "Frankrike", 2017));
persons.push(new Wine("B.F.F.", "Sverige", 2019));
persons.push(new Wine("Farem Tot Petar", "Frankrike", 2019));
persons.push(new Wine("Será Rouge", "Frankrike", 2014));
persons.push(new Wine("Rebel Blanc", "Frankrike", 2019));
persons.push(new Wine("Maintenant", "Frankrike", 2018));
persons.push(new Wine("La Lanterne Rouge", "Frankrike", 2019));

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