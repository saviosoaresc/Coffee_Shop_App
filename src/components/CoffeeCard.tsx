import { StyleSheet, Text, View, Dimensions, ImageBackground, ImageProps, TouchableOpacity } from 'react-native'
import React from 'react'
import {LinearGradient} from 'expo-linear-gradient';
import { BORDERRADIUS, COLORS, FONTSIZE, SPACING } from '../theme/theme';
import {AntDesign} from '@expo/vector-icons'
import BGIcon from './BGIcon';

const CARD_WIDTH = Dimensions.get('window').width * 0.32;


interface CoffeeCardProps {
    id: string;
    index: number;
    type: string;
    rosted: string;
    imagelink_square: ImageProps;
    name: string;
    special_igredient: string;
    average_rating: number;
    price: any;
    buttonPressHandler: any;
}

const CoffeeCard: React.FC <CoffeeCardProps> = ({
    id,
    index,
    type,
    rosted,
    imagelink_square,
    name,
    special_igredient,
    average_rating,
    price,
    buttonPressHandler,
}) => {
  return (
    <LinearGradient
        start={{x:0, y:0}}
        end={{x:1, y:1}}
        style={styles.CardLinearGradientContainer}
        colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]}>
        <ImageBackground 
            source={imagelink_square}
            style={styles.CardImageBG}
            resizeMode='cover'
        >
            <View style={styles.CardRatingContainer}>
                <AntDesign 
                    color={COLORS.primaryOrangeHex} 
                    name='star'
                    size={FONTSIZE.size_16}
                />
                <Text style={styles.CardRatingText}>{average_rating}</Text>
            </View>
        </ImageBackground>
        <Text style={styles.CardTitle}>{name}</Text>
        <Text style={styles.CardSubTitle}>{special_igredient}</Text>
        <View style={styles.CardFooterBow}>
            <Text style={styles.CardPriceCurrency}>
                $ <Text style={styles.CardPrice}>{price.price}</Text>
            </Text>
            <TouchableOpacity>
                <BGIcon
                    name={'add'}
                    color={COLORS.primaryWhiteHex}
                    size={FONTSIZE.size_10}
                    BGColor={COLORS.primaryOrangeHex}
                />
            </TouchableOpacity>
        </View>
    </LinearGradient>
  );
};


const styles = StyleSheet.create({
    CardLinearGradientContainer:{
        padding: SPACING.space_15,
        borderRadius: BORDERRADIUS.radius_25,
    },
    CardImageBG:{
        width: CARD_WIDTH,
        height: CARD_WIDTH,
        borderRadius: BORDERRADIUS.radius_20,
        marginBottom: SPACING.space_15,
        overflow: 'hidden',
    },
    CardRatingContainer:{
        flexDirection: 'row',
        backgroundColor: COLORS.primaryBlackHex,
        alignItems: 'center',
        justifyContent: 'center',
        gap: SPACING.space_10,
        paddingHorizontal: SPACING.space_15,
        position: 'absolute',
        borderBottomLeftRadius: BORDERRADIUS.radius_20,
        borderTopRightRadius: BORDERRADIUS.radius_20,
        top: 0,
        right: 0,
    },
    CardRatingText:{
        fontFamily: 'Poppins-Medium',
        color: COLORS.primaryWhiteHex,
        lineHeight: 22,
        fontSize: FONTSIZE.size_14,
    },
    CardTitle:{
        fontFamily: 'Poppins-Medium',
        color: COLORS.primaryWhiteHex,
        fontSize: FONTSIZE.size_16,
    },
    CardSubTitle:{
        fontFamily: 'Poppins-Light',
        color: COLORS.primaryWhiteHex,
        fontSize: FONTSIZE.size_10,
    },
    CardFooterBow: {
        flexDirection:'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: SPACING.space_15
    },
    CardPriceCurrency:{
        fontFamily: 'Poppins-Semibold',
        color: COLORS.primaryOrangeHex,
        fontSize: FONTSIZE.size_18
    },
    CardPrice:{
        color: COLORS.primaryWhiteHex,
    },
})

export default CoffeeCard