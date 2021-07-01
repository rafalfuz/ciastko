import Photo1 from '../Assets/Biscuits.jpg'

const initialState = {
    cakes: [
        {id:1,
         name: 'Pączek z chrzanem',
         photo: Photo1,
         prize: '27.99',
         value: 'zł/szt',
         weight: '100',
         superInfo: 'Nowość',
         suplementsFacts: 'soda oczyszczona, masło, cukier trzcinowy, szpachla gładzi gipsowej białej CEKOL-F16, jaja, imbir marynowany',
         description: 'Produkt wykonany jest z prostokątnej stalowej blachy, wzdłuż której po obu stronach powycinane są prostokątne kierownice poodginane na przemian w dół i w górę. W zależności od ilości kierownic znajdujących się w zawirowywaczu i kąta ich zagięcia zależeć będzie stopień wykorzystania ciepła, które wraz ze spalinami uchodzić będzie z kotła do komina.',
         nutritionalValue: {
            grammage: 100,
            energy:{
                kJ: 100,
                kcal: 100,
            },
            fat: 100,
            includingSaturatedSattyAcids: 100,
            carbohydrates: 100,
            includingSugars: 100,
            protein: 100,
            salt: 100
         },
         backgroundColor: '#4d5e63'
        },
        {id:2,
            name: 'Pączek z czosnkiem',
            photo: 'https://okruszek.info.pl/uploads/imgs/normal/3Svp7z5mwGuRIfW58wUxiOyrV88nyPr2R6kWXTOA7exz2WX1Jt.JPG',
            prize: '12.99',
            value: 'zł/kg',
            weight: '200',
            superInfo: 'Staroć',
            suplementsFacts: 'soda oczyszczona, masło, cukier trzcinowy, szpachla gładzi gipsowej białej CEKOL-F16, jaja, imbir marynowany',
            description: 'Produkt wykonany jest z prostokątnej stalowej blachy, wzdłuż której po obu stronach powycinane są prostokątne kierownice poodginane na przemian w dół i w górę. W zależności od ilości kierownic znajdujących się w zawirowywaczu i kąta ich zagięcia zależeć będzie stopień wykorzystania ciepła, które wraz ze spalinami uchodzić będzie z kotła do komina.',
            nutritionalValue: {
                grammage: 200,
                energy: {
                    kJ: 200,
                    kcal: 200,
                },
                fat: 200,
                includingSaturatedSattyAcids: 200,
                carbohydrates: 200,
                includingSugars: 200,
                protein: 200,
                salt: 200
             },
            backgroundColor: '#c46f15'
        },
        {id:3,
            name: 'Sernik z wołowiną i grzybami - sos z zielonej fasoli',
            photo: Photo1,
            prize: '22.99',
            value: 'zł/szt',
            weight: '300',
            superInfo: 'Promocja',
            suplementsFacts: 'soda oczyszczona, masło, cukier trzcinowy, szpachla gładzi gipsowej białej CEKOL-F16, jaja, imbir marynowany',
            description: 'Produkt wykonany jest z prostokątnej stalowej blachy, wzdłuż której po obu stronach powycinane są prostokątne kierownice poodginane na przemian w dół i w górę. W zależności od ilości kierownic znajdujących się w zawirowywaczu i kąta ich zagięcia zależeć będzie stopień wykorzystania ciepła, które wraz ze spalinami uchodzić będzie z kotła do komina.',
            nutritionalValue: {
                grammage: 300,
                energy:{
                    kJ: 300,
                    kcal: 300,
                },
                fat: 300,
                includingSaturatedSattyAcids: 300,
                carbohydrates: 300,
                includingSugars: 300,
                protein: 300,
                salt: 300
             },
            backgroundColor: '#40b319'
        },
    ]
    }

const rootReducer = (state=initialState, action) => {
    console.log(action)
    return state
}

export default rootReducer