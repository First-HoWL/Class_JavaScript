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

    for(let i = 5; i < 11; i++){
        const mile = 0.621371;
        let num;
        let arr;
        array = new Int32Array(2);
        if(i == 1 || i == 3 || i == 4 || i == 8 || i == 9 || i == 10){
            num = prompt(`(${i}) Введіть число: `, "");
        }
        else if(i == 2 || i == 5 || i == 6 || i == 7){
            arr = prompt(`(${i}) Введіть числа: `, "").split(" ");
            for(let i =0; i < arr.length; i++){
                array[i] = parseInt(arr[i], 10);
                console.log(parseInt(arr[i], 10));
                console.log(array[i]);
            }
        }

        if(i == 1){
            alert(num * num)
        }
        if(i ==2){
            alert((array[0] + array[1]) / 2)
        }
        if(i == 3){
            alert(num * num)
        }
        if(i == 4){
            alert(num * mile)
        }
        if(i == 5){
            alert(`${array[0]} + ${array[1]} = ${array[0] + array[1]}\n`+
                `${array[0]} - ${array[1]} = ${array[0] - array[1]}\n`+
                `${array[0]} * ${array[1]} = ${array[0] * array[1]}\n`+
                `${array[0]} / ${array[1]} = ${array[0] / array[1]}\n`)
        }
        if(i == 6){
            alert(`x = ${array[1] / -array[0]}`)
        }
        if(i == 7){
            alert(Math.trunc(((24 * 60) - (array[0] * 60 + array[1])) / 60) 
            + "hours " + (((24 * 60 * 60) - (array[0] * 60 + array[1])) % 60) + "min")
        }
        if (i == 8){
            alert(Math.trunc((num % 100) / 10))
        }
        if(i == 9){
            alert(`${num % 10}` + Math.trunc(num / 10))
        }
        if( i == 10){
            alert(Math.trunc(250 + ((num / 100) * 10)))
        }

    }


    // let numbarray = prompt("Введіть числа: ", "").split(" ");
    // array = new Int32Array(numbarray.length);
    // for(let i =0; i < numbarray.length; i++){
    //     array[i] = parseInt(numbarray[i], 10);
    //     console.log(parseInt(numbarray[i], 10));
    //     console.log(array[i]);
    // }
    // alert(array);
    // alert(bubblesort(array))
