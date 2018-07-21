import { Component, ComponentDidLoad, Element } from "@stencil/core";
import hljs from "highlight.js";

@Component({
  tag: "app-checkboxes"
})
export class AppCheckboxes implements ComponentDidLoad {
  @Element() _element: HTMLElement;

  componentDidLoad() {
    let children = this._element.getElementsByTagName("code");
    Array.from(children).forEach(x => {
      hljs.highlightBlock(x);
    });
  }

  render() {
    return (
      <div>
        <div class="display display--large margin-bottom">Checkboxes</div>
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
          <brn-checkbox checked={true} text="Default" />
        </div>

        <pre>
          <code class="html">
            {'<brn-checkbox checked="true">Default</brn-checkbox>'}
          </code>
        </pre>

        <hr />

        <h5 class="margin-bottom">Types</h5>

        <p class="margin-bottom">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae aliquam
          iste facere dolor deleniti similique sequi eligendi. Numquam at enim
          alias amet esse harum illo fugiat aspernatur ea autem.
        </p>

        <div class="margin-bottom child-margin-right">
          <brn-checkbox checked={true} type="primary" text="Primary" />
          <brn-checkbox checked={true} type="secondary" text="Secondary" />
          <brn-checkbox checked={true} type="success" text="Success" />
          <brn-checkbox checked={true} type="danger" text="Danger" />
          <brn-checkbox checked={true} type="info" text="Info" />
          <brn-checkbox checked={true} type="light" text="Light" />
          <brn-checkbox checked={true} type="dark" text="Dark" />
        </div>

        <pre>
          <code class="html">
            {
              '<brn-checkbox checked="true" type="primary">Default</brn-checkbox>'
            }
            <br />
            {
              '<brn-checkbox checked="true" type="secondary">Secondary</brn-checkbox>'
            }
            <br />
            {
              '<brn-checkbox checked="true" type="success">Success</brn-checkbox>'
            }
            <br />
            {
              '<brn-checkbox checked="true" type="danger">Danger</brn-checkbox>'
            }
            <br />
            {
              '<brn-checkbox checked="true" type="info">Info</brn-checkbox>'
            }
            <br />
            {
              '<brn-checkbox checked="true" type="light">Light</brn-checkbox>'
            }
            <br />
            {
              '<brn-checkbox checked="true" type="dark">Dark</brn-checkbox>'
            }
            <br />
          </code>
        </pre>
      </div>
    );
  }
}
