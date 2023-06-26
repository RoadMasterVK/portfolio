function loadData() {
  var xhr = new XMLHttpRequest();

  xhr.onload = function() {
    if (xhr.status === 200) {
      document.getElementById("result").innerHTML = xhr.responseText;
      setTimeout(function() {
        document.getElementById("result").innerHTML = ""; 
      }, 6000); 
    } else {
      document.getElementById("result").innerHTML = "Error data loading";
    }
  };

  xhr.open("GET", "data/data.txt", true);
  xhr.send();
}
