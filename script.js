const btn = document.querySelectorAll('.version-btn');
const clipBackground = document.querySelector('.clip');
const input = document.getElementsByTagName('input');
const modal = document.querySelector('.modal-container');
const signUpBtn = document.querySelector('.sign-up-btn');
const logInBtn = document.querySelector('.log-in-btn');


btn.forEach((btn)=> {
    btn.addEventListener('click', (event)=>{
        let attribute = event.target.getAttribute('id');
        if (attribute === 'version1') {
            modal.style.display = 'block';
        } else if (attribute === 'version2') {
            modal.style.display = 'block';
            changeColor('version2');
        } else if (attribute === 'version3') {
            modal.style.display = 'block';
            changeColor('version3');
        };
    });
});
// Transition doesnt work on display property, fix it with visibility/opacity
// but handle click afterwards

modal.addEventListener('click', (e)=> {
    if (e.target.className === 'modal-container') {
        modal.style.display = 'none';
        input[0].className = '';
        input[1].className = '';
        clipBackground.style.background = 'rgba(42,25,157,.6)';
        signUpBtn.style.background = 'var(--main-color)';
        logInBtn.style.color = 'var(--main-color)';
    };
});

function changeColor(version) {
    if (version === 'version2') {
        input[0].className += 'green';
        input[1].className += 'green';
        clipBackground.style.background = 'rgba(52,160,164, .6)';
        signUpBtn.style.background = 'var(--secondary-green)';
        logInBtn.style.color = 'var(--main-green)';
    };

    if (version === 'version3') {
        input[0].className += 'red';
        input[1].className += 'red';
        clipBackground.style.background = 'rgba(193,18,31, .6)';
        signUpBtn.style.background = 'var(--secondary-red)';
        logInBtn.style.color = 'var(--main-red)';
    };
};
