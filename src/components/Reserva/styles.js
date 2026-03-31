import styled from "styled-components";
import fundoEvento from '../../images/fundoEvent.jpg';

export const FormStyled = styled.form`
    text-align: center;
    font-family: "Roboto", sans-serif;
    background-color: #ffe4c3;
    background-image: url(${fundoEvento});
    background-size: cover;
    border: 1px dashed #000;
    border-radius: 10px;

        .formPart {
        padding-top: 20px;
        display: block;
        max-width: 300px;
        gap: 12px;
        justify-self: center;
            input {
                margin-bottom: 12px;
                height: 30px;
                border-radius: 7px;
                border: none;
                padding: 20px;
                width: 234px;
            }
            textarea {
                resize: none;
                width: 100%;
                min-height: 200px;
                height: 100%;
                border: none;
                border-radius: 7px;
                padding: 20px;
                max-width: 234px;
            }

            button {
                margin: 20px;
                padding: 17px;
                background-color: #F2660E;
                color: #ffff;
                font-weight: bold;
                border: none;
                border-radius: 7px;

            }
            .datePart {
                padding: 20px;
            }
        }   
`