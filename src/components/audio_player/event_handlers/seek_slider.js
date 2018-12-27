const convertTime = (time) => {
  const minutes = Math.floor(time / 60);

  let seconds = Math.floor(time - minutes * 60);
  if (seconds < 10) {
    seconds = `0${seconds}`;
  }

  return `${minutes}:${seconds}`;
};

export const getTotalAudioTime = () => {
  const { duration } = this.audioRef;

  this.setState({
    totalAudioTime: convertTime(duration),
  });
};

export const updateCurrentAudioTime = () => {
  const { duration, currentTime } = this.audioRef;
  const seekValue = (currentTime / duration * 100).toString();

  this.setState({
    currentAudioTime: convertTime(currentTime),
    seekValue,
  });
};

export const handleSeek = (e) => {
  const { duration } = this.audioRef;

  const seekTime = duration * (e.target.value / 100);
  this.audioRef.currentTime = seekTime;
};
