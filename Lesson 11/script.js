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






let id = 0;
document.addEventListener("DOMContentLoaded", ()=>{
    let theme = localStorage.getItem("darkTheme")
    console.log("theme: " + theme);
    if(theme != null && theme == "true"){
        document.querySelector("input#themeSwitch").setAttribute("checked", true)
        document.querySelector("#max_div").classList.add("theme-dark")
    }

    setInterval(()=>{
      // https://meowfacts.herokuapp.com/?count=10&lang=ukr
      let CatFacts = document.querySelector("div#CatFacts")
      fetch("https://meowfacts.herokuapp.com/?count=1&lang=ukr")
      .then(response => response.json())
      .then(data => {
        let p = document.createElement("p")
        let CatFacts = document.querySelector("div#CatFacts")
        p.id = "d" + id++;
        p.textContent = data.data
        CatFacts.prepend(p)
        console.log(data.data)
      })
      let i = 0;
      while(CatFacts.children.length > 5){
        let a = CatFacts.lastChild
        if(a !== null)
          a.remove()
      }
      console.log(CatFacts.children.length)
      console.log(CatFacts.children)

    }, 5000)
    
    // fetch("https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json").then(response => response.json()).then(data =>
    //   {for(code in data){
    //     let option = document.createElement("option")
    //   option.textContent = data[code]
    //   option.value = code
    //   document.querySelector("#countrySelect").append(option)
    //   }
    // })





    document.querySelector("input#themeSwitch")
    .addEventListener("click", (event) =>{
        let darkTheme = event.target.checked
        if(darkTheme) document.querySelector("#max_div").classList.add("theme-dark")
        else document.querySelector("#max_div").classList.remove("theme-dark")

        localStorage.setItem("darkTheme", darkTheme)
    })


})


