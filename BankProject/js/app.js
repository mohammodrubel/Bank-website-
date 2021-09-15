const updateInputFeld = (userInput)=>{
    const input = document.getElementById(userInput)
    const inputText = input.value;
    const inputAmount = parseFloat(inputText)
    input.value ='';
    return inputAmount
}
const updateInnerId = (totalFeldId,inputAmount)=>{
    const depositTotal = document.getElementById(totalFeldId)
    const depositText = depositTotal.innerText
    const deposiAmount = parseFloat(depositText)
    const newBalance = inputAmount + deposiAmount
    depositTotal.innerText = newBalance 
}
// update balance 
const updateBalanceTotal = (inputAmount,SumSub)=>{
    const updateBalance =document.getElementById('balance-total')
    const updateText = updateBalance.innerText
    const updateAmount = parseFloat(updateText)
        if (SumSub == true){
            updateBalance.innerText = updateAmount + inputAmount  
        }else{
            updateBalance.innerText = updateAmount - inputAmount  
        }
}
document.getElementById('deposit-button').addEventListener('click',()=>{
    const inputAmount = updateInputFeld('deposit-input')
        if (inputAmount >0){
            updateInnerId('deposit-total',inputAmount)
            updateBalanceTotal(inputAmount,true)
        }else{
        }
})
document.getElementById('withdraw-button').addEventListener('click',()=>{
    const inputAmount = updateInputFeld('withdraw-input')
        if(inputAmount >0){
            updateInnerId('withdraw-total',inputAmount)
            updateBalanceTotal(inputAmount,false)
        }else{
            alert('Negative value is not acceptable')
        }
})