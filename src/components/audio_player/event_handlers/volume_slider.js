export function handleVolume(e) {
  const newVolume = e.target.value / 100;
  this.audioRef.volume = newVolume;
}

export function handleMute() {
  const { volume } = this.audioRef;

  this.setState({
    preMuteVolume: volume * 100,
  });

  this.audioRef.volume = 0;
}

export function handleUnmute(preMuteVolume) {
  return () => { this.audioRef.volume = preMuteVolume / 100; };
}

export function updateVolume() {
  const { volume } = this.audioRef;
  this.setState({
    volume: volume * 100,
  });
}
