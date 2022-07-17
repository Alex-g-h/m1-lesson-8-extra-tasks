
checkQuestionAnswer("Арбуз это фрукт или ягода?", "Ягода");
checkQuestionAnswer("Сколько в среднем зубов у взрослого человека?", "32");
checkQuestionAnswer("Как называется самая маленькая птица в мире?", "Колибри");

/**
 * Function asks question and compare response with correct answer
 * @param {*} question Question
 * @param {*} correctAnswer Correct answer
 */
function checkQuestionAnswer(question, correctAnswer) {
  const answer = prompt(question)?.trim();
  let isAnswerString = true;
  answer ?? (isAnswerString &&= false);

  if (!isAnswerString) {
    alert('Ответ неверный');
    return;
  }

  if (answer.toLowerCase() === correctAnswer.toLowerCase())
    alert('Ответ верный');
  else
    alert('Ответ неверный');
}