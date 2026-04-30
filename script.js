document.addEventListener('DOMContentLoaded', function () {

    // Impressum Modal
    var modal = document.getElementById("myModal");
    var modalLink = document.getElementById("myBtn");
    var span = document.getElementsByClassName("close")[0];

    if (modal && modalLink && span) {
        modalLink.onclick = function () { modal.style.display = "block"; }
        span.onclick = function () { modal.style.display = "none"; }
        window.onclick = function (event) {
            if (event.target == modal) { modal.style.display = "none"; }
        }
    }

    // Formular-Validierung (nur auf contact.html aktiv)
    var form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();

            var valid = true;
            var fname = document.getElementById('fname').value.trim();
            var lname = document.getElementById('lname').value.trim();
            var email = document.getElementById('email').value.trim();
            var message = document.getElementById('message').value.trim();

            document.querySelectorAll('.error-msg').forEach(function (el) {
                el.style.display = 'none';
            });

            if (fname === '') {
                document.getElementById('fname-error').style.display = 'block';
                valid = false;
            }
            if (lname === '') {
                document.getElementById('lname-error').style.display = 'block';
                valid = false;
            }
            if (email === '' || !email.includes('@') || !email.includes('.')) {
                document.getElementById('email-error').style.display = 'block';
                valid = false;
            }
            if (message === '') {
                document.getElementById('message-error').style.display = 'block';
                valid = false;
            }

            if (valid) {
                form.style.display = 'none';
                document.getElementById('success-msg').style.display = 'block';
            }
        });
    }
});