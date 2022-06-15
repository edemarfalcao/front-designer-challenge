(function (win, doc) {
  const disableFormSubmit = (e) => e.preventDefault();
  const validateFormData = (e) => {
    e.preventDefault();
    const form = e.target;
    const phoneNumber = form.querySelector('#phone');
    const phoneNumberError = form.querySelector('#phone-error');
    const phoneNumberErrorMessage = 'Número inválido, deve conter 9 dígitos';
    if (phoneNumber.value.length !== 9) {
      phoneNumberError.innerHTML = phoneNumberErrorMessage;
      phoneNumber.classList.add('error');
      phoneNumberError.classList.add('error');
    }
    else {
      phoneNumber.classList.remove('error');
      phoneNumberError.classList.remove('error');
    }
  }
  const removePhoneNumberError = (e) => {
    const phoneNumber = e.target.value;
    const phoneNumberError = e.target.form.querySelector('#phone-error');
    if (phoneNumber.length === 9) {
      phoneNumberError.innerHTML = '';
      e.target.classList.remove('error');
      phoneNumberError.classList.remove('error');
    }
  }
  

  win.addEventListener("load", function () {
    const searchForm = doc.querySelector("#search-form");
    const contactForm = doc.querySelector("#contact-form");
    const phoneInput = doc.querySelector("#phone");

    searchForm.addEventListener("submit", disableFormSubmit);
    contactForm.addEventListener("submit", validateFormData);
    phoneInput.addEventListener("keyup", removePhoneNumberError);
  });

})(window, document);
