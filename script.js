document.querySelectorAll('.c2 p')[2].style.display = 'none';
const btn = document.querySelectorAll('.btn')[6];
btn.addEventListener('click', e => {
    if(btn.innerText === 'LEARN MORE'){ 
        document.querySelector('.about').style.gridTemplateColumns = '1fr';
        document.querySelector('.c2').style.marginBottom = '0rem';
        document.querySelectorAll('.c2 p')[0].style.width = '100%';
        document.querySelectorAll('.c2 p')[1].style.width = '100%';
        document.querySelectorAll('.c2 p')[2].style.width = '100%';
        document.querySelectorAll('.c2 p')[2].style.display = 'block';
        btn.innerText = 'Learn Less';
        document.querySelector('#kid').style.display = 'none';
    } else{
        btn.innerText = 'Learn More';
        document.querySelector('.about').style.gridTemplateColumns = '1fr 1fr';
        document.querySelector('.c2').style.marginBottom = '0rem';
        document.querySelectorAll('.c2 p')[0].style.width = '75%';
        document.querySelectorAll('.c2 p')[1].style.width = '75%';
        document.querySelectorAll('.c2 p')[2].style.width = '75%';
        document.querySelectorAll('.c2 p')[2].style.display = 'none';
        document.querySelector('#kid').style.display = 'block';
    }
    e.preventDefault();
})