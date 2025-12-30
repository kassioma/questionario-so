let currentLesson = 1;
let currentQuestion = 0;
let score = 0;
let answered = false;

// Sistema de rastreamento de progresso
function getProgressoAulas() {
    const saved = localStorage.getItem('progressoAulas');
    return saved ? JSON.parse(saved) : {
        aula1: null,
        aula2: null,
        aula3: null,
        aula4: null,
        aula5: null
    };
}

function salvarProgressoAula(lessonNum, percentage) {
    const progresso = getProgressoAulas();
    progresso[`aula${lessonNum}`] = percentage;
    localStorage.setItem('progressoAulas', JSON.stringify(progresso));
    atualizarStatusCertificado();
}

function atualizarStatusCertificado() {
    const progresso = getProgressoAulas();
    const todasCompletas = 
        progresso.aula1 !== null && progresso.aula1 >= 60 &&
        progresso.aula2 !== null && progresso.aula2 >= 60 &&
        progresso.aula3 !== null && progresso.aula3 >= 60 &&
        progresso.aula4 !== null && progresso.aula4 >= 60 &&
        progresso.aula5 !== null && progresso.aula5 >= 60;
    
    const certCard = document.querySelector('.certificate-card');
    if (certCard) {
        if (todasCompletas) {
            certCard.style.opacity = '1';
            certCard.style.pointerEvents = 'auto';
            certCard.style.cursor = 'pointer';
        } else {
            certCard.style.opacity = '0.5';
            certCard.style.pointerEvents = 'none';
            certCard.style.cursor = 'not-allowed';
        }
    }
    
    // Atualizar badges de cada aula
    for (let i = 1; i <= 5; i++) {
        const badge = document.getElementById(`badge-${i}`);
        const percentual = progresso[`aula${i}`];
        
        if (badge) {
            if (percentual !== null) {
                if (percentual >= 60) {
                    badge.className = 'lesson-badge completed';
                    badge.textContent = `✅ ${percentual}%`;
                } else {
                    badge.className = 'lesson-badge incomplete';
                    badge.textContent = `⚠️ ${percentual}% (mínimo 60%)`;
                }
            } else {
                badge.className = 'lesson-badge incomplete';
                badge.textContent = '⏳ Não respondida';
            }
        }
    }
}

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

    // Salvar progresso da aula
    salvarProgressoAula(currentLesson, percentage);

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
    
    // Atualizar status do certificado ao carregar
    atualizarStatusCertificado();
});

// Função para abrir certificado do menu inicial
function openCertificateModal() {
    const progresso = getProgressoAulas();
    
    // Verificar se todas as aulas foram completadas com 60%
    const todasCompletas = 
        progresso.aula1 !== null && progresso.aula1 >= 60 &&
        progresso.aula2 !== null && progresso.aula2 >= 60 &&
        progresso.aula3 !== null && progresso.aula3 >= 60 &&
        progresso.aula4 !== null && progresso.aula4 >= 60 &&
        progresso.aula5 !== null && progresso.aula5 >= 60;
    
    if (!todasCompletas) {
        // Construir mensagem com status de cada aula
        let mensagemStatus = 'Para emitir o certificado, você precisa obter 60% de acerto em TODAS as 5 aulas:\n\n';
        mensagemStatus += `✅ Aula 1: ${progresso.aula1 !== null ? progresso.aula1 + '%' : '⏳ Não respondida'}\n`;
        mensagemStatus += `✅ Aula 2: ${progresso.aula2 !== null ? progresso.aula2 + '%' : '⏳ Não respondida'}\n`;
        mensagemStatus += `✅ Aula 3: ${progresso.aula3 !== null ? progresso.aula3 + '%' : '⏳ Não respondida'}\n`;
        mensagemStatus += `✅ Aula 4: ${progresso.aula4 !== null ? progresso.aula4 + '%' : '⏳ Não respondida'}\n`;
        mensagemStatus += `✅ Aula 5: ${progresso.aula5 !== null ? progresso.aula5 + '%' : '⏳ Não respondida'}`;
        
        alert(mensagemStatus);
        return;
    }
    
    const nomeAluno = prompt('Digite seu nome completo para emitir o certificado:');
    if (nomeAluno && nomeAluno.trim() !== '') {
        emitirCertificado(nomeAluno);
    }
}

// Função para emitir certificado
function emitirCertificado(nomeAluno) {
    document.getElementById('nome-certificado').textContent = nomeAluno;
    
    const hoje = new Date();
    const dataFormatada = hoje.toLocaleDateString('pt-BR', { year: 'numeric', month: 'long', day: 'numeric' });
    document.getElementById('data-certificado').textContent = dataFormatada;
    
    setTimeout(() => {
        const certificadoElement = document.getElementById('certificado');
        html2canvas(certificadoElement, { scale: 2, useCORS: true }).then(canvas => {
            const imgData = canvas.toDataURL('image/png');
            const { jsPDF } = window.jspdf;
            const pdf = new jsPDF('landscape', 'mm', 'a4');
            pdf.addImage(imgData, 'PNG', 10, 10, 277.4, 190.5);
            pdf.save(`Certificado_${nomeAluno.replace(/\s+/g, '_')}.pdf`);
        });
    }, 100);
}