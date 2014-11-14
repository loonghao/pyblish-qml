"use strict";
/*global Qt*/


var color = {
    "background": Qt.rgba(0.3, 0.3, 0.3),
    "foreground": Qt.rgba(0.6, 0.6, 0.6),
    "text": "white"
};

var size = {
    "windowHeight": 500,
    "windowWidth": 400,
    "windowMinimumWidth": 200,
    "windowMinimumHeight": 200,
    "headerHeight": 40,
    "footerHeight": 35
};

var image = {
    "logo": "../img/logo-white.png",
    "communication": "../img/communication.png"
}

var margins = {
    "main": 5,
    "alt": 3
};

// Handshake attributes
var host = "None",
    port = "0",
    pyblishVersion = "0.0.0",
    endpointVersion = "0.0.0";