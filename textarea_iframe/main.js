var textArea = document.getElementById('textArea');
var iframe = document.getElementById('myIframe');

textArea.addEventListener('input', function() {
  iframe.contentDocument.body.innerHTML = textArea.value;
});
  
function answer() {
  var textArea = document.getElementById('textArea').value;
  var data = `<div class="sample"></div>`;

  // Remove extra spaces and line breaks from data1 and textArea
  data = data.replace(/\s/g, '');
  textArea = textArea.replace(/\s/g, '');

  if (textArea === data) {
    document.getElementById("show").innerHTML = "Correct";
  } else {
    document.getElementById("show").innerHTML = "Wrong";
  }
};