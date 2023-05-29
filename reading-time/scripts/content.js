const article = document.querySelector('article');

if (article) {
    // extract the text content from article section
    const text = article.textContent;
    
    // extract words based on regex
    const wordMatchRegExp = /[^\s]+/g;
    const words = text.matchAll(wordMatchRegExp);

    // number of words
    const wordCount = [...words].length;

    // calculate reading time
    const readingTime = Math.round(wordCount / 200);
    
    // create a new element
    const badge = document.createElement('p');

    // use same styling as the publish information in an article's header
    badge.classList.add("color-secondary-text", "type--caption");

    // set content to the new element
    badge.textContent = `⏱️ ${readingTime} min read`;

    // select element after which the new element is to be inserted
    // either  the heading
    const heading = article.querySelector('h1');
    // or the parent node of the article section
    const date = article.querySelector('time')?.parentNode;

    (date ?? heading).insertAdjacentElement('afterend', badge);
}