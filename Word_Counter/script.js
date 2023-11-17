let textbox = document.getElementById("textbox");
textbox.addEventListener('input',function() {
let text = this.value;
let char = text.length;
document.getElementById("char").innerHTML=char;
text = text.trim();
let a = text.split(" ");
let cleanlist = a.filter(function(elm){
    return elm != "";
})
let b = cleanlist.length;
document.getElementById("Word").innerHTML=b;
})

// let textbox = document.getElementById("textbox");
// textbox.addEventListener('input', function() {
//     var text = this.value; // Change 'e.Value' to 'e.target.value'
//     console.log(text);
    // let char = text.length;
    // document.getElementById("char").innerHTML = char;
    // let word = text.split(/\s+/); // Change space " " to a regular expression for better word splitting
    // let alpha = word.filter(word => word !== "").length; // Count non-empty words
    // document.getElementById("word").innerHTML = alpha;
// });
