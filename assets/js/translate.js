
function googleTranslateElementInit() {
  console.log('Google Translate 초기화 중...');
  new google.translate.TranslateElement({
    pageLanguage: 'ko',
    includedLanguages: 'ko,en,ja,zh-CN,de,fr,pt,vi',
    autoDisplay: false
  }, 'google_translate_element');
  console.log('Google Translate 초기화 완료');
}

// Google Translate 초기화 함수
document.addEventListener('DOMContentLoaded', function() {
  const transBtn = document.querySelector('.transBtn');
  const transMenu = document.querySelector('.transMenu');
  const transItems = document.querySelectorAll('.transItem');
  const overlay = document.querySelector('.transTool .overlay');
  
  // 번역 버튼 클릭 시 메뉴 토글
  transBtn.addEventListener('click', function(e) {
    e.stopPropagation();
    transMenu.style.display = transMenu.style.display === 'flex' ? 'none' : 'flex';
    overlay.style.display = overlay.style.display === 'block' ? 'none' : 'block';
    overlay.style.opacity = overlay.style.opacity === 1 ? 0 : 1;
  });
  
  // 언어 옵션 선택 처리
  transItems.forEach(item => {
    item.addEventListener('click', function() {
      transItems.forEach(item => {
        item.classList.remove('selected');
      });
      this.classList.add('selected');
      const lang = this.getAttribute('data-lang');
      changeLanguage(lang, this.textContent);
    });
  });
  
  // 외부 클릭 시 메뉴 닫기
  document.addEventListener('click', function(e) {
    if(!transMenu.contains(e.target)) {
      transMenu.style.display = 'none';
      overlay.style.display = overlay.style.display ='none';
      overlay.style.opacity = overlay.style.opacity = 0;
    }
  });

  // Google Translate 위젯 로드 확인 및 기본 언어 설정
  const checkGoogleTranslateLoaded = setInterval(() => {
    const googleElement = document.getElementById('google_translate_element');
    if (googleElement && googleElement.querySelector('.goog-te-combo')) {
      clearInterval(checkGoogleTranslateLoaded);
      setDefaultLanguage('ko');
    }
  }, 500);
});

// 언어 변경 함수
function changeLanguage(lang, langText) {
  setTimeout(() => {
    const selectBox = document.querySelector('.goog-te-combo');
    if (selectBox) {
      selectBox.value = lang;
      selectBox.dispatchEvent(new Event('change'));
      document.querySelector('.transBtn > span').textContent = langText;
    }
    document.querySelector('.transMenu').style.display = 'none';
    document.querySelector('.transTool .overlay').style.display = 'none';
    document.querySelector('.transTool .overlay').style.opacity = 1;
  }, 300);
}

// 기본 언어 설정 함수
function setDefaultLanguage(defaultLang) {
  const defaultOption = document.querySelector(`.transItem[data-lang="${defaultLang}"]`);
  if (defaultOption) {
    document.querySelector('.transBtn > span').textContent = defaultOption.textContent;
  }
}