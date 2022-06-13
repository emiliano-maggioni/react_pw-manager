import StepperBaseStyled from "./StepperBaseStyled";
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';


const StepperBase = ({steps = [], showLabel = false, actualStep}: any) => {

  return (
    <StepperBaseStyled>
      <Box sx={{ width: '100%' }}>
        <Stepper activeStep={-1} alternativeLabel>
          {
            steps.map((label:string,index:any) => (
              <Step key={label} className={`${((index+1) == actualStep) ? "stepActive" : ""}` }>
                <StepLabel>{(showLabel) && label}</StepLabel>
              </Step>
            ))
          }
        </Stepper>
      </Box>
    </StepperBaseStyled>
  );
}

export default StepperBase;
