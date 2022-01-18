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

    // submit the forms
    document.querySelector('.drink-form').addEventListener('submit',function(event){
        event.preventDefault();

        const name = document.querySelector('.input_name').value;
        const lastname = document.querySelector('.input_lastname').value;
        const email = document.querySelector('.input_email').value;


        let value = ui.checkEmpty(name,lastname,email);


        if(value){


        }

        else{

            ui.showFeedBack('some from values are empty','error')

        }

        console.log(value)

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

UI.prototype.checkEmpty = function(name,lastname,email){

    let result;

    if(name === '' || lastname === '' || email ===''){
        result = false
    }
    else{
        result = true
    }


    return result;

}

//  show feed back ui

UI.prototype.showFeedBack = function(text,type){


    if(type === 'success'){


    }


   else if(type === 'error'){
        let feedBack = document.querySelector('.drink-form-feedback');
        feedBack.classList.add('error')
        feedBack.innerText = text;
        this.removeAlert('error')
   }




}

// remove alert

UI.prototype.removeAlert = function (type){

    setTimeout(() =>{
        document.querySelector('.drink-form-feedback').classList.remove('error');



    }, 5000)



}



const ui = new UI()


