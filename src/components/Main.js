import { Fragment } from "react";
import { TitleFolio} from "./TitleFolio.js";
import { About } from "./About.js";
import { Skills } from "./Skills.js";

export function Main(){
    return(

        <Fragment>

            <TitleFolio />

            <About />

            <Skills />

        </Fragment>

    );
}
