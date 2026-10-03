/* =========================================================
   PROJETOS
   Edite esta lista para adicionar ou alterar seus projetos.
========================================================= */

const projects = [
    {
        number: "01",
        name: "PORTFÓLIO",
        description:
            "Site pessoal desenvolvido para apresentar informações, habilidades, projetos e formas de contato.",
        technologies: ["HTML", "CSS", "JAVASCRIPT"],
        link: "#"
    },

    {
        number: "02",
        name: "PROJETO WEB",
        description:
            "Projeto de desenvolvimento web criado para praticar interfaces modernas, responsivas e interativas.",
        technologies: ["HTML", "CSS", "JAVASCRIPT"],
        link: "#"
    },

    {
        number: "03",
        name: "NOVO PROJETO",
        description:
            "Espaço reservado para adicionar um novo projeto ao seu portfólio.",
        technologies: ["WEB", "CODE"],
        link: "#"
    }
];


/* =========================================================
   RENDERIZAÇÃO DOS PROJETOS
========================================================= */

const projectsContainer =
    document.getElementById("projectsContainer");


function renderProjects() {

    if (!projectsContainer) {
        return;
    }

    projectsContainer.innerHTML = "";

    projects.forEach(project => {

        const card = document.createElement("article");

        card.className = "project-card";

        card.innerHTML = `
            <div class="project-content">

                <span class="project-number">
                    PROJECT #${project.number}
                </span>

                <h3>
                    ${project.name}
                </h3>

                <p>
                    ${project.description}
                </p>

                <div class="project-tech">
                    ${project.technologies
                        .map(technology => `
                            <span>
                                ${technology}
                            </span>
                        `)
                        .join("")}
                </div>

            </div>

            <a
                href="${project.link}"
                class="project-link"
                target="_blank"
                rel="noopener noreferrer"
            >
                VER PROJETO ↗
            </a>
        `;

        projectsContainer.appendChild(card);
    });
}


renderProjects();


/* =========================================================
   MENU MOBILE
========================================================= */

const menuButton =
    document.getElementById("menuButton");

const navMenu =
    document.querySelector(".nav-menu");


if (menuButton && navMenu) {

    menuButton.addEventListener("click", () => {

        navMenu.classList.toggle("open");

    });

}


/* =========================================================
   FECHAR MENU AO CLICAR EM UM LINK
========================================================= */

const navLinks =
    document.querySelectorAll(".nav-link");


navLinks.forEach(link => {

    link.addEventListener("click", () => {

        if (navMenu) {
            navMenu.classList.remove("open");
        }

    });

});


/* =========================================================
   LINK ATIVO DA NAVBAR
========================================================= */

const sections =
    document.querySelectorAll("section");

const navigationLinks =
    document.querySelectorAll(".nav-link");


const navigationObserver =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (!entry.isIntersecting) {
                    return;
                }

                const sectionId =
                    entry.target.getAttribute("id");

                navigationLinks.forEach(link => {

                    link.classList.remove("active");

                    if (
                        link.getAttribute("href") ===
                        `#${sectionId}`
                    ) {
                        link.classList.add("active");
                    }

                });

            });

        },
        {
            threshold: 0.35
        }
    );


sections.forEach(section => {
    navigationObserver.observe(section);
});


/* =========================================================
   ANIMAÇÃO DAS SKILLS
========================================================= */

const skillsSection =
    document.querySelector("#habilidades");

const skillBars =
    document.querySelectorAll(".skill-progress");

let skillsAnimated = false;


const skillsObserver =
    new IntersectionObserver(
        entries => {

            const section = entries[0];

            if (
                !section.isIntersecting ||
                skillsAnimated
            ) {
                return;
            }

            skillsAnimated = true;

            skillBars.forEach((bar, index) => {

                const progress =
                    bar.dataset.progress;

                setTimeout(() => {

                    bar.style.width =
                        `${progress}%`;

                }, index * 100 + 150);

            });

        },
        {
            threshold: 0.3
        }
    );


if (skillsSection) {
    skillsObserver.observe(skillsSection);
}


/* =========================================================
   ANO AUTOMÁTICO DO FOOTER
========================================================= */

const year =
    document.getElementById("year");


if (year) {

    year.textContent =
        new Date().getFullYear();

}


/* =========================================================
   EFEITO DOS BOTÕES
========================================================= */

const buttons =
    document.querySelectorAll(".button");


buttons.forEach(button => {

    button.addEventListener("mouseenter", () => {

        button.style.transition =
            "transform 0.2s ease, box-shadow 0.2s ease";

    });

});


/* =========================================================
   MOVIMENTO SUTIL DO HERO
========================================================= */

const hero =
    document.querySelector(".hero");

const heroVisual =
    document.querySelector(".hero-visual");


if (hero && heroVisual) {

    hero.addEventListener("mousemove", event => {

        const rect =
            hero.getBoundingClientRect();

        const mouseX =
            event.clientX - rect.left;

        const mouseY =
            event.clientY - rect.top;

        const moveX =
            (mouseX / rect.width - 0.5) * 10;

        const moveY =
            (mouseY / rect.height - 0.5) * 10;

        heroVisual.style.transform =
            `translate(${moveX}px, ${moveY}px)`;

    });


    hero.addEventListener("mouseleave", () => {

        heroVisual.style.transform =
            "translate(0, 0)";

    });

}


/* =========================================================
   REVEAL DAS SEÇÕES
========================================================= */

const revealElements =
    document.querySelectorAll(
        `
        .section-heading,
        .about-grid,
        .skill-card,
        .project-card,
        .contact-box
        `
    );


revealElements.forEach(element => {

    element.style.opacity = "0";

    element.style.transform =
        "translateY(30px)";

    element.style.transition =
        "opacity 0.7s ease, transform 0.7s ease";

});


/* =========================================================
   OBSERVER DO REVEAL
========================================================= */

const revealObserver =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (!entry.isIntersecting) {
                    return;
                }

                entry.target.style.opacity = "1";

                entry.target.style.transform =
                    "translateY(0)";

                revealObserver.unobserve(
                    entry.target
                );

            });

        },
        {
            threshold: 0.1
        }
    );


revealElements.forEach(element => {

    revealObserver.observe(element);

});
