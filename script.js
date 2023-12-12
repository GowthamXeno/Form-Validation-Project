function Form() {
    event.preventDefault();
    var name = document.getElementById('username').value.trim();
    var email = document.getElementById('email').value.trim();
    var number = document.getElementById('number').value.trim();
    var gender = document.getElementById('gender').value.trim();
    var password = document.getElementById('password').value.trim();
    var confirmpassword = document.getElementById('confirmpassword').value.trim();
    var dob = document.getElementById('dob').value.trim();


    function showerror(Id, message) {

        var error = document.getElementById(Id + 'Error');
        var error_container = document.querySelector('.'+Id+'-error-container');
        error.textContent = message;
        error.style.display = 'flex';
        error_container.style.display = 'flex';

    }

    function hideerror(Id) {

        var error = document.getElementById(Id + 'Error');
        var error_container = document.querySelector('.'+Id+'-error-container');
        error.textContent = '';
        error.style.display = 'none';
        error_container.style.display = 'none';
    }
    
    { //Username
        if(name === ''){
            showerror('name', 'Please Enter Username!');
        }else{
            if (name.length < 5) {
                showerror('name', 'Name must be at least 5 characters');
            } else {
                hideerror('name');
            }
        }
    }
    { //Email
        var condition = /@.*\./;
        if(email ===''){
            showerror('email', 'Please Enter email!');
        }
        else{
            if (!email.includes('@')) {
                showerror('email', 'Email must contain \'@\'');
            } 
            else if(!condition.test(email)){
                showerror('email', 'Enter a Valid Email');
            }
            else {
                hideerror('email');
            }
        } 
    }  
    {//Number
        var condition = /^\d{10}$/
        if(number === '')
            showerror('number', 'Please Enter Number!');
        else{
            if(number.length < 10 || number === '123456789' || number.length > 10){
                showerror('number','Enter a Valid Number!');
            }
            else{
                hideerror('number');
            }
        }
    }
    {//Gender
        if(gender === '')
            showerror('gender', 'Please Select Gender!');
        else
            hideerror('gender');
    }
    {//Dob
        if(dob === '')
            showerror('dob', 'Please Select Gender!');
        else{
            hideerror('dob');
        }
    }
    {//Password
        if(password === '')
            showerror('password', 'Please Enter Password!');
        else{
            if(password !== confirmpassword){
                showerror('confirmpassword','Password must match with the confirm password');
            }
            else{
            hideerror('password');
            }
        }
    }
    {//Confirmpassword
        if(confirmpassword === '')
            showerror('confirmpassword', 'Please Enter Confirm Password!');
        else{
            hideerror('confirmpassword');
            }
        
    }
}
