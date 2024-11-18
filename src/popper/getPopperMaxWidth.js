/**
 *
 * @param {Object} popperEl
 * @param {Number} marginRight
 * @return {Number}
 */
export default function (popperEl, marginRight) {
  const {left} = popperEl.getBoundingClientRect();
  const maxWidth = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0) - left - marginRight;
  return maxWidth;
}
