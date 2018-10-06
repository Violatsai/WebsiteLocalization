var languageSelector = document.querySelector("#languageselector");
var currentLanguage = document.documentElement.lang;

var pathName = window.location.pathname;
pathName = pathName.split("/").pop();
var pageName = pathName.substr(0, pathName.indexOf('.'));

var selectString = "<p><select id='languageselect' onchange='changeLanguages()'>";
selectString += "<option>Choose:</option>"
if (currentLanguage != "en-us") { selectString += "<option value='../" + pageName + ".html'>English</option>";}
if (currentLanguage != "zw-tw") { selectString += "<option value='zw-tw/" + pageName + ".html'>中文</option>";}
selectString += "</select></p>";

languageSelector.innerHTML = selectString;

function changeLanguages() {
    var x = document.getElementById("languageselect").selectedIndex;
    //alert(document.getElementsByTagName("option")[x].value);
    window.location = document.getElementsByTagName("option") [x].value;
}