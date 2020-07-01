import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as articlesActions from '../../actions/articlesActions';
import * as basketActions from '../../actions/basketActions';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

class Basket extends Component {


    handleUnSelectArticle = (itemId) => {

        const { selectedItems } = this.props.basketRed;
        const updatedContexts = selectedItems.filter((elem) => elem.id !== itemId);

        this.props.basketActions.setBasket(updatedContexts);

    };


    render() {
        const { selectedItems } = this.props.basketRed;
        
        let basketDisplay = (
        <List style={{}}>
            {selectedItems.map((tile) => (
                <ListItem alignItems='flex-start' key={tile.id}>
                    <ListItemAvatar>
                        <Avatar alt={tile.title} src={tile.thumbnailUrl} />
                    </ListItemAvatar>
                    <ListItemText
                        primary={tile.title}
                        secondary={
                            <>
                                <Typography
                                    component='span'
                                    variant='body2'
                                    className='{classes.inline}'
                                    color='textPrimary'>
                                    {`Album ${tile.albumId}`}
                                </Typography>
                                {` — ref # ${tile.id}`}
                            </>
                        }
                    />
                    <ListItemSecondaryAction>
                        <IconButton edge='end' aria-label='delete' onClick={() => this.handleUnSelectArticle(tile.id)}>
                            <DeleteIcon />
                        </IconButton>
                    </ListItemSecondaryAction>
                </ListItem>
            ))}
        </List>)

        if (selectedItems.length === 0) {
            basketDisplay = 
            <div> 
                😭
            <br></br>
                Your Basket is empty
            </div>
        }


        return (
            <div>
               {basketDisplay}
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    counterRed: state.counterReducer,
    articlesRed: state.articlesReducer,
    basketRed: state.basketReducer
});

const mapDispatchToProps = (dispatch) => ({
    articlesActions: bindActionCreators(articlesActions, dispatch),
    basketActions: bindActionCreators(basketActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Basket);
