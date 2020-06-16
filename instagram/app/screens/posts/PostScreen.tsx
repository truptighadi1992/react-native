import React, {useEffect} from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  Button,
} from 'react-native';
//import {connect} from 'react-redux';
import {useSelector, useDispatch} from 'react-redux';
import PostCard from '../../components/PostCard';
import {POST} from '../../redux/constants';

const PostScreen = props => {
  const dispatch = useDispatch();
  const postState = useSelector(state => state.postReducer);

  useEffect(() => {
    dispatch({type: POST.FETCH, payload: {userId: 2}});
  }, []);

  const renderPosts = itemData => {
    return <PostCard post={itemData.item} />;
  };
  return (
    <View>
      <View style={styles.screen}>
        {postState.isLoading ? (
          <ActivityIndicator />
        ) : (
          <View style={styles.screen}>
            {postState.error != null ? (
              <Text>Products Not Found !</Text>
            ) : (
              <FlatList
                data={postState.posts}
                renderItem={renderPosts}
                keyExtractor={item => item.id}
              />
            )}
          </View>
        )}
      </View>
      {/*  <Button title="load posts" onPress={() => props.getPosts()} /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
});

/* function mapStateToProps(state) {
  return {
    isLoading: state.postReducer.isLoading,
    posts: state.postReducer.posts,
    error: state.postReducer.error,
  };
}

const mapDispatchToProps = dispatch => {
  return {
    getPosts: userId => dispatch(fetchPost(userId)),
  };
}; 
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PostScreen);
*/

export default PostScreen;
