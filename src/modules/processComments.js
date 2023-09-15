
const BASE_URL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';
const API_KEY = 'BD4UTm4EqtClEvK4c92W';

export async function getComments(item) {
    return fetch(`${BASE_URL + API_KEY}/comments?item_id=${item}`)
    .then((response) => response.json())
        .then((data) => data);
}

export async function submitComment(data) {
    fetch(`${BASE_URL + API_KEY}/comments`, {
  method: 'POST',
  body: JSON.stringify({
    item_id: data.itemId,
    username: data.username,
    comment: data.comment,

    }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
  })
  .then((response)=> {
    })
  .then((res)
  => {

    }).catch((error) => console.error('Error:', error));
}
