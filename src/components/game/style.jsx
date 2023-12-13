import styled from "styled-components";



export const GameContainer =styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

`
export const GameForm = styled.form`
     display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 10px;
`

export const LetterContaainer = styled.div`
    margin: 1.5em;
  padding: 1.5em;
  border: 20px solid #ecfa00;
  display: flex;
`
export const Letter = styled.span`
    font-size: 70px;
    line-height: 1.5;
    border: 3px solid #000;
    height: 100px;
    width: 100px;
    text-transform: uppercase;
    background-color: #fff;
    color: #000;
    font-weight: bold;
    text-align: center;


`