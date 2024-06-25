//footer 버튼
function toggleButtonVisibility() {
    var selectedOption = document.getElementById("familySite").value;
    var goSiteButton = document.getElementById("goSite");

    // 선택된 옵션이 "관련 사이트"이면 버튼을 숨깁니다.
    if (selectedOption === "관련 사이트") {
      goSiteButton.classList.add("hide-button");
    } else {
      goSiteButton.classList.remove("hide-button");
    }
  }

  function goToSelectedSite() {
    var selectedOption = document.getElementById("familySite").value;

    // 선택된 사이트로 이동하는 로직 추가 (새 창 또는 현재 창에서 열기 등)
    // 예: window.open(selectedOption, '_blank');
  }

  //tab
  document.addEventListener('DOMContentLoaded', function() {
    const tabMenus = document.querySelectorAll('.tab-menu.sub-tab li');
    const tabContents = document.querySelectorAll('.tab-box .guide-flag');
    const api = document.querySelectorAll('.tab-box .api-cont');
    const faq = document.querySelectorAll('.tab-box .faq-list');
    const searchTab = document.querySelectorAll('.tab-box .searchTab');
    const searchWrap = document.querySelectorAll('.tab-box .searchWrap');
    const pagenation = document.querySelectorAll('.tab-box .pagenation');

    tabMenus.forEach((tab, index) => {
        tab.addEventListener('click', function(event) {
            event.preventDefault();

            // 모든 탭 콘텐츠, 추가된 콘텐츠 숨기기
            tabContents.forEach(content => content.style.display = 'none');
            api.forEach(content => content.style.display = 'none');
            faq.forEach(content => content.style.display = 'none');
            searchTab.forEach(content => content.style.display = 'none');
            searchWrap.forEach(content => content.style.display = 'none');

            // 클릭된 탭에 해당하는 콘텐츠 보이기
            const targetTabContent = document.querySelector(`.guide-flag.tab${index + 1}`);
            if (targetTabContent) {
                targetTabContent.style.display = 'block';
            }

            // 클릭된 탭에 해당하는 추가된 콘텐츠 보이기
            const targetApiContent = document.querySelector(`.api-cont.tab${index + 1}`);
            if (targetApiContent) {
                targetApiContent.style.display = 'block';
            }
            const targetFaqContent = document.querySelector(`.faq-list.tab${index + 1}`);
            if (targetFaqContent) {
                targetFaqContent.style.display = 'block';
            }
            const targetSearchTab = document.querySelector(`.searchTab.tab${index + 1}`);
            if (targetSearchTab) {
                targetSearchTab.style.display = 'block';
            }
            const targetSearchWrap = document.querySelector(`.searchWrap.tab${index + 1}`);
            if (targetSearchWrap) {
                targetSearchWrap.style.display = 'block';
            }
            const targetpagenation = document.querySelector(`.pagenation.tab${index + 1}`);
            if (targetpagenation) {
                targetpagenation.style.display = 'block';
            }

            // 모든 탭 메뉴 비활성화
            tabMenus.forEach(t => t.classList.remove('active'));
            // 클릭된 탭 메뉴 활성화
            tab.classList.add('active');
        });
    });

    // 페이지 로드시 초기 탭 활성화
    tabMenus[0].click();
});

//button
const faqButtons = document.querySelectorAll('.faq-list button');

faqButtons.forEach(button => {
  button.addEventListener('click', function() {
    const dd = this.closest('dt').nextElementSibling;
    const dl = this.closest('dl');
    if (dd.style.visibility === 'visible' || dd.style.visibility === '') {
      dd.style.visibility = 'hidden';
      dd.style.height = '0';
      dd.style.overflow = 'hidden';
      dl.style.marginTop = '0';
      dd.style.marginTop = '0';
    } else {
      dd.style.visibility = 'visible';
      dd.style.height = 'auto'; // 높이를 원래 상태로
      dd.style.overflow = 'visible'; // 내용을 보이게
      dl.style.marginTop = '20px';
      dd.style.marginTop = '20px';
    }
  });
});

faqButtons[0].click();
faqButtons[1].click();
faqButtons[2].click();


