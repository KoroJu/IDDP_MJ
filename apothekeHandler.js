function searchPrescription(){
  var number = document.getElementById("insurancePolicyNumber").value;
  var table = document.getElementById("prescription");
/*  if(number == ""){
    return;
  }*/
  console.log(table.rows.length-1);
  var j = table.rows.length-1;
  while(j != 0){
    table.deleteRow(j);
    j--;
  }

  var url
  var getRequest = new XMLHttpRequest();


  getRequest.addEventListener("load", () => {
    const parsedData = JSON.parse(getRequest.responseText);
    console.log(parsedData);
    for(var i = 0; i<parsedData.length;i++){
      console.log(table.rows.length-1);
      var row = table.insertRow(1);
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      var cell3 = row.insertCell(2);
      cell1.innerHTML = parsedData[i].insurancePolicyNumber;
      cell2.innerHTML = parsedData[i].date;
      cell3.innerHTML = parsedData[i].description;
    }
  });

  getRequest.open("GET", "http://127.0.0.1:4000/api/prescription/"+number);
  getRequest.send();



}
