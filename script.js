var btn = document.getElementById('countBtn');
var inputField = document.getElementById('input');
var result = document.getElementById('result');
btn.addEventListener('click', countWords);
function countWords() {
    var text = inputField.value;
    var words = text.split(" ");
    var counts = new Array();
    result.innerHTML = "";
    words.forEach(function (x) { counts[x] = (counts[x] || 0) + 1; });
    var uniqueWords = Array.from(new Set(words));
    uniqueWords.forEach(function (x) { result.innerHTML += (x + ' : ' + counts[x] + '<br />'); });
    // for (var word of counts) {
    //     str += word + ' : ' + counts[word];
    // }
    // console.log(str);
}
//# sourceMappingURL=script.js.map