import { Component } from "../../../node_modules/@stencil/core";

@Component({
  tag: "app-buttons"
})
export class AppButtons {
  render() {
    return (
      <div>
        <h3>Buttons</h3>
        <p class="margin-bottom">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
          atque?
        </p>

        <div class="margin-bottom child-margin-right">
          <div class="brn-button brn-button--primary ">Primary</div>
          <div class="brn-button brn-button--secondary ">Secondary</div>
          <div class="brn-button brn-button--success ">Success</div>
          <div class="brn-button brn-button--danger ">Danger</div>
          <div class="brn-button brn-button--warning ">Warning</div>
          <div class="brn-button brn-button--info ">Info</div>
          <div class="brn-button brn-button--light ">Light</div>
          <div class="brn-button brn-button--dark">Dark</div>
        </div>

        <div class="margin-bottom child-margin-right">
          <div class="brn-button brn-button--primary brn-button--outline">
            Primary
          </div>
          <div class="brn-button brn-button--secondary brn-button--outline">
            Secondary
          </div>
          <div class="brn-button brn-button--success brn-button--outline">
            Success
          </div>
          <div class="brn-button brn-button--danger brn-button--outline">
            Danger
          </div>
          <div class="brn-button brn-button--warning brn-button--outline">
            Warning
          </div>
          <div class="brn-button brn-button--info brn-button--outline">
            Info
          </div>
          <div class="brn-button brn-button--light brn-button--outline">
            Light
          </div>
          <div class="brn-button brn-button--dark brn-button--outline">
            Dark
          </div>
        </div>

        <div class="margin-bottom child-margin-right">
          <div class="brn-button brn-button--primary brn-button--clean">
            Primary
          </div>
          <div class="brn-button brn-button--secondary brn-button--clean">
            Secondary
          </div>
          <div class="brn-button brn-button--success brn-button--clean">
            Success
          </div>
          <div class="brn-button brn-button--danger brn-button--clean">
            Danger
          </div>
          <div class="brn-button brn-button--warning brn-button--clean">
            Warning
          </div>
          <div class="brn-button brn-button--info brn-button--clean">Info</div>
          <div class="brn-button brn-button--light brn-button--clean">
            Light
          </div>
          <div class="brn-button brn-button--dark brn-button--clean">Dark</div>
        </div>

        <div class="margin-bottom child-margin-right">
          <div class="brn-button brn-button--primary brn-button--rounded">
            Primary
          </div>
          <div class="brn-button brn-button--secondary brn-button--rounded">
            Secondary
          </div>
          <div class="brn-button brn-button--success brn-button--rounded">
            Success
          </div>
          <div class="brn-button brn-button--danger brn-button--rounded">
            Danger
          </div>
          <div class="brn-button brn-button--warning brn-button--rounded">
            Warning
          </div>
          <div class="brn-button brn-button--info brn-button--rounded">
            Info
          </div>
          <div class="brn-button brn-button--light brn-button--rounded">
            Light
          </div>
          <div class="brn-button brn-button--dark brn-button--rounded">
            Dark
          </div>
        </div>

        <div class="margin-bottom child-margin-right">
          <div class="brn-button brn-button--primary brn-button--rounded brn-button--outline">
            Primary
          </div>
          <div class="brn-button brn-button--secondary brn-button--rounded brn-button--outline">
            Secondary
          </div>
          <div class="brn-button brn-button--success brn-button--rounded brn-button--outline">
            Success
          </div>
          <div class="brn-button brn-button--danger brn-button--rounded brn-button--outline">
            Danger
          </div>
          <div class="brn-button brn-button--warning brn-button--rounded brn-button--outline">
            Warning
          </div>
          <div class="brn-button brn-button--info brn-button--rounded brn-button--outline">
            Info
          </div>
          <div class="brn-button brn-button--light brn-button--rounded brn-button--outline">
            Light
          </div>
          <div class="brn-button brn-button--dark brn-button--rounded brn-button--outline">
            Dark
          </div>
        </div>

        <div class="margin-bottom child-margin-right">
          <brn-row>
            <brn-column columns={1} total={3}>
              <div class="brn-button brn-button--primary brn-button--block">
                Primary
              </div>
            </brn-column>
            <brn-column columns={1} total={3}>
              <div class="brn-button brn-button--secondary brn-button--block">
                Secondary
              </div>
            </brn-column>
            <brn-column columns={1} total={3}>
              <div class="brn-button brn-button--dark brn-button--block">
                Dark
              </div>
            </brn-column>
          </brn-row>
        </div>

        <div class="margin-bottom child-margin-right">
          <div class="brn-button brn-button--secondary brn-button--small">
            Small
          </div>
          <div class="brn-button brn-button--secondary brn-button--medium">
            Medium
          </div>
          <div class="brn-button brn-button--secondary brn-button--large">
            Large
          </div>
        </div>

        <div class="margin-bottom child-margin-right">
          <div class="brn-button brn-button--primary">
            <i class="brn-button__icon ion-ios-git-branch" /> Lorem ipsum
          </div>

          <div class="brn-button brn-button--light brn-button__icon--right">
            Lorem ipsum
            <i class="brn-button__icon ion-ios-contact" />
          </div>
        </div>
      </div>
    );
  }
}
