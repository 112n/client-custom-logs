// ============================================
// دیکشنری ترجمه‌ها
// ============================================
var translations = {
    fa: {
        title: '📦 client-custom-logs',
        subtitle: 'یک ماد سبک وزن برای فابریک که لاگ‌های اختصاصی را بدون تأثیر بر لاگ اصلی ماینکرفت نمایش می‌دهد.',
        featuresTitle: '✨ ویژگی‌های کلیدی',
        feature1: '📝 قالب لاگ‌های سفارشی برای ماد شما',
        feature2: '🖥️ نمایش جداگانه در کنسول ماینکرفت',
        feature3: '🔒 قالب اصلی لاگ ماینکرفت بدون تغییر می‌ماند',
        feature4: '📁 بدون ایجاد فایل لاگ جدید برای latest.log',
        feature5: '⚙️ تنظیمات Log4j2 از منابع ماد بارگذاری می‌شود',
        feature6: '🧩 API ساده برای نوشتن لاگ‌های سفارشی',
        howTitle: '⚙️ نحوه کار',
        howDesc1: 'ماد یک لاگر اختصاصی Log4j2 با نام <code>yourid</code> ایجاد می‌کند.',
        howDesc2: 'سپس می‌توانید پیام‌ها را به این صورت بنویسید:',
        howDesc3: 'پیام‌های سفارشی با فرمت زیر نمایش داده می‌شوند:',
        howDesc4: 'در همین حال، لاگ‌های معمولی ماینکرفت به فرمت پیش‌فرض خود ادامه می‌دهند:',
        configTitle: '📂 تنظیمات Log4j2',
        configDesc1: 'ماد فایل تنظیمات خود را از مسیر زیر بارگذاری می‌کند:',
        configDesc2: 'لاگر سفارشی به این شکل تعریف می‌شود:',
        configDesc3: 'گزینه <code>additivity="false"</code> از چاپ دوباره پیام‌ها جلوگیری می‌کند.',
        configDesc4: 'فرمت کنسول سفارشی:',
        minecraftLogTitle: '📄 فایل لاگ ماینکرفت',
        minecraftLogDesc: 'فایل لاگ اصلی ماینکرفت همچنان مسئول <code>logs/latest.log</code> است. ماد ما فایل جدیدی ایجاد نمی‌کند و از تداخل با فایل لاگ اصلی جلوگیری می‌کند.',
        usageTitle: '🧑‍💻 نحوه استفاده',
        usageDesc1: 'یک لاگر در کلاس اصلی ماد خود ایجاد کنید:',
        usageDesc2: 'خروجی نهایی:',
        requirementsTitle: '📋 نیازمندی‌ها',
        req1: 'نسخه جاوا ادیشن ماینکرفت',
        req2: 'Fabric Loader',
        req3: 'Fabric API',
        req4: 'نسخه جاوا سازگار با نسخه ماینکرفت شما',
        structureTitle: '📁 ساختار پروژه',
        whyTitle: '❓ چرا از این ماد استفاده کنیم؟',
        whyDesc1: 'لاگر پیش‌فرض ماینکرفت برای پیام‌های عمومی مفید است، اما مادهای بزرگ می‌توانند خروجی زیادی تولید کنند. این ماد قالبی اختصاصی برای پیام‌های شما فراهم می‌کند تا تشخیص آنها آسان‌تر باشد:',
        whyDesc2: 'این ویژگی مخصوصاً هنگام توسعه یا دیباگ مادهای فابریک بسیار مفید است.',
        licenseTitle: '📜 لایسنس',
        licenseDesc: 'این پروژه به عنوان یک مثال منبع‌باز برای توسعه ماد فابریک ارائه شده است. شما می‌توانید برای پروژه‌های فابریک خود آن را تغییر دهید.',
        footer: 'ساخته شده با ❤️ برای <a href="https://github.com/simple-developer120/client-custom-logs" target="_blank">مشاهده در گیت‌هاب</a>',
        copy: '📋 کپی',
        copied: '✅ کپی شد!',
        flag: '🇮🇷',
        langName: 'فارسی',
        dirLabel: '(راست‌چین)'
    },
    en: {
        title: '📦 client-custom-logs',
        subtitle: 'A lightweight Fabric mod that provides a separate custom log format for your mod\'s messages without modifying Minecraft\'s default latest.log format.',
        featuresTitle: '✨ Key Features',
        feature1: '📝 Custom log format for your mod',
        feature2: '🖥️ Separate display in Minecraft console',
        feature3: '🔒 Minecraft\'s original logging format remains unchanged',
        feature4: '📁 No second file logger for latest.log',
        feature5: '⚙️ Log4j2 configuration loaded from mod resources',
        feature6: '🧩 Simple API for writing custom logs',
        howTitle: '⚙️ How It Works',
        howDesc1: 'The mod creates a dedicated Log4j2 logger named <code>yourid</code>.',
        howDesc2: 'You can then write messages using:',
        howDesc3: 'Custom messages are displayed using the following format:',
        howDesc4: 'Meanwhile, Minecraft\'s normal logs continue using their default format:',
        configTitle: '📂 Log4j2 Configuration',
        configDesc1: 'The mod loads its custom configuration from:',
        configDesc2: 'The custom logger is defined as:',
        configDesc3: 'The <code>additivity="false"</code> option prevents duplicate messages.',
        configDesc4: 'Custom console format:',
        minecraftLogTitle: '📄 Minecraft Log File',
        minecraftLogDesc: 'Minecraft\'s normal file logger remains responsible for <code>logs/latest.log</code>. The mod does not create a second file to avoid conflicts.',
        usageTitle: '🧑‍💻 Usage',
        usageDesc1: 'Create your logger in the main mod class:',
        usageDesc2: 'Final output:',
        requirementsTitle: '📋 Requirements',
        req1: 'Minecraft Java Edition',
        req2: 'Fabric Loader',
        req3: 'Fabric API',
        req4: 'Java version compatible with your Minecraft version',
        structureTitle: '📁 Project Structure',
        whyTitle: '❓ Why Use This Mod?',
        whyDesc1: 'Minecraft\'s default logger is useful for general messages, but large mods can produce a lot of output. This mod provides a dedicated format for your own messages, making them easier to identify:',
        whyDesc2: 'This is especially useful when developing or debugging Fabric mods.',
        licenseTitle: '📜 License',
        licenseDesc: 'This project is provided as an open-source example for Fabric mod development. You are free to modify the implementation for your own Fabric projects.',
        footer: 'Made with ❤️ for <a href="https://github.com/simple-developer120/client-custom-logs" target="_blank">View on GitHub</a>',
        copy: '📋 Copy',
        copied: '✅ Copied!',
        flag: '🇺🇸',
        langName: 'English',
        dirLabel: '(LTR)'
    }
};

var currentLang = 'fa';

// ============================================
// تشخیص زبان سیستم
// ============================================
function getSystemLanguage() {
    var lang = navigator.language || navigator.languages?.[0] || 'en-US';
    var baseLang = lang.split('-')[0].toLowerCase();
    return { full: lang, base: baseLang };
}

// ============================================
// تابع اصلی بروزرسانی UI بر اساس زبان
// ============================================
function updateUI() {
    var langInfo = getSystemLanguage();
    var base = langInfo.base;
    var full = langInfo.full;

    // تشخیص فارسی بودن
    var isPersian = (base === 'fa' || full.toLowerCase().includes('fa') || full.toLowerCase().includes('fars'));
    
    // انتخاب زبان
    var lang = isPersian ? 'fa' : 'en';
    currentLang = lang;
    var t = translations[lang];

    if (!t) return;

    // تغییر جهت صفحه
    if (isPersian) {
        document.body.classList.remove('en-mode');
        document.body.classList.add('fa-mode');
        document.documentElement.lang = 'fa';
        document.documentElement.dir = 'rtl';
    } else {
        document.body.classList.remove('fa-mode');
        document.body.classList.add('en-mode');
        document.documentElement.lang = 'en';
        document.documentElement.dir = 'ltr';
    }

    // بروزرسانی نشانگر زبان
    document.getElementById('flagIcon').textContent = t.flag;
    document.getElementById('langName').textContent = t.langName;
    document.getElementById('dirLabel').textContent = t.dirLabel;

    // بروزرسانی محتوا
    document.getElementById('mainTitle').textContent = t.title;
    document.getElementById('subtitle').textContent = t.subtitle;
    document.getElementById('featuresTitle').textContent = t.featuresTitle;
    document.getElementById('feature1').textContent = t.feature1;
    document.getElementById('feature2').textContent = t.feature2;
    document.getElementById('feature3').textContent = t.feature3;
    document.getElementById('feature4').textContent = t.feature4;
    document.getElementById('feature5').textContent = t.feature5;
    document.getElementById('feature6').textContent = t.feature6;
    document.getElementById('howTitle').textContent = t.howTitle;
    document.getElementById('howDesc1').innerHTML = t.howDesc1;
    document.getElementById('howDesc2').textContent = t.howDesc2;
    document.getElementById('howDesc3').textContent = t.howDesc3;
    document.getElementById('howDesc4').textContent = t.howDesc4;
    document.getElementById('configTitle').textContent = t.configTitle;
    document.getElementById('configDesc1').textContent = t.configDesc1;
    document.getElementById('configDesc2').textContent = t.configDesc2;
    document.getElementById('configDesc3').innerHTML = t.configDesc3;
    document.getElementById('configDesc4').textContent = t.configDesc4;
    document.getElementById('minecraftLogTitle').textContent = t.minecraftLogTitle;
    document.getElementById('minecraftLogDesc').innerHTML = t.minecraftLogDesc;
    document.getElementById('usageTitle').textContent = t.usageTitle;
    document.getElementById('usageDesc1').textContent = t.usageDesc1;
    document.getElementById('usageDesc2').textContent = t.usageDesc2;
    document.getElementById('requirementsTitle').textContent = t.requirementsTitle;
    document.getElementById('req1').textContent = t.req1;
    document.getElementById('req2').textContent = t.req2;
    document.getElementById('req3').textContent = t.req3;
    document.getElementById('req4').textContent = t.req4;
    document.getElementById('structureTitle').textContent = t.structureTitle;
    document.getElementById('whyTitle').textContent = t.whyTitle;
    document.getElementById('whyDesc1').textContent = t.whyDesc1;
    document.getElementById('whyDesc2').textContent = t.whyDesc2;
    document.getElementById('licenseTitle').textContent = t.licenseTitle;
    document.getElementById('licenseDesc').textContent = t.licenseDesc;
    document.getElementById('footerText').innerHTML = t.footer;

    // بروزرسانی دکمه‌های کپی
    document.querySelectorAll('.copy-btn').forEach(function(btn) {
        btn.textContent = t.copy;
    });
}

// ============================================
// تابع کپی کردن کد
// ============================================
function copyCode(button) {
    var codeBlock = button.closest('.code-block');
    var code = codeBlock.querySelector('code');
    var textToCopy = code.textContent;
    var t = translations[currentLang];

    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(textToCopy).then(function() {
            button.textContent = t.copied;
            button.classList.add('copied');
            setTimeout(function() {
                button.textContent = t.copy;
                button.classList.remove('copied');
            }, 2000);
        }).catch(function() {
            copyFallback(textToCopy, button, t);
        });
    } else {
        copyFallback(textToCopy, button, t);
    }
}

function copyFallback(text, button, t) {
    var textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    try {
        document.execCommand('copy');
        button.textContent = t.copied;
        button.classList.add('copied');
        setTimeout(function() {
            button.textContent = t.copy;
            button.classList.remove('copied');
        }, 2000);
    } catch (e) {
        alert('Please copy the code manually.');
    }
    document.body.removeChild(textarea);
}

// ============================================
// راه‌اندازی اولیه
// ============================================
(function() {
    // اجرای اولیه
    updateUI();

    // گوش دادن به تغییرات زبان
    if (window.addEventListener) {
        window.addEventListener('languagechange', function() {
            updateUI();
        });
    }

    // بروزرسانی هنگام فوکوس مجدد صفحه
    document.addEventListener('visibilitychange', function() {
        if (!document.hidden) {
            updateUI();
        }
    });

    // بروزرسانی هنگام بارگذاری کامل
    window.addEventListener('load', function() {
        updateUI();
    });

    // بررسی مجدد پس از 200 میلی‌ثانیه (برای کش مرورگر)
    setTimeout(updateUI, 200);
})();;
            }
        }
    }, { threshold: 0.2 });

    for (var k = 0; k < sections.length; k++) {
        observer.observe(sections[k]);
    }
});
