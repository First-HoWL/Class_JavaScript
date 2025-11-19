function bubblesort(array){
    let is_changed = true;
    while (is_changed){
        is_changed = false;
        for (let i = 0; i < array.length - 1; i++){
            if (array[i] > array[i + 1]){
                let a = array[i];
                array[i] = array[i + 1];
                array[i + 1] = a;
                is_changed = true;
            }
        }
    }
    return array;
}


function randint(a, b){
    return Math.floor(Math.random() * (b-a)) + a
}




function toHex(c){
    let hex = c.toString(16);
    return hex.length === 1 ? "0" + hex : hex;
  };

function hexToRgb(hex) {
    let cleanHex = hex.replace('#', '');

    let r = parseInt(cleanHex.substring(0, 2), 16);
    let g = parseInt(cleanHex.substring(2, 4), 16);
    let b = parseInt(cleanHex.substring(4, 6), 16);

    return {r, g, b};
}


function update(){
    let form = document.querySelector("form#textForm");
    let ColorR = form.querySelector("input#colorR");
    let ColorG = form.querySelector("input#colorG");
    let ColorB = form.querySelector("input#colorB");
    let colorPicker = form.querySelector("input[type=color]")
    colorPicker.value = `#${toHex(parseInt(ColorR.value))}${toHex(parseInt(ColorG.value))}${toHex(parseInt(ColorB.value))}`;
    console.log(`#${toHex(ColorR.value)}${toHex(ColorG.value)}${toHex(ColorB.value)}`);
}
function updateRGB(){
    let form = document.querySelector("form#textForm");
    let ColorR = form.querySelector("input#colorR");
    let ColorG = form.querySelector("input#colorG");
    let ColorB = form.querySelector("input#colorB");
    let colorPicker = form.querySelector("input[type=color]")
    let val = hexToRgb(colorPicker.value);
    ColorR.value = val.r;
    ColorG.value = val.g;
    ColorB.value = val.b;
}

document.addEventListener("DOMContentLoaded", ()=>{
    let theme = localStorage.getItem("darkTheme")
    console.log(theme);
    if(theme != null && theme == "true"){
        document.querySelector("input#themeSwitch").setAttribute("checked", true)
        document.querySelector("#max_div").classList.add("theme-dark")
    }


    document.querySelector("#Fbtn").addEventListener("click", ()=>{
        let progressBar = document.querySelector("#progressBar")
        progressBar.value = (progressBar.value + 0.1) % 1
    })

    document.querySelector("form#textForm").addEventListener("submit", (event) => {
        event.preventDefault()
        let form = document.querySelector("form#textForm");
        let colorBox = document.querySelector("div#colorBox");
        let colorPicker = form.querySelector("input[type=color]")
        console.log("Yes!")
        let element = document.createElement("article")
        let a = document.createElement("div");
        a.style.backgroundColor = colorPicker.value
        element.append(a)
        let b = document.createElement("span")
        b.textContent = colorPicker.value;
        element.append(b)
        colorBox.append(element)
    })

    document.querySelector("input#colorR").addEventListener("change", (event) =>{
        update();
    })
    document.querySelector("input#colorG").addEventListener("change", (event) =>{
        update();
    })
    document.querySelector("input#colorB").addEventListener("change", (event) =>{
        update();
    })
    document.querySelector("input[type=color]").addEventListener("change", (event) =>{
        updateRGB();
    })

    document.querySelector("input#themeSwitch")
    .addEventListener("click", (event) =>{
        let darkTheme = event.target.checked
        if(darkTheme) document.querySelector("#max_div").classList.add("theme-dark")
        else document.querySelector("#max_div").classList.remove("theme-dark")

        localStorage.setItem("darkTheme", darkTheme)
    })
    let strings = localStorage.getItem("strings")
    console.log("strings: " + strings)
    strings = strings === null ? [] : strings.split("\n")
    strings.forEach(item => {
        let p = document.createElement("p")
        p.textContent = item
        document.querySelector("div#strings").append(p)
    });

    document.querySelector("form#stringsForm")
    .addEventListener("submit", (event) =>{
        event.preventDefault()
        let form = event.target
        let str = form.querySelector("input[type=text]").value
        if(str){
            let p = document.createElement("p")
            p.textContent = str
            document.querySelector("div#strings").append(p)
            strings.push(str)
            localStorage.setItem("strings", 
                strings.join("\n")
            )
        }
    })

})




// homework
function main(){
    let select = document.querySelector("select#select");
    console.log(select.value);
    let selected = select.value;
    if(selected == 1){
        let age = prompt("age:");
        console.log(age)
        if(age < 13)
            alert("Kid");
        else if(age < 20)
            alert("teenagger");
        else if(age < 60)
            alert("adult");
        else 
            alert("pensioner");
    }
    if(selected == 2){
        let text = prompt("symbol:");
        console.log(text)
        if(text == 1)
            alert("!")
        if(text == 2)
            alert("@")
        if(text == 3)
            alert("#")
        if(text == 4)
            alert("$")
        if(text == 5)
            alert("%")
        if(text == 6)
            alert("^")
        if(text == 7)
            alert("&")
        if(text == 8)
            alert("*")
        if(text == 9)
            alert("(")
        if(text == 0)
            alert(")")
    }
    if(selected == 3){
        let text = parseInt(prompt("number:"));
        console.log(text)
        console.log(Math.trunc(text / 100))
        console.log(Math.trunc(text / 10) % 10)
        console.log(text % 10)
        if (Math.trunc(text / 100) == Math.trunc(text / 10)% 10 || Math.trunc(text / 100) == text % 10 || Math.trunc(text / 10)% 10== text % 10)
            alert("True")
        else
            alert("False")
    }

    if(selected == 4){
        let text = parseInt(prompt("year:"));
        console.log(text)
        if(text % 400 == 0){
            alert("True")
        }
        else if(text % 4 == 0 && text % 100 != 0){
            alert("True")
        }
        else{
            alert("False")
        }
    }
    if(selected == 5){
        let text = parseInt(prompt("number:"));
        console.log(text)
        let a = Math.trunc(text / 10000)
        let b = Math.trunc(text / 1000) % 10
        let c = Math.trunc(text / 100) % 10
        let d = Math.trunc(text / 10) % 10
        let e = text % 10
        console.log(a)
        console.log(b)
        console.log(c)
        console.log(d)
        console.log(e)
        if (a == e && b == d)
            alert("True")
        else{
            alert("False")
        }
    }
    if(selected == 6){
        let text = parseInt(prompt("number:"));
        console.log(text)
    }
    if(selected == 7){
        let text = parseInt(prompt("number:"));
        console.log(text)
    }
    if(selected == 8){
        let text = parseInt(prompt("number:"));
        console.log(text)
    }
    if(selected == 9){
        let text = parseInt(prompt("number:"));
        console.log(text)
    }
    if(selected == 10){
        let text = parseInt(prompt("number:"));
        console.log(text)
    }




}