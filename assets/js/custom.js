// Google Translate 초기화 함수
  
  // DOM이 로드된 후 실행
  document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM 로드 완료, 커스텀 셀렉트 초기화 시작');
    
    // 커스텀 셀렉트 요소들 가져오기
    const selectButton = document.querySelector('.select-button');
    const selectOptions = document.querySelector('.select-options');
    const selectOptionItems = document.querySelectorAll('.select-option');
    
    console.log('커스텀 셀렉트 요소 참조 완료');
    
    // 셀렉트 버튼 클릭 시 옵션 표시/숨김 토글
    selectButton.addEventListener('click', function() {
      const isVisible = selectOptions.style.display === 'block';
      selectOptions.style.display = isVisible ? 'none' : 'block';
      console.log(`옵션 메뉴 ${isVisible ? '닫힘' : '열림'}`);
    });
    
    // 각 언어 옵션에 이벤트 리스너 추가
    selectOptionItems.forEach(option => {
      option.addEventListener('click', function() {
        const lang = this.getAttribute('data-lang');
        const langText = this.textContent;
        
        console.log(`언어 선택: ${langText} (${lang})`);
        
        // Google Translate 기능 호출 - 약간의 지연을 두어 Google Translate가 로드될 시간을 줌
        setTimeout(() => {
          const selectBox = document.querySelector('.goog-te-combo');
          if (selectBox) {
            console.log(`Google Translate 셀렉트 박스 발견, 값을 ${lang}으로 변경 시도`);
            selectBox.value = lang;
            selectBox.dispatchEvent(new Event('change'));
            console.log(`Google Translate 언어 변경 이벤트 발생 완료`);
            
            // 버튼 텍스트 업데이트
            selectButton.textContent = langText;
            console.log(`커스텀 셀렉트 버튼 텍스트 업데이트: ${langText}`);
          } else {
            console.warn('Google Translate 셀렉트 박스를 찾을 수 없음. Google Translate가 제대로 로드되었는지 확인하세요.');
          }
          
          // 옵션 메뉴 닫기
          selectOptions.style.display = 'none';
          console.log('옵션 메뉴 닫힘');
        }, 300);
      });
    });
    
    // 외부 클릭 시 옵션 메뉴 닫기
    document.addEventListener('click', function(e) {
      if (!e.target.closest('.custom-select-container')) {
        if (selectOptions.style.display === 'block') {
          selectOptions.style.display = 'none';
          console.log('외부 클릭으로 인한 옵션 메뉴 닫힘');
        }
      }
    });
  
    // Google Translate 위젯 상태 모니터링
    const checkGoogleTranslateLoaded = setInterval(() => {
      const googleElement = document.getElementById('google_translate_element');
      if (googleElement && googleElement.querySelector('.goog-te-combo')) {
        console.log('Google Translate 위젯이 성공적으로 로드됨');
        clearInterval(checkGoogleTranslateLoaded);
        
        // 기본 언어 설정 (한국어)
        const defaultLang = 'ko';
        const defaultOption = document.querySelector(`.select-option[data-lang="${defaultLang}"]`);
        if (defaultOption) {
          selectButton.textContent = defaultOption.textContent;
          console.log(`기본 언어로 ${defaultOption.textContent} 설정됨`);
        }
      }
    }, 500);
    
    console.log('커스텀 셀렉트 초기화 완료, Google Translate 로드 대기 중');
  });
  
// 페이지 로드 완료 시 추가 확인
window.addEventListener('load', function() {
    console.log('페이지 완전히 로드됨, Google Translate 상태 확인');
    
    // Google Translate 요소 확인
    setTimeout(() => {
      const googleElement = document.getElementById('google_translate_element');
      if (googleElement) {
        const teCombo = googleElement.querySelector('.goog-te-combo');
        if (teCombo) {
          console.log('Google Translate 위젯 정상 작동 중');
        } else {
          console.warn('Google Translate 콤보박스가 로드되지 않음');
        }
      } else {
        console.error('Google Translate 요소를 찾을 수 없음');
      }
    }, 3000);
  });