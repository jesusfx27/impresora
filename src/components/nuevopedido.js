import React, { useState } from 'react' 
import {Text, View, StyleSheet, Pressable} from 'react-native' 
import Pedido from './pedido'
 
 
const NuevoPedido = ({listaPedidos, setModalDetalles}) =>  {

   
    

    return (
         
            <View style= {styles.datacontainer}>
                <Pressable style= {styles.btnpedido}
                onPress={() =>{
                    setModalDetalles(true)
                        
                }
                }
                
                >
                {listaPedidos.map (datos => (
                    <Pedido 
                    key={datos.idPedido}
                    datos = {datos}/>
                    
              ))}
              </Pressable>
            </View>
            
)} 


const styles = StyleSheet.create({

 name:{
    marginBottom: 5,
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white'
 },
 total:{
    fontSize: 15,
    color: 'white',
    fontWeight: 'bold'
 },
 address:{
    fontSize: 15,
    color: 'white',
    fontWeight: 'bold'
 }
 
 })


export default NuevoPedido;