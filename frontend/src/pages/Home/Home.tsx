import { Products } from "../../features/Products/Products";
import { Container } from './Home.styles';

export const Home = () => {
    return(
        <Container>
            <h2>Shop products</h2>
            <Products />
        </Container>
    );
}