import React from 'react';
import { FluidContainer } from "../../components/layout.js";
import ContentBar from "./content.js";
import HeaderBar from "./header.js";



export default function WelcomeApp(props) {
    return (
        <FluidContainer className="h-100 md-bg-0 d-flex flex-column">
            {/* <HeaderBar /> */}
            <ContentBar />
        </FluidContainer>
    );
}