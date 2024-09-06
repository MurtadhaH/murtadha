document.getElementById('menu-icon').addEventListener('click', function() {
    var navMenu = document.getElementById('nav-menu');
    navMenu.classList.toggle('open');
});

document.addEventListener('click', function(event) {
    var navMenu = document.getElementById('nav-menu');
    console.clear()
    console.log(!navMenu.contains(event.target))
    console.log(navMenu.classList.contains('open'))

    if (!navMenu.contains(event.target) && navMenu.classList.contains('open')) {
        navMenu.classList.remove('open');
    }
});
window.addEventListener('scroll', function() {
  var section = document.querySelector('.certified-by');
  var img = section.querySelector('img')
  var sectionTop = section.offsetTop;
  var sectionHeight = section.offsetHeight;
  var windowScrollTop = window.pageYOffset || document.documentElement.scrollTop;
  var windowHeight = window.innerHeight || document.documentElement.clientHeight;

  if (windowScrollTop + windowHeight > sectionTop && windowScrollTop < sectionTop + sectionHeight) {
      var scrollPercentage = (windowScrollTop - sectionTop + windowHeight) / sectionHeight;
      if (scrollPercentage > 1) {
          scrollPercentage = 1
              // + (1 - scrollPercentage);
      }

      var translateY = scrollPercentage * -45;
      console.log(scrollPercentage)
      img.style.transform = `translateY(${translateY}%)`;
  } else {
      img.style.transform = 'translateY(0)';
  }
});