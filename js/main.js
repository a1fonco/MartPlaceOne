$(function () {

  $('.products__slider').slick({
    prevArrow: '<button class="slick-arrow slick-prev"><span class="lnr lnr-chevron-left"></span></button>',
    nextArrow: '<button class="slick-arrow slick-next"><span class="lnr lnr-chevron-right"></span></button>'
  });

  if ($('.products-mix__box-inner').length) {
  var mixer = mixitup('.products-mix__box-inner');
  }
  

  $(".stars").rateYo({
    starWidth: "14px",
    rating: 4.5,
    readOnly: true,
    ratedFill: "#ffc000",
    spacing: "3px"
  });

  $(".js-range-slider").ionRangeSlider({
    type: "double",
    min: 0,
    max: 325,
    from: 30,
    to: 300,
    prefix: "$"
  });

  $('.list-btn').on('click',function(){
    $('.content-item').addClass('list')
    $('.grid-btn').removeClass('active');
    $('.list-btn').addClass('active');
  });

  $('.grid-btn').on('click',function(){
    $('.content-item').removeClass('list');
    $('.grid-btn').addClass('active');
    $('.list-btn').removeClass('active');
  });


  $('.favorites-list').on('click',function(){
    $('.favorites-item').addClass('list')
    $('.favorites-grid').removeClass('active');
    $('.favorites-list').addClass('active');
  });

  $('.favorites-grid').on('click',function(){
    $('.favorites-item').removeClass('list');
    $('.favorites-grid').addClass('active');
    $('.favorites-list').removeClass('active');
  });


  $('.products-mix__slider').slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    variableWidth: true,
    prevArrow: '<button class="slick-arrow slick-prev"><span class="lnr lnr-chevron-left"></span></button>',
    nextArrow: '<button class="slick-arrow slick-next"><span class="lnr lnr-chevron-right"></span></button>'
  });

  $('.search__select, .page-filters__select-price, .page-filters__select-page, .title-input').styler();

  $('.product-content__tabs .tab').on('click', function(event) {
    var id = $(this).attr('data-id');
      $('.product-content__tabs').find('.tab-item').removeClass('active-tab').hide();
      $('.product-content__tabs .tabs').find('.tab').removeClass('active');
      $(this).addClass('active');
      $('#'+id).addClass('active-tab').fadeIn();
      return false;
    });

});