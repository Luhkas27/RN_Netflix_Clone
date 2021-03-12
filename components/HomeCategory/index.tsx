import * as React from 'react';
import { Image, FlatList } from 'react-native';

import { Text } from '../../components/Themed';

import styles from './styles';

type HomeCategoryProps = {
  category: {
    id: string;
    title: string;
    movies: { id: string; poster: string }[];
  };
};

export const HomeCategory = ({ category }: HomeCategoryProps) => {
  return (
    <>
      <Text style={styles.title}>{category.title}</Text>
      <FlatList
        data={category.movies}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <Image
            key={item.id}
            source={{ uri: item.poster }}
            style={styles.image}
          />
        )}
      />
    </>
  );
};
