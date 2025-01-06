import React from 'react' 
import {Text, View, StyleSheet, Pressable, FlatList, ScrollView} from 'react-native' 
 
 
const PedidoDetalles = ({listaPedidos, setModalDetalles, datos, numeroOrden}) =>  {

    
    
    //implementar logica para traer datos de los productos
    

       const [datosCliente] = listaPedidos.filter(cliente => cliente.idPedido == numeroOrden)
        
        
       
     const listaproductos = datosCliente.productos
     
     const listaFormateada = JSON.parse(listaproductos)
     console.log(listaFormateada);

     const filtrarDatos = (productos) => {
        return productos.map(producto => ({
            titulo: producto.titulo,
            cantidad: producto.cantidad,
            precio: producto.precio
        }));
    };

    filtrarDatos(listaFormateada)
    
    
    

    
    
     
     

   
    return (
        
        <View style={styles.contenedor}> 
            
            <Text style={styles.label}>cliente: {datosCliente.nombre}</Text>
            <View>
            <FlatList
                data={listaFormateada}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <View  style={styles.product}>
                        <Text style={styles.cantidad}>{item.cantidad} {item.titulo}</Text>
                         <Text style={styles.precio}>{item.precio}</Text>

                         
                    </View>
                   
                         
                )}
            />
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
            <View style={styles.container}>
            
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
 //FIXME: arreglar la posision del boton cerra, al tener muchos productos, se desconfigura
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
    justifyContent: 'space-between',
    marginHorizontal: 10
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
},
cantidad:{
    fontSize: 20,
    paddingVertical: 10,
    fontWeight: 'bold',

},
titulo:{
    fontSize: 20,
    paddingVertical: 10,
    marginHorizontal: 10,
    fontWeight: 'bold',
},
precio:{
    fontSize: 20,
    paddingVertical: 10,
    marginLeft: 10,
    fontWeight: 'bold',
}
 
 })


export default PedidoDetalles;