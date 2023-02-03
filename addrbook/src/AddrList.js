import userEvent from "@testing-library/user-event";


export default function AddrList({ book, removeUser, onToggleUser }) {
    return (
        <table>
            <tbody>
                {book.map((record) => (
                    <tr key={record.id.toString()}
                        style={{ color: record.active ? 'green' : 'black' }} >

                        <td
                            style={{ cursor: 'pointer' }} 
                            onClick={() => onToggleUser(record.id)} >
                            {record.name}
                        </td>
                        <td> {record.email} </td>
                        {/* tr에 onClick을 넣으니 내부의 buttton이 작동안함. */}
                        <td> <button onClick={() => removeUser(record.id)}>삭제</button> </td>
                    </tr>
                )
                )}
            </tbody>
        </table>
    )
}

