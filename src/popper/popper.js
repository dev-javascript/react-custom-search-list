import React, {useLayoutEffect, useRef} from 'react';
export default function Popper(getDeps, props) {
  const {createPopper, getPopperMaxHeight, getPopperMaxWidth} = getDeps();
  const {rootRef, children, style, fullWidth, placement} = props;
  const popperRef = useRef();
  const ref = useRef();
  ref.current = ref.current || {};
  useLayoutEffect(() => {
    popperRef.current.style.maxHeight = getPopperMaxHeight(rootRef.current, 8) + 'px';
    const popperIns = createPopper(rootRef.current, popperRef.current, fullWidth, placement);
    ref.current.popperIns = popperIns;
    return () => {
      popperIns.destroy();
    };
  }, []);
  useLayoutEffect(() => {
    ref.current &&
      ref.current.popperIns &&
      ref.current.popperIns.update().then(() => {
        popperRef.current.style.maxWidth = getPopperMaxWidth(popperRef.current, 8) + 'px';
      });
  }, [children]);
  return (
    <>
      <div ref={popperRef} className="rc-search-suggestions-popper" style={style} tabIndex={0}>
        {children}
      </div>
    </>
  );
}
