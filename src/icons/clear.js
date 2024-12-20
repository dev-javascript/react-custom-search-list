import React from 'react'; /* eslint-disable-line no-unused-vars */
export default function (props) {
  const {value, onClear} = props;
  return (
    <svg
      width="20"
      height="20"
      focusable="false"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="gray"
      onClick={(e) => {
        onClear(e);
      }}
      style={{
        backgroundColor: 'white',
        cursor: 'pointer',
        opacity: value.length ? 1 : 0,
      }}>
      <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.58 12 5 17.58 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
    </svg>
  );
}
