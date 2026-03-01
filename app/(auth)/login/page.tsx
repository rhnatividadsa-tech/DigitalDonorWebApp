'use client';

import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { useRouter } from 'next/navigation'; 
import CustomInput from '../../../components/CustomInput';
import GradientButton from '../../../components/GradientButton';

export default function LoginScreen() {
  const router = useRouter(); 

  return (
    <View style={styles.formContainer}>
      <Text style={styles.headerText}>Welcome, Donors!</Text>
      <Text style={styles.subHeaderText}>Login to continue</Text>

      <CustomInput placeholder="Enter your email" keyboardType="email-address" autoCapitalize="none" icon={<Text style={styles.icon}>✉️</Text>} />
      <CustomInput placeholder="Enter your password" secureTextEntry={true} icon={<Text style={styles.icon}>🔑</Text>} />

      <Pressable 
        style={styles.forgotPasswordContainer}
        onPress={() => router.push('/forgot-password')}
      >
        <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
      </Pressable>

      <GradientButton 
        title="Login" 
        onPress={() => {
          console.log('Login successful!');
          router.push('/home'); // <-- CHANGED: Now pushes to the new home dashboard
        }} 
      />

      <View style={styles.footerContainer}>
        <View style={styles.line} />
        <Text style={styles.footerText}>Dont have an account? </Text>
        <Pressable onPress={() => router.push('/signup')}>
          <Text style={styles.signupText}> Sign up here!</Text>
        </Pressable>
        <View style={styles.line} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  formContainer: {
    width: '100%', 
    maxWidth: 500,       // Increased from 400 to 500 to make the box wider
    padding: 50,         // Increased padding so the inputs don't feel squished to the edges
    backgroundColor: '#FFE6E6', 
    borderRadius: 40, 
    alignItems: 'stretch', 
    boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.3)', 
  } as any,
  headerText: { 
    fontSize: 38,        // Slightly larger title
    fontWeight: 'bold', 
    color: '#6A1B1B', 
    marginBottom: 35,    // More space below the title
    textAlign: 'center' 
  },
  subHeaderText: { 
    fontSize: 20, 
    fontWeight: '700', 
    color: '#6A1B1B', 
    alignSelf: 'flex-start', 
    marginBottom: 25,    // More breathing room before the inputs
    marginLeft: 5 
  },
  icon: { fontSize: 16, color: '#888' },
  forgotPasswordContainer: { alignSelf: 'flex-end', marginBottom: 30, marginRight: 5 },
  forgotPasswordText: { fontSize: 13, fontWeight: 'bold', color: '#6A1B1B' },
  footerContainer: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    marginTop: 45,       // Pushed the footer down slightly
    width: '100%' 
  },
  line: { flex: 1, height: 1, backgroundColor: '#D9B3B3' },
  footerText: { fontSize: 13, color: '#888', marginLeft: 10, textAlign: 'center' },
  signupText: { fontSize: 13, fontWeight: 'bold', color: '#6A1B1B', marginRight: 10 },
});