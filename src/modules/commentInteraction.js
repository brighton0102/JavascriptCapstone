async function fetchComments(itemId, apiKey) {
  try {
    const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${apiKey}/comments?item_id=${itemId}`);
    if (!response.ok) {
      throw new Error('Failed to fetch comments');
    }
    const comments = await response.json();
    return comments;
  } catch (error) {
    console.error('Error fetching comments:', error);
    return [];
  }
}

async function displayComments(itemId, commentsContainer, apiKey) {
  try {
    const comments = await fetchComments(itemId, apiKey);
    commentsContainer.innerHTML = ''; // Clear previous comments
    if (comments.length > 0) {
      comments.forEach((comment) => {
        const commentElement = document.createElement('p');
        commentElement.textContent = `${comment.username}: ${comment.comment}`;
        commentsContainer.appendChild(commentElement);
      });
    } else {
      const noCommentsElement = document.createElement('p');
      noCommentsElement.textContent = 'No comments yet.';
      commentsContainer.appendChild(noCommentsElement);
    }
  } catch (error) {
    console.error('Error fetching comments:', error);
  }
}

async function displayTotalComments(itemId, totalComments, apiKey) {
  try {
    const comments = await fetchComments(itemId, apiKey);
    totalComments.textContent = `Total Comments: ${comments.length}`;
  } catch (error) {
    console.error('Error fetching comments:', error);
  }
}

export async function popupComment(show) {
  if (show && show.show) {
    const apiKey = 'BD4UTm4EqtClEvK4c92W';

    const overlay = document.createElement('div');
    overlay.className = 'overlay';

    const popup = document.createElement('div');
    popup.className = 'popup';

    const closeButtonContainer = document.createElement('div');
    closeButtonContainer.className = 'close-button-container';

    const closeButton = document.createElement('button');
    closeButton.textContent = 'Close';
    closeButton.className = 'close-button';
    closeButton.onclick = () => {
      document.body.removeChild(overlay);
    };

    const content = document.createElement('div');
    const img = document.createElement('img');
    img.src = show.show.image ? show.show.image.medium : 'placeholder.jpg';
    img.alt = show.show.name;

    const h2 = document.createElement('h2');
    h2.textContent = show.show.name;
    const summary = document.createElement('p');
    summary.innerHTML = show.show.summary;
    const commentForm = document.createElement('form');
    commentForm.className = 'comment-form';
    const nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.placeholder = 'Your Name';

    const commentInput = document.createElement('textarea');
    commentInput.name = 'comment';
    commentInput.id = 'comment';
    commentInput.cols = '30';
    commentInput.rows = '10';
    commentInput.placeholder = 'Your Comment';
    commentInput.required = true;
    commentInput.maxLength = '500';

    const commentButton = document.createElement('button');
    commentButton.textContent = 'Comment';

    const commentsContainer = document.createElement('div');
    commentsContainer.className = 'comments-container';

    const totalComments = document.createElement('p');
    totalComments.className = 'total-comments';

    commentForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      const commentData = {
        item_id: show.show.id,
        username: nameInput.value,
        comment: commentInput.value,
      };

      try {
        const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${apiKey}/comments`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(commentData),
        });

        if (response.ok) {
          nameInput.value = '';
          commentInput.value = '';
          displayComments(show.show.id, commentsContainer, apiKey);
          displayTotalComments(show.show.id, totalComments, apiKey);
        }
      } catch (error) {
        console.error('Error submitting comment:', error);
      }
    });

    closeButtonContainer.appendChild(closeButton);
    content.appendChild(closeButtonContainer);
    content.appendChild(img);
    content.appendChild(h2);
    content.appendChild(summary);
    popup.appendChild(content);
    overlay.appendChild(popup);
    document.body.appendChild(overlay);
    commentForm.appendChild(nameInput);
    commentForm.appendChild(commentInput);
    commentForm.appendChild(commentButton);
    content.appendChild(commentsContainer);
    content.appendChild(totalComments);
    content.appendChild(commentForm);
    popup.style.display = 'flex';
    displayComments(show.show.id, commentsContainer, apiKey);
    displayTotalComments(show.show.id, totalComments, apiKey);
  } else {
    console.error('Invalid show data:', show);
  }
}
