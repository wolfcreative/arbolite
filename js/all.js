$(document).ready(function() {
  var needCallback;
  $('.tenth-shot .show').click(function(e) {
    e.preventDefault();
    needCallback = $('.tenth-shot .uk-grid').find('.uk-hidden:lt(3)');
    if (needCallback.length>0){
      needCallback.removeClass('uk-hidden')
    } else {
      UIkit.notification({ message: 'Отзывы закончились!', status: 'danger', pos: 'top-right', timeout: 5000 });
    }
  });
});