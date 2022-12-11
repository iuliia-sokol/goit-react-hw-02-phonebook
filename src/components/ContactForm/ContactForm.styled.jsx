import styled from 'styled-components';

export const Form = styled.form`
  width: 30vw;
  min-height: 30vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  padding: 32px;
  border-radius: 12px;
  background-color: hsla(215, 98%, 79%, 0.2);
  border: 2px solid blanchedalmond;
  box-shadow: 10px 12px 12px 0px #cab1b14d;
  font-size: 24px;
  color: #010101;
`;

export const Label = styled.label`
  display: block;
  font-weight: bold;
`;
