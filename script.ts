
    let btn = document.getElementById('countBtn');
    let inputField = <HTMLInputElement>document.getElementById('input');
    let result = document.getElementById('result');
    
    btn.addEventListener('click', countWords);

    function countWords()
    {
        let text = inputField.value;
        let words = text.split(" ");
        let counts = new Array();
        result.innerHTML = "";
        words.forEach(function(x) {counts[x] = (counts[x] || 0)+1;});
        let uniqueWords = Array.from(new Set(words));
        uniqueWords.forEach(function(x) { result.innerHTML += (x + ' : ' + counts[x] + '<br />');});
        
        
        // for (var word of counts) {
        //     str += word + ' : ' + counts[word];
        // }
        // console.log(str);
    }
