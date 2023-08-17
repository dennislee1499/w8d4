function curriedSum(numArgs) {
    let num = numArgs;
    let sum = 0;
    return function zzz(arg) {
            num -= 1;
            sum += arg;
            if (num === 0) {
                console.log(sum)
            } else {
                return zzz;
            }
    };
};

curriedSum(3)(4)(20)(6); 