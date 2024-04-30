function validpasswords() {
    const n = document.getElementById('name');
    const l = document.getElementById('last');
    const number = /\d/;
    if (number.test(n.value)) {
        n.setCustomValidity("First name can't contain numbers");
    } else {
        n.setCustomValidity("");
    }
    if (number.test(l.value)) {
        l.setCustomValidity("Last name can't contain numbers");
    } else {
        l.setCustomValidity("");
    }
}

let x=1;
let a=function(){
    if(x%2==1){
    document.getElementById("aside_div_main-mostafa").style.width=`${(x%2)*20}%`; 
    document.getElementById("nested_aside_div_main-mostafa").style.display=`flex`; 
    x=x+1;}
    else{
        document.getElementById("aside_div_main-mostafa").style.width=`${(x%2)*20}%`; 
        document.getElementById("nested_aside_div_main-mostafa").style.display=`none`; 
        x=x+1;}
    console.log(x);}
    
    document.getElementById("setting_image-mostafa").onclick=a;

    document.getElementById('search-mostafa').addEventListener('input', function() {
        var text = this.value;
        if (text === 'home') {
            document.getElementById('result_home-mostafa').style.display='flex';
        }
        else if (text === 'lectures') {
            document.getElementById('result_lectures-mostafa').style.display='flex';
        }
        else if  (text === 'table') {
            document.getElementById('result_table-mostafa').style.display='flex';
        }
        else if  (text === 'quizzes') {
            document.getElementById('result_quizzes-mostafa').style.display='flex';
        }
        else if  (text === 'profile') {
            document.getElementById('result_profile-mostafa').style.display='flex';
        }
        if(text === ''){
            document.getElementById('result_home-mostafa').style.display='none';

            document.getElementById('result_lectures-mostafa').style.display='none';
            
            document.getElementById('result_table-mostafa').style.display='none';
            
            document.getElementById('result_quizzes-mostafa').style.display='none';

            document.getElementById('result_profile-mostafa').style.display='none';
        }
}
)

