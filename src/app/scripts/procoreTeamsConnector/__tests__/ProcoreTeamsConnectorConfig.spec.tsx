import * as React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

import { ProcoreTeamsConnectorConfig } from "../ProcoreTeamsConnectorConfig";

describe("ProcoreTeamsConnectorConfig Component", () => {
    // Snapshot Test Sample
    it("should match the snapshot", () => {
        window.alert = jest.fn();
        const wrapper = shallow(<ProcoreTeamsConnectorConfig />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    // Component Test Sample
    it("should render the tab", () => {
        const component = shallow(<ProcoreTeamsConnectorConfig />);
        const divResult = component.containsMatchingElement(<div>Configure your Connector</div>);

        expect(divResult).toBeTruthy();
    });
});

