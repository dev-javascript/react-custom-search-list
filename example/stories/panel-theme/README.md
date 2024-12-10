#### `panel` theme + Constant suggestion list

```jsx
import React, {useState} from 'react';
import ReactCustomSearchList from 'react-custom-search-list';
import 'react-custom-search-list/style/react-custom-search-list.css';
function App() {
  const [value, setValue] = useState('');
  return (
    <ReactCustomSearchList
      value={value}
      onChange={(e) => setValue(e.target.value)}
      onClear={() => setValue('')}
      theme="panel"
      fullWidth
      corner>
      {/**Render your suggestions list here*/}
      <ul>
        <li>
          <button onClick={() => setValue('Option A')}>Option A</button>
        </li>
        <li>
          <button onClick={() => setValue('Option B')}>Option B</button>
        </li>
        <li>
          <a href="https://github.com/dev-javascript/react-custom-search-list" target="_blank">
            Github Link
          </a>
        </li>
        <li>
          <a href="https://www.npmjs.com/package/react-custom-search-list" target="_blank">
            NPM Link
          </a>
        </li>
      </ul>
    </ReactCustomSearchList>
  );
}
<App />;
```
