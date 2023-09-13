export function fetchAndRenderData() {
  document.addEventListener('DOMContentLoaded', () => {
    // Fetch data from the TVmaze API
    fetch('https://api.tvmaze.com/schedule?country=US&date=2014-12-01')
      .then((response) => response.json())
      .then((data) => {
        const movieList = document.querySelector('.movie-list');

        data.forEach((show) => {
          const movieDiv = document.createElement('div');
          movieDiv.className = 'movie';

          const img = document.createElement('img');
          img.src = show.show.image ? show.show.image.medium : 'placeholder.jpg';
          img.alt = show.show.name;

          const h2 = document.createElement('h2');
          const maxLength = 30; // Set a maximum length for the movie name (adjust as needed)

          if (show.show.name.length > maxLength) {
            h2.textContent = `${show.show.name.substring(0, maxLength)}...`;
          } else {
            h2.textContent = show.show.name;
          }
          const buttonsDiv = document.createElement('div');
          buttonsDiv.className = 'buttons';

          const reservationButton = document.createElement('button');
          reservationButton.className = 'reservation-button show-modal';
          reservationButton.textContent = 'Reservation';

          const commentButton = document.createElement('button');
          commentButton.className = 'comment-button';
          commentButton.textContent = 'Comment';

          buttonsDiv.appendChild(commentButton);
          buttonsDiv.appendChild(reservationButton);
          movieDiv.appendChild(img);
          movieDiv.appendChild(h2);
          movieDiv.appendChild(buttonsDiv);
          movieList.appendChild(movieDiv);

          let modalActiveContent;
          const commentBtns = document.querySelectorAll('.comment-button');
          const element = document.querySelector('.modal');

          // end event listerner for opening modal
          window.closeModal = () => {
            document.getElementById('myModal').innerHTML = '';
            document.getElementById('myModal').style.display = 'none';
            modalActiveContent = null;
          };
          // eslint-disable-next-line no-plusplus
          for (let i = 0; i < commentBtns.length; i++) {
            // eslint-disable-next-line no-loop-func
            commentBtns[i].addEventListener('click', () => {
              document.getElementById('myModal').style.display = 'block';
              if (i === commentBtns.length - 1) {
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
              }
            });
          }
        });
      });
  });
}
