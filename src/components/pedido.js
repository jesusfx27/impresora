import React from 'react' 
import {Text, View, StyleSheet, Pressable, ScrollView} from 'react-native' 
import PedidoDetalles from './pedidodetalles';
 
 
const Pedido = ({datos, setModalDetalles, numeroOrden, setNumeroOrden}) =>  {
    

    

   const {nombre, total, nota, idPedido} = datos
    
      
   
    
    return (
      <ScrollView>
      <Pressable
      onPress={()=> {
         setNumeroOrden(idPedido)
         setModalDetalles(true)
       }}>
      <View style={styles.contenedor}>
         <View style={styles.orientacion}>
               <View> 
                     <Text style={styles.label}>{nombre}</Text>
                     <Text style={styles.label}>{total} Eur</Text>
                     <Text style={styles.label}>{nota == '' ?  <Text>sin nota</Text> :nota }</Text>
                     <Text style={styles.label}>Pedido #{idPedido}</Text>
               </View>

               <View>
                  <View  style={styles.printctn}>
                     <Pressable style={styles.btn} 
                     on onPress={()=> console.log('imprimiendo')
                     }>
                        <Text style={styles.btntxt}>print</Text>
                     </Pressable>
                     <Pressable style={styles.btn} 
                     on onPress={()=> console.log('producto enviado')
                     }>
                        <Text style={styles.btntxt}>enviado</Text>
                     </Pressable>
                     </View>
               </View>
         </View>
      </View>
      </Pressable>
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
      padding: 10
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
 



export default Pedido;