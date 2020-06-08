import React from 'react';
import { StyleSheet, Text, View,Image,FlatList } from 'react-native';
import {Card, FAB} from 'react-native-paper'

const Home=()=>{

    const data = [
        {id:1,name:"Aitik",position:"Android Dev"},
        {id:2,name:"Aitik",position:"Android Dev"},
        {id:3,name:"Aitik",position:"Android Dev"},
        {id:4,name:"Aitik",position:"Android Dev"},
        {id:5,name:"Aitik",position:"Android Dev"},
        {id:6,name:"Aitik",position:"Android Dev"},
    ]
    const renderlist =((item)=>{
        return(
            <Card style={styles.mycard} key = {item.id}>
            <View style={styles.cardview}>
                <Image
                style = {{width:50,height:50,borderRadius:50/2}}
                source={{uri:"https://images.unsplash.com/flagged/photo-1578848151039-b8916d7c1c34?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"}}/>
                <View style={{marginLeft:10}}>
        <Text style={styles.text}>{item.name}</Text>
        <Text style={styles.text}>{item.position}</Text>
                </View>
            </View>
            
        </Card>
        )
    })

    return(
        <View>
            <FlatList
            data={data}
            renderItem = {({item})=>{
                return renderlist(item)
            }}
            />
            <FAB
        style={styles.fab}
        small={ false}
        icon="plus"
        
        onPress={() => console.log('Pressed')}
        />
        </View>
        
    )
}

const styles = StyleSheet.create({
    mycard:{
        margin: 5,
        
    },
    cardview:{
        flexDirection:"row",
        padding: 6
    },
    text:{
        fontSize:20,
        marginLeft:10
    },
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
      },
})

export default Home