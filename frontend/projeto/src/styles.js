import styled from "styled-components";

export const DropdownWrapper = styled.form`
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
`;

export const StyledSelect = styled.select`
font-size: 10px;
border: none;
border-radius: 10px;
color: #fff;
line-height: 1.2;
text-transform: uppercase;
display: flex;
justify-content: center;
align-items: center;
width: 40%;
height: 40px;

background: -webkit-linear-gradient(to left, rgb(1, 0, 0), rgb(31, 28, 52));
background: -o-linear-gradient(to left, rgb(1, 0, 0), rgb(31, 28, 52));
background: -moz-linear-gradient(to left, rgb(1, 0, 0), rgb(31, 28, 52));
background: linear-gradient(to left, rgb(1, 0, 0), rgb(31, 28, 52));
margin-bottom: 13px;
`;

export const StyledOption = styled.option`
  
 background: rgb(1, 0, 0);
 font-size: 10px;
 
`;

export const StyledLabel = styled.label`
  margin-bottom: 1rem;
`;

export const StyledButton = styled.input`
  max-width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  border: solid 2px blue;
  padding: 0.5rem;
  border-radius: 1rem;
`;