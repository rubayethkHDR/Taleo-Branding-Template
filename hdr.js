
(function () {
    'use strict';

    /**
     * Translation sample with Hyperlink
        'en-GB': {
            text: 'This site uses cookies to enhance your user experience. Continued use of this site indicates your consent, as detailed in our [cookie_accept_url]Privacy Policy[/cookie_accept_url].',
            url: 'https://www.company.com/privacypolicy',
            closebuttonText: 'OK'
        }
     */
    var defaultOptions = {
        ns: 'taleo',
        cookieDuration: 14,
        cookieName: 'cookie_accept',
        cookieValue: 'on',
		 cookieRejectValue: 'off',
        defaultPrivacyURL: '/',
        lang: 'en',
        fallbackLang: 'en',
        translations: {
            // do not remove the fallback language!
            'ar': {
                //text: '',
                url: '',
                closebuttonText: 'موافق'
            },
            'bg': {
                text: 'Този сайт използва "бисквитки", за да подобри практическата ви работа с потребителите. Ако продължите да използвате сайта, това ще означава, че давате съгласие.',
                url: '',
                closebuttonText: 'Accept',
				rejectbuttonText:'Reject'
            },
            'cs': {
                text: 'Tento web používá soubory cookie k rozšíření možností uživatele. Dalším používáním tohoto webu vyjadřujete svůj souhlas.',
                url: '',
                closebuttonText: 'Accept',
				rejectbuttonText:'Reject'
            },
            'da': {
                text: 'Denne site anvender cookies for at forbedre brugeroplevelsen. Hvis du fortsætter med at anvende denne site, angiver du dit samtykke.',
                url: '',
                closebuttonText: 'Accept',
				rejectbuttonText:'Reject'
            },
            'de': {
                text: 'Wir verwenden auf unserer Webseite Cookies oder ähnlich funktionierende Trackingdienste, um die Websitenavigation zu verbessern, die Websitenutzung zu analysieren, und unsere Marketingbemühungen zu unterstützen. Hierbei können Ihre Daten in die USA übermittelt werden. Die USA gilt als unsicherer Drittstaat. Mit Bestätigung des "Alle akzeptieren"-Button stimmen Sie der zuvor genannten Verwendung sowie der Übermittlung Ihrer Daten in die USA zu. Mit Bestätigung des "Alle ablehnen"-Button, setzen wir nur noch technisch notwendige Cookies. Weitere Informationen finden Sie in unserem [cookie_accept_url] Datenschutzhinweis [/cookie_accept_url]',
                url: 'https://www.hdrinc.com/privacy',
                closebuttonText: 'Alle akzeptieren',
				rejectbuttonText:'Alle ablehnen'
            },
            'el': {
                text: 'Αυτή η τοποθεσία χρησιμοποιεί cookies για τη βελτίωση της εμπειρίας χρήστη. Η συνεχιζόμενη χρήση αυτής της τοποθεσίας υποδεικνύει τη συναίνεσή σας.',
                url: '',
                closebuttonText: 'Accept',
				rejectbuttonText:'Reject'
            },
            'en': {
                text: 'By clicking “Accept All Cookies”, you agree to the storing of cookies on your device to enhance site navigation, analyze site usage, and assist in our marketing efforts. You can also choose to "Reject All Cookies". For more information please see  our   [cookie_accept_url] Privacy Statement[/cookie_accept_url]',                
                url: 'https://www.hdrinc.com/privacy',
                closebuttonText: 'Accept All Cookies',
				rejectbuttonText:'Reject All Cookies'
            },
            'en-GB': {
                text: 'This site uses cookies to enhance your user experience. Continued use of this site indicates your consent.',
                url: '',
                closebuttonText: 'Accept',
				rejectbuttonText:'Reject'
            },
            'es': {
                text: 'Este sitio usa cookies para mejorar la experiencia del usuario. El uso continuo de este sitio indica su consentimiento.',
                url: '',
                closebuttonText: 'Aceptar'
            },
            'fi': {
                text: 'Tämä sivusto käyttää evästeitä käyttökokemuksen parantamiseksi. Jatkamalla hyväksyt evästeiden käytön.',
                url: '',
                closebuttonText: 'Accept',
				rejectbuttonText:'Reject'
            },
            'fr': {
                text: "Ce site utilise des témoins pour améliorer votre expérience d'utilisateur. L'utilisation continue de ce site exprime votre consentement.",
                url: '',
                closebuttonText: 'Accept',
				rejectbuttonText:'Reject'
            },
            'fr-FR': {
                text: "Ce site utilise des cookies pour améliorer votre expérience d'utilisateur. En continuant de naviguer sur ce site, vous acceptez l'utilisation des cookies.",
                url: '',
                closebuttonText: 'Accept',
				rejectbuttonText:'Reject'
            },
            'hr': {
                text: 'Ovo web-mjesto upotrebljava kolačiće kako bismo vam pružili bolje korisničko iskustvo. Nastavkom upotrebe ovog web-mjesta dajete svoj pristanak.',
                url: '',
                closebuttonText: 'U redu'
            },
            'hu': {
                text: 'A webhely cookie-kat használ a felhasználói élmény fokozásához. A webhely további böngészésével beleegyezik azok használatába.',
                url: '',
                closebuttonText: 'Accept',
				rejectbuttonText:'Reject'
            },
            'in': {
                text: 'Situs ini menggunakan cookie untuk meningkatkan pengalaman pengguna Anda. Melanjutkan penggunaan situs ini menunjukkan persetujuan Anda.',
                url: '',
                closebuttonText: 'Accept',
				rejectbuttonText:'Reject'
            },
            'it': {
                text: "Questo sito utilizza i cookie per migliorare l'esperienza dell'utente. Se si prosegue nella navigazione del sito, si acconsente all'uso dei cookie.",
                url: '',
                closebuttonText: 'Accept',
				rejectbuttonText:'Reject'
            },
            'ja': {
                text: 'このサイトはCookieを使用してユーザー・エクスペリエンスを向上させます。このサイトの使用を継続する場合、同意を指定します。',
                url: '',
                closebuttonText: 'Accept',
				rejectbuttonText:'Reject'
            },
            'ko': {
                text: '이 사이트에서는 사용자 경험을 향상시키기 위해 쿠키를 사용합니다. 이 사이트를 계속 사용하는 것은 이에 동의함을 나타냅니다.',
                url: '',
                closebuttonText: '확인'
            },
            'lt': {
                text: 'Kad ateityje šia svetaine būtų patogiau naudotis, joje naudojami slapukai. Jei sutinkate, naršykite toliau.',
                url: '',
                closebuttonText: 'Gerai'
            },
            'ms': {
                text: 'Laman ini menggunakan kuki untuk meningkatkan pengalaman pengguna anda. Penggunaan laman ini secara berterusan menandakan persetujuan anda.',
                url: '',
                closebuttonText: 'Accept',
				rejectbuttonText:'Reject'
            },
            'nl': {
                text: 'Op deze site wordt gebruikgemaakt van cookies om uw ervaring als gebruiker te verbeteren. Als u deze site blijft gebruiken, gaat u akkoord met het gebruik van cookies.',
                url: '',
                closebuttonText: 'Accept',
				rejectbuttonText:'Reject'
            },
            'nl-BE': {
                text: 'Op deze site wordt gebruikgemaakt van cookies om uw ervaring als gebruiker te verbeteren. Als u deze site blijft gebruiken, gaat u akkoord met het gebruik van cookies.',
                url: '',
                closebuttonText: 'Accept',
				rejectbuttonText:'Reject'
            },
            'no': {
                text: 'Dette området bruker informasjonskapsler til å forbedre brukeropplevelsen. Ved å bruke dette området godtar du bruken av informasjonskapsler.',
                url: '',
                closebuttonText: 'Accept',
				rejectbuttonText:'Reject'
            },
            'pl': {
                text: 'Ta witryna wykorzystuje pliki cookie, aby zapewnić lepszy odbiór przez użytkownika. Dalsze korzystanie z tej witryny oznacza zgodę ze strony użytkownika.',
                url: '',
                closebuttonText: 'OK'
            },
            'pt': {
                text: 'Este site utiliza cookies para melhorar a sua experiência de utilizador. A utilização continuada deste site indica o seu consentimento.',
                url: '',
                closebuttonText: 'Accept',
				rejectbuttonText:'Reject'
            },
            'pt-BR': {
                text: 'Este site usa cookies para aprimorar sua experiência de usuário. O uso contínuo deste site indica seu consentimento.',
                url: '',
                closebuttonText: 'Accept',
				rejectbuttonText:'Reject'
            },
            'ro': {
                text: 'Acest site utilizează cookie-uri pt. a îmbunătăţi experienţa utilizatorilor. Continuarea utilizării reprezintă consimţământul dvs.',
                url: '',
                closebuttonText: 'Accept',
				rejectbuttonText:'Reject'
            },
            'ru': {
                text: 'Этот сайт использует cookie-файлы для повышения удобства работы. Продолжение использования этого сайта означает ваше согласие.',
                url: '',
                closebuttonText: 'Accept',
				rejectbuttonText:'Reject'
            },
            'sk': {
                text: 'Táto lokalita používa súbory cookie na zlepšenie používateľskej skúsenosti. Ak budete naďalej používať túto lokalitu, vyjadrujete súhlas s ich používaním.',
                url: '',
                closebuttonText: 'Accept',
				rejectbuttonText:'Reject'
            },
            'sl': {
                text: 'To spletno mesto uporablja piškotke za izboljšanje vaše uporabniške izkušnje. Nadaljnja uporaba tega spletnega mesta označuje vaše soglasje.',
                url: '',
                closebuttonText: 'V redu'
            },
            'sr': {
                text: 'Ova lokacija koristi kolačiće da bi poboljšala doživljaj korisnika. Ako nastavite da koristite ovu lokaciju, time izražavate saglasnost.',
                url: '',
                closebuttonText: 'U redu'
            },
            'sv': {
                text: 'Den här webbplatsen använder cookies för att förbättra användarupplevelsen. Om du fortsätter använda webbplatsen tolkas det som att du samtycker.',
                url: '',
                closebuttonText: 'Accept',
				rejectbuttonText:'Reject'
            },
            'th': {
                text: 'ไซต์นี้ใช้คุกกี้เพื่อเพิ่มประสบการณ์การใช้งานของคุณ การใช้ไซต์นี้ต่อไปแสดงถึงการยอมรับของคุณ',
                url: '',
                closebuttonText: 'ตกลง'
            },
            'tr': {
                text: 'Bu sitede, kullanıcı deneyiminizi iyileştirmek için tanımlama bilgileri kullanılır. Siteyi kullanmaya devam ederseniz bunu onaylamış olursunuz.',
                url: '',
                closebuttonText: 'Tamam'
            },
            'zh-CN': {
                text: '此网站使用 cookie 来改进您的用户体验。继续使用此网站意味着您同意使用 cookie。',
                url: '',
                closebuttonText: '确定'
            },
            'zh-TW': {
                text: '本網站利用 Cookie 提升您的使用者體驗。繼續使用本網站即表示已授予您的同意。',
                url: '',
                closebuttonText: '确定'
            }
        },
        cssStyles: {
            divCookieLaw: {
                'position': 'fixed',
                'top': '0',
                'left': '0',
                'right': '0',
                'line-height': '14px',
                'background-color': 'rgb(89, 89, 89)',
                'font-family': 'Arial, sans-serif',
                'color': 'rgb(255, 255, 255)',
                'text-align': 'center',
                'padding': '10px 7px 4px 7px',
                'font-size': '14px',
                'font-weight': '400',
                'z-index': '1001'
            },
            aCookieLaw: {
                'text-decoration': 'none',
                'color': '#85c6f4'
            },
            aCookieLawHide: {
                'display': 'inline-block',
                'text-align': 'center',
                'text-decoration': 'none',
                'border': '1px solid rgb(255, 255, 255)',
                'color': 'rgb(255, 255, 255) !important',
                'padding': '2px 7px',
                'margin': '-2px 10px 3px 0',
                'float': 'right'
            },
            aCookieLawHideMobile: {
                'display': 'inline-block',
                'text-align': 'center',
                'text-decoration': 'none',
                'border': '1px solid rgb(255, 255, 255)',
                'color': 'rgb(255, 255, 255) !important',
                'padding': '2px 7px',
                'margin': '4px 0px 3px 0',
                'float': 'right'
            }
        }
    }

    var C = {
        init: function () {
            defaultOptions.lang = C.UTIL.detectLang();
            defaultOptions.cookieName = defaultOptions.ns + '_' + defaultOptions.cookieName;
            C.POPUP.init();
        }
    }

    C.POPUP = {
        init: function () {
            this.initGlobalListeners();
        },

        initGlobalListeners: function () {
            //if (C.UTIL.checkCookie(defaultOptions.cookieName) != defaultOptions.cookieValue) {
				//alert(C.UTIL.checkCookie(defaultOptions.cookieName));
				//if (C.UTIL.checkCookie(defaultOptions.cookieName) == null || C.UTIL.checkCookie(defaultOptions.cookieName) =="" || //C.UTIL.checkCookie(defaultOptions.cookieName) ==" ") {
				if (localStorage.getItem(defaultOptions.cookieName) == null) {
                  this.show();
                 }
        },

        show: function () {
            var body = document.getElementsByTagName('body')[0],
                div = document.createElement('div'),
                label = C.UTIL.translate('text'),
                url = C.UTIL.translate('url') || defaultOptions.defaultPrivacyURL;

            label = label.replace(/\[cookie_accept_url\](.+?)\[\/cookie_accept_url\]/g, '<a href="' + url + '" style="' + C.UTIL.createCSSMarkup(defaultOptions.cssStyles.aCookieLaw, ';') + '" >$1</a>');

            div.setAttribute('id', defaultOptions.ns + '-' + 'cookie-law');
            div.style.cssText = C.UTIL.createCSSMarkup(defaultOptions.cssStyles.divCookieLaw, ';');

            div.innerHTML = label;
            var newLine = document.createElement('p');		
		    newLine.appendChild(this.createRejectBtn());
            newLine.appendChild(this.createCloseBtn());
			div.appendChild(newLine);

            body.insertBefore(div, body.firstChild);
        },

        createCloseBtn: function () {
            var link = document.createElement('a'),
                linkText = document.createElement('span'),
                mq;

            if (this.isMediaQueriesSupported()) {
                var mq = window.matchMedia("(max-width: 768px)"),
                    setMQ = function (mq) {
                        if (mq.matches) {
                            link.style.cssText = C.UTIL.createCSSMarkup(defaultOptions.cssStyles.aCookieLawHideMobile, ';');
                        } else {
                            link.style.cssText = C.UTIL.createCSSMarkup(defaultOptions.cssStyles.aCookieLawHide, ';');
                        }
                    }

                setMQ(mq, link);
                mq.addListener(setMQ);
            } else {
                link.style.cssText = C.UTIL.createCSSMarkup(defaultOptions.cssStyles.aCookieLawHide, ';');
            }

            linkText.innerHTML = C.UTIL.translate('closebuttonText');

            link.setAttribute('href', "javascript:void(0);");
            link.appendChild(linkText);

            link.onclick = function () {
                C.POPUP.remove();
                return false;
            };

            return link;
        },
     createRejectBtn: function () {
            var link = document.createElement('a'),
                linkText = document.createElement('span'),
                mq;

            if (this.isMediaQueriesSupported()) {
                var mq = window.matchMedia("(max-width: 768px)"),
                    setMQ = function (mq) {
                        if (mq.matches) {
                            link.style.cssText = C.UTIL.createCSSMarkup(defaultOptions.cssStyles.aCookieLawHideMobile, ';');
                        } else {
                            link.style.cssText = C.UTIL.createCSSMarkup(defaultOptions.cssStyles.aCookieLawHide, ';');
                        }
                    }

                setMQ(mq, link);
                mq.addListener(setMQ);
            } else {
                link.style.cssText = C.UTIL.createCSSMarkup(defaultOptions.cssStyles.aCookieLawHide, ';');
            }

            linkText.innerHTML = C.UTIL.translate('rejectbuttonText');

            link.setAttribute('href', "javascript:void(0);");
            link.appendChild(linkText);

            link.onclick = function () {
                C.POPUP.reject();
                return false;
            };

            return link;
        },
        isMediaQueriesSupported: function () {
            return (typeof window.matchMedia != 'undefined' || typeof window.msMatchMedia != 'undefined');
        },

        setResponsiveMargin: function (mq, link) {
            if (mq.matches) {
                link.style.cssText = C.UTIL.createCSSMarkup(defaultOptions.cssStyles.aCookieLawHideMobile, ';');
            } else {
                link.style.cssText = C.UTIL.createCSSMarkup(defaultOptions.cssStyles.aCookieLawHide, ';');
            }
        },

        remove: function () {
            var element = document.getElementById(defaultOptions.ns + '-' + 'cookie-law');
            element.parentNode.removeChild(element);
            localStorage.setItem(defaultOptions.cookieName, '1'); 
            C.UTIL.setCookie(defaultOptions.cookieName, defaultOptions.cookieValue, defaultOptions.cookieDuration);
        },
		reject: function () {
            var element = document.getElementById(defaultOptions.ns + '-' + 'cookie-law');
            element.parentNode.removeChild(element);
			localStorage.setItem(defaultOptions.cookieName, '0'); 
			 //C.UTIL.setCookie(defaultOptions.cookieName, defaultOptions.cookieRejectValue, defaultOptions.cookieDuration);
           
        }
    }

    C.UTIL = {
        setCookie: function (name, value, expiryDays, domain, path) {
            var exdate = new Date();
            exdate.setDate(exdate.getDate() + (expiryDays || 365));

            var cookie = [
                name + '=' + value,
                'expires=' + exdate.toUTCString(),
                'path=' + (path || '/')
            ];

            if (domain) {
                cookie.push('domain=' + domain);
            }

            document.cookie = cookie.join(';');
        },

        checkCookie: function (name) {
            var nameEQ = name + '=';
            var ca = document.cookie.split(';');

            for (var i = 0; i < ca.length; i++) {
                var c = ca[i];

                while (c.charAt(0) == ' ') {
                    c = c.substring(1, c.length);
                }

                if (c.indexOf(nameEQ) == 0) {
                    return c.substring(nameEQ.length, c.length);
                }
            }

            return null;
        },

        detectLang: function () {
            var urlParamLang = (location.search.split('lang=')[1] || '').split('&')[0];

            if (typeof urlParamLang != 'undefined' && urlParamLang != '') {
                return urlParamLang.replace('_', '-');
            }

            var htmlLangTag = document.getElementsByTagName('html')[0].getAttribute('lang');

            if (typeof htmlLangTag != 'undefined') {
                return htmlLangTag.replace('_', '-');
            }

            var detectedLang = (navigator.languages && navigator.languages[0]) || navigator.language || navigator.userLanguage;

            if (detectedLang !== undefined) {
                detectedLang = detectedLang.substr(0, 5);
            } else {
                detectedLang = defaultOptions.fallbackLang;
            }

            return detectedLang;
        },

        createCSSMarkup: function (obj) {
            var keys = Object.keys(obj);

            if (!keys.length)
                return '';

            var i, len = keys.length,
                result = '';

            for (i = 0; i < len; i++) {
                var key = keys[i],
                    val = obj[key];

                result += key + ':' + val + ';';
            }

            return result;
        },

        translate: function (key) {
            return defaultOptions.translations.hasOwnProperty(defaultOptions.lang) && defaultOptions.translations[defaultOptions.lang].hasOwnProperty(key) ?
                defaultOptions.translations[defaultOptions.lang][key] : defaultOptions.translations[defaultOptions.fallbackLang][key];
        }
    }

    window.addEventListener('load', function (event) {
        germanUI();
        internal_or_external();
        C.init();

    });
}());

// This function uses the navigator.languages property to get the browser language preference
// and the geolocation API to get the user's location
function germanUI() {
    // Get the first language from the navigator.languages array
    let lang = navigator.languages[0];
    console.log(`The language is: ${lang}`);
    if (lang === 'de'){
        document.getElementById('hdr-header-german').style.display="block";
        document.getElementById('hdr-footer-german').style.display="block";

        document.getElementById('hdr-header-english').style.display="none";
        document.getElementById('hdr-footer-english').style.display="none";
    }
    else 
    {
        document.getElementById('hdr-header-german').style.display="none";
        document.getElementById('hdr-footer-german').style.display="none";

        document.getElementById('hdr-header-english').style.display="block";
        document.getElementById('hdr-footer-english').style.display="block";
    }
  }

//This function is used to check if we are on the internal or external site and add an indicator to show the user.
function internal_or_external(){
    let ptag = document.getElementById('internal_or_external'); // select the header by its class
    if (window.location.href.includes("/careersection/in/"))
    {
        ptag.textContent += "HDR internal job board."; // append the new text
    }
    else if (window.location.href.includes("/careersection/ex/")){
        ptag.textContent += "HDR external job board."; // append the new text
    }
}
  