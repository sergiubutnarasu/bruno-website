import { Component } from "@stencil/core";

@Component({
  tag: "app-components"
})
export class AppComponents {
  render() {
    return (
      <div>
        <stencil-router>
          <stencil-route-switch scrollTopOffset={0}>
            <stencil-route url="/components/buttons" component="app-button" />
            <stencil-route url="/components/checkboxes" component="app-checkbox" />
            <stencil-route url="/components/radio-buttons" component="app-radio" />
            <stencil-route url="/components/toggles" component="app-toggle" />
            <stencil-route url="/components/dropdowns" component="app-dropdown" />
            <stencil-route url="/components/dynamic-columns" component="app-column" />
            <stencil-route url="/components/inputs" component="app-input" />
            <stencil-route url="/components/tabs" component="app-tab" />
            <stencil-route url="/components/typography" component="app-typography" />
          </stencil-route-switch>
        </stencil-router>
      </div>
    );
  }
}
