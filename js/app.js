// 


// window event listerner


eventListener()


function eventListener(){



    window.addEventListener('load',function(){
        ui.hidePreloader()

    })

    
    
    

    document.querySelector('.navBtn').addEventListener('click', function(){
    
        ui.showNav();
    
    })

    // control the video

    document.querySelector('.video_switch').addEventListener('click',function(){

        ui.videoControls()

    })

}


function UI(){


}


UI.prototype.hidePreloader = function(){


        document.querySelector('.preloader').style.display='none';

}


UI.prototype.showNav = function(){

    console.log('hey')
    document.querySelector('.nav').classList.toggle('nav_show');

}

//  play slash pause the video

UI.prototype.videoControls = function(){

    let btn = document.querySelector('.video_switch_btn');
    if(!btn.classList.contains('btnSlide')){
        console.log('hello')
        btn.classList.add('btnSlide');
        document.querySelector('.video_item').pause();
    }
    else{
        btn.classList.remove('btnSlide');
        document.querySelector('.video_item').play();
    }



}

const ui = new UI()


