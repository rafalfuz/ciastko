const initialState = {
    cakes: [
        {id:1,
         name: 'Pączek z chrzanem',
         photo: '',
         prize: '27.99',
         value: 'zł/szt',
         superInfo: 'Nowość',
         suplementsFacts: 'Lorem/sadsds/dasdasdas/sdasdasd/asdasdasd/asdasd',
         description: 'No i tutaj opis jakie to nie jest zajebiste',
         backgroundColor: '#37bce4'
        },
        {id:2,
            name: 'Pączek z czosnkiem',
            photo: 'https://okruszek.info.pl/uploads/imgs/normal/3Svp7z5mwGuRIfW58wUxiOyrV88nyPr2R6kWXTOA7exz2WX1Jt.JPG',
            prize: '12.99',
            value: 'zł/kg',
            superInfo: 'Staroć',
            suplementsFacts: 'Lorem/sadsds/dasdasdas/sdasdasd/asdasdasd/asdasd',
            description: 'No i tutaj opis jakie to nie jest zajebiste',
            backgroundColor: '#37bce4'
        },
        {id:3,
            name: 'Sernik z wołowiną i grzybami - sos mieszany',
            photo: '',
            prize: '22.99',
            value: 'zł/szt',
            superInfo: 'Promocjaaaa',
            suplementsFacts: 'Lorem/sadsds/dasdasdas/sdasdasd/asdasdasd/asdasd',
            description: 'No i tutaj opis jakie to nie jest zajebiste',
            backgroundColor: '#37bce4'
        },
    ]
    }

const rootReducer = (state=initialState, action) => {
    console.log(action)
    return state
}

export default rootReducer