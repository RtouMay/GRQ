// تعریف ۱۰ شخصیت گیمینگ با نام، مسیر تصویر و تحلیل کوتاه
const gameCharacters = {
    "کریتوس": {
        image: "aks/1.jpg",
        analysis: "شما شبیه کریتوس هستید: جنگجویی بی‌باک و مصمم که چالش‌ها را با قدرت و اراده بالا پشت سر می‌گذارد. در نبردها رهبری طبیعی دارید و هرگز از روبرو شدن با دشمنان سرسخت نمی‌ترسید. قدرت و استقامت از ویژگی‌های بارز شماست و همیشه به دنبال راهی برای رسیدن به اهدافتان هستید، حتی اگر مسیر پر از موانع باشد."
    },
    "اساسین": {
        image: "aks/2.jpg",
        analysis: "شما روحیه‌ی یک اساسین را دارید: چابک، مخفی‌کار و استراتژیست. ترجیح می‌دهید دشمنان را از سایه‌ها غافلگیر کنید و به جای نبردهای مستقیم، از هوش و تاکتیک استفاده کنید. آزادی عمل و توانایی حرکت در محیط‌های پیچیده برایتان بسیار مهم است. شما همواره به دنبال عدالت هستید و برای آن مبارزه می‌کنید."
    },
    "لارا کرافت": {
        image: "aks/3.jpg",
        analysis: "شما مانند لارا کرافت، یک کاوشگر واقعی هستید. کنجکاوی، شجاعت و توانایی حل پازل‌ها از ویژگی‌های بارز شماست. عاشق ماجراجویی، کشف مکان‌های ناشناخته و رمزگشایی از اسرار باستانی هستید. هیچ مانعی شما را از دستیابی به اهدافتان باز نمی‌دارد و همیشه آماده رویارویی با ناشناخته‌ها هستید."
    },
    "مستر چیف": {
        image: "aks/4.jpg",
        analysis: "شما شبیه مستر چیف هستید: یک سرباز حرفه‌ای، وفادار و خونسرد. در موقعیت‌های پرفشار آرامش خود را حفظ می‌کنید و توانایی بالایی در کار تیمی و اجرای دقیق ماموریت‌ها دارید. محافظت از هم‌تیمی‌ها و انجام وظیفه، اولویت اصلی شماست. شما در نبردها یک نیروی غیرقابل توقف هستید که به خوبی استراتژی را با اکشن ترکیب می‌کند."
    },
    "گرالت": {
        image: "aks/5.jpg",
        analysis: "شما روحیه‌ی گرالت را دارید: واقع‌بین، عمل‌گرا و گاهی بدبین، اما در اعماق وجودتان عادل و وفادار. شما برای رسیدن به حقیقت و انجام درست کارها، حتی در شرایط سخت، تلاش می‌کنید. به مهارت‌های فردی خود اعتماد دارید و ترجیح می‌دهید مشکلات را با منطق و تجربه حل کنید تا احساسات. شما مستقل و خودکفا هستید."
    },
    "آرتور مورگان": {
        image: "aks/6.jpg",
        analysis: "شما شبیه آرتور مورگان هستید: آزادی‌خواه، وفادار به دوستان و دارای یک وجدان قوی. شما به ارزش‌های خود پایبند هستید، حتی در دنیایی که این ارزش‌ها در حال از بین رفتن هستند. به دنبال ماجراجویی هستید اما اهمیت روابط انسانی و وفاداری به دوستانتان را درک می‌کنید. گاهی اوقات میان انتخاب راه درست و راه آسان درگیر می‌شوید."
    },
    "زلدا": {
        image: "aks/7.jpg",
        analysis: "شما مانند زلدا، باهوش، دلسوز و دارای توانایی‌های رهبری بالقوه هستید. شما به دنبال دانش و خرد هستید و از قدرت‌های خود برای محافظت از دیگران و ایجاد صلح استفاده می‌کنید. شما ممکن است در ابتدا کمی آرام و متفکر به نظر برسید، اما قدرت درونی و اراده شما برای مقابله با تاریکی بی‌نظیر است."
    },
    "جوئل": {
        image: "aks/8.jpg",
        analysis: "شما شبیه جوئل هستید: محافظه‌کار، عمل‌گرا و بسیار وفادار به کسانی که دوستشان دارید. شما برای بقا و محافظت از عزیزانتان هر کاری می‌کنید و در دنیایی سخت، قوی و محکم باقی می‌مانید. شاید در ظاهر خشن و واقع‌بین به نظر برسید، اما در عمق وجودتان قلبی مهربان و فداکار دارید و به کسانی که برایتان مهم هستند، اهمیت می‌دهید."
    },
    "ماریو": {
        image: "aks/9.jpg",
        analysis: "شما روحیه‌ی ماریو را دارید: شاد، پرانرژی و همیشه آماده کمک به دیگران. شما با چالش‌ها با خوش‌بینی و علاقه روبرو می‌شوید و هرگز تسلیم نمی‌شوید. توانایی‌های مختلفی دارید و می‌توانید خود را با موقعیت‌های گوناگون وفق دهید و همیشه به دنبال راهی برای شاد کردن خود و اطرافیانتان هستید. شما نماد امید و پشتکار هستید."
    },
    "دختر سایبرپانک": { // شخصیتی شبیه به V یا پانام از سایبرپانک
        image: "aks/10.jpg",
        analysis: "شما شبیه یک شخصیت از دنیای سایبرپانک هستید: مستقل، مقاوم و مدرن. شما در دنیایی پیچیده و تکنولوژیک به دنبال جایگاه خود هستید و از آزادی شخصی خود دفاع می‌کنید. توانایی بالایی در وفق دادن خود با تغییرات دارید و از چالش‌های جدید استقبال می‌کنید. شما برای انتخاب‌های خود زندگی می‌کنید و به دنبال هیجان و ماجراجویی‌های شهری هستید."
    }
};

// ۱۰ سوال با امتیازدهی اصلاح‌شده به ۱۰ شخصیت
const quizQuestions = [
    {
        question: "اگر می‌توانستید یک توانایی خاص در بازی‌ها داشته باشید، کدام را انتخاب می‌کردید؟",
        options: [
            { text: "قدرت بدنی فوق‌العاده و مقاومت بالا برای نبردها.", points: { "کریتوس": 3, "مستر چیف": 1 } },
            { text: "نامرئی شدن و حرکت بی‌صدا برای نفوذ به مکان‌های ممنوعه.", points: { "اساسین": 3, "لارا کرافت": 1 } },
            { text: "توانایی کشف و حل معماهای پیچیده و باستانی.", points: { "لارا کرافت": 3, "زلدا": 2 } },
            { text: "مهارت‌های استثنایی با سلاح‌های گرم و تاکتیک‌های نظامی.", points: { "مستر چیف": 3, "جوئل": 2 } }
        ]
    },
    {
        question: "هدف اصلی شما در یک دنیای بازی چیست؟",
        options: [
            { text: "نجات جهان از شرارت و تهدیدهای بزرگ.", points: { "کریتوس": 2, "زلدا": 2, "مستر چیف": 2 } },
            { text: "کشف تمام رازها، مناطق پنهان و گنجینه‌ها.", points: { "لارا کرافت": 3, "گرالت": 1 } },
            { text: "زندگی به سبک خود و آزادی کامل از هر نوع محدودیت.", points: { "آرتور مورگان": 3, "دختر سایبرپانک": 2 } },
            { text: "کمک به مردم عادی، انجام وظایف مستقل و کسب درآمد حلال.", points: { "گرالت": 3, "جوئل": 1 } }
        ]
    },
    {
        question: "در یک موقعیت خطرناک ناگهانی، رویکرد شما چیست؟",
        options: [
            { text: "حمله مستقیم و از بین بردن تهدید با تمام قوا.", points: { "کریتوس": 3, "مستر چیف": 2 } },
            { text: "پیدا کردن راهی مخفی برای عبور، یا غافلگیر کردن دشمن.", points: { "اساسین": 3, "لارا کرافت": 1 } },
            { text: "تحلیل سریع وضعیت و برنامه‌ریزی یک تاکتیک دفاعی/حمله هوشمندانه.", points: { "زلدا": 2, "گرالت": 2 } },
            { text: "اولویت دادن به محافظت از همراهان و تلاش برای بقای گروه.", points: { "جوئل": 3, "آرتور مورگان": 2 } }
        ]
    },
    {
        question: "کدام نوع محیط بازی برای شما جذاب‌تر است؟",
        options: [
            { text: "خرابه‌های باستانی، معابد فراموش شده و دخمه‌های پر از رمز و راز.", points: { "لارا کرافت": 3, "زلدا": 2 } },
            { text: "شهرهای بزرگ و پر زرق و برق آینده‌نگر با تکنولوژی بالا.", points: { "دختر سایبرپانک": 3, "اساسین": 1 } },
            { text: "مناطق وسیع و طبیعی (جنگل، کوهستان، صحرا) با حیوانات وحشی.", points: { "آرتور مورگان": 3, "گرالت": 2 } },
            { text: "میدان‌های نبرد وسیع، پایگاه‌های نظامی و مناطق پر از اکشن.", points: { "کریتوس": 2, "مستر چیف": 3 } }
        ]
    },
    {
        question: "سبک زندگی ایده‌آل شما در یک بازی Open World چیست؟",
        options: [
            { text: "یک زندگی ماجراجویانه و پر از اکتشاف بی‌پایان.", points: { "لارا کرافت": 3, "ماریو": 2 } },
            { text: "فردی آزاد و مستقل که تابع هیچ قانون یا گروهی نیست.", points: { "آرتور مورگان": 3, "گرالت": 2 } },
            { text: "بخشی از یک سازمان بزرگ که برای یک هدف والایی می‌جنگد.", points: { "مستر چیف": 3, "اساسین": 2 } },
            { text: "فردی که به دنبال صلح، کمک به مردم و برقراری نظم است.", points: { "زلدا": 3, "جوئل": 2 } }
        ]
    },
    {
        question: "بیشتر از همه چه چیزی شما را در بازی‌ها به هیجان می‌آورد؟",
        options: [
            { text: "شکست دادن یک باس سرسخت یا دشمن قدرتمند در نبردی حماسی.", points: { "کریتوس": 3, "مستر چیف": 2 } },
            { text: "کشف یک راز بزرگ، یا یافتن یک گنجینه مخفی و باارزش.", points: { "لارا کرافت": 3, "اساسین": 2 } },
            { text: "انجام یک ماموریت دشوار با برنامه‌ریزی و اجرای دقیق.", points: { "اساسین": 3, "گرالت": 1 } },
            { text: "کمک به یک شخصیت نیازمند و دیدن تأثیر مثبت اقداماتم.", points: { "جوئل": 3, "زلدا": 2 } }
        ]
    },
    {
        question: "در یک انتخاب اخلاقی دشوار در بازی، اولویت شما چیست؟",
        options: [
            { text: "انجام کاری که به بهترین نتیجه برای خودم و کسانی که دوست دارم منجر شود، حتی اگر سخت باشد.", points: { "جوئل": 3, "گرالت": 2 } },
            { text: "پایبندی به اصول و عدالت، حتی اگر هزینه داشته باشد و همه آن را درک نکنند.", points: { "اساسین": 3, "آرتور مورگان": 2 } },
            { text: "محافظت از بی‌گناهان و ضعیفان، بدون توجه به منافع شخصی.", points: { "زلدا": 3, "مستر چیف": 1 } },
            { text: "انتخاب راهی که بیشترین آزادی، هیجان یا سود را به من می‌دهد.", points: { "دختر سایبرپانک": 3, "ماریو": 2 } }
        ]
    },
    {
        question: "بهترین راه برای حل یک مشکل پیچیده در بازی چیست؟",
        options: [
            { text: "استفاده از زور، قدرت و مهارت‌های رزمی برای از بین بردن مانع.", points: { "کریتوس": 3 } },
            { text: "فکر کردن و پیدا کردن یک راه حل خلاقانه، میانبر یا پنهانی.", points: { "اساسین": 2, "لارا کرافت": 2, "زلدا": 2 } },
            { text: "جستجو برای اطلاعات، سرنخ‌ها و بررسی دقیق محیط.", points: { "لارا کرافت": 2, "گرالت": 2 } },
            { text: "مشورت با هم‌تیمی‌ها و همکاری برای یافتن بهترین راه حل.", points: { "مستر چیف": 2, "جوئل": 2, "ماریو": 2 } }
        ]
    },
    {
        question: "چه نوع ارتباطی با دیگران در بازی‌ها را ترجیح می‌دهید؟",
        options: [
            { text: "منزوی و مستقل عمل می‌کنم، فقط به خودم و مهارت‌هایم اعتماد دارم.", points: { "گرالت": 3, "کریتوس": 1 } },
            { text: "بخشی از یک تیم یا گروه قدرتمند هستم که اهداف مشترکی داریم.", points: { "مستر چیف": 3, "جوئل": 2 } },
            { text: "با افراد مختلف ارتباط برقرار می‌کنم و به آنها کمک می‌کنم، یک حلال مشکلات هستم.", points: { "آرتور مورگان": 3, "ماریو": 2 } },
            { text: "به دنبال شبکه‌سازی و اطلاعات برای پیشرفت اهداف شخصی هستم.", points: { "دختر سایبرپانک": 3, "اساسین": 1 } }
        ]
    },
    {
        question: "بیشتر کدام جنبه از یک ماجراجویی شما را جذب می‌کند؟",
        options: [
            { text: "نبردهای حماسی، لحظات اوج اکشن و شکست دادن دشمنان قدرتمند.", points: { "کریتوس": 3, "مستر چیف": 2 } },
            { text: "حل پازل‌ها، کشف مکان‌های پنهان و رمزگشایی از داستان‌ها.", points: { "لارا کرافت": 3, "زلدا": 2 } },
            { text: "غرق شدن در داستان، تعامل با شخصیت‌ها و تجربه یک روایت عمیق.", points: { "آرتور مورگان": 3, "گرالت": 2 } },
            { text: "آزادی کامل برای انجام هر کاری که می‌خواهم و تجربه تمام جنبه‌های بازی.", points: { "دختر سایبرپانک": 3, "ماریو": 2 } }
        ]
    }
];


let currentQuestionIndex = 0;
let userScores = {};
for (const char in gameCharacters) {
    userScores[char] = 0;
}

const quizContainer = document.getElementById('quiz-container');
const nextButton = document.getElementById('next-button');
const submitButton = document.getElementById('submit-button');
const resultContainer = document.getElementById('result-container');
const characterImageContainer = document.getElementById('character-image-container');
const finalCharacterName = document.getElementById('final-character-name');
const finalCharacterAnalysis = document.getElementById('final-character-analysis');

function displayQuestion() {
    if (currentQuestionIndex < quizQuestions.length) {
        const questionData = quizQuestions[currentQuestionIndex];
        quizContainer.innerHTML = `
            <div class="question-card fade-in">
                <p class="question-text">${currentQuestionIndex + 1}. ${questionData.question}</p>
                <ul class="options-list">
                    ${questionData.options.map((option, index) => `
                        <li>
                            <label>
                                <input type="radio" name="question${currentQuestionIndex}" value="${index}" required>
                                <span>${option.text}</span>
                            </label>
                        </li>
                    `).join('')}
                </ul>
            </div>
        `;
        // Hide result container when a new question is displayed
        resultContainer.style.display = 'none';

        // Show/Hide buttons based on current question
        if (currentQuestionIndex === quizQuestions.length - 1) {
            nextButton.style.display = 'none';
            submitButton.style.display = 'block';
        } else {
            nextButton.style.display = 'block';
            submitButton.style.display = 'none';
        }
    } else {
        // This case should ideally not be reached if button logic is correct
        showResult();
    }
}

function selectAnswer() {
    const selectedOption = document.querySelector(`input[name="question${currentQuestionIndex}"]:checked`);
    if (selectedOption) {
        const optionIndex = parseInt(selectedOption.value);
        const selectedOptionData = quizQuestions[currentQuestionIndex].options[optionIndex];

        // Add points to userScores
        for (const charName in selectedOptionData.points) {
            if (gameCharacters.hasOwnProperty(charName)) {
                userScores[charName] += selectedOptionData.points[charName];
            }
        }
        return true;
    }
    return false;
}

function showResult() {
    quizContainer.style.display = 'none';
    nextButton.style.display = 'none';
    submitButton.style.display = 'none';
    resultContainer.style.display = 'block'; // Make result container visible

    let maxScore = -1;
    let finalCharacter = '';
    let tieBreakerCharacters = []; // For handling ties

    // Find max score
    for (const charName in userScores) {
        if (userScores[charName] > maxScore) {
            maxScore = userScores[charName];
            finalCharacter = charName;
            tieBreakerCharacters = [charName]; // Reset tie-breaker list
        } else if (userScores[charName] === maxScore) {
            tieBreakerCharacters.push(charName); // Add to tie-breaker list
        }
    }

    // If there's a tie, choose randomly from the tied characters
    if (tieBreakerCharacters.length > 1) {
        const randomIndex = Math.floor(Math.random() * tieBreakerCharacters.length);
        finalCharacter = tieBreakerCharacters[randomIndex];
    }
    
    const charInfo = gameCharacters[finalCharacter];
    characterImageContainer.innerHTML = `<img src="${charInfo.image}" alt="${finalCharacter}" class="fade-in-img">`;
    finalCharacterName.textContent = `شخصیت گیمینگ شما: ${finalCharacter}`;
    finalCharacterAnalysis.textContent = `تحلیل: ${charInfo.analysis}`;

    // Add animation class to result container
    resultContainer.classList.add('fade-in');
}

nextButton.addEventListener('click', () => {
    if (selectAnswer()) {
        currentQuestionIndex++;
        displayQuestion();
    } else {
        alert("لطفاً یک گزینه را انتخاب کنید!");
    }
});

submitButton.addEventListener('click', () => {
    if (selectAnswer()) { // Ensure the last question is answered
        showResult();
    } else {
        alert("لطفاً یک گزینه را انتخاب کنید!");
    }
});

// Initial display of the first question
displayQuestion();