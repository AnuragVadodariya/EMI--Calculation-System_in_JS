const amonut=document.getElementById('amount');
const rate=document.getElementById('rate');
const time=document.getElementById('time');

//check Amount
amonut.addEventListener('blur',chk_amount);
function chk_amount(){
    if(amonut.value < 0){ alert('Invalid Amount ');
    amonut.value = '' }
}

//check Rate
rate.addEventListener('blur',chk_rate);
function chk_rate(){
    if(rate.value < 0){ alert('Invalid Rate');
    rate.value = '' }
    if(isNaN(rate.value)){alert ('Only Number Allow')
    rate.value = '' }
}

//check Year
time.addEventListener('blur',chk_time);
function chk_time(){
    if(time.value < 0){ alert('Invalid Year');
    time.value = '' }
    if(isNaN(time.value)){alert ('Only Number Allow')
    time.value = '' }
}

//check All input
function chk_input(){
    if(amonut.value !== '' && rate.value !== '' && time.value !== ''){
        const btn=document.getElementById('find');
        btn.style.visibility='visible';
    }
}

//calculation
function cal(){
    if(amonut.value !== '' && rate.value !== '' && time.value !== ''){
        const p=amonut.value;
        const r=rate.value/(12*100);
        const t=time.value*12;

        document.getElementById('div_display').style.visibility='visible';

        const EMI_cal=(p*r*Math.pow(1+r,t))/(Math.pow(1+r,t)-1);

        document.getElementById('display').innerHTML='EMI is : '+EMI_cal;
    }
    else{
        alert('Fill All Input')
    }
}