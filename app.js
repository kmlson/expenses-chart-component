let value = document.querySelector(".day-value");
let jsonObject=null;
let screen = null;


async function readJson() {
    let obj;
  
    const res = await fetch('./data.json');
  
    obj = await res.json();
  
    return obj;
  }

jsonObject= await readJson();

function checkScreenSize() {
let screen = null;
  if (window.matchMedia("(max-width: 767px)").matches) {
    screen = "mobile";
  }
  if (
    window.matchMedia("(min-width: 768px) and (max-width: 1439px)").matches
  ) {
    screen = "tablet";
  }
  if (window.matchMedia("(min-width: 1440px)").matches) {
    screen = "desktop";
  }

  return screen;
}


screen = checkScreenSize();



document.querySelectorAll(".days-value").forEach(Element => {
   Element.addEventListener("click",(event) => {
    //event.target.getBoundingClientRect()
    if(screen==="tablet" ||  screen === "desktop")
    {
    value.style.left=event.target.getBoundingClientRect().left-9+"px";
     value.style.top=event.target.getBoundingClientRect().top-50+"px";
     value.innerHTML="$"+jsonObject.find(el => el.day === event.target.id).amount;
     value.style.display ="block";
    }
    if(screen==="mobile")
    {
    value.style.left=event.target.getBoundingClientRect().left-6+"px";
     value.style.top=event.target.getBoundingClientRect().top-50+"px";
     value.innerHTML="$"+jsonObject.find(el => el.day === event.target.id).amount;
     value.style.display ="block";
    }
     
      
       
   })           
})








