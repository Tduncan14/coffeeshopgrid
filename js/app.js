// 

// window event listerner


window.addEventListener('load',function(){

    this.document.querySelector('.preloader').style.display='none';

})




document.querySelector('.navBtn').addEventListener('click', function(){

    document.querySelector('.nav').classList.toggle('nav_show')

})