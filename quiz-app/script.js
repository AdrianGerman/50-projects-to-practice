const quizData = [
  {
    question: "¿Qué lenguaje se ejecuta en un navegador web?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d"
  },
  {
    question: "¿Qué significa CSS?",
    a: "Hojas de Estilo Central",
    b: "Hojas de Estilo en Cascada",
    c: "Hojas de Estilo Simples en Cascada",
    d: "Coches SUV Veleros",
    correct: "b"
  },
  {
    question: "¿Qué significa HTML?",
    a: "Lenguaje de Marcado de Hipertexto",
    b: "Lenguaje de Markdown de Hipertexto",
    c: "Lenguaje de Máquina Hyperloop",
    d: "Helicópteros Terminales Motonaves Lamborghinis",
    correct: "a"
  },
  {
    question: "¿En qué año se lanzó JavaScript?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "ninguna de las anteriores",
    correct: "b"
  }
]

const quiz = document.getElementById("quiz")
const answerEls = document.querySelectorAll(".answer")
const questionEl = document.getElementById("question")
const a_text = document.getElementById("a_text")
const b_text = document.getElementById("b_text")
const c_text = document.getElementById("c_text")
const d_text = document.getElementById("d_text")
const submitBtn = document.getElementById("submit")

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
  deselectAnswers()

  const currentQuizData = quizData[currentQuiz]

  questionEl.innerText = currentQuizData.question
  a_text.innerText = currentQuizData.a
  b_text.innerText = currentQuizData.b
  c_text.innerText = currentQuizData.c
  d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
  answerEls.forEach((answerEl) => (answerEl.checked = false))
}

function getSelected() {
  let answer

  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id
    }
  })

  return answer
}

submitBtn.addEventListener("click", () => {
  const answer = getSelected()

  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++
    }

    currentQuiz++

    if (currentQuiz < quizData.length) {
      loadQuiz()
    } else {
      quiz.innerHTML = `
                <h2>You answered ${score}/${quizData.length} questions correctly</h2>

                <button onclick="location.reload()">Reload</button>
            `
    }
  }
})
