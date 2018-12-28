export function toggleShuffle(isOnShuffle) {
  return () => {
    this.setState({ isOnShuffle: !isOnShuffle });
  };
}

export function toggleLoop(isOnLoop) {
  return () => {
    this.setState({ isOnLoop: !isOnLoop });
  };
}
