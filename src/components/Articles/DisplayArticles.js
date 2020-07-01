import React from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const DisplayArticles = (props) => {
    const matches = useMediaQuery('(min-width:600px)');
    const { handleSelectArticle, data } = props.params;

    return (
        <GridList spacing={42} cellHeight={350} cols={matches ? 3 : 1}>
            {data.map((tile) => (
                <GridListTile key={tile.id}>
                    <img src={tile.url} alt={tile.title} />
                    <GridListTileBar
                        title={tile.title}
                        subtitle={<span>Ref Color: {tile.id}</span>}
                        actionIcon={
                            <IconButton onClick={() => handleSelectArticle(tile)}>
                                <AddIcon style={{ color: 'white' }} />
                            </IconButton>
                        }
                    />
                </GridListTile>
            ))}
        </GridList>
    );
};
export default DisplayArticles;
