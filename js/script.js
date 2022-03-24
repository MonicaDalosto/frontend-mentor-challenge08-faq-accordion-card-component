const questions = document.querySelectorAll('.questions');
const answers = document.querySelectorAll('.answers');

questions.forEach(questionClicked => {
  questionClicked.addEventListener('click', () => {
    showAnswer(questionClicked);
  })
});

const checkHiddenClass = () => {
  for (let i of answers) {
    let answerItem = i;
    if (!answerItem.className.includes('hidden')) {
      answerItem.classList.add('hidden');
    }
  }
};

const checkHeadingColor = () => {
  for (let i of questions) {
    let questionItem = i;
    if (questionItem.className.includes('heading-color')) {
      questionItem.classList.remove('heading-color');
    }
  }
};

const showAnswer = (questionClicked) => {
  let question = questionClicked;
  let answer = questionClicked.nextElementSibling;

  // checkHiddenClass();
  // checkHeadingColor();
  // answer.classList.toggle('hidden');
  // question.classList.toggle('heading-color');
  
  if (answer.className.includes('hidden')) {
    checkHiddenClass();
    checkHeadingColor();
    answer.classList.remove('hidden');
    question.classList.add('heading-color');
  } else {
    answer.classList.add('hidden');
    question.classList.remove('heading-color');
  }
};