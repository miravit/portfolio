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
  let allGitRepos = [imitateWebsite, fakeProject, fakeProjectTwo];

  for (i = 0; i < allGitRepos.length; i++) {
    console.log(allGitRepos[i]);
    console.log(allGitRepos[i].title);

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

    gitList1.innerHTML += " " + allGitRepos[i].title;
    gitList2.innerHTML += " " + allGitRepos[i].link;
    gitList3.innerHTML += " " + allGitRepos[i].date;
    gitList4.innerHTML += " " + allGitRepos[i].keyWords;
  }
}

myGitRepo();
