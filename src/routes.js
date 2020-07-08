import React from 'react'
import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/FontAwesome'
//PAGES
import Feed from './pages/Feed';
import Photo from './pages/AddPhoto';
import Profile from './pages/Profile';
import Login from './pages/login';
import register from './pages/register';

const AuthRoutes = createStackNavigator({
  Login: {screen: Login, navigationOptions: {title: 'Login'}},
  Register: {screen: register, navigationOptions: {title: 'Registro'}
  }},{
    initialRouteName: 'Login'
  })



const loginOrProfile = createSwitchNavigator({
  Profile,
  AuthRoutes,
},{
  initialRouteName: 'AuthRoutes'
}
)


MenuRoutes = {
  Feed: {
    name: "Feed",
    screen: Feed,
    navigationOptions: {
      title: "Feed",
      tabBarIcon: ({tintColor}) => <Icon name='feed' size={30} color={tintColor}/>
    }
  },
  Add: {
    name: "AddPhoto",
    screen: Photo,
    navigationOptions: {
      title: "Add Picture",
      tabBarIcon: ({tintColor}) => <Icon name='camera' size={30} color={tintColor}/>
    }
  },
  Profile: {
    name: "Profile",
    screen: loginOrProfile,
    navigationOptions: {
      title: "Profile",
      tabBarIcon: ({tintColor}) => <Icon name='user' size={30} color={tintColor}/>
    }
  },
}



const MyNavigator = createBottomTabNavigator (MenuRoutes,{
    initialRouteName: 'Feed',
    tabBarOptions: {
      showLabel: true,
    }
    }
  );

export default createAppContainer(MyNavigator);

