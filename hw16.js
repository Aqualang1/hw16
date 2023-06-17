'use strict';

const Human = function (name, gender) {
    this.name = name;
    this.gender = gender;
}

const Apartment = function () {
    this.habitants = [];

    this.addHuman = function (human) {
        if (human instanceof Human) {
            this.habitants.push(human)
        } else {
            console.log('object is not instance of Human');
        }
    }
}

const Building = function (maxFlats) {
    this.flats = [];
    this.maxFlats = maxFlats;

    this.addFlat = function (apartment) {
        if (!(apartment instanceof Apartment)) {
            console.log('object is not instance of Apartment');
        } else if (this.flats.length >= this.maxFlats) {
            console.log(`apartment can't be added`);
        } else {
            this.flats.push(apartment);
        }
    }
}

const Ivan = new Human('Ivan', 'male')
const Olena = new Human('Olena', 'female')
const Anatoliy = new Human('Anatoliy', 'male')
const apartment1 = new Apartment();
const apartment2 = new Apartment();
const apartment3 = new Apartment();
apartment1.addHuman(Ivan);
apartment2.addHuman(Olena);
apartment3.addHuman(Anatoliy);
const empireStateBuilding = new Building(3);
empireStateBuilding.addFlat(apartment1);
empireStateBuilding.addFlat(apartment2);
empireStateBuilding.addFlat(apartment3);


// tryouts:

const Andrew = new Human('Andrew', 'male');
const apartment4 = new Apartment();
apartment4.addHuman(Andrew);

// empireStateBuilding.addFlat(Andrew)
// hw16.js:26 object is not instance of Apartment

// empireStateBuilding.addFlat(apartment4)
// hw16.js:28 apartment can't be added