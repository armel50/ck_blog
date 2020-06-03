import React, { Component } from 'react'
import {View, Text, TextInput, Button, Image,StyleSheet} from 'react-native'
import * as ImagePicker from 'expo-image-picker';
import {connect} from 'react-redux'


class NewScreen extends Component {

    state = {
        image:'',
        content: '',
        title: '',
        author_name: ''
    }
  async  componentDidMount(){
    // if (Constants.platform.ios) {
    //     const { status } = await ImagePicker.requestCameraRollPermissionsAsync();
    //     if (status !== 'granted') {
    //       alert('Sorry, we need camera roll permissions to make this work!');
    //     }
    //   }
    }

     pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        })

    console.log(result);

    if (!result.cancelled) {
    this.setState({image: result.uri})
    }
  }
  styles = StyleSheet.create({
      input: {
          borderColor: 'rgb(157, 161, 149)',
          borderWidth: 1,
          borderRadius: 4,
          padding:10
        
      },
      textarea: {
        borderColor: 'rgb(157, 161, 149)',
        borderWidth: 1,
        borderRadius: 4,
        height: 150,
        padding: 10,
        textAlignVertical: 'top'        
      }

  })
  handleSubmit =() => {
      (this.state.content != '' && this.state.title != '' && this.state.author_name != '') && this.props.addPost(this.state)
  }  

  handleChange = (name,text) =>this.setState({[name]: text})
    render() {
        return (
           <View style={{padding: "10%"}}>      
                 <Text style={{alignSelf: "center"}}>New Blog</Text>

               <View>
                   
               <View>
                      <Text >Author's name</Text>
                      <TextInput
                      style={this.styles.input}
                        name='author_name'
                        value={this.state.author_name}
                        onChangeText={ text =>this.handleChange('author_name',text)}
                        autoCapitalize='none'
                        autoCorrect={false}
                     />
                   </View>

                   <View>
                      <Text>Title</Text>
                      <TextInput
                      style={this.styles.input}
                        name='title'
                        value={this.state.value}
                        onChangeText={ text =>this.handleChange('title',text)}
                        autoCapitalize='none'
                        autoCorrect={false}
                     />
                   </View>

                   <View>         
                        <Text>Select A picture (optional)</Text>
                        <Button title="Pick an image from camera roll" onPress={this.pickImage} />
                        {this.state.image !== '' && <Image source={{ uri: this.state.image }} style={{ width: 200, height: 200 }} />}

                   </View>

                   <View>
                     <Text>Content</Text>
                     <TextInput
                        style={this.styles.textarea}
                        multiline={true}

                        name='content'
                        value={this.state.content}
                        onChangeText={ text =>this.handleChange('content',text)}
                        autoCapitalize='none'
                        autoCorrect={false}
                     />
                   </View>
                   <Button 
                        title="Create Blog"
                        onPress={this.handleSubmit}
                    />
               </View>
           </View>
        )
    }
}
const mapDisptachToProps= dispatch => ({
    addPost: (payload)=>dispatch({type: 'ADDPOST', payload: payload})
})
export default connect(null,mapDisptachToProps)(NewScreen)