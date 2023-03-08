import { View, Button, Image, InputText } from 'react-native';
import { globalStyles, profileImage } from '../../styles/GlobalStyles';
import useState from 'react-native';
import DropdownMenu from 'react-native-dropdown-menu';

export default function HorseProfile() {
  const [state, setState] = useState(false);

  const dropDownHandler = (state) => {
    return setState();
  };
  return (
    <View style={globalStyles.layout}>
      <View style={globalStyles.navBar}>
        <Image source={profileImage.horses[1]} />
        <InputText title='Name' />
        <InputText title='Age' />
      </View>
      <View style={globalStyles.statContainer}>
        <DropdownMenu style={globalStyles.dropDown} />

        <Button title='Save'></Button>
      </View>
    </View>
  );
}
