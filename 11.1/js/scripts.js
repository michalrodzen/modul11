function Phone(brand, price, color) {
	this.brand = brand;
	this.price = price;
	this.color = color;
}
Phone.prototype.printInfo = function() {
	console.log("The phone brand is " + this.brand + ", color is " + this.color + " and the price is " + this.price + ".");
}
var iPhone6S = new Phone("Apple", 2250, "silver"),
    LGg5s = new Phone ("LG", 1500, "red"),
    Xiaomi = new Phone ("Xiaomi", 2000, "black");

iPhone6S.printInfo();
LGg5s.printInfo();
Xiaomi.printInfo();