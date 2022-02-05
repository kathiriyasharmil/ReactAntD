import React from 'react'
import { Input, Col, Label, FormGroup } from 'reactstrap';

export default function Country({ country, change, error, incr }) {
    return (<>
        <FormGroup row>
            <Label sm={1}>Country:</Label>
            <Col md={3}>
                <Input bsSize="sm" className="mb-0" type="select" value={country} name='country' onChange={change} onKeyUp={() => incr(16.6666666667)}>
                    <option disabled selected value value="">Select Country</option>
                    <option value="INDIA" name="country">INDIA</option>
                    <option value="UAE" name="country">UAE</option>
                    <option value="S KOREA" name="S KOREA">S KOREA</option>
                </Input>
            </Col>
            <Col>{error && <span className="text-danger"><i class="bi bi-x-circle-fill"></i>&nbsp;{error}</span>}</Col>

        </FormGroup>
    </>)
}
