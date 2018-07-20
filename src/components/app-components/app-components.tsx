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
          </stencil-route-switch>
        </stencil-router>
      </div>
    );
  }
}
