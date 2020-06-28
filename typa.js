const questions = [
    {
      id: 1,
      question: "Pick the stats you prefer!",
      tenpts: "14 points, 6 assists, 13 rebounds",
      twentypts: "20 points, 7 assists, 7 rebounds",
      thirtypts: "34 points, 3 assists, 2 rebounds",
      fortypts: "6 points, 10 assists, 4 steals",
      options: [
        "6 points, 10 assists, 4 steals",
        "34 points, 3 assists, 2 rebounds",
        "20 points, 7 assists, 7 rebounds",
        "14 points, 6 assists, 13 rebounds"
      ]
    },
    {
      id: 2,
      question: "Which NBA player do you play like?",
      tenpts: "Anthony Davis",
      twentypts: "Stephen Curry",
      thirtypts: "LeBron James",
      fortypts: "Chris Paul",
      options: [
        "LeBron James",
        "Stephen Curry",
        "Anthony Davis",
        "Chris Paul"
      ]
    },
    {
      id: 3,
      question: "Who is the greatest player of all time?",
      tenpts: "Shaquille O'Neal",
      twentypts: "AlanNBAGoat",
      thirtypts: "Kobe Bryant",
      fortypts: "Magic Johnson",
      options: [
        "AlanNBAGoat",
        "Shaquille O'Neal",
        "Kobe Bryant",
        "Magic Johnson"
      ]
    },
    {
      id: 4,
      question: "What is your biggest strength?",
      tenpts: "Strength",
      twentypts: "Basketball IQ",
      thirtypts: "Hustle",
      fortypts: "Speed and agility",
      options: [
        "Strength",
        "Speed and agility",
        "Basketball IQ",
        "Hustle"
      ]
    },
    {
      id: 5,
      question: "What is your style of play?",
      tenpts: "Rebounding, blocking",
      twentypts: "Dunking, rebounding",
      thirtypts: "Shooting, driving",
      fortypts: "Passing, dribbling",
      options: [
        "Rebounding, blocking",
        "Passing, dribbling",
        "Dunking, rebounding",
        "Shooting, driving"
      ]
    },
    {
      id: 6,
      question: "3 seconds left, down by one on offense. What do you do?",
      tenpts: "Box out and get boards",
      twentypts: "Go for the layup",
      thirtypts: "Go and take a jumpshot",
      fortypts: "Draw a foul or pass out",
      options: [
        "Draw a foul or pass out",
        "Go and take a jumpshot",
        "Go for the layup",
        "Box out and get boards"
      ]
    },
  ];
  
  let question_count = 0;
  let points = 0;
  
  window.onload = function() {
    show(question_count);
  
  };
  
  function next() {
    if (question_count == questions.length - 1) {
      sessionStorage.setItem("time", time);
      clearInterval(mytime);
      location.href = "typa-end.html";
    }
    console.log(question_count);
  
    let user_answer = document.querySelector("li.option.active").innerHTML;
    if (user_answer == questions[question_count].tenpts) {
      points += 10;
      sessionStorage.setItem("points", points);
    }
    if (user_answer == questions[question_count].twentypts) {
      points += 20;
      sessionStorage.setItem("points", points);
    }
    if (user_answer == questions[question_count].thirtypts) {
      points += 30;
      sessionStorage.setItem("points", points);
    }
    if (user_answer == questions[question_count].fortypts) {
      points += 40;
      sessionStorage.setItem("points", points);
    }
    console.log(points);
  
    question_count++;
    show(question_count);
  }

  function show(count) {
    let question = document.getElementById("questions");
    let [first, second, third, fourth] = questions[count].options;
  
    question.innerHTML = `
    <h2>Q${count + 1}. ${questions[count].question}</h2>
     <ul class="option_group">
    <li class="option">${first}</li>
    <li class="option">${second}</li>
    <li class="option">${third}</li>
    <li class="option">${fourth}</li>
  </ul> 
    `;
    toggleActive();
  }
  
  function toggleActive() {
    let option = document.querySelectorAll("li.option");
    for (let i = 0; i < option.length; i++) {
      option[i].onclick = function() {
        for (let i = 0; i < option.length; i++) {
          if (option[i].classList.contains("active")) {
            option[i].classList.remove("active");
          }
        }
        option[i].classList.add("active");
      };
    }
  }

  function typeOfPlayer() {
    var text = "";
         if (points < 90) {
        text = "You play like Goran Dragic! idk you're alright I guess, pass first point guard";
      }  else if (points < 120) {
        text = "You play like Russell Westbrook! Fast and atheletic, you're a triple double machine! But you can't shoot and brick all of your shots.";
      }  else if (points < 150) {
        text = "You play like Stephen Curry! Limitless range...";
      }  else if (points < 180) {
        text = "You play like Kevin Durant! You sLitHer like a sNaKe around the defense, tall and can shoot.";
      } else if (points < 220) {
        text = "You play like LeBron James! Kinda OP at everything.";
      } else if (points < 250) {
        text = "You play like Blake Griffin! All you do is dunk.";
      } else {
        text = "You play like Anthony Davis! You're tall and get rebounds and dunk.";
      }

    document.getElementById("typeOfPlayer").innerHTML = text;
  }