import Photo1 from '../Assets/Biscuits.jpg'

const initialState = {
    cakes: [
        {
            id: 1,
            name: 'Pączek z chrzanem',
            photo: Photo1,
            prize: 27.99,
            value: 'zł/szt',
            weight: 100,
            superInfo: 'Nowość',
            suplementsFacts: 'grab, jesion, buk, jabłoń, grusza lub śliwa',
            description: 'Drewno do palenia w kominku powinno być sezonowane od roku do nawet 3 lat w zależności od gatunku. Wówczas jego wilgotność spada do 15-20%.',
            backgroundColor: '#FDAC53',
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
        },
        
        {
            id: 2,
            name: 'Pączek z czosnkiem',
            prize: 8.99,
            value: 'zł/szt',
            weight: 200,
            superInfo: 'Przeterminowany',
            suplementsFacts: 'soda oczyszczona, masło, cukier trzcinowy, szpachla gładzi gipsowej białej CEKOL-F16, jaja, imbir marynowany',
            description: 'Produkt wykonany jest z prostokątnej stalowej blachy, wzdłuż której po obu stronach powycinane są prostokątne kierownice poodginane na przemian w dół i w górę. W zależności od ilości kierownic znajdujących się w zawirowywaczu i kąta ich zagięcia zależeć będzie stopień wykorzystania ciepła, które wraz ze spalinami uchodzić będzie z kotła do komina.',
            backgroundColor: '#A0DAA9',
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
        },
        
        {
            id: 3,
            name: 'Pączek z chrzanem',
            photo: Photo1,
            prize: 27.99,
            value: 'zł/szt',
            weight: 100,
            superInfo: 'Nowość',
            suplementsFacts: 'grab, jesion, buk, jabłoń, grusza lub śliwa',
            description: 'Drewno do palenia w kominku powinno być sezonowane od roku do nawet 3 lat w zależności od gatunku. Wówczas jego wilgotność spada do 15-20%.',
            backgroundColor: '#E9897E',
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
        },
        
        {
            id: 4,
            name: 'Pączek z chrzanem',
            photo: Photo1,
            prize: 27.99,
            value: 'zł/szt',
            weight: 100,
            superInfo: 'Nowość',
            suplementsFacts: 'grab, jesion, buk, jabłoń, grusza lub śliwa',
            description: 'Drewno do palenia w kominku powinno być sezonowane od roku do nawet 3 lat w zależności od gatunku. Wówczas jego wilgotność spada do 15-20%.',
            backgroundColor: '#00A170',
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
        },
        {
            id: 5,
            name: 'Pączek z czosnkiem',
            prize: 8.99,
            value: 'zł/szt',
            weight: 500,
            superInfo: 'Przeterminowany',
            suplementsFacts: 'soda oczyszczona, masło, cukier trzcinowy, szpachla gładzi gipsowej białej CEKOL-F16, jaja, imbir marynowany',
            description: 'Produkt wykonany jest z prostokątnej stalowej blachy, wzdłuż której po obu stronach powycinane są prostokątne kierownice poodginane na przemian w dół i w górę. W zależności od ilości kierownic znajdujących się w zawirowywaczu i kąta ich zagięcia zależeć będzie stopień wykorzystania ciepła, które wraz ze spalinami uchodzić będzie z kotła do komina.',
            backgroundColor: '#926AA6',
            nutritionalValue: {
                grammage: 500,
                energy: {
                    kJ: 500,
                    kcal: 500,
                },
                fat: 500,
                includingSaturatedSattyAcids: 500,
                carbohydrates: 500,
                includingSugars: 500,
                protein: 500,
                salt: 500
            },  
        },
        {
            id: 6,
            name: 'Pączek z chrzanem',
            photo: Photo1,
            prize: 27.99,
            value: 'zł/szt',
            weight: 100,
            superInfo: 'Nowość',
            suplementsFacts: 'grab, jesion, buk, jabłoń, grusza lub śliwa',
            description: 'Drewno do palenia w kominku powinno być sezonowane od roku do nawet 3 lat w zależności od gatunku. Wówczas jego wilgotność spada do 15-20%.',
            backgroundColor: '#FDAC53',
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
        },
        
        {
            id: 7,
            name: 'Pączek z czosnkiem',
            prize: 8.99,
            value: 'zł/szt',
            weight: 200,
            superInfo: 'Przeterminowany',
            suplementsFacts: 'soda oczyszczona, masło, cukier trzcinowy, szpachla gładzi gipsowej białej CEKOL-F16, jaja, imbir marynowany',
            description: 'Produkt wykonany jest z prostokątnej stalowej blachy, wzdłuż której po obu stronach powycinane są prostokątne kierownice poodginane na przemian w dół i w górę. W zależności od ilości kierownic znajdujących się w zawirowywaczu i kąta ich zagięcia zależeć będzie stopień wykorzystania ciepła, które wraz ze spalinami uchodzić będzie z kotła do komina.',
            backgroundColor: '#A0DAA9',
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
        },
        
        {
            id: 8,
            name: 'Pączek z chrzanem',
            photo: Photo1,
            prize: 27.99,
            value: 'zł/szt',
            weight: 100,
            superInfo: 'Nowość',
            suplementsFacts: 'grab, jesion, buk, jabłoń, grusza lub śliwa',
            description: 'Drewno do palenia w kominku powinno być sezonowane od roku do nawet 3 lat w zależności od gatunku. Wówczas jego wilgotność spada do 15-20%.',
            backgroundColor: '#E9897E',
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
        },
        
        {
            id: 9,
            name: 'Pączek z chrzanem',
            photo: Photo1,
            prize: 27.99,
            value: 'zł/szt',
            weight: 100,
            superInfo: 'Nowość',
            suplementsFacts: 'grab, jesion, buk, jabłoń, grusza lub śliwa',
            description: 'Drewno do palenia w kominku powinno być sezonowane od roku do nawet 3 lat w zależności od gatunku. Wówczas jego wilgotność spada do 15-20%.',
            backgroundColor: '#00A170',
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
        },
        {
            id: 10,
            name: 'Pączek z czosnkiem',
            prize: 8.99,
            value: 'zł/szt',
            weight: 500,
            superInfo: 'Przeterminowany',
            suplementsFacts: 'soda oczyszczona, masło, cukier trzcinowy, szpachla gładzi gipsowej białej CEKOL-F16, jaja, imbir marynowany',
            description: 'Produkt wykonany jest z prostokątnej stalowej blachy, wzdłuż której po obu stronach powycinane są prostokątne kierownice poodginane na przemian w dół i w górę. W zależności od ilości kierownic znajdujących się w zawirowywaczu i kąta ich zagięcia zależeć będzie stopień wykorzystania ciepła, które wraz ze spalinami uchodzić będzie z kotła do komina.',
            backgroundColor: '#926AA6',
            nutritionalValue: {
                grammage: 500,
                energy: {
                    kJ: 500,
                    kcal: 500,
                },
                fat: 500,
                includingSaturatedSattyAcids: 500,
                carbohydrates: 500,
                includingSugars: 500,
                protein: 500,
                salt: 500
            },  
        },{
            id: 11,
            name: 'Pączek z chrzanem',
            photo: Photo1,
            prize: 27.99,
            value: 'zł/szt',
            weight: 100,
            superInfo: 'Nowość',
            suplementsFacts: 'grab, jesion, buk, jabłoń, grusza lub śliwa',
            description: 'Drewno do palenia w kominku powinno być sezonowane od roku do nawet 3 lat w zależności od gatunku. Wówczas jego wilgotność spada do 15-20%.',
            backgroundColor: '#FDAC53',
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
        },
        
        {
            id: 12,
            name: 'Pączek z czosnkiem',
            prize: 8.99,
            value: 'zł/szt',
            weight: 200,
            superInfo: 'Przeterminowany',
            suplementsFacts: 'soda oczyszczona, masło, cukier trzcinowy, szpachla gładzi gipsowej białej CEKOL-F16, jaja, imbir marynowany',
            description: 'Produkt wykonany jest z prostokątnej stalowej blachy, wzdłuż której po obu stronach powycinane są prostokątne kierownice poodginane na przemian w dół i w górę. W zależności od ilości kierownic znajdujących się w zawirowywaczu i kąta ich zagięcia zależeć będzie stopień wykorzystania ciepła, które wraz ze spalinami uchodzić będzie z kotła do komina.',
            backgroundColor: '#A0DAA9',
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
        },
        
        {
            id: 13,
            name: 'Pączek z chrzanem',
            photo: Photo1,
            prize: 27.99,
            value: 'zł/szt',
            weight: 100,
            superInfo: 'Nowość',
            suplementsFacts: 'grab, jesion, buk, jabłoń, grusza lub śliwa',
            description: 'Drewno do palenia w kominku powinno być sezonowane od roku do nawet 3 lat w zależności od gatunku. Wówczas jego wilgotność spada do 15-20%.',
            backgroundColor: '#E9897E',
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
        },
        
        {
            id: 14,
            name: 'Pączek z chrzanem',
            photo: Photo1,
            prize: 27.99,
            value: 'zł/szt',
            weight: 100,
            superInfo: 'Nowość',
            suplementsFacts: 'grab, jesion, buk, jabłoń, grusza lub śliwa',
            description: 'Drewno do palenia w kominku powinno być sezonowane od roku do nawet 3 lat w zależności od gatunku. Wówczas jego wilgotność spada do 15-20%.',
            backgroundColor: '#00A170',
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
        },
        {
            id: 15,
            name: 'Pączek z czosnkiem',
            prize: 8.99,
            value: 'zł/szt',
            weight: 500,
            superInfo: 'Przeterminowany',
            suplementsFacts: 'soda oczyszczona, masło, cukier trzcinowy, szpachla gładzi gipsowej białej CEKOL-F16, jaja, imbir marynowany',
            description: 'Produkt wykonany jest z prostokątnej stalowej blachy, wzdłuż której po obu stronach powycinane są prostokątne kierownice poodginane na przemian w dół i w górę. W zależności od ilości kierownic znajdujących się w zawirowywaczu i kąta ich zagięcia zależeć będzie stopień wykorzystania ciepła, które wraz ze spalinami uchodzić będzie z kotła do komina.',
            backgroundColor: '#926AA6',
            nutritionalValue: {
                grammage: 500,
                energy: {
                    kJ: 500,
                    kcal: 500,
                },
                fat: 500,
                includingSaturatedSattyAcids: 500,
                carbohydrates: 500,
                includingSugars: 500,
                protein: 500,
                salt: 500
            },  
        },
    ]
}

const rootReducer = (state = initialState) => state

export default rootReducer