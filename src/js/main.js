class Githubrepos {
  title;
  link;
  date;
  keyWords;
  constructor(title, link, date, keyWords) {
    this.title = title;
    this.link = link;
    this.date = date;
    this.keyWords = keyWords;
  }
}

function myGitRepo() {
  let imitateWebsite = new Githubrepos(
    "html_css_uppgift",
    "https://github.com/miravit/html_css_uppgift",
    "07/10/2022",
    "html,scss,css"
  );
  let fakeProject = new Githubrepos(
    "FakeUppgift",
    "fakelänk",
    "datum",
    "fakekeywords"
  );
  let fakeProjectTwo = new Githubrepos(
    "FakeUppgift2",
    "fakelänk2",
    "datum22",
    "fakekeywords2"
  );
  let gitlistUl = document.createElement("ul");
  gitlistUl.className = "gitlistul";

  //vill skapa något sen som kan pusha in variabeln i min lista
  let allGitRepos = [imitateWebsite, fakeProject, fakeProjectTwo];
  for (i = 0; i < allGitRepos.length; i++) {
    console.log(allGitRepos[i]);
    console.log(allGitRepos[i].title);

    let projektArticle = document.getElementById("projectcontainer");
    projektArticle.appendChild(gitlistUl);
    let gitList = document.createElement("li");
    gitList.className = "gitlist";
    gitlistUl.appendChild(gitList);

    gitList.innerHTML += " " + allGitRepos[i].title;
    gitList.innerHTML += " " + allGitRepos[i].link;
    gitList.innerHTML += " " + allGitRepos[i].date;
    gitList.innerHTML += " " + allGitRepos[i].keyWords;
  }
}

myGitRepo();
