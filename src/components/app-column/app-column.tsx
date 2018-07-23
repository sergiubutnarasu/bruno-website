import { Component, ComponentDidLoad, Element } from "@stencil/core";
import hljs from "highlight.js";

@Component({
  tag: "app-column"
})
export class AppColumn implements ComponentDidLoad {
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
        <div class="display display--large margin-bottom">Dynamic columns</div>
        <p class="margin-bottom">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae aliquam
          iste facere dolor deleniti similique sequi eligendi. Numquam at enim
          alias amet esse harum illo fugiat aspernatur ea autem, iure rerum
          reprehenderit, doloribus quaerat repudiandae expedita pariatur quidem
          aliquam consectetur, nisi accusantium deserunt possimus! Dignissimos
          porro quis et fuga quam! atque?
        </p>

        <hr />

        <h5 class="margin-bottom">Examples</h5>

        <p class="margin-bottom">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae aliquam
          iste facere dolor deleniti similique sequi eligendi. Numquam at enim
          alias amet esse harum illo fugiat aspernatur ea autem.
        </p>

        <div class="margin-bottom">
          <brn-row>
            <brn-column columns={3} total={12}>
              First column
            </brn-column>

            <brn-column columns={3} total={12}>
              Second column
            </brn-column>

            <brn-column columns={3} total={12}>
              Third column
            </brn-column>

            <brn-column columns={3} total={12}>
              Fourth column
            </brn-column>
          </brn-row>
        </div>

        <pre>
          <code class="html">
            {`<brn-row>
    <brn-column columns="2" total="12">
        First column
    </brn-column>

    <brn-column columns="3" total="12">
        Second column
    </brn-column>

    <brn-column columns="3" total="12">
        Third column
    </brn-column>

    <brn-column columns="3" total="12">
        Fourth column
    </brn-column>
</brn-row>`}
          </code>
        </pre>
      </div>
    );
  }
}
