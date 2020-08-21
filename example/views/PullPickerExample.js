// PullPickerExample.js

'use strict';

import React, {Component} from 'react';
import {View, ScrollView} from 'react-native';

import {NavigationPage, ListRow, PullPicker} from '@yz1311/teaset';

export default class PullPickerExample extends Component {

  static navigationOptions = ({navigation})=>{
    return {
      headerTitle: 'PullPicker'
    };
  }

  constructor(props) {
    super(props);
    this.items = [
      'Aged Pu\'er',
      'Bohea',
      'Chrysanthemum',
      'Hyson',
      'Jasmine',
      'Keemun',
      'Loungjing',
      'Pekoe',
      'Tieguanyin',
    ];
    this.state = {
      selectedIndex: null,
      modalSelectedIndex: null,
    };
  }

  show() {
    PullPicker.show(
      'Select item',
      this.items,
      this.state.selectedIndex,
      (item, index) => this.setState({selectedIndex: index})
    );
  }

  showModal() {
    PullPicker.show(
      'Select item',
      this.items,
      this.state.modalSelectedIndex,
      (item, index) => this.setState({modalSelectedIndex: index}),
      {modal: true}
    );
  }

  render() {
    let {selectedIndex, modalSelectedIndex} = this.state;
    let selected = (selectedIndex || selectedIndex === 0) ? this.items[selectedIndex] : null;
    let modalSelected = (modalSelectedIndex || modalSelectedIndex === 0) ? this.items[modalSelectedIndex] : null;
    return (
      <ScrollView style={{flex: 1}}>
        <View style={{height: 20}} />
        <ListRow title='Default' detail={selected} onPress={() => this.show()} topSeparator='full' />
        <ListRow title='Modal' detail={modalSelected} onPress={() => this.showModal()} bottomSeparator='full' />
      </ScrollView>
    );
  }

}

