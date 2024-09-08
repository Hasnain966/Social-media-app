document.addEventListener('DOMContentLoaded', () => {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const leftLink = document.querySelector('.left-link');
    const postArea = document.querySelector('.post-area');

    if (!hamburgerMenu || !leftLink || !postArea) {
        console.error('One or more required elements are missing in the DOM.');
        return;
    }

    hamburgerMenu.addEventListener('click', () => {
        hamburgerMenu.classList.toggle('open');
        leftLink.classList.toggle('show');
        if (leftLink.classList.contains('show')) {
            postArea.classList.add('post-area-blur');
        } else {
            postArea.classList.remove('post-area-blur');
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    

    
    const searchButton = document.getElementById('search-button');
    const searchInput = document.getElementById('search-input');
    const posts = document.querySelectorAll('.post');

    searchButton.addEventListener('click', () => {
        const searchTerm = searchInput.value.toLowerCase();

        posts.forEach(post => {
            const userName = post.querySelector('.post-user-name').textContent.toLowerCase();
            if (userName.includes(searchTerm)) {
                post.style.display = 'block';
            } else {
                post.style.display = 'none';
            }
        });
    });
});


document.addEventListener("DOMContentLoaded", () => {
    const likeButtons = document.querySelectorAll('.like-btn');
    likeButtons.forEach(button => {
        button.addEventListener('click', () => {
            button.classList.toggle('liked');
        });
    });

    // کمنٹ بٹن کے کلک ایونٹ کو ہینڈل کرنا
    const commentButtons = document.querySelectorAll('.comment-btn');
    commentButtons.forEach(button => {
        button.addEventListener('click', () => {
            const post = button.closest('.post');
            const commentSection = post.querySelector('.comment-section');
            commentSection.style.display = commentSection.style.display === 'none' ? 'block' : 'none';
        });
    });

    // سبمٹ کمنٹ بٹن کے کلک ایونٹ کو ہینڈل کرنا
    const submitButtons = document.querySelectorAll('.submit-comment');
    submitButtons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Comment submitted!');
            const commentSection = button.closest('.comment-section');
            commentSection.style.display = 'none';
            commentSection.querySelector('.comment-input').value = ''; // Clear input field
        });
    });
});
