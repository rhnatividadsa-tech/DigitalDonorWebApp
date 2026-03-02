import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';

export default function GradientButton({ title, onPress, style }: any) {
  return (
    <Pressable 
      onPress={onPress} 
      style={({ pressed, hovered }: { pressed: boolean; hovered: boolean }) => [
        styles.button, 
        style,
        hovered && styles.buttonHover,
        pressed && { opacity: 0.85, transform: [{ scale: 0.98 }] }
      ]}
    >
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: { 
    height: 48,          
    width: 150,          
    borderRadius: 25, 
    justifyContent: 'center', 
    alignItems: 'center', 
    alignSelf: 'center', // Fixes the stretching bug!
    marginTop: 15,
    backgroundImage: 'linear-gradient(to right, #D9898C, #B75658)', 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 4 }, 
    shadowOpacity: 0.25, 
    shadowRadius: 5, 
    elevation: 4,
    transition: 'transform 0.25s ease, box-shadow 0.25s ease, opacity 0.2s ease',
  } as any,
  buttonHover: {
    transform: [{ translateY: -1 }],
    boxShadow: '0px 10px 20px rgba(183, 86, 88, 0.35)',
  } as any,
  text: { 
    color: '#FFFFFF', 
    fontSize: 16,        
    fontWeight: 'bold' 
  }
});