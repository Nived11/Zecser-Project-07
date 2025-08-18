import LoginForm from "./LoginForm"
import SubAdminLoginHead from "./SubAdminLoginHead"

export type AdminProps = {
    admin: boolean
}

export const SubAdminLoginPage = ({ admin }: AdminProps) => {
    return (
        <>
            <SubAdminLoginHead />
            <LoginForm admin={admin} />
        </>
    )
}

export default SubAdminLoginPage