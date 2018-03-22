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


  $('.js-calc-button--calc').click( function(_event) {
    var $calc = $('.calc');
    $calc.find('.js-calc-result').each(function(_index, _el) {
        switch (_el.tagName.toUpperCase()) {
            case 'SELECT':
                $(_el).val(0).trigger('change.select2');
                break;

            case 'INPUT':
                $(_el).val('');
                break;
        }
    });

    flagErrors = false;

    var $field = $calc.find('.js-calc-field--L');
    var L = convertFloatString($field.val());
    if (L.match(/^\d+?(\.(\d*?)?)?$/)) {
        $field.removeClass('error');
        L = parseFloat(L);
    } else {
        $field.addClass('error');
        flagErrors = true;
    }

    $field = $calc.find('.js-calc-field--H');
    var H = convertFloatString($field.val());
    if (H.match(/^\d+?(\.(\d*?)?)?$/)) {
        $field.removeClass('error');
        H = parseFloat(H);
    } else {
        $field.addClass('error');
        flagErrors = true;
    }

    $field = $calc.find('.js-calc-field--S');
    var S_doors = convertFloatString($field.val());
    if (S_doors != '' && S_doors.match(/^\d+?(\.(\d*?)?)?$/)) {
        $field.removeClass('error');
        S_doors = parseFloat(S_doors);
    } else {
        //$field.addClass('error');
        //flagErrors = true;
        S_doors = 0.00;
        $field.val(S_doors);
    }

    $field = $calc.find('select.js-calc-field--block');
    var block = parseInt($field.val(), 10);
    if (block > 0) {
        $field.next('.select2.select2-container').removeClass('error');
    } else {
        $field.next('.select2.select2-container').addClass('error');
        flagErrors = true;
    }

    if (flagErrors) {
        return false;
    }

    var S = L * H - S_doors;
    $calc.find('.js-calc-result--S').text(S.toFixed(0));

    switch (block) {
      case 1:
          var count = Math.ceil(S / 0.1);
          $calc.find('.js-calc-result--count').text(count.toFixed(0));

          var V = (count / 33.3);
          $calc.find('.js-calc-result--V').text(V.toFixed(2));

          var cost = Math.ceil(V * 4195.00);
          $calc.find('.js-calc-result--cost').text(cost.toFixed(0).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1,') + ' Руб');
          break;

      case 2:
          var count = Math.ceil(S * 17);
          $calc.find('.js-calc-result--count').text(count.toFixed(0));

          var V = (count / 40.6);
          $calc.find('.js-calc-result--V').text(V.toFixed(2));

          var cost = Math.ceil(V * 4222.00);
          $calc.find('.js-calc-result--cost').text(cost.toFixed(0).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1,') + ' Руб');
          break;

      case 3:
          var count = Math.ceil(S * 2);
          $calc.find('.js-calc-result--count').text(count.toFixed(0));

          var V = (count / 19.6);
          $calc.find('.js-calc-result--V').text(V.toFixed(2));

          var cost = Math.ceil(V * 4900.00);
          $calc.find('.js-calc-result--cost').text(cost.toFixed(0).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1,') + ' Руб');
          break;

      case 4:
          var count = Math.ceil(S * 2);
          $calc.find('.js-calc-result--count').text(count.toFixed(0));

          var V = (count / 24.3);
          $calc.find('.js-calc-result--V').text(V.toFixed(2));

          var cost = Math.ceil(V * 5103.00);
          $calc.find('.js-calc-result--cost').text(cost.toFixed(0).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1,') + ' Руб');
          break;
      }
    return false;
  });

  $('.js-calc-button--reset').click( function(_event) {
    var $calc = $('.calc');

    $calc.find('.js-calc-field').each(function(_index, _el) {
      switch (_el.tagName.toUpperCase()) {
        case 'SELECT':
            $(_el).val(0).trigger('change.select2');;
            break;

        case 'INPUT':
            $(_el).val('');
            break;
      }
    });
    return false;
  });

  function convertFloatString(_string) {
    _string = _string.replace(/\s/g, '');

    var delimiter = {
        'comma': _string.indexOf(','),
        'dot': _string.indexOf('.')
    };
    if (delimiter['comma'] >= 0 && delimiter['dot'] >= 0) {
        if (delimiter['comma'] < delimiter['dot']) {
            _string = _string.replace(',', '');
        } else {
            _string = _string.replace('.', '').replace(',', '.');
        }
    } else if (delimiter['comma'] >= 0) {
        let array = _string.split(',');
        if (array.length > 2) {
            _string = _string.replace(',', '');
        } else {
            _string = _string.replace(',', '.');
        }
    } else if (delimiter['dot'] >= 0) {
        let array = _string.split('.');
        if (array.length > 2) {
            _string = _string.replace('.', '');
        }
    }
    return _string;
  }
});