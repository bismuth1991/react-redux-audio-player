export function handleVolume(e) {
  const newVolume = e.target.value / 100;
  this.audioRef.current.volume = newVolume;
}

export function handleMute() {
  const { volume } = this.audioRef.current;

  this.setState({
    preMuteVolume: volume * 100,
  });

  this.audioRef.current.volume = 0;
}

export function handleUnmute(preMuteVolume) {
  return () => { this.audioRef.current.volume = preMuteVolume / 100; };
}

export function updateVolume() {
  const { volume } = this.audioRef.current;
  this.setState({
    volume: volume * 100,
  });
}
