const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park;

  beforeEach(function () {
    park = new Park("Jurassic Park", 50);
    dinosaur1 = new Dinosaur("t-rex", "carnivore", 2000);
    dinosaur2 = new Dinosaur("diplodocus", "herbivore", 1800);
    dinosaur3 = new Dinosaur("velociraptor", "carnivore", 1600);
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
  });

  it('should have a name', function(){
    const actual = park.name;
    assert.strictEqual(actual, "Jurassic Park");
  });

  it('should have a ticket price', function(){
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 50);
  });

  it('should have a collection of dinosaurs', function(){
    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual, [dinosaur1, dinosaur2, dinosaur3]);
  });

  it('should be able to add a dinosaur to its collection', function(){
    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual, [dinosaur1, dinosaur2, dinosaur3]);
  });

  it('should be able to remove a dinosaur from its collection', function(){
    park.removeDinosaur(dinosaur3);
    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual, [dinosaur1, dinosaur2]);
  });

  it('should be able to find the dinosaur that attracts the most visitors', function(){
    actual = park.mostPopular();
    assert.deepStrictEqual(actual, dinosaur1);
  });

  it('should be able to find all dinosaurs of a particular species', function(){
    actual = park.dinosaursOfSpecies("t-rex");
    assert.deepStrictEqual(actual, [dinosaur1]);
  });

  it('should be able to calculate the total number of visitors per day');

  it('should be able to calculate the total number of visitors per year');

  it('should be able to calculate total revenue for one year');

});
