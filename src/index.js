import React, {useRef, useState, useCallback, useEffect} from 'react';
import Popper from './popper';
import MagnifierIcon from './icons/magnifier.js';
import ClearIcon from './icons/clear.js';
/**
 *
 * @param {Object} props
 * @param {React.ReactNode} [props.children=null] - will be shown in popup
 * @param {value} props.value - input value
 * @param {Function} props.onChange - onChange function for input
 * @param {Object} [props.rootStyle={}] - style object of the root element
 * @param {Object} [props.inputContainerStyle={}] - style object of the parent element of text input
 * @param {Object} [props.inputStyle={}] - style object of the input element
 * @param {String} [props.placeholder="search"]
 * @param {Function} [props.onKeyDown=()=>{}] - keydown event for input
 * @param {Function} [props.onFocus=()=>{}] - focus event for input
 * @param {Function} [props.onBlur=()=>{}] - blur event for the input
 * @param {Object} [props.popperStyle={}] - style object for popper container
 * @param {Boolean} [props.fullWidth=true] - set popper width same as input
 * @param {'auto'| 'auto-start'| 'auto-end'| 'top'| 'top-start'| 'top-end'| 'bottom'| 'bottom-start'| 'bottom-end'| 'right'| 'right-start'| 'right-end'| 'left'| 'left-start'| 'left-end'} [props.placement="bottom-start"] - popper's placement
 * @param {React.FC} [props.ClearIconComponent=ClearIcon] - custom Clear icon
 * @param {React.FC} [props.MagnifierIconComponent=MagnifierIcon] - custom Magnifier icon
 * @param {Function} [props.onClear=()=>{}] - triggerd when the user clicks on the default Clear icon
 * @param {"underline"|"outline"|"panel"} [props.theme="outline"] - searchbox theme
 * @param {Boolean} [props.corner=true] - if set true then border-radius would be "5px"
 * @param {Boolean} [props.autoFocus=false] - autoFocus attribute for the input element
 * @param {String} [props.inputName=""] - name attribute for the input element
 */
function ReactCustomSearchList(props) {
  const {
    children = null,
    value = '',
    onChange,
    rootStyle = {},
    inputContainerStyle = {},
    inputStyle = {},
    placeholder = 'search',
    onKeyDown = () => {},
    onFocus = () => {},
    onBlur = () => {},
    popperStyle = {},
    fullWidth = true,
    placement = 'bottom-start',
    ClearIconComponent = ClearIcon,
    MagnifierIconComponent = MagnifierIcon,
    onClear = () => {},
    theme = 'outline',
    corner = true,
    autoFocus = false,
    inputName = '',
  } = props;
  const [open, setOpen] = useState(false);
  const rootRef = useRef();
  const onClickHandler = useCallback(() => {
    setOpen(true);
  }, []);
  const onKeyDownHandler = useCallback(
    (e) => {
      if (e.key === 'Enter' || e.keyCode === 13) {
        setOpen(true);
      }
      onKeyDown(e);
    },
    [onKeyDown],
  );
  useEffect(() => {
    const rEl = document.documentElement,
      input = rootRef.current.querySelector('input');
    const mousedown = (e) => open && e.target == input && e.stopImmediatePropagation();
    rEl.addEventListener('click', mousedown, {useCapture: true});
    return () => {
      rEl.removeEventListener('click', mousedown, {useCapture: true});
    };
  }, [open]);
  useEffect(() => {
    const click = (e) => {
      setTimeout(() => {
        setOpen(false);
      });
    };
    open
      ? document.documentElement.addEventListener('click', click, {once: true, useCapture: true})
      : document.documentElement.removeEventListener('click', click, {once: true, useCapture: true});
    return () => {
      if (open) {
        document.documentElement.removeEventListener('click', click, {once: true, useCapture: true});
      }
    };
  }, [open]);
  return (
    <div className={`rc-search-suggestions-root ${theme}${corner ? ' corner' : ''}`} style={rootStyle}>
      {open && children != null && children.length ? (
        <Popper
          rootRef={rootRef}
          style={popperStyle}
          fullWidth={theme === 'panel' ? true : fullWidth}
          placement={placement}>
          {children}
        </Popper>
      ) : null}
      <div className={`rc-search-suggestions-container`} ref={rootRef} style={inputContainerStyle}>
        {MagnifierIconComponent ? <MagnifierIconComponent /> : null}
        <input
          value={value}
          onChange={onChange}
          onFocus={onFocus}
          onClick={onClickHandler}
          onKeyDown={onKeyDownHandler}
          onBlur={onBlur}
          placeholder={placeholder}
          style={inputStyle}
          autoFocus={autoFocus}
          {...(inputName ? {name: inputName} : {})}
        />
        {ClearIconComponent ? <ClearIconComponent value={value} onClear={onClear} /> : null}

        <div className="rc-search-suggestions-divider rc-search-suggestions-divider-bottom" />
        <div className="rc-search-suggestions-divider rc-search-suggestions-divider-top" />
      </div>
    </div>
  );
}
export default ReactCustomSearchList;
