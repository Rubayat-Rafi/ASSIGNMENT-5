const donation = document.getElementById('donation-card');
const history = document.getElementById('history-card');

const noakhali = document.getElementById('input-box1');
const feni = document.getElementById('input-box2');
const quota = document.getElementById('input-box3');

const noakhaliBtn = document.getElementById('noakhali-btn');
const feniBtn = document.getElementById('feni-btn');
const quotaBtn = document.getElementById('quota-btn');

const noakhaliDonationBdt = document.getElementById('noakhali-donation-bdt');
const feniDonationBdt = document.getElementById('feni-donation-bdt');
const quotaDonationBdt = document.getElementById('quota-donation-bdt');

const mainBalance = document.getElementById('main-balance');

const noDonation = document.getElementById('no-donation');

const historySection = document.getElementById('history-section');


// common function 
function commonDonation(donationBalanceBdt, input, place ){
    
    const totalMainBalance = parseFloat(mainBalance.innerText)
    const donationBalance = parseFloat(donationBalanceBdt.innerText);
    const donationAmount = parseFloat(input.value);

    if(isNaN(donationAmount) || donationAmount <= 0){
       alert('Invalid number. Please enter a valid positive number.');
       return;
    }
    if(donationAmount > totalMainBalance){
       alert('Insufficient balance!');
       return;
    }

       const totalBalance = donationBalance + donationAmount;
        donationBalanceBdt.innerText = totalBalance.toFixed(2);
   
       const accountBalance = totalMainBalance - donationAmount;
       mainBalance.innerText = accountBalance.toFixed(2);

   // history section
        noDonation.classList.add('hidden');

        const h = document.createElement('div');
           h.classList.add('w-full');
           h.innerHTML = ` 
           <div  class="p-5 md:p-8 border rounded-2xl w-full">
               <h3 class="text-base md:text-xl font-bold text-textColor mb-4 leading-8">

               ${donationAmount} Taka is Donated for  ${place}, Bangladesh </h3>

               <p class="text-sm md:text-base font-light  text-textColor text-opacity-70 leading-7">

               Date : ${new Date()}</p>
            </div>
   `;
       historySection.appendChild(h);

       // show the dialog 
       my_modal_5.showModal();
};

// noakhali donation box 
noakhaliBtn.addEventListener('click', function(event){
    event.preventDefault();

    commonDonation( noakhaliDonationBdt, noakhali, 'famine-2024 at Noakhali');
});

// feni donation box 
feniBtn.addEventListener('click', function(event){
    event.preventDefault();

    commonDonation(feniDonationBdt, feni, 'famine-2024 at feni');
});

// quota donation box 
quotaBtn.addEventListener('click', function(event){
    event.preventDefault();
    
    commonDonation(quotaDonationBdt, quota, 'Aid for Injured in the Quota Movement');
});





// common function for toggle button
function toggleSection(hide , show , activeBtn , inactiveBtn){

    hide.classList.add('hidden');
    show.classList.remove('hidden');

    // active button color 
    activeBtn.style.backgroundColor='#B4F461';
    activeBtn.style.border='2px solid #B4F461';
    activeBtn.style.color='#111111';

    // inactive button color 
    inactiveBtn.style.backgroundColor='transparent';
    inactiveBtn.style.color='rgba(17, 17, 17, 0.7)';
    inactiveBtn.style.border=' 2px solid rgba(17, 17, 17, 0.3)';
}

document.getElementById('donation-btn').addEventListener('click', function(){
    toggleSection(history , donation , document.getElementById('donation-btn') ,
                    document.getElementById('history-btn'));
})

document.getElementById('history-btn').addEventListener('click', function(){
    toggleSection(donation, history, document.getElementById('history-btn'),
    document.getElementById('donation-btn'));
})

