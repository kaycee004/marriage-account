function myTextOne() {
  const copyText = document.getElementById("numb1");

  copyText.select();
  copyText.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(copyText.value);
  alert("copied");
}

// function myTextTwo() {
//   const copyText = document.getElementById("numb2");

//   copyText.select();
//   copyText.setSelectionRange(0, 99999);
//   navigator.clipboard.writeText(copyText.value);
// //   alert("copied" + copyText.value);
// }
// function myTextThree() {
//   const copyText = document.getElementById("numb3");

//   copyText.select();
//   copyText.setSelectionRange(0, 99999);
//   navigator.clipboard.writeText(copyText.value);
//   alert("copied");
// }
// function myTextFour() {
//   const copyText = document.getElementById("numb4");

//   copyText.select();
//   copyText.setSelectionRange(0, 99999);
//   navigator.clipboard.writeText(copyText.value);
//   alert("copied");
// }
