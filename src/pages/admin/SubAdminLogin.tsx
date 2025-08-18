import { SubAdminLoginPage } from "../../features/admin/subAdminLogin"

const SubAdminLogin = ({admin=false}) => {
    return (
        <>
            <SubAdminLoginPage admin={admin} />
        </>
    )
}

export default SubAdminLogin