import { urls } from "./constant.js";

const data = await fetch(urls.post)
    .then(res => res.json())
    .then(data => data)
    .catch(err => console.error(err));
const { posts } = data;

const postsList = document.querySelector('.posts');

posts.forEach(post => {
    console.log(post);

    const article = document.createElement('article');
    article.classList.add('post');
    const link = document.createElement('a');
    link.classList.add('post-link');
    const header = document.createElement('header');
    header.classList.add('post-header');
    const title = document.createElement('h3');
    title.classList.add('post-title');
    title.textContent = post.title;
    const footer = document.createElement('footer');
    footer.classList.add('post-footer');
    const content = document.createElement('p');
    content.classList.add('post-content');
    content.textContent = post.content;
    const date = document.createElement('p');
    date.classList.add('post-date');
    date.textContent = post.date;

    header.appendChild(title);
    footer.appendChild(content);
    footer.appendChild(date);
    link.appendChild(header);
    link.appendChild(footer);
    article.appendChild(link);

    postsList.appendChild(article);
});