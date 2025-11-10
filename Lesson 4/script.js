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

function dilnik(num){
    let array = new Int32Array(num / 2);
    let index = 0;
    for (let i = 2; i < num; i++){
        if (num % i == 0){
            array[index++] = i;
        }
    }
    let arrays = new Int32Array(index);
    for (let i = 0; i < index; i++){
        arrays[i] = array[i];
    }
    return arrays;
}
function dilniki(num, num2){
    let dilnik;
    if (num < num2){
        for (let i = 2; i < num; i++){
            if (num % i == 0 && num2 % i == 0){
                    dilnik = i;
            }
        }       
    }
    else{
        for (let i = 2; i < num2; i++){
           if (num % i == 0 && num2 % i == 0){
                    dilnik = i;
            }
        }
    }

    return dilnik;
}
// function third(array){
//     let dodatnih = 0, videmnih = 0, nuliv = 0, parni = 0, neparni = 0;
//     for (let i = 0; i < array.length; i++){
//         if (array[i] % 2 == 0){
//             parni++;
//         }
//         if (array[i] % 2 != 0){
//             neparni++;
//         }
//         if(array[i] > 0){
//             dodatnih++;
//         }
//         if(array[i] < 0){
//             videmnih++;
//         }
//         if(array[i] == 0){
//             nuliv++;
//         }
//     }
//     alert(`Додатніх:${dodatnih}\nВід'емніх:${videmnih}\nНулів:${nuliv}\nПарні:${parni}\nНепарні:${neparni}`);


// }

function fourQuestion(){
    let botDiapozon = 0;
    let topDiapozon = 100;
    let isAnswered = false;
    while(!isAnswered){
        let answ = prompt(`Ваше число(>, <, ==): ${Math.trunc(botDiapozon + (topDiapozon - botDiapozon) / 2)}`, "")
        
        if(answ === undefined || answ === null){
            break;
        }
        if(answ == "=="){
            isAnswered = true;
        }
        else if (answ == "<"){
            topDiapozon -= Math.trunc((topDiapozon - botDiapozon) / 2)
        }
        else if (answ == ">"){
            botDiapozon += Math.trunc((topDiapozon - botDiapozon) / 2)
        }
    }
    if( isAnswered)
        alert("I Win!");


}


function chooseGame(index){
    let array = new Int32Array(2);
    let arr;
    if (index == 1){
        let answ = dilnik(parseInt(prompt(`Введіть число:`, ""), 10));
        let answer = "";

        alert(`${answ}, `)
    }
    if (index == 2){
        arr = prompt(`Введіть числа: `, "").split(" ");
            for(let i =0; i < arr.length; i++){
                array[i] = parseInt(arr[i], 10);
            }

        alert(dilniki(array[0], array[1]))
    }
    if (index == 3){
        array = new Int32Array(10);
        arr = prompt(`Введіть числа: `, "").split(" ");
        for(let i =0; i < arr.length; i++){
            array[i] = parseInt(arr[i], 10);
        }
        third(array)
    }
    if (index == 4){
        fourQuestion();
    }
}



function main(){
    // let c = prompt(`Введіть номер завдання:`, "")
    // if (c !== undefined && c !== null)
    //     chooseGame(parseInt(c, 10));

    // print(rectangle);
    // alert(shirina(rectangle));
    // alert(visota(rectangle));
    // alert(square(rectangle));
    // alert(perimeter(rectangle));


    fArray = new Array();
    sArray = new Array();
    for(let i = 0; i < 5; i++){
        fArray.push(randint(1, 10))
    }
    for(let i = 0; i < 5; i++){
        sArray.push(randint(1, 10))
    }
    console.log(fArray)
    console.log(sArray)

    console.log(first(fArray, sArray))
    console.log(seccond(fArray, sArray))
    console.log(third(fArray, sArray))


    let Div24 = document.getElementById("div24");

    Div24.append(document.createElement('span'))
    Div24.lastChild.textContent += (first(fArray, sArray))

}

function Clear(){
    let Div24 = document.getElementById("div24");
    Div24.textContent = '';
}
function RNDColor(){
    let Div24 = document.getElementById("RNDNumber");
    Div24.style.color = `rgb(${randint(0, 255)}, ${randint(0, 255)}, ${randint(0, 255)})`;
}

function MakeText(){
    let InlineBlocks = document.querySelectorAll(".Inline-Blocks");
    InlineBlocks.forEach((element) =>{
        element.style.color = "White";
        element.style.paddingBottom = "10px"
        element.querySelector("p").style.paddingLeft = "20px";
        element.querySelector("p").style.paddingRight = "20px";
        element.querySelector("p").style.marginBottom = "0px";
        element.style.backgroundColor = "rgb(35,97,102)";
        element.querySelector("div").style.backgroundColor = "rgb(14,73,77)"
        element.querySelector("div").style.padding = "4px";
        element.querySelector("div").style.paddingLeft = "40px"
        element.querySelector("div").querySelector("h2").style.margin = "0px";
        element.style.marginBottom = "20px"

    });
    InlineBlocks.textContent = '';
}

function RNDNumber(){
    let RNDNUMB = document.getElementById("RNDNumber");
    RNDNUMB.textContent = randint(0, 100);
}

function ShowHide(){
    let ForHide = document.getElementById("ForHide");
    if( ForHide.style.display == "none")
        ForHide.style.display = "block"
    else{
        ForHide.style.display = "none"
    }
}


function first(fArray, sArray){
    array = new Array();

    for (let i = 0; i < fArray.length; i++){
        if(array.find((element) => element == fArray[i]) === undefined){
            array.push(fArray[i])
        }
    }
    for (let i = 0; i < sArray.length; i++){
        if(array.find((element) => element == sArray[i]) === undefined){
            array.push(sArray[i])
        }
    }

    return array;

}

function seccond(fArray, sArray){
    array = new Array();

    for (let i = 0; i < fArray.length; i++){
        if(sArray.find((element) => element == fArray[i]) !== undefined && array.find((element) => element == fArray[i]) === undefined){
            array.push(fArray[i])
        }
    }

    return array;

}

function third(fArray, sArray){
    array = new Array();

    for (let i = 0; i < fArray.length; i++){
        if(sArray.find((element) => element == fArray[i]) === undefined ){
            array.push(fArray[i])
        }
    }

    return array;

}




let rectangle = {
    TopLeft: {x: 10, y: 10},
    BotRight: {x: 30, y: 30},
}

function print(rectangle){
    alert(`(${rectangle.TopLeft.x}; ${rectangle.TopLeft.y})\n(${rectangle.BotRight.x}; ${rectangle.BotRight.y})`)
}

function shirina(rectangle){
    return Math.abs(rectangle.BotRight.x - rectangle.TopLeft.x);
}
function visota(rectangle){
    return Math.abs(rectangle.BotRight.y - rectangle.TopLeft.y);
}
function square(rectangle){
    return shirina(rectangle) * visota(rectangle);
}
function perimeter(rectangle){
    return 2 * shirina(rectangle) + 2 * visota(rectangle);
}






