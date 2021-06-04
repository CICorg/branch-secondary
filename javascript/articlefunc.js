/* References of articles heads */

let articleHead01 = document.getElementById('articleHead_01');
let articleHead02 = document.getElementById('articleHead_02');
let articleHead03 = document.getElementById('articleHead_03');
let articleHead04 = document.getElementById('articleHead_04');
let articleHead05 = document.getElementById('articleHead_05');

/* References of articles bodys */

let articleBody01 = document.getElementById('articleBody_01');
let articleBody02 = document.getElementById('articleBody_02');
let articleBody03 = document.getElementById('articleBody_03');
let articleBody04 = document.getElementById('articleBody_04');
let articleBody05 = document.getElementById('articleBody_05');

/* Filtered Article refer objects*/

let article01 = {
  head: 'What is HTML sementic?',
  body: 'Semantic HTML is the use of HTML markup to reinforce the semantics, or meaning, of the information in webpages and web applications rather than merely to define its presentation or look. Semantic HTML is processed by traditional web browsers as well as by many other user agents.',
}
let article02 = {
  head: 'What is HTML?',
  body: 'Web browsers receive HTML documents from a web server or from local storage and render the documents into multimedia web pages. HTML describes the structure of a web page semantically and originally included cues for the appearance of the document.'
}
let article03 = {
  head: 'What is HTML?',
  body: 'Web browsers receive HTML documents from a web server or from local storage and render the documents into multimedia web pages. HTML describes the structure of a web page semantically and originally included cues for the appearance of the document.'
}
let article04 = {
  head: 'What is HTML?',
  body: 'Web browsers receive HTML documents from a web server or from local storage and render the documents into multimedia web pages. HTML describes the structure of a web page semantically and originally included cues for the appearance of the document.'
}
let article05 = {
  head: 'What is HTML?',
  body: 'Web browsers receive HTML documents from a web server or from local storage and render the documents into multimedia web pages. HTML describes the structure of a web page semantically and originally included cues for the appearance of the document.'
}

/* Putting value on Articles*/
// Article 1 
articleHead01.innerHTML = article01.head;
articleBody01.innerHTML = article01.body;



// copy codef
