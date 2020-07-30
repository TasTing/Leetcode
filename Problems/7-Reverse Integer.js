let neg = x < 0
    let num = parseInt(x.toString().split('').reverse().join(''), 10);
    if (neg){
        num=-num
    }
    if(num<Math.pow(-2,31)||num>(Math.pow(2,31)-1))
    {
        return 0
    }else{
        return num
    }
