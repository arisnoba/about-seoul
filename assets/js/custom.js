$(document).ready(function () {
   // Initialize Swiper
   var swiper = new Swiper('.AS-citySwiper', {
      navigation: {
         nextEl: '.swiper-button-next',
         prevEl: '.swiper-button-prev',
      },
      on: {
         slideChange: function () {
            var currentIndex = swiper.realIndex; // 실제 인덱스를 가져옴
            $('path').each(function () {
               if ($(this).attr('data-index') == currentIndex) {
                  $(this).click();
               }
            });
         },
      },
   });
   $('path').click(function () {
      var index = $(this).attr('data-index');

      // 선택된 path에 클래스를 추가
      $(this).attr('class', 'selected-path');

      // 다른 path에서는 해당 클래스를 제거
      $('path').not(this).removeAttr('class');

      // Swiper 슬라이드 이동
      swiper.slideToLoop(index);
   });

   // .index 요소를 클릭했을 때 path와 Swiper 연동
   $('.index').click(function () {
      var index = $(this).attr('data-index');
      $('path[data-index="' + index + '"]').click();
   });

   // 페이지 로드 시 첫 번째 path 요소 클릭
   $('path[data-index="0"]').click();
});
