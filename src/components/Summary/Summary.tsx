import {
    Box,
    Modal,
    FormControl,
    Grid,
    InputLabel,
    OutlinedInput,
    Typography,
    Snackbar,
    Alert,
  } from "@mui/material";
  import axios from "axios";
  import { useState } from "react";
  import { Save } from "@mui/icons-material";
  import { LoadingButton } from "@mui/lab";
  import SummaryModal from "./SummaryModal";
  
  const baseURL: string = "https://localhost:7128/";
  
  export interface SummaryRequest {
    inputText: string;
  }
  
  const Summary = () => {
    const [summaryTitle, setSummaryTitle] = useState<string>("");
    const [summaryInput, setSummaryInput] = useState<string>("");
    const [summaryResponse, setSummaryResponse] = useState<string[]>([]);
    const [errorState, setErrorState] = useState<string>("");
    const [successState, setSuccessState] = useState<string>("");
    const [open, setOpen] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);
    const [openAlert, setOpenAlert] = useState<boolean>(false);
    const [openAlertMessage, setOpenAlertMesage] = useState<string>("");
  
    const style = {
      position: "absolute" as "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: 800,
      bgcolor: "background.paper",
      border: "1px solid #000",
      boxShadow: 24,
      p: 4,
    };
  
    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    const saveToDatabase = (input: string) => {
      setOpenAlertMesage(input);
      setOpenAlert(true);
    };
    const handleInputChange = (e: string) => {
      setSummaryInput(e);
    };
  
    const handleTitleChange = (e: string) => {
      setSummaryTitle(e);
    };
  
    const submitRequest = () => {
      console.log(summaryTitle);
      if (summaryTitle.length > 0 && summaryInput.length > 0) {
        const inputRequest: SummaryRequest = {
          inputText: summaryInput,
        };
        setLoading(true);
        axios
          .post(baseURL + "api/TextAnalytics/GetSummary", inputRequest)
          .then((response) => {
            setSummaryResponse(response.data);
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
                Extract Summary
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
          <FormControl required sx={{ margin: "10px", width: "96%" }}>
            <InputLabel
              htmlFor="outlined-adornment-amount"
              sx={{ fontWeight: "bold", fontSize: "large" }}
            >
              Document Title
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-amount"
              label="Document Title"
              value={summaryTitle}
              onChange={(e: any) => handleTitleChange(e.target.value)}
            />
          </FormControl>
  
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
              value={summaryInput}
              onChange={(e: any) => handleInputChange(e.target.value)}
              rows={8}
            />
          </FormControl>
          <Grid container sx={{ marginTop: "10px", paddingRight: "20px" }}>
            <Grid item xs={10}>
              {successState.length > 0 ? (
                <div onClick={handleOpen} style={{ cursor: "pointer" }}>
                  <Typography
                    gutterBottom
                    variant="h6"
                    sx={{ fontWeight: "bold", color: "green" }}
                  >
                    {successState}
                  </Typography>
                </div>
              ) : (
                <Typography
                  gutterBottom
                  variant="h6"
                  sx={{ fontWeight: "bold", color: "red" }}
                >
                  {errorState}
                </Typography>
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
                EXTRACT SUMMARY
              </LoadingButton>
            </Grid>
          </Grid>
        </div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <SummaryModal
              content={summaryResponse}
              saveToDatabase={saveToDatabase}
            ></SummaryModal>
          </Box>
        </Modal>
        <Snackbar
          open={openAlert}
          autoHideDuration={6000}
          onClose={() => setOpenAlert(false)}
        >
          <Alert
            onClose={() => setOpenAlert(false)}
            severity="success"
            sx={{ width: "100%" }}
          >
            {openAlertMessage}
          </Alert>
        </Snackbar>
      </>
    );
  };
  export default Summary;
  