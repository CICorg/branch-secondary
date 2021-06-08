// DOM References
let articleHeader = document.getElementById('ArticleHeader');
let articleUpdate = document.getElementById('ArticleUpdate');
let articleParagraph = document.getElementById('ArticlePara');
let relatedImg = document.getElementById('article-img');
let liHeader = document.getElementById('li-header');


// Value Putting
articleHeader.innerHTML = "Bootstrap responsive web layout";
articleUpdate.innerHTML = "Last Updated : 22 Mar, 2021";
articleParagraph.innerHTML = "Bootstrap is a free and open-source tool collection for creating responsive websites and web applications. It is the most popular HTML, CSS, and JavaScript framework for developing responsive, mobile-first websites. therefore now we create basic (simplistic) Bootstrap layout.";
liHeader.innerHTML = "Why we use Bootstrap?";
relatedImg.src = "../media/M.png";







// function 
function showcode() {
  var x = document.getElementById("layoutCode");
  if (x.style.display == "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}