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
