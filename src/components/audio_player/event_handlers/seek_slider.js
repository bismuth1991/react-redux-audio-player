const convertTime = (time) => {
  const minutes = Math.floor(time / 60);

  let seconds = Math.floor(time - minutes * 60);
  if (seconds < 10) {
    seconds = `0${seconds}`;
  }

  return `${minutes}:${seconds}`;
};

export function getTotalAudioTime() {
  const { duration } = this.audioRef.current;

  this.setState({
    totalAudioTime: convertTime(duration),
  });
}

export function updateCurrentAudioTime() {
  const { duration, currentTime } = this.audioRef.current;

  let seekValue;
  if (!duration) {
    seekValue = 0;
  } else {
    seekValue = (currentTime / duration * 100);
  }

  this.setState({
    currentAudioTime: convertTime(currentTime),
    seekValue,
  });
}

export function handleSeek(e) {
  const { duration } = this.audioRef.current;

  const seekTime = duration * (e.target.value / 100);
  this.audioRef.current.currentTime = seekTime;
}
