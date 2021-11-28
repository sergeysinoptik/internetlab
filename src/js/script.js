let singleFaqs = document.querySelectorAll('.single-faq');

function letAnswered(i) {
	i.addEventListener('click', function (event) {
    let target = event.currentTarget;
    let question = target.firstElementChild;
    let answer = target.lastElementChild;

    let parent = target.parentElement;
    let children = parent.children;

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

let textInput = document.querySelector('#text-input');
let textLabel = document.getElementById('text-input-label');

function textInputed(e) {
    let input = document.querySelector('#text-input');
    input.addEventListener('blur', function() {
        if (input.value !== '') {
            textLabel.style.visibility = 'hidden';
            if (input.value.length < 3) {
                input.classList.add('invalid');
                input.classList.remove('correct');
            } else {
                input.classList.add('correct');
                input.classList.remove('invalid');
            }
        } else {
            textLabel.style.visibility = 'visible';
        }
    });
    input.addEventListener('focus', function() {
        textLabel.style.visibility = 'visible';
        input.classList.remove('correct');
        input.classList.remove('invalid');
    });
};

let phoneInput = document.querySelector('#phone-input');
let phoneLabel = document.getElementById('phone-input-label');

function phoneInputed(e) {
    let input = document.querySelector('#phone-input');
    input.addEventListener('blur', function() {
        if (input.value !== '') {
            phoneLabel.style.visibility = 'hidden';
            if ((input.value.length < 11 || (input.value.length > 11))) {
                input.classList.add('invalid');
                input.classList.remove('correct');
            } else {
                input.classList.add('correct');
                input.classList.remove('invalid');
            }
        } else {
            phoneLabel.style.visibility = 'visible';
            input.classList.remove('correct');
            input.classList.remove('invalid');
        }
    });
    input.addEventListener('focus', function() {
        phoneLabel.style.visibility = 'visible';;
    });
};

textInput.oninput = textInputed;
phoneInput.oninput = phoneInputed;
