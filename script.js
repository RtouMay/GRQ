// Function to convert English/Arabic numbers to Farsi
function toFarsi(number) {
    const farsi = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
    return number.toString().replace(/\d/g, d => farsi[d]);
}

// تعریف ۱۰ شخصیت گیمینگ با نام، مسیر تصویر، تحلیل کوتاه، ویژگی‌های خوب، بد و آمار
const gameCharacters = {
    "کریتوس": {
        image: "aks/1.png", 
        analysis: "شما شبیه کریتوس هستید: جنگجویی بی‌باک و مصمم که چالش‌ها را با قدرت و اراده بالا پشت سر می‌گذارد. در نبردها رهبری طبیعی دارید و هرگز از روبرو شدن با دشمنان سرسخت نمی‌ترسید. قدرت و استقامت از ویژگی‌های بارز شماست و همیشه به دنبال راهی برای رسیدن به اهدافتان هستید، حتی اگر مسیر پر از موانع باشد.",
        goodTraits: ["قدرت و استقامت بالا", "اراده و عزم راسخ", "جنگجوی بی‌باک", "رهبری طبیعی در نبردها", "عدم ترس از چالش‌ها"],
        badTraits: ["خشم کنترل نشده", "بی‌رحمی در برخورد با دشمنان", "میل به انتقام", "تنهایی و انزوا", "گذشته تاریک و سنگین"],
        stats: { power: 90, agility: 40, intelligence: 50, loyalty: 60, adventure: 70 }
    },
    "اساسین": {
        image: "aks/2.png", 
        analysis: "شما روحیه‌ی یک اساسین را دارید: چابک، مخفی‌کار و استراتژیست. ترجیح می‌دهید دشمنان را از سایه‌ها غافلگیر کنید و به جای نبردهای مستقیم، از هوش و تاکتیک استفاده کنید. آزادی عمل و توانایی حرکت در محیط‌های پیچیده برایتان بسیار مهم است. شما همواره به دنبال عدالت هستید و برای آن مبارزه می‌کنید.",
        goodTraits: ["چابکی و مهارت بالا", "هوش و استراتژی", "مخفی‌کاری عالی", "تعهد به عدالت", "آزادی‌خواه"],
        badTraits: ["اعتماد کم به دیگران", "تمایل به تنها کار کردن", "رفتار مرموز", "پایبندی شدید به اصول (گاهی افراطی)", "سخت‌گیر در قضاوت"],
        stats: { power: 60, agility: 90, intelligence: 80, loyalty: 70, adventure: 80 }
    },
    "لارا کرافت": {
        image: "aks/3.png", 
        analysis: "شما مانند لارا کرافت، یک کاوشگر واقعی هستید. کنجکاوی، شجاعت و توانایی حل پازل‌ها از ویژگی‌های بارز شماست. عاشق ماجراجویی، کشف مکان‌های ناشناخته و رمزگشایی از اسرار باستانی هستید. هیچ مانعی شما را از دستیابی به اهدافتان باز نمی‌دارد و همیشه آماده رویارویی با ناشناخته‌ها هستید.",
        goodTraits: ["کنجکاوی بی‌پایان", "شجاعت و جسارت", "توانایی حل پازل", "عاشق ماجراجویی", "مقاومت در برابر سختی‌ها"],
        badTraits: ["عجول در کشف", "بی‌احتیاطی در موقعیت‌های خطرناک", "وابستگی به هیجان", "گاهی تک‌رو", "ممکن است خود را به خطر بیندازد"],
        stats: { power: 70, agility: 85, intelligence: 85, loyalty: 50, adventure: 95 }
    },
    "مستر چیف": {
        image: "aks/4.png", 
        analysis: "شما شبیه مستر چیف هستید: یک سرباز حرفه‌ای، وفادار و خونسرد. در موقعیت‌های پرفشار آرامش خود را حفظ می‌کنید و توانایی بالایی در کار تیمی و اجرای دقیق ماموریت‌ها دارید. محافظت از هم‌تیمی‌ها و انجام وظیفه، اولویت اصلی شماست. شما در نبردها یک نیروی غیرقابل توقف هستید که به خوبی استراتژی را با اکشن ترکیب می‌کند.",
        goodTraits: ["خونسردی تحت فشار", "وفاداری بالا", "مهارت نظامی و تاکتیک‌پذیری", "توانایی کار تیمی", "حس وظیفه‌شناسی قوی"],
        badTraits: ["کم‌حرف و درون‌گرا", "ممکن است احساساتش را بروز ندهد", "تمرکز بیش از حد بر ماموریت", "ممکن است از خود غافل شود", "وابستگی به پروتکل و دستورالعمل"],
        stats: { power: 95, agility: 70, intelligence: 70, loyalty: 90, adventure: 80 }
    },
    "گرالت": {
        image: "aks/5.png", 
        analysis: "شما روحیه‌ی گرالت را دارید: واقع‌بین، عمل‌گرا و گاهی بدبین، اما در اعماق وجودتان عادل و وفادار. شما برای رسیدن به حقیقت و انجام درست کارها، حتی در شرایط سخت، تلاش می‌کنید. به مهارت‌های فردی خود اعتماد دارید و ترجیح می‌دهید مشکلات را با منطق و تجربه حل کنید تا احساسات. شما مستقل و خودکفا هستید.",
        goodTraits: ["واقع‌بینی و منطق", "عمل‌گرایی و کارایی", "عدالت‌جو و وفادار", "مستقل و خودکفا", "مهارت در حل مشکلات با تجربه"],
        badTraits: ["بدبینی و شکاکیت", "انزوا و دوری از اجتماع", "کم‌حرفی", "گاهی اوقات بی‌تفاوت به نظر می‌رسد", "ممکن است احساسات را کنار بگذارد"],
        stats: { power: 80, agility: 65, intelligence: 90, loyalty: 85, adventure: 60 }
    },
    "آرتور مورگان": {
        image: "aks/6.png", 
        analysis: "شما شبیه آرتور مورگان هستید: آزادی‌خواه، وفادار به دوستان و دارای یک وجدان قوی. شما به ارزش‌های خود پایبند هستید، حتی در دنیایی که این ارزش‌ها در حال از بین رفتن هستند. به دنبال ماجراجویی هستید اما اهمیت روابط انسانی و وفاداری به دوستانتان را درک می‌کنید. گاهی اوقات میان انتخاب راه درست و راه آسان درگیر می‌شوید.",
        goodTraits: ["وفاداری به دوستان", "وجدان قوی", "آزادی‌خواه", "درک اهمیت روابط انسانی", "شجاعت در مواجهه با چالش‌ها"],
        badTraits: ["ممکن است درگیر گذشته شود", "تضاد درونی بین خیر و شر", "رفتارهای قانون‌شکن", "گاهی اوقات بدبین", "ممکن است به سمت انزوا کشیده شود"],
        stats: { power: 85, agility: 75, intelligence: 60, loyalty: 95, adventure: 75 }
    },
    "زلدا": {
        image: "aks/7.png", 
        analysis: "شما مانند زلدا، باهوش، دلسوز و دارای توانایی‌های رهبری بالقوه هستید. شما به دنبال دانش و خرد هستید و از قدرت‌های خود برای محافظت از دیگران و ایجاد صلح استفاده می‌کنید. شما ممکن است در ابتدا کمی آرام و متفکر به نظر برسید، اما قدرت درونی و اراده شما برای مقابله با تاریکی بی‌نظیر است.",
        goodTraits: ["هوش و خرد", "دلسوزی و همدلی", "توانایی رهبری", "تلاش برای صلح", "اراده قوی در برابر تاریکی"],
        badTraits: ["ممکن است بیش از حد متفکر باشد", "گاهی اوقات مردد", "بروز ندادن کامل احساسات", "ممکن است خود را فدا کند", "فشار مسئولیت‌پذیری زیاد"],
        stats: { power: 60, agility: 50, intelligence: 95, loyalty: 80, adventure: 70 }
    },
    "جوئل": {
        image: "aks/8.png", 
        analysis: "شما شبیه جوئل هستید: محافظه‌کار، عمل‌گرا و بسیار وفادار به کسانی که دوستشان دارید. شما برای بقا و محافظت از عزیزانتان هر کاری می‌کنید و در دنیایی سخت، قوی و محکم باقی می‌مانید. شاید در ظاهر خشن و واقع‌بین به نظر برسید، اما در عمق وجودتان قلبی مهربان و فداکار دارید و به کسانی که برایتان مهم هستند، اهمیت می‌دهید.",
        goodTraits: ["وفاداری بی‌حد و حصر", "محافظه‌کار و عمل‌گرا", "قوی و محکم در برابر سختی‌ها", "فداکار و مهربان (دروناً)", "تعهد به بقا و محافظت"],
        badTraits: ["خشن و بی‌رحم در ظاهر", "عدم اعتماد به غریبه‌ها", "سخت‌گیری در ارتباطات", "تصمیمات بر اساس احساسات (گاهی)", "انزواطلبی در شرایط خاص"],
        stats: { power: 80, agility: 60, intelligence: 70, loyalty: 95, adventure: 65 }
    },
    "ماریو": {
        image: "aks/9.png", 
        analysis: "شما روحیه‌ی ماریو را دارید: شاد، پرانرژی و همیشه آماده کمک به دیگران. شما با چالش‌ها با خوش‌بینی و علاقه روبرو می‌شوید و هرگز تسلیم نمی‌شوید. توانایی‌های مختلفی دارید و می‌توانید خود را با موقعیت‌های گوناگون وفق دهید و همیشه به دنبال راهی برای شاد کردن خود و اطرافیانتان هستید. شما نماد امید و پشتکار هستید.",
        goodTraits: ["شادی و خوش‌بینی", "انرژی و پشتکار بالا", "همیشه آماده کمک", "توانایی وفق دادن خود با موقعیت‌ها", "نماد امید"],
        badTraits: ["سادگی بیش از حد", "گاهی اوقات بی‌دقت", "ممکن است در موقعیت‌های جدی، بیش از حد شوخ باشد", "فقدان جدیت در برخی مواقع", "ممکن است درگیر مشکلات دیگران شود"],
        stats: { power: 50, agility: 75, intelligence: 60, loyalty: 85, adventure: 90 }
    },
    "دختر سایبرپانک": { // شخصیتی شبیه به V یا پانام از سایبرپانک
        image: "aks/10.png", 
        analysis: "شما شبیه یک شخصیت از دنیای سایبرپانک هستید: مستقل، مقاوم و مدرن. شما در دنیایی پیچیده و تکنولوژیک به دنبال جایگاه خود هستید و از آزادی شخصی خود دفاع می‌کنید. توانایی بالایی در وفق دادن خود با تغییرات دارید و از چالش‌های جدید استقبال می‌کنید. شما برای انتخاب‌های خود زندگی می‌کنید و به دنبال هیجان و ماجراجویی‌های شهری هستید.",
        goodTraits: ["استقلال و خودکفایی", "مقاومت بالا در برابر ناملایمات", "مدرن و پیشرو", "توانایی بالای سازگاری", "جستجوگر هیجان و ماجراجویی"],
        badTraits: ["عدم پایبندی به قوانین", "رفتار سرکش", "ممکن است ریسک‌پذیر باشد", "تمایل به انزوا در محیط شهری", "گاهی اوقات بی‌تفاوت به مسائل اخلاقی"],
        stats: { power: 75, agility: 80, intelligence: 85, loyalty: 65, adventure: 90 }
    }
};

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

const gameRecommendations = {
    "کریتوس": [
        { title: "The Witcher 3: Wild Hunt", image: "https://via.placeholder.com/150/ff3333/1c1c1c?text=The+Witcher+3", metascore: 93, link: "#" },
        { title: "Red Dead Redemption 2", image: "https://via.placeholder.com/150/ff3333/1c1c1c?text=RDR2", metascore: 97, link: "#" },
        { title: "Far Cry 5", image: "https://via.placeholder.com/150/ff3333/1c1c1c?text=Far+Cry+5", metascore: 81, link: "#" },
        { title: "Cyberpunk 2077", image: "https://via.placeholder.com/150/ff3333/1c1c1c?text=Cyberpunk+2077", metascore: 86, link: "#" }
    ],
    "اساسین": [
        { title: "Star Wars Outlaws", image: "https://via.placeholder.com/150/ff3333/1c1c1c?text=Star+Wars", metascore: 85, link: "#" },
        { title: "Borderlands 4", image: "https://via.placeholder.com/150/ff3333/1c1c1c?text=Borderlands+4", metascore: 88, link: "#" },
        { title: "Far Cry 5", image: "https://via.placeholder.com/150/ff3333/1c1c1c?text=Far+Cry+5", metascore: 81, link: "#" },
        { title: "Hitman 3", image: "https://via.placeholder.com/150/ff3333/1c1c1c?text=Hitman+3", metascore: 87, link: "#" }
    ],
    "لارا کرافت": [
        { title: "Hogwarts Legacy", image: "https://via.placeholder.com/150/ff3333/1c1c1c?text=Hogwarts+Legacy", metascore: 84, link: "#" },
        { title: "Star Wars Outlaws", image: "https://via.placeholder.com/150/ff3333/1c1c1c?text=Star+Wars", metascore: 85, link: "#" },
        { title: "Lies of P: Overture", image: "https://via.placeholder.com/150/ff3333/1c1c1c?text=Lies+of+P", metascore: 80, link: "#" },
        { title: "Elden Ring", image: "https://via.placeholder.com/150/ff3333/1c1c1c?text=Elden+Ring", metascore: 96, link: "#" }
    ],
    "مستر چیف": [
        { title: "Borderlands 4", image: "https://via.placeholder.com/150/ff3333/1c1c1c?text=Borderlands+4", metascore: 88, link: "#" },
        { title: "WWE 2K25", image: "https://via.placeholder.com/150/ff3333/1c1c1c?text=WWE+2K25", metascore: 78, link: "#" },
        { title: "Far Cry 5", image: "https://via.placeholder.com/150/ff3333/1c1c1c?text=Far+Cry+5", metascore: 81, link: "#" },
        { title: "Halo Infinite", image: "https://via.placeholder.com/150/ff3333/1c1c1c?text=Halo+Infinite", metascore: 87, link: "#" }
    ],
    "گرالت": [
        { title: "The Witcher 3: Wild Hunt", image: "https://via.placeholder.com/150/ff3333/1c1c1c?text=The+Witcher+3", metascore: 93, link: "#" },
        { title: "Red Dead Redemption 2", image: "https://via.placeholder.com/150/ff3333/1c1c1c?text=RDR2", metascore: 97, link: "#" },
        { title: "Hogwarts Legacy", image: "https://via.placeholder.com/150/ff3333/1c1c1c?text=Hogwarts+Legacy", metascore: 84, link: "#" },
        { title: "The Last of Us Part I", image: "https://via.placeholder.com/150/ff3333/1c1c1c?text=The+Last+of+Us", metascore: 88, link: "#" }
    ],
    "آرتور مورگان": [
        { title: "Red Dead Redemption 2", image: "https://via.placeholder.com/150/ff3333/1c1c1c?text=RDR2", metascore: 97, link: "#" },
        { title: "The Witcher 3: Wild Hunt", image: "https://via.placeholder.com/150/ff3333/1c1c1c?text=The+Witcher+3", metascore: 93, link: "#" },
        { title: "Star Wars Outlaws", image: "https://via.placeholder.com/150/ff3333/1c1c1c?text=Star+Wars", metascore: 85, link: "#" },
        { title: "Far Cry 5", image: "https://via.placeholder.com/150/ff3333/1c1c1c?text=Far+Cry+5", metascore: 81, link: "#" }
    ],
    "زلدا": [
        { title: "Hogwarts Legacy", image: "https://via.placeholder.com/150/ff3333/1c1c1c?text=Hogwarts+Legacy", metascore: 84, link: "#" },
        { title: "Little Nightmares III", image: "https://via.placeholder.com/150/ff3333/1c1c1c?text=Little+Nightmares", metascore: 82, link: "#" },
        { title: "Lies of P: Overture", image: "https://via.placeholder.com/150/ff3333/1c1c1c?text=Lies+of+P", metascore: 80, link: "#" },
        { title: "The Legend of Zelda: Tears of the Kingdom", image: "https://via.placeholder.com/150/ff3333/1c1c1c?text=Zelda+ToTK", metascore: 96, link: "#" }
    ],
    "جوئل": [
        { title: "Lies of P: Overture", image: "https://via.placeholder.com/150/ff3333/1c1c1c?text=Lies+of+P", metascore: 80, link: "#" },
        { title: "Far Cry 5", image: "https://via.placeholder.com/150/ff3333/1c1c1c?text=Far+Cry+5", metascore: 81, link: "#" },
        { title: "Red Dead Redemption 2", image: "https://via.placeholder.com/150/ff3333/1c1c1c?text=RDR2", metascore: 97, link: "#" },
        { title: "The Last of Us Part I", image: "https://via.placeholder.com/150/ff3333/1c1c1c?text=The+Last+of+Us", metascore: 88, link: "#" }
    ],
    "ماریو": [
        { title: "EA SPORTS FC 25", image: "https://via.placeholder.com/150/ff3333/1c1c1c?text=EAFC+25", metascore: 83, link: "#" },
        { title: "NBA 2K25", image: "https://via.placeholder.com/150/ff3333/1c1c1c?text=NBA+2K25", metascore: 79, link: "#" },
        { title: "Little Nightmares III", image: "https://via.placeholder.com/150/ff3333/1c1c1c?text=Little+Nightmares", metascore: 82, link: "#" },
        { title: "FIFA 24", image: "https://via.placeholder.com/150/ff3333/1c1c1c?text=FIFA+24", metascore: 80, link: "#" }
    ],
    "دختر سایبرپانک": [
        { title: "Star Wars Outlaws", image: "https://via.placeholder.com/150/ff3333/1c1c1c?text=Star+Wars", metascore: 85, link: "#" },
        { title: "GTA V", image: "https://via.placeholder.com/150/ff3333/1c1c1c?text=GTA+V", metascore: 97, link: "#" },
        { title: "Borderlands 4", image: "https://via.placeholder.com/150/ff3333/1c1c1c?text=Borderlands+4", metascore: 88, link: "#" },
        { title: "Cyberpunk 2077", image: "https://via.placeholder.com/150/ff3333/1c1c1c?text=Cyberpunk+2077", metascore: 86, link: "#" }
    ]
};

// NEW: Movie recommendations with image and link placeholders
const movieRecommendations = {
    "کریتوس": [
        { title: "300", image: "https://via.placeholder.com/150/ff3333/1c1c1c?text=300", metascore: 52, link: "#" },
        { title: "Gladiator", image: "https://via.placeholder.com/150/ff3333/1c1c1c?text=Gladiator", metascore: 67, link: "#" },
        { title: "Mad Max: Fury Road", image: "https://via.placeholder.com/150/ff3333/1c1c1c?text=Mad+Max", metascore: 90, link: "#" },
        { title: "Logan", image: "https://via.placeholder.com/150/ff3333/1c1c1c?text=Logan", metascore: 77, link: "#" },
        { title: "The Northman", image: "https://via.placeholder.com/150/ff3333/1c1c1c?text=The+Northman", metascore: 82, link: "#" },
        { title: "Braveheart", image: "https://via.placeholder.com/150/ff3333/1c1c1c?text=Braveheart", metascore: 68, link: "#" },
        { title: "Conan the Barbarian", image: "https://via.placeholder.com/150/ff3333/1c1c1c?text=Conan", metascore: 43, link: "#" },
        { title: "Troy", image: "https://via.placeholder.com/150/ff3333/1c1c1c?text=Troy", metascore: 56, link: "#" },
        { title: "Apocalypto", image: "https://via.placeholder.com/150/ff3333/1c1c1c?text=Apocalypto", metascore: 68, link: "#" },
        { title: "Dune", image: "https://via.placeholder.com/150/ff3333/1c1c1c?text=Dune", metascore: 83, link: "#" },
        { title: "The Last Samurai", image: "https://via.placeholder.com/150/ff3333/1c1c1c?text=The+Last+Samurai", metascore: 62, link: "#" },
        { title: "Saving Private Ryan", image: "https://via.placeholder.com/150/ff3333/1c1c1c?text=Saving+Private+Ryan", metascore: 91, link: "#" },
        { title: "30 Days of Night", image: "https://via.placeholder.com/150/ff3333/1c1c1c?text=30+Days+of+Night", metascore: 54, link: "#" },
        { title: "The Revenant", image: "https://via.placeholder.com/150/ff3333/1c1c1c?text=The+Revenant", metascore: 76, link: "#" },
        { title: "Sicario", image: "https://via.placeholder.com/150/ff3333/1c1c1c?text=Sicario", metascore: 82, link: "#" },
        { title: "Fury", image: "https://via.placeholder.com/150/ff3333/1c1c1c?text=Fury", metascore: 72, link: "#" }
    ],
    "اساسین": [
        { title: "The Bourne Identity", image: "https://via.placeholder.com/150/ff3333/1c1c1c?text=Bourne", metascore: 68, link: "#" },
        { title: "John Wick", image: "https://via.placeholder.com/150/ff3333/1c1c1c?text=John+Wick", metascore: 68, link: "#" },
        { title: "Mission: Impossible - Fallout", image: "https://via.placeholder.com/150/ff3333/1c1c1c?text=MI+Fallout", metascore: 86, link: "#" },
        { title: "V for Vendetta", image: "https://via.placeholder.com/150/ff3333/1c1c1c?text=V+for+Vendetta", metascore: 62, link: "#" },
        { title: "The Dark Knight", image: "https://via.placeholder.com/150/ff3333/1c1c1c?text=Dark+Knight", metascore: 84, link: "#" },
        { title: "Kingsman: The Secret Service", image: "https://via.placeholder.com/150/ff3333/1c1c1c?text=Kingsman", metascore: 60, link: "#" },
        { title: "Casino Royale", image: "https://via.placeholder.com/150/ff3333/1c1c1c?text=Casino+Royale", metascore: 80, link: "#" },
        { title: "The Equalizer", image: "https://via.placeholder.com/150/ff3333/1c1c1c?text=The+Equalizer", metascore: 57, link: "#" },
        { title: "Atomic Blonde", image: "https://via.placeholder.com/150/ff3333/1c1c1c?text=Atomic+Blonde", metascore: 63, link: "#" },
        { title: "The Girl with the Dragon Tattoo", image: "https://via.placeholder.com/150/ff3333/1c1c1c?text=Dragon+Tattoo", metascore: 71, link: "#" },
        { title: "Léon: The Professional", image: "https://via.placeholder.com/150/ff3333/1c1c1c?text=Leon", metascore: 64, link: "#" },
        { title: "Taken", image: "https://via.placeholder.com/150/ff3333/1c1c1c?text=Taken", metascore: 51, link: "#" },
        { title: "Oldboy", image: "https://via.placeholder.com/150/ff3333/1c1c1c?text=Oldboy", metascore: 77, link: "#" },
        { title: "Drive", image: "https://via.placeholder.com/150/ff3333/1c1c1c?text=Drive", metascore: 78, link: "#" },
        { title: "Nobody", image: "https://via.placeholder.com/150/ff3333/1c1c1c?text=Nobody", metascore: 64, link: "#" },
        { title: "Sicario", image: "https://via.placeholder.com/150/ff3333/1c1c1c?text=Sicario", metascore: 82, link: "#" }
    ],
    "لارا کرافت": [
        { title: "Indiana Jones: Raiders of the Lost Ark", image: "https://via.placeholder.com/150/ff3333/1c1c1c?text=Indy+Jones", metascore: 85, link: "#" },
        { title: "The Mummy", image: "https://via.placeholder.com/150/ff3333/1c1c1c?text=The+Mummy", metascore: 48, link: "#" },
        { title: "National Treasure", image: "https://via.placeholder.com/150/ff3333/1c1c1c?text=National+Treasure", metascore: 44, link: "#" },
        { title: "Tomb Raider", image: "https://via.placeholder.com/150/ff3333/1c1c1c?text=Tomb+Raider", metascore: 48, link: "#" },
        { title: "Jumanji: Welcome to the Jungle", image: "https://via.placeholder.com/150/ff3333/1c1c1c?text=Jumanji", metascore: 58, link: "#" },
        { title: "The Goonies", image: "https://via.placeholder.com/150/ff3333/1c1c1c?text=The+Goonies", metascore: 62, link: "#" },
        { title: "Sahara", image: "https://via.placeholder.com/150/ff3333/1c1c1c?text=Sahara", metascore: 41, link: "#" },
        { title: "Uncharted", image: "https://via.placeholder.com/150/ff3333/1c1c1c?text=Uncharted", metascore: 45, link: "#" },
        { title: "King Solomon's Mines", image: "https://via.placeholder.com/150/ff3333/1c1c1c?text=Solomon's+Mines", metascore: 53, link: "#" },
        { title: "Romancing the Stone", image: "https://via.placeholder.com/150/ff3333/1c1c1c?text=Romancing+Stone", metascore: 75, link: "#" },
        { title: "The Lost City", image: "https://via.placeholder.com/150/ff3333/1c1c1c?text=Lost+City", metascore: 60, link: "#" },
        { title: "Journey to the Center of the Earth", image: "https://via.placeholder.com/150/ff3333/1c1c1c?text=Journey", metascore: 57, link: "#" },
        { title: "Treasure Island", image: "https://via.placeholder.com/150/ff3333/1c1c1c?text=Treasure+Island", metascore: 63, link: "#" },
        { title: "The Lord of the Rings: The Fellowship of the Ring", image: "https://via.placeholder.com/150/ff3333/1c1c1c?text=LotR", metascore: 92, link: "#" },
        { title: "Pirates of the Caribbean: The Curse of the Black Pearl", image: "https://via.placeholder.com/150/ff3333/1c1c1c?text=Pirates", metascore: 63, link: "#" },
        { title: "Jurassic Park", image: "https://via.placeholder.com/150/ff3333/1c1c1c?text=Jurassic+Park", metascore: 68, link: "#" }
    ],
    "مستر چیف": [
        { title: "Starship Troopers", image: "https://via.placeholder.com/150/ff3333/1c1c1c?text=Starship+Troopers", metascore: 62, link: "#" },
        { title: "Aliens", image: "https://via.placeholder.com/150/ff3333/1c1c1c?text=Aliens", metascore: 84, link: "#" },
        { title: "Edge of Tomorrow", image: "https://via.placeholder.com/150/ff3333/1c1c1c?text=Edge+of+Tomorrow", metascore: 71, link: "#" },
        { title: "District 9", image: "https://via.placeholder.com/150/ff3333/1c1c1c?text=District+9", metascore: 81, link: "#" },
        { title: "Saving Private Ryan", image: "https://via.placeholder.com/150/ff3333/1c1c1c?text=Saving+Private+Ryan", metascore: 91, link: "#" },
        { title: "Predator", image: "https://via.placeholder.com/150/ff3333/1c1c1c?text=Predator", metascore: 45, link: "#" },
        { title: "Black Hawk Down", image: "https://via.placeholder.com/150/ff3333/1c1c1c?text=Black+Hawk+Down", metascore: 74, link: "#" },
        { title: "Dune", image: "https://via.placeholder.com/150/ff3333/1c1c1c?text=Dune", metascore: 83, link: "#" },
        { title: "Avatar", image: "https://via.placeholder.com/150/ff3333/1c1c1c?text=Avatar", metascore: 83, link: "#" },
        { title: "The Terminator", image: "https://via.placeholder.com/150/ff3333/1c1c1c?text=Terminator", metascore: 84, link: "#" },
        { title: "Full Metal Jacket", image: "https://via.placeholder.com/150/ff3333/1c1c1c?text=Full+Metal+Jacket", metascore: 76, link: "#" },
        { title: "War of the Worlds", image: "https://via.placeholder.com/150/ff3333/1c1c1c?text=War+of+the+Worlds", metascore: 73, link: "#" },
        { title: "Elysium", image: "https://via.placeholder.com/150/ff3333/1c1c1c?text=Elysium", metascore: 66, link: "#" },
        { title: "Iron Man", image: "https://via.placeholder.com/150/ff3333/1c1c1c?text=Iron+Man", metascore: 79, link: "#" },
        { title: "The Martian", image: "https://via.placeholder.com/150/ff3333/1c1c1c?text=The+Martian", metascore: 80, link: "#" },
        { title: "Top Gun: Maverick", image: "https://via.placeholder.com/150/ff3333/1c1c1c?text=Top+Gun", metascore: 78, link: "#" }
    ],
    "گرالت": [
        { title: "The Lord of the Rings: The Fellowship of the Ring", image: "https://via.placeholder.com/150/ff3333/1c1c1c?text=LotR", metascore: 92, link: "#" },
        { title: "The Hobbit: An Unexpected Journey", image: "https://via.placeholder.com/150/ff3333/1c1c1c?text=The+Hobbit", metascore: 58, link: "#" },
        { title: "Game of Thrones (Series)", image: "https://via.placeholder.com/150/ff3333/1c1c1c?text=GoT", metascore: 80, link: "#" },
        { title: "The Witcher (Series)", image: "https://via.placeholder.com/150/ff3333/1c1c1c?text=The+Witcher", metascore: 53, link: "#" },
        { title: "Dungeons & Dragons: Honor Among Thieves", image: "https://via.placeholder.com/150/ff3333/1c1c1c?text=DnD", metascore: 72, link: "#" },
        { title: "Harry Potter and the Sorcerer's Stone", image: "https://via.placeholder.com/150/ff3333/1c1c1c?text=Harry+Potter", metascore: 64, link: "#" },
        { title: "The Chronicles of Narnia: The Lion, the Witch and the Wardrobe", image: "https://via.placeholder.com/150/ff3333/1c1c1c?text=Narnia", metascore: 55, link: "#" },
        { title: "Excalibur", image: "https://via.placeholder.com/150/ff3333/1c1c1c?text=Excalibur", metascore: 56, link: "#" },
        { title: "Pan's Labyrinth", image: "https://via.placeholder.com/150/ff3333/1c1c1c?text=Pan's+Labyrinth", metascore: 98, link: "#" },
        { title: "Beowulf", image: "https://via.placeholder.com/150/ff3333/1c1c1c?text=Beowulf", metascore: 59, link: "#" },
        { title: "Willow", image: "https://via.placeholder.com/150/ff3333/1c1c1c?text=Willow", metascore: 47, link: "#" },
        { title: "Legend", image: "https://via.placeholder.com/150/ff3333/1c1c1c?text=Legend", metascore: 42, link: "#" },
        { title: "Labyrinth", image: "https://via.placeholder.com/150/ff3333/1c1c1c?text=Labyrinth", metascore: 50, link: "#" },
        { title: "The Last Samurai", image: "https://via.placeholder.com/150/ff3333/1c1c1c?text=Last+Samurai", metascore: 62, link: "#" },
        { title: "A Knight's Tale", image: "https://via.placeholder.com/150/ff3333/1c1c1c?text=A+Knight's+Tale", metascore: 56, link: "#" },
        { title: "Gladiator", image: "https://via.placeholder.com/150/ff3333/1c1c1c?text=Gladiator", metascore: 67, link: "#" }
    ],
    "آرتور مورگان": [
        { title: "The Good, the Bad and the Ugly", image: "https://via.placeholder.com/150/ff3333/1c1c1c?text=Good,+Bad,+Ugly", metascore: 90, link: "#" },
        { title: "Unforgiven", image: "https://via.placeholder.com/150/ff3333/1c1c1c?text=Unforgiven", metascore: 85, link: "#" },
        { title: "Django Unchained", image: "https://via.placeholder.com/150/ff3333/1c1c1c?text=Django", metascore: 81, link: "#" },
        { title: "True Grit", image: "https://via.placeholder.com/150/ff3333/1c1c1c?text=True+Grit", metascore: 80, link: "#" },
        { title: "The Magnificent Seven", image: "https://via.placeholder.com/150/ff3333/1c1c1c?text=Magnificent+Seven", metascore: 54, link: "#" },
        { title: "A Fistful of Dollars", image: "https://via.placeholder.com/150/ff3333/1c1c1c?text=Fistful+of+Dollars", metascore: 65, link: "#" },
        { title: "For a Few Dollars More", image: "https://via.placeholder.com/150/ff3333/1c1c1c?text=For+a+Few+Dollars+More", metascore: 74, link: "#" },
        { title: "Tombstone", image: "https://via.placeholder.com/150/ff3333/1c1c1c?text=Tombstone", metascore: 50, link: "#" },
        { title: "The Wild Bunch", image: "https://via.placeholder.com/150/ff3333/1c1c1c?text=Wild+Bunch", metascore: 96, link: "#" },
        { title: "3:10 to Yuma", image: "https://via.placeholder.com/150/ff3333/1c1c1c?text=3:10+to+Yuma", metascore: 76, link: "#" },
        { title: "The Revenant", image: "https://via.placeholder.com/150/ff3333/1c1c1c?text=The+Revenant", metascore: 76, link: "#" },
        { title: "No Country for Old Men", image: "https://via.placeholder.com/150/ff3333/1c1c1c?text=No+Country+for+Old+Men", metascore: 92, link: "#" },
        { title: "The Assassination of Jesse James by the Coward Robert Ford", image: "https://via.placeholder.com/150/ff3333/1c1c1c?text=Jesse+James", metascore: 80, link: "#" },
        { title: "Bone Tomahawk", image: "https://via.placeholder.com/150/ff3333/1c1c1c?text=Bone+Tomahawk", metascore: 76, link: "#" },
        { title: "Hell or High Water", image: "https://via.placeholder.com/150/ff3333/1c1c1c?text=Hell+or+High+Water", metascore: 88, link: "#" },
        { title: "The Hateful Eight", image: "https://via.placeholder.com/150/ff3333/1c1c1c?text=The+Hateful+Eight", metascore: 68, link: "#" }
    ],
    "زلدا": [
        { title: "The Lord of the Rings: The Fellowship of the Ring", image: "https://via.placeholder.com/150/ff3333/1c1c1c?text=LotR", metascore: 92, link: "#" },
        { title: "Spirited Away", image: "https://via.placeholder.com/150/ff3333/1c1c1c?text=Spirited+Away", metascore: 96, link: "#" },
        { title: "Princess Mononoke", image: "https://via.placeholder.com/150/ff3333/1c1c1c?text=Mononoke", metascore: 76, link: "#" },
        { title: "The Princess Bride", image: "https://via.placeholder.com/150/ff3333/1c1c1c?text=Princess+Bride", metascore: 77, link: "#" },
        { title: "Stardust", image: "https://via.placeholder.com/150/ff3333/1c1c1c?text=Stardust", metascore: 66, link: "#" },
        { title: "Legend", image: "https://via.placeholder.com/150/ff3333/1c1c1c?text=Legend", metascore: 42, link: "#" },
        { title: "Willow", image: "https://via.placeholder.com/150/ff3333/1c1c1c?text=Willow", metascore: 47, link: "#" },
        { title: "Harry Potter and the Sorcerer's Stone", image: "https://via.placeholder.com/150/ff3333/1c1c1c?text=Harry+Potter", metascore: 64, link: "#" },
        { title: "The Chronicles of Narnia: The Lion, the Witch and the Wardrobe", image: "https://via.placeholder.com/150/ff3333/1c1c1c?text=Narnia", metascore: 55, link: "#" },
        { title: "Eragon", image: "https://via.placeholder.com/150/ff3333/1c1c1c?text=Eragon", metascore: 38, link: "#" },
        { title: "Labyrinth", image: "https://via.placeholder.com/150/ff3333/1c1c1c?text=Labyrinth", metascore: 50, link: "#" },
        { title: "Excalibur", image: "https://via.placeholder.com/150/ff3333/1c1c1c?text=Excalibur", metascore: 56, link: "#" },
        { title: "The Dark Crystal", image: "https://via.placeholder.com/150/ff3333/1c1c1c?text=Dark+Crystal", metascore: 66, link: "#" },
        { title: "Maleficent", image: "https://via.placeholder.com/150/ff3333/1c1c1c?text=Maleficent", metascore: 56, link: "#" },
        { title: "Alice in Wonderland", image: "https://via.placeholder.com/150/ff3333/1c1c1c?text=Alice", metascore: 53, link: "#" },
        { title: "How to Train Your Dragon", image: "https://via.placeholder.com/150/ff3333/1c1c1c?text=Dragon", metascore: 75, link: "#" }
    ],
    "جوئل": [
        { title: "The Road", image: "https://via.placeholder.com/150/ff3333/1c1c1c?text=The+Road", metascore: 64, link: "#" },
        { title: "The Last of Us (Series)", image: "https://via.placeholder.com/150/ff3333/1c1c1c?text=The+Last+of+Us", metascore: 88, link: "#" },
        { title: "Children of Men", image: "https://via.placeholder.com/150/ff3333/1c1c1c?text=Children+of+Men", metascore: 84, link: "#" },
        { title: "28 Days Later", image: "https://via.placeholder.com/150/ff3333/1c1c1c?text=28+Days+Later", metascore: 78, link: "#" },
        { title: "A Quiet Place", image: "https://via.placeholder.com/150/ff3333/1c1c1c?text=A+Quiet+Place", metascore: 82, link: "#" },
        { title: "Zombieland", image: "https://via.placeholder.com/150/ff3333/1c1c1c?text=Zombieland", metascore: 73, link: "#" },
        { title: "The Book of Eli", image: "https://via.placeholder.com/150/ff3333/1c1c1c?text=The+Book+of+Eli", metascore: 53, link: "#" },
        { title: "I Am Legend", image: "https://via.placeholder.com/150/ff3333/1c1c1c?text=I+Am+Legend", metascore: 65, link: "#" },
        { title: "Mad Max: Fury Road", image: "https://via.placeholder.com/150/ff3333/1c1c1c?text=Mad+Max", metascore: 90, link: "#" },
        { title: "Dune", image: "https://via.placeholder.com/150/ff3333/1c1c1c?text=Dune", metascore: 83, link: "#" },
        { title: "The Postman", image: "https://via.placeholder.com/150/ff3333/1c1c1c?text=The+Postman", metascore: 29, link: "#" },
        { title: "Waterworld", image: "https://via.placeholder.com/150/ff3333/1c1c1c?text=Waterworld", metascore: 56, link: "#" },
        { title: "Arrival", image: "https://via.placeholder.com/150/ff3333/1c1c1c?text=Arrival", metascore: 81, link: "#" },
        { title: "Snowpiercer", image: "https://via.placeholder.com/150/ff3333/1c1c1c?text=Snowpiercer", metascore: 84, link: "#" },
        { title: "Blade Runner 2049", image: "https://via.placeholder.com/150/ff3333/1c1c1c?text=Blade+Runner", metascore: 81, link: "#" },
        { title: "The Revenant", image: "https://via.placeholder.com/150/ff3333/1c1c1c?text=The+Revenant", metascore: 76, link: "#" }
    ],
    "ماریو": [
        { title: "The Super Mario Bros. Movie", image: "https://via.placeholder.com/150/ff3333/1c1c1c?text=Super+Mario+Bros", metascore: 46, link: "#" },
        { title: "Wreck-It Ralph", image: "https://via.placeholder.com/150/ff3333/1c1c1c?text=Wreck-It+Ralph", metascore: 72, link: "#" },
        { title: "Sonic the Hedgehog", image: "https://via.placeholder.com/150/ff3333/1c1c1c?text=Sonic", metascore: 47, link: "#" },
        { title: "A Bug's Life", image: "https://via.placeholder.com/150/ff3333/1c1c1c?text=A+Bug's+Life", metascore: 77, link: "#" },
        { title: "Toy Story", image: "https://via.placeholder.com/150/ff3333/1c1c1c?text=Toy+Story", metascore: 95, link: "#" },
        { title: "Inside Out", image: "https://via.placeholder.com/150/ff3333/1c1c1c?text=Inside+Out", metascore: 94, link: "#" },
        { title: "How to Train Your Dragon", image: "https://via.placeholder.com/150/ff3333/1c1c1c?text=Dragon", metascore: 75, link: "#" },
        { title: "Shrek", image: "https://via.placeholder.com/150/ff3333/1c1c1c?text=Shrek", metascore: 84, link: "#" },
        { title: "Finding Nemo", image: "https://via.placeholder.com/150/ff3333/1c1c1c?text=Finding+Nemo", metascore: 90, link: "#" },
        { title: "Coco", image: "https://via.placeholder.com/150/ff3333/1c1c1c?text=Coco", metascore: 81, link: "#" },
        { title: "Despicable Me", image: "https://via.placeholder.com/150/ff3333/1c1c1c?text=Despicable+Me", metascore: 72, link: "#" },
        { title: "Minions", image: "https://via.placeholder.com/150/ff3333/1c1c1c?text=Minions", metascore: 56, link: "#" },
        { title: "Hotel Transylvania", image: "https://via.placeholder.com/150/ff3333/1c1c1c?text=Hotel+Transylvania", metascore: 47, link: "#" },
        { title: "The Lego Movie", image: "https://via.placeholder.com/150/ff3333/1c1c1c?text=Lego+Movie", metascore: 83, link: "#" },
        { title: "Ratatouille", image: "https://via.placeholder.com/150/ff3333/1c1c1c?text=Ratatouille", metascore: 96, link: "#" },
        { title: "Up", image: "https://via.placeholder.com/150/ff3333/1c1c1c?text=Up", metascore: 88, link: "#" }
    ],
    "دختر سایبرپانک": [
        { title: "Blade Runner", image: "https://via.placeholder.com/150/ff3333/1c1c1c?text=Blade+Runner", metascore: 89, link: "#" },
        { title: "The Matrix", image: "https://via.placeholder.com/150/ff3333/1c1c1c?text=The+Matrix", metascore: 73, link: "#" },
        { title: "Ghost in the Shell", image: "https://via.placeholder.com/150/ff3333/1c1c1c?text=Ghost+in+the+Shell", metascore: 76, link: "#" },
        { title: "Alita: Battle Angel", image: "https://via.placeholder.com/150/ff3333/1c1c1c?text=Alita", metascore: 53, link: "#" },
        { title: "Blade Runner 2049", image: "https://via.placeholder.com/150/ff3333/1c1c1c?text=Blade+Runner+2049", metascore: 81, link: "#" },
        { title: "Dredd", image: "https://via.placeholder.com/150/ff3333/1c1c1c?text=Dredd", metascore: 60, link: "#" },
        { title: "Minority Report", image: "https://via.placeholder.com/150/ff3333/1c1c1c?text=Minority+Report", metascore: 80, link: "#" },
        { title: "Tron: Legacy", image: "https://via.placeholder.com/150/ff3333/1c1c1c?text=Tron:+Legacy", metascore: 49, link: "#" },
        { title: "Total Recall (1990)", image: "https://via.placeholder.com/150/ff3333/1c1c1c?text=Total+Recall", metascore: 57, link: "#" },
        { title: "Ex Machina", image: "https://via.placeholder.com/150/ff3333/1c1c1c?text=Ex+Machina", metascore: 78, link: "#" },
        { title: "Drive", image: "https://via.placeholder.com/150/ff3333/1c1c1c?text=Drive", metascore: 78, link: "#" },
        { title: "Ready Player One", image: "https://via.placeholder.com/150/ff3333/1c1c1c?text=Ready+Player+One", metascore: 64, link: "#" },
        { title: "Snowpiercer", image: "https://via.placeholder.com/150/ff3333/1c1c1c?text=Snowpiercer", metascore: 84, link: "#" },
        { title: "RoboCop (1987)", image: "https://via.placeholder.com/150/ff3333/1c1c1c?text=RoboCop", metascore: 67, link: "#" },
        { title: "A.I. Artificial Intelligence", image: "https://via.placeholder.com/150/ff3333/1c1c1c?text=A.I.", metascore: 65, link: "#" },
        { title: "Inception", image: "https://via.placeholder.com/150/ff3333/1c1c1c?text=Inception", metascore: 74, link: "#" }
    ]
};

let currentQuestionIndex = 0;
let userScores = {};
for (const char in gameCharacters) {
    userScores[char] = 0;
}

let finalCharacterNameForShare = '';

const quizContainer = document.getElementById('quiz-container');
const nextButton = document.getElementById('next-button');
const submitButton = document.getElementById('submit-button');
const resultContainer = document.getElementById('result-container');
const characterImageContainer = document.getElementById('character-image-container');
const finalCharacterNameElement = document.getElementById('final-character-name');
const finalCharacterAnalysis = document.getElementById('final-character-analysis');
const shareButton = document.getElementById('share-button');
const retakeQuizButton = document.getElementById('retake-quiz-button');
const statsSection = document.getElementById('character-stats-section');
const gameRecommendationSection = document.getElementById('game-recommendations-section');
const gameListContainer = document.querySelector('.game-list');
const movieRecommendationSection = document.getElementById('movie-recommendations-section');
const movieListContainer = document.querySelector('.movie-list');


function initializeQuiz() {
    currentQuestionIndex = 0;
    userScores = {};
    for (const char in gameCharacters) {
        userScores[char] = 0;
    }
    quizContainer.style.display = 'block';
    resultContainer.style.display = 'none';
    shareButton.style.display = 'none';
    retakeQuizButton.style.display = 'none';

    const existingTraitsSection = resultContainer.querySelector('.traits-section');
    if (existingTraitsSection) {
        existingTraitsSection.remove();
    }
    gameRecommendationSection.style.display = 'none';
    movieRecommendationSection.style.display = 'none';
    statsSection.style.display = 'none';

    displayQuestion();
}


function displayQuestion() {
    if (currentQuestionIndex < quizQuestions.length) {
        const questionData = quizQuestions[currentQuestionIndex];
        quizContainer.innerHTML = `
            <div class="question-card fade-in-scale">
                <p class="question-text">${toFarsi(currentQuestionIndex + 1)}. ${questionData.question}</p>
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
        resultContainer.style.display = 'none';
        shareButton.style.display = 'none';
        retakeQuizButton.style.display = 'none';
        
        const existingTraitsSection = resultContainer.querySelector('.traits-section');
        if (existingTraitsSection) {
            existingTraitsSection.remove();
        }

        if (currentQuestionIndex === quizQuestions.length - 1) {
            nextButton.style.display = 'none';
            submitButton.style.display = 'block';
        } else {
            nextButton.style.display = 'block';
            submitButton.style.display = 'none';
        }
    } else {
        showResult();
    }
}

function selectAnswer() {
    const selectedOption = document.querySelector(`input[name="question${currentQuestionIndex}"]:checked`);
    if (selectedOption) {
        const optionIndex = parseInt(selectedOption.value);
        const selectedOptionData = quizQuestions[currentQuestionIndex].options[optionIndex];

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
    resultContainer.style.display = 'block';

    let maxScore = -1;
    let finalCharacter = '';
    let tieBreakerCharacters = [];

    for (const charName in userScores) {
        if (userScores[charName] > maxScore) {
            maxScore = userScores[charName];
            finalCharacter = charName;
            tieBreakerCharacters = [charName];
        } else if (userScores[charName] === maxScore) {
            tieBreakerCharacters.push(charName);
        }
    }

    if (tieBreakerCharacters.length > 1) {
        const randomIndex = Math.floor(Math.random() * tieBreakerCharacters.length);
        finalCharacter = tieBreakerCharacters[randomIndex];
    }
    
    finalCharacterNameForShare = finalCharacter;

    const charInfo = gameCharacters[finalCharacter];
    
    const resultHTML = `
        <div id="character-image-container">
            <img src="${charInfo.image}" alt="${finalCharacter}" class="fade-in-img">
        </div>
        <h2 id="final-character-name">${finalCharacter}</h2>
        <p id="final-character-analysis">${charInfo.analysis}</p>
        
        <div class="traits-section">
            <div class="good-traits">
                <h4>نقاط قوت 💪</h4>
                <ul class="traits-list">
                    ${charInfo.goodTraits.map(trait => `<li>${trait}</li>`).join('')}
                </ul>
            </div>
            <div class="bad-traits">
                <h4>چالش‌ها 🚧</h4>
                <ul class="traits-list">
                    ${charInfo.badTraits.map(trait => `<li>${trait}</li>`).join('')}
                </ul>
            </div>
        </div>

        <div id="character-stats-section">
            <h3>شخصیت شما در یک نگاه:</h3>
            <div class="stats-list">
                <div class="stat-item">
                    <span>قدرت</span>
                    <div class="stat-bar"><div class="stat-fill" id="power-stat"><span class="stat-percent"></span></div></div>
                </div>
                <div class="stat-item">
                    <span>هوش</span>
                    <div class="stat-bar"><div class="stat-fill" id="intelligence-stat"><span class="stat-percent"></span></div></div>
                </div>
                <div class="stat-item">
                    <span>چابکی</span>
                    <div class="stat-bar"><div class="stat-fill" id="agility-stat"><span class="stat-percent"></span></div></div>
                </div>
                <div class="stat-item">
                    <span>وفاداری</span>
                    <div class="stat-bar"><div class="stat-fill" id="loyalty-stat"><span class="stat-percent"></span></div></div>
                </div>
                <div class="stat-item">
                    <span>ماجراجویی</span>
                    <div class="stat-bar"><div class="stat-fill" id="adventure-stat"><span class="stat-percent"></span></div></div>
                </div>
            </div>
        </div>

        <div id="game-recommendations-section">
            <h3 class="centered-title">بازی‌های پیشنهادی گیم‌رنتر برای شما:</h3>
            <div class="game-list">
                ${gameRecommendations[finalCharacter].map(game => `
                    <a href="${game.link}" target="_blank" class="game-card">
                        <img src="${game.image}" alt="${game.title}">
                        <div class="metacritic-score ${getMetascoreClass(game.metascore)}">
                            <span class="score-value">${toFarsi(game.metascore)}</span>
                        </div>
                        <span class="game-title">${game.title}</span>
                    </a>
                `).join('')}
            </div>
        </div>

        <div id="movie-recommendations-section">
            <h3 class="centered-title">فیلم‌های پیشنهادی برای شما:</h3>
            <div class="movie-list">
                ${movieRecommendations[finalCharacter].slice(0, 4).map(movie => `
                    <a href="${movie.link}" target="_blank" class="movie-card">
                        <img src="${movie.image}" alt="${movie.title}">
                        <div class="metacritic-score ${getMetascoreClass(movie.metascore)}">
                            <span class="score-value">${toFarsi(movie.metascore)}</span>
                        </div>
                        <span class="movie-title">${movie.title}</span>
                    </a>
                `).join('')}
            </div>
        </div>
        
        <div class="button-group">
            <button id="retake-quiz-button" class="quiz-button">آزمون دوباره</button>
            <button id="share-button" class="quiz-button share-button">اشتراک‌گذاری نتیجه</button>
        </div>

        <div class="social-promo-section">
            <h3>گیم‌رنتر را در شبکه‌های اجتماعی دنبال کنید:</h3>
            <div class="social-links">
                <a href="YOUR_INSTAGRAM_LINK" target="_blank" class="social-link instagram">
                    <img src="http://googleusercontent.com/image_generation_content/79" alt="اینستاگرام گیم‌رنتر">
                    <span>صفحه اینستاگرام</span>
                </a>
                <a href="YOUR_TELEGRAM_LINK" target="_blank" class="social-link telegram">
                    <img src="http://googleusercontent.com/image_generation_content/77" alt="تلگرام گیم‌رنتر">
                    <span>کانال تلگرام</span>
                </a>
                <a href="YOUR_TWITTER_LINK" target="_blank" class="social-link twitter">
                    <img src="http://googleusercontent.com/image_generation_content/78" alt="توییتر گیم‌رنتر">
                    <span>صفحه توییتر</span>
                </a>
                <a href="YOUR_WEBSITE_LINK" target="_blank" class="social-link website">
                    <img src="aks/website-logo.png" alt="وبسایت گیم‌رنتر">
                    <span>وبسایت گیم‌رنتر</span>
                </a>
            </div>
        </div>
    `;

    resultContainer.innerHTML = resultHTML;
    resultContainer.style.display = 'block';

    // Add event listeners after elements are created
    document.getElementById('retake-quiz-button').addEventListener('click', initializeQuiz);
    document.getElementById('share-button').addEventListener('click', shareResult);

    animateStats(charInfo.stats);
}

// Helper function to determine metascore badge color
function getMetascoreClass(score) {
    if (score >= 75) {
        return 'green'; // Green for 75-100
    } else if (score >= 50) {
        return 'yellow'; // Yellow for 50-74
    } else {
        return 'red'; // Red for 0-49
    }
}

function animateStats(stats) {
    for (const stat in stats) {
        const statElement = document.getElementById(`${stat}-stat`);
        if (statElement) {
            const percentage = stats[stat];
            statElement.style.width = `${percentage}%`;
            statElement.querySelector('.stat-percent').textContent = toFarsi(percentage) + '%';
        }
    }
}

function shareResult() {
    const characterName = finalCharacterNameForShare;
    const analysis = gameCharacters[characterName].analysis;
    const shareText = `من در آزمون شخصیت‌شناسی گیم‌رنتر، شخصیت "${characterName}" شدم! 🎮\n\n${analysis}\n\nشما هم امتحان کنید: ${window.location.href}`;

    if (navigator.share) {
        navigator.share({
            title: 'آزمون شخصیت‌شناسی گیم‌رنتر',
            text: shareText,
            url: window.location.href,
        }).catch((error) => console.error('Error sharing:', error));
    } else {
        const dummy = document.createElement("input");
        document.body.appendChild(dummy);
        dummy.setAttribute("value", shareText + " " + window.location.href);
        dummy.select();
        document.execCommand("copy");
        document.body.removeChild(dummy);
        alert("لینک نتیجه در حافظه کپی شد.");
    }
}

nextButton.addEventListener('click', () => {
    const selectedOption = document.querySelector(`input[name="question${currentQuestionIndex}"]:checked`);
    if (selectedOption) {
        const optionIndex = selectedOption.value;
        const traits = quizQuestions[currentQuestionIndex].options[optionIndex].points;
        for (const char in traits) {
            userScores[char] += traits[char];
        }
        currentQuestionIndex++;
        displayQuestion();
    } else {
        alert("لطفاً یک گزینه را انتخاب کنید!");
    }
});

submitButton.addEventListener('click', () => {
    const selectedOption = document.querySelector(`input[name="question${currentQuestionIndex}"]:checked`);
    if (selectedOption) {
        const optionIndex = selectedOption.value;
        const traits = quizQuestions[currentQuestionIndex].options[optionIndex].points;
        for (const char in traits) {
            userScores[char] += traits[char];
        }
        showResult();
    } else {
        alert("لطفاً یک گزینه را انتخاب کنید!");
    }
});

document.addEventListener('DOMContentLoaded', initializeQuiz);
