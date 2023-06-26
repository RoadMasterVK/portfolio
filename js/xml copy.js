function loadDataXML() {
    var xhr = new XMLHttpRequest();
    xhr.onload = function() {
      if (xhr.status === 200) {
        var response = JSON.parse(xhr.responseText);
        processResponse(response);
        setTimeout(clearData, 20000);
      } else {
        document.getElementById("resultxml").innerHTML = "Ошибка загрузки данных";
      }
    };
    xhr.open("GET", "/json/taskb.json", true);
    xhr.send();
  }
  
  function processResponse(data) {
    var resultElement = document.getElementById("resultxml");
    var html = "";
    for (var i = 0; i < data.length; i++) {
      html += "<p><strong>Task " + data[i].str + ":</strong> " + data[i].Task + "</p>";
    }
    resultElement.innerHTML = html;
  }
  
  function clearData() {
    document.getElementById("resultxml").innerHTML = "";
  }
  