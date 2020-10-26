import React,{Component}from 'react';
import {View, Text, TextInput,Modal,KeyboardAvoidingView,StyleSheet,TouchableOpacity,Alert,ScrollView} from 'react-native';
import {Input,Icon} from 'react-native-elements';
import { RFValue } from 'react-native-responsive-fontsize';
import db from '../config';
import firebase from 'firebase';
import calendar from '../components/calendar';

export default class ListScreen extends React.Component(){
   /* constructor(){
        super();
        this.state={
         isModalVisible:'false'
        }
      }
      showModal = ()=>{
        return(
        <Modal
          animationType="fade"
          transparent={true}
          visible={this.state.isModalVisible}
          >
          <View style={styles.modalContainer}>
            <ScrollView style={{width:'100%'}}>
              <KeyboardAvoidingView style={styles.KeyboardAvoidingView}>
              <Text>
                style={styles.modalTitle}
                calendar</Text>
                <Icon type = {'materialicon'} name = {'cancel'} size = {RFValue(40)} color = {'grey'}
                onPress = {()=>{
                  this.setState({
                    isModalVisible : 'false'
                  })
                }
            }
          />*/
          
        
    render(){
        return(
          <View>
              <Text> List Screen</Text>
          </View>  
        )
    }
}