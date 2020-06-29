const questions = [
    {
      id: 1,
      question: "What should Lou Williams do?",
      answer: "B: Pass to Jamychal Green on the right wing",
      options: [
        "A: Pass to Montrezl Harrel in the key",
        "B: Pass to Jamychal Green on the right wing",
        "C: Pass to Pat Bev up top",
      ]
    },
    {
      id: 2,
      question: "What should KCP do?",
      answer: "C: Pass to Troy Daniels in the right corner",
      options: [
        "A: Score at the rim and finish",
        "B: Pass to Dwight Howard in the paint",
        "C: Pass to Troy Daniels in the right corner",
      ]
    },
    {
      id: 3,
      question: "What should Lebron do?",
      answer: "A: Pass to the cutting Troy Daniels",
      options: [
        "A: Pass to the cutting Troy Daniels",
        "B: Shoot the ball",
        "C: Pass to KCP in the right corner-wing"
      ]
    },
    {
      id: 4,
      question: "What should Lebron do in the paint?",
      answer: "C: Pass to the cutting JaVale McGee",
      options: [
        "A: Take advantage of the mis-match and score",
        "B: Pass to Avery Bradley on the left wing",
        "C: Pass to the cutting JaVale McGee"
      ]
    },
    {
      id: 5,
      question: "What should Fred van Fleet do?",
      answer: "A: Pass to Kyle Lowry in the left corner",
      options: [
        "A: Pass to Kyle Lowry in the left corner",
        "B: Take the layup and try to score under the rim",
        "C: Pass to Siakam up top"
      ]
    },
    {
      id: 6,
      question: "What should Jrue Holiday do?",
      answer: "A: Pass to Nicolo Melli on the right wing",
      options: [
        "A: Pass to Nicolo Melli on the right wing",
        "B: Go for the shot or layup",
        "C: Pass to Kenrich Williams in the right corner"
      ]
    },
    {
      id: 7,
      question: "What should Lonzo do?",
      answer: "C: Pass to Nicolo Melli in the right corner",
      options: [
        "A: Pass to Jrue Holiday up top",
        "B: Drive in and score at the rim",
        "C: Pass to Nicolo Melli in the right corner"
      ]
    },
    {
      id: 8,
      question: "What should Spicy P do?",
      answer: "C: Drive in to score",
      options: [
        "A: Pass to Serge Ibaka on the left wing",
        "B: Pass to the cutter Terrence Davis III",
        "C: Drive in to score"
      ]
    },
    {
      id: 9,
      question: "What should Terrence Davis III do?",
      answer: "B: Pass to Norman Powell on the right wing",
      options: [
        "A: Pass to Patrick McCaw up top",
        "B: Pass to Norman Powell on the right wing",
        "C: Drive in to score"
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
  