import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-elements';
import { images, COLORS, SIZES, FONTS } from "../"
import LinearGradient from 'react-native-linear-gradient';

const Start = ({ navigation }) => {

    function renderHeader() {
        return (
            <View
                style={{
                    height: SIZES.height > 700 ? "65%" : "60%"
                }}
            >
                <ImageBackground
                    style={{
                        flex: 1,
                        justifyContent: 'flex-end'
                    }}
                    resizeMode="cover"
                    source={require("../assets/mom.jpg")}
                >
                    {/* <View style={styles.container}>
                 <Text style={styles.title}>Taste of</Text>
                 <Text style={styles.title}>Childhood</Text>
                <StatusBar style="auto" />
                 <Text>Enter</Text>
                 <TouchableOpacity
                    onPress={() => navigation.replace("Main")}
                ></TouchableOpacity>

                Button does not currently reroute
                <Button
                    onPress={() => navigation.replace("Main")}
                    buttonStyle={{
                        backgroundColor: '#737373',
                        borderRadius: 8,
                    }}
                    containerStyle={{
                        width: 200,
                        marginHorizontal: 50,
                        marginVertical: 10,
                    }}
                    title="Enter"
                    color="#FFFFFF"
                >
                </Button>
            </View> */}
                    <LinearGradient
                        start={{ x: 0, y: 0 }}
                        end={{ x: 0, y: 1 }}
                        colors={[
                            COLORS.transparent,
                            COLORS.black
                        ]}
                        style={{
                            height: 200,
                            justifyContent: 'flex-end',
                            paddingHorizontal: SIZES.padding
                        }}
                    >
                        <Text
                            style={{
                                width: "80%",
                                colors: COLORS.white,
                                ...FONTS.largeTitle,
                                lineHeight: 45
                            }}>
                            A Taste of Your Childhood
                        </Text>
                    </LinearGradient>
                </ImageBackground>
            </View>
        )
    }

    const styles = StyleSheet.create({

        container: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
        },

        imgBackground: {
            width: "100%",
            height: "100%",
            flex: 1,
        },

        title: {
            color: "#fff",
            fontSize: 38,
            fontFamily: 'Copperplate-Bold',
            fontWeight: "500",
            shadowColor: "#FFFF00",
            shadowOffset: {
                width: 1,
                height: 3,
            },
        }
    });

}
export default Start;