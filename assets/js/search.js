function toggleShare() {
  // 게시글 공유버튼 기능
  const pageShare = document.querySelector('.page-share');
  const shareToggle = document.querySelector('.share-toggle');
  shareToggle.addEventListener('click', function() {
    if(!pageShare.classList.contains('open')) {
      pageShare.classList.add('open');
    } else {
      pageShare.classList.remove('open');
    }
  })
  
  document.addEventListener('click', function(e) {
    if(!pageShare.contains(e.target)) {
      pageShare.classList.remove('open');
    }
  });
  
  pageShare.addEventListener('click', function(e) {
    e.stopPropagation();
  });
}


$(document).ready(function () {
  // Search toggle
  $(".search-toggle").on("click", function () {
    $(".search-content").toggleClass("is--visible");
    $(".initial-content").toggleClass("is--hidden");
    // set focus on input
    setTimeout(function () {
        $(".search-content input").focus();
    }, 400);
  });
})

document.addEventListener('DOMContentLoaded', function () {
  toggleShare();
})