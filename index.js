const userInput = document.querySelector("#user-input"); 
const checkBtn = document.querySelector("#check-btn"); 
const clearBtn = document.querySelector("#clear-btn");
const resultsDiv = document.querySelector("#results-div");




 

const regex = /^1?\s*(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;




const validatePhoneNumber = () => {
    const phoneNumber = userInput.value.trim();

    if(regex.test(phoneNumber)){
        resultsDiv.textContent = `Valid US number: ${phoneNumber}`
    } else{
        resultsDiv.textContent = `Invalid US number: ${phoneNumber}`
    }
}

checkBtn.addEventListener("click", validatePhoneNumber);