//all required Dependancies
import React from 'react';
import {Box, Heading, Text} from 'native-base';
import Comments from './Comments';
import {StyleSheet} from 'react-native';

//To Show the Reviews at Product Detail Screen
const Review = () => {
  return (
    <Box my={9}>
      <Heading style={Styles.HeadingReView}>REVIEW</Heading>
      <Box style={Styles.mainBox}>
        <Heading style={Styles.NameTxt}>Narender Singh</Heading>
        <Text style={Styles.DateTxt}>22/Dec/2022</Text>
        <Comments Text={'Awesome product With Good looking and cost'} />
      </Box>
    </Box>
  );
};

export default Review;
//StyleSheet Properties For Revie Section.
const Styles = StyleSheet.create({
  HeadingReView: {fontWeight: 'bold', fontSize: 15, marginBottom: 2},
  mainBox: {padding: 3, backgroundColor: '#E1f0D7', marginTop: 5, rounded: 5},
  NameTxt: {fontSize: 15, color: 'black'},
  DateTxt: {my: 2, fontSize: 14},
});
