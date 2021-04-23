import styled from 'styled-components'

export const Results = styled.section`
margin: 20px;
margin-top: 10px;
@media  (min-device-width: 1024px) and (max-device-width: 2000px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 4em;
}

@media only screen and (min-device-width: 481px) and (max-device-width: 1024px){
  
        display: grid;
        grid-template-columns: 1fr  1fr;
        column-gap: 1em;
     
    } 
`;

export const Subheading = styled.header`
grid-column-start: span 3;

`