
const initialState = {
  1: {
    id: 1,
    title: 'Chia Tay Trong Mua',
    artistId: 1,
    albumId: 1,
    url: 'https://www.dropbox.com/s/bplmds25ebqbyfg/ChiaTayTrongMua.mp3?dl=1',
  },
  2: {
    id: 2,
    title: 'Ve',
    artistId: 2,
    albumId: 2,
    url: 'https://www.dropbox.com/s/asbuyjudiov3f2j/Ve.mp3?dl=1',
  },
  3: {
    id: 3,
    title: 'Bon Chu Lam',
    artistId: 2,
    albumId: 2,
    url: 'https://www.dropbox.com/s/lio0f81hl8g2i8q/BonChuLam.mp3?dl=1',
  },
  4: {
    id: 4,
    title: 'Ngoc',
    artistId: 1,
    albumId: 3,
    url: 'https://www.dropbox.com/s/qamuomcak9c1nl0/Ngoc.mp3?dl=1',
  },
  5: {
    id: 5,
    title: 'Vet Mua',
    artistId: 3,
    albumId: 4,
    url: 'https://www.dropbox.com/s/14k3miuvp2qx7yp/VetMua.mp3?dl=1',
  },
  6: {
    id: 6,
    title: 'Da Khuc',
    artistId: 4,
    albumId: 5,
    url: 'https://www.dropbox.com/s/we5swdq12nwadfx/DaKhuc.mp3?dl=1',
  },
  7: {
    id: 7,
    title: 'Trai Tim Em Cung Biet Dau',
    artistId: 5,
    albumId: 6,
    url: 'https://www.dropbox.com/s/l1krdrcj2l0adeh/TraiTimEmCungBietDau.mp3?dl=1',
  },
  8: {
    id: 8,
    title: 'Diem Xua',
    artistId: 6,
    albumId: 7,
    url: 'https://www.dropbox.com/s/99u0jqm8rzw1dis/DiemXuaDVH.mp3?dl=1',
  },
};

const songsReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default songsReducer;
