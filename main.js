const form = document.querySelector('.quiz-box')
const answers = Array.from(document.querySelectorAll('.answer'))
const allQuestions = document.querySelectorAll('.question')
const modal = document.querySelector('.modal')
const modalInfo = modal.querySelector('p')
const modalButton = modal.querySelector('.close-modal')

const handleQuiz = e => {
    e.preventDefault();

    const checkedAnswers = answers.filter(answer => answer.checked)
    const isTrue = checkedAnswers.every(answer => answer.value === 'true')
    const allChecked = checkedAnswers.length === allQuestions.length

    if (!allChecked) {
        modal.classList.add('modal-active')
        modalInfo.textContent = 'Musisz wybrać wszystkie odpowiedzi!'
        return
    }

    checkedAnswers.forEach(answer => {
        const checkIfCorrect = answer.value === 'true'
        const answerBox = answer.closest('.answer-box')

        if (checkIfCorrect) {
            answerBox.classList.add('correct')
            answerBox.classList.remove('incorrect')
        } else{
            answerBox.classList.add('incorrect')
            answerBox.classList.remove('correct')
        }
    })

    if (isTrue && allChecked) {
        modal.classList.add('modal-active')
        modalInfo.textContent = 'Brawo! Udało ci się odpowiedzieć poprawnie na wszystkie pytania!'
    } 
    else {
        modal.classList.add('modal-active')
        modalInfo.textContent = 'Niestety przegrywasz nie udało ci się udzielić poprawnych odpowiedzi'
    }
}

const closeModal = () => {
    modal.classList.remove('modal-active')
}

modalButton.addEventListener('click', closeModal)
form.addEventListener('submit', handleQuiz) 
