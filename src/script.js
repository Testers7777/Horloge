const body = document.querySelector('body');
setInterval(() => {
    body.innerHTML = 
    new Date().getHours() + ':' + new Date().getMinutes() + ':' + new Date().getSeconds();
}, 1000);
