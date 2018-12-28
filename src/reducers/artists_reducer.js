
const initialState = {
  1: {
    id: 1,
    name: 'Huong Tram',
    avatar: 'https://www.dropbox.com/s/tscrswi0228ez65/HuongTram.jpg?dl=1',
  },
  2: {
    id: 2,
    name: 'Truc Nhan',
    avatar: 'https://www.dropbox.com/s/0o8epiiuba5f7q0/TrucNhan.jpg?dl=1',
  },
  3: {
    id: 3,
    name: 'Vu Cat Tuong',
    avatar: 'https://www.dropbox.com/s/aql543p9blhde6i/VuCatTuong.jpg?dl=1',
  },
  4: {
    id: 4,
    name: 'Le Quyen',
    avatar: 'https://www.dropbox.com/s/tw86u8orhekyo2y/LeQuyen.jpg?dl=1',
  },
  5: {
    id: 5,
    name: 'Bao Anh',
    avatar: 'https://www.dropbox.com/s/f9u2bxhzo4pjc80/BaoAnh.jpg?dl=1',
  },
  6: {
    id: 6,
    name: 'Dam Vinh Hung',
    avatar: 'https://www.dropbox.com/s/8rdxhf8af9b7tzl/DamVinhHung.jpg?dl=1',
  },
};

const artistsReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default artistsReducer;
