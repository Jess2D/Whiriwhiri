$("#out").change(function () {
  var startDate = document.getElementById("in").value;
  var endDate = document.getElementById("out").value;

  if (Date.parse(endDate) <= Date.parse(startDate)) {
    alert("End date should be greater than Start date");
    document.getElementById("out").value = "";
  }
});

(function () {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener(
      "submit",
      function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();
