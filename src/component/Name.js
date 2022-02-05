import React from 'react'
import { Input, Col, Label, FormGroup } from 'reactstrap';


export default function Name({ name, change, error, incr }) {
    return (<>
        <FormGroup row className="in">
            <Label sm={1}>Name:</Label>
            <Col md={6}>
                <Input className="mb-0" bsSize="sm" type="text" name="name" value={name} onChange={change} onKeyUp={(e) => incr(+16.6666666667)} maxlength="35" placeholder='Enter your name' required />
            </Col>
            <Col>{error && <span className="text-danger"><i className="bi bi-x-circle-fill"></i> &nbsp;{error}</span> ||
                <span className="form-text">Must be 3-35 characters long.</span>}   </Col>
        </FormGroup>
    </>
    )
}
