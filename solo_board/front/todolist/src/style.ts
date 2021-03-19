import styled, { createGlobalStyle }from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    body{
        margin: 0;
        padding: 0;
        background: #FFACB7;
        
    }

`
export const Title = styled.div`
    font-size: 50px;
    font-family: 'Anton', sans-serif;
    width:100%;
    height: 200px;
    display:flex;
    justify-content:center;
    align-items:center;
`
export const MainBox = styled.div`
    width:500px;
    margin: 0 auto;
`
export const InputBox = styled.div`
    width:100%;
    display:flex;
    justify-content:center;
    height:30px;
`
export const Input = styled.input`
    width: 80%;

    height: 100%;

`
export const Btn = styled.button`
    width:15%;
    height:35px;
    
`

export const FlexToDo = styled.div`
    /* width:100%; */
    display:flex;
`