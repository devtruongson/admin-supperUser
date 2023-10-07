import { RouterDTO } from "../utils/routers.dto";

export default function RouterComponent() {
    return (
        <>
            <Routes>
                <Route path={RouterDTO.home}></Route>
            </Routes>
            ?
        </>
    );
}
