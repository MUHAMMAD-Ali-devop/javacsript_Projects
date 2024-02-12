let ytsk = document.getElementById("ytsk");
let ul = document.getElementById("list-container");

//adding click event on ADD button
function addtask() {
        if (ytsk.value === '') {
                alert("Enter task in input field first");
        } else {
                let li = document.createElement("li");
                let del = document.createElement('span');
                //inner html
                li.innerText = ytsk.value;
                ul.appendChild(li);
                del.innerHTML = '\u00d7';
                li.appendChild(del);
        }
        ytsk.value = '';
        savedata()
}

ul.addEventListener('click', function (e) {
        if (e.target.tagName === 'LI') {
                e.target.classList.toggle("checked");
                savedata()
        } else if (e.target.tagName === 'SPAN') {
                e.target.parentElement.remove();
                savedata()
        }
},false)
function savedata(){
        localStorage.setItem('data',ul.innerHTML);
}
function showdata(){
        ul.innerHTML = localStorage.getItem('data');
}
showdata();
