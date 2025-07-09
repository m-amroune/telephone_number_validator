const userInput = document.querySelector("#user-input"); 
const checkBtn = document.querySelector("#check-btn"); 
const clearBtn = document.querySelector("#clear-btn");
const resultsDiv = document.querySelector("#results-div");



const regex = /^1?\s*(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;



// CHECK PHONE NUMBER VALIDATION
const validatePhoneNumber = () => {
     const phoneNumber = userInput.value.trim();
    
    if (!phoneNumber) { 
        alertInput();
       
    } else{
         checkPhoneNumber(phoneNumber);

    }
    
   
   
}

// if user click without entering a value
const alertInput = () => {
    alert("Please provide a phone number");
}

const checkPhoneNumber = (phoneNumber) => {
    if (regex.test(phoneNumber)) {
        resultsDiv.textContent = `Valid US number: ${phoneNumber}`;
    } else {
        resultsDiv.textContent = `Invalid US number: ${phoneNumber}`;
    }
}


checkBtn.addEventListener("click", validatePhoneNumber);

// CLEAR INPUT AND REMOVED CONTENT
clearBtn.addEventListener("click",  ()=>{
    resultsDiv.textContent = "";
    userInput.value = "";
} ) 