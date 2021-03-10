/**
 *
 * Author: Anibal Copitan
 * Website: wwww.anibalcopitan.com
 * E-mail: googleextension@pprios.com
 *
 */
var injectedCode = "\
var counter = 0;\
var varTimeOut;\
function unlockContent() {\
	counter += 1; \
	if ( document.getElementById('signwall-app') !== null) {\
		document.querySelector('html').classList.remove('overflow-hidden');\
		document.querySelector('body').classList.remove('overflow-hidden');\
		document.querySelector('body').style='';\
		document.getElementById('signwall-app').remove();\
	}\
	/* kill process (remove if is live)*/\
	if ( counter == 7 ) {\
		clearTimeout(varTimeOut);\
	}\
}\
/* Execute script*/\
unlockContent();\
varTimeOut = setInterval(unlockContent, 1000);\
";

var script = document.createElement('script');
script.appendChild(document.createTextNode(''+ injectedCode +''));
(document.body || document.head || document.documentElement).appendChild(script);






