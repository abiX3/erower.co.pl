<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml"  class="theme--thejournal active-publication-masthead layout-redesign redesign-desktop-breakpoint homepage" style="" lang="en" xml:lang="en" xmlns:og="http://opengraphprotocol.org/schema/">
    <head>

        <script>
  document.cookie = "__adblocker=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
  var setNptTechAdblockerCookie = function(adblocker) {
    var d = new Date();
    d.setTime(d.getTime() + 60 * 5 * 1000);
    document.cookie = "__adblocker=" + (adblocker ? "true" : "false") + "; expires=" + d.toUTCString() + "; path=/";
  };
  var script = document.createElement("script");
  script.setAttribute("async", true);
  script.setAttribute("src", "//www.npttech.com/advertising.js");
  script.setAttribute("onerror", "setNptTechAdblockerCookie(true);");
  document.getElementsByTagName("head")[0].appendChild(script);
</script>

        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <title>The Journal</title>
        <script src="//d2wy8f7a9ursnm.cloudfront.net/v7/bugsnag.min.js"></script>
<script type="text/javascript"  src="//b0.thejournal.ie/bugsnag/js/bugsnag-fallback-dummy-object.js"></script>
<script type="application/json" id="bugsnagConfig">{"apiKey":"d8ea1607a1890612140d557a3e0159b8","releaseStage":"production","appVersion":"20230628085745"}</script>
<script>
    let bugsnagConfig = JSON.parse(document.getElementById("bugsnagConfig").innerHTML);
    Bugsnag.start(bugsnagConfig)
</script>
        
    <!-- OneTrust Cookies Consent Notice start -->
    <script src="https://cdn.cookielaw.org/scripttemplates/otSDKStub.js"
            type="text/javascript"
            charset="UTF-8"
            data-domain-script="63cd008f-9d04-450b-80d1-e1bc919d732a"
    ></script>

    <script type="text/javascript">

        if (!String.prototype.startsWith) {
            try {
                Object.defineProperty(String.prototype, 'startsWith', {
                    value: function (search, rawPos) {
                        var pos = rawPos > 0 ? rawPos | 0 : 0;
                        return this.substring(pos, pos + search.length) === search;
                    }
                });
            } catch (e) {
                String.prototype.startsWith = function (search, rawPos) {
                    var pos = rawPos > 0 ? rawPos | 0 : 0;
                    return this.substring(pos, pos + search.length) === search;
                };
            }
        }

        var CookieConsentListener = {};
        var CookieConsentRepository = {};
        var CookieConsentBanner = {};

        (function()
        {
            function CookieConsent(functional, performance, targeting)
            {
                this.functional = functional;
                this.performance = performance;
                this.targeting = targeting;
            }

            /**
             * @returns {CookieConsent}
             */
            CookieConsent.makeDefaultNoConsent = function()
            {
                var functional = false, performance = false, targeting = false;
                return new CookieConsent(functional, performance, targeting);
            };

            /**
             * @returns {CookieConsent}
             */
            CookieConsentRepository.fetch = function()
            {
                var rawConsentCookie = document.cookie
                    .split('; ')
                    .filter(function (row) {
                        return row.startsWith('OptanonConsent');
                    })[0];

                if (rawConsentCookie === undefined) {
                    return CookieConsent.makeDefaultNoConsent();
                }

                var consentCookie = new QueryString(rawConsentCookie.substring(15));

                var consentGroups = consentCookie.get('groups');

                if (!consentCookie.has('groups')) {
                    return CookieConsent.makeDefaultNoConsent();
                }

                var consentByCategory = {};

                consentGroups.split(",").forEach(function (category) {
                    var parts = category.split(":");
                    consentByCategory[parts[0]] = parts[1] === "1";
                });

                var functional = consentByCategory.C0003 === true;
                var performance = consentByCategory.C0002 === true;
                var targeting = consentByCategory.C0004 === true;

                return new CookieConsent(functional, performance, targeting);
            };

            function QueryString(stringValue)
            {
                this.valuesByKey = {};

                var keyValuePairs = stringValue.split("&");

                for (var i = 0; i < keyValuePairs.length; i++) {
                    var keyValuePair = keyValuePairs[i].split("=");
                    var key = decodeURIComponent(keyValuePair[0]);
                    var value = decodeURIComponent(keyValuePair[1]);
                    this.valuesByKey[key] = value;
                }
            }

            QueryString.prototype.get = function (key)
            {
                return this.valuesByKey[key];
            }

            QueryString.prototype.has = function (key)
            {
                return this.valuesByKey.hasOwnProperty(key);
            }

            CookieConsentListener = {
                functional: [],
                performance: [],
                targeting: [],
            };

            CookieConsentListener.onFunctionalConsentChange = function(callback)
            {
                CookieConsentListener.functional.push(callback);
            };

            CookieConsentListener.onPerformanceConsentChange = function(callback)
            {
                CookieConsentListener.performance.push(callback);
            };

            CookieConsentListener.onTargetingConsentChange = function(callback)
            {
                CookieConsentListener.targeting.push(callback);
            };

            var previousConsent = CookieConsentRepository.fetch();

            CookieConsentListener.triggerChange = function()
            {
                var consent = CookieConsentRepository.fetch();

                var key;

                if (previousConsent.functional !== consent.functional) {
                    for (key in CookieConsentListener.functional) {
                        CookieConsentListener.functional[key](consent.functional);
                    }
                }

                if (previousConsent.performance !== consent.performance) {
                    for (key in CookieConsentListener.performance) {
                        CookieConsentListener.performance[key](consent.performance);
                    }
                }

                if (previousConsent.targeting !== consent.targeting) {
                    for (key in CookieConsentListener.targeting) {
                        CookieConsentListener.targeting[key](consent.targeting);
                    }
                }

                previousConsent = consent;
            };

            CookieConsentBanner.pagesWhereBannerIsHidden = [
                "/cookies-privacy-policy/",
            ];

            CookieConsentBanner.hide = function () {
                document.getElementById("onetrust-consent-sdk").style.display = "none";
            };

            CookieConsentBanner.show = function () {
                document.getElementById("onetrust-consent-sdk").style.display = "block";
            };

            CookieConsentBanner.onCookiePreferencesClick = function (callback) {
                if (document.getElementById("ot-sdk-btn") !== null) {
                    document.getElementById("ot-sdk-btn").addEventListener("click", callback);
                }
            }
        }());

        function bootYoutubeIframes()
        {
            function consentYes()
            {
                var iframes = document.getElementsByClassName('youtube-player');
                for (var i = 0; i < iframes.length; i++) {
                    var src = iframes[i].getAttribute('data-src');
                    iframes[i].setAttribute('src', src);
                }
            }

            function consentNo()
            {
                var iframes = document.getElementsByClassName('youtube-player');
                for (var i = 0; i < iframes.length; i++) {
                    iframes[i].setAttribute('src', '');
                }
            }

            var consent = CookieConsentRepository.fetch();
            if (consent.targeting) {
                consentYes();
            }

            CookieConsentListener.onTargetingConsentChange(function(hasTargetingConsent) {
                if (hasTargetingConsent) {
                    consentYes();
                    return;
                }
                consentNo();
            });
        }

        function bootVimeoIframes()
        {
            function consentYes()
            {
                var iframes = document.getElementsByClassName('vimeo-player');
                for (var i = 0; i < iframes.length; i++) {
                    var src = iframes[i].getAttribute('data-src');
                    iframes[i].setAttribute('src', src);
                }
            }

            function consentNo()
            {
                var iframes = document.getElementsByClassName('vimeo-player');
                for (var i = 0; i < iframes.length; i++) {
                    iframes[i].setAttribute('src', '');
                }
            }

            var consent = CookieConsentRepository.fetch();
            if (consent.functional) {
                consentYes();
            }

            CookieConsentListener.onFunctionalConsentChange(function(hasFunctionalConsent) {
                if (hasFunctionalConsent) {
                    consentYes();
                    return;
                }
                consentNo();
            });
        }

        document.addEventListener("DOMContentLoaded", function(){
            bootYoutubeIframes();
            bootVimeoIframes();
        });

        window.addEventListener("message", function (event) {
            if (event.data === "openCookieConsentDialog") {
                OneTrust.ToggleInfoDisplay();
            }
        }, false);

        function OptanonWrapper()
        {
            const pageUrlPath = (new URL(window.location.href)).pathname;

            if (CookieConsentBanner.pagesWhereBannerIsHidden.includes(pageUrlPath)) {
                CookieConsentBanner.hide();
            }

            CookieConsentBanner.onCookiePreferencesClick(function () {
                CookieConsentBanner.show();
            });

            OneTrust.OnConsentChanged(function (e) {
                CookieConsentListener.triggerChange();
            });
        }
    </script>

        
                            <link rel="apple-touch-icon" sizes="180x180" href="//b0.thejournal.ie/redesign/i/thejournal/apple-touch-icon.png">
            <link rel="icon" type="image/png" sizes="32x32" href="//b0.thejournal.ie/redesign/i/thejournal/favicon-32x32.png">
            <link rel="icon" type="image/png" sizes="16x16" href="//b0.thejournal.ie/redesign/i/thejournal/favicon-16x16.png">
            <link rel="manifest" href="/site.webmanifest">
            <link rel="mask-icon" href="//b0.thejournal.ie/responsive/i/thejournal/safari-pinned-tab.svg" color="#07188a">
            <meta name="msapplication-TileColor" content="#da532c">
            <meta name="theme-color" content="#ffffff">
        
        <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:200,200i,300,300i,400,400i,600,600i,700,700i,900,900i" rel="stylesheet">
        <meta name="apple-itunes-app" content="app-id=409359491">
<script type="text/javascript">
    document.documentElement.className+=' js';
    var ajaxurl = '//www.thejournal.ie/ajax.php';
    var stats_url = 'https://www.thejournal.ie/statsscript.php';
    var current_url = 'www.thejournal.ie//b0.thejournal.ie/redesign/js/redesign-691912467d.js';
    var load_time = '2023-07-03 15:26:33';
    var current_post_id = 0;
    var current_post_permalink = '';
    var stats_key = "45e5625a6c80ca05ba6b4163207022e0";
    var wp_logged_in = false;
    var current_title = "";

    window.jrnl_social_connected = false;

    var _sf_startpt=(new Date()).getTime()

    var app_cookie_domain = '.thejournal.ie';
    var session_domain = "https://www.thejournal.ie";
    var root_domain = "thejournal.ie";
</script>
<script type="text/javascript">
    document.domain = "thejournal.ie";

    window.on_front = false;
                window.authenticator = '';
    window.login_expires = 1846247193;
    window.users_token = '';

                window.fbAsyncInit = function() {
                FB.init({appId: "116141121768215", status: true, cookie: true,
                xfbml: true});
                                        if(typeof sync_with_server != 'undefined')
                        {
                            sync_with_server();
                        }
                                    };
            (function(d){
                var js, id = 'facebook-jssdk'; if (d.getElementById(id)) {return;}
                js = d.createElement('script'); js.id = id; js.async = true;
                js.src = "//connect.facebook.net/en_US/all.js";
                d.getElementsByTagName('head')[0].appendChild(js);
            }(document));
                window.email_permission = false;
            var jrnl_social_window = null;
        function jrnl_social_login(service, submit_comment, callback) {
            var link = '';
            if(service == 'twitter')
            {
                link = "https://www.thejournal.ie/utils/login/twitter/?";
                if(submit_comment)
                {
                    link = link + "&comment=1";
                }
                else if(callback
                    && callback.length > 0
                )
                {
                    link = link + "?cb=" + callback;
                }
            }
            else if(service == 'facebook')
            {
                // Facebook link is a bit messier - need to bounce through popup
                link = "https://www.thejournal.ie/utils/login/facebook/?url=https%3A%2F%2Fwww.facebook.com%2Fdialog%2Foauth%3Fdisplay%3Dpopup%26client_id%3D116141121768215%26scope%3D" + get_fb_perm_string() + "%26redirect_uri%3Dhttps%3A%2F%2Fwww.thejournal.ie%2Futils%2Flogin%2Ffacebook%2F";
                // Are we submitting after log-in?
                if(submit_comment)
                {
                    link = link + "?comment=1";
                }
                else if(callback
                    && callback.length > 0
                )
                {
                    link = link + "?cb=" + callback;
                }
            }

            if ( jrnl_social_window != null && !jrnl_social_window.closed )
                jrnl_social_window.close();

            jrnl_social_window = window.open(
                link,
                'jrnl_social_window',
                'status,scrollbars,location,resizable,width=600,height=350'
            )
            jrnl_social_window.focus();

            return false;
        }
</script>
        <link rel="alternate" type="application/rss+xml" title="TheJournal.ie &raquo; Feed" href="/feed/" />

                    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>
            <script>
                window.jQuery || document.write('<script src="https://b0.thejournal.ie/desktop/js/jquery-1.7.2.min.js"><\/script>')
            </script>
        
        <!-- Start dmlpool Tag -->
        <script type="text/javascript" src="//pool.journalmedia.ie/js/lscache.min.js"></script>
        <script>
            var _pool = _pool || [];
            (function(){
                var s = document.createElement('script');
                s.type = 'text/javascript';
                s.async = true;
                s.src = '//pool.journalmedia.ie/js/pool.min.js';
                var x = document.getElementsByTagName('script')[0];
                x.parentNode.insertBefore(s, x);
            })();
            _pool.push(['cacheBucketLocally', ['_dml']]);

            // viewability js
            _jrnl_viewability = [];
            _jrnl_sidebar = [];
        </script>
        <!-- End dmlpool Tag -->

        <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>



        
                <script type='text/javascript'>
                    var is_box_window = false;
                    var is_box_name = '';
                </script>

            
            <script type="text/javascript" src="//b0.thejournal.ie/desktop/js/build/current-58e3bbd549.js"></script>
            <script type="text/javascript" src="//b0.thejournal.ie/desktop/js/build/legacy-common-34cfb1bda5.js"></script>

            
            <script type="text/javascript" src=""></script>

            <script defer src="https://www.gstatic.com/firebasejs/9.13.0/firebase-app-compat.js"></script>
<script defer src="https://www.gstatic.com/firebasejs/9.13.0/firebase-auth-compat.js"></script>
<script defer src="https://www.gstatic.com/firebasejs/ui/6.0.2/firebase-ui-auth.js"></script>
<link type="text/css" rel="stylesheet" href="https://www.gstatic.com/firebasejs/ui/6.0.2/firebase-ui-auth.css" />
<script type="application/json" id="firebaseConfig">{"apiKey":"AIzaSyD39iPmw7w0Tl-SXBt9dfBgWfJywmZggUU","authDomain":"www.thejournal.ie","databaseURL":"https:\/\/account-membership-prototype.firebaseio.com","projectId":"account-membership-prototype","storageBucket":"account-membership-prototype.appspot.com","messagingSenderId":"488317035541","appId":"1:488317035541:web:d743aaeed2801117"}</script>

                            <script type="text/javascript" src="//b0.thejournal.ie/redesign/js/redesign-691912467d.js" viewType="desktop"></script>
            
                    <link rel="stylesheet" type="text/css" href="//b0.thejournal.ie/desktop/css/build/desktop-2257482d53.css" />
        <link rel="stylesheet" type="text/css" href="//b0.thejournal.ie/desktop/css/build/legacy-common-a408a31177.css" />
        <link rel="stylesheet" type="text/css" href="" />
        
        <meta name="description" content="Read, share and shape the news on TheJournal.ie - Breaking Irish and International News" />
        <meta name="keywords" content="news, irish news, breaking news, irish politics, business, sports, entertainment, news blog, ireland, irish" />
        <meta name="news_keywords" content="news, irish news, breaking news, irish politics, business, sports, entertainment, news blog, ireland, irish" />
<script>
    var commentSec = {
        token : "c65560743"
    }
</script>

<script type='text/javascript'>
var googletag = googletag || {};
googletag.cmd = googletag.cmd || [];
(function() {
var gads = document.createElement('script');
gads.async = true;
gads.type = 'text/javascript';
var useSSL = 'https:' == document.location.protocol;
gads.src = (useSSL ? 'https:' : 'http:') +
'//www.googletagservices.com/tag/js/gpt.js';
var node = document.getElementsByTagName('script')[0];
node.parentNode.insertBefore(gads, node);
})();
</script>

<script type='text/javascript'>

googletag.cmd.push(function() {
    
    var consent = CookieConsentRepository.fetch();
    var areCookiesDisabled = consent.targeting ? 0 : 1;
    googletag.pubads().setCookieOptions(areCookiesDisabled);
    console.log("User Consent: Google Ads " + (consent.targeting ? "enabled" : "disabled"));

    CookieConsentListener.onTargetingConsentChange(function (hasTargetingConsent) {
        var areCookiesDisabled = hasTargetingConsent ? 0 : 1;
        googletag.pubads().setCookieOptions(areCookiesDisabled);
        googletag.pubads().refresh();
        console.log("User Consent: Google Ads " + (hasTargetingConsent ? "enabled" : "disabled"));
    });
googletag.defineSlot('/5512429/J_MPU', [["fluid"],[1,1],[300,250],[300,600]], 'div-gpt-ad-1365092406213-0').addService(googletag.pubads());
googletag.defineSlot('/5512429/J_MPU_2', [["fluid"],[1,1],[300,250],[300,600]], 'div-gpt-ad-1365092406213-1').addService(googletag.pubads());
googletag.defineSlot('/5512429/J_MPU_3', [["fluid"],[1,1],[300,250],[300,600]], 'div-gpt-ad-1365092406213-2').addService(googletag.pubads());
googletag.defineSlot('/5512429/J_MPU_4', [["fluid"],[1,1],[300,250],[300,600]], 'div-gpt-ad-1365092406213-3').addService(googletag.pubads());
googletag.defineSlot('/5512429/J_Leaderboard', [[1,1],[728,90],[970,250]], 'div-gpt-ad-1365092406213-4').addService(googletag.pubads());
googletag.pubads().setTargeting('platform', 'desktop');
googletag.pubads().setTargeting('sitemode', 'default');

googletag.pubads().setTargeting('site', 'thejournal');
googletag.pubads().setTargeting('publication', 'thejournal');
googletag.pubads().setTargeting('section', ["river","homepage"]);
googletag.pubads().setTargeting('tiling', '8');

if ($("#js-retargeting").length > 0)
{
    try
    {
        var retargeting = new RetargetingClient();
        retargeting.trackView();
    }
    catch (e)
    {
        console.error(e.message);
        console.log(e);
    }
}

//googletag.pubads().disableInitialLoad();
if(lscache && Object.keys)
{
    var _dml = Object.keys(lscache.getBucket('_dml')).join(",");
    googletag.pubads().setTargeting('_dml', _dml);
}

    googletag.pubads().setTargeting('weatherstate', "12");

    googletag.pubads().enableLazyLoad({
        // Fetch slots within 2 viewports.
        fetchMarginPercent: 200,
        // Render slots within 1 viewports.
        renderMarginPercent: 100,
        // Double the above values on mobile, where viewports are smaller
        // and users tend to scroll faster.
        mobileScaling: 2.0
    });

    // Just for debug purposes...
    googletag.pubads().addEventListener('slotRequested', function(event) {
        console.log("Fetched:" + event.slot.getAdUnitPath());
    });
    googletag.pubads().addEventListener('slotOnload', function(event) {
        console.log("Loaded:" + event.slot.getAdUnitPath());
    });

googletag.pubads().enableSingleRequest();

    googletag.pubads().collapseEmptyDivs();
    googletag.enableServices();

    googletag.pubads().addEventListener('slotOnload', function(event) {
        if (event.slot.getAdUnitPath() === "/5512429/J_Riverblock") {
            let adContainer = document.getElementById("mid-article-riverblock");
            let adFrame = adContainer.querySelector("iframe");

            let adFrameIsDisplayed = adFrame.style.display !== "none";
            let adSizeIs1x1 = adFrame.width === "1" && adFrame.height === "1";

            if (adFrameIsDisplayed && !adSizeIs1x1) {
                adContainer.style.display = "block";
            }
        }
    });

});


dfpLoadCheck('div-gpt-ad-1365092406213-4');

</script>
        <!-- IE9 Pinning -->
        <meta name="application-name" content="TheJournal" />
        <meta name="msapplication-tooltip" content="TheJournal.ie - Read, Share and Shape the news" />
        <meta name="msapplication-starturl" content="https://www.thejournal.ie/" />
        <meta name="msapplication-task" content="name=The 9 at 9;action-uri=https://www.thejournal.ie/9at9;icon-uri=//b0.thejournal.ie/redesign/i/thejournal/favicon.ico" />
        <meta name="msapplication-task" content="name=The 42;action-uri=https://www.the42.ie/;icon-uri=//b0.thejournal.ie/desktop/i/the42/favicon.ico" />
        <meta name="msapplication-task" content="name=Business Etc;action-uri=https://businessetc.thejournal.ie/;icon-uri=//b0.thejournal.ie/desktop/i/businessetc/favicon.ico" />
        <meta name="msapplication-task" content="name=DailyEdge.ie;action-uri=https://thedailyedge.thejournal.ie/;icon-uri=//b0.thejournal.ie/desktop/i/thedailyedge/favicon.ico" />
        <meta name="msapplication-task" content="name=Irish News;action-uri=https://www.thejournal.ie/irish/;icon-uri=//b0.thejournal.ie/redesign/i/thejournal/favicon.ico" />
        <!-- /IE9 Pinning -->


        <script src='https://www.google.com/recaptcha/api.js'></script>
                    <script>
                document.querySelectorAll("a").forEach(function (el) {
                    el.addEventListener("click", e => {
                        e.target.href += "?redesign";
                    });
                });
            </script>
            <style>
                .responsive-top-stories {
                    float: none;
                    margin-left: auto;
                    margin-right: auto;
                }
                .responsive-article.desktop,
                .responsive-ad-container.desktop,
                .responsive-article.voices.desktop,
                .roundup.desktop,
                .article-divider.desktop
                {
                    width: 650px;
                    margin-left: auto;
                    margin-right: auto;
                }
                .post,
                .articleExtraDetails,
                .read_next_block.in_article,
                #comments,
                .new_river_header {
                    max-width: 650px;
                }

                #cao-results {
                    max-width: 630px;
                }
            </style>
        
                    <link rel="stylesheet" type="text/css" href="//b0.thejournal.ie/redesign/css/main-redesign-0aa27b8dec.css" />
            </head>

    
    <!--[if IE 6]><body class="ie ie6 ie-lt8 "><![endif]-->
    <!--[if IE 7]><body class="ie ie7 ie-lt8 "><![endif]-->
    <!--[if IE 8]><body class="ie ie8 "><![endif]-->
    <!--[if gte IE 9]><body class="ie9up "><![endif]-->
    <!--[if !IE]><!-->
    <body class="nie ">
    <!--<![endif]-->
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-17456403-37"></script>
<script type="application/json" id="gtag-property-ids">["UA-17456403-37"]</script>
<script type="text/javascript">
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}

    (function(){

        function GoogleAnalytics(propertyIds, userId) {
            this.propertyIds = propertyIds;
            this.userId = userId;
            this.hasSentPageView = false;
        }

        GoogleAnalytics.prototype.disableCookies = function () {
            this.propertyIds.forEach(function (propertyId) {
                window['ga-disable-' + propertyId] = true;
            });
        };

        GoogleAnalytics.prototype.enableCookies = function () {
            this.propertyIds.forEach(function (propertyId) {
                window['ga-disable-' + propertyId] = false;
            });
        };

        GoogleAnalytics.prototype.sendPageView = function () {
            if (this.hasSentPageView !== false) {
                return;
            }

            gtag('event', 'page_view');

            this.hasSentPageView = true;
        };

        GoogleAnalytics.prototype.load = function () {
            var config = this.addUserIdToConfig(config = {
                send_page_view: false,
            });

            gtag('js', new Date());
            this.propertyIds.forEach(function (propertyId) {
                gtag('config', propertyId, config);
            });
        };

        GoogleAnalytics.prototype.consentGrantedOnLoad = function () {
            this.enableCookies();
            this.load();
            this.sendPageView();
        };

        GoogleAnalytics.prototype.consentGrantedByUser = function () {
            this.enableCookies();
            this.sendPageView();
        }

        GoogleAnalytics.prototype.consentRevokedOnLoad = function () {
            this.disableCookies();
            this.load();
        }

        GoogleAnalytics.prototype.consentRevokedByUser = function () {
            this.disableCookies();
        }

        GoogleAnalytics.prototype.addUserIdToConfig = function (config) {
            if (this.userId) {
                config.user_id = this.userId;
                config.dimension10 = this.userId;
            }

            return config;
        }

        function boot(userId)
        {
            var googleAnalytics = new GoogleAnalytics(
                JSON.parse(document.getElementById("gtag-property-ids").innerText),
                userId
            );

            if (CookieConsentRepository.fetch().performance) {
                googleAnalytics.consentGrantedOnLoad();
            } else {
                googleAnalytics.consentRevokedOnLoad();
            }

            CookieConsentListener.onPerformanceConsentChange(function(hasPerformanceConsent) {
                if (hasPerformanceConsent) {
                    googleAnalytics.consentGrantedByUser();
                } else {
                    googleAnalytics.consentRevokedByUser();
                }
            });
        }

        function waitForFirebaseAuth() {
            return new Promise(function (resolve, reject) {
                if (!window.firebase) {
                    reject("Firebase is not available");
                }

                var removeAuthStateObserver = firebase.auth().onAuthStateChanged(function (user) {
                    removeAuthStateObserver();
                    resolve(user);
                }, reject);
            });
        }

        document.addEventListener('DOMContentLoaded', function() {
            waitForFirebaseAuth().then(
                function (firebaseUser) {
                    boot(firebaseUser ? firebaseUser.uid : undefined);
                },
                function ()  {
                    boot();
                }
            );
        });
    }());
</script>
<script type="application/json" id="hotjar-site-id">"3463750"</script>
<script>
    (function () {
        function consentYes() {
            var siteId = JSON.parse(document.getElementById("hotjar-site-id").innerText);

            (function(h,o,t,j,a,r){
                h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                h._hjSettings={hjid:siteId,hjsv:6};
                a=o.getElementsByTagName('head')[0];
                r=o.createElement('script');r.async=1;
                r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                a.appendChild(r);
            })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
        }

        function consentNo() {
            //
        }

        function boot() {
            var consent = CookieConsentRepository.fetch();
            if (consent.performance) {
                consentYes();
            } else {
                consentNo();
            }
            CookieConsentListener.onPerformanceConsentChange(function (hasPerformanceConsent) {
                if (hasPerformanceConsent) {
                    consentYes();
                } else {
                    consentNo();
                }
            });
        }

        boot();
    })();
</script>
<div class="page-section-redesign leaderboard-above-redesign"><div id="header_leaderboard_container">
    <center id="header_leaderboard" class="header_leaderboard _leaderboard">
        <span class="information">Advertisement</span>
        <div style='width: 970px;'><div id='div-gpt-ad-1365092406213-4'>
<script type='text/javascript'>
googletag.cmd.push(function() { googletag.display('div-gpt-ad-1365092406213-4'); });
</script>
</div></div>    </center>
</div>
</div>        <section id="contribution-prompt-overlay">
    <div class="text-content">
        <p class="title">Readers like you keep news free for everyone.</p>
        <p>
            More than 5,000 readers have already pitched in to keep <b>free access to The Journal.</b>
        </p>
        <p>
            For the price of one cup of coffee each week you can help keep paywalls away.
        </p>
    </div>
    <div class="contribution-prompt-buttons">
        <a class="contribution-prompt-support-btn" href="/contribute?utm_source=thejournal&utm_medium=overlay-prompt&utm_campaign=free-access">
            Support us today
        </a>
        <div class="contribution-prompt-continue-btn close-button">Not now</div>
    </div>
</section>

            

<div class="page-section-redesign masthead-redesign">

    <nav id="main-navigation">
    <div class="main-navigation-content">
        
        <div class="main-navigation-menu">
            <div>
                <ul class="nav-categories-redesign">
                                            <li >
                            <a href="https://www.thejournal.ie/irish/">
                                Irish News
                            </a>
                        </li>
                                            <li >
                            <a href="https://www.thejournal.ie/factcheck/news/">
                                FactCheck
                            </a>
                        </li>
                                            <li >
                            <a href="https://www.thejournal.ie/voices/">
                                Voices
                            </a>
                        </li>
                                            <li >
                            <a href="https://www.thejournal.ie/climate-change/news/">
                                Climate Crisis
                            </a>
                        </li>
                                            <li >
                            <a href="https://www.thejournal.ie/ukraine/news/">
                                Ukraine
                            </a>
                        </li>
                                    </ul>
            </div>

            <div class="nav-additions-redesign">
                <a class="additional-button-redesign" href="/contribute?utm_source=thejournal&utm_medium=masthead" data-analytics-label="Contribute [Nav Button]">Support Us</a>

                <div id="main-nav-toggle-handler" class="nav-toggle-redesign">
                    <div class="nav-toggle-open">
                        <svg width="26" height="16" viewBox="0 0 26 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line x1="1" y1="1" x2="25" y2="1" stroke="white" stroke-width="2" stroke-linecap="round"/>
                            <line x1="1" y1="8" x2="21" y2="8" stroke="white" stroke-width="2" stroke-linecap="round"/>
                            <line x1="1" y1="15" x2="25" y2="15" stroke="white" stroke-width="2" stroke-linecap="round"/>
                        </svg>
                    </div>
                    <div class="nav-toggle-close hidden">
                        <svg width="30" height="30" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.16602 9.16602L16.8327 16.8327" stroke="white"
                                stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M16.8327 9.16602L9.16602 16.8327" stroke="white"
                                stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>
                </div>

            </div>
        </div>
    </div>
</nav>


    <div class=" page-section-redesign">
        <div id="main-nav-dropdown" class="closed">
            <a class="left-link-section"
                href="https://www.thejournal.ie/the-explainer/news/?utm_source=thejournal&utm_medium=menu"
                data-analytics-label="The Explainer">
                <div class="details">
                    <div class="heading">Weekly Podcast</div>
                    <div class="title">The Explainer</div>
                    <div class="description">The Explainer is a weekly podcast from TheJournal.ie that takes a deeper look at one big news story you need to know about. Listen now wherever you get your podcasts</div>
                </div>
            </a>
            <div class="options">
                <div class="sections">
                                        <div class="section">
                        <div class="heading">Newsletters : Sign Up</div>
                        <ul class="section-links">
                                                        <li><a href="https://www.thejournal.ie/climate-newsletter-temperature-check-5650289-Jan2022/">Temperature Check</a></li>
                                                        <li><a href="https://www.thejournal.ie/sign-up-factcheck-newsletter-2-5853406-Aug2022/">FactCheck</a></li>
                                                        <li><a href="https://www.thejournal.ie/stardust-inquests-newsletter-2-6053078-Apr2023/">The Stardust Inquests</a></li>
                                                        <li><a href="https://www.thejournal.ie/inside-the-newsroom-2-6047744-Apr2023/">Inside The Newsroom</a></li>
                                                    </ul>
                    </div>
                                        <div class="section">
                        <div class="heading">Sections & Topics</div>
                        <ul class="section-links">
                                                        <li><a href="https://www.thejournal.ie/climate-change/news/">Climate Crisis</a></li>
                                                        <li><a href="https://www.thejournal.ie/business/">Business</a></li>
                                                        <li><a href="https://www.thejournal.ie/international/">International</a></li>
                                                        <li><a href="https://www.thejournal.ie/politics/">Politics</a></li>
                                                        <li><a href="https://www.thejournal.ie/culture/">Culture</a></li>
                                                        <li><a href="https://www.thejournal.ie/housing/news/">Housing</a></li>
                                                    </ul>
                    </div>
                                    </div>
                <div class="partner-pubs-holder">
                    <div class="heading">
                        Partner Publications
                    </div>
                    <div class="partner-pubs">
                                                <a class="partner" href="https://www.the42.ie/" data-analytics-label="The 42"
                            target="_blank">
                            <div class="title">
                                The 42
                            </div>
                            <div class="description">
                                The latest Irish and international sports news for readers and subscribers
                            </div>
                        </a>
                                                <a class="partner" href="https://www.noteworthy.ie/" data-analytics-label="Noteworthy"
                            target="_blank">
                            <div class="title">
                                Noteworthy
                            </div>
                            <div class="description">
                                A platform helping fund the type of in-depth journalism that the public wants to see
                            </div>
                        </a>
                                            </div>
                </div>
                <a class="btn-support"
                    href="https://www.thejournal.ie/contribute/?utm_source=thejournal&utm_medium=menu">
                    <span class="text">Support The Journal</span>
                    <img class="arrow" src=" //b0.thejournal.ie/desktop/i/contribution-prompt/link-arrow.svg">
                </a>
            </div>
        </div>
    
    </div>

    <header>
        <div class="current-information-redesign">
            <span class="date-redesign">Monday 3 July 2023</span>
            <a href="/weather" class="weather-redesign">
                                    <img src="//b0.thejournal.ie/desktop/i/thejournal/weather-icons/12.svg" class="weather-icon-redesign">
                                                    <span>Dublin: 15°C</span>
                            </a>
        </div>
        <div class="logo-redesign">
            <a href="https://www.thejournal.ie/" data-analytics-label="Homepage">
                <svg width="480" height="82" viewBox="0 0 480 82" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M455.247 37.9895C455.247 24.2647 448.629 17.4023 436.008 17.4023C424.734 17.4023 417.259 23.0393 412.724 30.5144L416.033 33.8231C420.69 28.9214 426.204 26.348 432.454 26.348C439.439 26.348 442.87 29.7792 442.87 37.9895V39.3375C418.852 41.4207 411.009 48.4057 411.009 58.6993C411.009 67.2773 416.768 72.7917 426.449 72.7917C434.169 72.7917 440.051 69.3605 442.993 64.3362C443.115 66.9096 443.36 69.3605 443.605 71.9339H456.227C455.614 66.0518 455.247 60.6599 455.247 55.8808V38.1121V37.9895ZM431.841 64.8264C426.817 64.8264 423.753 62.0079 423.753 56.8611C423.753 50.734 427.675 47.3028 442.87 45.2196V56.0033C442.87 57.5964 442.87 59.0669 442.993 60.5374C440.051 63.2334 436.375 64.8264 431.841 64.8264Z" fill="white"/>
                    <path d="M87.9855 17.4011C80.7555 17.4011 74.9959 20.7097 71.8098 26.9594V0L58.8203 2.08324V71.9326H71.8098V30.8808C75.241 28.1849 79.1624 26.8369 83.3289 26.8369C89.5785 26.8369 92.5196 30.2681 92.5196 37.6206V71.9326H105.509V35.7825C105.509 24.5086 98.7692 17.4011 87.9855 17.4011Z" fill="white"/>
                    <path d="M466.888 1.96069V71.9326H480V0L466.888 1.96069Z" fill="white"/>
                    <path d="M1.10288 2.57422L0 10.5395L19.7294 9.68172V71.9334H33.8218V9.68172L54.0414 10.5395L52.8159 2.57422H1.10288Z" fill="white"/>
                    <path d="M296.676 60.0468C293.367 62.7427 289.936 63.9682 285.77 63.9682C279.397 63.9682 276.579 60.4145 276.579 53.1844V17.8921L263.467 19.7302V54.9C263.467 66.174 269.594 72.6687 280.745 72.6687C287.853 72.6687 293.49 69.7277 296.921 63.8456L297.289 71.8109H309.298V17.7695L296.676 19.8528V60.0468Z" fill="white"/>
                    <path d="M386.133 17.4023C378.535 17.4023 372.653 20.9561 369.467 27.8185V17.8925L356.478 19.7306V71.8113H369.467V31.1272C373.021 28.0636 377.187 26.7156 381.354 26.7156C387.726 26.7156 390.544 30.0242 390.544 37.4994V71.8113H403.657V35.7838C403.657 24.5098 396.917 17.4023 386.133 17.4023Z" fill="white"/>
                    <path d="M332.213 28.9213V18.015L319.591 19.8531V71.9338H332.458V33.7005C337.36 30.1467 343.487 28.7987 349.859 30.0242L349.124 18.2601C341.036 16.5445 334.664 20.7109 332.213 28.9213Z" fill="white"/>
                    <path d="M182.466 53.7971C182.466 67.2768 179.402 74.5069 171.314 77.693L172.05 81.1241C188.961 79.8987 196.558 70.9531 196.558 53.7971V2.57422H182.466V53.7971Z" fill="white"/>
                    <path d="M141.292 63.7235C130.753 63.7235 125.361 56.4935 125.238 43.5039L159.305 44.1167C160.898 26.7156 152.811 17.4023 137.983 17.4023C122.175 17.4023 112.126 28.4312 112.126 45.4646C112.126 62.0079 121.44 72.7917 137.125 72.7917C147.051 72.7917 155.384 68.2576 160.163 60.0472L156.855 56.9836C152.688 61.5177 147.296 63.7235 141.292 63.7235ZM137.37 22.9168C144.355 22.9168 147.419 28.4312 146.316 37.3768L125.238 38.3572C126.096 28.6763 130.14 22.9168 137.37 22.9168Z" fill="white"/>
                    <path d="M230.012 17.4023C213.224 17.4023 203.543 28.4312 203.543 45.4646C203.543 62.253 213.101 72.9142 230.012 72.9142C247.046 72.9142 256.481 62.3755 256.481 45.4646C256.604 28.4312 246.923 17.4023 230.012 17.4023ZM230.012 66.7871C222.047 66.7871 217.635 59.557 217.635 45.3421C217.635 31.0046 222.047 23.5295 230.012 23.5295C237.977 23.5295 242.389 31.0046 242.389 45.3421C242.389 59.557 237.977 66.7871 230.012 66.7871Z" fill="white"/>
                </svg>
            </a>
        </div>
    </header>


</div>

<div class="page-section-redesign">
<div id="main-nav-dropdown" class="closed">
    <a class="left-link-section"
       href="https://www.thejournal.ie/the-explainer/news/?utm_source=thejournal&utm_medium=menu"
       data-analytics-label="The Explainer">
        <div class="details">
            <div class="heading">Weekly Podcast</div>
            <div class="title">The Explainer</div>
            <div class="description">The Explainer is a weekly podcast from TheJournal.ie that takes a deeper look at one big news story you need to know about. Listen now wherever you get your podcasts</div>
        </div>
    </a>
    <div class="options">
        <div class="sections">
                        <div class="section">
                <div class="heading">Newsletters : Sign Up</div>
                <ul class="section-links">
                                        <li><a href="https://www.thejournal.ie/climate-newsletter-temperature-check-5650289-Jan2022/">Temperature Check</a></li>
                                        <li><a href="https://www.thejournal.ie/sign-up-factcheck-newsletter-2-5853406-Aug2022/">FactCheck</a></li>
                                        <li><a href="https://www.thejournal.ie/stardust-inquests-newsletter-2-6053078-Apr2023/">The Stardust Inquests</a></li>
                                        <li><a href="https://www.thejournal.ie/inside-the-newsroom-2-6047744-Apr2023/">Inside The Newsroom</a></li>
                                    </ul>
            </div>
                        <div class="section">
                <div class="heading">Sections & Topics</div>
                <ul class="section-links">
                                        <li><a href="https://www.thejournal.ie/climate-change/news/">Climate Crisis</a></li>
                                        <li><a href="https://www.thejournal.ie/business/">Business</a></li>
                                        <li><a href="https://www.thejournal.ie/international/">International</a></li>
                                        <li><a href="https://www.thejournal.ie/politics/">Politics</a></li>
                                        <li><a href="https://www.thejournal.ie/culture/">Culture</a></li>
                                        <li><a href="https://www.thejournal.ie/housing/news/">Housing</a></li>
                                    </ul>
            </div>
                    </div>
        <div class="partner-pubs-holder">
            <div class="heading">
                Partner Publications
            </div>
            <div class="partner-pubs">
                                <a class="partner" href="https://www.the42.ie/" data-analytics-label="The 42" target="_blank">
                    <div class="title">
                        The 42
                    </div>
                    <div class="description">
                        The latest Irish and international sports news for readers and subscribers
                    </div>
                </a>
                                <a class="partner" href="https://www.noteworthy.ie/" data-analytics-label="Noteworthy" target="_blank">
                    <div class="title">
                        Noteworthy
                    </div>
                    <div class="description">
                        A platform helping fund the type of in-depth journalism that the public wants to see
                    </div>
                </a>
                            </div>
        </div>
        <a class="btn-support"
           href="https://www.thejournal.ie/contribute/?utm_source=thejournal&utm_medium=menu"
        >
            <span class="text">Support The Journal</span>
            <img class="arrow" src="//b0.thejournal.ie/desktop/i/contribution-prompt/link-arrow.svg">
        </a>
    </div>
</div>

</div>


        <div class="page-section river-container-redesign">
        <div class="mainContainer content" id="scroll-header">
                                            <script type="text/javascript">
(function () {
    var today = new Date();
    var key = "hp-thejournal-" + today.getDate() + "-" + (today.getMonth()+1) + "-" + today.getFullYear();
        var ttl = 64800;
    window._pool.push(['add', ['_dml', key, ttl]]);
})();
</script>
<div class="mainContent container">
<div class="river span-8">

    <div class="post postMain post404">

        <h2>Page Not Found</h2>

        <div class="text">
            <p>Oh no! We can&rsquo;t find the page you&rsquo;re looking for.</p>
            <ul>
                <li>
                    <p>Try searching for what you&rsquo;re looking for:</p>
                    <form method="get" class="searchform" action="/submit.php">
                        <input type="text" value="b0.thejournal.ie redesign js redesign d.js" size="40" name="st" class="s">
                        <input type="submit" class="searchsubmit" value="Search">
                    </form>
                </li>
                <li>Or <a href="https://www.thejournal.ie">head back to the home page</a>...</li>
                <li>Or <a href="https://www.thejournal.ie/contact/">get in touch</a>.</li>
            </ul>

        </div>
    </div>

</div>
<div id="scroll-sidebar" class="article-sidebar-redesign"><!-- Sidebar -->
<div class="sidebar span-4 last" id="sidebar-holder">
<div class="advert adserverad advertisement-redesign">
<div id='div-gpt-ad-1365092406213-0'>
<script type='text/javascript'>
googletag.cmd.push(function() { googletag.display('div-gpt-ad-1365092406213-0'); });
</script>
</div>            <div class="information">Advertisement</div>
    </div>

<div class="widget">
            <div class="sectionSeparator">
            <h3>
              <a class="tag" href="https://www.thejournal.ie/factcheck/news/">factcheck</a>
            </h3>
                    </div>
            <div class="widgetContent">
                <div class="post postMini postMiniLandscape">
            <div class="img">
                <a href="https://www.thejournal.ie/factcheck-newsletter-sign-up-global-fact-10-6104277-Jun2023/"><img src="https://c2.thejournal.ie/media/2023/06/elderly-woman-with-smartphone-mobile-phone-in-wrinkled-female-hands-close-up-concept-of-online-communication-in-retirement-sms-social-media-290x80.jpg" class="attachment-super_wide_1" width="290" height="80" alt=""></a>
                <a href="https://www.thejournal.ie/factcheck/news/" class="tag">factcheck</a>
            </div>

            <div class="text">
                <h4><a href="https://www.thejournal.ie/factcheck-newsletter-sign-up-global-fact-10-6104277-Jun2023/">A global summit on combatting misinformation starts today - sign up here for updates</a></h4>
            </div>
        </div>
            <!-- Mini post -->
    <div class="post postMini ">
        <div class="img">
        <a href="https://www.thejournal.ie/kenmare-abduction-kidnapping-kerry-derek-blighe-school-6097981-Jun2023/"><img src="https://c3.thejournal.ie/media/2023/06/galwayireland-20-09-2022lanternwithirishgardaemblemblue-5-80x50.jpg" class="attachment-listings_1" width="80" height="50" alt=""></a>
        </div>

        <div class="text">
        <a href="https://www.thejournal.ie/debunked/news/" class="tag">debunked</a>
        <h5><a href="https://www.thejournal.ie/kenmare-abduction-kidnapping-kerry-derek-blighe-school-6097981-Jun2023/">Debunked: No evidence for claims by anti-immigrant activist of attempted abduction in Kerry</a></h5>
        </div>
    </div>
    <!-- /Mini post -->

    <!-- Mini post -->
    <div class="post postMini ">
        <div class="img">
        <a href="https://www.thejournal.ie/the-guardian-george-monbiot-june-climate-emergency-headline-6099049-Jun2023/"><img src="https://c0.thejournal.ie/media/2023/06/asphaltroadpanoramaincountrysideonsunnyspringday-route-80x50.jpg" class="attachment-listings_1" width="80" height="50" alt=""></a>
        </div>

        <div class="text">
        <a href="https://www.thejournal.ie/factcheck/news/" class="tag">factcheck</a>
        <h5><a href="https://www.thejournal.ie/the-guardian-george-monbiot-june-climate-emergency-headline-6099049-Jun2023/">Debunked: Guardian article doesn't say, as fake pic implies, hot June weather proves climate change</a></h5>
        </div>
    </div>
    <!-- /Mini post -->

    </div>
</div>


<div class="widget widgetYourSay">
    <div class="sectionSeparator">
        <h3>Your say</h3><a class="details" href="/your-say/news/">View more polls</a>
    </div>
    <div class="widgetContent">
        <div class="post postMini postMiniLandscape postYourSay">
            <div class="img">
                <a href="https://www.thejournal.ie/the-journal-poll-47-6108290-Jul2023/"><img src="https://c0.thejournal.ie/media/2023/07/file-photo-dated-301115-of-the-logo-of-social-network-site-twitter-reflected-in-a-pair-of-glasses-twitter-has-begun-limiting-the-number-of-tweets-people-can-read-elon-musk-has-announced-mr-musk-290x80.jpg" class="attachment-super_wide_1" width="290" height="80" alt="Poll: Do you use Twitter?" /></a>
            </div>
            <div class="text">
                <h4><a href="https://www.thejournal.ie/the-journal-poll-47-6108290-Jul2023/">Poll: Do you use Twitter?</a></h4>
                <p>IT’S BEEN A strange year for Twitter so far.</p>
<p>Since acquiring the microblogging site, Elon Musk has laid off over half of its staff, implemented a new controversial new paid verification policy, and made frequent unexpected policy announcements and U-turns </p>
<p><div id="mid-article-riverblock" class="content_riverblock" style="display: none;"><div class="content_riverblock_title">Advertisement</div><div id='div-gpt-ad-1365092406213-5'>
<script type='text/javascript'>
googletag.cmd.push(function() { googletag.display('div-gpt-ad-1365092406213-5'); });
</script>
</div></div></p>
<p>Twitter suffered a new low on Saturday when Musk announced a surprise temporary measure that capped almost all Twitter users at seeing 600 tweets per day, effectively making the site defunct for several hours. </p>
<p>This cap has since been raised, but the unpredictable changes and limited functionality have damaged Twitter’s reputation. </p>
<p>Today we want to know… <strong>Do you use Twitter?</strong><br>
<div class="journal_poll_container" id="j_p-6108290" ><div class="hidden_block journal_poll_result j_p_result-6108290">

  <br>
  <h3>Poll Results:</h3>

  <div id="j_p_piechart" class="j_p_piechart" data-options="&#x5B;&#x7B;&quot;question&quot;&#x3A;&quot;No,&#x20;I&#x20;never&#x20;have&quot;,&quot;count&quot;&#x3A;3463,&quot;backgroundColour&quot;&#x3A;&quot;07188a&quot;,&quot;textColour&quot;&#x3A;&quot;ffffff&quot;&#x7D;,&#x7B;&quot;question&quot;&#x3A;&quot;Yes&quot;,&quot;count&quot;&#x3A;1680,&quot;backgroundColour&quot;&#x3A;&quot;515dad&quot;,&quot;textColour&quot;&#x3A;&quot;ffffff&quot;&#x7D;,&#x7B;&quot;question&quot;&#x3A;&quot;No,&#x20;I&#x27;ve&#x20;given&#x20;up&quot;,&quot;count&quot;&#x3A;1292,&quot;backgroundColour&quot;&#x3A;&quot;9ba2d0&quot;,&quot;textColour&quot;&#x3A;&quot;ffffff&quot;&#x7D;&#x5D;"></div>

  <div class="j_p_legend">

          <div class="j_p_legend_option clearfix">
        <div class="j_p_legend_color" style="background-color: #07188a"></div>
        <div class="j_p_legend_label">No, I never have <span>(3463)</span></div>
      </div>
          <div class="j_p_legend_option clearfix">
        <div class="j_p_legend_color" style="background-color: #515dad"></div>
        <div class="j_p_legend_label">Yes <span>(1680)</span></div>
      </div>
          <div class="j_p_legend_option clearfix">
        <div class="j_p_legend_color" style="background-color: #9ba2d0"></div>
        <div class="j_p_legend_label">No, I&#039;ve given up <span>(1292)</span></div>
      </div>
    
  </div>

</div>
<div class="j_p_form-6108290 hidden_block"><form action="/submit.php" method="post" class="simplepoll formPoll" style="margin-top:10px" ><ul><input type="hidden" name="action" value="inline_poll_vote" /><input type="hidden" name="redirect" value="https://www.thejournal.ie/the-journal-poll-47-6108290-Jul2023/" /><input type="hidden" name="poll" value="6108290" /><li><input type="radio" id="poll-6108290-0" name="vote" value="0" /><label for="poll-6108290-0">Yes</label><br /></li><li><input type="radio" id="poll-6108290-1" name="vote" value="1" /><label for="poll-6108290-1">No, I've given up</label><br /></li><li><input type="radio" id="poll-6108290-2" name="vote" value="2" /><label for="poll-6108290-2">No, I never have</label><br /></li></ul><div class="submit" /><button class="buttonVote" type="submit">Vote</button></div></form></div></div></p>
<p></p>                <br>
    
                <div class="metadata">
                <span class="share"><a href="https://www.facebook.com/dialog/feed?app_id=116141121768215&display=popup&link=https%3A%2F%2Fwww.thejournal.ie%2Fthe-journal-poll-47-6108290-Jul2023%2F&picture=https%3A%2F%2Fc1.thejournal.ie%2Fmedia%2F2023%2F07%2Ffile-photo-dated-301115-of-the-logo-of-social-network-site-twitter-reflected-in-a-pair-of-glasses-twitter-has-begun-limiting-the-number-of-tweets-people-can-read-elon-musk-has-announced-mr-musk-197x197.jpg&name=Poll%3A+Do+you+use+Twitter%3F&description=Have+your+say.&message=&redirect_uri=https%3A%2F%2Fthejournal.ie%2Futils%2Ffb_post.php%3Fp_id%3D6108290 " target="_blank" title="Share on Facebook" class="open-window social"><span class="icon iconFacebook"></span> Share<span class="number">15</span></a> <a href="https://twitter.com/share?url=https%3A%2F%2Fjrnl.ie%2F6108290&text=Poll%3A+Do+you+use+Twitter%3F+%28via+%40thejournal_ie%29&related=@thejournal_ie" target="_blank" title="Tweet this" class="open-window social share-twitter twitter-tweet jrnl-tweet-6108290"><span class="icon iconTwitter"></span> Tweet</a> </span><a href="https://www.thejournal.ie/the-journal-poll-47-6108290-Jul2023/#comments"><span class="icon iconCommentVeryPopular"></span> 32</a>                </div>

        </div>
    </div>
</div>
</div>
<div class="widget widgetWeather">
    <div class="sectionSeparator">
        <h3>
            Dublin Weather
        </h3>
        <a  style="text-decoration:underline;" href="https://www.thejournal.ie/weather/" class="details">Change location</a>
    </div>
    <div class="weather_ad">
            </div>
    <div class="widgetContent">
        <ul class="tablecell">
                        <li class="border">
                <strong>
                    Monday                </strong>
                <img src="//b0.thejournal.ie/desktop/i/weather-icons/small/14.png" width="40" height="40" />
                <strong>
                    Clouds and sun, showers around; breezy                </strong>
                <em>
                    Max: 16 &deg;C
                </em>
                <em>
                    Min: 9 &deg;C
                </em>
            </li>
                        <li class="border">
                <strong>
                    Tuesday                </strong>
                <img src="//b0.thejournal.ie/desktop/i/weather-icons/small/13.png" width="40" height="40" />
                <strong>
                    Variable cloudiness with showers                </strong>
                <em>
                    Max: 16 &deg;C
                </em>
                <em>
                    Min: 8 &deg;C
                </em>
            </li>
                        <li class="border">
                <strong>
                    Wednesday                </strong>
                <img src="//b0.thejournal.ie/desktop/i/weather-icons/small/14.png" width="40" height="40" />
                <strong>
                    Partly sunny with a brief shower                </strong>
                <em>
                    Max: 17 &deg;C
                </em>
                <em>
                    Min: 10 &deg;C
                </em>
            </li>
                    </ul>
    </div>
</div><div id="trendingArticles" class="tabs ui-tabs ui-widget ui-widget-content ui-corner-all">
    <!-- Tabs -->
    <ul class="sectionSeparator tabMenu ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all">
        <li><a title="Most Popular" href="#tabMostPopular">Most Popular</a></li>
        <li><a title="Most Commented" href="#tabMostCommented">Most Commented</a></li>
    </ul>
    <!-- /Tabs -->

    <!-- Most popular -->
    <div id="tabMostPopular" class="widget tabPanel">
        <div class="sectionSeparator"><h3>Most Popular</h3></div>
        <div class="widgetContent">
            <div class="definition">Most viewed articles in the past 24 hours</div>
            <!-- Mini post -->
                            <div class="post postMini">
                    <div class="img">
                        <a href="https://www.thejournal.ie/irish-man-dies-greece-ios-st-michaels-6107951-Jul2023/">
                            <img src="https://c1.thejournal.ie/media/2023/07/ios-greece-september-15-2022-tourists-walking-along-the-beautiful-mylopotas-beach-in-ios-greece-80x50.jpg" class="attachment-listings_1" width="80" height="50" />                        </a>
                    </div>
                    <div class="text">
                        <a href="/rip/news/" class="tag">
                            RIP                        </a>
                        <h5>
                            <a href="https://www.thejournal.ie/irish-man-dies-greece-ios-st-michaels-6107951-Jul2023/">
                                Dublin school mourns 'devastating loss' after deaths of two post-Leaving Cert students in Greece                            </a>
                        </h5>
                    </div>
                </div>
                                <div class="post postMini">
                    <div class="img">
                        <a href="https://www.thejournal.ie/tributes-irish-students-greece-6108231-Jul2023/">
                            <img src="https://c0.thejournal.ie/media/2023/07/105st-michaels-college-80x50.jpg" class="attachment-listings_1" width="80" height="50" />                        </a>
                    </div>
                    <div class="text">
                        <a href="/ios/news/" class="tag">
                            iOS                        </a>
                        <h5>
                            <a href="https://www.thejournal.ie/tributes-irish-students-greece-6108231-Jul2023/">
                                Tributes to 'bright, sporting young men' after deaths of two Dublin students on Greek island                            </a>
                        </h5>
                    </div>
                </div>
                                <div class="post postMini">
                    <div class="img">
                        <a href="https://www.the42.ie/dublin-v-mayo-liveblog-6105756-Jul2023/">
                            <img src="https://c1.thejournal.ie/media/2023/06/aidan-oshea-and-cillian-oconnor-80x50.jpg" class="attachment-listings_1" width="80" height="50" />                        </a>
                    </div>
                    <div class="text">
                        <a href="/liveblog/news/" class="tag">
                            Liveblog                        </a>
                        <h5>
                            <a href="https://www.the42.ie/dublin-v-mayo-liveblog-6105756-Jul2023/">
                                As it happened: Dublin v Mayo, All-Ireland SFC quarter-final                            </a>
                        </h5>
                    </div>
                </div>
                                <div class="post postMini">
                    <div class="img">
                        <a href="https://www.thejournal.ie/body-found-sliabh-liag-donegal-6108342-Jul2023/">
                            <img src="https://c1.thejournal.ie/media/2023/07/unnamed-764-80x50.jpg" class="attachment-listings_1" width="80" height="50" />                        </a>
                    </div>
                    <div class="text">
                        <a href="/searches/news/" class="tag">
                            Searches                        </a>
                        <h5>
                            <a href="https://www.thejournal.ie/body-found-sliabh-liag-donegal-6108342-Jul2023/">
                                Body recovered from the water at Sliabh Liag cliffs in Donegal following assault investigation                            </a>
                        </h5>
                    </div>
                </div>
                                <div class="post postMini">
                    <div class="img">
                        <a href="https://www.thejournal.ie/rte-staff-redundant-6107859-Jul2023/">
                            <img src="https://c0.thejournal.ie/media/2023/07/873rte-80x50.jpg" class="attachment-listings_1" width="80" height="50" />                        </a>
                    </div>
                    <div class="text">
                        <a href="/rte-payment-scandal/news/" class="tag">
                            rte payment scandal                        </a>
                        <h5>
                            <a href="https://www.thejournal.ie/rte-staff-redundant-6107859-Jul2023/">
                                'No proposals' to make 400 RTÉ staff redundant, says Media Minister                            </a>
                        </h5>
                    </div>
                </div>
                            <!-- /Mini post -->
        </div>
    </div>
    <!-- /Most popular -->


    <!-- Most commented -->
    <div id="tabMostCommented" class="widget tabPanel">
        <div class="sectionSeparator"><h3>Most Commented</h3></div>
        <div class="widgetContent">
            <div class="definition">Most commented articles in the past 3 days</div>
            <!-- Mini post -->
                            <div class="post postMini">
                                            <div class="img">
                            <a href="https://www.thejournal.ie/peter-mcverry-homeless-numbers-6107862-Jul2023/">
                                <img src="https://c2.thejournal.ie/media/2023/07/90358496-80x50.jpg" class="attachment-listings_1" width="80" height="50" />                            </a>
                        </div>
                                            <div class="text">
                        <a href="/housing/news/" class="tag">
                            Housing                        </a>
                        <h5>
                            <a href="https://www.thejournal.ie/peter-mcverry-homeless-numbers-6107862-Jul2023/">
                                No evidence that homelessness figures will fall in future, says Peter McVerry                            </a>
                        </h5>
                    </div>
                </div>
                                <div class="post postMini">
                                            <div class="img">
                            <a href="https://www.thejournal.ie/patrick-kielty-reveals-e250000-per-season-deal-with-rte-for-late-late-show-6105620-Jun2023/">
                                <img src="https://c0.thejournal.ie/media/2023/06/ca53ec-80x50.jpg" class="attachment-listings_1" width="80" height="50" />                            </a>
                        </div>
                                            <div class="text">
                        <a href="/rte/news/" class="tag">
                            RTÉ                        </a>
                        <h5>
                            <a href="https://www.thejournal.ie/patrick-kielty-reveals-e250000-per-season-deal-with-rte-for-late-late-show-6105620-Jun2023/">
                                Patrick Kielty reveals €250,000 per season deal with RTÉ for Late Late Show                            </a>
                        </h5>
                    </div>
                </div>
                                <div class="post postMini">
                                            <div class="img">
                            <a href="https://www.thejournal.ie/baltimore-shooting-6107778-Jul2023/">
                                <img src="https://c2.thejournal.ie/media/2023/07/f0arni_x0aai4zc-80x50.jpeg" class="attachment-listings_1" width="80" height="50" />                            </a>
                        </div>
                                            <div class="text">
                        <a href="/shooting/news/" class="tag">
                            Shooting                        </a>
                        <h5>
                            <a href="https://www.thejournal.ie/baltimore-shooting-6107778-Jul2023/">
                                2 people killed and 28 injured in mass shooting in US city of Baltimore                            </a>
                        </h5>
                    </div>
                </div>
                                <div class="post postMini">
                                            <div class="img">
                            <a href="https://www.thejournal.ie/zelenskyy-greta-thunberg-6106147-Jun2023/">
                                <img src="https://c0.thejournal.ie/media/2023/06/russia-ukraine-war-377-80x50.jpg" class="attachment-listings_1" width="80" height="50" />                            </a>
                        </div>
                                            <div class="text">
                        <a href="/war-in-ukraine/news/" class="tag">
                            War in Ukraine                        </a>
                        <h5>
                            <a href="https://www.thejournal.ie/zelenskyy-greta-thunberg-6106147-Jun2023/">
                                Zelenskyy meets Greta Thunberg, Mary Robinson to address war’s effect on Ukraine’s ecology                            </a>
                        </h5>
                    </div>
                </div>
                                <div class="post postMini">
                                            <div class="img">
                            <a href="https://www.thejournal.ie/ryan-tubridy-rte-2-6106027-Jun2023/">
                                <img src="https://c2.thejournal.ie/media/2023/06/untitled-design-2-17-80x50.png" class="attachment-listings_1" width="80" height="50" />                            </a>
                        </div>
                                            <div class="text">
                        <a href="/rte-deals/news/" class="tag">
                            RTÉ deals                        </a>
                        <h5>
                            <a href="https://www.thejournal.ie/ryan-tubridy-rte-2-6106027-Jun2023/">
                                Center Parcs tells RTÉ it won't be renewing sponsorship of The Ryan Tubridy Show                             </a>
                        </h5>
                    </div>
                </div>
                            <!-- /Mini post -->    
        </div>
    </div>
    <!-- /Most commented -->
</div>
<div class="widget widgetFromOtherPublication widgetTheScore">
    <div class="sectionSeparator">
        <h3><a href="https://www.the42.ie?utm_source=thejournal&utm_medium=sidebar">From The 42</a></h3>
    </div>
    <div class="widgetContent">
            <!-- Post from other publication -->
        <div class="post postMini postMiniLandscape">
            <div class="img">
                <a href="https://www.the42.ie/all-ireland-football-semi-finals-5-6108186-Jul2023/"><img src="https://c0.thejournal.ie/media/2023/07/semi-finals-3-290x80.png" alt="Game-by-game guide to All-Ireland football semi-final showdowns" height="80" width="290" /></a>
                <a href="https://www.the42.ie?utm_source=thejournal&utm_medium=sidebarcloser-look/news/" class="tag">
                    Closer Look                </a>
            </div>
            <div class="text">
                <h4><a href="https://www.the42.ie/all-ireland-football-semi-finals-5-6108186-Jul2023/">Game-by-game guide to All-Ireland football semi-final showdowns</a></h4>
            </div>
        </div>
        <!-- /Post from other publication -->

            <!-- Mini post -->
        <div class="post postMini">
            <div class="img">
            <a href="https://www.the42.ie/australia-world-cup-squad-nigeria-canada-6108311-Jul2023/">
                <img src="https://c2.thejournal.ie/media/2023/07/australias-sam-kerr-celebrates-after-scoring-against-england-during-the-womens-international-friendly-soccer-match-between-england-and-australia-at-the-gtech-community-stadium-in-london-england-tu-80x50.jpg" alt="Sam Kerr spearheads experienced Australia squad, Ireland's other group rivals in chaos" height="50" width="80" />
            </a>
            </div>
            <div class="text">
                <a href="https://www.the42.ie?utm_source=thejournal&utm_medium=sidebarwomens-world-cup/news/" class="tag">
                    Women's World Cup                </a>
                <h5>
                    <a href="https://www.the42.ie/australia-world-cup-squad-nigeria-canada-6108311-Jul2023/">
                        Sam Kerr spearheads experienced Australia squad, Ireland's other group rivals in chaos                    </a>
                </h5>
            </div>
        </div>
        <!-- /Mini post -->
            <!-- Mini post -->
        <div class="post postMini">
            <div class="img">
            <a href="https://www.the42.ie/sarah-lavin-sets-new-personal-best-6108254-Jul2023/">
                <img src="https://c0.thejournal.ie/media/2023/07/sarah-lavin-celebrates-after-winning-4-80x50.jpg" alt="Sarah Lavin sets new personal best to clinch second at Stockholm Diamond League" height="50" width="80" />
            </a>
            </div>
            <div class="text">
                <a href="https://www.the42.ie?utm_source=thejournal&utm_medium=sidebarlimerick-lady/news/" class="tag">
                    Limerick lady                </a>
                <h5>
                    <a href="https://www.the42.ie/sarah-lavin-sets-new-personal-best-6108254-Jul2023/">
                        Sarah Lavin sets new personal best to clinch second at Stockholm Diamond League                    </a>
                </h5>
            </div>
        </div>
        <!-- /Mini post -->
        </div>
</div>
    <div class="widget">
        <div class="sectionSeparator">
        <h3>Download our app</h3>
        </div>
        <div class="widgetContent" style="height:75px; margin:0px;  padding:0px">
            <div class="single_app_link" style="margin-top:5px; width:100%">

                <span style="float:left; margin-left: 15px">
                    <a href="https://itunes.apple.com/ie/app/thejournal-ie/id409359491?mt=8" title="Download the TheJournal.ie for the iPhone, iPad and iPod">
                        <img src="//b0.thejournal.ie/desktop/i/itunes_icon.png" class="itunes_image" width="134" height="45" />
                        <!--span class="app_link_text app_link_text_ios">Get our free app for<br/>the iPhone & iPad</span-->
                    </a>
                </span>
                <span style="float:right; margin-right:5px">
                    <a href="https://play.google.com/store/apps/details?id=com.distilledmedia.thejournal" title="Download the TheJournal.ie for Android">
                        <img src="//b0.thejournal.ie/desktop/i/android_get_it_on_play_logo_small.png" class="itunes_image" width="129" height="45" />
                        <!--span class="app_link_text app_link_text_android">Also available in<br/>the Android Market</span-->
                    </a>
                </span>

            </div>

            <!--div style="padding:10px 20px 0; clear:both; line-height:1em">
            <h3>Top Features:</h3>
            <ul>
                <li>5x faster loading of articles
                <li>In-flight/offline reading
                <li>Swipe between articles & photos
                <li>Live-scores from rugby and football matches
            </ul>

            </div-->

        </div>
    </div>


</div>
<!-- /Sidebar --></div>        </div>
        <!-- /Main content -->
        </div>
        <!-- /Main container -->
        </div>

        <div class="sidebar-scrolling-blocker page-section-redesign footer-redesign">
        <!-- Footer -->
                    <footer>
    <div class="row">
        <div class="col">
            <section id="disclaimer">
                <p>
                    Content copyright &copy; Journal Media Ltd. 2023 Registered in Dublin, registration number:
                    483623.
                    Registered office: 3rd floor, Latin Hall, Golden Lane, Dublin 8.
                </p>
                <p>
                    Please note that The Journal uses cookies to improve your experience and to provide
                    services and
                    advertising. For more information on cookies please refer to our <a
                        href="/cookies-policy" target="_blank" rel="noopener">cookies
                        policy</a>.
                </p>
            </section>
        </div>
        <div class="col">
            <section id="featured-menu">
                <div class="heading">Featured</div>
                <ul>
                    <li><a href="/about-us/">About Us</a>
                    </li>
                    <li><a href="https://careers.thejournal.ie/">We're Hiring!</a>
                    </li>
                    <li><a href="/contact/">Contact Us</a>
                    </li>
                    <li><a href="https://advertising.thejournal.ie/">Advertise With Us</a>
                    </li>
                    <li><a href="https://www.thejournal.ie/the-journal-factcheck/">The Journal FactCheck</a>
                    </li>
                </ul>
            </section>
        </div>
        <div class="col">
            <section id="policies-menu">
                <div class="heading">Policies</div>
                <ul>
                    <li><a href="/terms/">Terms of Use</a>
                    </li>
                    <li><a href="/cookies-privacy-policy/">Cookies & Privacy</a>
                    </li>
                    <li><a href="/advertising-policy/">Advertising</a>
                    </li>
                    <li><a href="/comments-policy/">Comments</a>
                    </li>
                    <li><a href="/copyright-policy/">Copyright</a>
                    </li>
                    <li><a href="/competitions-terms-and-conditions/">Competition</a>
                    </li>
                </ul>
            </section>
        </div>
    </div>
    <div id="legal-row" class="row">
        <div class="col">
            <section id="legal-notes">
                <p>
                    The Journal supports the work of the Press Council of Ireland and the Office of the Press
                    Ombudsman, and our staff operate within the Code of Practice. You can obtain a copy of the
                    Code, or contact the Council, at <a href="https://www.presscouncil.ie" target="_blank">www.presscouncil.ie</a>,
                    PH: (01) 6489130, Lo-Call 1890 208 080 or email: <a href="mailto:info@presscouncil.ie" target="_blank">info@presscouncil.ie</a>
                </p>
                <p>
                    News images provided by <a href="https://www.pressassociation.com/images.html" target="_blank">Press Association</a>
                    and <a href="http://rollingnews.ie/" target="_blank">RollingNews.ie</a> unless otherwise stated.
                    Irish sport images provided by <a href="https://www.inpho.ie/" target="_blank">Inpho Photography</a>
                    unless otherwise stated. Wire service provided by <a href="https://www.afp.com/en/agency/charter" target="_blank">AFP</a> and <a href="https://pamediagroup.com/" target="_blank">Press Association</a>.
                </p>
                <p>
                    Journal Media does not control and is not responsible for user created content, posts, comments,
                    submissions or preferences. Users are reminded that they are fully responsible for their own
                    created content and their own posts, comments and submissions and fully and effectively warrant
                    and indemnify Journal Media in relation to such content and their ability to make such content,
                    posts, comments and submissions available. Journal Media does not control and is not responsible
                    for the content of external websites.
                </p>
                <p class="switch-to-touch">
                    <a href="/?switcher=touch">Switch to Mobile Site</a>
                </p>
                <p class="switch-to-desktop">
                    <a href="/?switcher=desktop">Switch to Desktop Site</a>
                </p>
            </section>
        </div>
    </div>
    <div id="more-links">
        <div id="social-network-links">
            <a id="facebook-link" class="social-network-link" href="https://www.facebook.com/thejournal.ie" target="_blank">
                <svg width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.3101 15.7394C20.2784 16.0017 20.0549 16.1984 19.7907 16.1965H17.661C17.3741 16.1965 17.1415 16.4291 17.1415 16.7159V25.027C17.1415 25.3139 17.3741 25.5464 17.661 25.5464H23.8943C24.468 25.5464 24.9331 25.0813 24.9331 24.5075V1.65216C24.9331 1.0784 24.468 0.613281 23.8943 0.613281H1.03888C0.465123 0.613281 0 1.0784 0 1.65216V24.5075C0 25.0813 0.465123 25.5464 1.03888 25.5464H12.4666C12.7534 25.5464 12.986 25.3139 12.986 25.027V16.7159C12.986 16.4291 12.7534 16.1965 12.4666 16.1965H10.3888C10.1019 16.1965 9.86937 15.9639 9.86937 15.6771V12.5604C9.86937 12.2735 10.1019 12.041 10.3888 12.041H12.4666C12.7534 12.041 12.986 11.8084 12.986 11.5215V10.1606C12.986 6.89591 15.6326 4.24936 18.8972 4.24936H20.2582C20.3959 4.24936 20.5281 4.30409 20.6255 4.4015C20.7229 4.49892 20.7776 4.63104 20.7776 4.7688V7.88545C20.7776 8.17233 20.5451 8.40489 20.2582 8.40489H18.8972C17.9276 8.40489 17.1415 9.19094 17.1415 10.1606V11.5215C17.1415 11.8084 17.3741 12.041 17.661 12.041H20.1855C20.3347 12.0399 20.4773 12.1031 20.5767 12.2144C20.6761 12.3258 20.7228 12.4745 20.7049 12.6227L20.3101 15.7394Z" fill="white"/>
                </svg>
            </a>
            <a id="twitter-link" class="social-network-link" href="https://twitter.com/thejournal_ie" target="_blank">
                <svg width="25" height="21" viewBox="0 0 25 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24.2404 4.41367C24.3911 4.28837 24.4585 4.08887 24.4146 3.89783C24.3706 3.70678 24.2229 3.55674 24.0326 3.50984L23.2119 3.30207C23.0608 3.26424 22.9346 3.16058 22.8682 3.01968C22.8017 2.87877 22.8021 2.7155 22.869 2.57485L23.3261 1.65025C23.4143 1.46728 23.3878 1.24971 23.2582 1.09331C23.1286 0.936915 22.9198 0.870392 22.7236 0.92303L20.6458 1.5048C20.4889 1.55058 20.3195 1.51979 20.1887 1.42169C19.2896 0.747345 18.196 0.382812 17.0721 0.382812C14.2033 0.382812 11.8777 2.70843 11.8777 5.57722V5.95121C11.8786 6.08331 11.7803 6.19509 11.6491 6.21093C8.72987 6.55376 5.93528 5.06816 2.92253 1.5983C2.78909 1.45114 2.58455 1.39098 2.3927 1.44247C2.22001 1.52185 2.10446 1.68919 2.09142 1.8788C1.67531 3.58811 1.84354 5.38754 2.56931 6.99009C2.61308 7.07674 2.60488 7.18057 2.54804 7.25927C2.4912 7.33797 2.39522 7.3784 2.2992 7.36409L1.13565 7.13554C0.967941 7.10857 0.797643 7.16531 0.679619 7.28748C0.561596 7.40964 0.51076 7.5818 0.543489 7.74848C0.725179 9.36348 1.63109 10.8083 3.00564 11.6754C3.09524 11.7188 3.15215 11.8096 3.15215 11.9092C3.15215 12.0088 3.09524 12.0995 3.00564 12.1429L2.45503 12.3611C2.31983 12.4153 2.2136 12.5238 2.16224 12.6601C2.11088 12.7964 2.11911 12.948 2.18492 13.0779C2.80299 14.4304 4.04548 15.3933 5.50934 15.6544C5.61205 15.6916 5.68045 15.7892 5.68045 15.8985C5.68045 16.0078 5.61205 16.1054 5.50934 16.1426C4.09684 16.7268 2.58101 17.0201 1.05254 17.0049C0.765662 16.9475 0.486588 17.1336 0.429212 17.4205C0.371837 17.7073 0.557886 17.9864 0.844765 18.0438C3.49136 19.299 6.37284 19.9822 9.30125 20.0488C11.8771 20.0881 14.4071 19.3653 16.5734 17.9711C20.1926 15.5551 22.3613 11.487 22.3496 7.13554V6.23171C22.3509 6.07903 22.4193 5.93465 22.5366 5.83694L24.2404 4.41367Z" fill="white"/>
                </svg>
            </a>
            <a id="ig-link" class="social-network-link" href="https://www.instagram.com/thejournal_ie" target="_blank">
                <svg width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M18.2468 0.613281H6.81913C3.09208 0.619002 0.072127 3.63895 0.0664062 7.36601V18.7937C0.072127 22.5208 3.09208 25.5407 6.81913 25.5464H18.2468C21.9739 25.5407 24.9938 22.5208 24.9995 18.7937V7.36601C24.9938 3.63895 21.9739 0.619002 18.2468 0.613281ZM12.533 18.7937C9.37731 18.7937 6.81913 16.2355 6.81913 13.0798C6.81913 9.92417 9.37731 7.366 12.533 7.366C15.6886 7.366 18.2468 9.92417 18.2468 13.0798C18.2468 14.5953 17.6448 16.0486 16.5733 17.1201C15.5017 18.1917 14.0484 18.7937 12.533 18.7937ZM17.7274 5.80769C17.7274 6.66833 18.4251 7.36601 19.2857 7.36601C19.699 7.36601 20.0954 7.20183 20.3876 6.90959C20.6798 6.61735 20.844 6.22098 20.844 5.80769C20.844 4.94705 20.1463 4.24937 19.2857 4.24937C18.4251 4.24937 17.7274 4.94705 17.7274 5.80769Z" fill="white"/>
                </svg>
            </a>
        </div>
        <div id="related-page-links">
            <a id="the-journal-link" class="related-page-link" href="/">
                <svg width="67" height="64" viewBox="0 0 67 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M33.1333 64C57.6054 64 66.2667 55.6796 66.2667 31.9803C66.2667 8.35982 57.6463 0 33.1333 0C8.57953 0 0 8.32039 0 31.9803C0.0408549 55.6402 8.62038 64 33.1333 64Z" fill="#ECECEC"/>
                    <path d="M25.3511 49.7296C21.8855 49.7296 19.05 47.0419 19.05 43.6441C19.05 40.2971 21.8855 37.6094 25.3511 37.6094C28.8691 37.6094 31.6521 40.2971 31.6521 43.6441C31.6521 47.0419 28.8691 49.7296 25.3511 49.7296Z" fill="#202125"/>
                    <path d="M34.7572 14V40.4831C34.7572 46.315 33.3919 49.1549 30.2939 50.6763C39.7454 50.6763 44.6288 44.7936 44.6288 37.1868V16.4342L34.7572 14Z" fill="#202125"/>
                </svg>
            </a>
            <a id="ifcn-link" class="related-page-link" href="https://ifcncodeofprinciples.poynter.org/" target="_blank">
                <svg width="61" height="71" viewBox="0 0 61 71" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <rect width="60.0542" height="71" fill="url(#pattern0)"/>
                    <defs>
                        <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                            <use xlink:href="#image0_3524_16458" transform="translate(0 -0.0205128) scale(0.00699301 0.00591492)"/>
                        </pattern>
                        <image id="image0_3524_16458" width="143" height="176" xlink:href="data:image/png;base64,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"/>
                    </defs>
                </svg>
            </a>
            <a id="press-council-link" class="related-page-link" href="https://www.presscouncil.ie" target="_blank">
                <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><rect width="64" height="64" rx="8" fill="url(#a)"/><defs><pattern id="a" patternContentUnits="objectBoundingBox" width="1" height="1"><use xlink:href="#b" transform="translate(-.44) scale(.00303)"/></pattern><image id="b" width="620" height="330" xlink:href="data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAFKAmwDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDyuiiivmT96CiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKADpXTeDfCN14suRb2F9p0FyWKpDczFXfAySAASRjP5Gua9K7f4LH/i6Gg54/eP8A+i2rSilKajLZs4cyqVKWGnUpOzSbWl9ixrPw1m0S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Xm7Xe22iMKeUYampKCa5t9Xr+J6n4l+LSeJrOO21zwxYXUMbbkzPIpU4xkEYI/Osy4+KGpw6E2keHrGy0SxYEN9lBMhzwTuJ6kd+vvXn/WjvVPEVG7t6kQyXBQSioaJ3SbbV+9r2Jbeaa2uI54JGjmjYOjqcFSDkEH1zXpr/ABafU9MjsvFnh7T9bEf3ZGYxtn1+6cE+oxXlppKiFWUL2e50YrL8PimnVjqtnezXo0d3f/EER6dcWXhjRLHQo7hSk0sBMkzqeo3kAgH6Vx+mT29tfRS3dqt5AhJeBnKB+DwSCCOcHj0qr9KKUqkpNN9B0cDRoRcKatfd3d389z1S/wDi59v8PDQ7nw1YtpQRYxAJnUBVI2gEcjGBzmsHTvG9ro0wuNC8MaVa3S8pPK0twyH1G5sA+4riecYozgYq3iKjd2/wRzwyXCQi4xi0nq1d2b89dTV8SeINT8SX5vNZu3uZvurnAVB6KBwB9K0vBvjC58LR6lFBZ2l5Dfosc0VypKFQTxgEdQxFcxwMYo9ahVJKXNfU6p4OjOj7BxXL2Wm3oehaJ480jQLlr7RfCFrBqYUrHcSXkkqxkjBIQjjg465xxmuUuNbl1LxE2ra7EuovI++WN3KB+MAZUgqBxjHpWRzj2oqnVk0k9kZ0suoUpOcU7tWbbbdu12dj418ZW/ii2t1fQrSzubeJIYp4ZXJSNc4TB4I5PUZFZt74r1G68H2XhyVwbG0maVeTk56A+wJYj6+wrA/lQOMGk6sm229x08uw9OMYKOkXdXbdn3Vz0bwR8S18HWbxaT4ftBLMqCeZp3JlKggEg5A6k4GBzWBqfiPTdQ8R/wBqS+HbUI5Z5rZbiQJLITncT1HPYYFcwevNB64FN15tKLei8jOOV4aFSVVJqUtG7vX8Tt/Gfji18U26C68O2kF1FCIIJ4p3BiQHIAXoQOeo71D4E8ZQ+EJ0u7fRYLrUVDKtzJO6kKeo2g46d8ZrjuvWj2o9tPm5r6+g1lmHVF4ez5H0u/8AM7fx547j8YyxXF7oVpDexlR9ojlfcyAklCO4OevUdqsXnjywu/DcGhyeFbEWNuS8IFzLmNznJB6knJ6nBrgKCfSj282276vfQlZVhlCMEmlF3Su9H94nYV2Q8fao3gO48L3arc2jlPKmdjuiVWB2+4yOM9M+mAONpelRGcoX5XudVfC0sRy+1V+VpryaEoooqToCiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA//2Q=="/></defs></svg>
            </a>
        </div>
    </div>
</footer>
                </div>

        <!-- /Footer -->

        </div>

        <!-- Lightboxes -->
    <div class="lightboxes">

<div id="CommentLogIn" class="lightbox">
    <div class="border">Please log in to comment</div>
    <div class="login-buttons clearfix">
        <div id="alt-login-methods">
            <p>
                <span>
                    <span class="facebook_connect_button label" id="" onclick="jrnl_social_login('facebook', true, false)">
                        <img src="//b0.thejournal.ie/desktop/i/fb-login.png" width="169" height="22" />
                    </span>
                </span>
            </p>
            <p>
                <span class="twitter_connect_button label" id="" onclick="jrnl_social_login('twitter', true, false)">
                    <img width="151" height="24" border="0" src="//b0.thejournal.ie/desktop/i/tw-login.png">
                </span>
            </p>
            <p>
            <img id="main_page_login" class="login_loading_throb" src="//b0.thejournal.ie/desktop/i/loading.gif">
            </p>
        </div>
    </div>
</div>

<div id="ReportContent" class="lightbox reportContent">
    <form id="report-content-popup-form" method="post">
    <input type="hidden" name="current_page" value="https://www.thejournal.ie//b0.thejournal.ie/redesign/js/redesign-691912467d.js" />
        <input type="hidden" name="action" value="post_report_content_form" />
        <input type="hidden" name="article-id" value="" />
        <div class="form-element border">Report an error, omission or problem:</div>

        <div class="form-element message">
            <div id="AlertAuthorMessage" class="field">
                <label for="AlertAuthorMessage">Message:</label>
                <textarea name="message" id="AlertAuthorMessage"></textarea>
            </div>
        </div>

        <div class="form-element">
            <label for="yourEmail">Your Email (optional)</label>
            <input type="email" class="text" id="yourEmail" name="email-from" />
        </div>

        <div class="clearfix">
            <button class="buttonSubmit" type="submit">Submit</button>
            <img src="//b0.thejournal.ie/desktop/i/loading.gif"  width="16" height="16"  class="loading" alt="One moment..." />
        </div>

    </form>
</div>
<div id="EmailAlert" class="lightbox emailAlert">
    <form id="create-email-alert-form" method="post">
    <input type="hidden" name="current_page" value="https://www.thejournal.ie//b0.thejournal.ie/redesign/js/redesign-691912467d.js" />
        <input type="hidden" name="action" value="post_create_email_alert_form" />
        <div class="form-element border">Create Email Alert</div>
        <p>Create an email alert based on the current article</p>

        <div class="form-element">
            <label for="alertEmailAddress">Email Address</label>
            <input type="text" class="text" id="alertEmailAddress" name="email-address" />
        </div>

        <div class="form-element">
            <input type="radio" class="radio emailAlert" id="alertFrequencyDaily" name="alert-frequency" value="daily" checked="checked" />
            <label for="alertFrequencyDaily" class="emailAlert">One email every morning</label>
            <input type="radio" class="radio emailAlert" id="alertFrequencyInstantly" name="alert-frequency" value="instantly" />
            <label for="alertFrequencyInstantly" class="emailAlert">As soon as new articles come online</label>
        </div>

        <input type="hidden" name="ip-address" value="157.245.138.39" />
        <input type="hidden" name="feed-url" value="/topic//feed" />
        <input type="hidden" name="feed-description" value="Articles related to " />

        <div class="clearfix">
            <button class="buttonSubmit" type="submit">Submit</button>
            <img src="//b0.thejournal.ie/desktop/i/loading.gif"  width="16" height="16"  class="loading" alt="One moment..." />
        </div>

    </form>
</div>

<div id="Thanks" class="lightbox">
    <h1 id="thanks-message" style="color:#cc0000"></h1>
</div>
</div>
        <!-- /Lightboxes -->

        <script type="text/javascript">
            var _ac = 'thejournal.ie';
            var _sid = '234604';
            var _un = 'thejournal.ie';
            var _pa = '76af0b4d8a69839c0d361c0862fd0ed8';
        </script>

        
        <style>
  #piano-template-container {
    overflow-y: scroll;
  }

  #piano-template-container, #piano-unlocked-template-container, #firebaseui-auth-ribbon-container {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    z-index: 300001;
    max-height: 80%;
  }

  #piano-landing-page-container {
      position: relative;
      z-index: 300001;
  }

  #piano-template-overlay {
    z-index: 300000;
    display: block;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0.5;
    background: #000000;
  }

  #firebaseui-auth-ribbon {
    margin-top: 24px;
  }

  #firebaseui-auth-ribbon button {
      text-indent: initial;
  }

  #firebaseui-auth-ribbon-container {
      background: #fff;
      padding: 24px 0 29px;
      overflow-y: scroll;
  }

  #firebaseui-auth-ribbon {
      margin-bottom: 24px;
  }

  #firebaseui-auth-ribbon .firebaseui-container {
      max-width: 500px;
  }

  #firebaseui-auth-ribbon-container .heading {
      max-width: 420px;
      margin: 0 auto 16px;
      padding: 0 24px;
      font-family: 'alternate-gothic-extra-cond', sans-serif;
      font-style: normal;
      font-weight: 700;
      font-size: 56px;
      line-height: 100%;
      text-align: center;
      letter-spacing: 0.5px;
      text-transform: uppercase;
      color: #1E8B71;
  }

  #firebaseui-auth-ribbon-container .heading em {
      font-style: normal;
      color: #1D3B3C;
  }

  @media (max-width: 600px) {
    #firebaseui-auth-ribbon-container .heading {
        font-size: 42px;
    }
    #firebaseui-auth-ribbon-container {
    padding-bottom: 48px;
    }
  }

  #firebaseui-auth-ribbon-container .message {
    padding: 0 24px;
    font-family: 'Ballinger', sans-serif;
    font-weight: 400;
    font-size: 18px;
    line-height: 130%;
    text-align: center;
    color: #1D3B3C;
    margin-top: 16px;
  }

  .disable-scrolling-for-firebase-ribbon {
      overflow: hidden;
  }
</style>

<div id="piano-template-container"></div>
<div id="piano-unlocked-template-container"></div>
<div id="piano-template-overlay" style="display: none;"></div>
<div id="firebaseui-auth-modal-container" class="auth-flow-modal-container" style="display: none;">
    <div class="auth-flow-modal">
        <div class="header">
            <a href="#" class="close-modal">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.75 23.249L23.25 0.749023" stroke="#404040" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M23.25 23.249L0.75 0.749023" stroke="#404040" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </a>
        </div>
        <div class="heading"><em>Sign in</em> or create<br>a free account</div>
        <div id="firebaseui-auth-modal" class="auth-flow-firebaseui"></div>
    </div>
</div>
<div id="firebaseui-auth-ribbon-container" style="display: none;">
    <div class="heading">To continue reading create a <em>free account</em></div>
    <div class="message">Or sign into an existing account</div>
    <div id="firebaseui-auth-ribbon"></div>
</div>

<script>
    if (typeof firebaseIntegration === 'undefined') {
        throw new Error("The firebaseIntegration object is not defined at Integration template")
    }
</script>
<script>(function(src){var a=document.createElement("script");a.type="text/javascript";a.async=true;a.src=src;var b=document.getElementsByTagName("script")[0];b.parentNode.insertBefore(a,b)})("https://experience-eu.piano.io/xbuilder/experience/load?aid=HzezUBlwpe");</script>
<script type="application/json" id="piano-ga-bucket">{"gaBucket":null}</script>
<script>
    let values = JSON.parse(document.getElementById("piano-ga-bucket").innerHTML);

    tp = window["tp"] || [];

    if (values.gaBucket !== null) {
        tp.push(["setCustomVariable", "gaBucket", values.gaBucket]);
    }
</script>

    </body>
</html>
