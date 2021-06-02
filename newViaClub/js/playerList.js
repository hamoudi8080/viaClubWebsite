var document, DOMParser, XMLHttpRequest;



    function readXML() {
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          showData(this);
        }
      };
      xhttp.open("GET", "xml/playerList.xml", true);
      xhttp.send();
    }

    // returns the raw xml dom
    /*
    function readXML() {
      fetch("xml/HarryPotter.xml")
        .then((response) => response.text())
        .then((str) => new DOMParser().parseFromString(str, "text/xml"))
        .then((data) => showData(data));
    }*/

    function showData(xml) {
      var i;
      var xmlDoc = xml.responseXML;
      var table =
        "<tr><th class='tableStyles'>Name</th><th class='tableStyles'>Number</th><th class='tableStyles'>Position</th></tr>";
      var x = xmlDoc.getElementsByTagName("players");
      for (i = 0; i < x.length; i++) {
        table +=
          "<tr><td class='tableStyles'>" +
          x[i].getElementsByTagName("name")[0].childNodes[0].nodeValue +
          "</td><td class='tableStyles'>" +
          x[i].getElementsByTagName("number")[0].childNodes[0].nodeValue +
          "</td>" +
          "<td class='tableStyles'>" +
          x[i].getElementsByTagName("positions")[0].childNodes[0].nodeValue +
          "</td></tr>";
      }
      document.getElementById("playersTable").innerHTML = table;
    }
    //function call to the readXML() function
    readXML();
