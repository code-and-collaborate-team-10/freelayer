import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
  layout: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#dcdcdc',
  },
  navBar: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: 100,
  },
  navBar: {
    justifyContent: 'flex-start',
    borderColor: 'grey',
  },

  dropDown: {
    borderColor: '#ccc',
    bgColor: 'white',
    tintColor: '#666666',
    activityTintColor: 'green',
  },

  statContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    gap: 50,
    margin: 30,
  },
});

export const profileImage = {
  horses: {
    '1': require('../assets/horse.png'),
    borderRadius: '50%',
  },
};
