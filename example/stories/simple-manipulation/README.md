```jsx
import React, {useState} from 'react';
import ReactCustomSearchList from 'react-custom-search-list';
import 'react-custom-search-list/style/react-custom-search-list.css';
function App() {
  const [value, setValue] = useState('');
  return (
    <ReactCustomSearchList
      fullWidth={false}
      value={value}
      corner={false}
      theme="panel"
      onChange={(e) => setValue(e.target.value)}
      onClear={() => setValue('')}>
      {/**Render your suggestions list here*/}
      <ul>
        <li>
          <button
            id="ccc"
            onClick={() => {
              console.log('button click');
            }}>
            Option A
          </button>
        </li>
        <li>Option B</li>
        <li>Option C</li>
      </ul>
    </ReactCustomSearchList>
  );
}
<App />;
```
