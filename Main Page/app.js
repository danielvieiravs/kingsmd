location.href = '#';
drawTestimonials();
navigation();
initScroll();
effectImage();
contactForm();
initGallery();
refreshScroll();

function navigation() {
  // Select all links with hashes
  $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function (event) {
      if ($('.navigation__checkbox').prop('checked')) {
        $('.navigation__checkbox').prop('checked', false)
      } else {
        if (this.hash.slice(1) == 'popup' || $(this).hasClass('popup-close-id')) {
          if ($(this).hasClass('popup-close-id')) {
            if ($(this).data('trigger')) {
              $('#' + $(this).data('trigger')).trigger('click');
            }
          } else {
            if ($(this).data('trigger')) {
              switch ($(this).data('trigger')) {
                case 'form-contact-tab-1':
                  $('#popup-title').html('Movements');
                  $('#popup-content').html(
                    '<span>Our professional Drivers are available on-demand for your driven movement, we offer a strong \'Plated Movement\' area where vehicles are not taxed - We are experienced in new vehicle delivery and end of life movements needs too. Although we are based in Nottingham, we are able to collect vehicles nationwide and deliver to anywhere within the UK Mainland.</span>' +
                    '<span>JK Movements & Detailing makes sure your pride and joy is transported discreetly and sheltered from the elements with our ‘Covered Transporters’ that are fitted with state of the art CCTV & Tracking equipment allowing us to see where your car is at all times giving our customers ultimate Peace of Mind whilst their car is with us. In addition, we have a high level of goods in transit insurance.</span>' +
                    '<span>Our Covered Transporters have a low load angle and are wide enough to accommodate a variety of vehicles whether it is a Classic, Vintage, Prestige, Exotic or a Race car. Our close association with the Car Delivery Network, and our highly experienced network of transport companies, mean that we can deliver to the very high expectations we know the industry demands.</span>' +
                    '<span>To request any of the above services ‘Book Now’ and fill in your details or alternatively contact us directly on 07562784205. We will provide you with a no obligation quote within 24 hours of your request. We look forward to hearing from you. </span>'
                  );
                  $('#popup-img-1').attr('src', 'img/Movement_1.jpg');
                  $('#popup-img-2').attr('src', 'img/Movements_2.jpg');
                  break;
                case 'form-contact-tab-2':
                  $('#popup-title').html('Detailing');
                  $('#popup-content').html(
                    '<span>At JK Movements & Detailing we believe quality is essential to customer satisfaction. Anyone can wash a car, but only a professional Detailer can give your car the care it deserves. With this in mind, I extend an invitation for you to experience excellence. JK Movements & Detailing has become a staple for Exotic and Luxury vehicle care in the UK. </span>' +
                    '<span>Car enthusiasts and collectors in the immediate area have grown to recognize our precision and passion in this industry. We are Fully Insured for that Peace of Mind. Our Fully Equipped Mobile Vans along with our experienced and certified technicians can carry out any service from Weekly maintenance routines, Annual Detailing, Paint Leveling,Paint Correction, Ceramic Coatings to Show Car Preparation. </span>' +
                    '<span>JK Movements & Detailing aims to provide you with the best results no matter which service you choose. We can help you in preparing your car for sale or maintaining the look and feel of your car all year long so you always feel like your driving a new car. We are committed to providing first class service through product research, equipment development and consistent training classes introducing new technology into the realm of detailing. </span>' +
                    '<span>To request any of the above services ‘Book Now’ and fill in your details or alternatively contact us directly on 07562784205. We will provide you with a no obligation quote within 24 hours of your request. We look forward to hearing from you.</span>'
                  );
                  $('#popup-img-1').attr('src', 'img/Detailing_1.jpg');
                  $('#popup-img-2').attr('src', 'img/Detailing_2.jpg');
                  break;
                case 'form-contact-tab-3':
                  $('#popup-title').html('Events');
                  $('#popup-content').html(
                    '<span>JK Movements & Detailing have been working with Car Manufacturers and Car Dealership companies for over 18 years delivering Mobile Detailing services for up to 200 cars.</span>' +
                    '<span>JK Movements & Detailing can support events of all sizes using our network of fully trained, experienced Detailers. We would like to think that services are completely bespoke and scalable to suit your needs. Just tell us what your aim is and we will build the perfect solution for you. </span>' +
                    '<span>Whether you have 1 or 200 cars, our unique process will ensure the vehicles we hand over are exactly what you expect and if you need fully detailed cars for high profile launches, we can handle that too. If you are having a Ride n Drive, launching a new car, unveiling a new concept, hosting a motorsport event, brand immersion, dealer training or managing a press day why not talk to JK Movements & Detailing and see what we can do for you. </span>' +
                    '<span>To request any of the above services ‘Book Now’ and fill in your details or alternatively contact us directly on 07562784205. We will provide you with a no obligation quote within 24 hours of your request. We look forward to hearing from you. </span>'
                  );
                  $('#popup-img-1').attr('src', 'img/Events_1.jpg');
                  $('#popup-img-2').attr('src', 'img/Events_2.jpg');
                  break;
              }
              $('.popup-close-id').data('trigger', $(this).data('trigger'));
            } else {
              $('.popup-close-id').data('trigger', false);
            }
          }
          return;
        }
      }

      // On-page links
      if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000, function () {
            // Callback after animation
            // Must change focus!
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) { // Checking if the target was focused
              return false;
            } else {
              $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
              $target.focus(); // Set focus again
            };
          });
        }
      }
    });
}

function drawTestimonials() {
  var testList = [{
    text: '"Thank you so much for all your hard work over the four days of Festive of Speed. Your unwavering passions and enthusiasm was fabulous. Events can only ever be as good as the team that support them, so I am incredibly grateful to be able to work with such an excellent team."',
    user: 'Emma - Aston Martin (UK)'
  }, {
    text: '"I am extremely pleased with the service I receive from JK Movements & Detailing. They are punctual, courteous and very competitively priced. My car is valeted at a convenient time while I am at work and is always done to a very high standard. I have recommended you to all my family & friends. Thanks again."',
    user: 'S. Corr'
  }, {
    text: '"The service is second to none and they will arrive at your home or place of work on a day and time to suit you. Simply a great service. I would recommend their service to family and friends alike. Keep up the good work Lads!"',
    user: 'I. Price'
  }, {
    text: '"Hope that you got home safely from Le Mans it was great seeing you there. Phil and I thoroughly enjoyed the friendship and the event. I really enjoyed meeting you and your team, great bunch of lads you should be proud of them. Hope all is well , keep doing what you\'re doing, great future ahead. All the best and  warm regards."',
    user: 'Ralph M.'
  }];
  var html = '';
  for (var i = 0; i < testList.length; i++) {
    html +=
      '<div class="swiper-slide uswiper__wrapper__panel">' +
      '<div class="uswiper__wrapper__panel__content">' +
      '<p class="uswiper__wrapper__panel__content__text">' + testList[i].text + '</p>' +
      '<p class="uswiper__wrapper__panel__content__user">' + testList[i].user + '</p>' +
      '</div>' +
      '</div>';
  }
  $('#swiper-wrapper-id').append(html);
  var swiper = new Swiper('#swiper-container-id', {
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
}

function initScroll() {
  $(window).scroll(function () {
    refreshScroll();
  });
  $('#navigation-back-top').off().on('click', function () {
    $('html, body').animate({
      scrollTop: 0
    }, 600);
  });
  $('#section-feature').parallax({
    imageSrc: 'img/nat-4.png'
  });
}

function refreshScroll() {
  var scrollPos = $(window).scrollTop();
  if (scrollPos > 0) {
    $('#navigation-id').addClass('navigation--scroll');
    $('#navigation-back-top').show();
  } else {
    $('#navigation-id').removeClass('navigation--scroll');
    $('#navigation-back-top').hide();
  }
  clearTimeout(self.timeoutCheck);
  self.timeoutCheck = setTimeout(function () {
    autoActive();
  }, 50);

  function autoActive() {
    $('.navigation-tabs-id').each(function () {
      var sc = $(this);
      sc.find('a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr('href'));
        var elT = Math.floor(refElement.position().top);
        var scT = scrollPos + $('#navigation-id').outerHeight();
        if (elT <= scT && elT + refElement.height() > scT) {
          sc.find('a').removeClass('navigation--active');
          currLink.addClass('navigation--active');
        } else {
          currLink.removeClass('navigation--active');
        }
      });
    });
  }
}

function effectImage() {
  if ($('#ripple-effect-id').ripples) {
    $('#ripple-effect-id').ripples({
      resolution: 512,
      dropRadius: 20,
      perturbance: 0.01
    });
  }
}

function initGallery() {
  var gallery = $('#gallery-photos a').simpleLightbox();
  $('#gallery-photos-more').off().on('click', function () {
    var valScroll = $(window).scrollTop();
    var icon = $(this).find('i');
    if (icon.hasClass('fa-chevron-down')) {
      $('.section__tours__gallery__more__photo').addClass('section__tours__gallery__more__photo--active');
      icon.removeClass('fa-chevron-down').addClass('fa-chevron-up');
      $(this).data('scroll', valScroll);
      var last = $('.section__tours__gallery__more__photo').last();
      valScroll = last.offset().top - last.outerHeight() - $('#navigation-id').outerHeight();
    } else {
      $('.section__tours__gallery__more__photo').removeClass('section__tours__gallery__more__photo--active');
      icon.addClass('fa-chevron-down').removeClass('fa-chevron-up');
      valScroll = $(this).data('scroll');
    }
    $('html, body').animate({
      scrollTop: valScroll
    }, 600);
  });
}

function contactForm() {
  var cars = [];
  $('.form-datetime-id').each(function () {
    if ($(this).data('mode') == 'date') {
      $(this).datetimepicker({
          pickTime: false,
          format: 'dd/MM/yyyy'
        })
        .on('changeDate', function () {
          $(this).datetimepicker('hide');
        });
    } else {
      $(this).datetimepicker({
        pickSeconds: false
      });
    }
  });
  resetForms();
  $('.form-contact-iteration').each(function () {
    $(this).find('select').on('change', function () {
      var acOpt = $(this).find('option:selected').data('active');
      if (acOpt) {
        var valOpt = $(this).find('option:selected').val();
        $('.form__row__item').each(function () {
          if ($(this).data('changed') == acOpt && $(this).data('active') == valOpt) {
            $(this).removeClass('form__row__item--disabled');
            $(this).find('input').attr('required', true);
          } else if ($(this).data('changed') == acOpt && $(this).data('active') !== valOpt) {
            $(this).find('input').val('');
            $(this).addClass('form__row__item--disabled');
            $(this).find('input').removeAttr('required');
          }
        });
      }
    });
    $(this).find('.form__radio__input').on('change', function () {
      var valDisabled = $(this).data('disabled');
      var valActive = $(this).data('active');

      if (valDisabled || valActive) {
        var valData = valDisabled ? valDisabled : valActive;
        $('.form__row__item[data-disabled="' + valData + '"]').each(function () {
          if (valActive) {
            $(this).removeClass('form__row__item--disabled');
            $(this).find('input').attr('required', true);
            $(this).find('select').attr('required', true);
          }
          if (valDisabled) {
            $(this).find('input').val('');
            $(this).addClass('form__row__item--disabled');
            $(this).find('input').removeAttr('required');
            $(this).find('select').removeAttr('required');
          }
        });
      }
    });
    $(this).find('.form-radio-input-checked').trigger('change');
  });
  showTab(1);
  formDetailing();

  $('#form-contact-tab-1').off().on('click', function () {
    showTab(1);
  });

  $('#form-contact-tab-2').off().on('click', function () {
    showTab(2);
  });

  $('#form-contact-tab-3').off().on('click', function () {
    showTab(3);
  });

  $('#form-contact-1').on('submit', function (e) {
    sendEmail('Movements', $('#form-contact-1'));
    e.preventDefault();
  });

  $('#form-contact-2').on('submit', function (e) {
    sendEmail('Detailing', $('#form-contact-2'));
    e.preventDefault();
  });

  $('#form-contact-3').on('submit', function (e) {
    sendEmail('Events', $('#form-contact-3'));
    e.preventDefault();
  });

  function showTab(active) {
    $('.section__book').find('.form').addClass('section__book--hidden');
    $('#form-contact-' + active).removeClass('section__book--hidden');
    $('#form-contact-tab-wrapper').find('.section__book__form__tabs__text').removeClass(
      'section__book__form__tabs__text--active');
    $('#form-contact-tab-' + active).addClass('section__book__form__tabs__text--active');
  }

  function resetForms() {
    $('#form-contact-1').trigger('reset');
    $('#form-contact-2').trigger('reset');
    $('#form-contact-3').trigger('reset');
    $('.form__row__item').each(function () {
      if ($(this).data('changed')) {
        $(this).addClass('form__row__item--disabled');
      }
    });
  }

  function formDetailing() {
    var countId = 0;
    newTab();
    $('#form-detailing-tabs-plus').off().on('click', function () {
      newTab();
    });

    function newTab() {
      countId = countId + 1;
      var newObj = {
        id: countId
      };
      var $tab = $('<div id="tab-vehicle-' + newObj.id +
        '" class="section__book__form__tabs__text tabs-vehicle"><span>Vehicle ' + newObj.id +
        '</span><i class="delete fa fa-trash-o"></i></div>');
      $tab.off().on('click', {
        car: newObj
      }, function (e) {
        onClickTab($(e.target).hasClass('delete'), e.data.car);
      });
      $('#form-detailing-tabs').append($tab);
      cars.push(newObj);
      onClickTab(false, newObj);
    }

    function onClickTab(deleteTab, data) {
      if (deleteTab) {
        $('#tab-vehicle-' + data.id).remove();
        for (var i = 0; i < cars.length; i++) {
          if (cars[i].id == data.id) {
            if (cars[i - 1]) {
              onClickTab(false, cars[i - 1]);
            } else {
              onClickTab(false, cars[i + 1]);
            }
            cars.splice(i, 1);
            break;
          }
        }
      } else {
        changeDataTab();
        changeDataTab(data);
        refreshSelected(data);
      }
      if ($('.tabs-vehicle').length == 1) {
        $('.tabs-vehicle').find('.delete').addClass('section__book__form__tabs__text--disabled');
      } else {
        $('.tabs-vehicle').find('.delete').removeClass('section__book__form__tabs__text--disabled');
      }
    }

    function refreshSelected(tabSelected) {
      for (var i = 0; i < cars.length; i++) {
        cars[i].selected = false;
      }
      tabSelected.selected = true;
      $('#form-detailing-tabs').find('.section__book__form__tabs__text--active').removeClass(
        'section__book__form__tabs__text--active');
      $('#tab-vehicle-' + tabSelected.id).addClass('section__book__form__tabs__text--active');
    }
  }

  function changeDataTab(set) {
    var selData = {};
    if (set) {
      selData = set;
    } else {
      for (var i = 0; i < cars.length; i++) {
        if (cars[i].selected) {
          selData = cars[i];
          break;
        }
      }
    }
    $('#form-contact-2').find('.form__row__group__content').each(function () {
      var group = $(this).data('group');
      if (group !== 'Details') {
        $(this).find('.form__row__item').each(function () {
          var group = $(this).parent().data('group');
          var item = $(this).data('item');
          if (set) {
            if ($(this).find('input').length) {
              $(this).find('input').val(selData[group + '#' + item]);
            } else {
              $(this).find('select').val(selData[group + '#' + item]);
            }
          } else {
            var value = $(this).find('input').length ? $(this).find('input').val() : $(this).find('select').val();
            selData[group + '#' + item] = value;
          }
        });
      }
    });
  }

  function sendEmail(title, parent) {
    var obj = {};
    var email = '';
    changeDataTab();
    parent.find('.form__row__group__content').each(function () {
      var group = $(this).data('group');
      if (parent.attr('id') == 'form-contact-2') {
        if (group == 'Details') {
          encodeGeral($(this));
          for (var i = 0; i < cars.length; i++) {
            var titles = [];
            obj['Vehicle ' + i] = [];
            for (var prop in cars[i]) {
              if (prop !== 'id' && prop !== 'selected' && cars[i][prop] !== '') {
                var tit = prop.substring(0, prop.indexOf('#'));
                if (titles.indexOf(tit) == -1) {
                  obj['Vehicle ' + i].push({
                    title: tit
                  });
                  titles.push(tit);
                }
                obj['Vehicle ' + i].push({
                  prop: prop.substring(prop.indexOf('#') + 1, prop.length),
                  value: cars[i][prop]
                });
              }
            }
          }
        }
      } else {
        encodeGeral($(this));
      }

      function encodeGeral(sc) {
        obj[group] = obj[group] ? obj[group] : [];
        sc.find('.form__row__item').each(function () {
          var item = $(this).data('item');
          var value = '';
          if ($(this).find('input').length) {
            value = $(this).find('input').val();
          }
          if ($(this).find('select').length) {
            value = $(this).find('select').val();
          }
          if ($(this).find('textarea').length) {
            value = $(this).find('textarea').val();
          }
          if (value !== '') {
            obj[group].push({
              prop: item,
              value: value
            });
            if (group == 'Details' && item == 'Email') {
              email = value;
            }
          }
        });
      }
    });
    $.ajax({
      type: "POST",
      url: "mail.php",
      data: {
        receptor: 'support@kingsmd.co.uk',
        title: title,
        email: email,
        data: obj
      },
      success: function (res) {
        resetForms();
        alert(
          'We have received your booking request and will get back to you within 24 hours.  Thanks for your patience.'
        );
      }
    });
  }
}