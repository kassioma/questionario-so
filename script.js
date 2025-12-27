let currentLesson = 1;
let currentQuestion = 0;
let score = 0;
let answered = false;

function startLesson(lessonNum) {
    currentLesson = lessonNum;
    document.getElementById('menuScreen').style.display = 'none';
    document.getElementById('quizSection').style.display = 'block';
    updateLessonButtons();
    updateHeaderSubtitle();
    restartQuiz();
}

function changeLesson(lessonNum) {
    currentLesson = lessonNum;
    updateLessonButtons();
    updateHeaderSubtitle();
    restartQuiz();
}

function backToMenu() {
    document.getElementById('menuScreen').style.display = 'block';
    document.getElementById('quizSection').style.display = 'none';
    document.getElementById('resultCard').classList.remove('show');
    document.getElementById('quizContainer').style.display = 'block';
}

function updateLessonButtons() {
    const buttons = document.querySelectorAll('.lesson-btn');
    buttons.forEach((btn, index) => {
        if (index < 5 && index === currentLesson - 1) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

function updateHeaderSubtitle() {
    document.getElementById('headerSubtitle').textContent = lessons[currentLesson].title;
}

function renderQuestion() {
    const container = document.getElementById('quizContainer');
    const questions = lessons[currentLesson].questions;
    const q = questions[currentQuestion];

    container.innerHTML = `
                <div class="question-card active">
                    <div class="question-number">Questão ${currentQuestion + 1} de ${questions.length}</div>
                    <div class="question-text">${q.question}</div>
                    <div class="options">
                        ${q.options.map((opt, i) => `
                            <div class="option" onclick="selectOption(${i})">
                                <span class="option-letter">${String.fromCharCode(65 + i)}.</span>
                                <span>${opt}</span>
                            </div>
                        `).join('')}
                    </div>
                    <div class="hint" id="hint">
                        <strong>💡 Dica:</strong> ${q.hint}
                    </div>
                    <div class="buttons">
                        <button class="btn-secondary" onclick="showHint()">Ver Dica</button>
                        <button class="btn-primary" id="nextBtn" onclick="nextQuestion()" disabled>
                            ${currentQuestion === questions.length - 1 ? 'Finalizar' : 'Próxima'}
                        </button>
                    </div>
                </div>
            `;

    updateProgress();
    answered = false;
}

function selectOption(index) {
    if (answered) return;

    const options = document.querySelectorAll('.option');
    const q = lessons[currentLesson].questions[currentQuestion];

    options.forEach((opt, i) => {
        opt.style.pointerEvents = 'none';
        if (i === index) {
            if (i === q.correct) {
                opt.classList.add('correct');
                score++;
            } else {
                opt.classList.add('wrong');
            }
        }
        if (i === q.correct) {
            opt.classList.add('correct');
        }
    });

    answered = true;
    document.getElementById('nextBtn').disabled = false;
}

function showHint() {
    document.getElementById('hint').classList.add('show');
}

function nextQuestion() {
    if (!answered) return;

    currentQuestion++;
    const questions = lessons[currentLesson].questions;

    if (currentQuestion < questions.length) {
        renderQuestion();
    } else {
        showResults();
    }
}

function updateProgress() {
    const questions = lessons[currentLesson].questions;
    const progress = ((currentQuestion) / questions.length) * 100;
    document.getElementById('progressFill').style.width = progress + '%';
}

function showResults() {
    document.getElementById('quizContainer').style.display = 'none';
    document.getElementById('resultCard').classList.add('show');
    const questions = lessons[currentLesson].questions;
    const totalQuestions = questions.length;
    document.getElementById('finalScore').textContent = score;
    document.getElementById('totalQuestions').textContent = `de ${totalQuestions}`;
    document.getElementById('correctCount').textContent = score;
    document.getElementById('wrongCount').textContent = totalQuestions - score;

    const percentage = Math.round((score / totalQuestions) * 100);
    document.getElementById('percentage').textContent = percentage;

    let message = '';

    if (percentage === 100) {
        message = '🏆 Perfeito! Você domina o conteúdo!';
    } else if (percentage >= 80) {
        message = '🎉 Excelente! Você foi muito bem!';
    } else if (percentage >= 60) {
        message = '👍 Bom trabalho! Continue estudando!';
    } else {
        message = '📚 Revise o material e tente novamente!';
    }

    document.getElementById('resultMessage').textContent = message;
    document.getElementById('progressFill').style.width = '100%';
}

function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    answered = false;
    document.getElementById('quizContainer').style.display = 'block';
    document.getElementById('resultCard').classList.remove('show');
    renderQuestion();
}

// Renderizar a primeira questão quando a página carrega
document.addEventListener('DOMContentLoaded', function() {
    // Inicializa tema salvo (se houver)
    const themeToggle = document.getElementById('themeToggle');
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.documentElement.classList.add('dark-theme');
    }

    function updateToggleIcon() {
        if (!themeToggle) return;
        const isDark = document.documentElement.classList.contains('dark-theme');
        themeToggle.textContent = isDark ? '☀️' : '🌙';
        themeToggle.title = isDark ? 'Tema claro' : 'Tema escuro';
    }

    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            document.documentElement.classList.toggle('dark-theme');
            const isDark = document.documentElement.classList.contains('dark-theme');
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
            updateToggleIcon();
        });
    }

    updateToggleIcon();
    renderQuestion();
});