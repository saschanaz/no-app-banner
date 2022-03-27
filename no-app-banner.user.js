// ==UserScript==
// @name         no-app-banner
// @namespace    http://github.com/saschanaz/no-app-banner
// @version      0.1
// @description  Hide annoying banners that suggests installing apps
// @author       Kagami Sascha Rosylight
// @match        https://m.joongna.com/home
// @match        https://www1.president.go.kr/petitions*
// @match        https://www.reddit.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    navigator.xNoAppSuggestion = true;

    function insertStyle(css) {
        const style = document.createElement("style");
        style.textContent = css;
        document.head.append(style);
    }

    if (location.host === "m.joongna.com") {
        // Removing portal breaks the page
        document.getElementById("portal").setAttribute("hidden", "");
        document.body.style.overflow = "";
        insertStyle("footer + div { display: none }");
    } else if (location.host === "www1.president.go.kr") {
        document.getElementById("app_connect").remove();
    } else if (location.host === "www.reddit.com") {
        insertStyle(".XPromoPopup, .TopNav__promoButton { display: none }");
        document.body.style.cssText = "height: initial; width: initial; position: initial; overflow: initial";

        // TODO: The above works on the main page but not on posts
    }
})();
