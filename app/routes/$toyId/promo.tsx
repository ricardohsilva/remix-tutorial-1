import styled from "@emotion/styled";
import { LoaderFunction } from "remix";

const StyledPromo = styled.div`
    min-height: 12rem;
    margin-top: 1rem;
    width: 100%;
    position:relative;
`;

const StyledPromoImage = styled.div`
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    width: inherit;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-image: url(https://images.unsplash.com/photo-1551323879-b2f626997e22?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)
`;

const StyledPromoText = styled.div`
    position: absolute;
    bottom: -40px;
    color: #000;
    background-color: white;
    height: 80px;
    width: 80px;
    border-radius: 50%;
    display: flex;
    align-self:center;
    align-items: center;
    justify-content: center;
    box-shadow: 0 0.313em 0.938em rgb(0 0 0 / 50%);
`;

export let loader: LoaderFunction = async ({ params }) => {
    const number = Math.random();
    if (number < 0.5) {
        throw new Error();
    }
    return {};
};

export default function Promo() {
    return (
        <StyledPromo>
            <StyledPromoImage>
                <StyledPromoText>
                    <p>15% Off!!</p>
                </StyledPromoText>
            </StyledPromoImage>
        </StyledPromo>
    );
}

export function ErrorBoundary() {
    return (
        <StyledPromo>
            <div style={{backgroundColor:'red'}}>
                <p>Something Went Wrong :(</p>
            </div>
        </StyledPromo>
    );
}