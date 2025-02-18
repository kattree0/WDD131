function isCardNumberValid(number) {
    // Normally we would contact a credit card service...but we don't know how to do that yet. So to keep things simple we will only accept one number
    return number === '1234123412341234';
}

function displayError(msg) {
    // Display error message
    document.querySelector('.errorMsg').innerHTML = msg;
}

function submitHandler(event) {
    // Debug: Check if the handler is firing
    console.log("Submit handler fired");
    event.preventDefault(); // Prevent default form submission behavior
    console.log("event.preventDefault() called");

    let errorMsg = '';
    const creditCardInput = this.cardNumber;  // Referencing the credit card input field
    
    // Clear any previous errors
    displayError('');

    // Check if the credit card input is valid
    if (isNaN(creditCardInput.value)) {
        // It is not a valid number
        errorMsg += 'Card number is not a valid number.\n';
        console.log("ifstatemnet called");
    } else if (!isCardNumberValid(creditCardInput.value)) {
        // It is a number, but is it valid?
        errorMsg += 'Card number is not a valid card number.\n';
        console.log("elseifstatemnet called");
    }

    if(this.expYear.value < 25){
        errorMsg += '\nThat year has already passed.\n';
    }

    if (this.name.value === '' || this.security.value === '' || this.expMonth.value === '') {
        errorMsg += 'Please do not leave any fields blank.\n';
    }


    // Check if there are other validation errors
    if (errorMsg !== '') {
        displayError(errorMsg);
        console.log(errorMsg);

        console.log("error message tried to display");
        displayError(errorMsg);

       const errorMsgElement = document.querySelector(".errorMsg");

        errorMsgElement.style.display = 'block';
 
        return false; 
    }

    console.log("Form Submitted Successfully");

    const errorMsgElement = document.querySelector(".errorMsg");

    errorMsgElement.style.display = 'none';
    return true; 
}

const form = document.querySelector('#form');
if (form) {
    form.addEventListener('submit', submitHandler);
} else {
    console.error("Form not found!");
}
