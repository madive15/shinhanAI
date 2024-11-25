import { useNavigate } from "react-router-dom";
import { pathKeys } from "~/shared/router";
import { Button } from "~/shared/ui/button";

export default function Navigator() {
    const navigate = useNavigate();
    const goUser = () => {
        navigate(pathKeys.user(), {replace: true})
    }
    return (
        <div>
            <Button onClick={goUser}>!@!@user!</Button>
        </div>
    )
}