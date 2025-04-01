const codeBlocks = document.querySelectorAll('.highlighter-rouge');
  const headerHTML = `
    <div class="codeHeader">
      <div class="macButtons">
        <span class="macButton close"></span>
        <span class="macButton minimize"></span>
        <span class="macButton expand"></span>
      </div>
      <button class="copyButton"><span class="hidden">복사</span></button>
    </div>
  `;

  codeBlocks.forEach(block => {
    block.insertAdjacentHTML('afterbegin', headerHTML);
  });

// 복사 버튼에 이벤트 리스너 추가
document.querySelectorAll('.copyButton').forEach((button, index) => {
  button.addEventListener('click', () => {
    // 해당 버튼 다음에 오는 코드 블록 찾기
    const codeBlock = button.closest('.codeHeader').nextElementSibling;
    
    // 코드 블록 내용 가져오기
    const code = codeBlock.querySelector('code') 
      ? codeBlock.querySelector('code').innerText 
      : codeBlock.innerText;
    
    // 클립보드에 복사
    navigator.clipboard.writeText(code)
    .then(() => {
      // 복사 성공 시 버튼 텍스트 변경
      // const originalText = button.textContent;
      // button.textContent = 'Copied!';
      
      // 버튼 스타일 변경
      button.classList.add('copied');
      
      // 2초 후 원래 상태로 복원
      setTimeout(() => {
        // button.textContent = originalText;
        button.classList.remove('copied');
      }, 2000);
    })
    .catch(error => {
      console.error('Failed', error);
      
      // 복사 실패 시 버튼 텍스트 변경
      // button.textContent = 'Failed!';

      // 실패 시, 버튼 스타일 변경
      button.classList.add('failed');

      setTimeout(() => {
        // button.textContent = 'Copy';
        button.classList.remove('failed');
      }, 2000);
    });
  });
});