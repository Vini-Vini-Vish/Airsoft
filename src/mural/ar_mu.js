import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {StyleSheet, Text, View, Button } from 'react-native';
import styles from '../../style';

export default function Mural_ARMU() {
    return (
      <View style = {styles.boxFora}>  
        <View style = {styles.container}>
          <View>
            <Text style = {styles.boxTitleBase}>Mural de Armas e Munições</Text>     
          </View>

          <View>
            <li>teste</li>
          </View>     
        </View>
      </View>
    )
  };