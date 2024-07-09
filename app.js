// add class navbarDark on navbar scroll
const header = document.querySelector('.navbar');

window.onscroll = function () {
    var top = window.scrollY;
    if (top >= 100) {
        header.classList.add('navbarDark');
    }
    else {
        header.classList.remove('navbarDark');
    }
}

//mail send


function sendMail() {
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    };

    const serviceID = "service_a81pg3b";
    const templateID = "template_vd3g09a";

    emailjs
        .send(serviceID, templateID, params)
        .then((res) => {
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("message").value = "";
            console.log(res);
            alert("Your message sent successfully!!");
        })
        .catch((err) => console.log(err));
}

//read more option in project
document.addEventListener('DOMContentLoaded', function () {
    const readMoreButtons = document.querySelectorAll('.read-more');

    readMoreButtons.forEach(button => {
        button.addEventListener('click', function () {
            const cardBody = this.closest('.card-body');
            const projectDetails = cardBody.querySelector('.project-details');

            projectDetails.classList.toggle('show');

            if (projectDetails.classList.contains('show')) {
                this.textContent = 'Read Less';
            } else {
                this.textContent = 'Read More';
            }
        });
    });
});