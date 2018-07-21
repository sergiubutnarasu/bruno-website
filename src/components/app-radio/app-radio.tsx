import { Component, ComponentDidLoad, Element } from "@stencil/core";
import hljs from "highlight.js";

@Component({
  tag: "app-radio"
})
export class AppRadio implements ComponentDidLoad {
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
        <div class="display display--large margin-bottom">Radio buttons</div>
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
          <brn-radio checked={true}>Default</brn-radio>
        </div>

        <pre>
          <code class="html">
            {'<brn-radio checked="true">Default</brn-radio>'}
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
          <brn-radio name="group" checked={true} type="primary">
            Primary
          </brn-radio>
          <brn-radio name="group" type="secondary">
            Secondary
          </brn-radio>
          <brn-radio name="group" type="success">
            Success
          </brn-radio>
          <brn-radio name="group" type="danger">
            Danger
          </brn-radio>
          <brn-radio name="group" type="info">
            Info
          </brn-radio>
          <brn-radio name="group" type="light">
            Light
          </brn-radio>
          <brn-radio name="group" type="dark">
            Dark
          </brn-radio>
        </div>

        <pre>
          <code class="html">
            {
              '<brn-radio name="group" checked="true" type="primary">Primary</brn-radio>'
            }
            <br />
            {'<brn-radio name="group" type="secondary">Secondary</brn-radio>'}
            <br />
            {'<brn-radio name="group" type="success">Success</brn-radio>'}
            <br />
            {'<brn-radio name="group" type="danger">Danger</brn-radio>'}
            <br />
            {'<brn-radio name="group" type="info">Info</brn-radio>'}
            <br />
            {'<brn-radio name="group" type="light">Light</brn-radio>'}
            <br />
            {'<brn-radio name="group" type="dark">Dark</brn-radio>'}
            <br />
          </code>
        </pre>
      </div>
    );
  }
}
