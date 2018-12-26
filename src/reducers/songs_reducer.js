
const initialState = {
  1: {
    id: 1,
    title: 'Chia Tay Trong Mua',
    artist_id: 1,
    album_id: 1,
    url: '',
  },
  2: {
    id: 2,
    title: 'Ve',
    artist_id: 2,
    album_id: 2,
    url: '',
  },
  3: {
    id: 3,
    title: 'Bon Chu Lam',
    artist_id: 2,
    album_id: 2,
    url: '',
  },
};

const songsReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default songsReducer;
