import React from 'react'

export default function Card({ val }) {
    return (<>
        <div className="c col-4 rounded float-start">
            {/* <div style={{ height: "25%" }} className="text-center "><img className="rounded-3 border border-3 shadow-lg bg-body  rounded" src={val.photo} /></div> */}
            <div className="lh-lg">Name: &nbsp; {val.name}</div>
            <div className="lh-lg">Age: &nbsp; {val.age}</div>
            <div className="lh-lg">Email: &nbsp; {val.email}</div>
            <div className="lh-lg">Country: &nbsp; {val.country}</div>
            <div className="lh-lg">Gender: &nbsp; {val.gender}</div>
            <div className="lh-lg">Language: &nbsp; {val.language}</div>
        </div>
    </>)
}
