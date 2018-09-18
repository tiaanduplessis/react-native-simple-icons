import React, { PureComponent } from 'react'
import {
  Platform,
  TouchableHighlight,
  View,
  StyleSheet,
} from 'react-native' // eslint-disable-line

import ZocialIcon from 'react-native-vector-icons/Zocial' // eslint-disable-line
import OcticonIcon from 'react-native-vector-icons/Octicons' // eslint-disable-line
import MaterialIcon from 'react-native-vector-icons/MaterialIcons' // eslint-disable-line
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons' // eslint-disable-line
import Ionicon from 'react-native-vector-icons/Ionicons' // eslint-disable-line
import FoundationIcon from 'react-native-vector-icons/Foundation' // eslint-disable-line
import EvilIcon from 'react-native-vector-icons/EvilIcons' // eslint-disable-line
import EntypoIcon from 'react-native-vector-icons/Entypo' // eslint-disable-line
import FAIcon from 'react-native-vector-icons/FontAwesome' // eslint-disable-line
import SimpleLineIcon from 'react-native-vector-icons/SimpleLineIcons' // eslint-disable-line
import FeatherIcon from 'react-native-vector-icons/Feather' // eslint-disable-line

const customIcons = {}

export const addCustomIcon = (id = '', customIcon) => {
  customIcons[id.toLowerCase()] = customIcon
}

function getIconType(type = '') {
  const t = type.toLowerCase()

  if (customIcons[t]) {
    return customIcons[t]
  }

  const typeMap = {
    zocial: ZocialIcon,
    octicon: OcticonIcon,
    material: MaterialIcon,
    'material-community': MaterialCommunityIcon,
    ionicon: Ionicon,
    foundation: FoundationIcon,
    evilicon: EvilIcon,
    entypo: EntypoIcon,
    'font-awesome': FAIcon,
    'simple-line-icon': SimpleLineIcon,
    feather: FeatherIcon,
  }

  return typeMap[t] || MaterialIcon
}

const styles = StyleSheet.create({
  button: {
    margin: 7,
  },
  raised: {
    ...Platform.select({
      ios: {
        shadowColor: 'rgba(0,0,0, .4)',
        shadowOffset: { height: 1, width: 1 },
        shadowOpacity: 1,
        shadowRadius: 1,
      },
      android: {
        elevation: 2,
      },
    }),
  },
})

export default class Icon extends PureComponent {
    static defaultProps = {
      underlayColor: '#fff',
      reverse: false,
      raised: false,
      size: 24,
      color: '#111',
      reverseColor: '#fff',
    };

    render() {
      const {
        name,
        size,
        type,
        color,
        iconStyle,
        underlayColor,
        reverse,
        raised,
        containerStyle,
        reverseColor,
        onPress,
        ...attributes
      } = this.props

      const CurrentIcon = getIconType(type)
      const Component = onPress ? TouchableHighlight : View

      return (
        <View style={containerStyle}>
          <Component
            {...attributes}
            underlayColor={reverse ? color : underlayColor || color}
            style={[
              (reverse || raised) && styles.button,
              (reverse || raised) && {
                borderRadius: size + 4,
                height: size * 2 + 4,
                width: size * 2 + 4,
              },
              raised && styles.raised,
              {
                backgroundColor: reverse ? color : (raised ? 'white' : 'transparent'), // eslint-disable-line
                alignItems: 'center',
                justifyContent: 'center',
              },
            ]}
            onPress={onPress}
          >
            <CurrentIcon
              style={[{ backgroundColor: 'transparent' }, iconStyle]}
              size={size}
              name={name}
              color={reverse ? reverseColor : color}
            />
          </Component>
        </View>
      )
    }
}
