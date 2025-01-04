import React from 'react' 
import {Text, View, StyleSheet, Pressable} from 'react-native' 
 
 
const PedidoDetalles = ({listaPedidos, setModalDetalles}) =>  {

    
    
    //implementar logica para traer datos de los productos
    const nuevoArray = listaPedidos.map((datos) => datos.productos)
    console.log(nuevoArray);
     
    
    
    
    
   
    return (
        <View style={styles.contenedor}> 
            <Text>cliente</Text>
            <Text>producto coste del producto </Text>
            <Text>nota</Text>
            <Text>direccion</Text>
            <Text>coste total</Text>

            <View style={styles.btncerrar}>
                <Pressable style={styles.btn}
                onPress={()=> setModalDetalles(false)}>
                    <Text style={styles.txtbtn}>cerrar</Text>
                </Pressable>
            </View>
        </View>
)} 


const styles = StyleSheet.create({
contenedor:{
    backgroundColor: 'grey',
    flex: 1,
    margin: 10,
    borderRadius: 10

},
btncerrar:{
    backgroundColor: 'red',
    position: 'absolute',
    bottom: 10,
    width: '100%',
    paddingVertical: 10
   
    
    
},
txtbtn:{
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    textTransform: 'uppercase'

}
 
 })


export default PedidoDetalles;