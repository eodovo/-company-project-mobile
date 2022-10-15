// JavaScript Document

$(document).ready(function () {
  var cnt = 3;  //탭메뉴 개수 ***
  $('.contentArea .contlist:eq(0)').show(); // 첫번째 탭 내용만 열어라
  $('.contentArea .tab1').css('color', '#da291c').css('font-weight', 'bold').css('box-shadow', '-1px 1px 16px 0 rgb(0 0 0 / 9%)').css('border', '1px solid #da291c'); //첫번째 탭메뉴 활성화
  //자바스크립트의 상대 경로의 기준은 => 스크립트 파일을 불러들인 html파일이 저장된 경로 기준***

  $('.contentArea .tab').each(function (index) {  // index=0 1 2
    $(this).click(function (e) {  //각각의 탭메뉴를 클릭하면... 
      e.preventDefault();   // <a> href="#" 값을 강제로 막는다 

      $(".contentArea .contlist").hide(); //모든 탭내용을 안보이게...
      //$(".contentArea .contlist:eq("+index+")").show(); //클릭한 해당 탭내용만 보여라
      $(".contentArea .contlist:eq(" + index + ")").fadeIn('slow');
      $('.tab').css('background', 'none').css('color', '#333').css('border', '1px solid #ddd'); //모든 탭메뉴를 비활성화
      $(this).css('color', '#da291c').css('font-weight', 'bold').css('border', '1px solid #da291c'); // 클릭한 해당 탭메뉴만 활성화

    });
  });

});

