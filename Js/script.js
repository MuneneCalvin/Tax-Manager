
 const nssfContribution = 1080;
 const personalRelief = 2400;
 const insurance = 210;
 const nhif = 1400;
 let netPay;

 
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
let netPay = taxableIncome-(nhif +insurance + taxAmount);   
sessionStorage.setItem('netPay',netPay);
document.getElementById('netpay').value = 'Ksh '+ netPay;
document.getElementById('netpay2').value = 'Ksh '+ netPay
}
console.log(netPay);






function addExpense(){
let expensesList = document.createElement('div');
 let expenseItem = document.createElement('span');
 let expenseValue = document.createElement('span');
let parent = document.getElementById('breakdown');
parent.appendChild(expensesList);
expenseItem = document.getElementById('expense-name').value;
expenseValue = document.getElementById('expense-amount').value;
expensesList.append(expenseItem, " ", expenseValue ,'Ksh' );
document.getElementById('expense-name').value = '';
document.getElementById('expense-amount').value = '';


}

const btnElememt = document.getElementById('btn');
const expensesArray = [];
let expenseItem1 = document.getElementById('expense-name')
let expenseValue1 = document.getElementById('expense-amount')
btnElememt.addEventListener('click', function(){
    let expenseEntry = {
        title: expenseItem1.value,
        amount: parseFloat(expenseValue1.value)
    }
expensesArray.push(expenseEntry);

console.log(expensesArray);
})


function calculateBalance(arr){
    let sum = 0;
expensesArray.forEach(element => {
    sum= sum+ element.amount;
});
console.log(100000-sum);
let salaryBalance = sessionStorage.getItem('netPay')-sum;
document.getElementById('salarybalance').value = 'Ksh ' + salaryBalance;
return salaryBalance;
}
