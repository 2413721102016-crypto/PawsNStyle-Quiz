// --------------------------------------------------------------------------
// 1. DATA DEFINITIONS (Paw-sonas, Questions, Mapping)
// --------------------------------------------------------------------------

const PAWSONA_KEYS = {
    CHILL: 'Chill',
    TREND: 'Trend',
    PLAYGROUND: 'Playground'
};

const pawsonaData = {
    [PAWSONA_KEYS.CHILL]: {
        title: "Chill Champ 🛋️",
        shortResult: "Your pet is a Chill Champ — cozy comforters and soft pastels suit them best.",
        description: "Comfort first — plush sweaters, pastel bows, and cozy beds are their love language.",
        colorClass: "result-color-chill",
        products: [
            { img: "C:\Users\Samanvitha Kapu\Downloads\You Matter Paw Hoodie — Comfrt.jpeg", name: "Cloud Snuggle Hoodie", price: "₹799" },
            { img: "https://pin.it/5Utze2D4j", name: "Pastel Bow Pack", price: "₹299" },
            { img: "https://github.com/2413721102016-crypto/PawsNStyle-Quiz/blob/main/assetsimages/Breathable%20Vesst.jpeg", name: "Fleece Lounge Blanket", price: "₹499" },
        ],
        bundle: "Cozy Combo: Hoodie + Bow Pack ₹999 (save ₹100)"
    },
    [PAWSONA_KEYS.TREND]: {
        title: "Trend Setter 👑",
        shortResult: "Your pet is a Trend Setter — designer trims, bows and luxe textures are their vibe.",
        description: "Elegance & flair — velvet textures, designer bows and limited drops suit their style.",
        colorClass: "result-color-trend",
        products: [
            { img: "C:\Users\Samanvitha Kapu\Downloads\Fancy Suit.jpeg", name: "Furry Royal Suit", price: "₹1999" },
            { img: "C:\Users\Samanvitha Kapu\Downloads\Trendy Bow.jpeg", name: "Crystal Bow Tie", price: "₹549" },
            { img: "C:\Users\Samanvitha Kapu\Downloads\Crowwn Cap.jpeg", name: "Limited Crown Cap", price: "₹799" },
        ],
        bundle: "Glam Trio — Jacket + Bow + Cap ₹2899 (exclusive)"
    },
    [PAWSONA_KEYS.PLAYGROUND]: {
        title: "Playground Pro 🏅",
        shortResult: "Your pet is a Playground Pro — sporty, breathable, and ready to zoom.",
        description: "Active, brave, and always ready — breathable sporty wear and reflective harnesses make their day.",
        colorClass: "result-color-playground",
        products: [
            { img: "https://github.com/2413721102016-crypto/PawsNStyle-Quiz/blob/main/assetsimages/Breathable%20Vesst.jpeg", name: "Breathable Sport Vest", price: "₹899" },
            { img: "C:\Users\Samanvitha Kapu\Downloads\Reflective harness.jpeg", name: "Reflective Harness", price: "₹699" },
            { img: "C:\Users\Samanvitha Kapu\Downloads\Treat Ball.jpeg", name: "Thooth Cleaning Ball Pack", price: "₹299" },
        ],
        bundle: "Active Pack — Vest + Harness ₹1490 (save ₹108)"
    }
};

const quizQuestions = [
    { id: 1, question: "Q1. What’s your pet’s weekend mood?", options: [
        { text: "Snooze marathon 😴", persona: PAWSONA_KEYS.CHILL, value: 'A' },
        { text: "Park zoomies 🏃", persona: PAWSONA_KEYS.PLAYGROUND, value: 'B' },
        { text: "Pose for photos 📸", persona: PAWSONA_KEYS.TREND, value: 'C' },
    ]},
    { id: 2, question: "Q2. Favorite accessory?", options: [
        { text: "Soft blanket 🛋️", persona: PAWSONA_KEYS.CHILL, value: 'A' },
        { text: "Reflective harness ⚡", persona: PAWSONA_KEYS.PLAYGROUND, value: 'B' },
        { text: "Shiny bow tie 🎀", persona: PAWSONA_KEYS.TREND, value: 'C' },
    ]},
    { id: 3, question: "Q3. Best outfit for a party?", options: [
        { text: "Cozy sweater 🧶", persona: PAWSONA_KEYS.CHILL, value: 'A' },
        { text: "Sporty vest 🏅", persona: PAWSONA_KEYS.PLAYGROUND, value: 'B' },
        { text: "Velvet jacket with crystals 👑", persona: PAWSONA_KEYS.TREND, value: 'C' },
    ]},
    { id: 4, question: "Q4. Walk style?", options: [
        { text: "Slow stroller stroll 🚶‍♀️", persona: PAWSONA_KEYS.CHILL, value: 'A' },
        { text: "Fast run & fetch 🎾", persona: PAWSONA_KEYS.PLAYGROUND, value: 'B' },
        { text: "Strut like it’s a runway 💃", persona: PAWSONA_KEYS.TREND, value: 'C' },
    ]},
    { id: 5, question: "Q5. Favorite treat?", options: [
        { text: "Soft biscuits 🍪", persona: PAWSONA_KEYS.CHILL, value: 'A' },
        { text: "Energy chews 🦴", persona: PAWSONA_KEYS.PLAYGROUND, value: 'B' },
        { text: "Fancy puppuccino ☕", persona: PAWSONA_KEYS.TREND, value: 'C' },
    ]},
    { id: 6, question: "Q6. Favorite color vibe?", options: [
        { text: "Pastels (blush, mint) 🌸", persona: PAWSONA_KEYS.CHILL, value: 'A' },
        { text: "Bright/high-contrast ⚪️", persona: PAWSONA_KEYS.PLAYGROUND, value: 'B' },
        { text: "Jewel tones (emerald, deep red) 💎", persona: PAWSONA_KEYS.TREND, value: 'C' },
    ]},
    { id: 7, question: "Q7. Dream photo caption?", options: [
        { text: "“Nap king/queen” 💤", persona: PAWSONA_KEYS.CHILL, value: 'A' },
        { text: "“Adventures all day” 🌲", persona: PAWSONA_KEYS.PLAYGROUND, value: 'B' },
        { text: "“Best dressed in town” ✨", persona: PAWSONA_KEYS.TREND, value: 'C' },
    ]},
];

// --------------------------------------------------------------------------
// 2. STATE MANAGEMENT
// --------------------------------------------------------------------------

let currentQuestionIndex = 0; // 0-based index
let answers = new Array(quizQuestions.length).fill(null); // Stores selected persona for each Q

const elements = {
    introCard: document.getElementById('intro-card'),
    quizCard: document.getElementById('quiz-card'),
    questionText: document.getElementById('question-text'),
    optionsContainer: document.getElementById('options-container'),
    progressText: document.getElementById('progress-text'),
    progressBar: document.getElementById('progress-bar-fill'),
    nextButton: document.getElementById('next-btn'),
    backButton: document.getElementById('back-btn'),
    resultCard: document.getElementById('result-card'),
    resultContent: document.getElementById('result-content'),
    emailInputGroup: document.getElementById('email-input-group'),
};

// --------------------------------------------------------------------------
// 3. CORE LOGIC (Navigation and Scoring)
// --------------------------------------------------------------------------

function startQuiz() {
    elements.introCard.classList.add('hidden');
    elements.quizCard.classList.remove('hidden');
    renderQuestion();
}

function handleAnswer(persona) {
    answers[currentQuestionIndex] = persona;
    updateNavigation(); // Enable the 'Next' button if disabled
    elements.nextButton.click(); // Auto-advance on selection for speed
}

function renderQuestion() {
    if (currentQuestionIndex >= quizQuestions.length) {
        showResults();
        return;
    }

    const question = quizQuestions[currentQuestionIndex];
    elements.questionText.textContent = question.question;
    elements.optionsContainer.innerHTML = '';
    
    // Create option buttons
    question.options.forEach(option => {
        const optionHTML = `
            <label class="quiz-option">
                <input 
                    type="radio" 
                    name="q${question.id}" 
                    value="${option.value}"
                    onclick="handleAnswer('${option.persona}')"
                    ${answers[currentQuestionIndex] === option.persona ? 'checked' : ''}
                >
                <span class="text-content">${option.text}</span>
            </label>
        `;
        elements.optionsContainer.insertAdjacentHTML('beforeend', optionHTML);
    });

    updateProgress();
    updateNavigation();
    
    // Scroll to top of quiz card on new question
    elements.quizCard.scrollIntoView({ behavior: 'smooth' });
}

function updateProgress() {
    const total = quizQuestions.length;
    const answeredCount = answers.filter(a => a !== null).length;
    const progress = Math.min(answeredCount / total, 1); // 0 to 1
    const percent = progress * 100;

    elements.progressText.textContent = `Q ${currentQuestionIndex + 1} / ${total}`;
    elements.progressBar.style.width = `${percent}%`;
}

function updateNavigation() {
    // Show/Hide Back button
    elements.backButton.classList.toggle('hidden', currentQuestionIndex === 0);

    // Update Next button text and visibility
    const isAnswered = answers[currentQuestionIndex] !== null;
    
    if (currentQuestionIndex === quizQuestions.length - 1) {
        elements.nextButton.textContent = 'Show My Paw-sona!';
    } else {
        elements.nextButton.textContent = 'Next Question →';
    }
    
    // Disable Next button if current question is unanswered (optional for auto-advance, but good safety)
    // elements.nextButton.disabled = !isAnswered; 
}

function navigate(direction) {
    if (direction === 'back') {
        currentQuestionIndex = Math.max(0, currentQuestionIndex - 1);
        renderQuestion();
    } else if (direction === 'next') {
        if (answers[currentQuestionIndex] === null) return; // Prevent advance if not answered
        
        currentQuestionIndex++;
        if (currentQuestionIndex < quizQuestions.length) {
            renderQuestion();
        } else {
            showResults();
        }
    }
}

function determineResult() {
    const tally = { [PAWSONA_KEYS.CHILL]: 0, [PAWSONA_KEYS.TREND]: 0, [PAWSONA_KEYS.PLAYGROUND]: 0 };
    
    // Tally scores
    answers.forEach(persona => {
        if (persona) tally[persona]++;
    });

    let maxScore = -1;
    let winners = [];
    
    // Find winners
    for (const persona in tally) {
        if (tally[persona] > maxScore) {
            maxScore = tally[persona];
            winners = [persona];
        } else if (tally[persona] === maxScore) {
            winners.push(persona);
        }
    }

    // Tie Rule: If multiple winners, use the persona from the LAST question (Q7)
    if (winners.length > 1) {
        const q7Answer = answers[quizQuestions.length - 1];
        if (q7Answer && winners.includes(q7Answer)) {
            return q7Answer;
        }
        // Fallback: If Q7 was not the tie, just pick the first winner
        return winners[0];
    }
    
    return winners[0];
}

function showResults() {
    elements.quizCard.classList.add('hidden');
    elements.resultCard.classList.remove('hidden');
    
    const finalPersonaKey = determineResult();
    const result = pawsonaData[finalPersonaKey];
    
    // 1. Result Headline and Description
    let html = `
        <h2 class="text-3xl font-extrabold text-center mb-4">
            🎉 Meet your pet’s Paw-sona: ${result.title.toUpperCase()}
        </h2>
        <p class="text-center text-lg mb-8 font-semibold">${result.description}</p>
        
        <div class="p-4 rounded-xl text-center font-bold text-white mb-8 ${result.colorClass}">
            ${result.shortResult}
        </div>
        
        <h3 class="text-xl font-bold mb-4 text-center">Curated Picks Just For You:</h3>
        
        <div class="grid grid-cols-3 gap-4 mb-4">
            ${result.products.map(p => `
                <div class="product-thumb">
                    <img src="assets/images/${p.img}" alt="${p.name} - product image">
                    <div class="product-name text-sm font-semibold">${p.name}</div>
                    <div class="product-price text-xs">${p.price}</div>
                    <button class="text-xs font-bold text-white bg-coral-button mt-1 py-1 w-full rounded-full">Shop this look</button>
                </div>
            `).join('')}
        </div>
        
        <div class="bundle-suggestion text-center">
            ${result.bundle}
        </div>

        <h3 class="text-center text-lg font-bold mt-8 mb-4">Don't lose your style!</h3>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-3 mb-6">
            <a href="#" class="btn-primary flex items-center justify-center">Shop These Picks</a>
            <button id="email-me-btn" class="btn-primary">Email Me This Look & 10% Off</button>
            <button class="btn-secondary">Share Paw-sona</button>
        </div>

        <p class="text-center text-sm text-gray-500 mt-6">Not convinced? <button onclick="resetQuiz()" class="text-coral-header font-semibold">Retake quiz</button> or explore more looks.</p>
    `;

    elements.resultContent.innerHTML = html;
    
    // Attach email button listener
    document.getElementById('email-me-btn').addEventListener('click', showEmailCapture);
    
    // Scroll to the result
    elements.resultCard.scrollIntoView({ behavior: 'smooth' });
}

function showEmailCapture() {
    const btn = document.getElementById('email-me-btn');
    btn.classList.add('hidden');
    elements.emailInputGroup.classList.remove('hidden');
}

function claimDiscount() {
    const emailInput = document.getElementById('email-input').value;
    const messageContainer = document.getElementById('email-message');
    
    if (!emailInput || !emailInput.includes('@')) {
        messageContainer.textContent = "Please enter a valid email address.";
        messageContainer.classList.remove('text-green-500');
        messageContainer.classList.add('text-red-500');
        return;
    }

    // Simulate backend sending/storage
    localStorage.setItem('pawsona_email', emailInput); 
    
    elements.emailInputGroup.innerHTML = `
        <div class="p-4 bg-green-100 text-green-700 font-bold rounded-xl text-center">
            Sent! 🎉 Check your inbox — your 10% code: PAWS10 (valid 7 days).
        </div>
    `;
}

function resetQuiz() {
    currentQuestionIndex = 0;
    answers = new Array(quizQuestions.length).fill(null);
    elements.resultCard.classList.add('hidden');
    elements.introCard.classList.remove('hidden');
    elements.emailInputGroup.innerHTML = `
        <div id="email-message" class="text-sm text-red-500 mb-2"></div>
        <input type="email" id="email-input" placeholder="Enter your email" class="p-3 border rounded-lg w-full mb-3">
        <button onclick="claimDiscount()" class="btn-primary">Send & Claim 10%</button>
    `;
    elements.emailInputGroup.classList.add('hidden');
    elements.introCard.scrollIntoView({ behavior: 'smooth' });
}

// --------------------------------------------------------------------------
// 4. INITIALIZATION
// --------------------------------------------------------------------------

document.addEventListener('DOMContentLoaded', () => {
    // Attach listeners for intro and navigation
    document.getElementById('start-quiz-btn').addEventListener('click', startQuiz);
    elements.nextButton.addEventListener('click', () => navigate('next'));
    elements.backButton.addEventListener('click', () => navigate('back'));
    
    // Initialize the quiz view (Show intro, hide everything else)
    elements.quizCard.classList.add('hidden');
    elements.resultCard.classList.add('hidden');
    elements.introCard.classList.remove('hidden');

});





