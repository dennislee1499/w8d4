
function sumWithArg() {
    let total = 0;
    for(let i=0; i<arguments.length; i++){
        total += arguments[i];
    }
    return total;
}


// console.log(sumWithArg(1,2,3,4))

function sumWithArg2(...arg) {
    let total = 0;
    for(let i=0; i<arg.length; i++){
        total += arg[i];
    }
    return total;
}

// console.log(sumWithArg2(1,2,3,4))







