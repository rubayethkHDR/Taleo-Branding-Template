
// other onload attached earlier
window.onload=function() {
    detectLang();
 };

// This function uses the navigator.languages property to get the browser language preference
// and the geolocation API to get the user's location
function detectLang() {
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
  