var document, DOMParser;

function readXML() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            showData(this);
        }
    };
    xhttp.open("GET", "xml/matchList.xml", true);
    xhttp.send();
}

function showData(xml) {
    var i;
    //requist object
    var xmlDoc = xml.responseXML;
    var x = xmlDoc.getElementsByTagName("date");


    var listLength = x.length;
    console.log(x);
    
    var table = "<table>";
     
    for(var i = 0; i<listLength; i++) {
        
        table += 
                "<tr><td>" + x[i].getElementsByTagName("mydate")[0].childNodes[0].nodeValue + "</td><td>"
                 + x[i].getElementsByTagName("month")[0].childNodes[0].nodeValue + "</td><td>" 
                 + x[i].getElementsByTagName("year")[0].childNodes[0].nodeValue + "</td><td>" 
                 + x[i].getElementsByTagName("day")[0].childNodes[0].nodeValue +
                 "</td></tr>";
                 
    }

       
    table +="</table>";

    var y = xmlDoc.getElementsByTagName("startTime");


   
    

    var listLength2 = y.length;
    
    var table2 = "<table>";
     
    for(var i = 0; i<listLength2; i++) {
        
        table2 += 
                "<tr><td>" + y[i].getElementsByTagName("start")[0].childNodes[0].nodeValue + "</td><td>"
                 + y[i].getElementsByTagName("hour")[0].childNodes[0].nodeValue + "</td><td>" 
                 + y[i].getElementsByTagName("minute")[0].childNodes[0].nodeValue + "</td><td>" 
                 + y[i].getElementsByTagName("second")[0].childNodes[0].nodeValue +
                 "</td></tr>";
                 
    }

    table2 +="</table>";



    var g = xmlDoc.getElementsByTagName("endTime");

    var listLength3 = g.length;
    
    var table3 = "<table>";
     
    for(var i = 0; i<listLength3; i++) {
        
        table3 += 
                "<tr><td>" + g[i].getElementsByTagName("end")[0].childNodes[0].nodeValue + "</td><td>"
                 + g[i].getElementsByTagName("hour")[0].childNodes[0].nodeValue + "</td><td>" 
                 + g[i].getElementsByTagName("minute")[0].childNodes[0].nodeValue + "</td><td>" 
                 + g[i].getElementsByTagName("second")[0].childNodes[0].nodeValue +
                 "</td></tr>";
                 
    }

    table3 +="</table>";





    var table4 = "<table>";
    table4 +="<tr><td>" + xmlDoc.getElementsByTagName("matchType")[0].textContent; +
    "</td></tr>";

    table4 +="</table>";

  
   var table5 = "<table>";
    table5 +="<tr><td>" + xmlDoc.getElementsByTagName("opponent")[0].textContent; +
    "</td></tr>";

    table5 +="</table>";





    document.getElementById("MyMatchList").innerHTML = table + table2 + table3 ;
    document.getElementById("MyMatchList0").innerHTML =  table5
    document.getElementById("MyMatchList1").innerHTML =  table4
}
readXML();


