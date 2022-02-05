import React from 'react'
import { Input, Col, Label, FormGroup } from 'reactstrap';

export default function Gender({ gender, change, error, incr }) {
    return (<>
        <FormGroup row>
            <Col sm={1}>
                <Label>Gender:</Label>
            </Col>
            <Col md={3} style={{ textAlign: "left" }}>
                <Label>Male:</Label><Input type="radio" name='gender' className="circle" value="Male" checked={gender === "Male"} onChange={change} onKeyUp={() => incr(16.6666666667)} />&nbsp;
                <Label>Female:</Label><Input type="radio" name='gender' className="circle" value="Female" checked={gender === "Female"} onChange={change} onKeyUp={() => incr(16.6666666667)} />
            </Col>
            <Col>{error && <span className="text-danger"><i class="bi bi-x-circle-fill"></i>&nbsp;{error}</span>}</Col>
        </FormGroup>
    </>)
}
