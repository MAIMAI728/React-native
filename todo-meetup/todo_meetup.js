import React, {Component} from 'react'
import moment from 'moment'
import {Text, View, StyleSheet, TouchableOpacity,ScrollView} from 'react-native'
import Card from './components/card.js'

export default class App extends Component{
  // constructor(props){
  //     super(props);
  //     this.state = {
  //       note:'',
  //       notes:[],
  //   }
  // }
  state = {
           note: '',
           notes: [],
       }

   handlePress(){
     if(this.sate.note){
       this.state.notes.push({
         note: this.state.note,
         date:moment().format("LL")
       })
       this.setState({notes:this.state.note, note:''})
     }
   }
   deleteMethod(key){
     this.state.notes.splice(key,1)
     this.setState({notes:this.state.notes})
     // console.log("this is delete" + this.state.notes)
   }

  render(){
    const notes = this.state.notes.map((note,i)=>{
      return(
        < Card
          key={i}
          keyval={i}
          note={note}
          onPress={() => this.deleteMethod(i)}
        />
      )
    })
    return(
      <View style = {styles.container}>
        <View style ={styles.header}>
            <TextInput
              style={{height: 40, borderColor: 'gray', borderWidth: 1,width: '40%', marginLeft: 10}}
              // style = {(height:40,borderVolors:'gray',bordewidth:1,width:'40%')}
              value={this.state.note}
              // placeholderStyle={{color:"white"}}
              // placeholderTextColor={"white"}
              placeholder={" < Maimai"}
              onChangeText ={(note) => this.setState({note})}
            />
            <View style={styles.button}>
              <TouchableOpacity
                      onPress={() => this.handlePress()}>
                          // <Text style={styles.addButtonText} > + </Text>
                          <Text style={{fontSize: 25, color: 'white'}}>+</Text>
              </TouchableOpacity>
            </View>
        </View>
        <View style = {styles.content}>
          <Text style={{backgroundColor: 'transparent'}}>{this.state.note}</Text>
          <ScrollView>
          {notes}
          </ScrollView>
          // <Text style={{backgroundColor: 'white'}}>
          // 'it's your note'</Text>
        </View>
        <View style = {styles.footer}>
          <Text> Footer </Text>
        </View>
        // <View style = {styles.deleteButton}>
        //     <Text style ={{colors:'white'}}>0<Text>
        // </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  header:{
    flex:1,
    backgroundColor:'red',
    justifyContent: 'center',
    width: '100%'
  },
  content:{
    flex:1,
    backgroundColor:'blue',
    width: '100%',
    // justifyContent: 'container'
  },
  footer:{
    flex:1,
    backgroundColor:"black",
    width: '100%'
  },
  button:{
    width:80,
    height:80,
    borderRadius:40,
    backgroundColor:'black',
    justifyContent:'Center',
    alignItems:'center',
    position:'absolute',
    top:40,
    right:40,
    zIndex:1000
  },

  // text:{
  //   flex:5
  // },
  // deleteButton:{
  //   flex:0.8,
  //   backgroundColor:'green'
  // },

  // addButtonText:{
  //   color: '#FA0034',
  //   fontSize: 50
  // },
})
