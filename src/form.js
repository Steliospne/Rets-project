import "./style.css";
class Form {
  static create() {
    const wrapper = document.createElement("div");
    wrapper.classList.add("form-wrapper");
    wrapper.innerHTML = `
            <form action="/submit" method="POST">
            <div>
                <label for="name">Name: </label>
                <span class="input">
                    <input type="text" id="name" name="name" placeholder="Name"/>
                    <p class="condition"></p>
                </span>
                <span class="error" aria-live="polite"></span>
            </div>
            <div>
                <label for="email">Email: </label>
                <span class="input">
                    <input type="email" id="email" name="email" placeholder="Email"/>
                    <p class="condition"></p>
                </span>
                <span class="error" aria-live="polite"></span>
            </div>
            <div>
                <label for="phone">Phone: </label>
                <span class="input">
                    <input type="tel" id="phone" name="phone" placeholder="69...."/>
                    <p class="condition"></p>
                </span>
                <span class="error" aria-live="polite"></span>
            </div>
            <div>
                <button type="submit">Submit</button>
            </div>
            </form>
                `;
    document.querySelector("body").append(wrapper);
    Form.validation();
  }

  static validation() {
    const [fullName, email, phone] = [...document.querySelectorAll("input")];
    const closeButton = document.querySelector("#cancel");
    // update code to check if there are spaces ('\s')
    const constraints = {
      fullName: [/\d/, "4"],
      email: ["^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$", "8"],
      phone: [
        /^(\+?\d{1,3})?[\s-]?(\(?\d{1,4}\)?)?[\s-]?\d{1,4}[\s-]?\d{1,4}[\s-]?\d{1,9}$/,
        "10",
      ],
    };

    function checkNameField() {
      const error = document.getElementsByClassName("error")[0];
      if (constraints.fullName[0].test(fullName.value)) {
        error.textContent = "A name cannot contain numbers in its name.";
        fullName.setCustomValidity("Invalid Input.");
        fullName.nextElementSibling.innerHTML = "&#x2717;";
        fullName.nextElementSibling.style.color = "red";
      } else if (
        fullName.value.length < +constraints.fullName[1] &&
        fullName.value.length > 0
      ) {
        error.textContent = `Shortest name name is 4 characters. You are at ${fullName.value.length}.`;
        fullName.setCustomValidity("Too short.");
        fullName.nextElementSibling.innerHTML = "&#x2717;";
        fullName.nextElementSibling.style.color = "red";
      } else {
        error.textContent = "";

        if (fullName.value.length > 0) {
          fullName.setCustomValidity("");
          fullName.nextElementSibling.innerHTML = "&#10003;";
          fullName.nextElementSibling.style.color = "green";
        } else {
          fullName.nextElementSibling.innerHTML = "&#x2717;";
          fullName.nextElementSibling.style.color = "red";
        }
      }
    }

    function checkEmailField() {
      const error = document.getElementsByClassName("error")[1];
      if (
        email.value.length < +constraints.email[1] &&
        email.value.length > 0
      ) {
        error.textContent = `Email must be at least 8 characters. You are at ${email.value.length}.`;
        email.setCustomValidity("Too short.");
        email.nextElementSibling.innerHTML = "&#x2717;";
        email.nextElementSibling.style.color = "red";
      } else if (
        !RegExp(constraints.email[0]).test(email.value) &&
        email.value.length > 0
      ) {
        error.textContent = "Thats not a valid email (example@domain.com).";
        email.setCustomValidity("Not an email.");
        email.nextElementSibling.innerHTML = "&#x2717;";
        email.nextElementSibling.style.color = "red";
      } else {
        error.textContent = "";
        if (email.value.length > 0) {
          email.setCustomValidity("");
          email.nextElementSibling.innerHTML = "&#10003;";
          email.nextElementSibling.style.color = "green";
        } else {
          email.nextElementSibling.innerHTML = "&#x2717;";
          email.nextElementSibling.style.color = "red";
        }
      }
    }

    function checkPhoneField() {
      const error = document.getElementsByClassName("error")[2];
      if (
        phone.value.length > 0 &&
        !RegExp(constraints.phone[0]).test(phone.value)
      ) {
        error.textContent = "Thats not a valid phone number.";
        phone.setCustomValidity("Not a phone number.");
        phone.nextElementSibling.innerHTML = "&#x2717;";
        phone.nextElementSibling.style.color = "red";
      } else if (phone.value.length < +constraints.phone[1]) {
        error.textContent = `Phone must be at least 10 characters. You are at ${phone.value.length}.`;
        phone.setCustomValidity("Too short.");
        phone.nextElementSibling.innerHTML = "&#x2717;";
        phone.nextElementSibling.style.color = "red";
      } else {
        error.textContent = "";
        if (phone.value.length > 0) {
          phone.setCustomValidity("");
          phone.nextElementSibling.innerHTML = "&#10003;";
          phone.nextElementSibling.style.color = "green";
        } else {
          phone.nextElementSibling.innerHTML = "&#x2717;";
          phone.nextElementSibling.style.color = "red";
        }
      }
    }

    fullName.addEventListener("input", checkNameField);
    email.addEventListener("input", checkEmailField);
    phone.addEventListener("input", checkPhoneField);
  }
}
Form.create();
