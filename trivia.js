var pos = 0, test, test_status, question, choice, choices, chA, chB, chC, chD, correct = 0;
var questions = [
  {
      question: "Who is the owner of GoatedBball?",
      a: "Raghav",
      b: "Andre",
      c: "AlanNBAGoat",
      d: "Niggolas",
      answer: "B"
    },
  {
      question: "Who is the all time leading scorer in the NBA?",
      a: "Michael Jordan",
      b: "LeBron James",
      c: "Kareem Abdul-Jabbar",
      d: "Kobe Bryant (RIP)",
      answer: "C"
    },
  {
      question: "Which player has the most championship rings?",
      a: "Wilt Chamberlain",
      b: "Tim Duncan",
      c: "Sam Jones",
      d: "Bill Russell",
      answer: "D"
    },
  {
      question: "What is Pascal Siakam's nickname?",
      a: "PP",
      b: "Spicy P",
      c: "PSpicy",
      d: "Marshmallo",
      answer: "C"
    },
  {
      question: "How many 3-pointers has Max Guit made all-time?",
      a: "0",
      b: "1",
      c: "2",
      d: "4",
      answer: "b"
  }
  ];

function get(x){
  return document.getElementById(x);
}
function renderQuestion(){
  test = get("test");
  if(pos >= questions.length){
    test.innerHTML = "<h2>You got "+correct+" of + "+questions.length+" questions correct</h2>";
    get("test_status").innerHTML = "Test completed";
    pos = 0;
    correct = 0;
    return false;
  }
  get("test_status").innerHTML = "Question "+(pos+1)+" of "+questions.length;
  
  question = questions[pos].question;
  chA = questions[pos].a;
  chB = questions[pos].b;
  chC = questions[pos].c;
  chD = questions[pos].d;
  test.innerHTML = "<h3>"+question+"</h3>";
  test.innerHTML += "<label> <input type='radio' name='choices' value='A'> "+chA+"</label><br>";
  test.innerHTML += "<label> <input type='radio' name='choices' value='B'> "+chB+"</label><br>";
  test.innerHTML += "<label> <input type='radio' name='choices' value='C'> "+chC+"</label><br>";
  test.innerHTML += "<label> <input type='radio' name='choices' value='C'> "+chD+"</label><br><br>";
  test.innerHTML += "<button onclick='checkAnswer()'>Submit Answer</button>";
}
function checkAnswer(){
  choices = document.getElementsByName("choices");
  for(var i=0; i<choices.length; i++){
    if(choices[i].checked){
      choice = choices[i].value;
    }
  }
  if(choice == questions[pos].answer){
    correct++;
  }
  pos++;
  renderQuestion();
}
window.addEventListener("load", renderQuestion);