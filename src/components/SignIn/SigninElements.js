import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  min-height: 692px;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 0;
  overflow: hidden;
  background: linear-gradient(108deg, rgba(1, 147, 86, 1) 0%,
  rgba(10,201,122,1) 100%);

`

export const FormWrap = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 400) {
    height: 80%;
  }
`

export const Icon = styled(Link)`
  margin-left: 32px;
  margin-top: 32px;
  text-decoration: none;
  color: #FFF;
  font-weight: 700;
  font-size: 32px;
  margin-bottom: 80px;

  @media screen and (max-width: 480px) {
    margin-left: 16px;
    margin-top: 8px;
  }

`

export const FormContent = styled.div`
  height: 100%;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 480px) {
    padding: 10px;
  }

`


export const Form = styled.form`
  background: #010101;
  max-width: 400px;
  height: auto;
  width: 100%;
  z-index: 1;
  display: grid;
  margin: 0 auto;
  padding: 80px 32px;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);

  @media screen and (max-width: 400px) {
    padding: 32px 32px;
  }

`


export const FormH1 = styled.h1`
  margin-bottom: 40px;
  color:#FFF;
  font-size: 20px;
  font-weight: 400;
  text-align: center;
`


export const FormLabel = styled.label`
  margin-bottom: 8px;
  font-size: 14px;
  color: #FFF;

`



export const FormInput = styled.input`
  padding: 16px 16px;
  margin-bottom: 32px;
  border: none;
  border-radius: 4px;

`



export const FormButton = styled.button`
  background: #01bf71;
  padding: 16px 0;
  border: none;
  border-radius: 4px;
  color: #FFF;
  font-size: 20px;
  cursor: pointer;

`

export const Text = styled.span`
  margin-top: 24px;
  font-size: 14px;
  color: #FFF;
  text-align: center;
  cursor: pointer;


  &:hover {
    text-decoration: underline;
  }
`