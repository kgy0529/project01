const $slideWrapBg=document.querySelector('.mainVision');
const $slideWrap=document.querySelector('.main_visual');
const $slideContainer=document.querySelector('.main_visual .main_visual_img');
const $slide=document.querySelectorAll('.main_visual .main_visual_img .banner_img');
const $stopBtn=document.querySelector('.stop_btn a')
const $overBtn=document.querySelector('.over-btn')
const $prev=document.querySelector('.prev')
const $next=document.querySelector('.next')
const $pager=document.querySelectorAll('.indicator')
const $pagerBtn=document.querySelectorAll('.indicator li')
let $currentIndex=0;
const $slideCount=$slide.length;
let $timer=undefined;
let $isAutoSlideOn =true;
const $stopBtnImg=document.querySelector('.stop_btn a img');
const $imgOn=$stopBtnImg.getAttribute('src')
const $imgOff=$imgOn.replace('stop','play')
const $color=['#165c9c','#d8d2e4','#dad3f7','#f3ebe0']


for(let i=0; i<$slideCount; i++){
    $slide[i].style.left=i*100+'%';
}
$slideWrap.style.backgroundColor="red"
//슬라이드 함수
function goToSlide(idx){
    $slideContainer.classList.add('animate')
    $slideContainer.style.left=-100*idx+'%';
    $currentIndex=idx; 
    $slideWrapBg.style.backgroundColor=$color[idx]
    updatePagerButtons(idx)
    
}
goToSlide(0)

function updatePagerButtons(index) {
    $pagerBtn.forEach((btn, i) => {
        btn.classList.toggle('active', i === index);
    });
}

$next.addEventListener('click',function(){
   
        goToSlide(($currentIndex+1) % $slideCount)
    
})
$prev.addEventListener('click',function(){
    goToSlide(($currentIndex-1 + $slideCount) % $slideCount)
})


//자동 슬라이드
startAutoSlide()
function startAutoSlide(){
    $timer=setInterval(()=>{
        let nextIdx=($currentIndex+1) % $slideCount;
        goToSlide(nextIdx)
    },4000)
}
function stopAutoSlide(){
    clearInterval($timer)
}

$stopBtn.addEventListener('click', function(){
    if($isAutoSlideOn){
        stopAutoSlide();
        $stopBtnImg.src=$imgOff

    }else{
        startAutoSlide()
        $stopBtnImg.src=$imgOn
    }
    $isAutoSlideOn=!$isAutoSlideOn;
})


$overBtn.addEventListener('mouseover', function(){
    stopAutoSlide();
})
$overBtn.addEventListener('mouseout', function(){
    startAutoSlide()
})

$pagerBtn.forEach((btn, idx) =>{
    btn.addEventListener('click', () =>{
        goToSlide(idx)
    })
})

$pagerBtn.forEach(btn =>{
    btn.addEventListener('mouseenter', stopAutoSlide)
    btn.addEventListener('mouseleave', startAutoSlide)
})
//슬라이드 배경 색 바뀌게



//탭 메뉴
document.addEventListener('DOMContentLoaded', function () {
    const tabContent = document.querySelectorAll('.tab_contents>ul');
    const targetLink = document.querySelectorAll('.tab_list a');

    // 초기에 첫 번째 탭 내용만 보이도록 설정
    tabContent.forEach(function (tab) {
        tab.style.display = 'none';
    });
    document.getElementById('tab1_se4').style.display = 'flex';

    for (let k = 0; k < targetLink.length; k++) {
        targetLink[k].classList.remove('active');
        targetLink[0].classList.add('active');
    }
    // 탭 클릭 이벤트 처리
    for (let i = 0; i < targetLink.length; i++) {
        targetLink[i].addEventListener('click', function (e) {
            e.preventDefault();
            const orgTarget = e.target.getAttribute('href');
            const tabTarget = orgTarget.replace("#", "");
            // 모든 탭 숨기기
            for (let j = 0; j < tabContent.length; j++) {
                tabContent[j].style.display = "none";
            }
            // 선택한 탭 보이기
            document.getElementById(tabTarget).style.display = 'flex';

            // 모든 탭 링크에서 'active' 클래스 제거
            for (let k = 0; k < targetLink.length; k++) {
                targetLink[k].classList.remove('active');
            }          
            // 현재 클릭한 탭 링크에 'active' 클래스 추가
            e.target.classList.add('active');
        });
    }
});

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

let currentSlide = 0;
const slides = document.querySelectorAll('.image');
const totalSlides = slides.length;
const slidesPerPage = 6;

function showSlides(startIndex) {
  for (let i = 0; i < totalSlides; i++) {
    if (i >= startIndex && i < startIndex + slidesPerPage) {
      slides[i].style.display = 'block';
    } else {
      slides[i].style.display = 'none';
    }
  }
}

function updatePagination() {
  const currentPage = Math.floor(currentSlide / slidesPerPage) + 1;
  const totalPages = Math.ceil(totalSlides / slidesPerPage);
  document.querySelector('.gal_pagination').textContent = `${currentPage}/${totalPages}`;
}

function nextSlides(event) {
  event.preventDefault();
  if (currentSlide + slidesPerPage < totalSlides) {
    currentSlide += slidesPerPage;
    showSlides(currentSlide);
    updatePagination();
  }
}

function prevSlides(event) {
  event.preventDefault();
  if (currentSlide - slidesPerPage >= 0) {
    currentSlide -= slidesPerPage;
    showSlides(currentSlide);
    updatePagination();
  }
}

// 초기 슬라이드 표시
showSlides(currentSlide);
updatePagination();

// 이전과 다음 버튼에 클릭 이벤트 추가
document.querySelector('.gal_prev').addEventListener('click', prevSlides);
document.querySelector('.gal_next').addEventListener('click', nextSlides);