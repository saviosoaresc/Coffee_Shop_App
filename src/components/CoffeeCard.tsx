import {
     Text, View,
     ImageBackground, ImageProps,
    TouchableOpacity
} from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import { COLORS, FONTSIZE} from '../theme/theme';
import { AntDesign } from '@expo/vector-icons'
import BGIcon from './BGIcon';
import styles from './styles/CoffeeCardStyle';


interface CoffeeCardProps {
    id: string;
    index: number;
    type: string;
    roasted: string;
    imagelink_square: ImageProps;
    name: string;
    special_ingredient: string;
    average_rating: number;
    price: any;
    buttonPressHandler: any;
}

const CoffeeCard: React.FC<CoffeeCardProps> = ({
    id,
    index,
    type,
    roasted,
    imagelink_square,
    name,
    special_ingredient,
    average_rating,
    price,
    buttonPressHandler,
}) => {
    return (
        <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
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
            <Text style={styles.CardSubTitle}>{special_ingredient}</Text>
            <View style={styles.CardFooterBow}>
                <Text style={styles.CardPriceCurrency}>
                    $ <Text style={styles.CardPrice}>{price.price}</Text>
                </Text>
                <TouchableOpacity
                    onPress={() => {
                        buttonPressHandler({
                            id,
                            index,
                            type,
                            roasted,
                            imagelink_square,
                            name,
                            special_ingredient,
                            prices: [{ ...price, quantity: 1 }],
                        })
                    }}>
                    <BGIcon
                        name={'add'}
                        color={COLORS.primaryWhiteHex}
                        size={FONTSIZE.size_18}
                        BGColor={COLORS.primaryOrangeHex}
                    />
                </TouchableOpacity>
            </View>
        </LinearGradient>
    );
};


export default CoffeeCard