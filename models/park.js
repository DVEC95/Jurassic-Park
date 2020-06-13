const Park = function(name, ticketPrice){
  this.name = name;
  this.ticketPrice = ticketPrice;
  this.dinosaurs = [];
};

Park.prototype.addDinosaur = function(dinosaur){
  this.dinosaurs.push(dinosaur);
};

Park.prototype.removeDinosaur = function(dinosaur){
  dinosaurIndex = this.dinosaurs.indexOf(dinosaur);
  this.dinosaurs.splice(dinosaurIndex, 1);
};

Park.prototype.mostPopular = function(){
  const mostPopularDinosaur = this.dinosaurs.reduce(function(firstDinosaur, secondDinosaur){
    return (firstDinosaur.guestsAttractedPerDay > secondDinosaur.guestsAttractedPerDay) ? firstDinosaur : secondDinosaur;
  });
  return mostPopularDinosaur;
};

Park.prototype.dinosaursOfSpecies = function(species){
  let speciesArray = [];
  for (dinosaur of this.dinosaurs){
    if (dinosaur.species === species){
      speciesArray.push(dinosaur);
    };
  };
  return speciesArray;
};

module.exports = Park;
