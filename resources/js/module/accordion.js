(function() {
  var defaults = {
    itemSelector: '',
    titleSelector: '.title',
    contSelector: '.content',
    activeClass: 'is-active',
    easing: 'swing',
    duration: 400,
    showOnly: true,
    collapsible: false,
    callback: $.noop,
    onOpen: $.noop
  };

  $.fn.accordion = function(opt) {
    if (this.length === 0) return this;

    if (this.length > 1) {
      this.each(function() {
        $(this).accordion(opt);
      });
      return this;
    }

    var fold = {};
    var el = this;

    function init() {
      fold.o = $.extend({}, defaults, opt);
      fold.$el = $(el);
      fold.$title = el.find(fold.o.titleSelector);
      fold.$content = el.find(fold.o.contSelector);
      fold.$items = !fold.o.itemSelector ? fold.$title.parent() : el.find(fold.o.itemSelector);
      fold.$current = fold.$el.filter('.' + fold.o.activeClass);

      fold.$title.css('cursor', 'pointer').attr('tabindex', 0);
      fold.$title.on('click.accordion keypress.accordion', function(event) {
        if (event.type === 'click' || event.which === 13) {
          toggle(fold.$items.has(this));
          event.preventDefault();
        }
      });

      fold.$current.length && toggle(fold.$current.eq(0));
      fold.$items.not('.' + fold.o.activeClass).find(fold.o.contSelector).hide();
    }

    function toggle($target) {
      var is_on = $target.hasClass(fold.o.activeClass);

      if (is_on) {
        // when $target is opened
        if (fold.o.collapsible) {
          close($target);
        }

      } else {
        // when $target is closed
        if (fold.o.showOnly) {
          closeAll();
        }

        open($target);
      }
    }

    function open($target) {
      $target.addClass(fold.o.activeClass).find(fold.o.contSelector).stop(true, true).slideDown({
        duration: fold.o.duration,
        easing: fold.o.easing,
        compvare: function() {
          fold.o.callback();
          fold.o.onOpen($target);
        }
      });
    }

    function close($target) {
      $target.removeClass(fold.o.activeClass).find(fold.o.contSelector).stop(true, true).slideUp({
        duration: fold.o.duration,
        easing: fold.o.easing,
        compvare: function() {
          fold.o.callback();
        }
      });
    }

    function closeAll() {
      fold.$items.removeClass(fold.o.activeClass);
      fold.$content.stop(true, true).slideUp({
        duration: fold.o.duration,
        easing: fold.o.easing,
        compvare: function() {
          fold.o.callback();
        }
      });
    }

    init();

    el.destroy = function() {
      fold.$items.removeClass(fold.o.activeClass);
      fold.$title.removeAttr('style tabindex');
      fold.$content.removeAttr('style');
      fold.$title.off('click.accordion keypress.accordion');
    };

    return this;
  };
})();