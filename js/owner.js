function Owner(name){
  // attributes go here...
  this.name = name;
  this.bikes = [];
}

Owner.prototype.buildBike = function(name, type, color){
  // code goes here...
  var newBike = new Bike(name, type, color);
  this.bikes.push(newBike);
};

Owner.prototype.rideBike = function(bike_name, distance){
  // code goes here...
	this.bikes.forEach(function(bike){
	  if (bike.name === bike_name){
	  	bike.takeForARide(distance);
	  }
	});
};