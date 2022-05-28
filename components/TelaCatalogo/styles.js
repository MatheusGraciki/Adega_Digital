import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff',
        alignContent:'center',
        justifyContent:'center',
        
    },
    containerScroll:{
        padding:'2.5%'
    },
   
    titulo: {
        fontSize: RFValue(36),
        fontWeight: 'bold',
        marginBottom: 15,
        paddingHorizontal:'2.5%'
        
    },
    subtitulo: {
        marginBottom: 15,
        fontSize: RFValue(18),
        paddingHorizontal:'2.5%'
    },
    cardVinho:{
        flexDirection:'row',
        backgroundColor: '#ab887c',
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal:20,
        marginBottom: '1%',

    },
    vinhoImg:{
        width:  RFValue(60),
        height: RFValue(120), 
        resizeMode: 'contain',
        
        
    },
    cardBoxDescricao: {
        flex: 1,
        
    
      },
    cardTitle:{
        fontSize: RFValue(19),
        fontWeight: 'bold',
        marginBottom: '5%',
        color: '#fff',
    },
    cardDescricao:{
        color: '#fff',
        paddingHorizontal:'2%'
        
        
        
        
        
        
        
    },

})

export default styles