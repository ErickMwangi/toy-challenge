function calculateTax(grossSalary, benefits){
    
    kra = calcKra(grossSalary);
    nssf = calcNSSF(grossSalary);
    nhif = calcNHIF(grossSalary);
    netPay = grossSalary + benefits - (kra + nssf + nhif);
    return netPay;
}
// getting kra
function calcKra(grossSalary){
    let kra_tax = 0;
    if (grossSalary <= 24000){ //10%
        kra_tax = (10/100) * grossSalary;
    } else if (grossSalary >= 24001 && grossSalary <= 32333 ){//25%
        kra_tax = (25/100) * grossSalary;
    } else {//30%
        kra_tax = (30/100) * grossSalary;
    }
    return kra_tax;
}
// function that calculates nssf_tax.
function calcNSSF(grossSalary){
    let nssf = 0;
    if(grossSalary <= 6000){ //6%
        nssf = (6/100) * grossSalary;
   }
    else if(grossSalary >= 6001 && grossSalary <= 18000){
        nssf = (6/100) * grossSalary;
    }
    else{
        nssf = (5/100) * grossSalary;
    }
    return nssf;
}
// function that calculates nhif_tax.
function calcNHIF(grossSalary){
    let nhif = 0;
    if(grossSalary <= 5999){
        nhif = 150
    }
    else if(grossSalary >= 6000 && grossSalary <= 7999){
        nhif = 300;
    }
    else if(grossSalary >= 8000 && grossSalary <= 11999){
        nhif = 400;
    }
    else if(grossSalary >= 12000 && grossSalary <= 14999){
        nhif = 500;
    }
    else if(grossSalary >= 15000 && grossSalary <= 19999){
        nhif = 600;
    }
    else if(grossSalary >= 20000 && grossSalary <= 24999){
        nhif = 750;
    }
    else if(grossSalary >= 25000 && grossSalary <= 29999){
        nhif = 850;
    }
    else if(grossSalary >= 30000 && grossSalary <= 34999){
        nhif = 900;
    }
    else if(grossSalary >= 35000 && grossSalary <= 39999){
        nhif = 950;
    }
    else if(grossSalary >= 40000 && grossSalary <= 44999){
        nhif = 1000;
    }
    else if(grossSalary >= 45000 && grossSalary <= 49999){
        nhif = 1100;
    }
    else if(grossSalary >= 50000 && grossSalary <= 59999){
        nhif = 1200;
    }
    else if(grossSalary >= 60000 && grossSalary <= 69999){
        nhif = 1300;
    }
    else if(grossSalary >= 70000 && grossSalary <= 79999){
        nhif = 1400;
    }
    else if(grossSalary >= 80000 && grossSalary <= 89999){
        nhif = 1500;
    }
    else if(grossSalary >= 90000 && grossSalary <= 99999){
        nhif = 1600;
    }
    else{
        nhif = 1700;
    }
    return nhif;
}
let final_net = calculateTax(12345554, 5375);
console.log("your Net Pay : "+final_net); 
