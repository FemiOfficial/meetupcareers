showRegisterForm = () => {
    let registerForm = document.getElementById('registerform');
    let loginForm = document.getElementById('loginform');
    loginForm.style.display = 'none';
    registerForm.style.display = 'block';
    registerForm.style.transition = '1s ease-out';

}
showLoginForm = () => {
    let registerForm = document.getElementById('registerform');
    let loginForm = document.getElementById('loginform');
    loginForm.style.display = 'block';
    registerForm.style.display = 'none';
    registerForm.style.transition = '1s ease-out';
    
}