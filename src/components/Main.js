import { Fragment } from "react";
import { Banner } from "./Banner.js";
import { About } from "./About.js";
import { Skills } from "./Skills.js";

export function Main(){
    return(

        <Fragment>

            <Banner />

            <About />

            <Skills />

        </Fragment>

    );
}
