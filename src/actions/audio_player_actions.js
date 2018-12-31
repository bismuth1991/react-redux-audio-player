export const FORWARD = 'FORWARD';
export const BACKWARD = 'BACKWARD';
export const SHUFFLE = 'SHUFFLE';
export const RECEIVE_FORWARD = 'RECEIVE_FORWARD';
export const RECEIVE_BACKWARD = 'RECEIVE_BACKWARD';
export const RECEIVE_SHUFFLE = 'RECEIVE_SHUFFLE';

export const forward = () => ({
  type: FORWARD,
});

export const backward = () => ({
  type: BACKWARD,
});

export const shuffle = () => ({
  type: SHUFFLE,
});
