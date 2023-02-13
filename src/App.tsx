import React from 'react';
import { useDispatch } from 'react-redux';
import {setName,setAge} from './redux/reducers/userReducer';
import { setThemeStatus } from './redux/reducers/themeReducer';


import {userAppSelector} from './redux/hooks/useAppSelector';

function App() {

  const dispatch = useDispatch();
  const user = userAppSelector(state => state.user);
  const theme =  userAppSelector(state => state.theme);

  const changeName = (newName: string) => {
    dispatch(setName(newName));
  }

  const changeAge = (newAge: number) => {
    dispatch(setAge(newAge));
  }

  const switchTheme = (newtheme: string) => dispatch(setThemeStatus(newtheme));

  const handleNameInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    changeName(e.target.value);
}

  const handleAgeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    changeAge(parseInt((e.target.value)) );
}

  const handleSwitchTheme = () =>{
    switchTheme(theme.status === 'light' ? 'dark' : 'light');
  }


  return (
    <div style={{backgroundColor: theme.status === 'light' ? '#fff' : '#000',
                color:theme.status === 'light' ? '#000' : '#fff'
    }}>
      Meu nome é: {user.name} e tenho {user.age}anos<br />
      Tema:{theme.status}

      <hr />
      <input type="text" value={user.name} onChange={handleNameInput} />
      <input type="text" value={user.age} onChange={handleAgeInput} />

      <hr />
      <button onClick={handleSwitchTheme}>Switch Theme</button>
    </div>
  );
}

export default App;
