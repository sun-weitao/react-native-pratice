import React from 'react'
import {Button, StyleSheet, Text, View} from 'react-native'
const styles = StyleSheet.create({
    container:{

    }
})
export default class Home extends React.Component<any,any>{
    constructor(props:any){
        super(props)
    }
    render(){
        return (
            <View>
                <Text>xccc</Text>
                <Button 
                    onPress={() => {
                        this.props.navigation.navigate('Detail',{
                            itemId:1,
                            otherParams:"xxxx"
                        })
                    }}
                    title="go detail"
                />
            </View>
        )
    }
}