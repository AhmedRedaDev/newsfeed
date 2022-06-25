import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {startApp} from 'app/App';
import {Provider} from 'react-redux';
import {rootStore} from 'store';
import {linkingConfig} from 'app/appConfig';
import {HomeTabs} from 'app/navigation';

export default function App() {
  const [isCongiged, setIsConfiged] = useState(false);
  useEffect(() => {
    _startApp();
  }, []);

  const _startApp = async () => {
    await startApp();
    setIsConfiged(true);
  };
  return (
    <Provider store={rootStore}>
      {isCongiged && <RenderNavigationContainer />}
    </Provider>
  );
}

const RenderNavigationContainer = (props) => (
  <NavigationContainer linking={linkingConfig} {...props}>
    <HomeTabs />
  </NavigationContainer>
);
