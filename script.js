//active navbar
let nav = document.querySelector("navigation-wrap");
window.scrollon = function() {
    if(document.documentElement.scrollTop > 20){
        nav.classList.add("scroll-on ");
    }
    else{
        nav.classList.remove("scroll-on  ");

    }
}



///navbar hide
let navbar=document.querySelectorAll('.nav-link');
let navCollapse=document.querySelector('.navbar-collapse.collapse');
navbar.forEach(function(a){
    a.addEventListener("click",function(){
       navCollapse.classList.remove("show");  
    })
})

 // counter 
document.addEventListener("DOMContentLoaded",()=>{
    function counter(id,start,end,duration){
        let obj=document.getElementById(id),
        current=start,
        range=end - start ,
        increment= end > start ? 1 : -1 ,
        step = Math.abs(Math.floor(duration/range)),
        timer=setInterval(()=>{
            current+=increment;
            obj.textContent =current;
            if(current==end){
                clearInterval(timer);
            }
        },step);
    }
    //id
    counter("count1",0, 1234,30000);
    counter("count2",100, 9234,49000);
    counter("count3",50, 8294,30800);
    counter("count4",700, 3234,80000);

})

console.log("hello ");