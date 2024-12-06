import {createPopper} from '@popperjs/core/lib/popper-lite';
import flip from '@popperjs/core/lib/modifiers/flip';
import preventOverflow from '@popperjs/core/lib/modifiers/preventOverflow';
import computeStyles from '@popperjs/core/lib/modifiers/computeStyles';
preventOverflow.options = {padding: 0, boundariesElement: 'viewport'};
export default function (ref, popper, fullWidth, placement) {
  const op = {placement, strategy: 'fixed', modifiers: [flip, preventOverflow]};
  if (fullWidth == true) {
    op.placement = 'bottom-start';
    op.modifiers.push({
      name: 'sameWidth',
      enabled: true,
      fn: ({state}) => {
        state.styles.popper.width = `${state.rects.reference.width}px`;
      },
      phase: 'beforeWrite',
      requires: [computeStyles],
    });
  }
  return createPopper(ref, popper, op);
}
