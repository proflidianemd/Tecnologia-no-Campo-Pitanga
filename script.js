// Dados Dinâmicos (Array de Objetos para Manutenção)
const featuresData = [
    {
        title: "Drones de Monitoramento",
        text: "Mapeamento de precisão nas lavouras de Pitanga, reduzindo desperdício de insumos em até 30%."
    },
    {
        title: "Sensores IoT no Solo",
        text: "Monitoramento em tempo real da umidade e nutrientes, garantindo a saúde das plantações."
    },
    {
        title: "Gestão Digital",
        text: "Softwares de ponta conectando o produtor rural ao mercado global diretamente da cidade."
    }
];

const faqData = [
    {
        question: "Como a tecnologia ajuda o pequeno produtor?",
        answer: "Através de cooperativas digitais e ferramentas de baixo custo que otimizam o tempo e a colheita."
    },
    {
        question: "Qual o impacto ambiental em Pitanga?",
        answer: "A tecnologia permite o uso racional de água e defensivos, preservando nossos mananciais."
    }
];

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    renderFeatures();
    renderAccordion();
    initAccessibility();
});

// Renderizar Benefícios
function renderFeatures() {
    const container = document.getElementById('features-container');
    container.innerHTML = featuresData.map(f => `
        <article class="feature-card">
            <h3>${f.title}</h3>
            <p>${f.text}</p>
        </article>
    `).join('');
}

// Renderizar Accordion
function renderAccordion() {
    const container = document.getElementById('accordion-container');
    container.innerHTML = faqData.map((item, index) => `
        <div class="accordion-item">
            <div class="accordion-header" onclick="toggleAccordion(${index})">
                ${item.question} <span>+</span>
            </div>
            <div class="accordion-content" id="content-${index}">
                <p>${item.answer}</p>
            </div>
        </div>
    `).join('');
}

function toggleAccordion(index) {
    const content = document.getElementById(`content-${index}`);
    content.classList.toggle('active');
}

// Lógica de Acessibilidade
function initAccessibility() {
    let fontSize = 100; // Porcentagem
    const body = document.body;

    document.getElementById('increase-font').addEventListener('click', () => {
        if (fontSize < 130) {
            fontSize += 10;
            body.style.fontSize = `${fontSize}%`;
        }
    });

    document.getElementById('decrease-font').addEventListener('click', () => {
        if (fontSize > 80) {
            fontSize -= 10;
            body.style.fontSize = `${fontSize}%`;
        }
    });

    document.getElementById('toggle-contrast').addEventListener('click', () => {
        body.classList.toggle('high-contrast');
    });
}