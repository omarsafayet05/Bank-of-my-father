document.getElementById('btn-deposit').addEventListener('click', function () {
    //console.log('deposit button clicked');
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);// convert string type to number type.and parse float use for input cent besides dollar amount.
    //console.log(newDepositAmountString);
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    //console.log(previousDepositTotalString);
    const previousDepositTotal = parseFloat(previousDepositTotalString);
    //console.log(typeof previousDepositTotal);
    const currentDepositTotal = previousDepositTotal + newDepositAmount;
    depositTotalElement.innerText = currentDepositTotal;// adding current amount set as innerText.

    //get balance current total
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);
    const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
    balanceTotalElement.innerText = currentBalanceTotal;

    depositField.value = '';

})