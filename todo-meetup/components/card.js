import React, {Component} from'react'
import{Text,View,TouchableOpacity,StyleSheet} from'react-native'

export default class Card extends Component{
  reader(){
    return(
      <View key={this.press.keyval} style={styles.cardContainer}>

        <View style = {styles.textNote}>
          <Text>{this.props.note.note} </Text>
          <Text>Date:  {this.props.note.date}</Text>
          // <Text style={styles.textNote}>{this.props.note.note}</Text>
        </View>
        <View style = {styles.deleteButton}>
          <TouchableOpacity
              onPress={this.props.onPress}>
              <Text style={styles.deleteText}>D</Text>
          // <View style = {styles.text}>
          //   <Text>{this.props.note.note} </Text>
          //   <Text> Date: {this.props.note.date}</Text>
          // </View>
          // <View styles= {styles.deleteButton}>
          //   <TouchableOpacity>
          //     onPress={this.props.onPress}
          //     <Text style = {styles.deleteText}>D</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styls = StyleSheet.create({
  cardContainer:{
    flex: 1,
    width:'90%',
    flexDirection: 'row',
    height: 100,
    backgroundColor 'blue',
    borderWidth: 3,
    borderColor: 'darkgrey',
    marginTop: 5,
    marginLeft: '5%',
  },
  textNote: {
    flex:5,
    // paddingLeft:20,
    // borderLeftWidth: 10,
    // borderLeftColor: "#e91e63"
  },
  deleteButton:{
    justifyContent: 'center',
        alignItems: 'center',
        flex: 0.8,
        backgroundColor: 'green'
    // fposition: 'absolute',
    //     top:10,
    //     bottom:10,
    //     right:10,
    //     backgroundColor: '#298069',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     padding:10,
  },
  deleteText:{
        color: 'white'
        fontSize:30
  }
})
