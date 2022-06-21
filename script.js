let conteudo = document.querySelectorAll(".navio");
let tela = document.getElementsByClassName('tela-grande')



for (var i = 0; i < conteudo.length; i++) {
  conteudo[i].addEventListener('click', mostrar);
}






function mostrar(e) {
  let id = e.target.id;

  
  
  for (var i = 0; i < conteudo.length; i++) {
    conteudo[i].classList.remove("navio");
    conteudo[i].classList.add('desativado')
  }


  setTimeout(adicionar, 1000)
  
  function adicionar() {
    

    let element = document.getElementById(id);
    element.classList.remove('desativado')
    element.classList.add("tela-grande")

    console.log(id)

    
  }
    
  
}







// SLIDE \\ 



let slideIndex = 1;
    showSlides(slideIndex);
    
    function plusSlides(n) {
      showSlides(slideIndex += n);
    }
    
    function currentSlide(n) {
      showSlides(slideIndex = n);
    }
    
    function showSlides(n) {
      let i;
      let slides = document.getElementsByClassName("mySlides");
      let dots = document.getElementsByClassName("dot");
      if (n > slides.length) {slideIndex = 1}    
      if (n < 1) {slideIndex = slides.length}
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
      }
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[slideIndex-1].style.display = "block";  
      dots[slideIndex-1].className += " active";
    }