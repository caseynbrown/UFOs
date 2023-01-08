// import the data from data.js
const tableData = data;
// Reference the HTML table using d3
var tbody = d3.select("tbody");
// Simple JavaScript console.log statement
function printHello() {
    console.log("Hello there!");
  }
  // Takes two numbers and adds them
// Takes two numbers and adds them
function addition(a, b) {
    return a + b;
  }
  // Functions can call other functions
function doubleAddition(c, d) {
    var total = addition(65, 34) * 2;
    return total;
  }
// Converted to an arrow function
addition = (a, b) => a + b;
// Original doubleAddition function
function doubleAddition(c, d) {
    var total = addition(c, d) * 2;
    return total;
  }
  doubleAddition = (c, d)=> addition(c, d) * 2;
let friends = ["Sarah", "Greg", "Cindy", "Jeff"];
function listLoop(userList) {
    for (var i = 0; i < userList.length; i++) {
      console.log(userList[i]);
    }
 }
 function listLoop(userList) {
    for (var i = 0; i < userList.length; i++) {
      console.log(userList[i]);
    }
 }
 let vegetables = ["Carrots", "Peas", "Lettuce", "Tomatoes"];
 for (var i = 0; i < vegetables.length; i++) {
}
function buildTable(data) {

}
function buildTable(data) {
    tbody.html("");
  }
data.forEach((dataRow) => {
    let row = tbody.append("tr");
    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
      cell.text(val);
      }
    );
  });
  


