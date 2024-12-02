```jsx
import React, {useState} from 'react';
import ReactCustomSearchList from 'react-custom-search-list';
import 'react-custom-search-list/style/react-custom-search-list.css';
function App() {
  const [searchValue, setSearchValue] = useState('');
  return (
    <ReactCustomSearchList fullWidth value={searchValue} setValue={setSearchValue}>
      {/**Render your suggestions list here*/}
      <ul>
        <li>
          <button
            onClick={() => {
              console.log('onclick');
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
