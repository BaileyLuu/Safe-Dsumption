function checkAnswer(){
    var points = 0;
    
    var q1 = document.quiz.qs1.value;
    var q2 = document.quiz.qs2.value;
    var q3 = document.quiz.qs3.value;
    var q4 = document.quiz.qs4.value;
    var q5 = document.quiz.qs5.value;
    var q6 = document.quiz.qs6.value;
    var q7 = document.quiz.qs7.value;
    var q8 = document.quiz.qs8.value;
   
    var testScore = document.getElementById("testScore");
    var skinType = document.getElementById("type");
    if(q1 == "Light blue, light gray or light green"){
        points += 0;
    }else if(q1 == "Blue, gray or green"){
        points += 1;
    }else if(q1 == "Hazel or light brown"){
        points += 2;
    }else if(q1 == "Dark brown"){
        points += 3;
    }else if(q1 == "Brownish black"){
        points += 4;
    }

    if(q2 == "Red or light blonde"){
        points += 0;
    }else if(q2 == "Blonde"){
        points += 1;
    }else if(q2 == "Dark blonde or light brown"){
        points += 2;
    }else if(q2 == "Dark brown"){
        points += 3;
    }else if(q2 == "Black"){
        points += 4;
    }

    if(q3 == "Ivory white"){
        points += 0;
    }else if(q3 == "Fair or pale"){
        points += 1;
    }else if(q3 == "Fair to beige, with golden undertone"){
        points += 2;
    }else if(q3 == "Olive or light brown"){
        points += 3;
    }else if(q3 == "Dark brown or black"){
        points += 4;
    }

    if(q4 == "Many"){
        points += 0;
    }else if(q4 == "Several"){
        points += 1;
    }else if(q4 == "A few"){
        points += 2;
    }else if(q4 == "Very few"){
        points += 3;
    }else if(q4 == "None"){
        points += 4;
    }

    if(q5 == "Always burns, blisters and peels"){
        points += 0;
    }else if(q5 == "Often burns, blisters and peels"){
        points += 1;
    }else if(q5 == "Burns moderately"){
        points += 2;
    }else if(q5 == "Burns rarely, if at all"){
        points += 3;
    }else if(q5 == "Never burns"){
        points += 4;
    }
    if(q6 == "Never"){
        points += 0;
    }else if(q6 == "Seldom"){
        points += 1;
    }else if(q6 == "Sometimes"){
        points += 2;
    }else if(q6 == "Often"){
        points += 3;
    }else if(q6 == "Always"){
        points += 4;
    }
    if(q7 == "Very little or Not at all"){
        points += 0;
    }else if(q7 == "Lightly"){
        points += 1;
    }else if(q7 == "Moderately"){
        points += 2;
    }else if(q7 == "Deeply"){
        points += 3;
    }else if(q7 == "Natural dark"){
        points += 4;
    }

    if(q8 == "Very sensitive"){
        points += 0;
    }else if(q8 == "Sensitive"){
        points += 1;
    }else if(q8 == "Normal"){
        points += 2;
    }else if(q8 == "Resistant"){
        points += 3;
    }else if(q8 == "Never had a problem"){
        points += 4;
    }
    testScore.innerHTML = "Your test score is " +  points;
    if(points >= 0 && points <= 6){
        skinType.innerHTML = "You have skin type I (1): Always burn, never tan. ";
    }else if(points >= 7 && points <= 12){
        skinType.innerHTML = "You have skin type II (2): Burn easily, rarely tan. ";
    }else if(points >= 13 && points <= 18){
        skinType.innerHTML = "You have skin type III (3): Occasionally burn, slowly tan. ";
    }else if(points >= 19 && points <= 24){
        skinType.innerHTML = "You have skin type IV (4): Rarely burn, rapidly tan. ";
    }else if(points >= 25 && points <= 30){
        skinType.innerHTML = "You have skin type V (5):  Very rarely burn, always dark. ";
    }else if(points >= 31){
        skinType.innerHTML = "You have skin type VI (6):  Very rarely burn, always dark";
    }
}