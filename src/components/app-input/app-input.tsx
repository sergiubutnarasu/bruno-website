import { Component, ComponentDidLoad, Element } from "@stencil/core";
import hljs from "highlight.js";

@Component({
  tag: "app-input"
})
export class AppInput implements ComponentDidLoad {
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
        <div class="display display--large margin-bottom">Inputs</div>
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
          <div class="brn-input">
            <input type="text" placeholder="Lorem ipsum dolor sit amet." />
          </div>
        </div>

        <pre>
          <code class="html">
            {`<div class="brn-input">
    <input type="text" placeholder="Lorem ipsum dolor sit amet." />
</div>`}
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
          <div class="brn-input brn-input--rounded">
            <input type="text" placeholder="Lorem ipsum dolor sit amet." />
          </div>
        </div>

        <pre>
          <code class="html">
            {`<div class="brn-input brn-input--rounded">
    <input type="text" placeholder="Lorem ipsum dolor sit amet." />
</div>`}
          </code>
        </pre>

        <hr />

        <h5 class="margin-bottom">Display block</h5>

        <p class="margin-bottom">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae aliquam
          iste facere dolor deleniti similique sequi eligendi. Numquam at enim
          alias amet esse harum illo fugiat aspernatur ea autem.
        </p>

        <div class="margin-bottom child-margin-right">
          <div class="brn-input brn-input--block">
            <input type="text" placeholder="Lorem ipsum dolor sit amet." />
          </div>
        </div>

        <pre>
          <code class="html">
            {`<div class="brn-input brn-input--block">
    <input type="text" placeholder="Lorem ipsum dolor sit amet." />
</div>`}
          </code>
        </pre>

        <hr />

        <h5 class="margin-bottom">Error</h5>

        <p class="margin-bottom">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae aliquam
          iste facere dolor deleniti similique sequi eligendi. Numquam at enim
          alias amet esse harum illo fugiat aspernatur ea autem.
        </p>

        <div class="margin-bottom child-margin-right">
          <div class="brn-input brn-input--danger">
            <input type="text" placeholder="Lorem ipsum dolor sit amet." />
          </div>
        </div>

        <pre>
          <code class="html">
            {`<div class="brn-input brn-input--danger">
    <input type="text" placeholder="Lorem ipsum dolor sit amet." />
</div>`}
          </code>
        </pre>

        <hr />

        <h5 class="margin-bottom">With icon</h5>

        <p class="margin-bottom">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae aliquam
          iste facere dolor deleniti similique sequi eligendi. Numquam at enim
          alias amet esse harum illo fugiat aspernatur ea autem.
        </p>

        <div class="margin-bottom child-margin-right">
          <div class="brn-input brn-input--rounded brn-input--with-icon">
            <i class="brn-input__icon ion-ios-search" />
            <input type="text" placeholder="Lorem ipsum dolor sit amet." />
          </div>

          <div class="brn-input brn-input--rounded brn-input--with-icon-right">
            <i class="brn-input__icon ion-ios-search" />
            <input type="text" placeholder="Lorem ipsum dolor sit amet." />
          </div>
        </div>

        <pre>
          <code class="html">
            {`<div class="brn-input brn-input--rounded brn-input--with-icon">
    <i class="brn-input__icon ion-ios-search"></i>
    <input type="text" placeholder="Lorem ipsum dolor sit amet." />
</div>

<div class="brn-input brn-input--rounded brn-input--with-icon-right">
    <i class="brn-input__icon ion-ios-search"></i>
    <input type="text" placeholder="Lorem ipsum dolor sit amet." />
</div>`}
          </code>
        </pre>

        <hr />
      </div>
    );
  }
}
