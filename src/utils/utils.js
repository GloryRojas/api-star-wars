import styled from 'styled-components';

export const H1Sw =  styled.h1`
    font-size: ${props => props.size || "110px"};
    font-weight: ${props => props.weigth || "100"};
    text-align: ${props => props.align || "center"};
    margin: 0;
    margin-left:  ${props => props.left || "0"};

    @media only screen and (max-width: 768px) {
        font-size: 50px;
      }
`;

export const InputSw = styled.input`
    width: 34%;
    margin: 10px 0 10px 32%;
    padding: 10px;
    border: 1px solid blue;
    border-radius: 5px;
    outline: 0px;
    &:hover {
        background: #555;
    }
    &: focus {
        border: 1px solid red;
        background: none;
    }
`;

export const PSw = styled.p`
    text-align: ${props => props.align || "center"};
    font-size: ${props => props.size || "18px"};
    margin: 10px;
    font-weight: 600;
    background: none;
    text-transform: uppercase;
`;

export const SectionSw = styled.section`
    width: 90%;
    margin: 20px 5%;
`;

export const ArticleSw = styled.article`
    background: -webkit-linear-gradient(left, #02d9ff 0%, #007fd9 100%);
    width: 28%;
    display: inline-block;
    margin: 10px 2.5%;
    padding: 20px 0;
    border-radius: 10px;

    @media only screen and (max-width: 768px) {
        width: 90%;
        margin-left: 5%;
      }
`;

export const ButtonSw = styled.button`
    background: none;
    border: none;
    margin: 20px 30%;
    cursor: pointer;
    font-size: 10px;
`;

export const ArticleSwPer = styled.article`
    width: 40%;
    margin: 40px 10%;
    border: 1px solid red;
    padding: 40px;

    @media only screen and (max-width: 768px) {
        width: 90%;
        margin-left: 2.5%;
        padding: 10px;
      }
`;