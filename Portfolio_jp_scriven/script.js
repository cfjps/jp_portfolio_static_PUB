console.log("It is working...")

let theme = localStorage.getItem('theme')

if(theme == null) {
    setTheme('light');
} else {
    setTheme(theme)
}

let themeDots = document.getElementsByClassName('theme-dot')

for (var i=0; themeDots.length > i; i++) {
    themeDots[i].addEventListener('click', function(){
        let mode = this.dataset.mode
        console.log('Option Clicked ', mode)
        setTheme(mode)
    })
}

function setTheme(mode) {
    if(mode == 'light') {
       document.getElementById('theme-style').href = 'defualt.css' 
    }

    if(mode == 'blue') {
        document.getElementById('theme-style').href = 'blue.css' 
     }

     if(mode == 'green') {
        document.getElementById('theme-style').href = 'green.css' 
     }

     if(mode == 'purple') {
        document.getElementById('theme-style').href = 'purple.css' 
     }

     localStorage.setItem('theme', mode)
}

function validateForm() {
    var contact_name = document.forms["myForm"]["name"].value;
    var subject = document.forms["myForm"]["subject"].value;
    var email = document.forms["myForm"]["email"].value;
    var message = document.forms["myForm"]["message"].value;
    if (contact_name == "") {
      alert("Name must be filled out");
      return false;
    }

    if (subject == "") {
        alert("Subject must be filled out");
        return false;
    }

    if (email == "") {
        alert("Email must be filled out");
        return false;
    }

    if (message == "") {
        alert("Message must be filled out");
        return false;
    }

}

function sendEmail() {

    var name = document.getElementById("name").value;
    var subject = document.getElementById("subject").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    var body = `Message from the website: 
                From: ${name} / ${email}
                ${message}`;

    console.log(name, subject, email, message)

    Email.send({
        SecureToken: "YOUR_SECURE_TOKEN",
        To : 'jpscriven@live.co.za',
        From : email,
        Subject : subject,
        Body : body
    }).then(
      message => alert(message)
    );
}