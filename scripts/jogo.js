const person = document.querySelector('.person');
const pipe = document.querySelector('.pipe');



const jump = () => {
    person.classList.add('jump');
    
    
    setTimeout(() => {
        person.classList.remove('jump');
        
    },500);
}

const verify = setInterval(() => {
    
    const pipePosition = pipe.offsetLeft
    const personPosition = +window.getComputedStyle(person).bottom.replace('px', '')
    
    if(pipePosition <= 120 && pipePosition > 0 && personPosition < 80){
        
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;
        pipe.style.backgroundColor = '#333';
        
        person.style.animation = 'none';
        person.style.bottom = `${personPosition}px`;
        person.style.backgroundColor = 'gray';

        btn.style.display = 'block';
        
            
        clearInterval(verify);
        
    }
    
},10);

addEventListener('keydown', jump);
addEventListener('touchstart', jump);