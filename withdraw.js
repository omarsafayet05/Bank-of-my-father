document.getElementById('btn-withdraw').addEventListener('click', function () {
    const withdrawField = document.getElementById('withdraw-field');
    const withdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(withdrawAmountString);// convert string type to number type.and parse float use for input cent besides dollar amount.
    //console.log(newWithdrawAmount);
    withdrawField.value = '';//যাতে বিভিন্ন সিচ্যুয়েশনে ইনপুট ভ্যালু ক্লিয়ার হয়ে যায় তাই আগে দেয়া হয়েছে।

    if (isNaN(newWithdrawAmount)) {
        alert('please,input a valid amount number');//যদি নম্বর বাদে অন্য ডাটা টাইপ ইউজ করে তখন এই এলার্ট দেবে।
        return;
    }
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    //console.log(previousDepositTotalString);
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);
    //console.log(typeof previousWithdrawTotal);

    //get balance current total
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    if (newWithdrawAmount > previousBalanceTotal) {
        alert('Your current amount exceeds the limit');
        return; //রিটার্ণ স্টপ হয়ে যাবে,ব্যালেন্সে নেগেটিভ ভ্যালু যোগ করবে না।
    }
    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotalElement.innerText = currentWithdrawTotal;// adding current amount set as innerText.//যাতে উইথড্র এমাউন্ট যোগ না হয়,যখন ব্যালেন্সের অতিরিক্ত উইড্র করবে গ্রাহক।

    const currentBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotalElement.innerText = currentBalanceTotal;



})