import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen59104682Navigator from '../features/BlankScreen59104682/navigator';
import UserProfile104681Navigator from '../features/UserProfile104681/navigator';
import Maps104662Navigator from '../features/Maps104662/navigator';
import Settings104640Navigator from '../features/Settings104640/navigator';
import Settings104625Navigator from '../features/Settings104625/navigator';
import NotificationList104624Navigator from '../features/NotificationList104624/navigator';
import Maps104623Navigator from '../features/Maps104623/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen59104682: { screen: BlankScreen59104682Navigator },
UserProfile104681: { screen: UserProfile104681Navigator },
Maps104662: { screen: Maps104662Navigator },
Settings104640: { screen: Settings104640Navigator },
Settings104625: { screen: Settings104625Navigator },
NotificationList104624: { screen: NotificationList104624Navigator },
Maps104623: { screen: Maps104623Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
