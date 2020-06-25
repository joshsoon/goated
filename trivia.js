const questions = [
  {
    id: 1,
    question: "Who is the owner and founder of GoatedBball?",
    answer: "Andre Whitehead",
    options: [
      "AlanNBAGoat",
      "Raghav Ganapathy",
      "Andre Whitehead",
      "Jayden Buman"
    ]
  },
  {
    id: 2,
    question: "How many all-time three-pointers has Max Guit made?",
    answer: "2",
    options: [
      "0",
      "1",
      "2",
      "5"
    ]
  },
  {
    id: 3,
    question: "What is Pascal Siakam's Nickname?",
    answer: "Spicy P",
    options: [
      "Spicy P",
      "Salty P",
      "P-Dog",
      "Marshmallo"
    ]
  }
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
    location.href = "end.html";
  }
  console.log(question_count);

  let user_answer = document.querySelector("li.option.active").innerHTML;
  if (user_answer == questions[question_count].answer) {
    points += 10;
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
