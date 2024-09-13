import styled from "styled-components";

export const HeaderMenu=styled.header`
    .header {
        padding: 20px;
        text-align: center;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); 
    }

    .header img {
        height: 60px;
    }
`

export const DescriptionMenu=styled.main`
    .description {
        width: 85%;
        margin: auto;
        text-align: center;
        margin-top: 20px;
    }

    span {
        color: #007bff;
    }

    .text {
        font-size: 20px;
        margin-top: 20px;
    }

    .features ul {
        list-style: none;
        display: flex;
        justify-content: space-around;
        margin: 50px;
    }

    .feature {
        width: 22%;
        padding: 60px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }

    .feature img {
        height: 80px;
    }

    h3 {
        color: #007bff;
        margin-bottom: 10px;
    }

    .feature p {
        font-size: 16px;
    }
`

export const SectionMenu=styled.main`
    .content {
        width: 85%;
        margin: auto;
        text-align: center;
    }

    h2{
        margin-bottom: 20px;
    }

    .agendamento p {
        margin-bottom: 20px;
    }

    .diagnostico,
    .orcamentos,
    .oficinas,
    .agendamento {
        width: 85%;
        padding: 50px;
        margin: 30px auto;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }

    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 15px;
        
    }

    span {
        color: #007bff;
    }

    input,
    select {
        width: 65%;
        padding: 10px;
        margin-bottom: 10px;
        border-radius: 5px;
        border: 1px solid #ccc;
        box-sizing: border-box;
    }

    button {
        padding: 10px 20px;
        background-color: #007bff;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
    }
`