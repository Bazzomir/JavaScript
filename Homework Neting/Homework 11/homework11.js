// 1. Return vehicle's position
let vehicle = function (id, latitude, longitude) {
    this.setPosition = function (latitude, longitude) {
        this.time = Date.now();
        this.longitude = longitude;
        this.latitude = latitude;
    };

    this.getPosition = function () {
        return "Position is: " + this.longitude + " " + this.latitude;
    };

    this.id = id;
    this.status = "unavailable";
    this.time = Date.now();
    this.latitude = latitude;
    this.longitude = longitude;
};

let vehicleNew = new vehicle("AL1024", 59.358615, 17.947589);
vehicleNew.setPosition(59.367647, 18.213451);
//console.log(vehicleNew.time + " " + vehicleNew.latitude + " " + vehicleNew.longitude);
console.log(vehicleNew.getPosition());