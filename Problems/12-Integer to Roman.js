/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    let b=0
    let roman=''
    let int=num
    while(int>0){
        let temp = int%10
        int=Math.floor(int/10)
        if(b==0){
            switch(temp){
                case 1:roman+='I'
                    break
                case 2:roman+='II'
                    break
                case 3:roman+='III'
                    break
                case 4:roman+='IV'
                    break
                case 5:roman+='V'
                    break
                case 6:roman+='VI'
                    break
                case 7:roman+='VII'
                    break
                case 8:roman+='VIII'
                    break
                case 9:roman+='IX'
                    break
            }
        }
        if(b==1){
            switch(temp){
                case 1:roman='X'+roman
                    break
                case 2:roman='XX'+roman
                    break
                case 3:roman='XXX'+roman
                    break
                case 4:roman='XL'+roman
                    break
                case 5:roman='L'+roman
                    break
                case 6:roman='LX'+roman
                    break
                case 7:roman='LXX'+roman
                    break
                case 8:roman='LXXX'+roman
                    break
                case 9:roman='XC'+roman
                    break
            }
        }
        if(b==2){
            switch(temp){
                case 1:roman='C'+roman
                    break
                case 2:roman='CC'+roman
                    break
                case 3:roman='CCC'+roman
                    break
                case 4:roman='CD'+roman
                    break
                case 5:roman='D'+roman
                    break
                case 6:roman='DC'+roman
                    break
                case 7:roman='DCC'+roman
                    break
                case 8:roman='DCCC'+roman
                    break
                case 9:roman='CM'+roman
                    break
            }
        }
        if(b==3){
            switch(temp){
                case 1:roman='M'+roman
                    break
                case 2:roman='MM'+roman
                    break
                case 3:roman='MMM'+roman
                    break
            }
        }
        b+=1
    }
    return roman
};

// this is a stupid way to extract each number and convert it to roman
