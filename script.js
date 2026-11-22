```javascript
const projects = [

    {
        name: "Minecraft LCE",
        description: "Proyecto basado en Minecraft Legacy Console Edition.",
        image: "images/minecraft.png",
        github: "https://github.com/TU-USUARIO/MinecraftLCE",
        technologies: ["C++", "PS3", "OpenGL"]
    },

    {
        name: "Super Meat Boy Reconstructed",
        description: "Reconstrucción experimental del motor de Super Meat Boy.",
        image: "images/supermeatboy.png",
        github: "https://github.com/nasheos/SuperMeatBoyReconstructed",
        technologies: ["C++", "Direct3D 9", "Windows"]
    },

    {
        name: "Banana GC",
        description: "Proyecto de emulación de GameCube para PlayStation 3.",
        image: "images/bananagc.png",
        github: "https://github.com/TU-USUARIO/BananaGC",
        technologies: ["C++", "PS3", "PSL1GHT"]
    },

    {
        name: "Nashe Browser",
        description: "Navegador web experimental desarrollado con C#.",
        image: "images/browser.png",
        github: "https://github.com/TU-USUARIO/NasheBrowser",
        technologies: ["C#", ".NET", "WinForms"]
    }

];


const container = document.getElementById("projects");


projects.forEach(project => {

    const card = document.createElement("div");

    card.className = "project-card";


    card.innerHTML = `

        <img
            class="project-image"
            src="${project.image}"
            alt="${project.name}"
        >

        <div class="project-content">

            <h3>${project.name}</h3>

            <p>
                ${project.description}
            </p>

            <div class="tags">

                ${project.technologies.map(
                    technology =>
                    `<span class="tag">${technology}</span>`
                ).join("")}

            </div>

        </div>

    `;


    card.addEventListener("click", () => {

        window.open(
            project.github,
            "_blank"
        );

    });


    container.appendChild(card);

});
```
