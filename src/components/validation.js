
const showInputError = (formElement, inputElement, errorMessage, options) => {
  const errorElement = formElement.querySelector(`.${ inputElement.id }-error`);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(options.errorClass);
  disableButton(formElement, options);
};

const hideInputError = (formElement, inputElement, options) => {
  const errorElement = formElement.querySelector(`.${ inputElement.id }-error`);
  errorElement.classList.remove(options.errorClass);
  errorElement.textContent = '';
  if (hasInvalidInput(formElement, options)) {
    disableButton(formElement, options);
  } else {
    enableButton(formElement, options);
  }
};

const disableButton = (formElement, options) => {
  const button = formElement.querySelector(options.submitButtonSelector);
  button.disabled = true;
}

const enableButton = (formElement, options) => {
  const button = formElement.querySelector(options.submitButtonSelector);
  button.disabled = false;
}

const hasInvalidInput = (formElement, options) => {
  const inputList = Array.from(formElement.querySelectorAll(options.inputSelector));
  return inputList.some((inputElement) => !inputElement.validity.valid);
}

const checkInputValidity = (formElement, inputElement, options) => {
  if (!inputElement.validity.valid) {
    if (inputElement.validity.patternMismatch) {
      showInputError(formElement, inputElement, inputElement.dataset.errorMessage, options);
    } else {
      showInputError(formElement, inputElement, inputElement.validationMessage, options);
    }
  } else {
    hideInputError(formElement, inputElement, options);
  }
};

const setEventListeners = (formElement, options) => {
  const inputList = Array.from(formElement.querySelectorAll(options.inputSelector));
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      checkInputValidity(formElement, inputElement, options);
    });
  });
};

export const enableValidation = (options) => {
  const formList = Array.from(document.querySelectorAll(options.formSelector));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    setEventListeners(formElement, options);
  }); 
}

export function clearValidation(formElement, options) {
  const inputList = Array.from(formElement.querySelectorAll(options.inputSelector));
  inputList.forEach((inputElement) => {
    hideInputError(formElement, inputElement, options);
  });
  disableButton(formElement, options);
}