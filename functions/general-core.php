<?php
function DBConnection()
{
	return require_once('db-connection/business-pages-db.php');
}
function load_social_networks()
{
	return require_once('includes/social-share-links.php');
}
function load_header($pagetitle){
	return require_once 'includes/header.php';
}

function load_footer(){
	$current_year = date('Y');
	$footer="
	  <footer class='gibac-footer'>
      <div class='container'>
        <div class='row'>
          <div class='col m6 s12'>
            <div class='row'>
              <div class='col s12'>
                <p class='s-caption s-primary-hue-2'>
                Business Pages Malawi is a GIBAC initiative that furthers its goal of putting Malawian businesses and organisations online. The initiative aims to provide easy and affordable online presence to all businesses and organisations; small, medium and large. Be part of the digital revolution and think innovation</p>
              </div>
            </div>
            <div class='row'>
              <div class='col push-s8'>
                   <a href='https://twitter.com/gibac' target='_blank' class='SharingBoxBtn'>
                <i alt='Facebook' title='Facebook' class='Sharing SharingBoxBtnSize GibacFacebookBackground' onclick='GibacPopup('https://www.facebook.com/')'>
                    <span class='IconPosition GibacSharingEmoji GibacFacebookEmoji'></span>
                 </i> 
             </a>
                 <a href='https://twitter.com/gibac' target='_blank' class='SharingBoxBtn'>
                 <i alt='Twitter' title='Twitter' class='Sharing SharingBoxBtnSize GibacTwitterBackground' onclick='GibacPopup('http://twitter.com/')'>
                    <span class='IconPosition GibacSharingEmoji GibacTwitterEmoji'></span>
                 </i></a>
             <a href='https://twitter.com/gibac' target='_blank' class='SharingBoxBtn'>
                 <i alt='GIBAC' title='GIBAC' class='Sharing SharingBoxBtnSize GibacWhatsappBackground' onclick='GibacPopup('http://www.gibac.com')'>
                    <span  class='IconPosition GibacSharingEmoji GibacWhatsappEmoji'></span>
                 </i>
             </a>
             <a href='https://twitter.com/gibac' target='_blank' class='SharingBoxBtn'>
                <i alt='Google Gmail' title='Google Gmail' class='Sharing SharingBoxBtnSize GibacGoogleGmailBackground' onclick='GibacPopup('http://twitter.com/')'>
                    <span class='IconPosition GibacSharingEmoji GibacGoogleGmailEmoji'></span>
                </i>
             </a>
                 <a href='https://twitter.com/gibac' target='_blank' class='SharingBoxBtn'>
                 <i alt='FB Messenger' title='FB Messenger' class='Sharing SharingBoxBtnSize GibacFacebookMessengerBackground' onclick='GibacPopup('http://twitter.com/')'>
                    <span class='IconPosition GibacSharingEmoji GibacFacebookMessengerEmoji'></span>
                 </i></a>
             <a href='https://twitter.com/gibac' target='_blank' class='SharingBoxBtn'>
                 <i alt='GIBAC Website' title='GIBAC Website' class='Sharing SharingBoxBtnSize GibacWebBackground' onclick='GibacPopup('http://www.gibac.com')'>
                    <span  class='IconPosition GibacSharingEmoji GibacWebLogo'></span>
                 </i>
             </a>
              </div>
            </div>
          </div>
          <div class='col m2 s12'>
            <b class='s-body-1 s-primary-hue-5'>Business Pages</b>
            <ul>
              <li><a class='s-primary-hue-3 s-caption ' href='#' >About</a></li>
              <li><a class='s-primary-hue-3 s-caption ' href='#' target='_blank'>Blog</a></li><li><a class='s-primary-hue-3 s-caption ' href='#' >Contact</a></li>
            </ul>
          </div>
          <div class='col m2 s12'>
            <b class='s-body-1 s-primary-hue-5'>For clients</b>
            <ul>
              <li><a class='s-primary-hue-3 s-caption ' href='#'>Discover</a></li>
              <li><a class='s-primary-hue-3 s-caption ' href='#'>How it works</a></li>
              <li><a class='s-accent-hue-2 s-caption ' href='#'>Find my agency</a></li>
            </ul>
          </div>
          <div class='col m2 s12'>
            <b class='s-body-1 s-primary-hue-5'>For agencies</b>
            <ul>
              <li><a class='s-primary-hue-3 s-caption' href='#' >Discover</a></li>
              <li><a class='s-primary-hue-3 s-caption' href='#' >How it works</a></li>
              <li><a class='s-accent-hue-3 s-caption animated infinite swing' href='#' >Get Started</a></li>
            </ul>
          </div>
        </div>
        <div class='row'>
          <div class='col m12'>
            <span class='gibac-footer-breadcrumb pull-left right-align'>
             2016 - $current_year © <a href='https://www.gibac.com' class='s-accent-hue-2 text-uppercase'>gibac mw</a> -  <span class='text-capitalized'>all right reserved</span>
              <a class='s-primary-hue-3' href='#'> Terms</a>
              <a class='s-primary-hue-3' href='#'> Privacy</a>
              <a class='s-primary-hue-3' href='#'> About</a>
              <a class='s-primary-hue-3' href='#'> Help</a>
            </span>
          </div>
        </div>
      </div>
      <div id=''>
        <button id='btnToTop' title='Go to top'>
          <span class='gibac-fa-toTop' id='gibac-fa-toTop'>
            <i class='gibac-fa-toTop fa fa-arrow-up' alt='To Top'></i>
          </span>
        </button>
      </div>
    </footer>

	</body>
	  <script src='https://code.jquery.com/jquery.js'></script>
	  <script src='js/jquery.min.js'></script>
    <script src='js/script.min.js'></script>
	  <script src='js/bootstrap.min.js'></script>
	  <script src='js/gibac-jquery.js'></script>	  
	</html>
	";
	load_social_networks();
	echo $footer;
}
?>