document.addEventListener("DOMContentLoaded", function () {
    let clock = document.getElementById("clock");

    function showDateTime() {
        const now = new Date();
        clock.textContent = now.toLocaleString();
    }

    setInterval(showDateTime, 1000);

    showDateTime();


    //form validation//
    const contactForm = document.getElementById("contact-form");
    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();

            let name = document.getElementById("name").value.trim();
            let email = document.getElementById("email").value.trim();
            let phone = document.getElementById("phone").value.trim();
            let message = document.getElementById("message").value.trim();
        
            let error = document.getElementById("error");
            let success = document.getElementById("success");

            error.textContent = "";
            success.textContent = "";

        // check required fields
            if (!name || !email || !phone || !message) {
                error.textContent = "All fields are required.";
                return;
            }

            let emailPattern = /^[^\s@]+@[^\s@]+.[^\s@]+$/;
            if(!emailPattern.test(email)) {
                error.textContent = "Please enter a valid email address";
                return;
            }
            success.textContent = "Form submitted succesfully! Redirecting...";
            setTimeout(() => {
                this.submit();
            }, 500);

           
         });
    }
});


