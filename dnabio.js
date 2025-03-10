const adenine = document.querySelector('.adenine');
const thymine = document.querySelector('.thymine');
const cytosine = document.querySelector('.cytosine');
const guanine = document.querySelector('.guanine');

const elementsA = document.querySelectorAll('.a');
const elementsT = document.querySelectorAll('.t');
const elementsC = document.querySelectorAll('.c');
const elementsG = document.querySelectorAll('.g');
const slowBtn = document.getElementById('slowBtn');
const fasterBtn = document.getElementById('fasterBtn');

let currentSpeed = 1; // Default speed (normal)

slowBtn.addEventListener('click', function() {
    if (currentSpeed > 0.5) {
        currentSpeed -= 0.1;
        updateSpeed();
    }
});

fasterBtn.addEventListener('click', function() {
    if (currentSpeed < 2) {
        currentSpeed += 0.1;
        updateSpeed();
    }
});

function updateSpeed() {
    const dnaBases = document.querySelectorAll('.dna__base');
    dnaBases.forEach(base => {
        base.style.transitionDuration = `${currentSpeed}s`;
    });
}

// Кнопки увеличения и уменьшения масштаба
const zoomInBtn = document.getElementById('zoomInBtn');
const zoomOutBtn = document.getElementById('zoomOutBtn');

// Функция для увеличения масштаба
zoomInBtn.addEventListener('click', function() {
    let currentScale = parseFloat(document.querySelector('.dna__model').style.transform.split('(')[1]?.split(')')[0] || 1);
    document.querySelector('.dna__model').style.transform = `scale(${currentScale + 0.1})`;
});

// Функция для уменьшения масштаба
zoomOutBtn.addEventListener('click', function() {
    let currentScale = parseFloat(document.querySelector('.dna__model').style.transform.split('(')[1]?.split(')')[0] || 1);
    document.querySelector('.dna__model').style.transform = `scale(${Math.max(currentScale - 0.1, 0.5)})`; // Устанавливаем минимальный масштаб
});


function resetColors() {
    elementsA.forEach(element => {
        element.style.backgroundColor = '';
    });
    elementsT.forEach(element => {
        element.style.backgroundColor = '';
    });
    elementsC.forEach(element => {
        element.style.backgroundColor = '';
    });
    elementsG.forEach(element => {
        element.style.backgroundColor = '';
    });
}

adenine.addEventListener('mouseover', function() {
    resetColors();
    elementsA.forEach(element => {
        element.style.backgroundColor = 'yellow';
    });
});
adenine.addEventListener('mouseout', resetColors);

thymine.addEventListener('mouseover', function() {
    resetColors();
    elementsT.forEach(element => {
        element.style.backgroundColor = 'yellow';
    });
});
thymine.addEventListener('mouseout', resetColors);

cytosine.addEventListener('mouseover', function() {
    resetColors();
    elementsC.forEach(element => {
        element.style.backgroundColor = 'yellow';
    });
});
cytosine.addEventListener('mouseout', resetColors);

guanine.addEventListener('mouseover', function() {
    resetColors();
    elementsG.forEach(element => {
        element.style.backgroundColor = 'yellow';
    });
});
guanine.addEventListener('mouseout', resetColors);



const dnaElements = document.querySelectorAll('.dna');

dnaElements.forEach((element, index) => {
    const delay = -0.15 * (index + 1) + 's';
    element.style.animationDelay = delay;
});


let animationSpeed = 3;

function updateAnimationSpeed() {
    dnaElements.forEach(element => {
        element.style.animationDuration = animationSpeed + 's';
    });
}

document.getElementById('slowBtn').addEventListener('click', function() {
    if(animationSpeed >= 3.5){
        animationSpeed = 3.5;
        updateAnimationSpeed;
    }else {
        animationSpeed += 0.5;
        updateAnimationSpeed();
    }
});

document.getElementById('fasterBtn').addEventListener('click', function() {
    if (animationSpeed > 2) {
        animationSpeed = 2;
        updateAnimationSpeed();
    } else {
        updateAnimationSpeed();
    }
});

updateAnimationSpeed();