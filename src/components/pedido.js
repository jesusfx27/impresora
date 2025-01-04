import React from 'react' 
import {Text, View, StyleSheet, Pressable} from 'react-native' 
 
 
const Pedido = ({datos}) =>  {
    const {nombre, total} = datos 
    return (
      <View>
        <View style={styles.orientacion}> 
               <View  style={styles.datacontainer}>
                    <Text style={styles.name}>{nombre}</Text>
                    <Text style={styles.total}>{total} Eur</Text>
                    <Text style={styles.address}>{nombre}</Text>
               </View>

               <View style={styles.printctn}>
                     <Pressable style={styles.btn} 
                     on onPress={()=> console.log('imprimiendo')
                     }>
                        <Text>print</Text>
                     </Pressable>
                     <Pressable style={styles.btn} 
                     on onPress={()=> console.log('producto enviado')
                     }>
                        <Text>enviado</Text>
                     </Pressable>
               </View>
            
        </View>
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
   },
   
   datacontainer:{
      
      backgroundColor: 'grey',
      borderRadius: 5,
      marginTop: 20,
      padding: 20,
      flex: 1
   },
   printctn:{
      justifyContent: 'space-evenly'
   },
   btn:{
     backgroundColor: 'red',
     width: 50,
     height: 50
   },
   orientacion:{
      flexDirection: 'row',
      justifyContent: 'space-between'
      
   }
   
        
})
 



export default Pedido;