$(document).ready(function () {
  $("#button-inteliwise").click(function (e) {

        if ($("#button-inteliwise").attr('aria-expanded') === 'true') {
            $(this).attr('aria-expanded', 'false');
            $('#inteliwise-agent').hide();
        } else {
            $(this).attr('aria-expanded', 'true');
            $('#inteliwise-agent').show();
        }
        $("#inteliwise-agent").focus();
        e.preventDefault();
    });

  $("#yw0 .btn-success").click(function () {
    $("#closePopup").focus();
  });
});

jQuery(function () {
  jQuery('a[target="_blank"]').click(function (e) {
    if ($(this).attr('href').indexOf(window.location.host) == -1 && 
      !confirm(
        "Ten odnośnik otworzy nową kartę przeglądarki. Czy chcesz to zrobić?"
      )
    ) {
      e.preventDefault();
    }
  });
});

function initLightbox()
{
  $('.img-lightbox').each(function() {
    $(this).addClass('img-fluid');
    $(this).wrap('<a data-toggle="lightbox" data-type="image" data-title="" href="'+$(this).attr('src')+'"></a>');
    $(this).parent().click(function(e) {
      e.preventDefault();
      $( this).ekkoLightbox({
        loadingMessage : 'Trwa ładowanie zdjęcia...',
        always_show_close: true
      });
    });
  });
}

function initImageCompare()
{

  if ($('.img-compare').length > 0)
    {
      $('.img-compare:eq(0)').wrap('<figure class="cd-image-container"></figure>');
      $('.img-compare:eq(0)').after('<span class="cd-image-label" data-type="original">oryginał</span>');

      $('.cd-image-container').append('<div class="cd-resize-img"></div><span class="cd-handle"></span>');

      $('.img-compare:eq(1)').appendTo('.cd-resize-img');
      $('.img-compare:eq(1)').after('<span class="cd-image-label" data-type="modified">porównanie</span>');
    }


  var dragging = false,
        scrolling = false,
        resizing = false;
    //cache jQuery objects
    var imageComparisonContainers = $('.cd-image-container');
    //check if the .cd-image-container is in the viewport 
    //if yes, animate it
    checkPosition(imageComparisonContainers);
    $(window).on('scroll', function(){
        if( !scrolling) {
            scrolling =  true;
            ( !window.requestAnimationFrame )
                ? setTimeout(function(){checkPosition(imageComparisonContainers);}, 100)
                : requestAnimationFrame(function(){checkPosition(imageComparisonContainers);});
        }
    });
    
    //make the .cd-handle element draggable and modify .cd-resize-img width according to its position
    imageComparisonContainers.each(function(){
        var actual = $(this);
        drags(actual.find('.cd-handle'), actual.find('.cd-resize-img'), actual, actual.find('.cd-image-label[data-type="original"]'), actual.find('.cd-image-label[data-type="modified"]'));
    });

    //upadate images label visibility
    $(window).on('resize', function(){
        if( !resizing) {
            resizing =  true;
            ( !window.requestAnimationFrame )
                ? setTimeout(function(){checkLabel(imageComparisonContainers);}, 100)
                : requestAnimationFrame(function(){checkLabel(imageComparisonContainers);});
        }
    });

    function checkPosition(container) {
        container.each(function(){
            var actualContainer = $(this);
            if( $(window).scrollTop() + $(window).height()*0.5 > actualContainer.offset().top) {
                actualContainer.addClass('is-visible');
            }
        });

        scrolling = false;
    }

    function checkLabel(container) {
        container.each(function(){
            var actual = $(this);
            updateLabel(actual.find('.cd-image-label[data-type="modified"]'), actual.find('.cd-resize-img'), 'left');
            updateLabel(actual.find('.cd-image-label[data-type="original"]'), actual.find('.cd-resize-img'), 'right');
        });

        resizing = false;
    }

    //draggable funtionality - credits to http://css-tricks.com/snippets/jquery/draggable-without-jquery-ui/
    function drags(dragElement, resizeElement, container, labelContainer, labelResizeElement) {
        dragElement.on("mousedown vmousedown", function(e) {
            dragElement.addClass('draggable');
            resizeElement.addClass('resizable');

            var dragWidth = dragElement.outerWidth(),
                xPosition = dragElement.offset().left + dragWidth - e.pageX,
                containerOffset = container.offset().left,
                containerWidth = container.outerWidth(),
                minLeft = containerOffset + 10,
                maxLeft = containerOffset + containerWidth - dragWidth - 10;
            
            dragElement.parents().on("mousemove vmousemove", function(e) {
                if( !dragging) {
                    dragging =  true;
                    ( !window.requestAnimationFrame )
                        ? setTimeout(function(){animateDraggedHandle(e, xPosition, dragWidth, minLeft, maxLeft, containerOffset, containerWidth, resizeElement, labelContainer, labelResizeElement);}, 100)
                        : requestAnimationFrame(function(){animateDraggedHandle(e, xPosition, dragWidth, minLeft, maxLeft, containerOffset, containerWidth, resizeElement, labelContainer, labelResizeElement);});
                }
            }).on("mouseup vmouseup", function(e){
                dragElement.removeClass('draggable');
                resizeElement.removeClass('resizable');
            });
            e.preventDefault();
        }).on("mouseup vmouseup", function(e) {
            dragElement.removeClass('draggable');
            resizeElement.removeClass('resizable');
        });
    }

    function animateDraggedHandle(e, xPosition, dragWidth, minLeft, maxLeft, containerOffset, containerWidth, resizeElement, labelContainer, labelResizeElement) {
        var leftValue = e.pageX + xPosition - dragWidth;   
        //constrain the draggable element to move inside his container
        if(leftValue < minLeft ) {
            leftValue = minLeft;
        } else if ( leftValue > maxLeft) {
            leftValue = maxLeft;
        }

        var widthValue = (leftValue + dragWidth/2 - containerOffset)*100/containerWidth+'%';
        
        $('.draggable').css('left', widthValue).on("mouseup vmouseup", function() {
            $(this).removeClass('draggable');
            resizeElement.removeClass('resizable');
        });

        $('.resizable').css('width', widthValue); 

        updateLabel(labelResizeElement, resizeElement, 'left');
        updateLabel(labelContainer, resizeElement, 'right');
        dragging =  false;
    }

    function updateLabel(label, resizeElement, position) {
        if(position == 'left') {
            ( label.offset().left + label.outerWidth() < resizeElement.offset().left + resizeElement.outerWidth() ) ? label.removeClass('is-hidden') : label.addClass('is-hidden') ;
        } else {
            ( label.offset().left > resizeElement.offset().left + resizeElement.outerWidth() ) ? label.removeClass('is-hidden') : label.addClass('is-hidden') ;
        }
    }
}

jQuery(document).ready(function ($) {
  "use strict";

  
  
  $(".item-category-list")
    .click(function () {
      window.location.href = $(this).find("a").attr("href");
    })
    .css("cursor", "pointer");

  // autoplay videos
  if ($("video").length > 0) {
    $("video").eq(0)[0].muted = true;
    $("video").eq(0)[0].play();
  }

  
  $("#toggle-wai").click(function () {
    if ($("body").hasClass("contrast")) {
      $.cookie("wai", "0");
      $("body").removeClass("contrast");
    } else {
      $.cookie("wai", "1");
      $("body").addClass("contrast");
    }
  });

  // articles filters
  $(".filters .sort a:eq(0)").click(function (e) {
    $(".filters .sort a").removeClass("active");
    $(this).addClass("active");

    e.preventDefault();
    $(".list").addClass("articles-list");
  });

  $(".filters .sort a:eq(1)")
    .click(function (e) {
      $(".filters .sort a").removeClass("active");
      $(this).addClass("active");

      e.preventDefault();
      $(".list").removeClass("articles-list");
    })
    .trigger("click");

  // sliders

  $(".showBaseUl").click(function () {
    $(this)
      .find(".base-ul")
      .slideToggle("fast", function () {
        $(this).parent().toggleClass("open");
      });
  });

    
    initLightbox();
    initImageCompare();

    $('.img-slider').each(function() {
        if ($(this).next().is('br'))
        {
            $(this).next().remove();
        } 
    }); 
    if ($('.img-slider').length > 0)
    {  
        $('.img-slider').wrapAll('<div class="img-slider-wrapper" />');
        $('.img-slider').css('display', 'block').wrap('<div class="img-slider-single" />');
        $('.img-slider-single').each(function() {
            if (typeof $(this).find('img').attr('alt') != 'undefined' && $(this).find('img').attr('alt').length > 0)
            {
                $(this).append('<div class="bx-caption"><span>'+$(this).find('img').attr('alt')+'</span></div>');
            }
        });

        $('.img-slider-wrapper').bxSlider({
            mode: 'fade',
            captions: true,
            /*slideWidth: 900,*/
            adaptiveHeight: true,
            controls: true,
            pager: false
        }); 
    }
 
    var pdfIdx = 0;
    $('a.pdf-preview').each(function() {
        console.log('found pdf: '+$(this).attr('href'));

        var url = $(this).attr('href');

        $(this).replaceWith('<div id="pdf-preview-'+pdfIdx+'" style="margin: 0 auto; width: 100%; height: 600px; position:relative;"></div>');

        $("#pdf-preview-"+pdfIdx).flipBook({
            pdfUrl: url,
            btnNext: {
                enabled: true,
                title: "Następna strona",
                icon: "fa-angle-right",
                icon2: "navigate_next"
            },
            btnLast: {
                enabled: false,
                title: "Ostatnia strona",
                icon: "fa-angle-double-right",
                icon2: "last_page"
            },
            btnPrev: {
                enabled: true,
                title: "Poprzednia strona",
                icon: "fa-angle-left",
                icon2: "navigate_before"
            },
            btnFirst: {
                enabled: false,
                title: "Pierwsza strona",
                icon: "fa-angle-double-left",
                icon2: "first_page"
            },
            btnZoomIn: {
                enabled: true,
                title: "Powiększ",
                icon: "fa-plus",
                icon2: "zoom_in"
            },
            btnZoomOut: {
                enabled: true,
                title: "Pomniejsz",
                icon: "fa-minus",
                icon2: "zoom_out"
            },
            btnToc: {
                enabled: false,
                title: "Spis treści",
                icon: "fa-list-ol",
                icon2: "toc",
            },
            btnThumbs: {
                enabled: true,
                title: "Strony",
                icon: "fa-th-large",
                icon2: "view_comfy"
            },
            btnShare: {
                enabled: false,
                title: "Udostępnij",
                icon: "fa-link",
                icon2: "share",
            },
            btnDownloadPages: {
                enabled: false,
                title: "Pobierz strony",
                icon: "fa-download",
                icon2: "file_download",
                url: "images/pages.zip",
            },
            btnDownloadPdf: {
                forceDownload: false,
                enabled: true,
                title: "Pobierz PDF",
                icon: "fa-download",
                icon2: "file_download",
                url: null, 
                openInNewWindow: true,
                name: "allPages.pdf",
            },
            btnSound: {
                enabled: true,
                title: "Głośność",
                icon: "fa-volume-up",
                iconAlt: "fa-volume-off",
                icon2: "volume_up",
            },
            btnExpand: {
                enabled: true,
                title: "Przełącz pełny ekran",
                icon: "fa-expand",
                icon2: "fullscreen",
                iconAlt: "fa-compress",
                iconAlt2: "fullscreen_exit"
            },
            btnSlideshow: {
                enabled: false,
                title: "Przełącz pokaz slajdów",
                icon: "fa-play",
                iconAlt: "fa-pause"
            },
            btnPrint: {
                enabled: false,
                title: "Drukuj",
                icon: "fa-print",
                icon2: "print",
            },
            btnAutoplay: {
                enabled: true,
                title: "Auto odtwarzanie",
                icon: "fa-play",
                iconAlt:"fa-pause"
            },
            btnSearch: {
                enabled: false,
                title: "Wyszukaj",
                icon: "fas fa-search",
                icon2: "search"

            },
            btnBookmark: {
                enabled: false,
                title: "Zakładka",
                icon: "fas fa-bookmark",
                icon2: "fas fa-bookmark"

            },
            btnSelect: {
                enabled: true,
                title: "Wybierz narzędzie",
                icon: "fas fa-i-cursor",
            },
            strings : {
                thumbnails : 'Miniatury'
            }
        });

        pdfIdx++; 
    });

});

function drags(dragElement, resizeElement, container) {
   dragElement.on("mousedown vmousedown", function(e) {
      dragElement.addClass('draggable');
      resizeElement.addClass('resizable');

      var dragWidth = dragElement.outerWidth(),
          xPosition = dragElement.offset().left + dragWidth - e.pageX,
          containerOffset = container.offset().left,
          containerWidth = container.outerWidth(),
          minLeft = containerOffset + 10,
          maxLeft = containerOffset + containerWidth - dragWidth - 10;
        
      dragElement.parents().on("mousemove vmousemove", function(e) {
         leftValue = e.pageX + xPosition - dragWidth;
            
         //constrain the draggable element to move inside its container
         if(leftValue < minLeft ) {
            leftValue = minLeft;
         } else if ( leftValue > maxLeft) {
            leftValue = maxLeft;
         }

         widthValue = (leftValue + dragWidth/2 - containerOffset)*100/containerWidth+'%';

         $('.draggable').css('left', widthValue).on("mouseup vmouseup", function() {
            $(this).removeClass('draggable');
            resizeElement.removeClass('resizable');
         });

         $('.resizable').css('width', widthValue); 

         //function to upadate images label visibility here
         // ...

      }).on("mouseup vmouseup", function(e){
         dragElement.removeClass('draggable');
         resizeElement.removeClass('resizable');
      });
      e.preventDefault();
   }).on("mouseup vmouseup", function(e) {
      dragElement.removeClass('draggable');
      resizeElement.removeClass('resizable');
   });
}

/*$(function () {
    setInterval(function () {
        $('.social-col *').attr('tabIndex', '-1');
    }, 1000);

});*/

$(function () {
  setInterval(function () {
    $(".header .bx-stop").attr("title", "Zatrzymaj slajder");
    $(".header .bx-start").attr("title", "Uruchom slajder");
    $(".header .bx-pager-link").attr("title", "Przełącz slajd");
    $(".header .bx-pager-link").each(function() {
      $(this).html('Slajd nr '+parseInt(parseInt($(this).attr('data-slide-index'))+1));
    });
    $(".header .bx-pager-item .active").attr("title", "Aktywny slajd");
    $(".subservices .bx-pager-item *").attr(
      "title",
      "Zmiana grupy wyświetlanych artykułów"
    );
  }, 1000);
});

/* $(function () {
    setInterval(function () {
        jQuery('.social *').attr('tabIndex', '-1');
    }, 1000);
}); */

var helpers = {
  printDocument: function () {
    window.print();
  },
};
