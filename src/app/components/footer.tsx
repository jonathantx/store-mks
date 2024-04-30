import styled from "styled-components"

const FooterStyled = styled.footer`
    width: 100%;
    height: 34px;
    background-color: #EEEEEE;
    position: absolute; 
    bottom: 0;
    left: 0;
    padding: 20px 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 100;
    margin-top: 50px;

    p {
        font-size: 12px;
        font-weight: 400;
        line-height: 14.63px;
        text-align: left;

    }
`

export function Footer() {
    return (
        <FooterStyled>
            <p>MKS sistemas © Todos os direitos reservados</p>
        </FooterStyled>
    )
}