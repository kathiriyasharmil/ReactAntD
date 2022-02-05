import React from 'react'
import { Input, Col, Label, FormGroup, } from 'reactstrap';

export default function Age({ age, change, error, incr }) {
    return (<>
        <FormGroup row className="in">
            <Label sm={1}>Age:</Label>
            <Col md={1}>
                <Input className="mb-0" bsSize="sm" type="text" name='age' value={age} onChange={change} onKeyUp={() => incr(16.6666666667)} required={true} placeholder='age' maxlength="2" required />
            </Col>
            <Col>{error && <span className="text-danger"><i class="bi bi-x-circle-fill"></i>&nbsp;{error}</span>} </Col>
        </FormGroup>
    </>)
}
