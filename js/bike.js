function Bike(name, type, color){
  // attributes go here...
  this.name = name;
  this.bikeType = type;
  this.frameColor = color;
  this.condition = "ready to go!";
}

Bike.prototype.takeForARide = function(distance){
  // code goes here...
  if (distance > 50) {
			this.condition = "needs a tune up";
		}

};

Bike.prototype.WHEELS = 2;

Bike.prototype.tuneUp = function(){
  // code goes here...
  this.condition = "ready to go!";

};
