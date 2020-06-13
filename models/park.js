const Park = function(name, ticketPrice){
  this.name = name;
  this.ticketPrice = ticketPrice;
  this.dinosaurs = [];
};

Park.prototype.addDinosaur = function (dinosaur) {
  this.dinosaurs.push(dinosaur);
};

Park.prototype.removeDinosaur = function (dinosaur) {
  dinosaurIndex = this.dinosaurs.indexOf(dinosaur);
  this.dinosaurs.splice(dinosaurIndex, 1);
};

module.exports = Park;
