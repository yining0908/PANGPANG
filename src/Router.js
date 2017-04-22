import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import Channel from './components/Channel';
import Details from './components/Details';
import Account from './components/Account';
import Change from './components/Change';
import Logout from './components/Logout';
import Setting from './components/Setting';
import Collection from './components/Collection';
import lan from './components/lan';

export const ChannelStack = StackNavigator({
  Channel: {
    screen: Channel,
    navigationOptions: {
      header: () => ({
        title: 'CHANNEL',
      })
    },
  },
  Details: {
    screen: Details,
    navigationOptions: {
      header: () => ({
        title: 'BBC LEARNING',
      })
    },
  },
});

export const AccountStack = StackNavigator({
  Account: {
    screen: Account,
    navigationOptions: {
      header: () => ({
        title: 'ACCOUNT',
      })
    },
  },
  Change: {
    screen: Change,
    navigationOptions: {
      header: () => ({
        title: 'Change Your Photo',
      })
    },
  },
  Logout: {
    screen: Logout,
    navigationOptions: {
      header: () => ({
        title: 'Please Login Again',
      })
    },
  },
});

export const SettingStack = StackNavigator({
  Setting: {
    screen: Setting,
    navigationOptions: {
      header: () => ({
        title: 'SETTING',
      })
    },
  },
  lan: {
screen:lan,
navigationOptions: {
header: () => ({
 title: 'LANGUAGE',
})
 },
 },
});
export const CollectionStack = StackNavigator({
  Collection: {
    screen: Collection,
    navigationOptions: {
      header: () => ({
        title: 'COLLECTION',
      })
    },
  },
});

export const TabRouter = TabNavigator(
  {
    ChannelStack: {
      screen: ChannelStack,
      navigationOptions: {
        tabBar: {
          label: 'Channel',
          icon: ({ tintColor }) => <Icon name="tv" size={32} color={tintColor} />
        },
      },
    },
    CollectionStack: {
      screen: CollectionStack,
      navigationOptions: {
        tabBar: {
          label: 'Collection',
          icon: ({ tintColor }) => <Icon name="bookmark" size={32} color={tintColor} />

        },
      },
    },
    AccountStack: {
      screen: AccountStack,
      navigationOptions: {
        tabBar: {
          label: 'Account',
          icon: ({ tintColor }) => <Icon name="account-circle" size={32} color={tintColor} />
        },
      },
    },
    SettingStack: {
      screen: SettingStack,
      navigationOptions: {
        tabBar: {
          label: 'Setting',
          icon: ({ tintColor }) => <Icon name="settings" size={32} color={tintColor} />
        },
      },
    },
  },
  {
    animationEnabled: 'true',
      tabBarOptions: {
    activeTintColor: '#4682b4',

  }
  }

);


