import React, {useRef, useState, useLayoutEffect, useEffect} from 'react';
import Popper from './popper';
import SearchIcon from './icons/search.js';
import CloseIcon from './icons/close.js';
import deop from './defaultOptions.js';
/**
 *
 * @param {Object} props
 * @param {value} props.value - input value
 * @param {Function} props.setValue - setState function for input value
 * @param {React.ReactNode} [props.children] - will be shown in popup
 * @param {Object} [props.rootStyle] - style object of the root element
 * @param {Object} [props.inputStyle] - style object of the input element
 * @param {String} [props.placeholder="search"]
 * @param {String} [props.iconsColor="gray"] - svg icon's color
 * @param {Object} [props.searchIconStyle] - style object for magnifying icon
 * @param {Object} [props.clearIconStyle] - style object for clear icon
 * @param {Object} [props.popperStyle] - style object for popper container
 * @param {Function} [props.onKeyDown] - keydown event for input
 * @param {Function} [props.onBlur] - blur event for the input
 * @param {Boolean} [props.fullWidth=false] - set popper width same as input
 * @param {'auto'| 'auto-start'| 'auto-end'| 'top'| 'top-start'| 'top-end'| 'bottom'| 'bottom-start'| 'bottom-end'| 'right'| 'right-start'| 'right-end'| 'left'| 'left-start'| 'left-end'} [props.placement="bottom"] - popper's placement
 */
function ReactCustomSearchList(props) {
  const {
    children,
    value,
    setValue,
    rootStyle,
    inputStyle,
    placeholder,
    iconsColor,
    searchIconStyle,
    clearIconStyle,
    onKeyDown,
    onBlur,
    popperStyle,
    fullWidth,
    placement,
  } = {
    ...deop,
    ...props,
  };
  const [open, setOpen] = useState(false);
  const [isBlur, setIsBlur] = useState(false);
  const rootRef = useRef();
  const onFocus = (e) => {
    setOpen(true);
  };
  const onBlurHandle = (e) => {
    e.preventDefault();
    console.log('onBlurHandle');
    debugger;
    setOpen(false);
    setIsBlur(true);
    onBlur(e);
  };
  useEffect(() => {
    if (isBlur) {
      console.log('useEffect');
    }
  }, [isBlur]);
  return (
    <div className="rc-search-suggestions-root">
      {open ? (
        <Popper
          rootRef={rootRef}
          style={{...deop.popperStyle, ...popperStyle}}
          fullWidth={fullWidth}
          placement={placement}>
          {children}
        </Popper>
      ) : null}
      <div className="rc-search-suggestions-container" ref={rootRef} style={{...deop.rootStyle, ...rootStyle}}>
        <SearchIcon
          className="rc-search-suggestions-magnifying"
          fill={iconsColor}
          style={{...deop.searchIconStyle, ...searchIconStyle}}
        />
        <input
          onFocus={onFocus}
          onBlur={onBlurHandle}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder={placeholder}
          className="rc-search-suggestions-input"
          style={{...deop.inputStyle, ...inputStyle}}
          onKeyDown={onKeyDown}
        />
        <CloseIcon
          className="rc-search-suggestions-close"
          fill={iconsColor}
          style={{opacity: value.length ? 1 : 0, ...deop.clearIconStyle, ...clearIconStyle}}
          onClick={() => {
            setValue('');
          }}
        />

        {/* <div
          className={
            'rc-search-suggestions-divider ' + open
              ? 'rc-search-suggestions-divider-open'
              : 'rc-search-suggestions-divider-close'
          }
        /> */}
      </div>
    </div>
  );
}
export default ReactCustomSearchList;
