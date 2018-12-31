const getPlayedSongIndices = (playedSongIndices, playingSongIndex, songIds) => {
  let newPlayedSongIndices = [...playedSongIndices];

  if (!playedSongIndices.includes(playingSongIndex)) {
    newPlayedSongIndices = [...playedSongIndices, playingSongIndex];
  }
  if (newPlayedSongIndices.length === songIds.length) {
    newPlayedSongIndices = [];
  }

  return newPlayedSongIndices;
};

export const forwardLogic = (state) => {
  const { songIds, playingSongIndex, playedSongIndices } = state;

  let newPlayingSongIndex = playingSongIndex + 1;
  if (newPlayingSongIndex > songIds.length - 1) {
    newPlayingSongIndex = 0;
  }

  const newPlayedSongIndices = getPlayedSongIndices(
    playedSongIndices, playingSongIndex, songIds,
  );

  return {
    ...state,
    playingSongIndex: newPlayingSongIndex,
    prevSongIndex: playingSongIndex,
    playedSongIndices: newPlayedSongIndices,
  };
};

export const backwardLogic = (state) => {
  const {
    songIds, playingSongIndex, playedSongIndices, prevSongIndex,
  } = state;

  let newPrevSongIndex = prevSongIndex - 1;
  if (newPrevSongIndex < 0) {
    newPrevSongIndex = songIds.length - 1;
  }

  const newPlayedSongIndices = getPlayedSongIndices(
    playedSongIndices, playingSongIndex, songIds,
  );

  return {
    ...state,
    playingSongIndex: prevSongIndex,
    prevSongIndex: newPrevSongIndex,
    playedSongIndices: newPlayedSongIndices,
  };
};

export const shuffleLogic = (state) => {
  const { songIds, playedSongIndices, playingSongIndex } = state;
  const history = [...playedSongIndices, playingSongIndex];

  const nextSongIndices = songIds.map((_, index) => index)
    .filter(index => !history.includes(index));

  let nextSongIndex;
  if (nextSongIndices.length === 1) {
    [nextSongIndex] = nextSongIndices;
  } else {
    nextSongIndex = nextSongIndices[Math.floor(Math.random() * nextSongIndices.length)]
      || Math.floor(Math.random() * songIds.length);
  }

  const newPlayedSongIndices = getPlayedSongIndices(
    playedSongIndices, playingSongIndex, songIds,
  );

  return {
    ...state,
    playingSongIndex: nextSongIndex,
    prevSongIndex: playingSongIndex,
    playedSongIndices: newPlayedSongIndices,
  };
};
