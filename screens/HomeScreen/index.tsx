import * as React from 'react';
import { View } from '../../components/Themed';
import { HomeCategory } from '../../components';

import categories from '../../assets/data/categories';

import styles from './styles';
import { FlatList } from 'react-native';

export const HomeScreen = () => {
  return (
    <View style={styles.container}>
      {/* List of categories */}
      <FlatList
        data={categories.items}
        renderItem={({ item }) => <HomeCategory category={item} />}
      />
    </View>
  );
};
