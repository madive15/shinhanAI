import { useSelector, useDispatch } from "react-redux";
import { RootState } from "~/shared/lib/redux";
import { userActions } from "~/features/user/user.slice";
import { Button } from "~/shared/ui/button";
import { useGetQuery } from "~/features/user/user.api";

export default function User() {
    const count = useSelector((state: RootState) => state.user.count);
    const dispatch = useDispatch();

    // const { data, error, isLoading } = useGetQuery({ page: 1, pageSize: 10 });

    // if (isLoading) return <p>Loading...</p>;
    // if (error) return <p>Error loading users!</p>;

    const add = () => {
        dispatch(userActions.add(1));
    };
    const sub = () => {
        dispatch(userActions.sub(1));
    };
    return (
        <>
            <div>User</div>
            <div>{count}</div>
            <Button onClick={add}> + </Button>
            <Button onClick={sub}> - </Button>
            {/* <div>{data}</div> */}
        </>
    );
}
