import { Button, Col, Form, Input, Row, Space, Typography, Upload } from "antd";
import FormEvidencias from '../../components/forms/FormEvidencias';

const {Title} = Typography;

export const EvidenceScreen = () => {

    const form = Form.useForm();

    const onFinish = (values) => {};
    const onReset = () => {
        form.resetFields();
    };

    return (
        <div>
            <Title level={3}> Evidencias</Title>
            <Row>
                <Col span={9}>
                    <FormEvidencias />
                </Col>
                <Col span={15}>
                    <h3> Data Table</h3>
                </Col>
            </Row>
        </div>
    );
}