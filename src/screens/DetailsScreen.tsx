import React, { useState } from 'react'
import { StyleSheet, Text, View, StatusBar, ScrollView, TouchableWithoutFeedback, TouchableOpacity } from 'react-native'
import { useStore } from '../store/store'
import { BORDERRADIUS, COLORS, FONTSIZE, SPACING } from '../theme/theme';
import ImageBackgroundInfo from '../components/ImageBackgroundInfo';
import PaymentFooter from '../components/PaymentFooter';

//erro ao desfavoritar
//4:43:00

const DetailsScreen = ({ navigation, route }: any) => {
  const ItemOfIdex = useStore((state: any) =>
    route.params.type == 'Coffee' ? state.CoffeeList : state.BeanList,
  )[route.params.index];
  const addToFavoriteList = useStore((state: any) => state.addToFavoriteList);
  const deleteFromFavoriteList = useStore((state: any) => state.deleteFromFavoriteList);
  const addToCart = useStore((state: any) => state.addToCart);
  const calculateCartPrice = useStore((state: any) => state.calculateCartPrice);

  const [price, setPrice] = useState(ItemOfIdex.prices[0]);
  const [fullDesc, setFullDesc] = useState(false);

  const ToggleFavourite = (favourite: boolean, type: string, id: string) => {
    favourite ? deleteFromFavoriteList(type, id) : addToFavoriteList(type, id)
  };

  //funcao para fechar a tela de Detalhes
  const BackHandler = () => {
    navigation.pop();
  }

  const addToCartHandler = ({
    id,
    index,
    name,
    roasted,
    imagelink_square,
    special_igredient,
    type,
    price,
  }: any) => {
    
      addToCart({
        id,
        index,
        name,
        roasted,
        imagelink_square,
        special_igredient,
        type,
        prices: [{ ...price, quantity: 1 }],
      });
      calculateCartPrice();
      navigation.navigate('Cart');
  }



    return (
      <View style={styles.ScreenContainer}>
        <StatusBar backgroundColor={COLORS.primaryBlackHex} />
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.ScrollViewFlex}
        >
          <ImageBackgroundInfo
            EnableBackHandler={true}
            imagelink_portrait={ItemOfIdex.imagelink_portrait}
            type={ItemOfIdex.type}
            id={ItemOfIdex.id}
            favourite={ItemOfIdex.favourite}
            name={ItemOfIdex.name}
            special_ingredient={ItemOfIdex.special_ingredient}
            ingredients={ItemOfIdex.ingredients}
            average_rating={ItemOfIdex.average_rating}
            ratings_count={ItemOfIdex.ratings_count}
            roasted={ItemOfIdex.roasted}
            //chama o fechar a tela
            BackHandler={BackHandler}
            ToggleFavourite={ToggleFavourite}
          />
          <View style={styles.FooterInfoArea}>
            <Text style={styles.InfoTitle}>Description</Text>
            {fullDesc ? (
              //um touchble que faz com que o texto seje diminuido, e ao clicar ele aumenta
              <TouchableWithoutFeedback onPress={() => { setFullDesc(prev => !prev) }}>
                <Text style={styles.DescriptionText}>{ItemOfIdex.description}</Text>
              </TouchableWithoutFeedback>
            ) : (
              <TouchableWithoutFeedback onPress={() => { setFullDesc(prev => !prev) }}>
                <Text style={styles.DescriptionText} numberOfLines={3}>{ItemOfIdex.description}</Text>
              </TouchableWithoutFeedback>
            )}
            <Text style={styles.InfoTitle}>Size</Text>
            <View style={styles.SizeOuterContainer}>
              {ItemOfIdex.prices.map((data: any) => (
                <TouchableOpacity
                  key={data.size}
                  onPress={() => {
                    setPrice(data);
                  }}
                  style={[
                    styles.SizeBox,
                    {
                      borderColor:
                        data.size == price.size
                          ? COLORS.primaryOrangeHex
                          : COLORS.primaryDarkGreyHex,
                    }]}>
                  <Text
                    style={[
                      styles.SizeText,
                      {
                        fontSize:
                          ItemOfIdex.type == 'bean'
                            ? FONTSIZE.size_14
                            : FONTSIZE.size_16,
                        color:
                          data.size == price.size
                            ? COLORS.primaryOrangeHex
                            : COLORS.secondaryLightGreyHex
                      }
                    ]}
                  >
                    {data.size}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
          <PaymentFooter
            price={price}
            buttonTitle='Add to Cart'
            buttonPressHandler={() => {
              addToCartHandler({
                id: ItemOfIdex.id,
                index: ItemOfIdex.index,
                name: ItemOfIdex.name,
                roasted: ItemOfIdex.roasted,
                imagelink_square: ItemOfIdex.imagelink_square,
                special_igredient: ItemOfIdex.special_igredient,
                type: ItemOfIdex.type,
                price: price,
              });
             }} />
        </ScrollView>
      </View>
    )
  }


  const styles = StyleSheet.create({
    ScreenContainer: {
      flex: 1,
      backgroundColor: COLORS.primaryBlackHex,
    },
    ScrollViewFlex: {
      flexGrow: 1,
      justifyContent: 'space-between'
    },
    FooterInfoArea: {
      padding: SPACING.space_20
    },
    InfoTitle: {
      fontFamily: 'Poppins-Semibold',
      fontSize: FONTSIZE.size_16,
      color: COLORS.primaryWhiteHex,
      marginBottom: SPACING.space_10
    },
    DescriptionText: {
      letterSpacing: 0.5,
      fontFamily: 'Poppins-Regular',
      fontSize: FONTSIZE.size_14,
      color: COLORS.primaryWhiteHex,
      marginBottom: SPACING.space_30
    },
    SizeOuterContainer: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      gap: SPACING.space_20
    },
    SizeBox: {
      flex: 1,
      backgroundColor: COLORS.primaryDarkGreyHex,
      alignItems: 'center',
      justifyContent: 'center',
      height: SPACING.space_24 * 2,
      borderRadius: BORDERRADIUS.radius_10,
      borderWidth: 2
    },
    SizeText: {
      fontFamily: 'Poppins-Medium'
    },
  })

  export default DetailsScreen