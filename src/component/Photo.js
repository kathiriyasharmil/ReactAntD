import React from 'react'
import { Button, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { Input, Col, Label, FormGroup } from 'reactstrap';

export default function Photo({ photo }) {
    return (<>
        <FormGroup row>
            <Col sm={2}>
                <Label>Upload Photo:</Label>
            </Col>
            <Col md={3}>
                <Upload>
                    <Button>
                        <UploadOutlined type="file" accept='image/*' alt=" " name="photo" onChange={photo} />Click to Upload
                    </Button>
                </Upload>
            </Col>
        </FormGroup>
    </>)
}
