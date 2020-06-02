import {View, Text, Button,FlatList, TouchableOpacity, TextInput} from 'react-native'


import React, { Component } from 'react'

export default class IndexScreen extends Component {
    render() {
        
        return (
        
            <View>
                {console.log(this.props)}
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
                <Button title="Show Item" onPress={() => this.props.navigation.navigate('ShowScreen')}/>
            </View>
        )
    }
}


