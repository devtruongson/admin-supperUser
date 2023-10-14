import { Col, Row } from 'antd';

export default function Home() {
    return (
        <main>
            <Row>
                <Col sm={3}>Chỗ render SIDE BAR</Col>
                <Col sm={21}>CHÔ RENDER FEATURE</Col>
            </Row>
        </main>
    );
}
