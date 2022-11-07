import { View, Image, Pressable, StyleSheet } from 'react-native';

const PlaceItem = ({ place, onSelect }) => {
  return (
    <Pressable onPress={onSelect}>
      <Image source={{ uri: place.imageUri }} />
      <View>{place.title}</View>
      <View>{place.address}</View>
    </Pressable>
  );
};

export default PlaceItem;

const styles = StyleSheet.create({});
