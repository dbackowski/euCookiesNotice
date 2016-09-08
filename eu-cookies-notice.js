window.euCookiesNotice = (function($, Cookies) {
  'use strict';

  var options = {};

  var cookiesInfoTemplate = function() {
    var result = '<div id="eu-cookies-notice">';
    result += '<div class="container"><div class="row"><div class="col-sm-12"><span class="">';
    result += options.text;
    result += '</span>';
    result += '<span class=""><a href="#" id="eu-cookies-notice-accept" class="btn btn-default btn-xs">' + options.buttonText + '</a></span>';
    result += '</div></div></div></div>';

    return result;
  }

  var noticeUnaccepted = function() {
    return Cookies.get('eu-cookies-notice-accepted') === undefined;
  }

  var hideNotice = function(e) {
    $('#eu-cookies-notice').fadeOut('slow', function() {
      $(this).remove();
      Cookies.set('eu-cookies-notice-accepted', '1', { expires: 9999 });
    });

    e.preventDefault();
  }

  var showNotice = function() {
    $('body').append(cookiesInfoTemplate());
    $('#eu-cookies-notice').fadeIn('slow');
    $('#eu-cookies-notice-accept').on('click', hideNotice);
  }

  var euCookiesNotice = {
    init: function(opts) {
      options = $.extend({
        text: 'Ta strona korzysta z ciasteczek. Dalsze korzystanie ze strony oznacza, że zgadzasz się na ich użycie.',
        buttonText: 'Zamknij'
      }, opts);

      if (noticeUnaccepted()) {
        showNotice();
      }
    }
  }

  return euCookiesNotice;
})(jQuery, Cookies);
