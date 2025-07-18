import { Link } from 'expo-router';
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Platform } from 'react-native';

export default function TopNavbar() {
  return (
    <View style={styles.navbar}>
      {/* Logo/Header Image */}
      
      {/* Navigation Links */}
      <View style={styles.links}>
        <NavItem label="Dashboard" />
        <NavItem label="budget" />
        <NavItem label="loanManagement" />
      </View>
    </View>
  );
}

const NavItem = ({ label }) => (
  <TouchableOpacity style={styles.navItem}>
    <Link href={`/${label}`}>  {label}</Link>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  navbar: {
    backgroundColor: '#f8f9fa',
    paddingTop: Platform.OS === 'ios' ? 60 : 40,
    paddingBottom: 20,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    elevation: 4, // for Android shadow
    shadowColor: '#000', // for iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  logo: {
    width: 60,
    height: 60,
    alignSelf: 'center',
    marginBottom: 16,
    borderRadius: 12,
  },
  links: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  navItem: {
    paddingVertical: 8,
  }})