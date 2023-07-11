import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {StyleProps} from 'react-native-reanimated';

const Button = ({
  title,
  styleView,
  onPress,
  styleText,
}: {
  title: string;
  styleView?: StyleProps;
  onPress?: () => void;
  styleText?: StyleProps;
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styleView}>
        <Text style={styleText}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({});
