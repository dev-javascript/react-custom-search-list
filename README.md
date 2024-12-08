# react-custom-search-list

React Custom Search List is a powerful and flexible search input component for React. It allows developers to create a fully customizable suggestions list that can display regardless of the current input. The component enhances user experience by providing instant visual feedback through dynamic popups, enabling users to seamlessly type and select from tailored search suggestions.

Whether you want to showcase a constant list of options or dynamically adapt to user inputs, React Custom Search List offers the versatility you need to deliver an engaging search experience.

## Features

- Custom suggestions list

- Responsive

- Multi Themes

- Clear button

- Rtl support

- Flexible style

- Lightweight

- autoFocus

- Open Suggestion List on Enter Key

## Installation

> $ npm install react-custom-search-list @popperjs/core --save

or

> $ yarn add react-custom-search-list @popperjs/core

If you need to directly include script in your html, use the following links :

```js
<script src="https://unpkg.com/react-custom-search-list@latest/dist/react-custom-search-list.umd.min.js"></script>
```

#### NOTE:

> Please note that `@popperjs/core` is peer dependency, meaning you should ensure it is installed before installing `react-custom-search-list`.

## Minimal Usage

```js
import {useState} from 'react';
import 'react-custom-search-list/style/react-custom-search-list.min.css';
import ReactCustomSearchList from 'react-custom-search-list';
function App() {
  const [value, setValue] = useState('');
  return (
    <ReactCustomSearchList
      fullWidth
      value={value}
      onChange={(e) => setValue(e.target.value)}
      onClear={() => setValue('')}>
      {/**Render your suggestions list here*/}
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

- **value**
  - type : `String`
  - description : input value
- **onChange**
  - type : `Func`
  - description : onChange Handler for the input value
- **onClear?**
  - type : `Func`
  - description : triggered when the user clicks on the Clear icon
- **theme?**
  - type : `"outline"|"underline"|"panel"`
  - description : searchbox theme
  - default : `"outline"`
- **autoFocus?**
  - type : `Boolean`
  - default : `Fasle`
- **children**
  - type : `ReactNode`
  - description : suggestions list
- **rootStyle?**
  - type : `Object`
  - description : style object of the `root` element
- **inputContainerStyle?**
  - type: `Object`
  - description : style object of the parent element of text input
- **inputStyle?**
  - type : `Object`
  - description : style object of the `input` element
- **placeholder?**
  - type : `String`
  - default : `"search"`
- **popperStyle?**
  - type : `Object`
  - description : style object of the popper container
- **onKeyDown?**
  - type : `Func`
  - description : keydown event for input
- **onFocus?**
  - type : `Func`
  - description : focus event for input
- **onBlur?**
  - type : `Func`
  - description : blur event for input
- **fullWidth?**
  - type : `Boolean`
  - description : set popper width same as input ( if the `theme` option is equal to `"panel"` then `fullWidth` option will not work )
  - default: `true`
- **placement?**
  - type : `'auto'| 'auto-start'| 'auto-end'| 'top'| 'top-start'| 'top-end'| 'bottom'| 'bottom-start'| 'bottom-end'| 'right'| 'right-start'| 'right-end'| 'left'| 'left-start'| 'left-end'`
  - description : popper's placement
  - default : `bottom-start`
- **ClearIconComponent?**
  - type : `React function component`
  - description : custom Clear icon
- **MagnifierIconComponent?**
  - type : `React function component`
  - description : custom Magnifier icon
- **inputName?**
  - type : `String`
  - description : name attribute for the input element
  - default : `""`
- **corner?**
  - type : `Boolean`
  - description : if it is true then the search box gets border-radius
  - default : `True`

## Test

> $ npm run test

## License

MIT
