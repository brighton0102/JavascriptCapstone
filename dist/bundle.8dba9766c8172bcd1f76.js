/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/Api.js":
/*!****************************!*\
  !*** ./src/modules/Api.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fetchAndRenderData: () => (/* binding */ fetchAndRenderData)
/* harmony export */ });
/* harmony import */ var _likeInteractions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./likeInteractions.js */ "./src/modules/likeInteractions.js");
/* harmony import */ var _reservation_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reservation.js */ "./src/modules/reservation.js");
/* harmony import */ var _like_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./like.png */ "./src/modules/like.png");
/* harmony import */ var _commentInteraction_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./commentInteraction.js */ "./src/modules/commentInteraction.js");




let loadedItemCount = 0;
let isLoadingData = false;
let selectedCountry = 'US';
function fetchAndRenderData() {
  const loadMoreButton = document.querySelector('.load-more-button');
  const movieList = document.querySelector('.movie-list');
  const itemCountElement = document.querySelector('.item-count');
  itemCountElement.textContent = 'Total Items Loaded: 10';
  const loadItems = () => {
    if (isLoadingData) {
      return;
    }
    isLoadingData = true;
    movieList.innerHTML = '';
    fetch(`https://api.tvmaze.com/schedule?country=${selectedCountry}&date=2014-12-01&start=${loadedItemCount}`).then(response => response.json()).then(async data => {
      isLoadingData = false;
      for (let i = 0; i < 10 && loadedItemCount < data.length; i += 1) {
        const show = data[loadedItemCount];
        const movieDiv = document.createElement('div');
        movieDiv.className = 'movie';
        const img = document.createElement('img');
        img.src = show.show.image ? show.show.image.medium : 'placeholder.jpg';
        img.alt = show.show.name;
        const h2 = document.createElement('h2');
        const maxLength = 30;
        if (show.show.name.length > maxLength) {
          h2.textContent = `${show.show.name.substring(0, maxLength)}...`;
        } else {
          h2.textContent = show.show.name;
        }
        const buttonsDiv = document.createElement('div');
        buttonsDiv.className = 'buttons';
        const reservationButton = document.createElement('button');
        reservationButton.className = 'reservation-button';
        reservationButton.textContent = 'Reservation';
        const commentButton = document.createElement('button');
        commentButton.className = 'comment-button';
        commentButton.textContent = 'Comment';
        const likeButton = document.createElement('img');
        likeButton.className = 'like-button';
        likeButton.src = _like_png__WEBPACK_IMPORTED_MODULE_2__;
        likeButton.alt = 'Like';
        const likeCounter = document.createElement('span');
        likeCounter.className = 'like-counter';
        // eslint-disable-next-line no-await-in-loop
        const initialLikeCount = await (0,_likeInteractions_js__WEBPACK_IMPORTED_MODULE_0__.getLikeCount)(show.show.id);
        likeCounter.textContent = `Likes: ${initialLikeCount}`;
        likeButton.addEventListener('click', async () => {
          const created = await (0,_likeInteractions_js__WEBPACK_IMPORTED_MODULE_0__.createLike)(show.show.id);
          if (created) {
            const count = await (0,_likeInteractions_js__WEBPACK_IMPORTED_MODULE_0__.getLikeCount)(show.show.id);
            likeCounter.textContent = `Likes: ${count}`;
          }
        });
        reservationButton.addEventListener('click', async () => {
          (0,_reservation_js__WEBPACK_IMPORTED_MODULE_1__.popupReservation)(show);
        });
        commentButton.addEventListener('click', async () => {
          (0,_commentInteraction_js__WEBPACK_IMPORTED_MODULE_3__.popupComment)(show);
        });
        buttonsDiv.appendChild(likeButton);
        buttonsDiv.appendChild(likeCounter);
        buttonsDiv.appendChild(commentButton);
        buttonsDiv.appendChild(reservationButton);
        movieDiv.appendChild(img);
        movieDiv.appendChild(h2);
        movieDiv.appendChild(buttonsDiv);
        movieList.appendChild(movieDiv);
        loadedItemCount += 1;
      }
      itemCountElement.textContent = `Total Items Loaded: ${loadedItemCount}`;

      // // Call commentModal after data is loaded and movie elements are created
      // commentModal();
    });
  };

  loadItems();
  loadMoreButton.addEventListener('click', loadItems);
  const usButton = document.querySelector('.us-button');
  const canadaButton = document.querySelector('.canada-button');
  const indiaButton = document.querySelector('.india-button');
  function resetAndLoadItems() {
    loadedItemCount = 0;
    itemCountElement.textContent = 'Total Items Loaded: 0';
    loadItems();
  }
  usButton.addEventListener('click', () => {
    selectedCountry = 'US';
    resetAndLoadItems();
  });
  canadaButton.addEventListener('click', () => {
    selectedCountry = 'ES';
    resetAndLoadItems();
  });
  indiaButton.addEventListener('click', () => {
    selectedCountry = 'GB';
    resetAndLoadItems();
  });
}

/***/ }),

/***/ "./src/modules/commentInteraction.js":
/*!*******************************************!*\
  !*** ./src/modules/commentInteraction.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   popupComment: () => (/* binding */ popupComment)
/* harmony export */ });
async function popupComment(show) {
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
    /* eslint-disable no-inner-declarations */
    async function fetchComments(itemId) {
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
    async function displayComments(itemId) {
      try {
        const comments = await fetchComments(itemId);
        commentsContainer.innerHTML = ''; // Clear previous comments
        if (comments.length > 0) {
          comments.forEach(comment => {
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
    async function displayTotalComments(itemId) {
      try {
        const comments = await fetchComments(itemId);
        totalComments.textContent = `Total Comments: ${comments.length}`;
      } catch (error) {
        console.error('Error fetching comments:', error);
      }
    }
    /* eslint-enable no-inner-declarations */
    commentForm.addEventListener('submit', async e => {
      e.preventDefault();
      const commentData = {
        item_id: show.show.id,
        username: nameInput.value,
        comment: commentInput.value
      };
      try {
        const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${apiKey}/comments`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(commentData)
        });
        if (response.ok) {
          nameInput.value = '';
          commentInput.value = '';
          displayComments(show.show.id);
          displayTotalComments(show.show.id);
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
    displayComments(show.show.id);
    displayTotalComments(show.show.id);
  } else {
    console.error('Invalid show data:', show);
  }
}

/***/ }),

/***/ "./src/modules/counterModule.js":
/*!**************************************!*\
  !*** ./src/modules/counterModule.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ reservationCounter)
/* harmony export */ });
function reservationCounter(reserveContainer) {
  let count = 0;
  const reserve = reserveContainer.querySelectorAll('span');
  reserve.forEach(() => {
    count += 1;
  });
  return count;
}

/***/ }),

/***/ "./src/modules/displayReservations.js":
/*!********************************************!*\
  !*** ./src/modules/displayReservations.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   displayReservations: () => (/* binding */ displayReservations)
/* harmony export */ });
/* harmony import */ var _fetchReservations_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetchReservations.js */ "./src/modules/fetchReservations.js");

async function displayReservations(itemId, container) {
  try {
    const reservations = await (0,_fetchReservations_js__WEBPACK_IMPORTED_MODULE_0__.fetchAllReservations)(itemId);
    container.innerHTML = '';
    reservations.forEach(reservation => {
      const reservationText = document.createElement('p');
      reservationText.className = 'reservation-text';
      reservationText.textContent = `@${reservation.username} reserved this from ${reservation.date_start} to ${reservation.date_end}`;
      container.appendChild(reservationText);
    });
  } catch (error) {
    console.error('Error displaying reservations:', error);
  }
}

/***/ }),

/***/ "./src/modules/fetchReservations.js":
/*!******************************************!*\
  !*** ./src/modules/fetchReservations.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fetchAllReservations: () => (/* binding */ fetchAllReservations)
/* harmony export */ });
async function fetchAllReservations(itemId) {
  try {
    const apiKey = 'fDqwhSI3IFsJVLYNBHB6';
    const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${apiKey}/reservations?item_id=${itemId}`);
    if (!response.ok) {
      throw new Error('Failed to fetch reservations');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching reservations:', error);
    return [];
  }
}

/***/ }),

/***/ "./src/modules/likeInteractions.js":
/*!*****************************************!*\
  !*** ./src/modules/likeInteractions.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createLike: () => (/* binding */ createLike),
/* harmony export */   getLikeCount: () => (/* binding */ getLikeCount)
/* harmony export */ });
const apiKey = 'xDXAhv6Wn64RmKots7ec';

// Function for like button
function createLike(itemId) {
  return fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${apiKey}/likes`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      item_id: itemId
    })
  }).then(response => {
    if (response.status === 201) {
      return true;
    }
    console.error('Failed to create a like.');
    return false;
  }).catch(error => {
    console.error('Error creating a like:', error);
    return false;
  });
}

// Function for like counts
function getLikeCount(itemId) {
  return fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${apiKey}/likes`).then(response => response.json()).then(likesData => {
    const like = likesData.find(like => like.item_id === itemId);
    return like ? like.likes : 0;
  }).catch(error => {
    console.error('Error getting like count:', error);
    return 0;
  });
}

/***/ }),

/***/ "./src/modules/reservation.js":
/*!************************************!*\
  !*** ./src/modules/reservation.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   popupReservation: () => (/* binding */ popupReservation)
/* harmony export */ });
/* harmony import */ var _displayReservations_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayReservations.js */ "./src/modules/displayReservations.js");

// eslint-disable-next-line no-inner-declarations
async function popupReservation(show) {
  if (show && show.show) {
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
    const reservationForm = document.createElement('form');
    reservationForm.className = 'reservation-form';
    const nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.placeholder = 'Name';
    const startDateInput = document.createElement('input');
    startDateInput.type = 'date';
    startDateInput.placeholder = 'Start Date';
    const endDateInput = document.createElement('input');
    endDateInput.type = 'date';
    endDateInput.placeholder = 'End Date';
    const reserveButton = document.createElement('button');
    reserveButton.textContent = 'Reserve';
    const reservationsContainer = document.createElement('div');
    reservationsContainer.className = 'reservations-container';
    const totalReservations = document.createElement('p');
    totalReservations.className = 'total-reservations';
    // eslint-disable-next-line no-inner-declarations
    async function fetchTotalReservations(itemId) {
      try {
        const apiKey = 'fDqwhSI3IFsJVLYNBHB6';
        const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${apiKey}/reservations?item_id=${itemId}`);
        if (!response.ok) {
          throw new Error('Failed to fetch reservations');
        }
        const reservations = await response.json();
        return reservations.length;
      } catch (error) {
        console.error('Error fetching total reservations:', error);
        return 0;
      }
    }
    // eslint-disable-next-line no-inner-declarations
    async function displayTotalReservations(itemId) {
      const total = await fetchTotalReservations(itemId);
      totalReservations.textContent = `Total Reservations: ${total}`;
    }
    reservationForm.addEventListener('submit', async e => {
      e.preventDefault();
      const reservationData = {
        item_id: show.show.id,
        username: nameInput.value,
        date_start: startDateInput.value,
        date_end: endDateInput.value
      };
      const apiKey = 'fDqwhSI3IFsJVLYNBHB6';
      const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${apiKey}/reservations`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(reservationData)
      });
      /* eslint-disable no-alert */
      if (response.ok) {
        nameInput.value = '';
        startDateInput.value = '';
        endDateInput.value = '';
        (0,_displayReservations_js__WEBPACK_IMPORTED_MODULE_0__.displayReservations)(show.show.id, reservationsContainer);
        displayTotalReservations(show.show.id);
      } else {
        alert('Reservation failed. Please try again.');
      }
    });
    /* eslint-enable no-alert */
    closeButtonContainer.appendChild(closeButton);
    content.appendChild(closeButtonContainer);
    content.appendChild(img);
    content.appendChild(h2);
    content.appendChild(summary);
    popup.appendChild(content);
    overlay.appendChild(popup);
    document.body.appendChild(overlay);
    reservationForm.appendChild(nameInput);
    reservationForm.appendChild(startDateInput);
    reservationForm.appendChild(endDateInput);
    reservationForm.appendChild(reserveButton);
    content.appendChild(reservationsContainer);
    content.appendChild(totalReservations);
    content.appendChild(reservationForm);
    popup.style.display = 'flex';
    (0,_displayReservations_js__WEBPACK_IMPORTED_MODULE_0__.displayReservations)(show.show.id, reservationsContainer);
    displayTotalReservations(show.show.id);
  } else {
    console.error('Invalid show data:', show);
  }
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.css":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.css ***!
  \**********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Gothic+A1:wght@100;200;300;400;500;600;700;800;900&family=Lato:wght@100;300;400;700&family=Montserrat:wght@100;200;300;400;500;600&family=Permanent+Marker&family=Poppins:wght@100;200;300;400;500;600&family=Space+Grotesk:wght@300;400;500;600;700&family=Titan+One&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

main {
  background-color: rgba(1, 0, 74, 0.8);
}

header {
  background-color: rgba(1, 21, 74, 0.8);
  padding: 3rem;
}

.logo-style {
  color: rgba(76, 6, 150, 0.88);
}

nav {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

nav h3 {
  font-size: 50px;
  font-family: "Permanent Marker", cursive;
}

ul {
  display: flex;
  gap: 70px;
}

ul li {
  list-style-type: none;
  text-decoration: none;
  font-size: 25px;
  color: #fff;
  font-family: "Gothic A1", sans-serif;
}

ul li a {
  text-decoration: none;
  font-size: 25px;
  color: #fff;
  font-family: "Gothic A1", sans-serif;
}

h2 {
  color: #fff;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 2rem;
  text-align: center;
}

.movie-list {
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
  margin: 1rem;
  padding: 1rem;
}

.buttons {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 1rem;
  padding: 1rem;
  gap: 1rem;
}

.reservation-button,
.comment-button {
  font-family: "Courier New", Courier, monospace;
  font-weight: 400;
  color: #5799ef;
  font-size: 1rem;
}

footer {
  display: block;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  padding: 8px;
  height: 30px;
  color: #fff;
  border-color: black;
  background-color: rgba(1, 21, 74, 0.8);
  border: 1cm;
}

.overlay {
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  z-index: 1000;
  color: black;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.popup {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  z-index: 1001;
  color: black;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  overflow-y: auto;
  max-height: 80%;
  padding-top: 300px;
}

.popup h2 {
  color: black;
}

.reservation-form {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
}

.reservation-form input[type=text],
.reservation-form input[type=date] {
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
}

.reservation-form button {
  background-color: #e53935;
  color: #fff;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 20px;
}

textarea {
  background: #fff;
  height: 100px;
  border: 1px solid #cfd8dc;
  border-radius: 8px;
  margin-top: 18px;
  padding: 15px 38px 15px 16px;
  font-family: Poppins, serif, sans serif;
  font-weight: 400;
  color: #172b4d;
  font-size: 17px;
}

.comment-form input[type=text],
.comment-form textarea,
.comment-form button {
  width: 100%;
  padding: 10px;
  margin-top: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.comment-form button {
  background: #007bff;
  color: white;
  border: none;
  cursor: pointer;
}

.buttons button {
  padding: 0.5rem;
  border: none;
  border-radius: 0.5rem;
  background-color: #393434;
  cursor: pointer;
}

.buttons button:hover {
  background-color: #f5c518;
}

.buttons button:active {
  background-color: #0a0a0a;
}

.comment-form button:hover {
  background: #0056b3;
}

.reservations-container {
  border: 1px solid #000;
  padding: 10px;
  margin-top: 20px;
  border-radius: 4px;
}

.reservation-details {
  margin-bottom: 10px;
}

.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: #e53935;
  color: #fff;
  border: none;
  padding: 5px 10px;
  font-size: 16px;
  border-radius: 4px;
  cursor: pointer;
  z-index: 2;
}

.totalReservations {
  font-weight: bold;
  border: 1px solid #000;
  padding: 5px;
  display: inline-block;
}

.like-button {
  width: 20px;
  height: 20px;
}

.like-counter {
  font-weight: 100;
  color: red;
}

.item-count {
  color: #fff;
  font-weight: 100;
}

/* Default styles for the buttons */
.us-button,
.canada-button,
.india-button {
  cursor: pointer;
  color: white;
}

.us-button:hover,
.canada-button:hover,
.india-button:hover {
  color: #fff;
}

#myModal {
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  padding-top: 100px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
}

/* Modal Content */
.modal-content {
  background-color: #fefefe;
  margin: auto;
  padding: 20px;
  border: 1px solid #888;
  width: 70%;
}

/* The Close Button */
.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: #000;
  text-decoration: none;
  cursor: pointer;
}

.modal-content h1 {
  text-align: center;
  margin-bottom: 20px;
  font-family: "Gothic A1", sans-serif;
}

.details {
  display: grid;
  grid-template-columns: 1fr 1fr;
  text-align: center;
  font-family: "Gothic A1", sans-serif;
  font-size: 20px;
  padding-bottom: 20px;
}

.details p {
  padding-bottom: 15px;
}

#movieImg {
  width: 20%;
  display: block;
  margin: 0 auto;
  padding-bottom: 20px;
}

.comments {
  text-align: center;
  font-family: "Gothic A1", sans-serif;
  font-size: 20px;
}

.comments p {
  padding-bottom: 15px;
}

.form-center {
  width: 400px;
  margin: 0 auto;
}

input {
  border-radius: 0;
  border-radius: 8px;
  padding: 15px 38px 15px 16px;
  border: 1px solid #cfd8dc;
  margin-top: 20px;
  font-family: Poppins, serif, sans serif;
  font-weight: 400;
  color: #172b4d;
  font-size: 17px;
}

.comment-btn {
  font-family: Poppins, serif, sans serif;
  background-color: #fff;
  border: 1px solid #cfd8dc;
  border-radius: 8px;
  color: #8f9394;
  padding: 12px;
  text-align: left !important;
  text-decoration: none;
  cursor: pointer;
  font-weight: 500;
  font-size: 17px;
  line-height: 24px;
  margin-top: 15px;
  letter-spacing: 0.03em;
  transition: background-color 0.15s, color 0.15s;
}

.comments-container {
  border: 1px solid #ccc; /* Gray border */
  padding: 10px;
  margin-top: 20px;
  max-height: 300px; /* Add max-height for scrolling */
  overflow-y: auto; /* Add scrollbars when content overflows */
}

/* Style individual comments */
.comments-container p {
  margin: 0;
  padding: 5px 0;
  border-bottom: 1px solid #ccc; /* Add horizontal line between comments */
}

/* Style the total comments text */
.total-comments {
  margin-top: 10px;
  font-weight: bold;
}`, "",{"version":3,"sources":["webpack://./src/styles/main.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Gothic+A1:wght@100;200;300;400;500;600;700;800;900&family=Lato:wght@100;300;400;700&family=Montserrat:wght@100;200;300;400;500;600&family=Permanent+Marker&family=Poppins:wght@100;200;300;400;500;600&family=Space+Grotesk:wght@300;400;500;600;700&family=Titan+One&display=swap');\r\n\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nmain {\r\n  background-color: rgba(1, 0, 74, 0.8);\r\n}\r\n\r\nheader {\r\n  background-color: rgba(1, 21, 74, 0.8);\r\n  padding: 3rem;\r\n}\r\n\r\n.logo-style {\r\n  color: rgba(76, 6, 150, 0.88);\r\n}\r\n\r\nnav {\r\n  display: flex;\r\n  justify-content: space-around;\r\n  align-items: center;\r\n}\r\n\r\nnav h3 {\r\n  font-size: 50px;\r\n  font-family: 'Permanent Marker', cursive;\r\n}\r\n\r\nul {\r\n  display: flex;\r\n  gap: 70px;\r\n}\r\n\r\nul li {\r\n  list-style-type: none;\r\n  text-decoration: none;\r\n  font-size: 25px;\r\n  color: #fff;\r\n  font-family: 'Gothic A1', sans-serif;\r\n}\r\n\r\nul li a {\r\n  text-decoration: none;\r\n  font-size: 25px;\r\n  color: #fff;\r\n  font-family: 'Gothic A1', sans-serif;\r\n}\r\n\r\nh2 {\r\n  color: #fff;\r\n  font-family: 'Roboto', sans-serif;\r\n  font-weight: 400;\r\n  font-size: 2rem;\r\n  text-align: center;\r\n}\r\n\r\n.movie-list {\r\n  display: grid;\r\n  justify-items: center;\r\n  grid-template-columns: repeat(3, 1fr);\r\n  grid-gap: 1rem;\r\n  margin: 1rem;\r\n  padding: 1rem;\r\n}\r\n\r\n.buttons {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  margin: 1rem;\r\n  padding: 1rem;\r\n  gap: 1rem;\r\n}\r\n\r\n.reservation-button,\r\n.comment-button {\r\n  font-family: 'Courier New', Courier, monospace;\r\n  font-weight: 400;\r\n  color: #5799ef;\r\n  font-size: 1rem;\r\n}\r\n\r\nfooter {\r\n  display: block;\r\n  justify-content: center;\r\n  align-items: center;\r\n  position: relative;\r\n  width: 100%;\r\n  padding: 8px;\r\n  height: 30px;\r\n  color: #fff;\r\n  border-color: black;\r\n  background-color: rgba(1, 21, 74, 0.8);\r\n  border: 1cm;\r\n}\r\n\r\n.overlay {\r\n  display: flex;\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  background: rgba(0, 0, 0, 0.7);\r\n  z-index: 1000;\r\n  color: black;\r\n  justify-content: center;\r\n  align-items: center;\r\n  flex-direction: column;\r\n}\r\n\r\n.popup {\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  background-color: #fff;\r\n  padding: 20px;\r\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);\r\n  z-index: 1001;\r\n  color: black;\r\n  align-items: center;\r\n  justify-content: center;\r\n  text-align: center;\r\n  flex-direction: column;\r\n  overflow-y: auto;\r\n  max-height: 80%;\r\n  padding-top: 300px;\r\n}\r\n\r\n.popup h2 {\r\n  color: black;\r\n}\r\n\r\n.reservation-form {\r\n  margin-top: 20px;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.reservation-form input[type=\"text\"],\r\n.reservation-form input[type=\"date\"] {\r\n  padding: 10px;\r\n  margin-bottom: 10px;\r\n  border: 1px solid #ccc;\r\n  border-radius: 4px;\r\n  font-size: 16px;\r\n}\r\n\r\n.reservation-form button {\r\n  background-color: #e53935;\r\n  color: #fff;\r\n  border: none;\r\n  padding: 10px 20px;\r\n  font-size: 16px;\r\n  border-radius: 4px;\r\n  cursor: pointer;\r\n  margin-top: 20px;\r\n}\r\n\r\ntextarea {\r\n  background: #fff;\r\n  height: 100px;\r\n  border: 1px solid #cfd8dc;\r\n  border-radius: 8px;\r\n  margin-top: 18px;\r\n  padding: 15px 38px 15px 16px;\r\n  font-family: Poppins, serif, sans serif;\r\n  font-weight: 400;\r\n  color: #172b4d;\r\n  font-size: 17px;\r\n}\r\n\r\n.comment-form input[type=\"text\"],\r\n.comment-form textarea,\r\n.comment-form button {\r\n  width: 100%;\r\n  padding: 10px;\r\n  margin-top: 10px;\r\n  border: 1px solid #ccc;\r\n  border-radius: 5px;\r\n}\r\n\r\n.comment-form button {\r\n  background: #007bff;\r\n  color: white;\r\n  border: none;\r\n  cursor: pointer;\r\n}\r\n\r\n.buttons button {\r\n  padding: 0.5rem;\r\n  border: none;\r\n  border-radius: 0.5rem;\r\n  background-color: #393434;\r\n  cursor: pointer;\r\n}\r\n\r\n.buttons button:hover {\r\n  background-color: #f5c518;\r\n}\r\n\r\n.buttons button:active {\r\n  background-color: #0a0a0a;\r\n}\r\n\r\n.comment-form button:hover {\r\n  background: #0056b3;\r\n}\r\n\r\n.reservations-container {\r\n  border: 1px solid #000;\r\n  padding: 10px;\r\n  margin-top: 20px;\r\n  border-radius: 4px;\r\n}\r\n\r\n.reservation-details {\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.close-button {\r\n  position: absolute;\r\n  top: 10px;\r\n  right: 10px;\r\n  background-color: #e53935;\r\n  color: #fff;\r\n  border: none;\r\n  padding: 5px 10px;\r\n  font-size: 16px;\r\n  border-radius: 4px;\r\n  cursor: pointer;\r\n  z-index: 2;\r\n}\r\n\r\n.totalReservations {\r\n  font-weight: bold;\r\n  border: 1px solid #000;\r\n  padding: 5px;\r\n  display: inline-block;\r\n}\r\n\r\n.like-button {\r\n  width: 20px;\r\n  height: 20px;\r\n}\r\n\r\n.like-counter {\r\n  font-weight: 100;\r\n  color: red;\r\n}\r\n\r\n.item-count {\r\n  color: #fff;\r\n  font-weight: 100;\r\n}\r\n\r\n/* Default styles for the buttons */\r\n.us-button,\r\n.canada-button,\r\n.india-button {\r\n  cursor: pointer;\r\n  color: white;\r\n}\r\n\r\n.us-button:hover,\r\n.canada-button:hover,\r\n.india-button:hover {\r\n  color: #fff;\r\n}\r\n\r\n#myModal {\r\n  display: none; /* Hidden by default */\r\n  position: fixed; /* Stay in place */\r\n  z-index: 1; /* Sit on top */\r\n  padding-top: 100px; /* Location of the box */\r\n  left: 0;\r\n  top: 0;\r\n  width: 100%; /* Full width */\r\n  height: 100%; /* Full height */\r\n  overflow: auto; /* Enable scroll if needed */\r\n  backdrop-filter: blur(10px);\r\n  -webkit-backdrop-filter: blur(10px);\r\n  background-color: rgb(0, 0, 0); /* Fallback color */\r\n  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */\r\n}\r\n\r\n/* Modal Content */\r\n.modal-content {\r\n  background-color: #fefefe;\r\n  margin: auto;\r\n  padding: 20px;\r\n  border: 1px solid #888;\r\n  width: 70%;\r\n}\r\n\r\n/* The Close Button */\r\n.close {\r\n  color: #aaa;\r\n  float: right;\r\n  font-size: 28px;\r\n  font-weight: bold;\r\n}\r\n\r\n.close:hover,\r\n.close:focus {\r\n  color: #000;\r\n  text-decoration: none;\r\n  cursor: pointer;\r\n}\r\n\r\n.modal-content h1 {\r\n  text-align: center;\r\n  margin-bottom: 20px;\r\n  font-family: 'Gothic A1', sans-serif;\r\n}\r\n\r\n.details {\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr;\r\n  text-align: center;\r\n  font-family: 'Gothic A1', sans-serif;\r\n  font-size: 20px;\r\n  padding-bottom: 20px;\r\n}\r\n\r\n.details p {\r\n  padding-bottom: 15px;\r\n}\r\n\r\n#movieImg {\r\n  width: 20%;\r\n  display: block;\r\n  margin: 0 auto;\r\n  padding-bottom: 20px;\r\n}\r\n\r\n.comments {\r\n  text-align: center;\r\n  font-family: 'Gothic A1', sans-serif;\r\n  font-size: 20px;\r\n}\r\n\r\n.comments p {\r\n  padding-bottom: 15px;\r\n}\r\n\r\n.form-center {\r\n  width: 400px;\r\n  margin: 0 auto;\r\n}\r\n\r\ninput {\r\n  border-radius: 0;\r\n  border-radius: 8px;\r\n  padding: 15px 38px 15px 16px;\r\n  border: 1px solid #cfd8dc;\r\n  margin-top: 20px;\r\n  font-family: Poppins, serif, sans serif;\r\n  font-weight: 400;\r\n  color: #172b4d;\r\n  font-size: 17px;\r\n}\r\n\r\n.comment-btn {\r\n  font-family: Poppins, serif, sans serif;\r\n  background-color: #fff;\r\n  border: 1px solid #cfd8dc;\r\n  border-radius: 8px;\r\n  color: #8f9394;\r\n  padding: 12px;\r\n  text-align: left !important;\r\n  text-decoration: none;\r\n  cursor: pointer;\r\n  font-weight: 500;\r\n  font-size: 17px;\r\n  line-height: 24px;\r\n  margin-top: 15px;\r\n  letter-spacing: 0.03em;\r\n  transition: background-color 0.15s, color 0.15s;\r\n}\r\n\r\n.comments-container {\r\n  border: 1px solid #ccc; /* Gray border */\r\n  padding: 10px;\r\n  margin-top: 20px;\r\n  max-height: 300px; /* Add max-height for scrolling */\r\n  overflow-y: auto; /* Add scrollbars when content overflows */\r\n}\r\n\r\n/* Style individual comments */\r\n.comments-container p {\r\n  margin: 0;\r\n  padding: 5px 0;\r\n  border-bottom: 1px solid #ccc; /* Add horizontal line between comments */\r\n}\r\n\r\n/* Style the total comments text */\r\n.total-comments {\r\n  margin-top: 10px;\r\n  font-weight: bold;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/main.css":
/*!*****************************!*\
  !*** ./src/styles/main.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/modules/like.png":
/*!******************************!*\
  !*** ./src/modules/like.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "like.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/main.css */ "./src/styles/main.css");
/* harmony import */ var _modules_Api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/Api.js */ "./src/modules/Api.js");
/* harmony import */ var _modules_counterModule_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/counterModule.js */ "./src/modules/counterModule.js");




// Call the function to fetch and render data
(0,_modules_Api_js__WEBPACK_IMPORTED_MODULE_1__.fetchAndRenderData)();
function updateReservationCount() {
  const reserveContainer = document.querySelector('.reservation-container');
  const reservationCountElement = document.querySelector('.reservation-count');
  if (reserveContainer && reservationCountElement) {
    const count = (0,_modules_counterModule_js__WEBPACK_IMPORTED_MODULE_2__["default"])(reserveContainer);
    reservationCountElement.textContent = count;
  }
}
window.addEventListener('load', updateReservationCount);
})();

/******/ })()
;
//# sourceMappingURL=bundle.8dba9766c8172bcd1f76.js.map