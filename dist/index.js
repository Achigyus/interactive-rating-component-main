"use strict";
// DOM vars
const form = document.getElementById('form'); // Get the form element
let labels = document.querySelectorAll('.options_label'); // Get all label elements with the class 'options_label'
if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent default form submission
        let selectedRating = document.querySelector('input[name="rating"]:checked'); // Get the selected radio button
        // Check if a rating is selected
        if (selectedRating) {
            let selectedRatingLabel = document.querySelector(`label[for="${selectedRating.id}"]`); // Get the label for the selected radio button
            let container = document.getElementById('cont'); // Get the container element
            // Check if the container exists
            if (container) {
                // Clear the container and render the thank you message
                container.innerHTML = `
                    <div class="tri_cont_wrap thank_you">
                        <div class="cont_top thank_you">
                            <div class="cont_top_img_cont thank_you">
                                <img src="./images/illustration-thank-you.svg" alt="#" class="cont_top_img thank_you">
                            </div>
                        </div>
    
                        <div class="cont_mid thank_you">
                            <p class="rating_p thank_you fw400">You selected ${selectedRatingLabel.innerText} out of 5</p>
                        </div>
    
                        <div class="cont_btm thank_you">
                            <h2 class="cont_btm_h2 thank_you fw700">Thank you!</h2>
                            <p class="cont_btm_p thank_you fw400">We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</p>
                        </div>
                    </div>
                `;
            }
        }
        else {
            // If no rating is selected, alert the user
            alert('Please select a rating');
        }
    });
}
// Function to check the label and set the associated input as checked
function checkLabel(labelElement) {
    if (labelElement) {
        let associatedInput = document.getElementById(labelElement.htmlFor); // Get the associated input element using the htmlFor attribute of the label
        if (associatedInput) {
            associatedInput.checked = true; // Set the associated input as checked
        }
    }
}
// Add event listeners to each label for keydown events
labels.forEach((label) => {
    label.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault(); // Prevent default action of Enter key
            checkLabel(label); // Call the function to check the label and set the associated input as checked
        }
    });
});
