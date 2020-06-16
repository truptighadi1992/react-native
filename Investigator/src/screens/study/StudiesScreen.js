import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  BackHandler,
  Alert,
} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';

import {connect} from 'react-redux';
import {fetchStudies} from '../../redux/actions/studyActions';
import Color from '../../constants/Color';
import StudyCard from '../../components/StudyCard';

class StudiesScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.goToStudyDetails = this.goToStudyDetails.bind(this);
  }

  handleBackButton = () => {
    Alert.alert('Exit', 'Are you sure you want to exit the application?', [
      {
        text: 'Cancel',
        onPress: () => null,
        style: 'cancel',
      },
      {text: 'YES', onPress: () => BackHandler.exitApp()},
    ]);
    return true;
  };

  componentDidMount() {
    //BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
    this.focusListener = this.props.navigation.addListener('focus', () => {
      console.log('loadstudies called');
      this.props.loadStudies();
    });
  }
  componentWillUnmount() {
    //BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
    this.focusListener();
  }
  goToStudyDetails(study) {
    this.props.navigation.navigate('StudyDetails', {
      study: study,
    });
  }
  renderStudy = itemData => {
    let study = itemData.item;
    return <StudyCard study={study} handleStudyClick={this.goToStudyDetails} />;
  };

  render() {
    const {isLoading, studies, error} = this.props;
    return (
      <View style={styles.screen}>
        <View style={styles.screen}>
          {isLoading ? (
            <ActivityIndicator />
          ) : (
            <View>
              {error != null ? (
                <Text>Studies Not Found !</Text>
              ) : (
                <FlatList
                  data={studies}
                  renderItem={this.renderStudy}
                  keyExtractor={item => item.id}
                />
              )}
            </View>
          )}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: Color.greyBgColor,
    flex: 1,
    padding: 5,
  },
});

const mapStateToProps = state => {
  return {
    isLoading: state.study.isLoading,
    studies: state.study.studies,
    error: state.study.error,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    loadStudies: userId => dispatch(fetchStudies(2)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(StudiesScreen);
