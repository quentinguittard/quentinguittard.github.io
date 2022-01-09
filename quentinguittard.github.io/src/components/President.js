//Materia-UI 
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const President = ( { president }) => {
    return (
        <Grid item xs={12} md={3}  key={president.id}>
            <Card>
                <CardMedia className="img__president"
                image={president.image}
                title={president.name}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {president.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {president.description.substring(0, 200)} ...
                    </Typography>
                </CardContent>
                <CardActions>
                    <a href={president.link} target="_blank">
                        <Button size="small" color="primary">
                        lire plus
                        </Button>
                    </a>
                </CardActions>
            </Card>
        </Grid>
    )
}

export default President;