var request = new XMLHttpRequest();
request.open("GET", "../dataxml/items.xml", false);
request.send();
var xml = request.responseXML;
var items = xml.getElementsByTagName("items");

for(var i = 0; i < items.length; i++) {
    var item = items[i];
    var item1 = item.getElementsByTagName("item1");
    var item2 = item.getElementsByTagName("item2");

    for(var j = 0; j < item1.length; j++) {
        document.getElementById("prop1").innerHTML = item1[j].childNodes[0].nodeValue;
    }

    for(var j = 0; j < item2.length; j++) {
        document.getElementById("prop2").innerHTML = item1[j].childNodes[0].nodeValue;
    }


}