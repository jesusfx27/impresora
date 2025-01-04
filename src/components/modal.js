import React from 'react' 
import {Text, View, StyleSheet, Modal, ScrollView} from 'react-native'
import NuevoPedido from './nuevopedido'
import PedidoDetalles from './pedidodetalles'
 
 
const Ordenes = ({listaPedidos, setModalDetalles,sucursal, modalDetalles}) =>  {
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
                    setModalDetalles={setModalDetalles}/> :
                    <Text style={styles.pedidos}>no hay pedidos</Text>}
                    </View>

                    <View>
                    {modalDetalles && (
                    <Modal 
                        visible={modalDetalles}
                        animationType='slide'>
                    <PedidoDetalles 
                        listaPedidos= {listaPedidos}
                        setModalDetalles= {setModalDetalles}/>
                    </Modal>)}
                    </View>
                </View>
                
            )} 
            
            
            </View>
)} 


const styles = StyleSheet.create({
    ctn1:{
        marginTop: 20,
        marginHorizontal: 10
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
        inputtxt:{
        backgroundColor: 'grey',
        borderRadius: 10,
        textAlign: 'center',
        marginTop: 30,
        marginHorizontal: 20
        },
        btn:{
        marginTop: 20,
        backgroundColor: 'blue',
        width: '50%',
        borderRadius: 10,
        marginHorizontal: 100
        
        },
        btntxt:{
        padding: 10,
        color: 'white',
        textAlign: 'center'
        }
        
        })
 


export default Ordenes;



  





