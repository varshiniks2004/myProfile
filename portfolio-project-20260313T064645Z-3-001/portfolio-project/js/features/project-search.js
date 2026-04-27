function searchProjects() {
    const projectsContainer = document.getElementById("projects-container");

    if (!projectsContainer) {
        console.log("Project container not found");
        return;
    }

    projectsContainer.innerHTML = "";

    projectsData.forEach(function (project) {

        // create outer card
        const card = document.createElement("div");
        card.className = "px-8 py-6 text-center bg-white rounded-3xl shadow-lg";

        // create icon box
        const iconBox = document.createElement("div");
        iconBox.className = "w-20 h-20 mx-auto mb-4 bg-green-900 rounded-2xl flex items-center justify-center";

        // create icon text
        const iconText = document.createElement("span");
        iconText.className = "text-2xl text-white font-bold";
        iconText.textContent = project.id;

        iconBox.appendChild(iconText);

        // project name
        const projectName = document.createElement("h3");
        projectName.className = "text-xl font-bold mb-2";
        projectName.textContent = project.name ;

        // project category
        const projectCategory = document.createElement("span");
        projectCategory.className = "text-sm font-semibold block mb-2";
        projectCategory.textContent = project.category;

        // project description
        const projectDescription = document.createElement("p");
        projectDescription.className = "text-sm mb-4";
        projectDescription.textContent = project.description ;

        // technologies
        const projecttechSpan = document.createElement("span");
        projecttechSpan.className = "px-3 py-1 text-xs font-bold rounded-full bg-gray-200 inline-block mr-2";
        projecttechSpan.textContent=project.techSpan


        // project status
        const projectStatus = document.createElement("span");
        projectStatus.className = "text-xs font-bold uppercase px-2 py-1 rounded bg-green-200";
        projectStatus.textContent = project.status;

        // append elements
        card.appendChild(iconBox);
        card.appendChild(projectName);
        card.appendChild(projectCategory);
        card.appendChild(projectDescription);
        card.appendChild(projecttechSpan);
        card.appendChild(projectStatus);

        projectsContainer.appendChild(card);
    });

    console.log("Projects rendered successfully");
}