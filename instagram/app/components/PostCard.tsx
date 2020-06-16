import * as React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';

import Post from '../models/Post';
import Icon from 'react-native-vector-icons/Ionicons';
import Spacer from '../components/Spacer';

interface PostCardProps {
  post: Post;
}

const PostCard = (props: PostCardProps) => {
  return (
    <View style={styles.card}>
      <View style={styles.carRow}>
        <Image
          style={styles.thumbNail}
          source={{
            uri: `${props.post.creatorThumbnail}`,
          }}
        />
        <Spacer width={10} />
        <Text style={{fontFamily: 'OpenSans-Regular', fontSize: 16}}>
          {props.post.creator}
        </Text>
        <Icon name="md-more" size={30} style={styles.moreOption} color="#333" />
      </View>
      <Spacer height={20} />
      <View style={styles.imageContainer}>
        <Image
          style={styles.imageData}
          source={{
            uri: `${props.post.post}`,
          }}
        />
      </View>
      <Spacer height={20} />
      <View style={styles.carRow}>
        <Icon name="ios-heart" size={30} color="#333" />
        <Spacer width={20} />
        <Icon name="ios-chatbubbles" size={30} color="#333" />
        <Spacer width={20} />
        <Icon name="ios-paper-plane" size={30} color="#333" />
      </View>
    </View>
  );
};

export default PostCard;

const styles = StyleSheet.create({
  thumbNail: {
    width: 30,
    height: 30,
    borderRadius: 50,
    resizeMode: 'contain',
  },
  moreOption: {
    position: 'absolute',
    right: 10,
  },
  card: {
    marginBottom: 20,
  },
  carRow: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  imageContainer: {
    width: '100%',
    height: 150,
    flex: 1,
  },
  imageData: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
});

//shortcut rncs rncsl
