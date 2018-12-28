import * as seekSliderHandlers from './seek_slider';
import * as playPauseHandlers from './play_pause_button';
import * as volumeHandlers from './volume_slider';
import * as shuffleLoopHandlers from './shuffle_loop_button';

export default {
  ...seekSliderHandlers,
  ...playPauseHandlers,
  ...volumeHandlers,
  ...shuffleLoopHandlers,
};
