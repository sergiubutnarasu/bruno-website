import { Component } from "@stencil/core";
import "@stencil/router";
import "bruno-ui";

@Component({
  tag: "app-root",
  styleUrl: "app-root.css"
})
export class AppRoot {
  render() {
    return (
      <div class="container">
        <brn-row>
          <brn-column columns={3} total={12}>
            <h6>Introduction</h6>
            <ul class="margin-bottom">
              <li>
                <a href="#">Get started</a>
              </li>
              <li>
                <a href="#">Integration</a>
              </li>
            </ul>

            <h6>Components</h6>
            <ul>
              <li>
                <stencil-route-link url="/components/buttons">
                  Buttons
                </stencil-route-link>
              </li>
              <li>
                <stencil-route-link url="/components/checkboxes">
                  Checkboxes
                </stencil-route-link>
              </li>
              <li>
                <a href="#">Dropdowns</a>
              </li>
              <li>
                <a href="#">Dynamic columns</a>
              </li>
              <li>
                <a href="#">Inputs</a>
              </li>
              <li>
                <stencil-route-link url="/components/radio-buttons">
                  Radio buttons
                </stencil-route-link>
              </li>
              <li>
                <a href="#">Tabs</a>
              </li>
              <li>
                <a href="#">Toggles</a>
              </li>
              <li>
                <a href="#">Typography</a>
              </li>
            </ul>
          </brn-column>

          <brn-column columns={9} total={12}>
            <stencil-router>
              <stencil-route-switch scrollTopOffset={0}>
                <stencil-route url="/" component="app-home" exact={true} />
                <stencil-route url="/components" component="app-components" />
              </stencil-route-switch>
            </stencil-router>
          </brn-column>
        </brn-row>
      </div>
    );
  }
}
