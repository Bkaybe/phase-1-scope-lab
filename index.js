// Write your solution in this file!
var customerName = "bob";

var bestCustomer;

const leastFavoriteCustomer = "Ruto";

function upperCaseCustomerName() {
  return customerName.toUpperCase();
}

function setBestCustomer() {
  return (window.bestCustomer = "not bob");
}

function overwriteBestCustomer() {
  let bestCustomer = "maybe bob";

  return bestCustomer;
}

function changeLeastFavoriteCustomer() {
  let leastFavoriteCustomer = "Rigathi";

  return (leastFavoriteCustomer = "Rigathi");
}
