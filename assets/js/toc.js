// Gumshoe scroll spy init
if ($("div.toc").length > 0) {
  var spy = new Gumshoe("div.toc a", {
    // Active classes
    navClass: "active", // applied to the nav list item
    contentClass: "active", // applied to the content

    // Nested navigation
    nested: false, // if true, add classes to parents of active link
    nestedClass: "active", // applied to the parent items

    // Offset & reflow
    offset: 100, // how far from the top of the page to activate a content area
    reflow: true, // if true, listen for reflows

    // Event support
    events: true, // if true, emit custom events
  });
}

document.querySelectorAll("div.toc a").forEach(link => {
  link.addEventListener("click", function (event) {
    event.preventDefault();  // 기본 링크 동작을 막음
    // Gumshoe scroll spy를 위한 코드 처리
    var target = document.querySelector(link.getAttribute('href'));
    if (target) {
      // Gumshoe에서 사용한 custom scroll로 이동
      window.scrollTo({
        top: target.offsetTop - 100,
        behavior: "smooth"
      });
    }
  });
});