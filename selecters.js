//                                  javaScript have 4 type of Selecters
//                                  -----------------------------------

// 01. document.getElementById("");
// 02. document.getElementsByClassName(""); - array
// 03. document.getElementsByTagName(""); - array
// 04. document.querySelectorAll(""); - array

// we can use querySelecterAll("");
// * - .class
// * - #id
// * - tagname

// 01. document.getElementById("");

document.getElementById("getId").innerText = "document.getElementById()";

// 02. document.getElementsByClassName(""); - array

var classSelecter = document.getElementsByClassName("class");

for (i = 0; i < classSelecter.length; i++) {
  classSelecter[i].style.color = "red";
}

// 03. document.getElementsByTagName(""); - array

var heading = document.getElementsByTagName("h1");

for (i = 0; i < heading.length; i++) {
  heading[i].style.color = "blue";
}

// 04. document.querySelectorAll(""); - array

var list = document.querySelectorAll(".list");

for (i = 0; i < list.length; i++) {
  list[i].innerHTML = list[i].innerHTML + "<li>C</li>";
}
