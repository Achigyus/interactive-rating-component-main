// DOM vars

const form = document.getElementById('form') as HTMLFormElement;

form.addEventListener('submit', (e: Event) => {
    e.preventDefault()

    let selectedRating = document.querySelector('input[name="rating"]:checked') as HTMLInputElement;
    
    if (selectedRating) {
        let selectedRatingLabel = document.querySelector(`label[for="${selectedRating.id}"]`) as HTMLLabelElement;
    
        console.log(selectedRatingLabel.innerText)
        let container = document.getElementById('cont') as HTMLDivElement;
        if (container) {
            container.innerHTML = `
                <div class="tri_cont_wrap">
                    <div class="cont_top">
                        <div class="cont_top_img_cont">
                            <img src="./images/illustration-thank-you.svg" alt="#" class="cont_top_img">
                        </div>
                    </div>

                    <div class="cont_mid">
                        <p class="rating_p">You selected ${selectedRatingLabel.innerText} out of 5</p>
                    </div>

                    <div class="cont_btm">
                        <h2 class="cont_btm_h2">Thank you!</h2>
                        <p class="cont_btm_p">We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</p>
                    </div>
                </div>
            `
        }
    } else {
        alert('Please select a rating')
    }
})