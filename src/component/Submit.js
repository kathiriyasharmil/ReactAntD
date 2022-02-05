import { RadiusUprightOutlined } from '@ant-design/icons';

export default function Submit({ setSubmit }) {
    return (<>
        <div style={{ textAlign: "center" }}>
            <button className="btn rounded" type="primary" onClick={setSubmit}>SUBMIT</button><br /><br />
        </div>
    </>)
}
