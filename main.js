const btn_menu_responsive = document.querySelector('.btn_menu_responsive');
const btn_close = document.querySelector('.btn_close');
const menu_mobile = document.querySelector('.menu_mobile');
const corazon = document.getElementById('corazon');
const corazonn = document.querySelectorAll(".corazonn")
const like = document.getElementById('like')
const heart = document.querySelectorAll('fa-heart')


btn_menu_responsive.addEventListener('click', () => {
    menu_mobile.classList.add('active');
});

btn_close.addEventListener('click', () => {
    menu_mobile.classList.remove('active');
});

corazon.addEventListener('click', () => {
    corazon.classList.toggle('active');
    const Toast = Swal.mixin({
        toast: true,
        position: "bottom-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
        }
    });
    
    Toast.fire({
        icon: "success",
        title: "Acción realizada con éxito"
    });
});

heart.addEventListener('click',() =>{
    fa-heart.classList.toggle('active')
})