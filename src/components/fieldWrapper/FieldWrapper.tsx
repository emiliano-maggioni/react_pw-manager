import { useEffect, useState } from 'react';
import { fieldWrapperProps } from 'utility/Types';
import FieldWrapperStyled from './FieldWrapperStyled';

const FieldWrapper = ({ title, required = false, children, additionalClass }: fieldWrapperProps) => {

  return (
    <FieldWrapperStyled> 
      <div><strong>{title}</strong> {(required) && <span>*</span>} </div>
      {children}
    </FieldWrapperStyled>
  );
}

export default FieldWrapper;
