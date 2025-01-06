import React from 'react' 
import {Text, View, StyleSheet, Modal, ScrollView} from 'react-native'
import PedidoDetalles from './pedidodetalles'
import NuevoPedido from './nuevopedido'
 
 
const Ordenes = ({listaPedidos, setModalDetalles,sucursal, modalDetalles, numeroOrden, setNumeroOrden}) =>  {
    return (

        <View> 
            
             {sucursal &&(
                <View>
                    <View style= {styles.ctn1}>
                        {/* //FIXME: colocar nombre de restaurante en vez de pedidos, se veria mejor */}
                    <Text style= {styles.title}>pedidos</Text>

                    {listaPedidos.length > 0 ? 
                    <NuevoPedido
                    listaPedidos= {listaPedidos}
                    setModalDetalles={setModalDetalles}
                    setNumeroOrden={setNumeroOrden}
                    numeroOrden={numeroOrden}/> :
                    <Text style={styles.pedidos}>no hay pedidos</Text>}
                    </View>

                    <View>
                    {modalDetalles && (
                    <Modal 
                        visible={modalDetalles}
                        animationType='slide'>
                    <PedidoDetalles 
                        listaPedidos= {listaPedidos}
                        setModalDetalles= {setModalDetalles}
                        numeroOrden= {numeroOrden}
                        />
                    </Modal>)}
                    </View>
                </View>
                
            )} 
            
            
            </View>
)} 


const styles = StyleSheet.create({
    ctn1:{
        marginTop: 20,
        marginHorizontal: 10,
        
        
        },
        title:{
        fontWeight: 'bold',
        fontSize: 24,
        textTransform: 'uppercase',
        textAlign: 'center'
        },
        pedidos:{
        fontWeight: 'bold',
        fontSize: 24,
        textTransform: 'uppercase',
        textAlign: 'center',
        paddingTop: 20 
        
        },
       
        
        })
 


export default Ordenes;



  





