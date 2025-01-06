import React from 'react' 
import {Text, View, StyleSheet, ScrollView, Pressable} from 'react-native' 
 
 
const ListaReservas = ({datos}) =>  {

    const {id, nombre_cliente, telefono_cliente, personas, fecha_entrada } = datos
    return (
        <ScrollView>
              
              <View style={styles.contenedor}>
                 <View style={styles.orientacion}>
                       <View> 
                             <Text style={styles.label}>{nombre_cliente}</Text>
                             <Text style={styles.label}>{telefono_cliente}</Text>
                             <Text style={styles.label}>comensales: {personas}</Text>
                             <Text style={styles.label}>{fecha_entrada}</Text>
                       </View>
        
                       <View>
                          <View  style={styles.printctn}>
                             <Pressable style={styles.btn} 
                             on onPress={()=> console.log('caeptando')
                             }>
                                <Text style={styles.btntxt}>aceptar</Text>
                             </Pressable>
                             <Pressable style={styles.btn} 
                             on onPress={()=> console.log('rechazando')
                             }>
                                <Text style={styles.btntxt}>rechazar</Text>
                             </Pressable>
                             </View>
                       </View>
                 </View>
              </View>
              
              </ScrollView>
                )} 



const styles = StyleSheet.create({
 
    label:{
        marginBottom: 5,
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
        marginHorizontal: 5
     },
    
     printctn:{
        
        flex: 1,
        justifyContent: 'space-evenly'
       
        
     },
     btn:{
       backgroundColor: 'red',
       width: 80,
       height: 30,
       borderRadius: 10,
     },
     orientacion:{
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems:'center',
     },
     contenedor: {
        backgroundColor: 'grey',
        marginVertical: 10,
        borderRadius: 10,
        padding: 10,
        marginHorizontal: 10
     },
     btntxt: {
        textAlign: 'center',
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        textTransform: 'capitalize',
        margin: 2
     }
     
 })


export default ListaReservas;