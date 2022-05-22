
//Components
import President from "./President";

//Materia-UI 
import Grid from '@mui/material/Grid';

const Presidents = ( { selectedPresidents } ) => {
    return (
        <div className="presidents">
            <Grid container spacing={3}>
                {selectedPresidents.map(element => {
                    return <President president={element} />
                })}
            </Grid>
        </div>
    )
}

export default Presidents;