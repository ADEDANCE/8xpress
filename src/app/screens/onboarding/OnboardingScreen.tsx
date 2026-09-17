import { useEffect, useRef, useState } from 'react';
import {
  Animated,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { useRouter } from 'expo-router';

const router = useRouter();

const slides = [
  {
    image: require('@/assets/images/onboarding1.png'),
    title: 'Delicious food, ready when you are.',
    description:
      'Order your favorite meals from 8Xpress and enjoy them your way.',
  },
  {
    image: require('@/assets/images/onboarding2.png'),
    title: 'Pick what you crave.',
    description:
      'From party jollof to shawarma, choose what you want and customize your order.',
  },
  {
    image: require('@/assets/images/onboarding3.png'),
    title: 'Pickup or delivery. Your choice.',
    description: 'Get your food when and where you want it.',
  },
];

export default function OnboardingScreen() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slideAnimation = useRef(new Animated.Value(0)).current;

  const goToNext = () => {
    const nextIndex = (currentIndex + 1) % slides.length;

    Animated.timing(slideAnimation, {
      toValue: -1,
      duration: 400,
      useNativeDriver: true,
    }).start(() => {
      setCurrentIndex(nextIndex);
      slideAnimation.setValue(1);

      Animated.timing(slideAnimation, {
        toValue: 0,
        duration: 400,
        useNativeDriver: true,
      }).start();
    });
  };

  useEffect(() => {
    const timer = setInterval(() => {
      goToNext();
    }, 5000);

    return () => clearInterval(timer);
  }, [currentIndex]);

  const slide = slides[currentIndex];

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.content,
          {
            transform: [
              {
                translateX: slideAnimation.interpolate({
                  inputRange: [-1, 0, 1],
                  outputRange: [-400, 0, 400],
                }),
              },
            ],
          },
        ]}
      >
        <Image source={slide.image} style={styles.image} resizeMode="cover" />

        <Text style={styles.title}>{slide.title}</Text>

        <Text style={styles.description}>{slide.description}</Text>
      </Animated.View>

      <View style={styles.bottom}>
        <View style={styles.dots}>
          {slides.map((_, index) => (
            <View
              key={index}
              style={[
                styles.dot,
                index === currentIndex && styles.activeDot,
              ]}
            />
          ))}
        </View>

        <Pressable style={styles.button} onPress={() => {
  if (currentIndex === slides.length - 1) {
    router.push('/auth/login');
  } else {
    goToNext();
  }
}}>
          <Text style={styles.buttonText}>
            {currentIndex === slides.length - 1 ? 'Get Started' : 'Next'}
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    paddingHorizontal: 24,
    // paddingTop: -100,
    paddingBottom:40,
  },

  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  image: {
    width: '85%',
    height: 280,
    borderRadius: 24,
    marginBottom: 32,
  },

  title: {
    color: '#FFFFFF',
    fontSize: 30,
    fontWeight: '700',
    lineHeight: 38,
    textAlign: 'center',
  },

  description: {
    color: '#BDBDBD',
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'center',
    marginTop: 16,
    maxWidth: 340,
  },

  bottom: {
    alignItems: 'center',
  },

  dots: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 24,
  },

  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#555555',
  },

  activeDot: {
    width: 24,
    backgroundColor: '#FFD400',
  },

  button: {
    width: '100%',
    backgroundColor: '#f54542',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
  },

  buttonText: {
    color: '#000000',
    fontSize: 16,
    fontWeight: '700',
  },
});