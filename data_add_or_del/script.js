
let fn = document.getElementById("fn");
let ln = document.getElementById("ln");
let ag = document.getElementById("ag");
let ey = document.getElementById("ey");
let btn = document.getElementById("btn");
let flag = 1;
let fname;
let lname;
let age;
let experience;
fn.addEventListener("input", function () {
  
        const value = fn.value;
        fname = value;
    
});
ln.addEventListener("input", function () {
    const value = ln.value;
    lname = value;
});
ag.addEventListener("input", function () {
    const value = ag.value;
    age = value;
});
ey.addEventListener("input", function () {
    const value = ey.value;
    experience = value;

});
btn.addEventListener("click", function () {
    let ufn = document.getElementById("ufn");
    let uln = document.getElementById("uln");
    let uag = document.getElementById("uag");
    let uey = document.getElementById("uey");
    if (fn.value == "") {
        ufn.style.cssText += "display:block";
        ufn.innerHTML = "Enter your first name";
        flag = 0;
    } 
    else {
        ufn.style.cssText += "display:none";
        flag = 1;
    } if (ln.value == "") {
        uln.style.cssText += "display:block";
        uln.innerHTML = "Enter your last name";
        flag = 0;
    } else {
        uln.style.cssText += "display:none";
        flag = 1;
    }

    if (ag.value == "") {
        uag.style.cssText += "display:block";
        uag.innerHTML = "Enter your age";

        flag = 0;
    } else {
        uag.style.cssText += "display:none";
        flag = 1;
    }

    if (ey.value == "") {
        uey.style.cssText += "display:block";
        uey.innerHTML = "Enter your experience";

        flag = 0;
    } else {
        uey.style.cssText += "display:none";
        flag = 1;
    }if(flag){
        // return true;
        let tb = document.getElementById("tb");
    let tr = document.createElement('tr');
    // let cl = data.cloneNode(true);
    // cl.firstElementChild.innerHTML = fname;
    // cl.firstElementChild.nextElementSibling.innerHTML = lname;
    // cl.firstElementChild.nextElementSibling.nextElementSibling.innerHTML = age;
    // cl.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.innerHTML = experience;
    // tb.appendChild(cl);
    let td1 = document.createElement("td");
    td1.textContent = fname;
    tr.appendChild(td1);
    let td2 = document.createElement("td");
    td2.textContent = lname;
    tr.appendChild(td2);
    let td3 = document.createElement("td");
    td3.textContent = age;
    tr.appendChild(td3);
    let td4 = document.createElement("td");
    td4.textContent = experience;
    tr.appendChild(td4);
    let td5 = document.createElement("td");
    let btn1 = document.createElement('button');
    btn1.textContent = "Delete";
    btn1.id = "btn1";
    td5.appendChild(btn1);
    tr.appendChild(td5);
    tb.appendChild(tr);
    btn1.addEventListener('click', function () {
        // td1.textContent = "";
        // td2.textContent = "";
        // td3.textContent = "";
        // td4.textContent = "";
tr.innerHTML = "";
    })
    }else{
        return false;
    }

//     let tb = document.getElementById("tb");
//     let tr = document.createElement('tr');
//     // let cl = data.cloneNode(true);
//     // cl.firstElementChild.innerHTML = fname;
//     // cl.firstElementChild.nextElementSibling.innerHTML = lname;
//     // cl.firstElementChild.nextElementSibling.nextElementSibling.innerHTML = age;
//     // cl.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.innerHTML = experience;
//     // tb.appendChild(cl);
//     let td1 = document.createElement("td");
//     td1.textContent = fname;
//     tr.appendChild(td1);
//     let td2 = document.createElement("td");
//     td2.textContent = lname;
//     tr.appendChild(td2);
//     let td3 = document.createElement("td");
//     td3.textContent = age;
//     tr.appendChild(td3);
//     let td4 = document.createElement("td");
//     td4.textContent = experience;
//     tr.appendChild(td4);
//     let td5 = document.createElement("td");
//     let btn = document.createElement('button');
//     btn.textContent = "Delete";
//     btn.id = "btn1";
//     td5.appendChild(btn);
//     tr.appendChild(td5);
//     tb.appendChild(tr);
//     btn.addEventListener('click', function () {
//         td1.textContent = "";
//         td2.textContent = "";
//         td3.textContent = "";
//         td4.textContent = "";
// // tr.innerHTML = "";
//     })
});





