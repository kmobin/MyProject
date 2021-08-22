const VendorRow = ({ vendor }) => {
    return (
        <tr>
            <td>{vendor.id}</td>
            <td>{vendor.vname}</td>
            <td>{vendor.vname}</td>
            <td>{vendor.vadd1}</td>
            <td>{vendor.vadd2}</td>
            <td>{vendor.vcity}</td>
            <td>{vendor.vstate}</td>
            <td>{vendor.vcountry}</td>
            <td>{vendor.vmobile}</td>
            <td>{vendor.email}</td>
        </tr>

    )

}
export default VendorRow