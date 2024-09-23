const donation = document.getElementById('donation-card');
const history = document.getElementById('history-card');
const noakhali = document.getElementById('input-box1');
const feni = document.getElementById('input-box2');
const quota = document.getElementById('input-box3');
const noakhaliBtn = document.getElementById('noakhali-btn');
const feniBtn = document.getElementById('feni-btn');
const quotaBtn = document.getElementById('quota-btn');
const mainBalance = document.getElementById('main-balance');



// console.log(noakhaliBtn,feniBtn,quotaBtn);
// console.log(noakhali,feni,quota);
// console.log(donation, history);

noakhaliBtn.addEventListener('click', function(event){
     event.preventDefault();

     const donationAmount = parseFloat(noakhali.value);
    



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


