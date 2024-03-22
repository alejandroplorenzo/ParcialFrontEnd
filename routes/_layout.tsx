import {FreshContext} from "$fresh/server.ts"
import { Button } from "../components/Button.tsx";
import Menu from "../components/Menu.tsx"

const layout = async (req: Request, ctx: FreshContext)=>{
    const Component = ctx.Component;
    const route = ctx.route;
    const page = route.split("/").pop();
    return (
        <>
            <Menu />
            <Button/>
        </>
    );
};

export default layout;
