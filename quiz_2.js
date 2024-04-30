let count_mostafa=1;



let abc_mostafa=function(){
    document.querySelector(`#s_1_1-mostafa`).style.backgroundColor="green";
    document.querySelector(`#s_1_2-mostafa`).style.backgroundColor="red";
    document.querySelector(`#s_1_3-mostafa`).style.backgroundColor="red";
    document.querySelector("#next-mostafa").style.display="flex";
}
document.querySelector(`#s_1_1-mostafa`).onclick=function(){
    abc_mostafa();
}
document.querySelector(`#s_1_2-mostafa`).onclick=function(){
    abc_mostafa();
}
document.querySelector(`#s_1_3-mostafa`).onclick=function(){
    abc_mostafa();
}



let next_mostafa=function(){
    document.querySelector("#next-mostafa").style.display="none";
    document.querySelector(`#quest_${count_mostafa+1}-mostafa`).style.display="flex"; 
    document.querySelector(`#quest_${count_mostafa}-mostafa`).style.display="none";
    if(count_mostafa===8){document.querySelector("#next-mostafa").onclick=window.close();window.alert("Thank you for taking the exam and wish you good luck.")}count_mostafa=count_mostafa+1;}
    document.querySelector("#next-mostafa").onclick=next_mostafa;



let def_mostafa=function(){
    document.querySelector("#s_2_3-mostafa").style.backgroundColor="green";
    document.querySelector("#s_2_1-mostafa").style.backgroundColor="red";
    document.querySelector("#s_2_2-mostafa").style.backgroundColor="red";
    document.querySelector("#next-mostafa").style.display="flex";
    document.querySelector("#q_3-mostafa").style.display="flex";
    document.querySelector("#ch_3_quiz-mostafa").style.display="flex";}
document.querySelector("#s_2_1-mostafa").onclick=function(){
    def_mostafa();
}
document.querySelector("#s_2_2-mostafa").onclick=function(){
    def_mostafa();
}
document.querySelector("#s_2_3-mostafa").onclick=function(){
    def_mostafa();
}



let ghi_mostafa=function(){
    document.querySelector("#s_3_3-mostafa").style.backgroundColor="green";
    document.querySelector("#s_3_1-mostafa").style.backgroundColor="red";
    document.querySelector("#s_3_2-mostafa").style.backgroundColor="red";
    document.querySelector("#next-mostafa").style.display="flex";
    document.querySelector("#q_4-mostafa").style.display="flex";
    document.querySelector("#ch_4_quiz-mostafa").style.display="flex";
}
document.querySelector("#s_3_1-mostafa").onclick=function(){
    ghi_mostafa();
}
document.querySelector("#s_3_2-mostafa").onclick=function(){
    ghi_mostafa();
}
document.querySelector("#s_3_3-mostafa").onclick=function(){
    ghi_mostafa();
}



let jkl_mostafa=function(){
    document.querySelector("#s_4_2-mostafa").style.backgroundColor="green";
    document.querySelector("#s_4_1-mostafa").style.backgroundColor="red";
    document.querySelector("#s_4_3-mostafa").style.backgroundColor="red";
    document.querySelector("#next-mostafa").style.display="flex";
    document.querySelector("#q_5-mostafa").style.display="flex";
    document.querySelector("#ch_5_quiz-mostafa").style.display="flex";
}
document.querySelector("#s_4_1-mostafa").onclick=function(){
    jkl_mostafa();
}
document.querySelector("#s_4_2-mostafa").onclick=function(){
    jkl_mostafa();
}
document.querySelector("#s_4_3-mostafa").onclick=function(){
    jkl_mostafa();
}



let mno_mostafa=function(){
    document.querySelector("#s_5_1-mostafa").style.backgroundColor="green";
    document.querySelector("#s_5_2-mostafa").style.backgroundColor="red";
    document.querySelector("#s_5_3-mostafa").style.backgroundColor="red";
    document.querySelector("#next-mostafa").style.display="flex";
    document.querySelector("#q_6-mostafa").style.display="flex";
    document.querySelector("#ch_6_quiz-mostafa").style.display="flex";
}
document.querySelector("#s_5_1-mostafa").onclick=function(){
    mno_mostafa();
}
document.querySelector("#s_5_2-mostafa").onclick=function(){
    mno_mostafa();
}
document.querySelector("#s_5_3-mostafa").onclick=function(){
    mno_mostafa();
}



let pqr_mostafa=function(){
    document.querySelector("#s_6_2-mostafa").style.backgroundColor="green";
    document.querySelector("#s_6_1-mostafa").style.backgroundColor="red";
    document.querySelector("#s_6_3-mostafa").style.backgroundColor="red";
    document.querySelector("#next-mostafa").style.display="flex";
    document.querySelector("#q_6-mostafa").style.display="flex";
    document.querySelector("#ch_6_quiz-mostafa").style.display="flex";
}
document.querySelector("#s_6_1-mostafa").onclick=function(){
    pqr_mostafa();
}
document.querySelector("#s_6_2-mostafa").onclick=function(){
    pqr_mostafa();
}
document.querySelector("#s_6_3-mostafa").onclick=function(){
    pqr_mostafa();
}



let stu_mostafa=function(){
    document.querySelector("#s_7_1-mostafa").style.backgroundColor="green";
    document.querySelector("#s_7_2-mostafa").style.backgroundColor="red";
    document.querySelector("#s_7_3-mostafa").style.backgroundColor="red";
    document.querySelector("#next-mostafa").style.display="flex";
    document.querySelector("#q_7-mostafa").style.display="flex";
    document.querySelector("#ch_7_quiz-mostafa").style.display="flex";
}
document.querySelector("#s_7_1-mostafa").onclick=function(){
    stu_mostafa();
}
document.querySelector("#s_7_2-mostafa").onclick=function(){
    stu_mostafa();
}
document.querySelector("#s_7_3-mostafa").onclick=function(){
    stu_mostafa();
}



let vwx_mostafa=function(){
    document.querySelector("#s_8_3-mostafa").style.backgroundColor="green";
    document.querySelector("#s_8_1-mostafa").style.backgroundColor="red";
    document.querySelector("#s_8_2-mostafa").style.backgroundColor="red";
    document.querySelector("#next-mostafa").style.display="flex";
    document.querySelector("#q_8-mostafa").style.display="flex";
    document.querySelector("#ch_8_quiz-mostafa").style.display="flex";
}
document.querySelector("#s_8_1-mostafa").onclick=function(){
    vwx_mostafa();
}
document.querySelector("#s_8_2-mostafa").onclick=function(){
    vwx_mostafa();
}
document.querySelector("#s_8_3-mostafa").onclick=function(){
    vwx_mostafa();
}





















// let count=1;
// // let con=0;


// let abc=function(){
//     document.querySelector(`#s_1_1-mostafa`).style.backgroundColor="green";
//     document.querySelector(`#s_1_2-mostafa`).style.backgroundColor="red";
//     document.querySelector(`#s_1_3-mostafa`).style.backgroundColor="red";
//     document.querySelector("#next-mostafa").style.display="flex";
// }
// document.querySelector(`#s_1_1-mostafa`).onclick=function(){
//     abc();
// }
// document.querySelector(`#s_1_2-mostafa`).onclick=function(){
//     abc();
// }
// document.querySelector(`#s_1_3-mostafa`).onclick=function(){
//     abc();
// }



// let a=function(){
//     document.querySelector("#next-mostafa").style.display="none";
//     document.querySelector(`#quest_${count+1}-mostafa`).style.display="flex"; 
//     document.querySelector(`#quest_${count}-mostafa`).style.display="none";
//     console.log(count);
//     if(count===8){document.querySelector("#next-mostafa").onclick=window.close();window.alert("Thank you for taking the exam and wish you good luck")}count=count+1;}
//     document.querySelector("#next-mostafa").onclick=a;







// let def=function(){
//     document.querySelector("#s_2_3-mostafa").style.backgroundColor="green";
//     document.querySelector("#s_2_1-mostafa").style.backgroundColor="red";
//     document.querySelector("#s_2_2-mostafa").style.backgroundColor="red";
//     document.querySelector("#next-mostafa").style.display="flex";
//     document.querySelector("#q_3-mostafa").style.display="flex";
//     document.querySelector("#ch_3_quiz-mostafa").style.display="flex";
// }
// document.querySelector("#s_2_1-mostafa").onclick=function(){
//     def();
// }
// document.querySelector("#s_2_2-mostafa").onclick=function(){
//     def();
// }
// document.querySelector("#s_2_3-mostafa").onclick=function(){
//     def();
// }






// let ghi=function(){
//     document.querySelector("#s_3_3-mostafa").style.backgroundColor="green";
//     document.querySelector("#s_3_1-mostafa").style.backgroundColor="red";
//     document.querySelector("#s_3_2-mostafa").style.backgroundColor="red";
//     document.querySelector("#next-mostafa").style.display="flex";
//     document.querySelector("#q_4-mostafa").style.display="flex";
//     document.querySelector("#ch_4_quiz-mostafa").style.display="flex";
// }
// document.querySelector("#s_3_1-mostafa").onclick=function(){
//     ghi();
// }
// document.querySelector("#s_3_2-mostafa").onclick=function(){
//     ghi();
// }
// document.querySelector("#s_3_3-mostafa").onclick=function(){
//     ghi();
// }






// let jkl=function(){
//     document.querySelector("#s_4_2-mostafa").style.backgroundColor="green";
//     document.querySelector("#s_4_1-mostafa").style.backgroundColor="red";
//     document.querySelector("#s_4_3-mostafa").style.backgroundColor="red";
//     document.querySelector("#next-mostafa").style.display="flex";
//     document.querySelector("#q_5-mostafa").style.display="flex";
//     document.querySelector("#ch_5_quiz-mostafa").style.display="flex";
// }
// document.querySelector("#s_4_1-mostafa").onclick=function(){
//     jkl();
// }
// document.querySelector("#s_4_2-mostafa").onclick=function(){
//     jkl();
// }
// document.querySelector("#s_4_3-mostafa").onclick=function(){
//     jkl();
// }





// let mno=function(){
//     document.querySelector("#s_5_1-mostafa").style.backgroundColor="green";
//     document.querySelector("#s_5_2-mostafa").style.backgroundColor="red";
//     document.querySelector("#s_5_3-mostafa").style.backgroundColor="red";
//     document.querySelector("#next-mostafa").style.display="flex";
//     document.querySelector("#q_6-mostafa").style.display="flex";
//     document.querySelector("#ch_6_quiz-mostafa").style.display="flex";
// }
// document.querySelector("#s_5_1-mostafa").onclick=function(){
//     mno();
// }
// document.querySelector("#s_5_2-mostafa").onclick=function(){
//     mno();
// }
// document.querySelector("#s_5_3-mostafa").onclick=function(){
//     mno();
// }




// let pqr=function(){
//     document.querySelector("#s_6_2-mostafa").style.backgroundColor="green";
//     document.querySelector("#s_6_1-mostafa").style.backgroundColor="red";
//     document.querySelector("#s_6_3-mostafa").style.backgroundColor="red";
//     document.querySelector("#next-mostafa").style.display="flex";
//     document.querySelector("#q_6-mostafa").style.display="flex";
//     document.querySelector("#ch_6_quiz-mostafa").style.display="flex";
// }
// document.querySelector("#s_6_1-mostafa").onclick=function(){
//     pqr();
// }
// document.querySelector("#s_6_2-mostafa").onclick=function(){
//     pqr();
// }
// document.querySelector("#s_6_3-mostafa").onclick=function(){
//     pqr();
// }




// let stu=function(){
//     document.querySelector("#s_7_1-mostafa").style.backgroundColor="green";
//     document.querySelector("#s_7_2-mostafa").style.backgroundColor="red";
//     document.querySelector("#s_7_3-mostafa").style.backgroundColor="red";
//     document.querySelector("#next-mostafa").style.display="flex";
//     document.querySelector("#q_7-mostafa").style.display="flex";
//     document.querySelector("#ch_7_quiz-mostafa").style.display="flex";
// }
// document.querySelector("#s_7_1-mostafa").onclick=function(){
//     stu();
// }
// document.querySelector("#s_7_2-mostafa").onclick=function(){
//     stu();
// }
// document.querySelector("#s_7_3-mostafa").onclick=function(){
//     stu();
// }





// let vwx=function(){
//     document.querySelector("#s_8_3-mostafa").style.backgroundColor="green";
//     document.querySelector("#s_8_1-mostafa").style.backgroundColor="red";
//     document.querySelector("#s_8_2-mostafa").style.backgroundColor="red";
//     document.querySelector("#next-mostafa").style.display="flex";
//     document.querySelector("#q_8-mostafa").style.display="flex";
//     document.querySelector("#ch_8_quiz-mostafa").style.display="flex";
// }
// document.querySelector("#s_8_1-mostafa").onclick=function(){
//     vwx();
// }
// document.querySelector("#s_8_2-mostafa").onclick=function(){
//     vwx();
// }
// document.querySelector("#s_8_3-mostafa").onclick=function(){
//     vwx();
// }













// let count=1;
// let con=0;


// let abc=function(){
//     document.querySelector(`#s_1`).style.backgroundColor="green";
//     document.querySelector(`#s_9`).style.backgroundColor="red";
//     document.querySelector(`#s_10`).style.backgroundColor="red";
//     document.querySelector("#next").style.display="flex";
// }
// document.querySelector(`#s_1`).onclick=function(){
//     abc();
// }
// document.querySelector(`#s_9`).onclick=function(){
//     abc();
// }
// document.querySelector(`#s_10`).onclick=function(){
//     abc();
// }



// let a=function(){
//     document.querySelector("#next").style.display="none";
//     document.querySelector(`#quest_${count+1}`).style.display="flex"; 
//     document.querySelector(`#quest_${count}`).style.display="none";
//     count=count+1;
//     console.log(count);}
    
//     document.querySelector("#next").onclick=a;







// let def=function(){
//     document.querySelector("#s_2").style.backgroundColor="green";
//     document.querySelector("#s_11").style.backgroundColor="red";
//     document.querySelector("#s_12").style.backgroundColor="red";
//     document.querySelector("#next").style.display="flex";
//     document.querySelector("#q_3").style.display="flex";
//     document.querySelector("#ch_3_quiz").style.display="flex";
// }
// document.querySelector("#s_11").onclick=function(){
//     def();
// }
// document.querySelector("#s_12").onclick=function(){
//     def();
// }
// document.querySelector("#s_2").onclick=function(){
//     def();
// }






// let ghi=function(){
//     document.querySelector("#s_3").style.backgroundColor="green";
//     document.querySelector("#s_13").style.backgroundColor="red";
//     document.querySelector("#s_14").style.backgroundColor="red";
//     document.querySelector("#next").style.display="flex";
//     document.querySelector("#q_4").style.display="flex";
//     document.querySelector("#ch_4_quiz").style.display="flex";
// }
// document.querySelector("#s_13").onclick=function(){
//     ghi();
// }
// document.querySelector("#s_14").onclick=function(){
//     ghi();
// }
// document.querySelector("#s_3").onclick=function(){
//     ghi();
// }






// let jkl=function(){
//     document.querySelector("#s_4").style.backgroundColor="green";
//     document.querySelector("#s_15").style.backgroundColor="red";
//     document.querySelector("#s_16").style.backgroundColor="red";
//     document.querySelector("#next").style.display="flex";
//     document.querySelector("#q_5").style.display="flex";
//     document.querySelector("#ch_5_quiz").style.display="flex";
// }
// document.querySelector("#s_15").onclick=function(){
//     jkl();
// }
// document.querySelector("#s_4").onclick=function(){
//     jkl();
// }
// document.querySelector("#s_16").onclick=function(){
//     jkl();
// }





// let mno=function(){
//     document.querySelector("#s_5").style.backgroundColor="green";
//     document.querySelector("#s_17").style.backgroundColor="red";
//     document.querySelector("#s_18").style.backgroundColor="red";
//     document.querySelector("#next").style.display="flex";
//     document.querySelector("#q_6").style.display="flex";
//     document.querySelector("#ch_6_quiz").style.display="flex";
// }
// document.querySelector("#s_5").onclick=function(){
//     mno();
// }
// document.querySelector("#s_17").onclick=function(){
//     mno();
// }
// document.querySelector("#s_18").onclick=function(){
//     mno();
// }




// let pqr=function(){
//     document.querySelector("#s_6").style.backgroundColor="green";
//     document.querySelector("#s_19").style.backgroundColor="red";
//     document.querySelector("#s_20").style.backgroundColor="red";
//     document.querySelector("#next").style.display="flex";
//     document.querySelector("#q_6").style.display="flex";
//     document.querySelector("#ch_6_quiz").style.display="flex";
// }
// document.querySelector("#s_19").onclick=function(){
//     pqr();
// }
// document.querySelector("#s_6").onclick=function(){
//     pqr();
// }
// document.querySelector("#s_20").onclick=function(){
//     pqr();
// }




// let stu=function(){
//     document.querySelector("#s_7").style.backgroundColor="green";
//     document.querySelector("#s_21").style.backgroundColor="red";
//     document.querySelector("#s_22").style.backgroundColor="red";
//     document.querySelector("#next").style.display="flex";
//     document.querySelector("#q_7").style.display="flex";
//     document.querySelector("#ch_7_quiz").style.display="flex";
// }
// document.querySelector("#s_7").onclick=function(){
//     stu();
// }
// document.querySelector("#s_21").onclick=function(){
//     stu();
// }
// document.querySelector("#s_22").onclick=function(){
//     stu();
// }





// let vwx=function(){
//     document.querySelector("#s_8").style.backgroundColor="green";
//     document.querySelector("#s_23").style.backgroundColor="red";
//     document.querySelector("#s_24").style.backgroundColor="red";
//     document.querySelector("#next").style.display="flex";
//     document.querySelector("#q_8").style.display="flex";
//     document.querySelector("#ch_8_quiz").style.display="flex";
// }
// document.querySelector("#s_23").onclick=function(){
//     vwx();
// }
// document.querySelector("#s_24").onclick=function(){
//     vwx();
// }
// document.querySelector("#s_8").onclick=function(){
//     vwx();
// }


















































    // if(count===1){
    // document.querySelector("#quest_2").style.display="block"; 
    // document.querySelector("#quest_1").style.display="none";
    // count=count+1;}
    // else if(count===2){
    //     document.querySelector("#quest_3").style.display="block"; 
    //     document.querySelector("#quest_2").style.display="none";
    //     count=count+1;}
    // else if(count===3){
    //     document.querySelector("#quest_4").style.display="block"; 
    //     document.querySelector("#quest_3").style.display="none";
    //     count=count+1;}}




