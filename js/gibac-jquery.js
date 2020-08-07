// Gibac sharing services (social networks)
function set_ele(set_element)
{
  check_element(set_element);
}

function GibacLoadEvent(e){
    var t = window.onload;
    if (typeof window.onload != "function"){
        window.onload=e
    }else{
        window.onload = function(){
            t();
            e()
        }
    }
};
var GibacCloseIconPath =  0;
var SharingOffset = -10
function GibacPopup(e){
        window.open(e, "popUpWindow", "height = 400, width = 600, left = 400, top = 100, resizable , scrollbars , toolbar = 0, personalbar = 0, menubar = no, location = no, directories = no, status")
}
function GibacCallAjax(e){
    if(typeof jQuery != "undefined"){
        e();
    }else{
        GibacGetScript("https://code.jquery.com/jquery-latest.min.js", e)
    }
}

function GibacGetScript(e, t){
    var n = document.createElement("script");
    n.src = e;
    var r = document.getElementsByTagName("head")[0],
    i = false;
    n.onload = n.onreadystatechange = function(){
        if(!i&&(!this.readyState||this.readyState=="loaded"||this.readyState=="complete")){
            i = true;
            t();
            n.onload = n.onreadystatechange = null;
            r.removeChild(n)
        }
    };
    r.appendChild(n)
}

/**
 * Show more sharing services popup
 */
function GibacMoreSharingPopup(elem, postUrl, postTitle, twitterTitle){
    postUrl = encodeURIComponent(postUrl);
    concate = '</ul></div><div class="footer-panel"><p></p></div></div>';
    var GibacMoreSharingServices = {
      facebook: {
        title: "Facebook",
        locale: "en-US",
        redirect_url: "http://www.facebook.com/sharer.php?u=" + postUrl + "&t=" + postTitle + "&v=3",
      },
      twitter: {
        title: "Twitter",
        locale: "en-US",
        redirect_url: "http://twitter.com/intent/tweet?text=" + (twitterTitle ? twitterTitle : postTitle) + " " + postUrl,
      },
      Facebook_Messenger: {
        title: "Facebook Messenger",
        locale: "en-US",
        redirect_url: "https://www.facebook.com/dialog/send?app_id=1904103319867886&display=popup&link="+postUrl+"&redirect_uri="+postUrl
      },
      google_mail: {
        title: "Google Gmail",
        locale: "en-US",
        redirect_url: "https://mail.google.com/mail/?ui=2&view=cm&fs=1&tf=1&su=" + postTitle + "&body=Link: " + postUrl,
      },
      whatsapp: {
        title: "Whatsapp",
        locale: "en-US",
        bookmarklet_url: "whatsapp://send?text=" + postTitle + " " + postUrl,
      }
    }
    var GibacMoreSharingServicesHtml = '<button id="multi_social_popup_close" class="close-button">&times;</button><div id="more_content" data-href="'+ decodeURIComponent(postUrl) +'"><div class="all-services"><ul class="mini">';
    for(var i in GibacMoreSharingServices){
        var tempTitle = GibacCapitaliseFirstLetter(GibacMoreSharingServices[i].title.replace(/[_. ]/g, ""));
        GibacMoreSharingServicesHtml += '<li><a rel="nofollow" class="Gibac'+i+'Share" title="'+ GibacMoreSharingServices[i].title +'" alt="'+ GibacMoreSharingServices[i].title +'" ';
        if(GibacMoreSharingServices[i].bookmarklet_url){
            GibacMoreSharingServicesHtml += 'href="' + GibacMoreSharingServices[i].bookmarklet_url + '" ';
        }else if(GibacMoreSharingServices[i].redirect_url){
            GibacMoreSharingServicesHtml += 'onclick="GibacPopup(\'' + GibacMoreSharingServices[i].redirect_url + '\')" href="javascript:void(0)" ';
        }else{
            GibacMoreSharingServicesHtml += 'href="javascript:void(0)" ';
        }
        GibacMoreSharingServicesHtml += '"><i style="width:22px;height:22px" title="'+ GibacMoreSharingServices[i].title +'" class="Sharing Gibac' + tempTitle + 'Background"><ss style="display:block;width:100%;height:100%;" class="GibacSharingEmoji Gibac' + tempTitle + 'Emoji"></ss></i>' + GibacMoreSharingServices[i].title + '</a></li>';
    }
    GibacMoreSharingServicesHtml += concate;
    
    var mainDiv = document.createElement('div');
    mainDiv.innerHTML = GibacMoreSharingServicesHtml;
    mainDiv.setAttribute('id', 'more_social_networks');
    var bgDiv = document.createElement('div');
    bgDiv.setAttribute('id', 'multi_social_popup');
    jQuery('body').append(mainDiv).append(bgDiv);
    document.getElementById('multi_social_popup').onclick = document.getElementById('multi_social_popup_close').onclick = function(){
        mainDiv.parentNode.removeChild(mainDiv);
        bgDiv.parentNode.removeChild(bgDiv);
    }
}
function GibacCapitaliseFirstLetter(e) {
    return e.charAt(0).toUpperCase() + e.slice(1)
}

jQuery(function(){
    var classes = ['vertical_sharing_icons'];
    for(var i = 0; i < classes.length; i++){
        if(jQuery('.' + classes[i]).length){
            jQuery('.' + classes[i]).each(function(){
                var verticalSharingHtml = jQuery(this).html();
                if(jQuery(this).attr('style').indexOf('right') >= 0){
                    var removeClass = 'ArrowPushIn', margin = 'Right', alignment = 'right', addClass = 'ArrowPullOut';
                }else{
                    var removeClass = 'ArrowPullOut', margin = 'Left', alignment = 'left', addClass = 'ArrowPushIn';
                }
                jQuery(this).html(verticalSharingHtml + '<div title="Hide" style="float:' + alignment + '" onclick="HideSharing(this, \''+ removeClass +'\', \''+ addClass +'\',\'' + margin +'\', \'' + alignment + '\')" class="SharingArrow ' + removeClass + '"></div>');
            });
        }
    }
});

function HideSharingVerticalBtns(elem, removeClass, addClass, margin, alignment){
    var animation = {}, counter = jQuery(elem).parent().hasClass('x'), offset = parseInt(jQuery(elem).parent().css('width')) + 10 - (counter ? 16 : 0);
    var elemOffset = jQuery(elem).parent().attr('icons-offset');
    if(elemOffset){
        var savedOffset = parseInt(elemOffset);
    }else{
        var savedOffset = (counter ? GibacCounterOffset : SharingOffset);
    }
    if(jQuery(elem).attr('title') == 'Hide'){
        animation[alignment] = "-=" + (offset + savedOffset);
        jQuery(elem).parent().animate(animation, 400, function(){
            jQuery(elem).removeClass(removeClass).addClass(addClass).attr('title', 'Share');
            if(counter){
                var cssFloat = alignment == 'left' ? 'right' : 'left';
                jQuery(elem).css('float', cssFloat);
            }else{
                jQuery(elem).css('margin' + margin, offset + 'px')
            }
        });
    }else{
        animation[alignment] = "+=" + (offset + savedOffset); 
        jQuery(elem).parent().animate(animation, 400, function(){
            jQuery(elem).removeClass(addClass).addClass(removeClass).attr('title', 'Hide');
            if(counter){
                jQuery(elem).css('float', alignment);
            }else{
                jQuery(elem).css('margin' + margin, '0px');
            }
        });
    }
}

//collapses the sidebar on window resize.
$(function() {
    $(window).bind("load resize", function() {
        var topOffset = 50;
        var width = (this.window.innerWidth > 0) ? this.window.innerWidth : this.screen.width;
        if (width < 768) {
            $('div.navbar-collapse').addClass('collapse');
            topOffset = 100; // 2-row-menu
        } else {
            $('div.navbar-collapse').removeClass('collapse');
        }

        var height = ((this.window.innerHeight > 0) ? this.window.innerHeight : this.screen.height) - 1;
        height = height - topOffset;
        if (height < 1) height = 1;
        if (height > topOffset) {
            $("#page-wrapper").css("min-height", (height) + "px");
        }
    });

    var url = window.location;
    var element = $('ul.nav a').filter(function() {
        return this.href == url;
    }).addClass('active').parent();

    while (true) {
        if (element.is('li')) {
            element = element.parent().addClass('in').parent();
        } else {
            break;
        }
    }
});

//animated navbar position controller script
function animatedNav() {
    var prevScrollpos = window.pageYOffset;
    var currentScrollPos = window.pageYOffset;
    var navBar = document.getElementById("gibac-navbar");
    if (prevScrollpos < 615) {
        navBar.style.top = "0px";
        navBar.style.width = "100%";
        navBar.style.position = "relative";
        navBar.style.transition = "0.3s ease";
    } else if (prevScrollpos > 600) {
        navBar.style.top = "64px";
        navBar.style.width = "100%";
        navBar.style.position = "fixed";
        navBar.style.transition = "0.3s ease";
    }else {
        navBar.style.top = "650px";
        navBar.style.position = "relative";
        navBar.style.width = "100%";
    }
    prevScrollpos = currentScrollPos;
}
window.onscroll = function() {
    animatedNav();
}
//gibac to top button /. When the user scrolls down 20px from the top of the document, show the button
$(document).ready(function () {
    animatedNav();
     $().btnToTop({easingType: 'easeOutQuart'});
});
(function ($) {
  $.fn.btnToTop = function (options) {
    var min = 100, inDelay = 600, outDelay = 400, scrollSpeed = 1200, easingType = 'linear';
    $('#btnToTop').hide().on('click.UItoTop', function() {
        $('html, body').animate({scrollTop: 0}, scrollSpeed, easingType);
        $('#btnToTop').stop().animate({'opacity': 0}, inDelay, easingType);
        return false;
    }).hover(function(){$('#btnToTop').stop().animate({'opacity': 0.5}, 700, 'linear');});

    $(window).scroll(function(){
        var sd = $(window).scrollTop();
        if (typeof document.body.style.maxHeight === "undefined") {
            $('#btnToTop').css({'position': 'fixed', 'top': sd + $(window).height() - 50 });
        }
        if (sd > min){
            $('#btnToTop').fadeIn(inDelay);
        }
        else{
            $('#btnToTop').fadeOut(outDelay);
        }
    });
  };
})(jQuery);