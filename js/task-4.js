const loginForm = document.querySelector('.login-form');  

loginForm.addEventListener('submit', function(event) {  
  event.preventDefault();  
  
  const emailInput = this.elements.email;  
  const passwordInput = this.elements.password;  
  
  const emailValue = emailInput.value.trim();  
  const passwordValue = passwordInput.value.trim();  
  
  if (emailValue === '' || passwordValue === '') {  
    alert('All form fields must be filled in');  
  } else {  
    const formData = {  
      email: emailValue,  
      password: passwordValue  
    };  
    
    console.log(formData);  
    
    this.reset();  
  }  
});
