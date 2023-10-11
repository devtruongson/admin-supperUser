import { Col, Row } from 'antd';
import Header from '../../components/Header/Header';

export default function Home() {
    return (
        <main>
            <Header />
            <Row>
                <Col sm={3}>Chỗ render SIDE BAR</Col>
                <Col sm={21}>CHÔ RENDER FEATURE</Col>
            </Row>
        </main>
    );
}
