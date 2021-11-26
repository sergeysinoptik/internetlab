let singleFaqs = document.querySelectorAll('.single-faq');

function letAnswered(i) {
	i.addEventListener('click', function (event) {
    let target = event.currentTarget;
    let question = target.firstElementChild;
    let answer = target.lastElementChild;

    let parent = target.parentElement;
    let children = parent.children;
    

    console.log(target, 'target')
    console.log(question, 'question')
    console.log(answer, 'answer')

    if (!question.classList.contains('answered')) {
        Array.from(children).forEach(e => e.firstElementChild.classList.remove('answered'));
        question.classList.add('answered');
    } else {
        question.classList.remove('answered');
    }

    if (answer.classList.contains('display-none')) {
        Array.from(children).forEach(e => e.lastElementChild.classList.remove('display-block'));
        Array.from(children).forEach(e => e.lastElementChild.classList.add('display-none'));
        answer.classList.remove('display-none');
        answer.classList.add('display-block');
    } else {
        answer.classList.remove('display-block');
        answer.classList.add('display-none');
    }
  });
}

Array.from(singleFaqs).forEach(e => letAnswered(e));