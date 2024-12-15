import { Image, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';
import { router } from 'expo-router';

const AbsensiPages = () => {
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
                <View style={styles.frameNama}>
                    <Text style={styles.textNama}>Nama yang terdaftarkan</Text>
                </View>
                <TouchableOpacity style={styles.buttomIn}>
                    <Text style={styles.textIn}>CHECK IN</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttomOut}>
                    <Text style={styles.textOut}>CHECK OUT</Text>
                </TouchableOpacity>
            </View>
        </View>

        {/* footer */}
        <View style={styles.footer}>
            <TouchableOpacity style={styles.frameFooter}>
                <Text style={styles.textGanti}>Ganti Akun</Text>
            </TouchableOpacity>
        </View>

    </SafeAreaView>
  )
}

export default AbsensiPages

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
        flex:0.5,
    },
    frameBody:{
        height:320,
        width:330,
        marginVertical:'auto',
        marginHorizontal:'auto',
    },
    frameNama:{
        height:50,
        width:330,
        justifyContent:'center'
    },
    textNama:{
        fontSize:20,
        fontWeight:'bold',
        textAlign:'center'
    },
    buttomIn:{
        height:100,
        width:300,
        backgroundColor:'#FFD600',
        marginHorizontal:'auto',
        borderRadius:20,
        marginTop:20,
        justifyContent:'center'
    },
    textIn:{
        fontSize:20,
        textAlign:'center',
        color:'#2D7CF3',
        letterSpacing:10
    },
    buttomOut:{
        height:100,
        width:300,
        backgroundColor:'#E5E5E5',
        marginHorizontal:'auto',
        borderRadius:20,
        marginTop:20,
        justifyContent:'center'
    },
    textOut:{
        fontSize:20,
        textAlign:'center',
        color:'#AAAAAA',
        letterSpacing:10
    },

    // footer
    footer:{
        flex:0.1,
    },
    frameFooter:{
        height:50,
        width:300,
        marginVertical:'auto',
        justifyContent:'center',
        marginHorizontal:'auto'
    },
    textGanti:{
        fontSize:12,
        textAlign:'center'
    }
})