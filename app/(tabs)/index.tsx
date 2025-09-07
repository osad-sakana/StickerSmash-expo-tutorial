import { View, StyleSheet } from "react-native";
// import { useState } from "react";
import ImageViewer from "@/components/ImageViewer";
import Button from "@/components/Button";
import * as ImagePicker from 'expo-image-picker';

const PlaceHolderImage = require("@/assets/images/background-image.png");

export default function Index() {
  // const {selectedImage, setSelectedImage} = useState<string | undefined>(undefined);

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      quality: 1,
    });

    if(!result.canceled){
      console.log(result);
    }else{
      alert("You did not select any image.");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer imgSource={PlaceHolderImage} />
      </View>
      <View style={styles.footerContainer}>
        <Button theme="primary" label="写真を選ぶ" onPress={pickImageAsync} />
        <Button label="この写真を使う" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {
    flex: 1,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: "center",
  },
});
