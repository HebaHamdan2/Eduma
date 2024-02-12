let mediaQuery =window.matchMedia('(max-width:767px)');
if(mediaQuery.matches){
    let newhead=document.getElementById('myCarousel');
    newhead.outerHTML=`
    <div class=" first w-100">
          <img class="w-100" src="assets/img/slide1.jpg" alt="">
          <div class="container d-flex align-items-center">
            <div class="carousel-caption h-100 text-start">
              <h1>the best theme for <p class="main-head">education</p>
              </h1>
              <p><a class="btn main-btn border-0 rounded-0" href="#">buy now</a></p>
            </div>
          </div>
        </div>`;
        document.querySelector('.event').classList.remove('head');

}