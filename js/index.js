$("figure").mouseleave(
    function() {
      $(this).removeClass("hover");
    }
  );


const text =  baffle(".data");
text.set({
characters: '░▒░ ░██░> ████▓ >█> ░/█>█ ██░░ █<▒ ▓██░ ░/░▒',
        speed: 120
});

text.start();
text.reveal(4000);



window.addEventListener('mousemove', handleMouseMove);
  window.addEventListener('resize', handleWindowResize);
  
  const spansSlow = document.querySelectorAll('.spanSlow');
  const spansFast = document.querySelectorAll('.spanFast');

  let width = window.innerWidth;

  function handleMouseMove(e) {
    let normalizedPosition = (e.pageX - width/2)/(width/2);
    let speedSlow = 100 * normalizedPosition;
    let speedFast = 200 * normalizedPosition;
    spansSlow.forEach((span) => {
      span.style.transform = `translate(${speedSlow}px)`;
    });
    spansFast.forEach((span) => {
      span.style.transform = `translate(${speedFast}px)`
    })
  }
  //we need to recalculate width when the window is resized
  function handleWindowResize() {
    width = window.innerWidth;
  }


  //var cible = document.getElementById('menu');
var menu = document.getElementById('menu');
var posNav = menu.offsetTop; //retourne la position top de info

//action
function affiche(){
 //info.innerHTML = this.pageYOffset; //position du scroll 
  if(posNav - this.pageYOffset != 0){
   menu.style.position = "fixed";
   menu.classList.add("couleur"); //je change la class et du coup la couleur
     }else{
       //alert(2);
       menu.style.position = "relative";
       menu.classList.remove("couleur");
     }
}

//évènement
window.addEventListener('scroll',affiche);





