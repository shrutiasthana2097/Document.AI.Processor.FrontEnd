import { Save } from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
import { Chip, FormControl, Grid, InputLabel, OutlinedInput, Stack, Typography } from "@mui/material";
import axios from "axios";
import { useState } from "react";

export interface SummaryRequest {
  inputText: string;
}

export interface SummaryResponse {
    text:string,
    category:object,
    subCategory: string,
    confidenceScore: number,
    offset: number,
    length: number;
}

const NamedEntities = () => {

  const[documentText, setDocumentText] = useState<string>("");
  const [summaryResponse, setSummaryResponse] = useState<SummaryResponse[]>([]);
  const [errorState, setErrorState] = useState<string>("");
  const [successState, setSuccessState] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  

  const baseURL: string = "https://localhost:7128/";

  const handleInputChange = (e: string) => {
    setDocumentText(e);
  };

  const SetResponse = (param:SummaryResponse[]) => {
      setSummaryResponse(param);
      
  }
  const submitRequest = () => {

    if (documentText.length > 0) {
      const inputRequest: SummaryRequest = {
        inputText: documentText,
      };
      setLoading(true);
      axios
        .post(baseURL + "api/TextAnalytics/GetNamedEntities", inputRequest)
        .then((response) => {
          SetResponse(response.data);
          setSuccessState("Your result is ready! Click to open.");
          setErrorState("");
          setLoading(false);
         
        })
        .catch((response) => {
          console.log(response);
          setErrorState("An error has been occured! Please try again later.");
          setSuccessState("");
          setLoading(false);
        });
    }
  };

 return (
 <>
    <div
          style={{
            backgroundColor: "#cce6ff",
            height: "60px",
            width: "100%",
            marginTop: "20px",
          }}
        >
        <Grid container>
            <Grid item xs={1}>
              <img
                src="/images/summary-2.png"
                alt="summary"
                height={60}
                width={70}
              />
            </Grid>
            <Grid item xs={4} sx={{ textAlign: "left", marginTop: "15px" }}>
              <Typography gutterBottom variant="h6" sx={{ fontWeight: "bold" }}>
                Extract Named Entities
              </Typography>
            </Grid>
            <Grid item xs={7}></Grid>
          </Grid>
    </div>
    <div
     style={{
       backgroundColor: "white",
       width: "100%",
       marginTop: "20px",
       border: "1px solid lightgray",
       boxShadow: "2px 2px lightgray",
       paddingBottom: "20px",
       paddingTop: "20px",
     }}
   >
      <Typography align="left" sx={{marginLeft:"35px", fontWeight: "bold", fontSize: "large" }} >Input your document text</Typography>

     <FormControl required sx={{ margin: "10px", width: "96%" }}>
       <InputLabel
         htmlFor="outlined-adornment-amount"
         sx={{ fontWeight: "bold", fontSize: "large" }}
       >
         Document Content
       </InputLabel>
       <OutlinedInput
         id="outlined-adornment-amount"
         label="Document Content"
         multiline
         value={documentText}
         onChange={(e: any) => handleInputChange(e.target.value)}
         rows={8}
       />
     </FormControl>
    
     <Grid container sx={{ marginTop: "10px", paddingRight: "20px" }}>
     <Grid item xs={10}>
    
            {successState.length > 0 ? (
            <div>
               <Stack direction="row" spacing={1} style={{ justifyContent: "center" }}>
              {summaryResponse.map((res) => {

                  return (
                    <Chip
                    label={res.text}
                    
                     sx={{fontWeight:"bold", border:"1px solid #cce6ff", backgroundColor:"#cce6ff"}}/>
                   
                  );}
              )}
               </Stack>
            </div>
            ) : (
              
                 <></>
              )}
          
            </Grid>
            <Grid item xs={2}>
              <LoadingButton
                loading={loading}
                onClick={submitRequest}
                type="button"
                startIcon={<Save />}
                variant="contained"
                sx={{ backgroundColor: "#003366", color: "white" }}
              >
                EXTRACT ENTITIES
              </LoadingButton>
            </Grid>
      </Grid>
      </div>
     </>)
 
}

export default NamedEntities;