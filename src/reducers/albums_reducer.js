
const initialState = {
  1: {
    name: 'Em Gai Mua',
    coverImage: 'https://www.dropbox.com/s/rni2vqwqbodxjk9/EmGaiMua.jpg?dl=1',
  },
  2: {
    name: 'Ve',
    coverImage: 'https://www.dropbox.com/s/7mjkd2ta2d7fz4f/Ve.jpg?dl=1',
  },
};

const albumReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default albumReducer;
