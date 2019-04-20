import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class UpdateAnnonce extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  static navigationOptions = {

    title:'Nissan'
  }

  render() {
    return (
      <View>
        <Text> textInComponent </Text>
      </View>
    );
  }
}
