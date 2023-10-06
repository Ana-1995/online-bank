const btnLogin=document.querySelector(".btn-login");
const header=document.getElementById("header");
const loginUser=document.querySelector(".log-in-user");
const main=document.getElementById("main");
const btnLogOut=document.querySelector(".btn-log-out");
const preloader=document.querySelector(".preloader");
// const formBtn=document.querySelectorAll(".form__btn");


// !preloader at start
window.addEventListener('load', function(){
    preloader.classList.add("hide-preloader");
});

/////////////////////////////// setting users
const user1={
    owner: 'Ana Iashagashvili',
    pass: 1995,
    img: 'img/318317418_6023851907678303_6931352526667037625_n.jpg',
    cardImg: 'img/BOT_red-card_EMV_mockup-2.png',
    movements: [300, 150, -442, 114, -200, 30, -12, 560, 333, -24],
    salary: 1200,
    point: 1.4, //%
    movDates:[
        "2022/11/12/12:45:12",
        "2022/11/23/20:40:12",
        "2022/11/30/12:45:12",
        "2022/12/04/20:40:12",
        "2022/12/11/12:45:12",
        "2022/12/16/20:40:12",
        "2022/12/20/12:45:12",
        "2023/01/20/20:40:12",
        "2023/01/22/12:45:12",
        "2023/01/26/20:40:12",
    ],
    creditLimit: 2300,
    currency: 'EUR',
};

const user2={
    owner: 'Mark Jonson',
    pass: 1997,
    img: 'img/1db4b073c808f0c55cb5c5639a0d9dc5.png',
    cardImg: 'img/BOT_red-card_EMV_mockup-2.png',
    movements: [115, -40, -105, 475, 240, 10, -110, 570, -14, 45],
    salary: 3000,
    point: 1.4, //%
    movDates:[
        "2022/11/12/12:45:12",
        "2022/11/23/20:40:12",
        "2022/11/30/12:45:12",
        "2022/12/04/20:40:12",
        "2022/12/11/12:45:12",
        "2022/12/16/20:40:12",
        "2022/12/20/12:45:12",
        "2023/01/20/20:40:12",
        "2023/01/22/12:45:12",
        "2023/01/26/20:40:12",
    ],
    creditLimit: 300,
    currency: 'EUR',
};

const user3={
    owner: 'Keti Gamgebeli',
    pass: 1997,
    img: 'img/Untitled.png',
    cardImg: 'img/BOT_pink-card_EMV_mockup-2.png',
    movements: [50, -280, -105, 585, 1200, 10, -90, 1270, 66, 230],
    salary: 10000,
    point: 1.4, //%
    movDates:[
        "2022/11/12/12:45:12",
        "2022/11/23/20:40:12",
        "2022/11/30/12:45:12",
        "2022/12/04/20:40:12",
        "2022/12/11/12:45:12",
        "2022/12/16/20:40:12",
        "2022/12/20/12:45:12",
        "2023/01/20/20:40:12",
        "2023/01/22/12:45:12",
        "2023/01/26/20:40:12",
    ],
    creditLimit: 3700,
    currency: 'USD',
};

const user4={
    owner: 'James Due',
    pass: 1999,
    img: 'img/person-3_ipa0mj.jpg',
    cardImg: 'img/BOT_PHOTO-card_EMV_mockup-2.png',
    movements: [5000, -2002, 1500, 555, 120, 30, 900, 1050, 2000, -210],
    salary: 4500,
    point: 1.4, //%
    movDates:[
        "2022/11/12/12:45:12",
        "2022/11/23/20:40:12",
        "2022/11/30/12:45:12",
        "2022/12/04/20:40:12",
        "2022/12/11/12:45:12",
        "2022/12/16/20:40:12",
        "2022/12/20/12:45:12",
        "2023/01/20/20:40:12",
        "2023/01/22/12:45:12",
        "2023/01/26/20:40:12",
    ],
    creditLimit: 5000,
    currency: 'USD',
};

const users=[user1, user2, user3, user4];
//  console.log(users)
// select items
const greeting= document.querySelector(".greeting");
const userImg=document.getElementById("user-img");
const balanceSpan=document.getElementById("balance-span");
const cardPhoto=document.querySelector(".card-photo");
const incomeNum=document.querySelector(".income-num");
const outcomeNum=document.querySelector(".outcome-num");
const interestNum=document.querySelector(".interest-num");
const movementsDiv=document.querySelector(".movements");


// !set date
function displayTime(){
    var dateTime = new Date();
    const day=`${dateTime.getDate()}`.padStart(2,0);
    const month=`${dateTime.getMonth()+1}`.padStart(2,0);
    const year=`${dateTime.getFullYear()}`;
    let hrs = `${dateTime.getHours()}`.padStart(2,0);
    let min = `${dateTime.getMinutes()}`.padStart(2,0);
    // var sec = `${dateTime.getSeconds()}`.padStart(2,0);
    let session = document.getElementById('session');

    if(hrs >= 12){
        session.innerHTML = 'PM';
    }else{
        session.innerHTML = 'AM';
    }

    if(hrs > 12){
        hrs = hrs - 12;
    }
    document.getElementById("day").innerHTML=`${day}/`;
    document.getElementById("month").innerHTML=`${month}/`;
    document.getElementById("year").innerHTML=`${year}, `;
    document.getElementById('hours').innerHTML =`${hrs}:` ;
    document.getElementById('minutes').innerHTML = min;
}
setInterval(displayTime, 1000);

function calcDates(movdate){
function calcthen(day1,day2){
    return Math.round(Math.abs(day2-day1)/(1000*24*60*60));
}
const passeddays=calcthen(new Date(), movdate);
if(passeddays===0) return 'today';
if(passeddays===1) return 'yesterday';
if(passeddays<=7) return `${passeddays} days ago`;
else{
    const day=`${movdate.getDate()}`.padStart(2,0);
    const month=`${movdate.getMonth()+1}`.padStart(2,0);
    const year=`${movdate.getFullYear()}`;
    return `${day}/${month}/${year}`;
}
}

//!set movements
function setMovements(acc){
 movementsDiv.innerHTML='';

 acc.movements.forEach((mov,i)=>{
    const sortMov=mov>0 ? 'deposit' : 'withdrawal';
    if(mov<0){
        mov=Math.abs(mov)
    }
    const date=new Date(acc.movDates[i]);
    const setUserDates=calcDates(date);
    
    const html=`<div class="movements__row">
    <div class="movements__type movements__type--${sortMov}">${i+1} ${sortMov}</div>
    <div class="movements__date">${setUserDates}</div>
    <div class="movements__value">$${mov}</div>
  </div>`;
  movementsDiv.insertAdjacentHTML('afterbegin', html);
});  

};
// setMovements(user1.movements);

//!set usernames
function createUsers(user){
    user.forEach(acc=>{
    acc.username=acc.owner
    .toLowerCase()
    .split(' ')
    .map(us=>us[0])
    .join('')
    });
};
createUsers(users);
//  console.log(users);


//!display deposit summarty, withdrawavls summary, point. 
function setSummary(movements){
    const income=movements
    .filter(mov=>mov>0)
    .reduce((cur,acc)=>{
        return cur+acc;
    },0)
    incomeNum.textContent=`$${income}`;

    const outcome=movements
    .filter(mov=>mov<0)
    .reduce((acc,cur)=>{
        return acc+cur;
    },0);
    outcomeNum.textContent=`$${Math.abs(outcome)}`;
    
    const point=movements
    .filter(mov=>mov>0)
    .map(mov=>mov*1.4/100)
    .reduce((acc,cur)=>{
        return acc+cur;
    },0)
    interestNum.textContent=`${Math.floor(point)}`;
};
// setSummary(user1.movements);

//!full balance
function fullBalance(acc){
    acc.balance=acc.movements
    .reduce((acc,cur)=>{
        return acc+cur;
    },0);
    balanceSpan.textContent=`$${acc.balance}`;
}
// fullBalance(user1);


//set user face img
function userPhoto(user){
userImg.src=user;
};
// userPhoto(user1.img);

//cser user card photo
function userCard(acc){
cardPhoto.src=acc;
};
//set user credit limit
const creditSpan=document.getElementById("credit-span");
function creditLimit(user){
creditSpan.textContent=`$${user}`;
}
// userCard(user1.cardImg);

///!update our functions in one function
function updateFuncs(){
    setMovements(currentAccount);
    setSummary(currentAccount.movements);
    fullBalance(currentAccount);
    userPhoto(currentAccount.img);
    userCard(currentAccount.cardImg);
    creditLimit(currentAccount.creditLimit);
};

//!set log in function
const inputName=document.querySelector(".login__inputuser");
const inputPassword=document.querySelector(".login__inputpin");
const accName=document.getElementById("name");

//!current account variable
 let currentAccount;
 // !log in
    btnLogin.addEventListener('click', function(e){
        e.preventDefault();
           preloader.classList.remove("hide-preloader");

         setTimeout(() => {
            preloader.classList.add("hide-preloader");
            if(inputName.value==='' && inputPassword.value===''){
    inputName.style.border='2px solid red';
    inputPassword.style.border='2px solid red';
   }
            //!set user names
             currentAccount=users.find(
    acc=>acc.username===inputName.value);
    if(currentAccount && currentAccount.pass===Number(inputPassword.value)){
        header.style.display='none';
        main.style.display='block';
        accName.textContent=`${currentAccount.owner.split(' ')[0]}`;
        inputName.value='';
     inputPassword.value='';
   updateFuncs();
    };       
 }, 1000);
    });

//! log out
btnLogOut.addEventListener('click', function(e){
    e.preventDefault();
    inputName.style.border='';
    inputPassword.style.border='';
    main.style.display='none';
    header.style.display='block';
});

    //!transfer money
    const formBtnTransfer=document.querySelector(".form__btn-transfer");
    const formInputTransfer=document.querySelector(".form__input-transfer");
    const inputToUser=document.querySelector(".form__input-to");
    const secOp=document.querySelector(".sec-op");
   const transferInvalid=document.querySelector(".form__label-transfer-amount");
const transferLabel=document.querySelector(".transfer-label");

    formBtnTransfer.addEventListener('click', function(e){
        e.preventDefault();
        const amount=Number(formInputTransfer.value);
        const receiverUser=users.find(
            user=>user.username===inputToUser.value);
            if(amount>0 && amount<=currentAccount.balance && receiverUser && receiverUser.username !==currentAccount.username){
                
                preloader.classList.remove("hide-preloader");
                setTimeout(() => {
                    preloader.classList.add("hide-preloader");
                    receiverUser.movDates.push(new Date());
                  currentAccount.movDates.push(new Date());
                      currentAccount.movements.push(-amount);
                receiverUser.movements.push(amount);
                formInputTransfer.value='';
                inputToUser.value='';
               
                updateFuncs();
                }, 500);              
            }if(amount>currentAccount.balance){
                transferInvalid.style.color='#FF0000';
                transferInvalid.textContent='No Balance';
              setTimeout(() => {
                transferInvalid.style.color='';
                transferInvalid.textContent='Amount';
              }, 5000);
            }if(!receiverUser || inputToUser.value===''){
                transferLabel.style.color='#FF0000';
               transferLabel.textContent='No User';
               setTimeout(() => {
                transferLabel.style.color='';
                transferLabel.textContent='Transfer to';
               }, 5000);
            }if(formInputTransfer.value===''){
                transferInvalid.style.color='#FF0000';
                transferInvalid.textContent='no amount';
             setTimeout(() => {
                transferInvalid.style.color='';
                transferInvalid.textContent='Amount';
             }, 5000);
            }
        
    });

    // !set taking credit function
const formBtnLoan=document.querySelector(".form__btn--loan");
const loanAmount=document.querySelector(".form__input--loan-amount");    
const formLabelLoan=document.querySelector(".form__label--loan");

    formBtnLoan.addEventListener('click', function(e){
        e.preventDefault();
        const amount=Number(loanAmount.value);
        if(amount>0 && currentAccount.balance+amount<20000 && amount<=currentAccount.creditLimit){
            preloader.classList.remove("hide-preloader");
            setTimeout(() => {
                    currentAccount.movDates.push(new Date());
                preloader.classList.add("hide-preloader");
            
                   currentAccount.movements.push(amount);
        loanAmount.value='';
        updateFuncs();
            }, 500);
        }else{
   
            formLabelLoan.textContent='invalid';
            formLabelLoan.style.color=`#FF0000`
           setTimeout(() => {
            formLabelLoan.textContent='Amount';
            formLabelLoan.style.color='';
            loanAmount.value='';
           }, 5000);
        }
    });


    //!untities
const formBtnUntities=document.querySelector(".form__btn-untities");
const formInputUntities=document.querySelector(".form__input--untities-amount")
const utitiesLabel=document.querySelector(".utities-label");

formBtnUntities.addEventListener('click', function(e){
    e.preventDefault();
    const amount=Number(formInputUntities.value);
    if(amount>0 && amount<=currentAccount.balance && amount<=500){
        preloader.classList.remove("hide-preloader");
        setTimeout(() => {
              currentAccount.movDates.push(new Date());
            preloader.classList.add("hide-preloader");
          
              currentAccount.movements.push(-amount);
        formInputUntities.value='';
       
        updateFuncs();
        }, 500);              
    }if(amount>500){
        utitiesLabel.style.color='#FF0000';
     utitiesLabel.textContent='Amount>500';
     setTimeout(() => {
        utitiesLabel.style.color='';
        utitiesLabel.textContent='Amount';
     }, 5000);
    }if(amount>currentAccount.balance){
        utitiesLabel.style.color='#FF0000';
        utitiesLabel.textContent='No Balance';
        setTimeout(() => {
            utitiesLabel.style.color='';
        utitiesLabel.textContent='Amount';
        }, 5000);
    }if(formInputUntities.value===''){
        utitiesLabel.style.color='#FF0000';
        utitiesLabel.textContent='No amount';
    }  setTimeout(() => {
        utitiesLabel.style.color='';
    utitiesLabel.textContent='Amount';
    }, 5000);
    });



    

    
        
        
            




