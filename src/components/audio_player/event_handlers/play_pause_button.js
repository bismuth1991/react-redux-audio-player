export function handlePlay() {
  this.setState({ isPlaying: true });
}

export function handlePause() {
  this.setState({ isPlaying: false });
}

export function playPauseAudio() {
  const { isPlaying } = this.state;

  if (isPlaying) {
    this.audioRef.pause();
  } else {
    this.audioRef.play();
  }
}
