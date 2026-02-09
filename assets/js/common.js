// 프로필 링크 리스트 기능
function toggleLinks() {
  const links = document.getElementById("social-links");
  links.classList.toggle("hidden");
}

// 게시글 공유버튼 기능
function toggleShare() {
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