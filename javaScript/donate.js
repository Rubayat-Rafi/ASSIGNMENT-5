const donation = document.getElementById('donation-card');
const history = document.getElementById('history-card');
const noakhali = document.getElementById('input-box1');
const feni = document.getElementById('input-box2');
const quota = document.getElementById('input-box3');
const noakhaliBtn = document.getElementById('noakhali-btn');
const feniBtn = document.getElementById('feni-btn');
const quotaBtn = document.getElementById('quota-btn');
const mainBalance = document.getElementById('main-balance');
const noakhaliDonationBdt = document.getElementById('noakhali-donation-bdt');
const historySection = document.getElementById('history-section');






noakhali.addEventListener('keyup', function(event){
    const number = parseFloat(event.target.value);

    if(!isNaN(number) &&  number > 0){
        noakhaliBtn.removeAttribute('disabled');
    }else{
        noakhaliBtn.setAttribute('disabled', ture);
    }
})



noakhaliBtn.addEventListener('click', function(event){
    event.preventDefault();

     const totalMainBalance = parseFloat(mainBalance.innerText)
     const donationBalance = parseFloat(noakhaliDonationBdt.innerText);
     const donationAmount = parseFloat(noakhali.value);

     if(isNaN(donationAmount) || donationAmount <= 0){
        alert('Invalid number. Please enter a valid positive number.');
        return;
     }
     if(donationAmount > totalMainBalance){
        alert('Insufficient balance!');
        return;
     }


        const totalBalance = donationBalance + donationAmount;
        document.getElementById('noakhali-donation-bdt').innerText = totalBalance.toFixed(2);
    
        const accountBalance = totalMainBalance - donationAmount;
        document.getElementById('main-balance').innerText = accountBalance.toFixed(2);

    // history section
    const h = document.createElement('div');
            h.classList.add('w-full');
            h.innerHTML = ` 
            <div  class="p-8 border rounded-2xl w-full">
                <h3 class="text-xl font-bold text-textColor mb-4 leading-8">

                ${donationAmount} Taka is Donated for famine-2024 at Feni, Bangladesh </h3>

                <p class="text-base font-light  text-textColor text-opacity-70 leading-7 mb-6">

                Date :${new Date()}</p>
             </div>
    `
        historySection.appendChild(h);

        // show the dialog 
        my_modal_5.showModal();
})



// Donation button 
document.getElementById('donation-btn').addEventListener('click', function(){
    history.classList.add('hidden')
    donation.classList.remove('hidden')

    // donation button color 
    document.getElementById('donation-btn').style.backgroundColor='#B4F461';
    document.getElementById('donation-btn').style.border='2px solid #B4F461';
    document.getElementById('donation-btn').style.color='#111111';


     // history btn color 
     document.getElementById('history-btn').style.backgroundColor='transparent';
     document.getElementById('history-btn').style.color='rgba(17, 17, 17, 0.7)';
     document.getElementById('history-btn').style.border=' 2px solid rgba(17, 17, 17, 0.3)';
})

// history button 
document.getElementById('history-btn').addEventListener('click', function(){
    donation.classList.add('hidden')
    history.classList.remove('hidden')

    // history btn color 
    document.getElementById('history-btn').style.backgroundColor='#B4F461';
    document.getElementById('history-btn').style.border='2px solid #B4F461';
    document.getElementById('history-btn').style.color='#111111';

    // donation button color 
    document.getElementById('donation-btn').style.backgroundColor='transparent';
    document.getElementById('donation-btn').style.color='rgba(17, 17, 17, 0.7)';
    document.getElementById('donation-btn').style.border=' 2px solid rgba(17, 17, 17, 0.3)';

})


