var str = '\
        <style>\
button {\
    cursor: pointer;\
    outline: none;\
    border: none;\
 }\
 a {\
    outline:none;\
    text-decoration: none;\
 }\
 #sert__bg {\
    height: 100%;\
    width: 100%;\
    position: fixed;\
    top: 0;\
    left: 0;\
    z-index: 1000;\
    background-color: rgba(0, 0, 0, 0.7);\
    display: none;\
}\
#sert__bg.is-show {\
    display:block;\
}\
\
.sert {\
    width: 800px;\
    height: 500px;\
    top: 50%;\
    left: 50%;\
    -webkit-transform: translate(-50%, -50%);\
    -moz-transform: translate(-50%, -50%);\
    -ms-transform: translate(-50%, -50%);\
    -o-transform: translate(-50%, -50%);\
    transform: translate(-50%, -50%);\
    position: relative;\
    background-image: url(../sert/assets/img/sert.jpg);\
    background-repeat: no-repeat;\
    -webkit-background-size: cover;\
    -o-background-size: cover;\
    background-size: cover;\
    background-position: center;\
    display: -webkit-box;\
    display: -webkit-flex;\
    display: -moz-box;\
    display: -ms-flexbox;\
    display: flex;\
    -webkit-box-align: end;\
    -webkit-align-items: flex-end;\
    -moz-box-align: end;\
    -ms-flex-align: end;\
    align-items: flex-end;\
    -webkit-box-orient: vertical;\
    -webkit-box-direction: normal;\
    -webkit-flex-direction: column;\
    -moz-box-orient: vertical;\
    -moz-box-direction: normal;\
    -ms-flex-direction: column;\
    flex-direction: column;\
    padding: 43px 67px;\
}\
\
.sert__body {\
    display: -webkit-box;\
    display: -webkit-flex;\
    display: -moz-box;\
    display: -ms-flexbox;\
    display: flex;\
    -webkit-box-align: center;\
    -webkit-align-items: center;\
    -moz-box-align: center;\
    -ms-flex-align: center;\
    align-items: center;\
    -webkit-box-orient: vertical;\
    -webkit-box-direction: normal;\
    -webkit-flex-direction: column;\
    -moz-box-orient: vertical;\
    -moz-box-direction: normal;\
    -ms-flex-direction: column;\
    flex-direction: column;\
}\
\
.sert__title {\
    color: #d23a35;\
    font-family: "Chopin Script";\
    font-size: 60px;\
    font-weight: 400;\
    line-height: 42px;\
}\
\
.sert__text {\
    color: #333333;\
    font-family: "Roboto";\
    font-size: 18px;\
    font-weight: 400;\
    line-height: 24px;\
    display: block;\
    margin: 18px 0;\
}\
.sert__href {\
    width: 199px;\
    height: 45px;\
    background-color: #d23a35;\
    -webkit-border-radius: 50px;\
    border: 2px solid transparent;\
    color: #ffffff;\
    font-family: "Roboto";\
    font-size: 16px;\
    font-weight: 400;\
    line-height: 41px;\
    text-align: center;\
    -webkit-transition: .3s;\
    -o-transition: .3s;\
    -moz-transition: .3s;\
    transition: .3s;\
}\
\
#sert__close {\
    top: 16px;\
    right: 16px;\
    color: #888888;\
    font-family: "Roboto";\
    font-size: 13px;\
    font-weight: 400;\
    line-height: 13px;\
    position: absolute;\
    background-color: transparent;\
    -webkit-transition: .3s;\
    -o-transition: .3s;\
    -moz-transition: .3s;\
    transition: .3s;\
}\
.sert__href:hover {\
    border: 2px solid #d23a35;\
    background-color: transparent;\
    color: #d23a35;\
    -webkit-transition: .3s;\
    -o-transition: .3s;\
    -moz-transition: .3s;\
    transition: .3s;\
}\
#sert__close:hover {\
    color: #383838;\
    -webkit-transition: .3s;\
    -o-transition: .3s;\
    -moz-transition: .3s;\
    transition: .3s;\
}\
@media (max-width: 970px) {\
    .sert {\
        width: 660px;\
        height: 410px;\
        padding: 30px 20px;\
    }\
}\
\
@media (max-width: 730px) {\
    .sert {\
        width: 440px;\
        height: 270px;\
    }\
    .sert__title {\
    font-size: 45px;\
    line-height: 32px;\
}\
    .sert__text {\
    max-width: 204px;\
    text-align: center;\
}\
        #sert__close {\
        top: 10px;\
        right: 10px;\
    }\
}\
\
@media (max-width: 470px) {\
    .sert {\
        width: 290px;\
        height: 275px;\
        background-position: left;\
        -webkit-box-align: center;\
    -webkit-align-items: center;\
    -moz-box-align: center;\
    -ms-flex-align: center;\
    align-items: center;\
     padding: 37px 20px;\
    }\
}\
        </style>\
      <div id="sert__bg">\
        <div class="sert">\
         <div class="sert__body">\
            <h2 class="sert__title">Подарочные <br>сертификаты</h2>\
            <span class="sert__text">от «Дипломат Клиник» — дарите красоту</span>\
            <a href="#" class="sert__href">Узнать подробнее</a>\
            <button id="sert__close">Закрыть</button>\
        </div>\
        </div>\
    </div>\
     ';

var div = document.createElement('div');
div.innerHTML = str;
document.body.appendChild(div)
document.getElementById('sert__close').onclick = function() {
    document.getElementById('sert__bg').remove();
}

function initPopup(selector) {
    var
        cookieName = 'autostart_' + $(selector).prop('id'),
        timeout = 5000,
        showClassname = 'is-show';

    if (typeof getCookie(cookieName) === 'undefined') {
        setTimeout(function() {
            $(selector).addClass(showClassname);
            setCookie(cookieName, true, { expires: 86400, path: '/' });
        }, timeout);
    }
}

$(document).ready(function() {
    initPopup('#sert__bg');
});

function setCookie(name, value, options) {
    options = options || {};

    var expires = options.expires;

    if (typeof expires == "number" && expires) {
        var d = new Date();
        d.setTime(d.getTime() + expires * 1000);
        expires = options.expires = d;
    }
    if (expires && expires.toUTCString) {
        options.expires = expires.toUTCString();
    }

    value = encodeURIComponent(value);

    var updatedCookie = name + "=" + value;

    for (var propName in options) {
        updatedCookie += "; " + propName;
        var propValue = options[propName];
        if (propValue !== true) {
            updatedCookie += "=" + propValue;
        }
    }

    document.cookie = updatedCookie;
}

function getCookie(name) {
    var matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}