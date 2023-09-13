const apiKey = 'xDXAhv6Wn64RmKots7ec';

// Function for like button
export function createLike(itemId) {
  return fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${apiKey}/likes`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ item_id: itemId }),
  })
    .then((response) => {
      if (response.status === 201) {
        return true;
      }
      console.error('Failed to create a like.');
      return false;
    })
    .catch((error) => {
      console.error('Error creating a like:', error);
      return false;
    });
}

// Function for like counts
export function getLikeCount(itemId) {
  return fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${apiKey}/likes`)
    .then((response) => response.json())
    .then((likesData) => {
      const like = likesData.find((like) => like.item_id === itemId);
      return like ? like.likes : 0;
    })
    .catch((error) => {
      console.error('Error getting like count:', error);
      return 0;
    });
}
