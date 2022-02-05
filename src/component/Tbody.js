import { Popconfirm, message, Empty } from 'antd';
export default function Tbody({ dataStore, Edit, confirm, cancel }) {

    function cancel(name) {
        if (cancel) {
            message.error(`${name} User has been not deleted`)
        }
    }

    return (<>
        {dataStore.map((data, i) =>
            <tbody> <tr style={{ textAlign: "center" }} className="bs-example" key={i}>
                <img src={data.photo} style={{ width: "60px", height: "60px", boxshadow: "5px 10px 18px #888888" }} onClick={() => Edit(data.id)} className="rounded-circle" alt=" " />
                <td onClick={() => Edit(data.id)}>{data.id}</td>
                <td onClick={() => Edit(data.id)}>{data.name}</td>
                <td onClick={() => Edit(data.id)}>{data.age}</td>
                <td onClick={() => Edit(data.id)}>{data.email}</td>
                <td onClick={() => Edit(data.id)}>{data.country}</td>
                <td onClick={() => Edit(data.id)}>{data.gender}</td>
                <td onClick={() => Edit(data.id)}>{data.language}</td>
                <td>&nbsp;<a href='#'><span value={{ color: 'blue', size: '50px' }} data-original-title='Edit' className="edit fs-4 mb-3 bi bi-pencil-square" onClick={() => Edit(data.id)} ></span></a>&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
                    <Popconfirm title="Are you sure to delete this ?" onConfirm={() => {
                        confirm(data.id)
                        if (confirm) {
                            message.success(`${data.name} User has been deleted`)
                        }
                    }} onCancel={() => cancel(data.name)} okText="Yes" cancelText="No">
                        <a href='#'><span value={{ color: "red" }} className="remove fs-4 mb-3 bi bi-trash text-danger" data-toggle='tooltip' data-original-title='Delet'></span></a>
                    </Popconfirm>
                </td>

            </tr>
            </tbody>
        )}
    </>)
}

//  <a href='#'><span value={{ color: "red" }} className="remove fs-4 mb-3 bi bi-trash text-danger" data-toggle='tooltip' data-original-title='Delet' onClick={() => Delete(data.id)}></span></a>


// ReactDOM.render(
//     <Popconfirm
//         title="Are you sure to delete this task?"
//         onConfirm={confirm}
//         onCancel={cancel}
//         okText="Yes"
//         cancelText="No"
//     >
//         <a href="#">Delete</a>
//     </Popconfirm>,
//     mountNode,
// );