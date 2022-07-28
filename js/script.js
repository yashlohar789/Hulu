let sports=document.querySelector(".sports");
let news=document.querySelector(".news");
let events=document.querySelector(".music");
let tab1=document.querySelector(".sports-area");
let tab2=document.querySelector(".news-area");
let tab3=document.querySelector(".music-area");



sports.addEventListener("click",function(){
     tab1.classList.add("active");
     tab2.classList.remove("active");
     tab3.classList.remove("active");

     this.classList.add("active-tab");
     news.classList.remove("active-tab");
     events.classList.remove("active-tab");
});

news.addEventListener("click",function(){
    tab2.classList.add("active");
    tab1.classList.remove("active");
    tab3.classList.remove("active");

    this.classList.add("active-tab");
    sports.classList.remove("active-tab");
    events.classList.remove("active-tab");
});

events.addEventListener("click",function(){
    tab3.classList.add("active");
    tab2.classList.remove("active");
    tab1.classList.remove("active");

    this.classList.add("active-tab");
    news.classList.remove("active-tab");
    sports.classList.remove("active-tab");
});


/*sports.addEventListener('click',function(){

          tab1.style.display='block';

          tab2.style.display='none';
          tab3.style.display='none';

          this.style.borderBottom="4px solid white";
          this.style.color="white";
          news.style.borderBottom="4px solid transparent";
          news.style.color="#EBEDF2";
          events.style.color="#EBEDF2";
          events.style.borderBottom="none";

});

news.addEventListener('click',function(){

    tab2.style.display='block';
    
    tab1.style.display='none';
    tab3.style.display='none';

    this.style.borderBottom="4px solid white";
    this.style.color="white";
    sports.style.borderBottom="none";
    sports.style.color="#EBEDF2";
    events.style.color="#EBEDF2";
    events.style.borderBottom="none";
    
});

events.addEventListener('click',function(){

    tab3.style.display='block';

    tab1.style.display='none';
    tab2.style.display='none';

    this.style.borderBottom="4px solid white";
    this.style.color="white";
    sports.style.borderBottom="4px solid transparent";
    sports.style.borderBottom="none";
    news.style.color="#EBEDF2";
    news.style.borderBottom="none";
});*/