```javascript
document.addEventListener("DOMContentLoaded", function () {

    var container = document.getElementById("projects");

    if (!container) {
        console.log("ERROR: no existe #projects");
        return;
    }

    container.innerHTML = `
        <div class="project-card">

            <div class="project-content">

                <h3>Mi primer proyecto</h3>

                <p>
                    Esta tarjeta funciona correctamente.
                </p>

                <div class="tags">
                    <span class="tag">C++</span>
                    <span class="tag">PS3</span>
                </div>

            </div>

        </div>
    `;

});
```
});
```
