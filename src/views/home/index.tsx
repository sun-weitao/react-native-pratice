import React from 'react'
import { Button, StyleSheet, Text, View, TouchableHighlight, TextInput } from 'react-native'
const styles = StyleSheet.create({
    buttonContainer: {
        alignItems: 'flex-end'
    },
    button: {
        height: 50,
        // paddingLeft: 20,
        // paddingRight: 20,
        backgroundColor: '#ffffff',
        width: 200,
        // marginRight: 20,
        // marginTop: 15,
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,.1)',
        justifyContent: 'center',
        alignItems: 'center'
    },
    submit: {
        color: '#666666',
        fontWeight: '600'
    }
})

const CuButton = (params:{submitTodo:GeneratorFunction}) => (
    <View style={styles.buttonContainer}>
        <TouchableHighlight underlayColor='#efefef' style={styles.button} onPress={params.submitTodo}>
            <Text style={styles.submit}>Submit</Text>
        </TouchableHighlight>
    </View>
)
const InputStyles = StyleSheet.create({
    inputContainer: {
        marginLeft: 20,
        marginRight: 20,
        shadowOpacity: 0.2,
        shadowRadius: 3,
        shadowColor: '#000',
        shadowOffset: {
            width: 2,
            height: 2
        }
    },
    input: {
        height: 60,
        backgroundColor: '#fff',
        paddingLeft: 10,
        paddingRight: 10
    }
})
const CmpInput = ({ inputValue, inputChange }) => {
    return (
        <View style={InputStyles.inputContainer}>
            <TextInput
                value={inputValue}
                style={InputStyles.input}
                placeholder='What needs to be done?'
                placeholderTextColor='#CACACA'
                selectionColor='#666666'
                onChangeText={inputChange}
            ></TextInput>
        </View>
    )
}
export default class Home extends React.Component<any, any>{
    constructor(props: any) {
        super(props)
    }
    render() {
        return (
            <View>
                <CmpInput inputValue={'xxxxxxxxxxxxxxxxx'}/>
                <CuButton submitTodo={() => {
                    console.log("xcxxxxx")
                }} />
                {/* <Button
                    onPress={() => {
                        this.props.navigation.navigate('Detail', {
                            itemId: 1,
                            otherParams: "xxxx"
                        })
                    }}
                    title="go detail"
                /> */}
            </View>
        )
    }
}