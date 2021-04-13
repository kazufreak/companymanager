import { createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Home from '../compornent/Home';
import SubPri from '../compornent/subPriv'

const mainStack = createStackNavigator({
    Home:{screen: Home},
    subPri:{screen: SubPri,name:'呼吸確認'}

},{
    initialRouteName: 'Home',
}
)

const AppContainer = createAppContainer(mainStack);

export default AppContainer;