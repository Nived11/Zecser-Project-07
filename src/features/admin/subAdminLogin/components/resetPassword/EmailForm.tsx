import { Button } from "../../../../../components/ui/button"
import { Input } from "../../../../../components/ui/input"

const EmailForm = ({ handleEmailSubmit, handleChange, loading, email }:any) => {
    return (
        <form
            onSubmit={handleEmailSubmit}
            autoComplete="off"
        >
            <div className="my-2">
                <Input
                    id="email"
                    type="email"
                    value={email || ""}
                    onChange={handleChange}
                    placeholder="Enter email"
                    autoFocus
                    required
                />
            </div>
            <Button
                disabled={loading}
                type="submit"
                className="text-white text-lg py-6 px-6"
            >
                {loading ? "Submitting..." : "Submit"}
            </Button>
        </form>
    )
}

export default EmailForm