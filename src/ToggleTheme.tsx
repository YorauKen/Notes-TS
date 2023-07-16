import React, {  useState } from 'react';
import { Button } from 'react-bootstrap';


const ToggleThemeComponent: React.FC = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const toggle = () => {
	setIsDarkTheme(!isDarkTheme)
    if (isDarkTheme) {
      document.body.removeAttribute('data-bs-theme');
    } else {
      document.body.setAttribute('data-bs-theme', 'dark');
    }
  };

  return (
	<>
	{
		isDarkTheme &&
		<Button variant='light' onClick={toggle}>Light</Button> 
	}
	{
		!isDarkTheme && 
		<Button variant='dark' onClick={toggle}>Dark</Button>
	}
    
	</>
  );
};

export default ToggleThemeComponent;
