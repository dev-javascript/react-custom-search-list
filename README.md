# react-custom-search-list

React Custom Search List is a powerful and flexible search input component for React. It allows developers to create a fully customizable suggestions list that can display regardless of the current input. The component enhances user experience by providing instant visual feedback through dynamic popups, enabling users to seamlessly type and select from tailored search suggestions.

Whether you want to showcase a constant list of options or dynamically adapt to user inputs, React Custom Search List offers the versatility you need to deliver an engaging search experience.

## Features

- Dynamic suggestions list

- Responsive

- Clear button

- `Rtl` support
 
- Flexible style

## Installation

> $ npm install react-custom-search-list --save

or

> $ yarn add react-custom-search-list

If you need to directly include script in your html, use the following links :

```js
<script src="https://unpkg.com/react-custom-search-list@latest/dist/react-custom-search-list.min.js"></script>
```

## Minimal Usage

```js
import {useState} from 'react';
import ReactCustomSearchList from 'react-custom-search-list';
function App(){
    const [searchValue, setSearchValue] = useState('');
    return (
        <ReactCustomSearchList fullWidth  value={searchValue} setValue={setSearchValue}>
            /**Render your suggestions list here */
            <ul>
              <li>Option A</li>
              <li>Option B</li>
              <li>Option C</li>
            </ul>
        </ReactCustomSearchList>
    );
}
```

## Props

- value
    - type : `String`
    - description : input value
- setValue
    - type : `Func`
    - description : setState function for input value
- children
    - type : `ReactNode`
    - description :  suggestions list
- rootStyle?
    - type : `Object`
    - description : style object of the `root` element 
- inputStyle?
    - type : `Object`
    - description :  style object of the `input` element
- placeholder?
    - type : `String`
    - default : `"search"`
- iconsColor?
    - type : `String`
    - description : svg icon's color
    - default : `"gray"` 
- searchIconStyle?
    - type : `Object`
    - description :  style object of the magnifying icon
- clearIconStyle?
    - type : `Object`
    - description :  style object of the clear icon
- popperStyle?
    - type : `Object`
    - description :  style object of the popper container
- onKeyDown?
    - type : `Func`
    - description :  keydown event for input
- onBlur?
    - type : `Func`
    - description :  blur event for input
- fullWidth?
    - type : `Boolean`
    - description :  set popper width same as input
- placement?  
    - type : `'auto'| 'auto-start'| 'auto-end'| 'top'| 'top-start'| 'top-end'| 'bottom'| 'bottom-start'| 'bottom-end'| 'right'| 'right-start'| 'right-end'| 'left'| 'left-start'| 'left-end'`
    - description :  popper's placement

## Test

> $ npm run test

## License

MIT