function route() {
    let hashTag = window.location.hash;
    // console.log("hash tag " + hashTag);
    let pageID = hashTag.replace("#/", "");

    if (pageID == "") {
        // navToPage("home");
        MODEL.getMyVariable("home");

    } else {
        // navToPage(pageID);
        MODEL.getMyVariable(pageID);

    } 
    //use model
    MODEL.getMyVariable(pageID);
}

function initListeners() {
    $(window).on("hashchange", route);
    route();
}

$(document).ready(function() {
    // navToPage("home");
    initListeners();
});


function loginAlert() {
    var txt;
    if (confirm("You are logged in")) {
        txt = "Welcome";
    }
}

function logoutAlert() {
    var txt;
    if (confirm("You are logged out")) {
        txt = "Thank You";
    }
}
