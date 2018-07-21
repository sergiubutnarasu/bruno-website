import { Component, ComponentDidLoad, Element } from "@stencil/core";
import hljs from "highlight.js";

@Component({
  tag: "app-tab"
})
export class AppTab implements ComponentDidLoad {
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
        <div class="display display--large margin-bottom">Tabs</div>
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

        <div class="margin-bottom">
          <brn-tabs>
            <brn-tab name="First" active={true}>
              <p>Lorem ipsum dolor sit amet.</p>
            </brn-tab>

            <brn-tab name="Second">
              <p>
                Nostrum sed ratione reprehenderit nam, quisquam enim dolorum?
              </p>
            </brn-tab>

            <brn-tab name="Third">
              <p>Architecto natus quisquam nam maxime similique vero!</p>
            </brn-tab>
          </brn-tabs>
        </div>

        <pre>
          <code class="html">
            {`<brn-tabs>
    <brn-tab name="First" active={true}>
        <p>Lorem ipsum dolor sit amet.</p>
    </brn-tab>

    <brn-tab name="Second">
        <p>
            Nostrum sed ratione reprehenderit nam, quisquam enim dolorum?
        </p>
    </brn-tab>

    <brn-tab name="Third">
        <p>Architecto natus quisquam nam maxime similique vero!</p>
    </brn-tab>
</brn-tabs>`}
          </code>
        </pre>

        <hr />
      </div>
    );
  }
}
