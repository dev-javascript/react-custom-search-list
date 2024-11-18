/**default options */
const deop = {
  rootStyle: {
    display: 'inline-flex',
    alignItems: 'center',
    borderBottom: '1px solid lightgray',
    padding: '0.5em',
    position: 'relative',
  },
  inputStyle: {
    border: 'none',
    backgroundColor: 'white',
    outline: 'none',
    flex: 1,
  },
  placeholder: 'search',
  iconsColor: 'gray',
  searchIconStyle: {
    backgroundColor: 'white',
  },
  clearIconStyle: {
    backgroundColor: 'white',
    cursor: 'pointer',
  },
  popperStyle: {
    zIndex: 2,
    background: 'white',
    border: '1px solid lightgray',
    height: 'auto',
    overflowY: 'auto',
    overflowX: 'auto',
    position: 'fixed',
    boxShadow: `rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px`,
  },
  onKeyDown: () => {},
  onBlur: () => {},
  fullWidth: false,
  placement: 'bottom',
};
export default deop;
