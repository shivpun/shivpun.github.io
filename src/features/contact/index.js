import { ConnectedContact } from "./contact.component";
import { getContactModule } from "./contact.module";
import { DynamicModuleLoader } from "redux-dynamic-modules-react";
import * as React from "react";

export default function DynamicContact() {
    return (
        <DynamicModuleLoader modules={[getContactModule()]}>
            {}
            <ConnectedContact />
        </DynamicModuleLoader>
    );
}
