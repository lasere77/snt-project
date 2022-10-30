window.addEventListener('click', (e) => {
    console.log(e) 

    const rond = document.createElement('div');
    rond.className = 'clickAnim';
    rond.style.top = `${e.pageY - 25}px`;
    rond.style.left = `${e.pageX - 25}px`;
    document.body.appendChild(rond);
    

    setTimeout(() => {
        rond.remove();
    }, 1500)
})