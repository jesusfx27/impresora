import React, { useState } from 'react' 
import {Text, View, StyleSheet, Pressable} from 'react-native' 
import Pedido from './pedido'
import PedidoDetalles from './pedidodetalles'
 
 
const NuevoPedido = ({listaPedidos, setModalDetalles, setNumeroOrden, NumeroOrden}) =>  {

   
    
    
   

    return (
         
            
                
            <View style={styles.test}>
                {listaPedidos.map (datos => (
                    <Pedido 
                    key={datos.idPedido}
                    datos = {datos}
                    listaPedidos={listaPedidos}
                    setModalDetalles={setModalDetalles}
                    setNumeroOrden={setNumeroOrden}/>
                    
              ))}
              </View>
            
            
)} 


const styles = StyleSheet.create({


 
 })


export default NuevoPedido;