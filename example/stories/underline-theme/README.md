```jsx
import React, {useState} from 'react';
import ReactCustomSearchList from 'react-custom-search-list';
import 'react-custom-search-list/style/react-custom-search-list.css';

const items = ['Item A', 'Item B', 'Item C', 'Item D'];

function App() {
  const [value, setValue] = useState('');
  return (
    <ReactCustomSearchList
      value={value}
      onChange={(e) => setValue(e.target.value)}
      onClear={() => setValue('')}
      theme="underline"
      fullWidth
      corner>
      {/**Render your suggestions list here*/}
      {value
        ? items
            .filter((item) => item.toLowerCase().includes(value.toLowerCase()))
            .map((item) => (
              <div key={item} style={{margin: '5px'}}>
                <p onClick={() => setValue(item)}>{item}</p>
              </div>
            ))
        : null}
    </ReactCustomSearchList>
  );
}
<App />;
```
