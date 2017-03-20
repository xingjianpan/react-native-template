import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import MyScene from './components/MyScene';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 65 }}>
      <Scene key="main">
        <Scene
          onRight={() => Actions.s2()}
          rightTitle="Scene2"
          key="s1"
          component={MyScene}
          title="Scene1"
          initial
        />
        <Scene key="s2" component={MyScene} title="Scene2" />
      </Scene>
    </Router>
  );
};

export default RouterComponent;
