// alert("This is the Authentication screen")

const form = document.querySelector(".auth-container__form");
const gravatar = document.getElementById("gravatar");
const authContainer = document.querySelector(".auth-container");
const gitContainer = document.querySelector(".git-container");
const repositories = document.getElementById("repositories");



// Function to get the gravater image
const getGravatarURL = (email) => {
  const address = String(email).trim().toLowerCase();
  const hash = md5(address);

  return `https://www.gravatar.com/avatar/${hash}`;
};

// function to Fetch GitHub repositories associated with the email address of the user
const fetchRepo = async (github) => {
  try {
    const response = await fetch(
      `https://api.github.com/users/${github}/repos`
    );
    const result = await response?.json();
    console.log(result);
    // append the repositories to the repositories container
    if (result.length > 0) {
      const repositoriesList = document.createElement("ul");
      result.forEach((repo) => {
        const repositoryItem = document.createElement("li");
        const anchorTag = document.createElement("a");

        anchorTag.textContent = repo.name;
        anchorTag.href = repo.clone_url;
        anchorTag.target = "_blank";
        repositoryItem.appendChild(anchorTag);
        repositoriesList.appendChild(repositoryItem);
      });
      document.getElementById("found").style.display = "block";
      const user2 = document.getElementById("user2");
      const number = document.getElementById("number");
      user2.textContent = ` "${github}" `;
      number.textContent = ` "${result.length}" `;
      repositories.appendChild(repositoriesList);
    } else {
      document.getElementById("notfound").style.display = "block";
      const user = document.getElementById("user");
      user.textContent = ` "${github}" `;
    }
  } catch (error) {
    console.error(error);
    repositories.textContent = "Error fetching repositories.";
  }
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const github = document.getElementById("github").value;

  getGravatarURL(email);
  fetchRepo(github);
  localStorage.setItem("avatar", getGravatarURL(email));
  gravatar.src = getGravatarURL(email);
  authContainer.style.display = "none";
  gitContainer.style.display = "flex";
});
