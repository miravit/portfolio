import axios from "axios";
import { Github } from "./models/Github";

axios.get("https://api.github.com/users/miravit/repos").then((response) => {
  let result = response.data;
  loopGit(result);
});

function loopGit(gitRepos) {
  console.log(gitRepos);
  for (let i = 0; i < gitRepos.length; i++) {
    console.log(gitRepos[i]);
    console.log(gitRepos[i].name);

    let gitlistUl = document.createElement("ul");
    gitlistUl.className = "gitlistul";

    let projektArticle = document.getElementById("projectcontainer");
    projektArticle.appendChild(gitlistUl);
    let gitList1 = document.createElement("li");
    let gitList2 = document.createElement("li");
    let gitList3 = document.createElement("li");
    let gitList4 = document.createElement("li");

    gitList1.className = "gitlist";
    gitList2.className = "gitlist";
    gitList3.className = "gitlist";
    gitList4.className = "gitlist";

    gitlistUl.appendChild(gitList1);
    gitlistUl.appendChild(gitList2);
    gitlistUl.appendChild(gitList3);
    gitlistUl.appendChild(gitList4);

    gitList1.innerHTML += "TITLE: " + gitRepos[i].name;
    gitList2.innerHTML += "ID: " + gitRepos[i].id;
    gitList3.innerHTML += "URL: " + gitRepos[i].url;
    gitList4.innerHTML += "WATCHERS: " + gitRepos[i].watchers;
  }
}
