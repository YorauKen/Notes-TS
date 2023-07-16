import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';


const ToggleThemeComponent: React.FC = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  useEffect(() => {
    if (isDarkTheme) {
      document.body.removeAttribute('data-bs-theme');
    } else {
      document.body.setAttribute('data-bs-theme', 'dark');
    }
  });

  return (
	<>
	{
	isDarkTheme &&
	<Button variant='dark' onClick={() => setIsDarkTheme(!isDarkTheme)}>Dark</Button> 
	}
	{
	!isDarkTheme && 
	<Button variant='light' onClick={() => setIsDarkTheme(!isDarkTheme)}>Light</Button>
	}
    
	</>
  );
};

export default ToggleThemeComponent;
