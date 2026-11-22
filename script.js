const projects = [

    {
        name: "Minecraft LCE",
        description:
            "Proyecto basado en Minecraft Legacy Console Edition para experimentar con contenido y tecnología de PS3.",
        github:
            "https://github.com/nasheos/MinecraftLCE",
        image: "",
        tags: ["cpp", "ps3"],
        technologies: ["C++", "PS3"]
    },

    {
        name: "Super Meat Boy Reconstructed",
        description:
            "Proyecto de reconstrucción experimental del motor de Super Meat Boy.",
        github:
            "https://github.com/nasheos/SuperMeatBoyReconstructed",
        image: "",
        tags: ["cpp"],
        technologies: ["C++", "Direct3D 9"]
    },

    {
        name: "Banana GC",
        description:
            "Proyecto experimental relacionado con la emulación de GameCube en PlayStation 3.",
        github:
            "https://github.com/nasheos/BananaGC",
        image: "",
        tags: ["cpp", "ps3"],
        technologies: ["C++", "PS3", "PSL1GHT"]
    },

    {
        name: "Nashe Browser",
        description:
            "Navegador web experimental desarrollado con C# y .NET.",
        github:
            "https://github.com/nasheos/NasheBrowser",
        image: "",
        tags: ["csharp"],
        technologies: ["C#", ".NET", "WinForms"]
    },

    {
        name: "CNashe Studio",
        description:
            "Editor y motor experimental para crear juegos utilizando el lenguaje CNashe.",
        github:
            "https://github.com/nasheos/CNasheStudio",
        image: "",
        tags: ["csharp"],
        technologies: ["C#", "Engine"]
    },

    {
        name: "GameMaker Projects",
        description:
            "Proyectos y experimentos realizados utilizando GameMaker.",
        github:
            "https://github.com/nasheos",
        image: "",
        tags: ["gamemaker"],
        technologies: ["GameMaker", "GML"]
    }

];


const container =
    document.getElementById("projects");

const filters =
    document.querySelectorAll(".filter");


function createProject(project) {

    const card =
        document.createElement("a");

    card.className =
        "project-card";

    card.href =
        project.github;

    card.target =
        "_blank";

    card.rel =
        "noopener noreferrer";


    let imageHTML;


    if (project.image !== "") {

        imageHTML = `
            <img
                class="project-image"
                src="${project.image}"
                alt="${project.name}"
            >
        `;

    } else {

        imageHTML = `
            <div class="project-placeholder">
                ${project.name.substring(0, 2).toUpperCase()}
            </div>
        `;

    }


    card.innerHTML = `

        ${imageHTML}

        <div class="project-content">

            <h3>
                ${project.name}
            </h3>

            <p>
                ${project.description}
            </p>

            <div class="tags">

                ${project.technologies
                    .map(
                        tech =>
                        `<span class="tag">${tech}</span>`
                    )
                    .join("")}

            </div>

            <span class="github-link">
                Ver en GitHub →
            </span>

        </div>

    `;


    return card;

}


function showProjects(filter) {

    container.innerHTML = "";


    projects
        .filter(project => {

            if (filter === "all") {
                return true;
            }

            return project.tags.includes(filter);

        })
        .forEach(project => {

            container.appendChild(
                createProject(project)
            );

        });

}


filters.forEach(button => {

    button.addEventListener(
        "click",
        function () {

            filters.forEach(
                b => b.classList.remove("active")
            );

            this.classList.add("active");

            showProjects(
                this.dataset.filter
            );

        }
    );

});


showProjects("all");
