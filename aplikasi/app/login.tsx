import { Image, SafeAreaView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { router } from 'expo-router'

const LoginPages = () => {
  return (
    <SafeAreaView style={styles.container}>
        <StatusBar barStyle={'dark-content'}/>

        {/* header */}
        <View style={styles.header}>
            <View style={styles.frameVector}>
                <Image source={require('@/assets/images/Vector.png')} style={styles.images}/>
            </View>
            <View style={styles.frameAbsen}>
                <Text style={styles.textAbsensi}>ABSENSI</Text>
            </View>
            <View style={styles.frameOnline}>
                <Text style={styles.textOnline}>ONLINE</Text>
            </View>
        </View>

        {/* body */}
        <View style={styles.body}>
            <View style={styles.frameBody}>
                <View style={styles.frameInput}>
                    <TextInput placeholder='Email Address' style={styles.input}/>
                </View>
                <View style={styles.frameInput}>
                    <TextInput placeholder='Password' style={styles.input}/>
                </View>
                <TouchableOpacity style={styles.frameGanti}>
                    <Text style={styles.textGanti}>Ganti Password</Text>
                </TouchableOpacity>
            </View>
        </View>

        {/* footer */}
        <View style={styles.footer}>
            <View style={styles.frameFooter}>
                <TouchableOpacity 
                onPress={() => {
                    router.replace('/home')
                }}
                style={styles.buttom}>
                    <Text style={styles.textButtom}>LOGIN</Text>
                </TouchableOpacity>
            </View>
        </View>

    </SafeAreaView>
  )
}

export default LoginPages

const styles = StyleSheet.create({
    container:{
        flex:1
    },

    // header
    header:{
        flex:0.4,
    },
    frameVector:{
        height:100,
        width:100,
        marginHorizontal:'auto',
        marginTop:50
    },
    images:{
        marginVertical:'auto',
        marginHorizontal:'auto'
    },
    frameAbsen:{
        height:40,
        width:'80%',
        marginTop:20,
        marginHorizontal:'auto',
        justifyContent:'center'
    },
    textAbsensi:{
        fontSize:24,
        fontWeight:'bold',
        color:'#2D7CF3',
        textAlign:'center'
    },
    frameOnline:{
        height:30,
        width:'80%',
        marginTop:5,
        marginHorizontal:'auto',
        justifyContent:'center',
    },
    textOnline:{
        fontSize:16,
        color:'#AAAAAA',
        textAlign:'center',
        letterSpacing:5
    },

    // body
    body:{
        flex:0.4,
    },
    frameBody:{
        height:250,
        width:330,
        marginVertical:'auto',
        marginHorizontal:'auto',
    },
    frameInput:{
        height:70,
        width:300,
        marginHorizontal:'auto',
        borderWidth:0.5,
        borderRadius:15,
        marginTop:25
    },
    input:{
        height:70,
        width:300,
        textAlign:'center'
    },
    frameGanti:{
        height:30,
        width:300,
        marginHorizontal:'auto',
        justifyContent:'center',
        marginTop:20
    },
    textGanti:{
        fontSize:14,
        textAlign:'right'
    },

    // footer
    footer:{
        flex:0.2,
    },
    frameFooter:{
        height:80,
        width:300,
        marginHorizontal:'auto'
    },
    buttom:{
        height:60,
        width:300,
        marginHorizontal:'auto',
        marginVertical:'auto',
        borderWidth:0.6,
        borderRadius:20,
        justifyContent:'center',
        backgroundColor:'#FFD600'
    },
    textButtom:{
        fontSize:20,
        textAlign:'center',
        color:'#2D7CF3'
    }
})