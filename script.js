// JavaScript logic for form validation

function Form(event) {
// Prevent form submission
    event.preventDefault();

// Get form field values
    var username = document.getElementById('username').value.trim();
    var email = document.getElementById('email').value.trim();
    var number = document.getElementById('number').value.trim();
    var gender = document.getElementById('gender').value.trim();
    var password = document.getElementById('password').value.trim();
    var confirmpassword = document.getElementById('confirmpassword').value.trim();
    var dob = document.getElementById('dob').value.trim();

// Function to show error message
    function showerror(Id, message) {

        var error = document.getElementById(Id + 'Error');
        var error_container = document.querySelector('.'+Id+'-error-container');
        error.textContent = message;
        error.style.display = 'flex';
        error_container.style.display = 'flex';

    }

// Function to hide error message
    function hideerror(Id) {

        var error = document.getElementById(Id + 'Error');
        var error_container = document.querySelector('.'+Id+'-error-container');
        error.textContent = '';
        error.style.display = 'none';
        error_container.style.display = 'none';

    }
    
//Username Field
        if(username === '')
            showerror('username', 'Please Enter Username!');
        else{

            if (username.length < 5)
                showerror('username', 'Name must be at least 5 characters');
            else
                hideerror('username');
        }
    
//Email Field
        var condition = /@.*\./;

        if(email ==='')
            showerror('email', 'Please Enter email!');
        else{

            if (!email.includes('@')) 
                showerror('email', 'Email must contain \'@\'');
            else if(!condition.test(email))
                showerror('email', 'Enter a Valid Email');
            else 
                hideerror('email');
            
        } 
     
//Number Field
        var numbercondition = /^\d{10}$/

        if(number === '')
            showerror('number', 'Please Enter Number!');
        else{

            if(number.length < 10 || number === '123456789' || !numbercondition.test(number))
                showerror('number','Enter a Valid Number!');
            else
                hideerror('number');
            
        }

//Gender Field
        if(gender === '')
            showerror('gender', 'Please Select Gender!');
        else
            hideerror('gender');
    
//Dob Field
        if(dob === '')
            showerror('dob', 'Please Enter Date of Birth!');
        else
            hideerror('dob');
        
    
//Password Field
        if(password === '')
            showerror('password', 'Please Enter Password!');

        else{

            if(password.toLowerCase() === 'password'){
                    console.log(password.toLowerCase()+'!== password');
                    console.log(password.toLowerCase()+'!=='+username.toLowerCase());
                    showerror('password','Password cannot be ‘password’');
            }
            else if(password.toLowerCase() === username.toLowerCase())
                    showerror('password','Password cannot be ‘name of the user’');
            else if(password.length < 8)
                    showerror('password','Password must be at least 8 characters')
            else
                    hideerror('password');
        }
    
//Confirmpassword Field
        if(confirmpassword === '')
            showerror('confirmpassword', 'Please Enter Confirm Password!');
        else{

            if(password !== confirmpassword)
                showerror('confirmpassword','Password must match with the confirm password');
            else
            hideerror('confirmpassword');
        
        }

 // Check overall form validity
        var isValid = true;

        document.querySelectorAll('.error_container').forEach(function (errorContainer) {

            if (errorContainer.style.display === 'flex') {
                isValid = false;

            }
        });

// Show success toast and clear form if valid
        if(isValid){

            var toast = document.getElementById('toast');
            toast.classList.add('show');
            clearForm();

            setTimeout(function () {
                toast.classList.remove('show');
            }, 2000);

        }

// Function to clear form fields
        function clearForm() {

            document.getElementById('username').value = '';
            document.getElementById('email').value = '';
            document.getElementById('number').value = '';
            document.getElementById('gender').value = '';
            document.getElementById('password').value = '';
            document.getElementById('confirmpassword').value = '';
            document.getElementById('dob').value = '';

        }
        
        
}