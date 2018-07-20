import {
  Component,
  Element,
  ComponentDidLoad
} from "../../../node_modules/@stencil/core";
import hljs from "highlight.js";

@Component({
  tag: "app-buttons"
})
export class AppButtons implements ComponentDidLoad {
  @Element() _element: HTMLElement;

  componentDidLoad() {
    hljs.initHighlighting();
  }

  render() {
    return (
      <div>
        <div class="display display--large margin-bottom">Buttons</div>
        <p class="margin-bottom">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae aliquam
          iste facere dolor deleniti similique sequi eligendi. Numquam at enim
          alias amet esse harum illo fugiat aspernatur ea autem, iure rerum
          reprehenderit, doloribus quaerat repudiandae expedita pariatur quidem
          aliquam consectetur, nisi accusantium deserunt possimus! Dignissimos
          porro quis et fuga quam! atque?
        </p>

        <hr />

        <h5 class="margin-bottom">Default</h5>

        <p class="margin-bottom">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae aliquam
          iste facere dolor deleniti similique sequi eligendi. Numquam at enim
          alias amet esse harum illo fugiat aspernatur ea autem.
        </p>

        <div class="margin-bottom child-margin-right">
          <div class="brn-button brn-button--primary">Primary</div>
          <div class="brn-button brn-button--secondary">Secondary</div>
          <div class="brn-button brn-button--success">Success</div>
          <div class="brn-button brn-button--danger">Danger</div>
          <div class="brn-button brn-button--warning">Warning</div>
          <div class="brn-button brn-button--info">Info</div>
          <div class="brn-button brn-button--light">Light</div>
          <div class="brn-button brn-button--dark">Dark</div>
        </div>

        <pre>
          <code class="html">
            {'<div class="brn-button brn-button--primary">Primary</div>'}
            <br />
            {'<div class="brn-button brn-button--secondary">Secondary</div>'}
            <br />
            {'<div class="brn-button brn-button--success">Success</div>'}
            <br />
            {'<div class="brn-button brn-button--danger">Danger</div>'}
            <br />
            {'<div class="brn-button brn-button--warning">Warning</div>'}
            <br />
            {'<div class="brn-button brn-button--info">Info</div>'}
            <br />
            {'<div class="brn-button brn-button--light">Light</div>'}
            <br />
            {'<div class="brn-button brn-button--dark">Dark</div>'}
          </code>
        </pre>

        <hr />

        <h5 class="margin-bottom">Outline</h5>

        <p class="margin-bottom">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae aliquam
          iste facere dolor deleniti similique sequi eligendi. Numquam at enim
          alias amet esse harum illo fugiat aspernatur ea autem.
        </p>

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

        <pre>
          <code class="html">
            {
              '<div class="brn-button brn-button--primary brn-button--outline">Primary</div>'
            }
            <br />
            {
              '<div class="brn-button brn-button--secondary brn-button--outline">Secondary</div>'
            }
            <br />
            {
              '<div class="brn-button brn-button--success brn-button--outline">Success</div>'
            }
            <br />
            {
              '<div class="brn-button brn-button--danger brn-button--outline">Danger</div>'
            }
            <br />
            {
              '<div class="brn-button brn-button--warning brn-button--outline">Warning</div>'
            }
            <br />
            {
              '<div class="brn-button brn-button--info brn-button--outline">Info</div>'
            }
            <br />
            {
              '<div class="brn-button brn-button--light brn-button--outline">Light</div>'
            }
            <br />
            {
              '<div class="brn-button brn-button--dark brn-button--outline">Dark</div>'
            }
          </code>
        </pre>

        <hr />

        <h5 class="margin-bottom">Clean</h5>

        <p class="margin-bottom">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae aliquam
          iste facere dolor deleniti similique sequi eligendi. Numquam at enim
          alias amet esse harum illo fugiat aspernatur ea autem.
        </p>

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

        <pre>
          <code class="html">
            {
              '<div class="brn-button brn-button--primary brn-button--clean">Primary</div>'
            }
            <br />
            {
              '<div class="brn-button brn-button--secondary brn-button--clean">Secondary</div>'
            }
            <br />
            {
              '<div class="brn-button brn-button--success brn-button--clean">Success</div>'
            }
            <br />
            {
              '<div class="brn-button brn-button--danger brn-button--clean">Danger</div>'
            }
            <br />
            {
              '<div class="brn-button brn-button--warning brn-button--clean">Warning</div>'
            }
            <br />
            {
              '<div class="brn-button brn-button--info brn-button--clean">Info</div>'
            }
            <br />
            {
              '<div class="brn-button brn-button--light brn-button--clean">Light</div>'
            }
            <br />
            {
              '<div class="brn-button brn-button--dark brn-button--clean">Dark</div>'
            }
          </code>
        </pre>

        <hr />

        <h5 class="margin-bottom">Rounded</h5>

        <p class="margin-bottom">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae aliquam
          iste facere dolor deleniti similique sequi eligendi. Numquam at enim
          alias amet esse harum illo fugiat aspernatur ea autem.
        </p>

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

        <pre>
          <code class="html">
            {
              '<div class="brn-button brn-button--primary brn-button--rounded">Primary</div>'
            }
            <br />
            {
              '<div class="brn-button brn-button--secondary brn-button--rounded">Secondary</div>'
            }
            <br />
            {
              '<div class="brn-button brn-button--success brn-button--rounded">Success</div>'
            }
            <br />
            {
              '<div class="brn-button brn-button--danger brn-button--rounded">Danger</div>'
            }
            <br />
            {
              '<div class="brn-button brn-button--warning brn-button--rounded">Warning</div>'
            }
            <br />
            {
              '<div class="brn-button brn-button--info brn-button--rounded">Info</div>'
            }
            <br />
            {
              '<div class="brn-button brn-button--light brn-button--rounded">Light</div>'
            }
            <br />
            {
              '<div class="brn-button brn-button--dark brn-button--rounded">Dark</div>'
            }
          </code>
        </pre>

        <hr />

        <h5 class="margin-bottom">Rounded and outline</h5>

        <p class="margin-bottom">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae aliquam
          iste facere dolor deleniti similique sequi eligendi. Numquam at enim
          alias amet esse harum illo fugiat aspernatur ea autem.
        </p>

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

        <pre>
          <code class="html">
            {
              '<div class="brn-button brn-button--primary brn-button--rounded brn-button--outline">Primary</div>'
            }
            <br />
            {
              '<div class="brn-button brn-button--secondary brn-button--rounded brn-button--outline">Secondary</div>'
            }
            <br />
            {
              '<div class="brn-button brn-button--success brn-button--rounded brn-button--outline">Success</div>'
            }
            <br />
            {
              '<div class="brn-button brn-button--danger brn-button--rounded brn-button--outline">Danger</div>'
            }
            <br />
            {
              '<div class="brn-button brn-button--warning brn-button--rounded brn-button--outline">Warning</div>'
            }
            <br />
            {
              '<div class="brn-button brn-button--info brn-button--rounded brn-button--outline">Info</div>'
            }
            <br />
            {
              '<div class="brn-button brn-button--light brn-button--rounded brn-button--outline">Light</div>'
            }
            <br />
            {
              '<div class="brn-button brn-button--dark brn-button--rounded brn-button--outline">Dark</div>'
            }
          </code>
        </pre>

        <hr />

        <h5 class="margin-bottom">Block</h5>

        <p class="margin-bottom">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae aliquam
          iste facere dolor deleniti similique sequi eligendi. Numquam at enim
          alias amet esse harum illo fugiat aspernatur ea autem.
        </p>

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

        <pre>
          <code class="html">
            {
              '<div class="brn-button brn-button--primary brn-button--block">Primary</div>'
            }
            <br />
          </code>
        </pre>

        <hr />

        <h5 class="margin-bottom">Sizes</h5>

        <p class="margin-bottom">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae aliquam
          iste facere dolor deleniti similique sequi eligendi. Numquam at enim
          alias amet esse harum illo fugiat aspernatur ea autem.
        </p>

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

        <pre>
          <code class="html">
            {
              '<div class="brn-button brn-button--secondary brn-button--small">Small</div>'
            }
            <br />
            {
              '<div class="brn-button brn-button--secondary brn-button--medium">Medium</div>'
            }
            <br />
            {
              '<div class="brn-button brn-button--secondary brn-button--large">Large</div>'
            }
            <br />
          </code>
        </pre>

        <hr />

        <h5 class="margin-bottom">With Icons</h5>

        <p class="margin-bottom">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae aliquam
          iste facere dolor deleniti similique sequi eligendi. Numquam at enim
          alias amet esse harum illo fugiat aspernatur ea autem.
        </p>

        <div class="margin-bottom child-margin-right">
          <div class="brn-button brn-button--primary">
            <i class="brn-button__icon ion-ios-git-branch" /> Lorem ipsum
          </div>

          <div class="brn-button brn-button--light brn-button__icon--right">
            Lorem ipsum
            <i class="brn-button__icon ion-ios-contact" />
          </div>
        </div>

        <pre>
          <code class="html">
            {`<div class="brn-button brn-button--primary">
  <i class="brn-button__icon ion-ios-git-branch" /> Lorem ipsum
</div>`}
            <br />
            <br />
            {`<div class="brn-button brn-button--light brn-button__icon--right">
  Lorem ipsum <i class="brn-button__icon ion-ios-contact" />
</div>`}
            <br />
          </code>
        </pre>
      </div>
    );
  }
}
