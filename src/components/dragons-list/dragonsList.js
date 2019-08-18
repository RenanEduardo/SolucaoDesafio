import React, {useEffect, useState} from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/';
import Spinner from '../spinner/spinner';
import Dragon from '../dragon/dragon'

const DragonsList = props => {

  

    useEffect(() => {
        initDragonList();
    }, []);

    const initDragonList = () => {
        props.onGetDragonsList();
    }


    let list = <Spinner />
    //fazer o sistema de loading;
    if(!props.loading || !props.error) {
       list = props.dragonList.map(dragon => 
           <Dragon id={dragon.id} name={dragon.name} type={dragon.type} creationDate={dragon.createdAt} histories={dragon.histories} />
       )
    }

    return (
        <div>
            {list}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        dragonList : state.dragonList.list,
        loading: state.dragonList.loading,
        error: state.dragonList.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onGetDragonsList: () => dispatch(actions.getDragonsList())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DragonsList);