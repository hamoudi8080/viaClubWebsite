var document, DOMParser;

function readXML() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            showData(this);
        }
    };
    xhttp.open("GET", "schedule.xml", true);
    xhttp.send();
}

function showData(xml) {
    var i;
    //requist object
    var xmlDoc = xml.responseXML;
    var x = xmlDoc.getElementsByTagName("team");
    var listLength = x.length;
    console.log(x);
    
    var table = "<table>";
    for(var i = 0; i<listLength; i++) {
        table += 
                "<tr><td>" + x[i].getElementsByTagName("team")[0].childNodes[0].nodeValue + "</td><td>"
                 + x[i].getElementsByTagName("match")[0].childNodes[0].nodeValue + "</td><td>" 
                 + x[i].getElementsByTagName("goals")[0].childNodes[0].nodeValue + "</td><td>" 
                 + x[i].getElementsByTagName("points")[0].childNodes[0].nodeValue + "</td><td>" 
                 + x[i].getElementsByTagName("goalsOn")[0].childNodes[0].nodeValue  + 
                 "</td></tr>";
    }
    table +="</table>";

    document.getElementById("MyTable").innerHTML = table;
}

readXML();
