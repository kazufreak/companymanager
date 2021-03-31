import { createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Home from '../compornent/Home';

const mainStack = createStackNavigator({
    Home:{screen: Homescreen},

},{
    initialRouteName: 'Home',
}
)

const AppContainer = createAppContainer(MainStack);

export default AppContainer;