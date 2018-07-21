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
            <stencil-route url="/components/buttons" component="app-buttons" />
            <stencil-route url="/components/checkboxes" component="app-checkboxes" />
            <stencil-route url="/components/radio-buttons" component="app-radio" />
          </stencil-route-switch>
        </stencil-router>
      </div>
    );
  }
}
