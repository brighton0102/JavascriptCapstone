export function commentModal() {
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
    commentBtns[i].addEventListener('click', () => {
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
                </div>
                `;
      element.innerHTML += template;
    });
  }
}
