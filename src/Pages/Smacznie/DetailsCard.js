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
    />
    
    </>
)
const mapStateToProps = (state, ownProps) => {
    console.log(state, ownProps);
  
    return {
        activeCakeProps: state.cakes.find(item => item.id === Number(ownProps.match.params.id))
    };
  };

DetailsCard.propTypes = {
    activeCakeProps: PropTypes.arrayOf().isRequired

}

 
export default withRouter(connect(mapStateToProps)(DetailsCard))
