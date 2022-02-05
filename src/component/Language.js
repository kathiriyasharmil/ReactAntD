import React from 'react'
import { Button, Input, Form, Col, Label, FormGroup, Row, Table, } from 'reactstrap';

export default function Language({ language, change, error, incr }) {
    return (<>
        <FormGroup row mb={0}>
            <Col sm={1}>
                <Label>Language:</Label>
            </Col>
            <Col md={4} style={{ textAlign: "left" }}>
                &nbsp;&nbsp; <Label>Gujarati:</Label>&nbsp;<Input type="checkbox" name='language' checked={language.includes("Gujarati ")} value="Gujarati " onChange={change} onKeyUp={() => incr(16.6666666667)} />&nbsp;&nbsp;
                <Label>Hindi:</Label>&nbsp;<Input type="checkbox" name='language' checked={language.includes("Hindi ")} value="Hindi " onChange={change} />&nbsp;&nbsp;
                <Label>English:</Label>&nbsp;<Input type="checkbox" name='language' checked={language.includes("English ")} value="English " onChange={change} />
            </Col>
            <Col>{error && <span className="text-danger"><i class="bi bi-x-circle-fill"></i>&nbsp;{error}</span>}</Col>
        </FormGroup>
    </>)
}
