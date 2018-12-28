
const initialState = {
  1: {
    id: 1,
    name: 'Em Gai Mua',
    coverImage: 'https://www.dropbox.com/s/rni2vqwqbodxjk9/EmGaiMua.jpg?dl=1',
  },
  2: {
    id: 2,
    name: 'Ve',
    coverImage: 'https://www.dropbox.com/s/7mjkd2ta2d7fz4f/Ve.jpg?dl=1',
  },
  3: {
    id: 3,
    name: 'Ngoc 2 (Hay De Em Quen)',
    coverImage: 'https://www.dropbox.com/s/39vecscvgow0cha/Ngoc2%28HayDeEmQuen%29.jpg?dl=1',
  },
  4: {
    id: 4,
    name: 'Vet Mua (Single)',
    coverImage: 'https://www.dropbox.com/s/hu987j3oqrjfzyt/VetMua.jpg?dl=1',
  },
  5: {
    id: 5,
    name: 'Tinh Khuc Yeu Thuong',
    coverImage: 'https://www.dropbox.com/s/c5181cpxmgm09q2/TinhKhucYeuThuong.jpg?dl=1',
  },
  6: {
    id: 6,
    name: 'Trai Tim Em Cung Biet Dau (Single)',
    coverImage: 'https://www.dropbox.com/s/xiqb3pz9k1hof9l/TraiTimEmCungBietDau.jpg?dl=1',
  },
  7: {
    id: 7,
    name: 'Ca Dao Me',
    coverImage: 'https://www.dropbox.com/s/esz0pb72cwhnr74/CaDaoMe.jpg?dl=1',
  },
};

const albumReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default albumReducer;
