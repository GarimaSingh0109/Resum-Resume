const ownerName = "GarimaSingh0109";
const repoName = "Resum-Resume";
const apiURL = `https://api.github.com/repos/${ownerName}/${repoName}/contributors`;

fetch(apiURL)
    .then((response) => response.json())
    .then((contributors) => {
        const teamMembersDiv = document.querySelector(".team-members");
        contributors.forEach((contributor) => {
            const contributorDiv = document.createElement("div");
            contributorDiv.classList.add("team-member");

            const boxPanelSection = document.createElement("section");
            boxPanelSection.classList.add("box-panel");
            const widgetContainer = document.createElement("div");
            widgetContainer.classList.add("widget-container");
            const flipBox = document.createElement("div");
            flipBox.classList.add("flip-box", "common-flip-style");
            const boxFront = document.createElement("div");
            boxFront.classList.add("box-front", "common-box-style");
            const boxContentWrapperFront = document.createElement("div");
            boxContentWrapperFront.classList.add("box-content-wrapper");
            const contributorImageFront = document.createElement("img");
            contributorImageFront.src = contributor.avatar_url;
            contributorImageFront.alt = contributor.login;
            boxContentWrapperFront.appendChild(contributorImageFront);
            boxFront.appendChild(boxContentWrapperFront);

            const boxBack = document.createElement("div");
            boxBack.classList.add("box-back", "common-box-style", "box-bgi-effect");
            const boxContentWrapperBack = document.createElement("div");
            boxContentWrapperBack.classList.add("box-content-wrapper");
            const boxContentBack = document.createElement("div");
            boxContentBack.classList.add("box-content");
            const contributorNameBack = document.createElement("h1");
            contributorNameBack.textContent = "Hello there!";
            const contributorRoleBack = document.createElement("h1");
            contributorRoleBack.innerHTML = `I am the <strong>${contributor.login}</strong>.`;
            const contributorCommitsBack = document.createElement("h1");
            contributorCommitsBack.textContent = `Commits: ${contributor.contributions}`;
            boxContentBack.appendChild(contributorNameBack);
            boxContentBack.appendChild(contributorRoleBack);
            boxContentBack.appendChild(contributorCommitsBack);
            boxContentWrapperBack.appendChild(boxContentBack);
            boxBack.appendChild(boxContentWrapperBack);

            flipBox.appendChild(boxFront);
            flipBox.appendChild(boxBack);
            widgetContainer.appendChild(flipBox);
            boxPanelSection.appendChild(widgetContainer);
            contributorDiv.appendChild(boxPanelSection);

            const contributorLink = document.createElement("a");
            contributorLink.href = contributor.html_url;
            contributorLink.target = "_blank";

            const contributorName = document.createElement("p");
            contributorName.textContent = contributor.login;

            const contributorRole = document.createElement("p");
            contributorRole.textContent = "Commits: " + contributor.contributions;

            contributorDiv.appendChild(contributorLink);
            teamMembersDiv.appendChild(contributorDiv);
        });
    })
    .catch((error) => {
        console.error("Error fetching contributors:", error);
    });


    