// Form Validation
$("form#form").on("submit", function (event) {
  event.preventDefault();
  let firstName = $("input#fname").val();
  let lastName = $("input#lname").val();
  let message = $("textarea#subject").val();

  if ($("input#fname").val() && $("input#lname").val()) {
    let alertMessage = `Hey ${firstName} , Thanks for reaching out, we'll get back to you shortly...good luck!`;
    Swal.fire({
      icon: "success",
      title: "Cheers...",
      text: alertMessage,
    });
  }
});

function myFunction() {
  document.getElementById("deliver-order").style.display = "block";
}

function myFunctionOne() {
  document.getElementById("deliver-order").style.display = "none";
}

function order() {
  // document.getElementById("order-summary").innerHTML = Your order is 
}

function checkout() {
  document.getElementById("final-order");
  alert(
    "Your order is being processed. It will be delivered to your location soon if delivery option was selected. Thank you"
  );
}

// function Pizza(type, size, crust, toppings) {
//   this.type = type;
//   this.size = size;
//   this.crust = crust;
//   this.toppings = toppings;
// }

// Pizza.prototype.sizes = {
//   small: 500,
//   medium: 800,
//   large: 1000,
// };
// Pizza.prototype.crusts = {
//   crispy: 200,
//   stuffed: 250,
//   glutten: 300,
// };
// Pizza.prototype.toppingsList = {
//   extraCheese: 200,
//   mushroom: 200,
//   beef: 150,
//   chicken: 250,
// };
