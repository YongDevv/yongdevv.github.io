
$(document).ready(function () {
  // Search toggle
  $(".searchToggle").on("click", function () {
    $(".search-content").toggleClass("is--visible");
    $(".initial-content").toggleClass("is--hidden");
    // set focus on input
    setTimeout(function () {
        $(".search-content input").focus();
    }, 400);
  });

  // $(".shareToggle").on("click", function () {
  //   if($(this).hasClass('open')) {
  //     $(this).removeClass('open');
  //   } else {
  //     $(this).removeClass('open');
  //     $(this).addClass('open')
  //   }
  // });
})

document.addEventListener('DOMContentLoaded', function () {
  const page__share = document.querySelector('.page__share');
  const shareToggle = document.querySelector('.shareToggle');
  console.log(page__share)
  shareToggle.addEventListener('click', function() {
    if(!page__share.classList.contains('open')) {
      page__share.classList.add('open');
    } else {
      page__share.classList.remove('open');
    }
  })
  
  document.addEventListener('click', function(e) {
    if(!page__share.contains(e.target)) {
      page__share.classList.remove('open');
    }
  });
  
  page__share.addEventListener('click', function(e) {
    e.stopPropagation();
  });
})