
const initialState = {
  1: {
    id: 1,
    title: 'Chia Tay Trong Mua',
    artist_id: 1,
    album_id: 1,
    url: 'https://www.dropbox.com/s/bplmds25ebqbyfg/ChiaTayTrongMua.mp3?dl=1',
  },
  2: {
    id: 2,
    title: 'Ve',
    artist_id: 2,
    album_id: 2,
    url: 'https://www.dropbox.com/s/asbuyjudiov3f2j/Ve.mp3?dl=1',
  },
  3: {
    id: 3,
    title: 'Bon Chu Lam',
    artist_id: 2,
    album_id: 2,
    url: 'https://www.dropbox.com/s/lio0f81hl8g2i8q/BonChuLam.mp3?dl=1',
  },
};

const songsReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default songsReducer;
