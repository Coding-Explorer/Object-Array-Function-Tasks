//////////////TASK 03//////////////////
/*Create a program to represent a product catalog using an array and perform basic queries.
1. Define an array named inventory to store product information.
2. Create three separate objects, each representing a product, with properties like name,
model, cost, and quantity.
3. Add these product objects to the inventory array using an appropriate array method.
4. Access and log the quantity property of a specific product (e.g., third product) in the
inventory array.
5. Explore adding and accessing more elements within the inventory array to understand
how to manage product data.*/
//Here's i'm gonna to define an array named inventory to store product information.
var inventory = [];
//Now Creating the three separate objects.
var product1 = {
    name: "Smartwatch",
    model: "Y8 ultra smart watch",
    cost: 3500,
    quantity: 20
};
var product2 = {
    name: "Apple iphone",
    model: "iphone 14 pro max",
    cost: 398000,
    quantity: 6
};
var product3 = {
    name: "Laptop",
    model: "Hp Elite 840 G4",
    cost: 57000,
    quantity: 14
};
//Now adding these product objects to the inventory array.
inventory.push(product1);
inventory.push(product2);
inventory.push(product3);
//Now Accessing and logging the quantity property of a particular product in the inventory array.
console.log("The quantity of ".concat(inventory[2].name, " is ").concat(inventory[2].quantity));
//Now exploring the added elements and accessing more elements within the inventory array.
inventory.push({
    name: "LED TV",
    model: "Samsung CU7000 55 inches 4K Ultra HD Smart LED TV",
    cost: 165000,
    quantity: 9
});
//Now implementing the for of loop to access and log the quantity property of a particular product in the inventory array.
console.log("Updated Inventory:");
for (var _i = 0, inventory_1 = inventory; _i < inventory_1.length; _i++) {
    var product = inventory_1[_i];
    console.log("Name: ".concat(product.name, ", Model: ").concat(product.model, ", Cost: ").concat(product.cost, ", Quantity: ").concat(product.quantity));
}
;
