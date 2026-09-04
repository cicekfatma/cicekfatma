const translations = {

    tr: {

        navAbout: "Hakkımda",
        navSkills: "Yetenekler",
        navProjects: "Projeler",
        navExperience: "Deneyim",
        navEducation: "Eğitim",
        navContact: "İletişim",

        heroEyebrow: "SOFTWARE ENGINEER",
        heroTitle: "Yazılım Mühendisi",

        heroDescription:
            "Yazılım geliştirme, yapay zeka ve siber güvenlik alanlarında anlamlı ve ölçeklenebilir çözümler geliştiriyorum.",

        viewProjects: "Projelerimi Gör",

        aboutTitle: "Hakkımda",

        aboutText1:
            "Yazılım mühendisliği mezunuyum ve özellikle yazılım geliştirme, yapay zeka ve siber güvenlik alanlarına ilgi duyuyorum.",

        aboutText2:
            "Farklı teknolojileri kullanarak gerçek problemlere yönelik çözümler geliştirmeyi ve teknik yetkinliklerimi sürekli geliştirmeyi seviyorum.",

        gpa: "GPA / 4.00",
        projectsStat: "Projeler",
        focusStat: "Odak Alanı",

        skillsTitle: "Teknik Yetenekler",
        languages: "Programlama Dilleri",
        areas: "İlgi Alanları",

        projectsTitle: "Öne Çıkan Projeler",

        firstsecDescription:
            "Yazılım güvenlik açıklarının tespiti, sınıflandırılması ve çözüm önerilerinin oluşturulmasına yönelik yapay zeka destekli bir sistem.",

        orderDescription:
            "Üniversite kampüslerinde yemek sipariş süreçlerini kolaylaştırmak amacıyla geliştirilen web tabanlı uygulama.",

        ufuktanDescription:
            "Havacılık alanında drone görüntülerinden yararlanarak yapay zeka tabanlı çözümler geliştirmeyi amaçlayan proje.",

        experienceTitle: "Deneyim",

        internship:
            "Software Engineering Intern",

        vakifDescription:
            "Kurumsal yazılım geliştirme süreçlerinde, Agile çalışma ortamında ve uygulama geliştirme faaliyetlerinde görev aldım.",

        educationTitle: "Eğitim",

        softwareEngineering:
            "Yazılım Mühendisliği",

        contactEyebrow: "LET'S CONNECT",

        contactTitle:
            "Birlikte bir şeyler geliştirelim.",

        contactText:
            "Yeni projeler, iş fırsatları veya teknoloji hakkında konuşmak için benimle iletişime geçebilirsiniz.",

        footerText:
            "Designed & Built with HTML, CSS & JavaScript."
    },


    en: {

        navAbout: "About",
        navSkills: "Skills",
        navProjects: "Projects",
        navExperience: "Experience",
        navEducation: "Education",
        navContact: "Contact",

        heroEyebrow: "SOFTWARE ENGINEER",
        heroTitle: "Software Engineer",

        heroDescription:
            "I build meaningful and scalable solutions in software development, artificial intelligence and cybersecurity.",

        viewProjects: "View My Projects",

        aboutTitle: "About Me",

        aboutText1:
            "I am a Software Engineering graduate with a strong interest in software development, artificial intelligence and cybersecurity.",

        aboutText2:
            "I enjoy building practical solutions to real-world problems and continuously improving my technical skills.",

        gpa: "GPA / 4.00",
        projectsStat: "Projects",
        focusStat: "Focus Area",

        skillsTitle: "Technical Skills",
        languages: "Programming Languages",
        areas: "Areas of Interest",

        projectsTitle: "Featured Projects",

        firstsecDescription:
            "An AI-supported system designed to detect and classify software vulnerabilities and generate potential solutions.",

        orderDescription:
            "A web-based application developed to simplify food ordering processes across university campuses.",

        ufuktanDescription:
            "An AI-based project focused on developing solutions for aviation applications using drone imagery.",

        experienceTitle: "Experience",

        internship:
            "Software Engineering Intern",

        vakifDescription:
            "Worked on enterprise software development processes, Agile workflows and application development activities.",

        educationTitle: "Education",

        softwareEngineering:
            "Software Engineering",

        contactEyebrow: "LET'S CONNECT",

        contactTitle:
            "Let's build something meaningful.",

        contactText:
            "Feel free to reach out about new projects, opportunities or technology.",

        footerText:
            "Designed & Built with HTML, CSS & JavaScript."
    }
};


const languageToggle = document.getElementById("languageToggle");

let currentLanguage =
    localStorage.getItem("language") || "tr";


function updateLanguage(language) {

    currentLanguage = language;

    localStorage.setItem("language", language);

    document.documentElement.lang = language;

    document
        .querySelectorAll("[data-i18n]")
        .forEach(element => {

            const key = element.getAttribute("data-i18n");

            if (translations[language][key]) {

                element.textContent =
                    translations[language][key];
            }

        });


    languageToggle.textContent =
        language === "tr" ? "EN" : "TR";
}


languageToggle.addEventListener("click", () => {

    const newLanguage =
        currentLanguage === "tr" ? "en" : "tr";

    updateLanguage(newLanguage);

});


/* MOBILE MENU */

const menuToggle =
    document.getElementById("menuToggle");

const navLinks =
    document.getElementById("navLinks");


menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});


/* CLOSE MOBILE MENU AFTER CLICK */

document
    .querySelectorAll(".nav-links a")
    .forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("active");

        });

    });


/* INITIAL LANGUAGE */

updateLanguage(currentLanguage);
