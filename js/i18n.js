const texts = {
  en: {
    name: "Felipe Cardoso Vargas",
    description: "Backend Developer",
    aboutTitle: "About Me",
    aboutQuote: "“First learn the form, then break the form, and finally move away from the form.” – Mazu",
    aboutParagraphs: [
      "This Japanese philosophy perfectly defines my approach to backend development. It's not just about coding; it's about <strong>mastering the fundamentals</strong>, experimenting with confidence, and ultimately, <strong>creating solutions that transcend the conventional</strong>. My passion lies in understanding the 'why' and 'how' behind every technology, especially within the Java ecosystem.",
      "My journey as a backend developer is deeply rooted in <strong>Java</strong>. For me, simply using a framework isn't enough; it's crucial to understand what happens behind the scenes. This means diving deep, from the <strong>compilation process</strong>—grasping how Java source code (.java) is transformed into <strong>bytecode</strong>—to the inner workings of the <strong>JVM (Java Virtual Machine)</strong> and its optimizations for high-level projects. Unraveling the JVM is like uncovering the soul of a Java application: how it manages memory, threads, and optimizes code execution.",
      "[IMAGE_PLACEHOLDER]", // Aqui a imagem será inserida
      "In my day-to-day work, <strong>Spring Boot</strong> is an indispensable tool. It greatly simplifies Java application development, allowing me to focus on business logic. However, my curiosity pushes me beyond the surface. I strive to thoroughly understand <strong>dependency injection mechanisms</strong>, how Spring manages object lifecycles, and the configurations that build a robust and scalable system. This deep curiosity empowers me to use Spring Boot more efficiently, writing code that not only works but is also optimized and maintainable.",
      "My commitment to daily learning aligns with the Japanese concept of <strong>Kaizen (改善)</strong>, continuous improvement. Every line of code I write, every architecture I propose, aims for clarity and purpose. This is reflected in my approach to both distributed and monolithic systems. While <strong>microservices</strong> offer flexibility and scalability, I know that a <strong>well-architected monolith</strong> can be incredibly performant and easy to manage. The secret lies in applying solid design principles and <strong>Lean Thinking</strong>, eliminating waste and focusing on what truly matters to deliver value.",
      "Currently, as a trainee at IFSul (Sapiranga campus), I'm honing my skills in Java, React, and system architecture. This learning prepares me for future specializations in <strong>high-level compilation</strong> and <strong>performance optimization</strong>—areas that truly fascinate me and where I intend to build truly efficient software.",
      "For me, true mastery comes from discipline and the constant repetition of fundamentals. Just as a Japanese artisan refines their craft, I seek to understand these fundamentals and apply them with expertise. When I make mistakes, I practice <strong>Hansei (反省)</strong>, a constructive self-reflection that drives me to learn, correct, and evolve.",
      "My journey is like that of a bonsai: it demands patience, depth, and an unwavering commitment to continuous learning. Because, in the end, my greatest skill won't just be knowing dozens of technologies, but rather mastering myself, with <strong>purpose, principles, and solid foundations</strong>."
    ],
    experienceTitle: "Experience",
    experienceItems: [
      {
        jobTitle: "Freelance Web Developer",
        jobInfo: "Self-Employed · Part-time · Jan 2025 – Present · Remote",
        description: "Backend developer passionate about automation and scalable systems. Started my journey using no-code/low-code tools like Framer and Elementor, and evolved into full-stack freelance development with Java, Spring Boot, Git, and Docker. Currently exploring Kubernetes and cloud-native applications. Always learning, always building.",
        skillsLabel: "Skills:",
        skills: "Java · Spring Boot · Git · Docker · Cloud Computing",
        linkText: null
      },
      {
        jobTitle: "Full-Stack Trainee Developer",
        jobInfo: "3035 Tech Program · Jan 2025 – Jun 2025 · Remote",
        description: "Selected for the 3035 Tech Program, a 6-month intensive full-stack training designed to prepare developers for real-world commercial projects. Gained practical experience with CRUD systems, Java, PostgreSQL, Spring Boot, React, and Agile methodologies. Focused on software architecture, team organization, Kanban/Scrum workflows, and delivering production-ready applications.",
        skillsLabel: "Skills:",
        skills: "Java · Spring Boot · PostgreSQL · React · Agile · Scrum · Software Architecture · Team Collaboration",
        linkText: null
      },
      {
        jobTitle: "Technical Informatics Student",
        jobInfo: "IFSul – Sapiranga Campus · Mar 2022 – Dez 2025 (Expected) · Sapiranga, RS, Brazil",
        description: "Enrolled in an intensive technical high school program fully dedicated to software development. Built strong foundations in programming with Java, PHP, and Python, as well as web development, database management, and networks. The course emphasizes real-world problem-solving and prepares students for both professional and academic paths in technology.",
        skillsLabel: "Skills:",
        skills: "Java · PHP · Python · HTML · CSS · JavaScript · MySQL · Software Development",
        linkText: "Read more about the program →",
        linkHref: "https://www.sapiranga.ifsul.edu.br/tecnico/tec-informatica"
      },
      {
        jobTitle: "Administrative Intern",
        jobInfo: "City Hall of Sapiranga · Part-time · Jan 2024 – Dec 2024 · Sapiranga, RS, Brazil",
        description: "As an intern, I streamlined administrative workflows by developing advanced Excel tools, turning hours-long manual tasks into instant processes. Strengthened my problem-solving, communication, and teamwork skills while contributing to the public sector's efficiency.",
        skillsLabel: "Skills:",
        skills: "Excel Automation · Problem Solving · Teamwork · Communication",
        linkText: null
      }
    ],
    languageLabel: "Idioma / Language:",
    githubLabel: "GitHub",
    linkedinLabel: "LinkedIn",
    resumeLabel: "Resume",
    projectsTitle: "Projects",
    rpgProjectTitle: "Java RPG Challenge",
    rpgProjectDescription: "A text-based RPG developed as a technical challenge within the 3035 Tech Program. This project extensively utilizes Java features such as record classes and the Firewall Street library to create an engaging and interactive role-playing experience. It showcases my ability to apply core Java concepts to build complex applications.",
    rickAndMortyTitle: "Rick and Morty API Consumer",
    rickAndMortyDescription: "A web page built with React that consumes the public Rick and Morty API. This project demonstrates my front-end skills in fetching and displaying data from external APIs, creating a dynamic and interactive user interface.",
    studentClubTitle: "Student Club Management System",
    studentClubDescription: "A comprehensive Java project developed as a module challenge within the 3035 Tech Program. This system allows for the complete CRUD (Create, Read, Update, Delete) operations for students and courses, managing the relationships between them. It includes functionalities for generating reports and utilizes a basic HTML interface to demonstrate its working functionalities alongside the fully functional backend.",
    challengesTitle: "Technical Challenges",
    btgPactualChallengeTitle: "BTG Pactual Java Challenge",
    btgPactualChallengeDescription: "Participated in a technical challenge by BTG Pactual that involved building a robust and efficient solution for a specific problem using Java. This experience honed my problem-solving skills and my ability to develop high-quality, production-ready code under challenging conditions."
  },
  pt: {
    name: "Felipe Cardoso Vargas",
    description: "Desenvolvedor Backend",
    aboutTitle: "Sobre Mim",
    aboutQuote: "“Primeiro aprenda a forma, depois quebre a forma, e finalmente se afaste da forma.” – Mazu",
    aboutParagraphs: [
      "Essa filosofia japonesa define perfeitamente minha abordagem ao desenvolvimento backend. Não é apenas sobre codificar; é sobre <strong>dominar os fundamentos</strong>, experimentar com confiança, e, por fim, <strong>criar soluções que transcendem o convencional</strong>. Minha paixão é entender o 'porquê' e o 'como' de cada tecnologia, especialmente no universo Java.",
      "Minha jornada como desenvolvedor backend é profundamente enraizada em <strong>Java</strong>. Para mim, não basta apenas usar um framework; é crucial entender o que acontece nos bastidores. Isso significa mergulhar desde o <strong>processo de compilação</strong>, compreendendo como o código-fonte Java (.java) é transformado em <strong>bytecode</strong>, até o funcionamento interno da <strong>JVM (Java Virtual Machine)</strong> e de otimizações para projetos de alto nível. Desvendar a JVM é desvendar a alma de uma aplicação Java: como ela gerencia memória, threads, e otimiza a execução do seu código.",
      "[IMAGE_PLACEHOLDER]", // Aqui a imagem será inserida
      "No dia a dia, o <strong>Spring Boot</strong> é uma ferramenta indispensável. Ele simplifica enormemente o desenvolvimento de aplicações Java, permitindo que eu me concentre na lógica de negócio. No entanto, minha curiosidade me leva além da superfície. Eu busco entender a fundo os <strong>mecanismos de injeção de dependências</strong>, como o Spring gerencia o ciclo de vida dos objetos e as configurações que tornam um sistema robusto e escalável. Essa curiosidade me capacita a usar o Spring Boot de forma mais eficiente, escrevendo código que não apenas funciona, mas que é otimizado e manutenível.",
      "Meu compromisso com o aprendizado diário se alinha ao conceito japonês de <strong>Kaizen (改善)</strong>, a melhoria contínua. Cada linha de código que escrevo, cada arquitetura que proponho, visa clareza e propósito. Isso se reflete na minha abordagem a sistemas distribuídos e monolíticos. Embora os <strong>microsserviços</strong> ofereçam flexibilidade e escalabilidade, sei que um <strong>monolito bem arquitetado</strong> pode ser incrivelmente performático e fácil de gerenciar. O segredo está em aplicar princípios sólidos de design e <strong>Lean Thinking</strong>, eliminando desperdícios e focando no que realmente importa para entregar valor.",
      "Atualmente, como trainee no IFSul (campus Sapiranga), estou aprimorando minhas habilidades em Java, React e arquitetura de sistemas. Esse aprendizado me prepara para futuras especializações em <strong>compilação de alto nível</strong> e <strong>otimização de performance</strong>—áreas que me fascinam e onde pretendo construir software verdadeiramente eficiente.",
      "Para mim, o domínio verdadeiro vem da disciplina e da repetição constante dos fundamentos. Assim como um artesão japonês aprimora sua arte, busco entender os fundamentos e aplicá-los com maestria. Quando cometo erros, pratico o <strong>Hansei (反省)</strong>, uma autocrítica construtiva que me impulsiona a refletir, corrigir e evoluir.",
      "Minha jornada é como a de um bonsai: exige paciência, profundidade e um compromisso inabalável com o aprendizado constante. Porque, no fim, minha maior habilidade não será apenas conhecer dezenas de tecnologias, mas dominar a mim mesmo, com <strong>propósito, princípios e fundamentos sólidos</strong>."
    ],
    experienceTitle: "Experiência",
    experienceItems: [
      {
        jobTitle: "Desenvolvedor Web Freelancer",
        jobInfo: "Autônomo · Meio período · Jan 2025 – Presente · Remoto",
        description: "Desenvolvedor back-end apaixonado por automação e sistemas escaláveis. Comecei minha jornada utilizando ferramentas no-code/low-code como Framer e Elementor, e evoluí para o desenvolvimento full-stack freelancer com Java, Spring Boot, Git e Docker. Atualmente, estou explorando Kubernetes e aplicações cloud-native. Sempre aprendendo, sempre construindo.",
        skillsLabel: "Habilidades:",
        skills: "Java · Spring Boot · Git · Docker · Computação em Nuvem",
        linkText: null
      },
      {
        jobTitle: "Trainee Desenvolvedor Full-Stack",
        jobInfo: "Programa 3035 Tech · Jan 2025 – Jun 2025 · Remoto",
        description: "Selecionado para o Programa 3035 Tech, um treinamento intensivo full-stack de 6 meses projetado para preparar desenvolvedores para projetos comerciais reais. Ganhei experiência prática com sistemas CRUD, Java, PostgreSQL, Spring Boot, React e metodologias ágeis. Focado em arquitetura de software, organização de equipe, fluxos de trabalho Kanban/Scrum e entrega de aplicações prontas para produção.",
        skillsLabel: "Habilidades:",
        skills: "Java · Spring Boot · PostgreSQL · React · Ágil · Scrum · Arquitetura de Software · Colaboração em Equipe",
        linkText: null
      },
      {
        jobTitle: "Estudante Técnico em Informática",
        jobInfo: "IFSul – Campus Sapiranga · Mar 2022 – Dez 2025 (Previsto) · Sapiranga, RS, Brasil",
        description: "Matriculado em um programa intensivo de ensino médio técnico totalmente dedicado ao desenvolvimento de software. Construí fortes bases em programação com Java, PHP e Python, bem como desenvolvimento web, gerenciamento de banco de dados e redes. O curso enfatiza a resolução de problemas do mundo real e prepara os alunos para caminhos profissionais e acadêmicos em tecnologia.",
        skillsLabel: "Habilidades:",
        skills: "Java · PHP · Python · HTML · CSS · JavaScript · MySQL · Desenvolvimento de Software",
        linkText: "Leia mais sobre o programa →",
        linkHref: "https://www.sapiranga.ifsul.edu.br/tecnico/tec-informatica"
      },
      {
        jobTitle: "Estagiário Administrativo",
        jobInfo: "Prefeitura Municipal de Sapiranga · Meio período · Jan 2024 – Dez 2024 · Sapiranga, RS, Brasil",
        description: "Como estagiário, otimizei fluxos de trabalho administrativos desenvolvendo ferramentas avançadas em Excel, transformando tarefas manuais de horas em processos instantâneos. Fortaleci minhas habilidades de resolução de problemas, comunicação e trabalho em equipe, enquanto contribuía para a eficiência do setor público.",
        skillsLabel: "Habilidades:",
        skills: "Automação em Excel · Resolução de Problemas · Trabalho em Equipe · Comunicação",
        linkText: null
      }
    ],
    languageLabel: "Idioma / Language:",
    githubLabel: "GitHub",
    linkedinLabel: "LinkedIn",
    resumeLabel: "Currículo",
    projectsTitle: "Projetos",
    rpgProjectTitle: "Desafio RPG em Java",
    rpgProjectDescription: "Um RPG baseado em texto desenvolvido como um desafio técnico dentro do Programa 3035 Tech. Este projeto utiliza extensivamente recursos do Java, como classes record e a biblioteca Firewall Street, para criar uma experiência de RPG envolvente e interativa. Demonstra minha capacidade de aplicar conceitos essenciais de Java para construir aplicações complexas.",
    rickAndMortyTitle: "Consumidor da API Rick and Morty",
    rickAndMortyDescription: "Uma página web construída com React que consome a API pública de Rick and Morty. Este projeto demonstra minhas habilidades de front-end na busca e exibição de dados de APIs externas, criando uma interface de usuário dinâmica e interativa.",
    studentClubTitle: "Sistema de Gerenciamento de Clube de Estudantes",
    studentClubDescription: "A comprehensive Java project developed as a module challenge within the 3035 Tech Program. This system allows for the complete CRUD (Create, Read, Update, Delete) operations for students and courses, managing the relationships between them. It includes functionalities for generating reports and utilizes a basic HTML interface to demonstrate its working functionalities alongside the fully functional backend.",
    challengesTitle: "Desafios Técnicos",
    btgPactualChallengeTitle: "Desafio Java BTG Pactual",
    btgPactualChallengeDescription: "Participei de um desafio técnico do BTG Pactual que envolveu a construção de uma solução robusta e eficiente para um problema específico usando Java. Essa experiência aprimorou minhas habilidades de resolução de problemas e minha capacidade de desenvolver código de alta qualidade, pronto para produção, em condições desafiadoras."
  }
};

/**
 * Updates the text content of elements based on the selected language.
 * @param {string} lang The language code (e.g., 'en' or 'pt').
 */
function updateTexts(lang) {
    const currentText = texts[lang];

    // Update header section
    document.getElementById('name').textContent = currentText.name;
    document.getElementById('description').textContent = currentText.description;
    document.getElementById('language-label').textContent = currentText.languageLabel;

    // Update social links text (if you want to display the label text next to icons)
    document.getElementById('github-label').textContent = currentText.githubLabel;
    document.getElementById('linkedin-label').textContent = currentText.linkedinLabel;
    document.getElementById('resume-label').textContent = currentText.resumeLabel;

    // Update "About Me" section
    document.getElementById('about-title').textContent = currentText.aboutTitle;
    document.getElementById('about-quote').textContent = currentText.aboutQuote;

    const aboutParagraphsContainer = document.getElementById('about-paragraphs');
    aboutParagraphsContainer.innerHTML = ''; // Clear existing paragraphs
    currentText.aboutParagraphs.forEach(paragraph => {
        if (paragraph === "[IMAGE_PLACEHOLDER]") {
            const imgContainer = document.createElement('div');
            imgContainer.classList.add('about-image-inline-container');
            const img = document.createElement('img');
            img.src = "assets/img.png";
            img.alt = "Vista serena de montanha com céu claro";
            imgContainer.appendChild(img);
            aboutParagraphsContainer.appendChild(imgContainer);
        } else {
            const p = document.createElement('p');
            p.innerHTML = paragraph;
            aboutParagraphsContainer.appendChild(p);
        }
    });

    // Update "Experience" section
    document.getElementById('experience-title').textContent = currentText.experienceTitle;
    const experienceItemsContainer = document.getElementById('experience-items');
    experienceItemsContainer.innerHTML = ''; // Clear existing items

    currentText.experienceItems.forEach(item => {
        const div = document.createElement('div');
        div.classList.add('experience-item');

        const jobTitle = document.createElement('h2'); // Changed to h2 based on HTML structure
        jobTitle.classList.add('experience-job-title');
        jobTitle.textContent = item.jobTitle;
        div.appendChild(jobTitle);

        const jobInfo = document.createElement('p');
        jobInfo.classList.add('experience-job-info');
        jobInfo.textContent = item.jobInfo;
        div.appendChild(jobInfo);

        const description = document.createElement('p');
        description.classList.add('experience-description');
        description.textContent = item.description;
        div.appendChild(description);

        const skillsP = document.createElement('p');
        skillsP.classList.add('experience-skills');
        const skillsSpan = document.createElement('span');
        skillsSpan.classList.add('bold-text');
        skillsSpan.textContent = item.skillsLabel;
        skillsP.appendChild(skillsSpan);
        skillsP.append(` ${item.skills}`); // Use append to add text node directly
        div.appendChild(skillsP);

        if (item.linkText && item.linkHref) { // Check for both text and href
            const linkP = document.createElement('p');
            linkP.classList.add('experience-link');
            const link = document.createElement('a');
            link.href = item.linkHref;
            link.target = "_blank";
            link.rel = "noopener noreferrer";
            link.textContent = item.linkText;
            linkP.appendChild(link);
            div.appendChild(linkP);
        }

        experienceItemsContainer.appendChild(div);
    });

    // Update "Projects" section
    document.getElementById('projects-title').textContent = currentText.projectsTitle;
    document.getElementById('rpg-project-title').textContent = currentText.rpgProjectTitle;
    document.getElementById('rpg-project-description').textContent = currentText.rpgProjectDescription;
    document.getElementById('rick-and-morty-title').textContent = currentText.rickAndMortyTitle;
    document.getElementById('rick-and-morty-description').textContent = currentText.rickAndMortyDescription;
    document.getElementById('student-club-title').textContent = currentText.studentClubTitle;
    document.getElementById('student-club-description').textContent = currentText.studentClubDescription;

    // Update "Technical Challenges" section
    document.getElementById('challenges-title').textContent = currentText.challengesTitle;
    document.getElementById('btg-pactual-challenge-title').textContent = currentText.btgPactualChallengeTitle;
    document.getElementById('btg-pactual-challenge-description').textContent = currentText.btgPactualChallengeDescription;
}

document.addEventListener('DOMContentLoaded', () => {
    const languageSelect = document.getElementById('languageSelect');
    if (languageSelect) {
        // Set initial language based on the HTML's lang attribute or default to 'en'
        const initialLang = document.documentElement.lang || 'en';
        languageSelect.value = initialLang; // Ensure dropdown reflects initial HTML language

        languageSelect.addEventListener('change', () => {
            const selectedLang = languageSelect.value;
            document.documentElement.lang = selectedLang; // Update HTML lang attribute
            updateTexts(selectedLang);
        });

        // Initialize texts based on the currently selected language
        updateTexts(initialLang);
    } else {
        console.error("Element with ID 'languageSelect' not found.");
    }
});