let starting_points = 100;
let first_person_init = 100;
let second_person_init = 100;
let person1_single_point = 1;
let person2_single_point = 1;
let ifcount = 1;
let Total_rounds = 5;
first_btn = true;
second_btn =false;

allBtns = document.querySelectorAll(".btn");
document.querySelector(".total-rounds").innerText = Total_rounds;
const btt = document.getElementById('btt');
allBtns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    let id = e.currentTarget.dataset.id;
    if (id === "first_btn") {
      //    console.log("first Button is clicked");
      if(first_btn){
             first_btn = false;
             second_btn = true;
      first_person_clicked(first_person_init);

      }else{
          alert("It's Button2's turn");
      }
   
    }
    if (id === "second-btn") {
      //    console.log("second button is clicked");

      if (second_btn) {
        first_btn = true;
        second_btn = false;
        second_person_clicked(second_person_init);
      } else {
        alert("It's Button1's turn");
      }

    }
    if (id === "start") {
      start(starting_points);
    }
  });
});
document.querySelector(".round").innerText = `${ifcount}st Round`;

function start(starting_points) {
  first_person_init = 100;
  second_person_init = 100;
  document.querySelector(".first-point").innerText = starting_points;
  document.querySelector(".second-point").innerText = starting_points;
  document.querySelector(".final-result").innerText = "";
  document.querySelector(".start").disabled = true;
}

function first_person_clicked(score1) {
  console.log("fst");
  const random_num = calculateRandom();
  console.log(random_num);
  let newScore_of_fst = score1 - random_num;
  document.querySelector(".second-point").innerText = newScore_of_fst;
  first_person_init = newScore_of_fst;
  if (newScore_of_fst <= 0) {
    ifcount++;
    // if(ifcount>=3){
    //  checkBeore();
    // }

    if (
      ifcount == Total_rounds + 1 ||
      person1_single_point >= Math.ceil(Total_rounds / 2)
    ) {
      document.querySelector(".first-person-status").innerText =
        person1_single_point++;
      //  alert("game Finsished");
      checkWhoWon();
    } else {
      displayRound(ifcount);

      // console.log(ifcount);
      document.querySelector(".first-person-status").innerText =
        person1_single_point++;
      //  console.log(`score1:${score1}`);
      console.log("stfstp");
      start_again(starting_points);
      alert(`round ${ifcount}`);
      ///you have start second round
    }
  }

  // document.querySelector('.second-point').innerText=newScore_of_fst;
  // first_person_init =newScore_of_fst;
  // dec_sec_score(score);
}

function second_person_clicked(score2) {
  let tmpscorefornewGame2 = score2;

  console.log("sec");

  const random_num = calculateRandom();

  let newScore_of_sec = score2 - random_num;
  document.querySelector(".first-point").innerText = newScore_of_sec;
  second_person_init = newScore_of_sec;
  if (newScore_of_sec <= 0) {
    ifcount++;
    //   if(ifcount>=3){
    //  checkBeore();

    //   }
    if (ifcount == Total_rounds + 1 || person2_single_point>=Math.ceil(Total_rounds/2)) {
      console.log(ifcount, Total_rounds);
      document.querySelector(".second-person-status").innerText =
        person2_single_point++;

      // alert("game Finsished");
      checkWhoWon();
    } else {
      displayRound(ifcount);

      document.querySelector(".second-person-status").innerText =
        person2_single_point++;
      ///you have start second round
      //   console.log(`score2:${score2}`);
      console.log("stsecp");

      start_again(starting_points);
      alert(`round ${ifcount}`);
    }
  }
  // document.querySelector('.first-point').innerText=newScore_of_sec;
  // second_person_init=newScore_of_sec;
}

function calculateRandom() {
  return 2 ** Math.ceil(Math.random() * 5);
}

function start_again(score_value) {
  first_person_init = 100;
  second_person_init = 100;
  console.log("start_again called");
  document.querySelector(".first-point").innerText = score_value;
  console.log("updated1");
  document.querySelector(".second-point").innerText = score_value;
  console.log("updated2");
}

function displayRound(round) {
  document.querySelector(".round").innerText = `Round ${round}`;
}

function checkBeore() {
  if (person1_single_point > person2_single_point) {
    checkWhoWon();
  }
}

function checkWhoWon() {
  if (person1_single_point > person2_single_point) {
    alert("person 1 Won");
    document.querySelector(".final-result").innerText = "Person 1";
    alert("Game Finished");
  } else if (person1_single_point === person2_single_point) {
    return true;
  } else {
    alert("person 2 won");
    document.querySelector(".final-result").innerText = "Person 2";
    alert("Game Finished");
  }
  start_again(starting_points);
}

function newGame(){
    
     document.querySelector(".first-point").innerText = "";
       document.querySelector(".second-point").innerText = "";
        document.querySelector(".first-person-status").innerText ='';
        document.querySelector(".second-person-status").innerText ='';
          document.querySelector(".start").disabled = false;
           starting_points = 100;
          first_person_init = 100;
           second_person_init = 100;
           person1_single_point = 1;
           person2_single_point = 1;
           ifcount = 1;
           Total_rounds = 5;
          first_btn = true;
          second_btn = false;
          document.querySelector(".round").innerText = `${ifcount}st Round`;



 
}
function openMenu(){
    btt.style.bottom = "0";
    console.log("open");

}
function menuClose(){
btt.style.bottom = "100vh";

}