import {FunctionalComponent} from "@stencil/core";
import {SpecPage} from "@stencil/core/internal";
import {newSpecPage} from "@stencil/core/testing";
import {TestingComponent} from "./testing-component";

export function renderFunctionalComponentToSpecPage<T extends {}>(
    componentConstructor: () => FunctionalComponent<T>,
): Promise<SpecPage> {

    return newSpecPage({
        components: [TestingComponent],
        template: componentConstructor,
    });
}
