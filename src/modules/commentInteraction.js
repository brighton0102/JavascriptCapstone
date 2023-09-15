import { getComments, submitComment } from './processComments.js';
import { counter } from './commentCounter.js';

export async function commentModal() {
  let modalActiveContent;
  const commentBtns = document.querySelectorAll('.comment-button');
  const element = document.querySelector('.modal');
  const data = JSON.parse(localStorage.getItem('movies'));
  // end event listerner for opening modal
  window.closeModal = () => {
    document.getElementById('myModal').innerHTML = '';
    document.getElementById('myModal').style.display = 'none';
    modalActiveContent = null;
  };

  for (let i = 0; i < commentBtns.length; i++) {
    // eslint-disable-next-line no-loop-func
    commentBtns[i].addEventListener('click', async () => {
      document.getElementById('myModal').style.display = 'block';
      modalActiveContent = data[i];

      const template = `
                <div class="modal-content">
                <span onclick="closeModal()" id="close-icon" class="close">&times;</span>
                  <img src="${modalActiveContent.show.image.medium}" id="movieImg" alt="">
                  <h1>${modalActiveContent.show.name}</h1>
                  <div class="details">
                    <p>Season: ${modalActiveContent.season}</p>
                    <p>Type: ${modalActiveContent.show.type}</p>
                    <p>Language: ${modalActiveContent.show.language}</p>
                    <p>Time: ${modalActiveContent.airtime}</p>
                  </div>
                  <h1>Comments <span id="counter"></span></h1>
                  <div id="comments" class="comments"></div>
                  <h1>Add a comment</h1>
                  <div class="form-center">
                  <form id="form">
                  <input
                  type="text"
                  name="user"
                  id="user"
                  placeholder="Full Name"
                  required
                  maxlength="30"
                  />
                  <textarea
                  name="comment"
                  id="comment"
                  cols="30"
                  rows="10"
                  required
                  placeholder="Your insight"
                  maxlength="500"
                  ></textarea>
                  <div class="comment-btn-center">
                  <button class="comment-btn" type="submit">Comment</button>
                </div>
                  </form>
                  </div>
                </div>
                `;
      element.innerHTML += template;

      function runLiveComments(results) {
        console.log(counter(results));
        document.getElementById('counter').innerHTML = counter(results);
        results?.error?.status !== 400 && results.forEach((element) => {
          const para = document.createElement('p');
          const node = document.createTextNode(`${element.creation_date} ${element.username}: ${element.comment}`);
          para.appendChild(node);
          const htmlElement = document.getElementById('comments');
          htmlElement.appendChild(para);
        });
      }

      await getComments(modalActiveContent.id).then((results) => {
        runLiveComments(results);
      });

      const form = document.getElementById('form');
      form.addEventListener('submit', async (event) => {
        event.preventDefault();

        const username = document.getElementById('user').value;
        const comment = document.getElementById('comment').value;
        const itemId = modalActiveContent.id;

        const data = {
          username,
          comment,
          itemId,
        };

        await submitComment(data).then(() => {
          document.getElementById('comments').innerHTML = '';
          getComments(modalActiveContent.id).then((results) => {
            results?.error?.status !== 400 ? results.push({
              comment: data.comment,
              creation_date: new Date().toISOString().split('T')[0],
              username: data.username,
            }) : results = [{
              comment: data.comment,
              creation_date: new Date().toISOString().split('T')[0],
              username: data.username,
            }];
            runLiveComments(results);
          });
        });
        form.reset();
      });
    });
  }
}
