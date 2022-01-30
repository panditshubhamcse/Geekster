var btn = document.getElementById("btn");
var container = document.getElementById("con");
var search = document.getElementById("search");

btn.addEventListener("click", function () {
  var url = `http://universities.hipolabs.com/search?country=${search.value}`;
  if (container.textContent != "") {
    container.innerHTML = "";
  }

  fetch(url)
    .then((data) => {
      return data.json();
    })
    .then((finalData) => {
      for (var i = 0; i < finalData.length; i++) {
        var tr = document.createElement("tr");
        var td = document.createElement("td");
        var td1 = document.createElement("td");
        var td2 = document.createElement("td");

        td.innerText = finalData[i].name;
        td1.innerText = finalData[i]["state-province"];
        td2.innerText = finalData[i].domains[0];
        tr.appendChild(td2);
        tr.appendChild(td);
        tr.appendChild(td1);
        container.appendChild(tr);
      }
    })
    .catch(() => {
      console.log("api failed");
    });
});
