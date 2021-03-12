import { AntDesign } from '@expo/vector-icons';
import React from 'react';
import { Image, Pressable } from 'react-native';
import { Text, View } from '../Themed';

import { Episode } from '../../types';

import styles from './styles';

interface EpisodeItemProps {
  episode: Episode;
  onPress: (episode: Episode) => {};
}

export const EpisodeItem = ({ episode, onPress }: EpisodeItemProps) => {
  return (
    <Pressable style={{ margin: 10 }} onPress={() => onPress(episode)}>
      <View style={styles.row}>
        <Image style={styles.image} source={{ uri: episode.poster }} />

        <View style={styles.titleContainer}>
          <Text style={styles.title}>{episode.title}</Text>
          <Text style={styles.duration}>{episode.duration}</Text>
        </View>

        <AntDesign name="download" size={24} color="#fff" />
      </View>

      <Text style={styles.plot}>{episode.plot}</Text>
    </Pressable>
  );
};
