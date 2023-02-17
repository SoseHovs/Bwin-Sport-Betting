const rangeInputs = document.querySelectorAll('input[type="range"]')


function handleInputChange(e) {
  let target = e.target
  if (e.target.type !== 'range') {
    target = document.getElementById('range')
  } 
  const min = target.min
  const max = target.max
  const val = target.value
  
  target.style.backgroundSize = (val - min) * 100 / (max - min) + '% 100%'
}

rangeInputs.forEach(input => {
  input.addEventListener('input', handleInputChange)
})




function toggleClass(className,toggleClass){

  className.forEach((item)=>{
    item.addEventListener('click', ()=>{
        item.classList.toggle(toggleClass);
       
    })
    })
}

let lock =document.querySelectorAll(".lock")
toggleClass(lock,"unlocked")


let competitions= document.querySelectorAll(".top_competitions")
 toggleClass(competitions,"open")

 let aboutBetting=document.querySelectorAll(".about_betting")
 toggleClass(aboutBetting,"open")


 let selection=document.querySelectorAll(".selectOpt")
 let options=document.querySelectorAll(".secondary_options")
 selection.forEach((item,i)=>{
  item.addEventListener('click', ()=>{
   
      options[i].classList.toggle("selectOpen");
  
      options[i].style.transition=".5s"
     
  })
  })

  let option=document.querySelectorAll(".secondary_options > li")




option.forEach((item)=>{
item.addEventListener('click',(event)=>{

item.closest(".options_list").querySelector(".selected_opt").innerHTML=item.innerHTML

})
})

function swiperCreater(classname){

  let swiper = new Swiper(classname, {
    slidesPerView: "auto",
    direction: 'horizontal',
    spaceBetween:10,
  });
}

// let swiper = new Swiper('.swiper2', {
//   slidesPerView: "auto",
//   direction: 'horizontal',
//   spaceBetween:10,
// });

swiperCreater(".swiper1")
swiperCreater(".swiper2")
swiperCreater(".swiper3")