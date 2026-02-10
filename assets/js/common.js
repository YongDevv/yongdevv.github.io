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

// sidebar, aside 그라디언트 스크롤 감지
function sideSentinel() {
  const scrollContainers = document.querySelectorAll('.nav_list, .aside');

  scrollContainers.forEach(container => {
    // container 끝마다 감시 태그 삽입
    const sentinel = document.createElement('div');
    sentinel.style.height = '1px';
    sentinel.style.visibility = 'hidden';
    container.appendChild(sentinel);

    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0]

      if(entry.isIntersecting) { // 감시 태그가 화면에 들어오면
        container.classList.add('is-end')
      } else { 
        container.classList.remove('is-end');
      }
    }, {
      root: container, // 감지 타겟
      threshold: 0.1  // 감지 수치
    })

    observer.observe(sentinel);
  })

}

document.addEventListener('DOMContentLoaded', function () {
  toggleShare();
  sideSentinel();
})