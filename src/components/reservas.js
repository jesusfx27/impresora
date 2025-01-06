import React from 'react' 
import {Text, View, StyleSheet} from 'react-native' 
import ListaReservas from './listareservas'
 
 
const Reserva = ({reservas}) =>  {

if(Object.keys(reservas).length === 0)    return null

return (
        <View> 
            <Text style={styles.title}>reservas</Text>

            {reservas.map(datos => (
                <ListaReservas 
                key={datos.id}
                datos={datos}/>
                
            ))}
        </View>

)} 


const styles = StyleSheet.create({
 title:{
        fontWeight: 'bold',
        fontSize: 24,
        textTransform: 'uppercase',
        textAlign: 'center'
 }

 
 
 })


export default Reserva;