import React from 'react' 
import {Text, View, StyleSheet, Pressable} from 'react-native' 
 
 
const PedidoDetalles = ({listaPedidos, setModalDetalles, datos, numeroOrden}) =>  {

    
    
    //implementar logica para traer datos de los productos
    

       const [datosCliente] = listaPedidos.filter(cliente => cliente.idPedido == numeroOrden)
        
        
       
       
       
       
    
        
    
     
    
    
    
    
   
    return (
        <View style={styles.contenedor}> 
            
            <Text style={styles.label}>cliente: {datosCliente.nombre}</Text>
            <View style={styles.product}>
                <Text style={styles.label}>producto</Text>
                <Text style={styles.label}>coste del producto</Text>
            </View>
            <Text style={styles.label}>{datosCliente.nota == ''  ? <Text>sin nota</Text>: datosCliente.nota}</Text>
            <Text style={styles.label}>direccion</Text>
            <View style={styles.preciototal}>
                <Text style={styles.label}>{datosCliente.total} Eur</Text>
            </View>
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

},
product:{
    flexDirection: 'row',
    justifyContent: 'space-between'
},
label:{
    fontSize: 20,
    paddingVertical: 10,
    marginLeft: 10,
    fontWeight: 'bold',

},
preciototal:{
    position: 'absolute',
    bottom: 90,
    left: 280
}
 
 })


export default PedidoDetalles;