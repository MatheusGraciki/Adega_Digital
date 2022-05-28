import React from "react";
import { View, Text, FlatList, Image, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import produtos from "../DataProduct";
import styles from "./styles";

export default function TelaCatalogo() {
  return (
    <SafeAreaView style={styles.container}>
    
        
            <Text style={ styles.titulo }>Nossos vinhos</Text>
            <Text style={ styles.subtitulo }>Trabalhamos com o melhor vinho dos seguintes tipos: Vinho branco, vinho rosé, vinho tinto e vinho seco.</Text>
            <FlatList
           
            data={produtos}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
                <ScrollView style={styles.containerScroll}>
               
                    
                        <View style={styles.cardVinho}>
                            <Image style={styles.vinhoImg} source={item.img} />
                            <View style={styles.cardBoxDescricao}>
                                <Text style={styles.cardTitle}> {item.title[0]} </Text>
                                <Text style={styles.cardDescricao}>{item.descricao[0]}</Text>
                            </View>
                                
                        </View>
                </ScrollView>   
         
          )}
        />
        
   
           
    </SafeAreaView>
   
  );
}
