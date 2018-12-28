export function handlePlay() {
  this.setState({ isPlaying: true });
}

export function handlePause() {
  this.setState({ isPlaying: false });
}

export function playAudio() {
  this.audioRef.current.play();
}

export function pauseAudio() {
  this.audioRef.current.pause();
}
