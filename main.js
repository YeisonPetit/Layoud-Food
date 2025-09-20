// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // DOM element selectors
    const btn_menu_responsive = document.querySelector('.btn_menu_responsive');
    const btn_close = document.querySelector('.btn_close');
    const menu_mobile = document.querySelector('.menu_mobile');
    const corazon = document.getElementById('corazon');
    const corazonn = document.querySelectorAll(".corazonn");
    const like = document.getElementById('like');
    const heart = document.querySelectorAll('.fa-solid.fa-heart');
    const hearts = document.querySelectorAll('.heart'); // Additional hearts selector

    // Mobile menu functionality
    if (btn_menu_responsive && menu_mobile) {
        btn_menu_responsive.addEventListener('click', () => {
            menu_mobile.classList.add('active');
        });
    }

    if (btn_close && menu_mobile) {
        btn_close.addEventListener('click', () => {
            menu_mobile.classList.remove('active');
        });
    }

    // Function to save individual heart states
    function saveHeartStates() {
        const heartStates = {};
        
        // Save states for .fa-solid.fa-heart elements
        heart.forEach((item, index) => {
            heartStates[`heart_${index}`] = item.classList.contains('active');
        });
        
        // Save states for .heart elements
        hearts.forEach((item, index) => {
            heartStates[`hearts_${index}`] = item.classList.contains('liked');
        });
        
        localStorage.setItem('heartStates', JSON.stringify(heartStates));
    }

    // Function to restore heart states
    function restoreHeartStates() {
        const savedStates = localStorage.getItem('heartStates');
        if (savedStates) {
            try {
                const heartStates = JSON.parse(savedStates);
                
                // Restore states for .fa-solid.fa-heart elements
                heart.forEach((item, index) => {
                    if (heartStates[`heart_${index}`]) {
                        item.classList.add('active');
                    }
                });
                
                // Restore states for .heart elements
                hearts.forEach((item, index) => {
                    if (heartStates[`hearts_${index}`]) {
                        item.classList.add('liked');
                    }
                });
            } catch (error) {
                console.warn('Error parsing saved heart states:', error);
                localStorage.removeItem('heartStates');
            }
        }
    }

    // Toast notification function
    function showSuccessToast() {
        if (typeof Swal !== 'undefined') {
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
        }
    }

    // Heart click functionality for .fa-solid.fa-heart elements
    heart.forEach((item) => {
        item.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent any default action
            item.classList.toggle('active');
            saveHeartStates();
            showSuccessToast();
        });
    });

    // Heart click functionality for .heart elements  
    hearts.forEach((item) => {
        item.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent any default action
            item.classList.toggle('liked');
            saveHeartStates();
        });
    });

    // Restore saved states when page loads
    restoreHeartStates();
});