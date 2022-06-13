import TitleBar from 'components/titleBar/TitleBar';
import NavigationBar from 'components/navigationBar/NavigationBar';
import { useEffect, useState } from 'react';
import { CreatePasswordViewStyled, RowFieldStyled, RowMultipleFieldStyled } from './CreatePasswordViewStyled';
import { useContext } from 'react';
import { GenericContext } from 'contexts/GenericContext';
import { useNavigate } from "react-router-dom";
import FieldWrapper from 'components/fieldWrapper/FieldWrapper';
import { useForm } from "react-hook-form";
import { FormHelperText, IconButton, InputAdornment, OutlinedInput, TextField } from '@mui/material';
import { VisibilityOff, Visibility } from '@mui/icons-material';

const CreatePasswordView = () => {
  let navigate = useNavigate();
  const context = useContext(GenericContext);

  useEffect(()=>{
    //REDIRECT TO HOMEPAGE IF CONTEXT actualStep IS NOT EQUAL TO THIS STEP
    if(context.actualStep != 2)
    viewPrevPage();
  },[]);

  const viewPrevPage = () => {
    context.changeStepState(1);
    navigate("/");
  }
  const viewNextPage = () => {
    context.changeStepState(3);
    navigate("/feedback");
  }

  const { register, handleSubmit, formState: { errors }, getValues, watch } = useForm({
    mode: "onSubmit"
  });

  const onSubmit = (data: any) => {
    if(data) {     
      context.storeUserPwData(data);   
      viewNextPage();
    }
  }

  const [showPassword, setShowPassword] = useState<boolean>(false);
  const handleClickShowPassword = () => { setShowPassword(!showPassword); };
  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  let pwerror = `La contraseña debe contener: mínimo 8 caracteres (y máximo 24) y al menos 1 número y una mayúscula`;


  return (
    <CreatePasswordViewStyled>
      <TitleBar title="Crea tu Password Manager" />
      <p>En primer lugar debes crear una contraseña diferente para sus pertenencias electronicas. No podras ercuperar tu contraseña asi que recuérdela bien.</p>
      <form onSubmit={handleSubmit(onSubmit)}>

        <RowMultipleFieldStyled>

            <FieldWrapper title="Crea tu contraseña maestra" required={true}  >
              <OutlinedInput
                {...register("password", {
                  required: "Escribir password",
                  pattern: { value: /^(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]{8,24}$/, message: pwerror },
                  validate: value => {
                    if (value === getValues()["confirmpassword"]) {
                      return true;
                    } else {
                      return "Las contraseñas escritas no coinciden";
                    }
                  }
                })}
                name="password"
                type={showPassword ? 'text' : 'password'}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
              <FormHelperText>{!!errors.password ? errors.password.message : null}</FormHelperText>
            </FieldWrapper>

            <FieldWrapper title="Repite tu contraseña maestra" required={true}  >
              <OutlinedInput
                {...register("confirmpassword", {
                  required: "Escribir confirma password",
                  pattern: { value: /^(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]{8,24}$/, message: pwerror },
                  validate: value => {
                    if (value === getValues()["password"]) {
                      return true;
                    } else {
                      return "Las contraseñas escritas no coinciden";
                    }
                  }

                })}
                name="confirmpassword"
                type={showPassword ? 'text' : 'password'}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
              <FormHelperText>{!!errors.confirmpassword ? errors.confirmpassword.message : null}</FormHelperText>
            </FieldWrapper>

        </RowMultipleFieldStyled>

        <p>También puedes crear una pista que te ayude a recordar tu contraseña maestra</p>
        <RowFieldStyled>
            <FieldWrapper title="Crea tu pista para recordar tu contraseña (optional)" >
              <TextField
                id="pista"
                helperText={!!errors.pista ? "La pista puede contener maximo 255 caracteres" : null}
                {...register("pista", { required: false, maxLength: 255 })}
                hiddenLabel
                size="small"
              />
            </FieldWrapper>
        </RowFieldStyled>
        <NavigationBar actualStep={context.actualStep} btPrevAction={viewPrevPage} typeBtNext="submit" />
      </form>

    </CreatePasswordViewStyled>
  );
}

export default CreatePasswordView;