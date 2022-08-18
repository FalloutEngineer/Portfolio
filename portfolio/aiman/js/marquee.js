var $marquee = document.querySelector('.stripe__body');
      var marquee = (window.m = new dynamicMarquee.Marquee($marquee, {
        rate: -100,
        startOnScreen: true,
      }));
      window.l = dynamicMarquee.loop(
        marquee,
        [
          function () {
            var item = document.createElement('div');
            item.classList.add('stripe__item');

            var icon = document.createElement('img');
            icon.src = 'img/common/discount.svg';
            icon.classList.add('stripe__icon');

            var text = document.createTextNode('GET UP TO 20% DISCOUNT IF YOU REGISTER NOW');

            item.appendChild(icon);
            item.appendChild(text);

            return item;
          },
        ],
        function () {
          var $separator = document.createElement('div');
          $separator.classList.add('stripe__delimiter');
          $separator.innerHTML = ' ';
          return $separator;
        }
      );