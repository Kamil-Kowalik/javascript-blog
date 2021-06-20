'use strict';
const titleClickHandler = function(event){
  event.preventDefault();
  const clickedElement = this;

/* [DONE] remove class 'active' from all articles links */
const activeLinks = document.querySelectorAll('.titles a.active');
for(let activeLink of activeLinks){
  activeLink.classList.remove('active');
}

/* [DONE] add class 'active' to clicked element */
clickedElement.classList.add('active');

/* [DONE] remove class 'active' from all articles */
const activeArticles = document.querySelectorAll('.posts .active');
for (let activeArticle of activeArticles){
  activeArticle.classList.remove('active');
}

/* [DONE] get 'href' attribute from the clicked link */
const articleSelecetor = clickedElement.getAttribute('href');

/* [DONE] find the correct article using the selector (value of 'href') attribute */
const targetArticle = document.querySelector(articleSelecetor);

/* [DONE] add class 'active' to the correct article */
targetArticle.classList.add('active');
}

const optArticleSelector = '.post',
  optTitleSelector = '.post-title',
  optTitleListSelector = '.titles',
  optArticleTagsSelector = '.post-tags .list',
  optArticleAuthorSelector = '.post-author',
  optTagsListSelector = '.tags .list';

function generateTitleLinks(customSelector = ''){

  /* [DONE] remove contents of titleList */
  const titleList = document.querySelector(optTitleListSelector);
  titleList.innerHTML = ''

  /* [DONE] for each article */
  const articles = document.querySelectorAll(optArticleSelector + customSelector);
  console.log('to:', optArticleSelector + customSelector);

  let html = '';

  for (let article of articles){
    /* get the article id */
    const articleId = article.getAttribute('id');

    /* find the title element */
    const articleTitle = article.querySelector(optTitleSelector).innerHTML;

    /* create HTML of the link */
    const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';

    /* insert link into html variable */
    html = html + linkHTML;

  }
    /* insert link into titleList */
    titleList.innerHTML = html;

    const links = document.querySelectorAll('.titles a');

    for(let link of links){
      link.addEventListener('click', titleClickHandler);
    }

}

generateTitleLinks();

function generateTags(){
  /* [NEW] create a new variable allTags with an empty array */
  const allTags = [];

  /* find all articles */
  const articles = document.querySelectorAll(optArticleSelector);

  /* START LOOP: for every article: */
  for (let article of articles){

    /* find tags wrapper */
    const tagsWrapper = article.querySelector(optArticleTagsSelector);

    /* make html variable with empty string */
    let html = '';

    /* get tags from data-tags attribute */
    const tagsList = article.getAttribute('data-tags');

    /* split tags into array */
    const articleTagsArray = tagsList.split(' ');

      /* START LOOP: for ech tag */
      for(let tag of articleTagsArray){

      /* generate html of the link */
      const linkHTML = '<li><a href="#tag-' + tag + '">' + tag + ' </a></li>'

      /* add generate code to html variable */
      html = html + linkHTML;

      /* [NEW] check if this link is NOT already in allTags */
      if(allTags.indexOf(linkHTML) == -1){
          /* [NEW] add generated code to allTags array */
          allTags.push(linkHTML);
      }

      /* END LOOP: for each tag */
      }
    
    /* insert HTML of all the links into the tags wrapper */
    tagsWrapper.innerHTML = html;

  }

  /* END LOOP: for every article: */
}

  /*[NEW] find list of tags in right column */
  const tagList = document.querySelector('.tags');

  /* [NEW] add html from allTags to tagList */
  tagList.innerHTML = allTags.join(' ');

generateTags()

function tagClickHandler(event){

  /* [DONE] prevent default action for this event */
  event.preventDefault();

  /* [DONE] make ne const named 'clickedElement' and give it the value of "this" */
  const clickedElement = this;
  
  /* [DONE] make a new constant "href" and read the attribute "href" of the clicked element */
  const href = clickedElement.getAttribute('href');

  /* make a new constant "tag" and extract tag from the "href" constant */
  const tag = href.replace('#tag-', '');

  /* [DONE] find all tag links with class active */
  const activeTagLinks = document.querySelectorAll('a.active[href^="#tag-"]');

  /* START LOOP: for each active tag link */
  for(let activeTagLink of activeTagLinks){

    /* remove class active */
    activeTagLink.classList.remove('active');

    /* END LOOP: for each found tag link */
  }

  /* find all tag links with "href" attribute equal to the "href" constant */
  const allTagLinks = document.querySelectorAll('a[href="' + href + '"]');

  /* START LOOP: for each found tag link */
  for(let allTagLink of allTagLinks){

    /* add class active */
    allTagLink.classList.add('active')

  /* END LOOP: for each found tag link */
  }

  /* execute function "generateTitleLinks" with article selector as argument */
  generateTitleLinks('[data-tags~="' + tag + '"]');

}

function addClicklistenersToTags(){

  /* find all links to tags */
  const allTagLinks = document.querySelectorAll('a[href^="#tag-"]')

  /* START LOOP: for each link */
  for(let allTagLink of allTagLinks){

    /* add tagClickHandler as event listener for taht link */
    allTagLink.addEventListener('click', tagClickHandler);
  /* END LOOP: for each link */
  }
    
}

addClicklistenersToTags();

function generateAuthors(){

  /* find all articles */
  const articles = document.querySelectorAll(optArticleSelector);

  /* START LOOP: for every article: */
  for (let article of articles){

    /* find author wrapper */
    const authorWrapper = article.querySelector(optArticleAuthorSelector);

    /* make html variable with empty string */
    let html = '';

    /* get authors from data-author attribute */
    const author = article.getAttribute('data-author');
    console.log(author);

    /* generate html of the link */
      const linkHTML = ' by: <a href="#author-' + author + '">' + author + ' </a>';
      console.log(linkHTML);

    /* add generate code to html variable */
      html = html + linkHTML;

    /* insert HTML of all the links into the tags wrapper */
    authorWrapper.innerHTML = html;

  /* END LOOP: for every article: */
  }

}

generateAuthors()

function authorClickHandler(event){

  /* [DONE] prevent default action for this event */
  event.preventDefault();

  /* [DONE] make ne const named 'clickedElement' and give it the value of "this" */
  const clickedElement = this;
  
  /* [DONE] make a new constant "href" and read the attribute "href" of the clicked element */
  const href = clickedElement.getAttribute('href');

  /* make a new constant "author" and extract tag from the "href" constant */
  const author = href.replace('#author-', '');

  /* [DONE] find all author links with class active */
  const activeAuthorLinks = document.querySelectorAll('a.active[href^="#author-"]');

  /* START LOOP: for each active author link */
  for(let activeAuthorLink of activeAuthorLinks){

    /* remove class active */
    activeAuthorLink.classList.remove('active');

    /* END LOOP: for each found author link */
  }

  /* find all tag links with "href" attribute equal to the "href" constant */
  const allAuthorLinks = document.querySelectorAll('a[href="' + href + '"]');

  /* START LOOP: for each found tag link */
  for(let allAuthorLink of allAuthorLinks){

    /* add class active */
    allAuthorLink.classList.add('active')

  /* END LOOP: for each found tag link */
  }

  /* execute function "generateTitleLinks" with article selector as argument */
  generateTitleLinks('[data-author="' + author + '"]');

}

function addClicklistenersToAuthor(){

  /* find all links to tags */
  const allAuthorLinks = document.querySelectorAll('a[href^="#author-"]')

  /* START LOOP: for each link */
  for(let allAuthorLink of allAuthorLinks){

    /* add tagClickHandler as event listener for taht link */
    allAuthorLink.addEventListener('click', authorClickHandler);
  /* END LOOP: for each link */
  }
    
}

addClicklistenersToAuthor();


