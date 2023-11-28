import { urls } from "./constant.js";
import { formatDateRelative } from "./utils.js";

async function postsList() {
    const { posts } = await fetch(urls.post)
        .then(res => res.json())
        .catch(err => console.error(err));

    const postsList = document.querySelector('.posts');

    posts.forEach(post => {
        postsList.appendChild(generatePost(post));

        const detailPost = document.querySelector('.detail-post');

        link.addEventListener('click', () => {
            postsList.classList.add('hidden');

            detailPost.classList.remove('hidden');
        });

        const backButton = document.querySelector('.back-button');

        backButton.addEventListener('click', () => {
            postsList.classList.remove('hidden');

            detailPost.classList.add('hidden');
        });
    });

    function generatePost(post) {
        const article = document.createElement('article');
        article.classList.add('post');
        article.dataset.id = post.id;
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
        date.textContent = formatDateRelative(post.date);

        header.appendChild(title);
        footer.appendChild(content);
        footer.appendChild(date);
        link.appendChild(header);
        link.appendChild(footer);
        article.appendChild(link);

        return article;
    }
}

postsList();