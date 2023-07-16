import { Save, Send } from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
import {
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";
const SummaryModal = (props: {
  content: string[];
  saveToDatabase: (input: string) => void;
}) => {
  return (
    <>
      <Typography
        id="modal-modal-title"
        variant="h5"
        fontWeight="bold"
        component="h2"
      >
        Summary
      </Typography>
      <Typography id="modal-modal-description" sx={{ mt: 1 }}>
        <List>
          {props.content.map((res) => {
            return (
              <ListItem>
                <ListItemIcon>
                  <Send sx={{ color: "#003366" }}></Send>
                </ListItemIcon>
                <ListItemText>{res}</ListItemText>
              </ListItem>
            );
          })}
        </List>
      </Typography>
      <Grid container>
        <Grid item xs={8}></Grid>
        <Grid item xs={4} sx={{ textAlign: "right" }}>
          <LoadingButton
            onClick={() =>
              props.saveToDatabase("Your response is saved to database.")
            }
            type="button"
            startIcon={<Save />}
            variant="contained"
            sx={{ backgroundColor: "#003366", color: "white" }}
          >
            SAVE SUMMARY
          </LoadingButton>
        </Grid>
      </Grid>
    </>
  );
};
export default SummaryModal;
