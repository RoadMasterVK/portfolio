function loadDataXML() {
    var xhr = new XMLHttpRequest();
    xhr.onload = function() {
      if (xhr.status === 200) {
        var response = JSON.parse(xhr.responseText);
        processResponse(response);
        setTimeout(clearData, 20000);
      } else {
        document.getElementById("resultxml").innerHTML = "Error data loading";
      }
    };
    xhr.open("GET", "/json/taskb.json", true);
    xhr.send();
  }

  function processResponse(data) {
    var table = document.getElementById("yourTableId");

    for (var i = 0; i < data.length; i++) {
      var row = document.createElement("tr");

      var numberCell = document.createElement("td");
      numberCell.textContent = data[i].str;
      row.appendChild(numberCell);

      var taskCell = document.createElement("td");
      taskCell.textContent = data[i].Task;
      row.appendChild(taskCell);

      var completedCell = document.createElement("td");
      completedCell.textContent = data[i].Completed;
      row.appendChild(completedCell);

      table.appendChild(row);
    }
  }

  function clearData() {
    document.getElementById("yourTableId").innerHTML = "";
  }

  