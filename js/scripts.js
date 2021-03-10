// Business logic
function Pizza(type, size, crust, toppings) {
  this.type = type;
  this.size = size;
  this.crust = crust;
  this.toppings = toppings;
}

Pizza.prototype.sizes = function () {
  if (this.size === "Small") {
    return 500;
  } else if (this.size === "Medium") {
    return 800;
  } else if (this.size === "Large") {
    return 1000;
  } else alert("");
};

Pizza.prototype.crusts = function () {
  if (this.crust === "Crispy") {
    return 200;
  } else if (this.size === "Stuffed") {
    return 250;
  } else if (this.size === "Glutten-free") {
    return 300;
  } else alert("");
};

Pizza.prototype.toppings = function () {
  if (this.toppings === "Exta Cheese") {
    return 200;
  } else if (this.toppings === "Mushroom") {
    return 200;
  } else if (this.toppings === "Beef") {
    return 150;
  } else if (this.toppings === "Chicken") {
    return 250;
  } else alert("");
};

// User interface logic

// Order

function order() {
  document.getElementById("order-summary").style.display = "block";
  var totals = Pizza();
  append(
    "You have Ordered " +
      Quantity("") +
      " pizza," +
      "" +
      " amounting to ksh. " +
      totals +
      "" +
      " Thanks for your order welcome again."
  );

  $(document).ready(function () {
    $("form#new-contact").submit(function (event) {
      event.preventDefault();

      var selectedPizzaName = $("select#pizzaType").val();
      var selectedPizzaSize = $("select#pizzaSize").val();
      var selectedPizzaCrust = $("select#pizzaCrust").val();
      var selectedPizzaToppings = $("select#pizzaToppings").val();

      var newOrder = new Pizza(type, size, crust, toppings);
    });
  });

  function myFunction() {
    document.getElementById("deliver-order").style.display = "block";
  }

  function myFunctionOne() {
    document.getElementById("deliver-order").style.display = "none";
  }

  // $("#order-summary").append("<li><span class='contact'>" + newContact.firstName + "</span></li>");

  //   $("input#new-first-name").val("");
  //   $("input#new-last-name").val("");
  // }

  function checkout() {
    document.getElementById("final-order");
    prompt("Please enter your phone number");
    alert(
      "Your order is being processed. It will be delivered to your location soon if delivery option was selected. Thank you"
    );
  }

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
}
