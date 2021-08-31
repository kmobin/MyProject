const CustomerRow = ({ customer }) => {
    return (
        <tr>

            <td>{customer.id}</td>
            <td>{customer.fname}</td>
            <td>{customer.mname}</td>
            <td>{customer.lname}</td>
            <td>{customer.add1}</td>
            <td>{customer.add2}</td>
            <td>{customer.city}</td>
            <td>{customer.state}</td>
            <td>{customer.country}</td>
            <td>{customer.mobile}</td>
            <td>{customer.email}</td>
            <td>{customer.dob}</td>
            <td> </td>
        </tr>

    )

}
export default CustomerRow