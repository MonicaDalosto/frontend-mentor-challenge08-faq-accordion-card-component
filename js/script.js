const questions = document.querySelectorAll('.questions');
const faqItems = document.querySelectorAll('.faq-item');


questions.forEach(questionClicked => {
  questionClicked.addEventListener('click', () => {
    showAnswer(questionClicked);
  })
});

const checkActiveClass = () => {
  for (let i of faqItems) {
    let faqItem = i;
    faqItem.classList.remove('active');
  }
};

const showAnswer = (questionClicked) => {
  let question = questionClicked;
  let answer = questionClicked.nextElementSibling;
  if (!question.className.includes('active')) {
    checkActiveClass();
    answer.classList.add('active');
    question.classList.add('active');
  } else {
    answer.classList.remove('active');
    question.classList.remove('active');
  }
};