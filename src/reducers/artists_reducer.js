
const initialState = {
  1: {
    name: 'Huong Tram',
    avatar: 'https://www.dropbox.com/s/tscrswi0228ez65/HuongTram.jpg?dl=1',
  },
  2: {
    name: 'Truc Nhan',
    avatar: 'https://www.dropbox.com/s/0o8epiiuba5f7q0/TrucNhan.jpg?dl=1',
  },
};

const artistsReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default artistsReducer;
