import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Pressable,
  Dimensions,
  SafeAreaView,
} from 'react-native';
import PrimaryButton from '../components/PrimaryButton';
import Colors from './Colors';
import { useRouter } from 'expo-router';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

export default function LandingScreen() {
  const router = useRouter();
  
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* Top image */}
        <View style={styles.imageContainer}>
          <Image
            source={require('./../assets/images/landing_image.jpg')}
            style={styles.image}
          />
        </View>
        
        {/* Content Container */}
        <View style={styles.contentContainer}>
          {/* Heading */}
          <View style={styles.heading}>
            <Text style={styles.headingLine}>Welcome to Ration Tracker</Text>
          </View>
          
          {/* Thought / Description */}
          <View style={styles.thought}>
            <Text style={styles.thoughtLine}>
              Manage all your ration store operations effortlessly.{"\n"}
              From cardholder details to monthly distribution — all in one place.
            </Text>
          </View>
          
          {/* Get Started Button */}
          <View style={styles.ButtonContainer}>
            <PrimaryButton
              title="Get Started"
              onPress={() => router.push('/(auth)/SignUp')}
            />
          </View>
          
          {/* Sign In link */}
          <View style={styles.signInRow}>
            <Text style={styles.signInBaseText}>Already have an account? </Text>
            <Pressable onPress={() => router.push('/(auth)/SignIn')}>
              <Text style={styles.signInText}>Sign In here</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  imageContainer: {
    height: screenHeight > 700 ? screenHeight * 0.45 : screenHeight * 0.35,
    minHeight: 250,
    maxHeight: screenHeight * 0.5,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: screenWidth * 0.05,
    paddingVertical: 15,
    justifyContent: 'space-around',
    minHeight: screenHeight * 0.5,
  },
  heading: {
    marginTop: screenHeight * 0.02,
    marginBottom: screenHeight * 0.015,
  },
  headingLine: {
    fontSize: screenWidth > 400 ? 35 : screenWidth > 350 ? 30 : 26,
    textAlign: 'center',
    fontWeight: 'bold',
    lineHeight: screenWidth > 400 ? 42 : screenWidth > 350 ? 36 : 32,
    paddingHorizontal: 10,
  },
  thought: {
    paddingHorizontal: screenWidth * 0.03,
    marginBottom: screenHeight * 0.03,
  },
  thoughtLine: {
    textAlign: 'center',
    color: Colors.gray,
    fontSize: screenWidth > 400 ? 16 : screenWidth > 350 ? 15 : 14,
    lineHeight: screenWidth > 400 ? 24 : screenWidth > 350 ? 22 : 20,
  },
  ButtonContainer: {
    alignItems: 'center',
    paddingVertical: screenHeight * 0.02,
    marginBottom: screenHeight * 0.02,
  },
  signInRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    paddingHorizontal: 20,
    marginBottom: screenHeight * 0.02,
  },
  signInBaseText: {
    fontSize: screenWidth > 400 ? 16 : 14,
    textAlign: 'center',
  },
  signInText: {
    fontWeight: 'bold',
    color: Colors.primary,
    fontSize: screenWidth > 400 ? 16 : 14,
  },
});