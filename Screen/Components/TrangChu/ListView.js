import React, { Component } from 'react';
import {

  StyleSheet
} from 'react-native';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Body } from 'native-base';
export default class ListView extends Component {
  render() {
    return (

        <Content>
          <List>
            <ListItem style={styles.ListItem}>
              <Thumbnail square size={80} source={this.props.image} />
              <Body>
                <Text>{this.props.title}</Text>
                <Text note>{this.props.description}</Text>
                <Text note style={{fontWeight:'600'}}>{this.props.place}</Text>
              </Body>
              <Text style={{color:'blue', fontSize: 12}}>{this.props.wages}</Text>
              <Text style={{color:'blue'}}> View</Text>

            </ListItem>
          </List>
        </Content>

    );
  }
}

const styles = StyleSheet.create({

})
