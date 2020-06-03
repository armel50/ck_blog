import {View, Text, Button,FlatList, TouchableOpacity, TextInput} from 'react-native'
import {connect} from 'react-redux'

import React, { Component } from 'react'

 class IndexScreen extends Component {
    render() {
        
        return (
            
        
            <View>
                {console.log(this.props.posts)}
                <Text>Welcome to CK Blog</Text>
                <TextInput 
                    placeholder="Enter Title"
                    autoCorrect={false}
                    autoCapitalize="none"
                />
                {/* <FlatList 
                        data={this.props.posts}
                        keyExtractor={(post) => post.id }
                        renderItem={({item}) =>(<View>
                                                    <View>Picture</View>
                                                    <TouchableOpacity>
                                                        <Text>Details</Text>
                                                    </TouchableOpacity>
                                                </View>)}
                /> */}
                <Button title="Add Blog" onPress={() => this.props.navigation.navigate('NewScreen')}/>
            </View>
        )
    }
}


const mapStateToProps = state => ({posts: state})
export default connect(mapStateToProps,null)(IndexScreen)