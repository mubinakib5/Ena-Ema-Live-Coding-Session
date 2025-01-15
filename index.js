// Problem 1 Solution
// Logic: If the range is defined I made sure that the product price falls in the range.
// Same checked for the Categorry, Availability, Then Used the filter method to check the conditions.

function filterProducts (products, criteria) {
  return products.filter(product => {
    let matchesPrices = !criteria.priceRange || (product.price >= criteria.priceRange[0] && product.price <= criteria.priceRange[1]);
    let matchesCategory = !criteria.category || product.category === criteria.category;
    let matchesAvail = criteria.avail === undefined || product.avail === criteria.avail;

    return matchePrices && matchesCategory  && matchesAvail;
    });
}

const products = [
  { id: 1, name: "Laptop", price: 800, category: "Electronics", available: true },
  { id: 2, name: "Shoes", price: 50, category: "Fashion", available: false },
  { id: 3, name: "Phone", price: 500, category: "Electronics", available: true },
];

const criteria = { priceRange: [400, 1000], category: "Electronics", available: true };

console.log(filterProducts(products, criteria));

//Problem 2 Solution
//Logic: Iterated throguh the stock. Alocate the quantity and updated the same. Then I subtracted the reduce quantity.


function allocateStock(product, orderQuantity) {
  let allocation = [];

  let remQ = orderQuantity;

  for (let stock of product.stock) {
    if (remQ <= 0) {
      break;
    }

    let alocQ = Math.min(stock.quantity, remQ);
    allocation.push({warehouse: stock.warehouse, quantity: alocQ});


    remQ -= alocQ;
  }

  return allocation;
}

const product = {
  id: 1,
  stock: [
    { warehouse: "A", quantity: 10 },
    { warehouse: "B", quantity: 5 },
    { warehouse: "C", quantity: 8 },
  ],
};

const orderQuantity = 12;

console.log(allocateStock(product, orderQuantity));
// Output: [
//   { warehouse: "A", quantity: 10 },
//   { warehouse: "B", quantity: 2 }
// ]

//Problem 4
//Logic: Subtotal calculated, tax and total calculated according the condition given to me.
//Then simply returned them.

function generateOrderSummary(order) {
  // Your code here
  let subTotal = order.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const tax = subTotal + 0.1;
  const total = subTotal + tax;

  return {
    subTotal, tax, total;
  }
}

const order = [
  { name: "Laptop", price: 1000, quantity: 1 },
  { name: "Mouse", price: 50, quantity: 2 },
];

console.log(generateOrderSummary(order));
// Output: {
//   subtotal: 1100,
//   tax: 110,
//   total: 1210
// }

//Problem 5
//Logic: First I had to take the zone information in an array. Then I use the JS Find to find the slabs.
//If no valid slabs found then I just throw an error and the rest is according to the logic

function calculateShipping(zones, zoneName, cartWeight) {
  // Your code here
  let zone = zones[zoneName];
  
  if (!zone) {
    throw new Error('Not Found!');
  }

  let slabs = zone.find((element) => cartWeight <= element.cartWeight);

  if (!slabs) {
    throw new Error('Weight Overloaded!');
  }

  return slabs.price;
}

const zones = {
  "Zone A": [
    { maxWeight: 5, price: 50 },
    { maxWeight: 10, price: 80 },
    { maxWeight: 20, price: 150 },
  ],
};

console.log(calculateShipping(zones, "Zone A", 7));
// Output: 80


function getCarNameById(carId) {
 const cars = {
  1: 'Audi',
  2: 'Ferrari',
  3: 'Mercedes',
 }
 return cars[carId]
}

console.log(getCarNameById(1));
console.log(getCarNameById(2));
console.log(getCarNameById(3));
console.log(getCarNameById(5));