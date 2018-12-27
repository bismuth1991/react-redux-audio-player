import * as seekSliderHandlers from './seek_slider';
import * as playPauseHandlers from './play_pause_button';
import * as volumeHandlers from './volume_slider';

export default {
  ...seekSliderHandlers,
  ...playPauseHandlers,
  ...volumeHandlers,
};
