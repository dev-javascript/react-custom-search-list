import createPopper from './createPopper.js';
import getPopperMaxHeight from './getPopperMaxHeight.js';
import getPopperMaxWidth from './getPopperMaxWidth.js';
import Popper from './popper.js';

const getDeps = () => ({
  createPopper,
  getPopperMaxHeight,
  getPopperMaxWidth,
});
export default Popper.bind(null, getDeps);
