import Photo1 from '../Assets/Biscuits.jpg'

const initialState = {
    cakes: [
        {
            id: 1,
            name: 'Pączek z chrzanem',
            photo: Photo1,
            prize: '27.99',
            value: 'zł/szt',
            weight: '100',
            superInfo: 'Nowość',
            suplementsFacts: 'grab, jesion, buk, jabłoń, grusza lub śliwa',
            description: 'Drewno do palenia w kominku powinno być sezonowane od roku do nawet 3 lat w zależności od gatunku. Wówczas jego wilgotność spada do 15-20%.',
            nutritionalValue: {
                grammage: 100,
                energy: {
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
            backgroundColor: '#FDAC53'
        },
        {
            id: 2,
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
            backgroundColor: '#9BB7D4'
        },
        {
            id: 3,
            name: 'Sernik z grzybami w polewie z zielonej fasoli',
            photo: Photo1,
            prize: '22.99',
            value: 'zł/szt',
            weight: '300',
            superInfo: 'Promocja',
            suplementsFacts: 'Bulbasaur, Ivysaur, Venusaur, Charmander, Charmeleon, Charizard, Squirtle, Wartortle, Blastoise, Caterpie, Metapod, Butterfree, Weedle, Kakuna, Beedrill, Pidgey, Pidgeotto, Pidgeot, Rattata, Raticate',
            description: 'Konstrukcja sprzęgła opiera się na tarczy i zamocowanej na niej okładzinie ciernej. Często posiada ono także tłumiki drgań skrętnych. Ale to właśnie okładzina cierna kompensuje różnice prędkości obrotowych wału napędowego i wałka skrzyni w momencie zmiany biegu. Przenosząc moment obrotowy, okładzina ulega ścieraniu. Gdy jej grubość jest już zbyt mała, sprzęgło przestaje właściwie pracować i zaczyna się ślizgać, a to rodzi konkretne problemy. Sprzęgło nie mogłoby jednak odpowiednio działać bez współpracujących z nim podzespołów, takich jak docisk sprzęgła, który niweluje objawy stopniowego zużywa się okładzin sprzęgła, wysprzęglik i łożysko oporowe (często zintegrowane z wysprzęglikiem).',
            nutritionalValue: {
                grammage: 300,
                energy: {
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
            backgroundColor: '#B55A30'
        },
        {
            id: 4,
            name: 'Sernik z grzybami w polewie z zielonej fasoli',
            photo: Photo1,
            prize: '22.99',
            value: 'zł/szt',
            weight: '400',
            superInfo: 'Promocja',
            suplementsFacts: 'Bulbasaur, Ivysaur, Venusaur, Charmander, Charmeleon, Charizard, Squirtle, Wartortle, Blastoise, Caterpie, Metapod, Butterfree, Weedle, Kakuna, Beedrill, Pidgey, Pidgeotto, Pidgeot, Rattata, Raticate',
            description: 'Konstrukcja sprzęgła opiera się na tarczy i zamocowanej na niej okładzinie ciernej. Często posiada ono także tłumiki drgań skrętnych. Ale to właśnie okładzina cierna kompensuje różnice prędkości obrotowych wału napędowego i wałka skrzyni w momencie zmiany biegu. Przenosząc moment obrotowy, okładzina ulega ścieraniu. Gdy jej grubość jest już zbyt mała, sprzęgło przestaje właściwie pracować i zaczyna się ślizgać, a to rodzi konkretne problemy. Sprzęgło nie mogłoby jednak odpowiednio działać bez współpracujących z nim podzespołów, takich jak docisk sprzęgła, który niweluje objawy stopniowego zużywa się okładzin sprzęgła, wysprzęglik i łożysko oporowe (często zintegrowane z wysprzęglikiem).',
            nutritionalValue: {
                grammage: 400,
                energy: {
                    kJ: 400,
                    kcal: 400,
                },
                fat: 400,
                includingSaturatedSattyAcids: 400,
                carbohydrates: 400,
                includingSugars: 400,
                protein: 400,
                salt: 400
            },
            backgroundColor: '#F5DF4D'
        },
        {
            id: 5,
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
            backgroundColor: '#0072B5'
        },
        {
            id: 6,
            name: 'Pączek z chrzanem',
            photo: Photo1,
            prize: '27.99',
            value: 'zł/szt',
            weight: '100',
            superInfo: 'Nowość',
            suplementsFacts: 'grab, jesion, buk, jabłoń, grusza lub śliwa',
            description: 'Drewno do palenia w kominku powinno być sezonowane od roku do nawet 3 lat w zależności od gatunku. Wówczas jego wilgotność spada do 15-20%.',
            nutritionalValue: {
                grammage: 100,
                energy: {
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
            backgroundColor: '#A0DAA9'
        },
        {
            id: 7,
            name: 'Pączek z chrzanem',
            photo: Photo1,
            prize: '27.99',
            value: 'zł/szt',
            weight: '100',
            superInfo: 'Nowość',
            suplementsFacts: 'grab, jesion, buk, jabłoń, grusza lub śliwa',
            description: 'Drewno do palenia w kominku powinno być sezonowane od roku do nawet 3 lat w zależności od gatunku. Wówczas jego wilgotność spada do 15-20%.',
            nutritionalValue: {
                grammage: 100,
                energy: {
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
            backgroundColor: '#E9897E'
        },
        {
            id: 8,
            name: 'Pączek z chrzanem',
            photo: Photo1,
            prize: '27.99',
            value: 'zł/szt',
            weight: '100',
            superInfo: 'Nowość',
            suplementsFacts: 'grab, jesion, buk, jabłoń, grusza lub śliwa',
            description: 'Drewno do palenia w kominku powinno być sezonowane od roku do nawet 3 lat w zależności od gatunku. Wówczas jego wilgotność spada do 15-20%.',
            nutritionalValue: {
                grammage: 100,
                energy: {
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
            backgroundColor: '#00A170'
        },
        {
            id: 9,
            name: 'Pączek z chrzanem',
            photo: Photo1,
            prize: '27.99',
            value: 'zł/szt',
            weight: '100',
            superInfo: 'Nowość',
            suplementsFacts: 'grab, jesion, buk, jabłoń, grusza lub śliwa',
            description: 'Drewno do palenia w kominku powinno być sezonowane od roku do nawet 3 lat w zależności od gatunku. Wówczas jego wilgotność spada do 15-20%.',
            nutritionalValue: {
                grammage: 100,
                energy: {
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
            backgroundColor: '#926AA6'
        },
        {
            id: 10,
            name: 'Pączek z chrzanem',
            photo: Photo1,
            prize: '27.99',
            value: 'zł/szt',
            weight: '100',
            superInfo: 'Nowość',
            suplementsFacts: 'grab, jesion, buk, jabłoń, grusza lub śliwa',
            description: 'Drewno do palenia w kominku powinno być sezonowane od roku do nawet 3 lat w zależności od gatunku. Wówczas jego wilgotność spada do 15-20%.',
            nutritionalValue: {
                grammage: 100,
                energy: {
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
            backgroundColor: '#D2386C'
        },
    ]
}

const rootReducer = (state = initialState) => state

export default rootReducer