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
        end={{x:0, y:0}}
        style={styles.CardLinearGradientContainer}
        colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]}>
        <ImageBackground 
            source={imagelink_square}
            style={styles.CardImageBG}
            resizeMode='cover'
        >
            <View>
                <AntDesign 
                    color={COLORS.primaryOrangeHex} 
                    name='star'
                    size={FONTSIZE.size_18}
                />
                <Text style={styles.CardRatingText}>{average_rating}</Text>
            </View>
        </ImageBackground>
        <Text style={{color: 'white'}}>{name}</Text>
        <Text style={{color: 'white'}}>{special_igredient}</Text>
        <View>
            <Text style={{color: 'white'}}>
                $ <Text>{price.price}</Text>
            </Text>
            <TouchableOpacity>
                <BGIcon
                    color={COLORS.primaryWhiteHex}
                    name={'add'}
                    BGColor={COLORS.primaryOrangeHex}
                    size={FONTSIZE.size_10}
                />
            </TouchableOpacity>
        </View>
    </LinearGradient>
  );
};


const styles = StyleSheet.create({
    CardLinearGradientContainer:{

    },
    CardImageBG:{
        width: CARD_WIDTH,
        height: CARD_WIDTH,
        borderRadius: BORDERRADIUS.radius_20,
        marginBottom: SPACING.space_15,
        overflow: 'hidden',
    },
    CardRatingText:{},


})

export default CoffeeCard