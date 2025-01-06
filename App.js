import React, { useEffect, useState } from 'react' 
import {Text, View, StyleSheet, Pressable, Modal, TextInput, Alert} from 'react-native' 
import RNPrint from 'react-native-print';
import Ordenes from './src/components/modal';
import NuevoPedido from './src/components/nuevopedido';
import Pedido from './src/components/pedido';
import PedidoDetalles from './src/components/pedidodetalles';



const App = () =>  {
  const [modalDetalles, setModalDetalles] = useState (false)
  const [listaPedidos, setListaPedidos] = useState([])
  const [sucursal, setSucursal] = useState ('')
  const [restaurante, setRestaurante] = useState(false)
  const [numeroOrden, setNumeroOrden] = useState('')
  const [reservas, setReservas] = useState ('')

 
  
 

  const printDocument = async () => {
    try {
      await RNPrint.print({
        html: '<h1>Heading 1</h1><h2>Heading 2</h2><h3>Heading 3</h3>'
      });
    } catch (error) {
      console.error(error);
    }
  }

  const sucursalValida = () => {
    if (sucursal > 0 && sucursal < 3){
      console.log("sucursal valida");
      setSucursal(sucursal)
      consultarApi()
      setRestaurante(true)
      
    }else{

      Alert.alert(
        'Error',
        'No existe suscusal'
      )
    }

  }

  
    const consultarApi = async () => {

      try {

        const reservasApi = `https://restaurant.ninjastudio.dev/api/reservasBySucursal/${sucursal}`
        const pedidosApi = `https://restaurant.ninjastudio.dev/api/pedidosBySucursal/${sucursal}`
        const response = await fetch(pedidosApi)
        const respuesta = await fetch(reservasApi)
  
        if(response){
          const result = await response.json()
          const filtrarpedidos = (result.pedidos)
          
          setListaPedidos(filtrarpedidos)

          const resultado = await respuesta.json()
          const reservasFiltrades = resultado.reservas
          setReservas(reservasFiltrades);
          
          
          // const pedidosfiltrados = filtrarpedidos.filter((pedido) => pedido.estado === 'Pendiente' && pedido.sucursal === sucursal) 
          // setListaPedidos(pedidosfiltrados)
          // console.log(pedidosfiltrados);
          
          //añadir logica para api reservas

        }
        
      } catch (error) {
        console.log(error);
        
      }
    }
    
  


    return (
      //<----------1ra pantalla------------->
      // aqui confirmamos la sucursal a la que queremos acceder
      <View>
        <View style={styles.ctn1}>
          <Text style={styles.title}>sucursal</Text>
          <TextInput 
          style={styles.inputtxt}
          placeholder='numero de sucursal'
          onChangeText={setSucursal}/>

          <Pressable style={styles.btn}
          onPress={()=> {
            sucursalValida()
          }}>
            <Text style={styles.btntxt}>ver pedidos</Text>
          </Pressable>
        </View>

        {/* <----------1ra pantalla------------->
      // aqui pasa la confirmacion de la primera pantalla */}

          {restaurante &&(
            <Modal visible={restaurante}
            animationType='slide'>

              <Ordenes 
              listaPedidos= {listaPedidos}
              setModalDetalles= {setModalDetalles}
              sucursal={sucursal}
              modalDetalles={modalDetalles}
              setNumeroOrden={setNumeroOrden}
              numeroOrden={numeroOrden}
              reservas ={reservas}/>
              </Modal>
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


export default App;