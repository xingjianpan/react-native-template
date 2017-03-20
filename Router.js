import React from 'react';
import { StyleSheet,StatusBar } from 'react-native';
import { Scene, Reducer, Router, Switch, TabBar, Modal, Schema, Actions } from 'react-native-router-flux';
import {APP_STYLES} from './utils/AppStyles';
import MyScene from './components/MyScene';
import TabIcon from './components/TabIcon';
import MyAnotherScene from './components/MyAnotherScene';
import NavigationDrawer from './components/NavigationDrawer';

const RouterComponent = () => {
  return (
    <Router sceneStyle={styles.container}>
      <Scene key="modal" component={Modal}>
        <Scene key="root" hideNavBar >
          <Scene key="tabbar" component={NavigationDrawer} >
            <Scene
              key="home" tabs={true} default="Scene2"
              tabBarStyle={{ backgroundColor: APP_STYLES.primaryColor, height: 40}}
              tabBarSelectedItemStyle={{backgroundColor: APP_STYLES.primaryColor, height: 40}}
              navigationBarStyle={{ backgroundColor: APP_STYLES.primaryColor }}
            >
              <Scene key="main"
                      icon={TabIcon}
                      selectedTabIcon="ios-home"
                      tabIcon="ios-home-outline"
                      navigationBarStyle={{ backgroundColor:APP_STYLES.primaryColor }}
                      titleStyle={{ color:'white' }}
              >
                <Scene key="categories" component={MyScene} initial={true} hideNavBar={false} type="reset"/>
                <Scene key="categoryEntity" component={MyScene} />
                <Scene key="companyEntity" component={MyScene} />
                <Scene key="appointmentContainer" component={MyScene} />
              </Scene>


              <Scene key="maps" component={MyScene} icon={TabIcon}
                     title="Map"
                     selectedTabIcon="ios-map" tabIcon="ios-map-outline"
                     navigationBarStyle={{ backgroundColor:APP_STYLES.primaryColor }}
                     titleStyle={{ color:'white' }}
              />

              <Scene key="favorites" component={MyScene} icon={TabIcon} title="Favorites"
                     selectedTabIcon="ios-star" tabIcon="ios-star-outline"
                     navigationBarStyle={{ backgroundColor:APP_STYLES.primaryColor }}
                     titleStyle={{ color:'white' }}
              />

              <Scene key="appointments" component={MyAnotherScene}  icon={TabIcon} title="My Appointments"
                     selectedTabIcon="ios-alarm" tabIcon="ios-alarm-outline"
                     navigationBarStyle={{ backgroundColor:APP_STYLES.primaryColor }}
                     titleStyle={{ color:'white' }}

              />
              <Scene  key="settings" icon={TabIcon}  title="Settings"
                    selectedTabIcon="ios-settings" tabIcon="ios-settings-outline"
                    navigationBarStyle={{ backgroundColor:APP_STYLES.primaryColor }}
                    titleStyle={{ color:'white' }}
              >
                <Scene key="settingsScene" component={MyAnotherScene} title="Settings"/>
                <Scene key="term" component={MyAnotherScene}  hideTabBar={true} hideNavBar={true} />
                <Scene key="profile" component={MyAnotherScene}  hideTabBar={true} hideNavBar={true} />
                <Scene key="about" component={MyAnotherScene} hideNavBar={true} />
              </Scene>
            </Scene>
            <Scene key="s2" component={MyAnotherScene} title="Scene2" />
          </Scene>
        </Scene>
      </Scene>
    </Router>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
});


export default RouterComponent;
