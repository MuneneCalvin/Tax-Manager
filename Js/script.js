
 const nssfContribution = 1080;
 const personalRelief = 2400;
 const insurance = 210;
 const nhif = 1400;

 
 function calculate (){
     const grossSalary = parseInt(document.getElementById('gross-salary').value);
    //taxable income is result of subtracting nssf from gross salary.
    const taxableIncome = (grossSalary-nssfContribution);

        document.getElementById('taxable-income').value = 'Ksh '+ taxableIncome; 
        document.getElementById('personal-relief').value= 'Ksh '+ personalRelief;
        document.getElementById('nssf-contribution').value= 'Ksh '+ nssfContribution;
        document.getElementById('insurance').value= 'Ksh '+ insurance;
        document.getElementById('nhif-contribution').value= 'Ksh '+ nhif;
        let taxAmount;
       
        // function calculates the tax amount using KRA rates.
        function calculateTaxAmount(){
            if(taxableIncome > 24000){
                let newTaxable = (taxableIncome-24000);
                if(newTaxable > 8333){
                newTaxable = newTaxable-8333;
                taxAmount =2400 + 2083.25+(newTaxable * 30/100);
                } else {
                taxAmount = 2400 + (newTaxable*25/100);
                console.log('tax=>',taxAmount)
                }
             return taxAmount; 
               
            }else{
                taxAmount = 0;
                return taxAmount;
            }   
        }



calculateTaxAmount();

 
document.getElementById('tax-before-relief').value = 'Ksh ' + taxAmount;

//PAYE is calculated after subtracting all reliefs(personal and insurance) from the tax amount.
if(taxAmount > 2610){
    paye = taxAmount - (personalRelief+ insurance);
}else {
    paye = 0;
} 
document.getElementById('paye').value = 'Ksh '+ paye;

//net pay is the remaining income after subtracting all deductibles
const netPay = taxableIncome-(nhif +insurance + taxAmount);
document.getElementById('netpay').value = 'Ksh '+ netPay;
}
 