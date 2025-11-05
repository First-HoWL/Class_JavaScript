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

    document.getElementById("div24").textContent += (first(fArray, sArray))

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













    // for(let i = 5; i < 11; i++){
    //     const mile = 0.621371;
    //     let num;
    //     let arr;
    //     array = new Int32Array(2);
    //     if(i == 1 || i == 3 || i == 4 || i == 8 || i == 9 || i == 10){
    //         num = prompt(`(${i}) Введіть число: `, "");
    //     }
    //     else if(i == 2 || i == 5 || i == 6 || i == 7){
    //         arr = prompt(`(${i}) Введіть числа: `, "").split(" ");
    //         for(let i =0; i < arr.length; i++){
    //             array[i] = parseInt(arr[i], 10);
    //             console.log(parseInt(arr[i], 10));
    //             console.log(array[i]);
    //         }
    //     }

    //     if(i == 1){
    //         alert(num * num)
    //     }
    //     if(i ==2){
    //         alert((array[0] + array[1]) / 2)
    //     }
    //     if(i == 3){
    //         alert(num * num)
    //     }
    //     if(i == 4){
    //         alert(num * mile)
    //     }
    //     if(i == 5){
    //         alert(`${array[0]} + ${array[1]} = ${array[0] + array[1]}\n`+
    //             `${array[0]} - ${array[1]} = ${array[0] - array[1]}\n`+
    //             `${array[0]} * ${array[1]} = ${array[0] * array[1]}\n`+
    //             `${array[0]} / ${array[1]} = ${array[0] / array[1]}\n`)
    //     }
    //     if(i == 6){
    //         alert(`x = ${array[1] / -array[0]}`)
    //     }
    //     if(i == 7){
    //         alert(Math.trunc(((24 * 60) - (array[0] * 60 + array[1])) / 60) 
    //         + "hours " + (((24 * 60 * 60) - (array[0] * 60 + array[1])) % 60) + "min")
    //     }
    //     if (i == 8){
    //         alert(Math.trunc((num % 100) / 10))
    //     }
    //     if(i == 9){
    //         alert(`${num % 10}` + Math.trunc(num / 10))
    //     }
    //     if( i == 10){
    //         alert(Math.trunc(250 + ((num / 100) * 10)))
    //     }

    // }


    // let numbarray = prompt("Введіть числа: ", "").split(" ");
    // array = new Int32Array(numbarray.length);
    // for(let i =0; i < numbarray.length; i++){
    //     array[i] = parseInt(numbarray[i], 10);
    //     console.log(parseInt(numbarray[i], 10));
    //     console.log(array[i]);
    // }
    // alert(array);
    // alert(bubblesort(array))
