import React from 'react';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router';
import {connect} from 'react-redux';
import DetailsCardTemplate from './DetailsCardTemplate';


const DetailsCard = ( {activeCakeProps} ) => (
    <>
    <DetailsCardTemplate 
        name={activeCakeProps.name}
        photo={activeCakeProps.photo}
        prize={activeCakeProps.prize}
        value={activeCakeProps.value}
        superInfo={activeCakeProps.superInfo}
        suplementsFacts={activeCakeProps.suplementsFacts}
        description={activeCakeProps.description}
        backgroundColor={activeCakeProps.backgroundColor}
        nutritionalValue={activeCakeProps.nutritionalValue}
        weight={activeCakeProps.weight}
    />
    
    </>
)
const mapStateToProps = (state, ownProps) => ({
         activeCakeProps: state.cakes.find(item => item.id === Number(ownProps.match.params.id)) 
})

DetailsCard.propTypes = {
    activeCakeProps: PropTypes.shape({
        name: PropTypes.string,
        photo: PropTypes.string,
        prize: PropTypes.number,
        value: PropTypes.string,
        weight: PropTypes.number,
        superInfo: PropTypes.string,
        suplementsFacts: PropTypes.string,
        description: PropTypes.string,
        backgroundColor: PropTypes.string,
        nutritionalValue: PropTypes.shape({
            grammage: PropTypes.number,
            energy: PropTypes.shape({
                kJ: PropTypes.number,
                kcal: PropTypes.number
            }),
            fat: PropTypes.number,
            includingSaturatedSattyAcids: PropTypes.number,
            carbohydrates: PropTypes.number,
            includingSugar: PropTypes.number,
            protein: PropTypes.number,
            salt: PropTypes.number
        })
    })
}

DetailsCard.defaultProps = {
    activeCakeProps: PropTypes.shape({
    photo: 'https://images.pexels.com/photos/5898232/pexels-photo-5898232.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    prize: 99999,
    value: 'PropTypes.string',
    weight: 99999,
    suplementsFacts: 'Składniki',
    description: 'Opis',
    backgroundColor: '#fff',
    nutritionalValue: PropTypes.shape({
        grammage: 99999,
        energy: PropTypes.shape({
            kJ: 99999,
            kcal: 99999
        }),
        fat: 99999,
        includingSaturatedSattyAcids: 99999,
        carbohydrates: 99999,
        includingSugars: 99999,
        protein: 99999,
        salt: 99999
    })
    })
}

export default withRouter(connect(mapStateToProps)(DetailsCard))
