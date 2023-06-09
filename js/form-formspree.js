const contactForm = document.querySelector("#contact__form");
const subscribeForm = document.querySelector("#subscribe__form");
contactForm.addEventListener("submit", handleSubmit);
subscribeForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const status = form.querySelector(".status");
  fetch(form.action, {
    method: 'POST',
    body: new FormData(form),
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      if (response.ok) {
        setStatusMessage(status, "Thanks for your submission!", true);
        form.reset();
      } else {
        response.json().then((data) => {
          if (Object.hasOwnProperty.call(data, "errors")) {
            setStatusMessage(status, data.errors.map((error) => error.message).join(", "), false);
          } else {
            setStatusMessage(status, "Oops! There was a problem submitting your form", false);
          }
        });
      }
    })
    .catch(() => {
      setStatusMessage(status, "Oops! There was a problem submitting your form", false);
    });
}

function setStatusMessage(status, message, success) {
  status.innerHTML = message;
  status.classList.toggle("success", success);
  status.classList.toggle("error", !success);
  setTimeout(() => {
    status.innerHTML = "";
    status.className = "status";
  }, 3000);
}