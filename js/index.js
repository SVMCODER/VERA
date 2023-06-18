if (localStorage.getItem('logghjedin')=='yes') {
    window.location.replace('home.html')
}

function login() {

var uname = document.getElementById('name').value;
var password = document.getElementById('password').value;
var mail = document.getElementById('email').value;
var number = document.getElementById('number').value;
var address = document.getElementById('address').value;
var error = document.getElementById('error')
var uid = Math.floor(Math.random() * 9000000000 + 100000000);
localStorage.setItem('uid', uid)
    if (uname.length == 0) {
        error.innerHTML = '⚠ Username is Empty'
    }
    else if (password.length ==0) {
        error.innerHTML = '⚠ Password is Empty'
    }
    else if (mail.length ==0) {
        error.innerHTML = '⚠ Email is Empty'
    }
    else if (number.length ==0) {
        error.innerHTML = '⚠ Phone Number is Empty'
    }
    else if (address.length <5) {
        error.innerHTML = '⚠ Address is Short'
    }
    else if (password.length !=8) {
        error.innerHTML = '⚠ Password must be of 8 letters'
    }
    else {
        localStorage.setItem('name', uname)
        localStorage.setItem('email', mail)
        localStorage.setItem('number', number)
        localStorage.setItem('address', address)
        localStorage.setItem('loggedin','yes')
        swal({
            title: "Logging In...",
            text: "Dear "+uname+", Please wait.",
            imageUrl: 'assets/tick.gif'
          })
        setTimeout(() => {
            window.location.replace('home.html')
        }, 1300);
    }
}