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

async function digestMessage(message) {
  const msgUint8 = new TextEncoder().encode(message); // encode as (utf-8) Uint8Array
  const hashBuffer = await window.crypto.subtle.digest("SHA-256", msgUint8); // hash the message
  if (Uint8Array.prototype.toHex) {
    // Use toHex if supported.
    return new Uint8Array(hashBuffer).toHex(); // Convert ArrayBuffer to hex string.
  }
  // If toHex() is not supported, fall back to an alternative implementation.
  const hashArray = Array.from(new Uint8Array(hashBuffer)); // convert buffer to byte array
  const hashHex = hashArray
    .map((b) => b.toString(16).padStart(2, "0"))
    .join(""); // convert bytes to hex string
  return hashHex;
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

function deleteCookie(name) {
  setCookie(name, "", {
    'max-age': -1
  })
}

function getCookie(name) {
  let matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

function setCookie(name, value, attributes = {}) {

  attributes = {
    path: '/',
    // за потреби додайте інші типові значення
    ...attributes
  };

  if (attributes.expires instanceof Date) {
    attributes.expires = attributes.expires.toUTCString();
  }

  let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);

  for (let attributeKey in attributes) {
    updatedCookie += "; " + attributeKey;
    let attributeValue = attributes[attributeKey];
    if (attributeValue !== true) {
      updatedCookie += "=" + attributeValue;
    }
  }

  document.cookie = updatedCookie;
}





document.addEventListener("DOMContentLoaded", ()=>{
    let theme = localStorage.getItem("darkTheme")
    console.log("theme: " + theme);
    if(theme != null && theme == "true"){
        document.querySelector("input#themeSwitch").setAttribute("checked", true)
        document.querySelector("#max_div").classList.add("theme-dark")
    }

    
    products.forEach(item => {
        let shopGenDiv = document.querySelector("div#shopGenDiv")
        let div = document.createElement("div")
        let img = document.createElement("div")
        img.style.backgroundImage = `url(${item.foto})`
        img.classList.add("foto")
        let name = document.createElement("span")
        name.textContent = item.name
        let price = document.createElement("span")
        price.textContent = item.price

        div.append(img, name, price)
        
        shopGenDiv.append(div)

    })





    // let login = getCookie("loginPassword")
    // console.log(login)
    // if (login !== null && login != "null" && login !== undefined){
    //     login = JSON.parse(login)
    //     console.log(login)
    //     document.querySelector("p#pKnows").textContent += login.login
    //     document.querySelector("div#divKnows").style.display = "block"
    //     document.querySelector("form#loginForm").style.display = "none"
    // }

    // document.querySelector("button#signOut").addEventListener("click", (event) => {
    //     deleteCookie("loginPassword")
    //     location.reload();
    // })
    
    // document.querySelector("form#loginForm").addEventListener("submit", async (event) => {
    //     event.preventDefault()
    //     let passw = await digestMessage(document.querySelector("input#password").value).then((a) => {return a});
    //     // (async () => {
    //     // }) ();
    //     console.log(passw)
    //     let user = {
    //         login: document.querySelector("input#login").value,
    //         password: passw
    //     }
    //     if(document.querySelector("input#rememberme").checked == true){
    //         setCookie("loginPassword", JSON.stringify(user), {'max-age': 3600})
    //     }
    //     event.target.submit()

    // })


    // let questions = localStorage.getItem("questions")
    // console.log(questions)
    // questions = questions === null ? [] : JSON.parse(questions)
    
    // questions.forEach(item => {

    //     let arr = document.createElement("article")

    //     arr.style.backgroundColor = "grey"
    //     arr.style.padding = "2px"
    //     arr.style.marginTop = "5px"

    //     let p = document.createElement("p")
    //     let A1 = document.createElement("span")
    //     A1.style.backgroundColor = "white"
    //     let br = document.createElement("br")
    //     let A2 = document.createElement("span")
    //     A2.style.backgroundColor = "white"  
    //     p.textContent = item.question
    //     let rnd = randint(0, 2)
    //     if(rnd == 0){
    //         A1.textContent = item.correct
    //         A2.textContent = item.uncorrect
    //     }
    //     else{
    //         A2.textContent = item.correct
    //         A1.textContent = item.uncorrect
    //     }
    //     arr.append(p)
    //     arr.append(A1)
    //     arr.append(br)
    //     arr.append(A2)



    //     document.querySelector("div#questions").append(arr)
    // })


    // document.querySelector("form#CreateTestForm").addEventListener("submit", (event) => {
    //     event.preventDefault()
    //     let Question = {
    //         question: document.querySelector("input#question").value,
    //         correct: document.querySelector("input#correctAnswer").value, 
    //         uncorrect: document.querySelector("input#unCorrectAnswer").value 
    //     }
    //     questions.push(Question)
    //     localStorage.setItem("questions", JSON.stringify(questions))
        
    //     event.target.submit()

    // })



    // let colorID = 0;

    
    // let colors = localStorage.getItem("colors")
    // console.log("colors: " + colors)
    // colors = colors === null ? [] : colors.split("\n")
    // colors.forEach(item => {
    //     let form = document.querySelector("form#textForm");
    //     let colorBox = document.querySelector("div#colorBox");
    //     let colorPicker = form.querySelector("input[type=color]")
    //     console.log("Yes!")
    //     let element = document.createElement("article")
    //     let a = document.createElement("div");
    //     a.style.backgroundColor = item
    //     element.append(a)
    //     let b = document.createElement("span")
    //     b.textContent = item;
    //     let div = document.createElement("div")
    //     let button = document.createElement("button")
    //     button.id = "a" + colorID++;
    //     div.style.display = "flex";
    //     div.style.width = "100%";
    //     div.style.justifyContent = "flex-end";

    //     button.addEventListener("click", event =>{
    //         let id = button.id;
    //         document.querySelector(`#${id}`).parentElement.parentElement.remove();
    //         colors.splice(id, 1)
    //         localStorage.setItem("colors", 
    //             colors.join("\n")
    //         )
    //     })
    //     div.append(button);
    //     element.append(b)
    //     element.append(div);
    //     colorBox.append(element)

    // });
    // document.querySelector("form#textForm").addEventListener("submit", (event) => {
    //     event.preventDefault()
    //     let form = document.querySelector("form#textForm");
    //     let colorBox = document.querySelector("div#colorBox");
    //     let colorPicker = form.querySelector("input[type=color]")
    //     console.log("Yes!")
    //     let element = document.createElement("article")
    //     let a = document.createElement("div");
    //     a.style.backgroundColor = colorPicker.value
    //     element.append(a)
    //     let b = document.createElement("span")
    //     b.textContent = colorPicker.value;
    //     let div = document.createElement("div")
    //     let button = document.createElement("button")
    //     button.id = "a" + colorID++;
    //     div.style.display = "flex";
    //     div.style.width = "100%";
    //     div.style.justifyContent = "flex-end";

    //     button.addEventListener("click", event =>{
    //         let id = button.id;
    //         document.querySelector(`#${id}`).parentElement.parentElement.remove();
    //         colors.splice(id, 1)
    //         localStorage.setItem("colors", 
    //             colors.join("\n")
    //         )

    //     })
    //     div.append(button);
        
    //     colors.push(colorPicker.value)
    //     localStorage.setItem("colors", 
    //             colors.join("\n")
    //         )

    //     element.append(b)
    //     element.append(div);
    //     colorBox.append(element)
    // })

    // document.querySelector("input#colorR").addEventListener("change", (event) =>{
    //     update();
    // })
    // document.querySelector("input#colorG").addEventListener("change", (event) =>{
    //     update();
    // })
    // document.querySelector("input#colorB").addEventListener("change", (event) =>{
    //     update();
    // })
    // document.querySelector("input[type=color]").addEventListener("change", (event) =>{
    //     updateRGB();
    // })

    document.querySelector("input#themeSwitch")
    .addEventListener("click", (event) =>{
        let darkTheme = event.target.checked
        if(darkTheme) document.querySelector("#max_div").classList.add("theme-dark")
        else document.querySelector("#max_div").classList.remove("theme-dark")

        localStorage.setItem("darkTheme", darkTheme)
    })


    // let strings = localStorage.getItem("strings")
    // console.log("strings: " + strings)
    // strings = strings === null ? [] : strings.split("\n")
    // strings.forEach(item => {
    //     let p = document.createElement("p")
    //     p.textContent = item
    //     document.querySelector("div#strings").append(p)
    // });

    // document.querySelector("form#stringsForm")
    // .addEventListener("submit", (event) =>{
    //     event.preventDefault()
    //     let form = event.target
    //     let str = form.querySelector("input[type=text]").value
    //     if(str){
    //         let p = document.createElement("p")
    //         p.textContent = str
    //         document.querySelector("div#strings").append(p)
    //         strings.push(str)
    //         localStorage.setItem("strings", 
    //             strings.join("\n")
    //         )
    //     }
    // })

})



// Homework

function firstfunc(numb){
    let sum = 0;
    for(let i = 0; i < numb; i++){
        if(numb % i == 0){
            sum += i
        }
    }   
    return (sum == numb)
}

function Secfunc(numbers){
    let numbb = []
    for(let i = numbers[0], j; i < numbers[1]; i++){
        if(firstfunc(i) == true)
            numbb.push(parseInt(i));
    }
    return numbb
}

function main(){
    let select = document.querySelector("select#select")
    let input = document.querySelector("input#inputHomework")
    console.log(select.value)
    let selected = select.value
    let inputValue = input.value

    if(selected == 1){
        alert(firstfunc(inputValue))
    }
    if(selected == 2){
        let numbers = []
        for (let i = 0; i < 2; i++){
            numbers[i] = parseInt(inputValue.split(" ")[i])
        }
        console.log(numbers)
        alert(Secfunc(numbers))
    }
    if(selected == 3){
        
    }
}