// listen for submit
document.getElementById('loan-form').addEventListener('submit',(e)=>{
    //  Hide Results
    document.getElementById('result').style.display='none';
    // Show loader
    document.getElementById('loading').style.display='block';
    
    setTimeout(calculateResults,2000);
      
        // document.getElementById('loading').style.display='none';
    e.preventDefault();
});

function calculateResults(){
    // console.log('calculation ....');
    // UI VARS
    const amount = document.getElementById('amount');
    const interest = document.getElementById('interest');
    const years = document.getElementById('years');
    const monthlyPayment = document.getElementById('monthly-payment');
    const totalPayment = document.getElementById('total-payment');
    const totalInterest = document.getElementById('total-interest');


    const principle=parseFloat(amount.value);
    const calculatedInterest=parseFloat(interest.value)/100/12;
    const calculatedPayments=parseFloat(years.value)*12;

    
//  Compute Monthly Payment
    const x = Math.pow(1+calculatedInterest,calculatedPayments);
    const monthly= (x*calculatedInterest*principle)/(x-1);
    if(isFinite(monthly)){
      
     monthlyPayment.value=monthly.toFixed(2);
     totalPayment.value=(monthly*calculatedPayments).toFixed(2);
     totalInterest.value=((monthly*calculatedPayments)-principle).toFixed(2);
    //  Show REsults
     document.getElementById('result').style.display='block';
    //  hide the loader
    document.getElementById('loading').style.display='none';
    }else {
       
      checkErrors('Please Check your numbers');
    }
    
  
}

function checkErrors(msg){
    // hide results
    document.getElementById('result').style.display='none';
    //  hide the loader
    document.getElementById('loading').style.display='none';
    // create a div
   const errorDiv =document.createElement('div');

//    get element
const card =document.querySelector('.card');
const heading =document.querySelector('.heading');

//    add classes
errorDiv.className='alert alert-danger';
errorDiv.appendChild(document.createTextNode(msg));

// insert Error above heading
card.insertBefore(errorDiv,heading);
// clear error  after 3 seconds
setTimeout(clearError,3000);

}
// Clear error function
function clearError(){
    document.querySelector('.alert').remove();
}