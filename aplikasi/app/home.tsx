import { Image, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';
import { router } from 'expo-router';

const HomePages = () => {
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
                <View style={styles.frameSelamat}>
                    <Text style={styles.textSelamat}>Selamat Datang</Text>
                </View>
                <View style={styles.frameNama}>
                    <Text style={styles.textNama}>Nama yang terdaftarkan</Text>
                </View>
                <TouchableOpacity
                onPress={() => {
                    router.push('/absen')
                }}
                style={styles.frameLanjut}>
                    <View style={styles.buttom}>
                    <Text style={styles.textLanjut}>Lanjutkan Absensi</Text>
                    </View>
                    <AntDesign name="arrowright" size={24} color="#2D7CF3"  style={styles.icon}/>
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

export default HomePages

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
        marginHorizontal:'auto'
    },
    frameSelamat:{
        height:30,
        width:330,
        justifyContent:'center',
        marginTop:5
    },
    textSelamat:{
        fontSize:16,
        color:'#AAAAAA',
        textAlign:'center'
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
    frameLanjut:{
        height:50,
        width:330,
        marginTop:150,
        flexDirection:'row',
    },
    textLanjut:{
        fontSize:14,
        textAlignVertical:'center',
        textAlign:'center',
        color:'#2D7CF3'
    },
    buttom:{
        height:50,
        width:300,
        justifyContent:'center',
        marginHorizontal:'auto',
    },
    icon:{
        height:30,
        width:30,
        marginVertical:'auto',
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