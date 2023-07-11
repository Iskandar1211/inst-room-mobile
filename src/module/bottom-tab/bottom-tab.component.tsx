import {View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import CatalogIcon from 'react-native-vector-icons/FontAwesome';
import CartIcon from 'react-native-vector-icons/FontAwesome5';
import FavoriteIcon from 'react-native-vector-icons/FontAwesome5'
import {HomeScreen} from '../home.screen/home-screen.component';
import {FavoriteScreenPage} from '../favorite.screen/favorite-screen.component';
import {ProfileScreen} from '../profile-screen/profile-screen.component';
import {CartScreen} from '../cart-screen/cart-screen.component';
import {CatalogScreen} from '../catalog-screen/catalog-screen.component';

const Tab = createBottomTabNavigator();

export function BottomTab() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Catalog"
        component={CatalogScreen}
        options={{
          tabBarLabel: 'Каталог',
          tabBarIcon: ({color, size}) => (
            <CatalogIcon name="align-left" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Корзина"
        component={CartScreen}
        options={{
          tabBarLabel: 'Корзина',
          tabBarIcon: ({color, size}) => (
            <CartIcon name="shopping-bag" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={FavoriteScreenPage}
        options={{
          tabBarLabel: 'Избранное',
          tabBarIcon: ({color, size}) => (
            <FavoriteIcon name="heart" color={color} size={size} />
          ),
          tabBarBadge: 0,
        }}
      />

      <Tab.Screen
        name="Профиль"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Профиль',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
