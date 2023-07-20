import {Grid,Card, CardActionArea, CardMedia, CardContent, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom";


const Homepage = () => {
    let navigate = useNavigate();
    const NavigateToSummary = ()=>{
        navigate('/summary');   
    }
    const NavigateToNamedEntities = ()=>{
        navigate('/namedentities');   
    }

  return (
    
    < Grid container sx={{margin:"10px"}}>
            <Grid item xs={4}>
                <Card onClick={NavigateToSummary} variant="elevation" 
                sx={{backgroundColor:'white',
                maxWidth:345,
                padding:"5px",
                border:"1px solid darkgray",
                boxShadow:"2px 2px darkgray"}}>
                        <CardActionArea>
                            <CardMedia
                            component="img"
                            height="245"
                            image="/images/summary-2.png"
                            alt="green iguana"
                            />
                            <CardContent sx={{backgroundColor:"#003366",color:"white",borderRadius:"10px",minHeight:'170px'}}>
                            <Typography gutterBottom variant="h5" component="div">
                                Extract Summary
                            </Typography>
                            <Typography variant="body2" color="white">
                            The document summarization API uses natural language processing techniques to locate key sentences in an unstructured text document. These sentences collectively convey the main idea of the document. 
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
            </Grid>
            <Grid item xs={4}>
                <Card onClick={NavigateToSummary} variant="elevation" 
                sx={{backgroundColor:'white',
                maxWidth:345,
                padding:"5px",
                border:"1px solid darkgray",
                boxShadow:"2px 2px darkgray"}}>
                        <CardActionArea>
                            <CardMedia
                            component="img"
                            height="245"
                            image="/images/senti.png"
                            alt="green iguana"
                            />
                            <CardContent sx={{backgroundColor:"#003366",color:"white",borderRadius:"10px",minHeight:'170px'}}>
                            <Typography gutterBottom variant="h5" component="div">
                                Sentiment Analysis
                            </Typography>
                            <Typography variant="body2" color="white">
                            The sentiment analysis feature provides sentiment labels (such as "negative", "neutral" and "positive") based on the highest confidence score found by the service at a sentence and document-level. 
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
            </Grid>
            <Grid item xs={4}>
                <Card onClick={NavigateToNamedEntities} variant="elevation" 
                sx={{backgroundColor:'white',
                maxWidth:345,
                padding:"5px",
                border:"1px solid darkgray",
                boxShadow:"2px 2px darkgray"}}>
                        <CardActionArea>
                            <CardMedia
                            component="img"
                            height="245"
                            image="/images/entity.png"
                            alt="green iguana"
                            />
                            <CardContent sx={{backgroundColor:"#003366",color:"white",borderRadius:"10px",minHeight:'170px'}}>
                            <Typography gutterBottom variant="h5" component="div">
                                Entity Recognition
                            </Typography>
                            <Typography variant="body2" color="white">
                            The NER feature can identify and categorize entities in unstructured text. For example: people, places, organizations, and quantities. 
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
            </Grid>
        
    </Grid>
  )
}

export default Homepage;