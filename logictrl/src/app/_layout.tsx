import React from 'react';

import { SQLiteProvider } from 'expo-sqlite'
import { Slot } from 'expo-router';
import _layout from '@/app/_layout'
import { initializeDatabase } from '@/database/initializeDatabase'


export default function Layout() {
  return (
    <SQLiteProvider databaseName="logictrl.db" onInit={initializeDatabase}>
      <Slot />
    </SQLiteProvider>
  );
}
