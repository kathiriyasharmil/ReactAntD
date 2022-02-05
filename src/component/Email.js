import React from 'react'
import { Input, Col, Label, FormGroup } from 'reactstrap';

export default function Email({ email, change, error, incr }) {
    return (<>
        <FormGroup row>
            <Label sm={1}>Email:</Label>
            <Col sm={4}>
                <Input className="mb-0" bsSize="sm" type="text" name='email' value={email} onChange={change} onKeyUp={() => incr(16.6666666667)} required={true} maxlength="45" placeholder='Enter your Email' required />
            </Col>
            <Col>{error && <span className="text-danger"><i class="bi bi-x-circle-fill"></i>&nbsp;{error}</span>}</Col>
        </FormGroup>
    </>)
}
