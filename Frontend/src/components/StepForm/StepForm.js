import React from 'react';
import { Stepper, Step, StepLabel, Button, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import FormPassenger from '../StepperForm/FormPassenger';
import BookingData from '../StepperForm/BookingData.';
import RateChoice from '../StepperForm/RateChoice';
import SeatChoice from '../StepperForm/SeatChoice/SeatChoice';
import ResumeAndPay from '../StepperForm/ResumeAndPay';
import { Container } from '@mui/material';

/* const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  button: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
})); */

function getSteps() {
  return [
    'Información de Pasajeros',
    'Datos de reserva',
    'Elección de tarifa',
    'Elección de asiento',
    'Resumen y Pago',
  ];
}
function getStepContent(step) {
  switch (step) {
    case 0:
      return <FormPassenger />;
    case 1:
      return <BookingData />;
    case 2:
      return <RateChoice />;
    case 3:
      return <SeatChoice />;
    case 4:
      return <ResumeAndPay />;
    default:
      return 'Unknown step';
  }
}

const StepForm = () => {
  // const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const steps = getSteps();

  const isStepOptional = (step) => {
    return step === 2;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error('No puedes ir al paso siguiente sin completar el actual');
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Container>
      <div /* className={classes.root} */>
        <Stepper activeStep={activeStep}>
          {steps.map((label, index) => {
            const stepProps = {};
            const labelProps = {};
            if (isStepOptional(index)) {
              labelProps.optional = (
                <Typography variant='caption'>Optional</Typography>
              );
            }
            if (isStepSkipped(index)) {
              stepProps.completed = false;
            }
            return (
              <Step key={label} {...stepProps}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        <div>
          {activeStep === steps.length ? (
            <div>
              <Typography /* className={classes.instructions} */>
                All steps completed - you&apos;re finished
              </Typography>
              <Button onClick={handleReset} /* className={classes.button} */>
                Volver a comenzar
              </Button>
            </div>
          ) : (
            <div>
              <Typography /* className={classes.instructions} */>
                {getStepContent(activeStep)}
              </Typography>
              <div>
                <Button
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  // className={classes.button}
                >
                  Atrás
                </Button>
                {isStepOptional(activeStep) && (
                  <Button
                    variant='contained'
                    color='primary'
                    onClick={handleSkip}
                    //   className={classes.button}
                  >
                    Saltar
                  </Button>
                )}

                <Button
                  variant='contained'
                  color='primary'
                  onClick={handleNext}
                  // className={classes.button}
                >
                  {activeStep === steps.length - 1 ? 'Finalizar' : 'Siguiente'}
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </Container>
  );
};

export default StepForm;
