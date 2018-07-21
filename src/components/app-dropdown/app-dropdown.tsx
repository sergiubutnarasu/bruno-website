import { Component, ComponentDidLoad, Element } from "@stencil/core";
import hljs from "highlight.js";

@Component({
  tag: "app-dropdown"
})
export class AppDropdown implements ComponentDidLoad {
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
        <div class="display display--large margin-bottom">Dropdowns</div>
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
          <brn-dropdown>
            <div slot="button" class="brn-button">
              Dropdown
              <i class="brn-button__icon brn-button__icon--right brn-button__icon--small ion-ios-arrow-down" />
            </div>
            <div slot="menu">Lorem ipsum dolor sit amet</div>
          </brn-dropdown>
        </div>

        <pre>
          <code class="html">
            {`<brn-dropdown>
    <div slot="button" class="brn-button">
        Dropdown
        <i class="brn-button__icon brn-button__icon--right brn-button__icon--small ion-ios-arrow-down"></i>
    </div>
    <div slot="menu">Lorem ipsum dolor sit amet</div>
</brn-dropdown>`}
          </code>
        </pre>

        <hr />

        <h5 class="margin-bottom">Dropdown menu</h5>

        <p class="margin-bottom">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae aliquam
          iste facere dolor deleniti similique sequi eligendi. Numquam at enim
          alias amet esse harum illo fugiat aspernatur ea autem.
        </p>

        <div class="margin-bottom child-margin-right">
          <brn-dropdown>
            <div
              slot="button"
              class="brn-button brn-button--light"
            >
              Menu options
              <i class="brn-button__icon brn-button__icon--right brn-button__icon--small ion-ios-arrow-down" />
            </div>
            <div slot="menu">
              <ul>
                <li>
                  <a href="#">Some text</a>
                </li>
                <li>
                  <a href="#">Another text</a>
                </li>
                <li class="divider" />
                <li>
                  <a href="#">Separated option</a>
                </li>
              </ul>
            </div>
          </brn-dropdown>
        </div>

        <pre>
          <code class="html">
            {`<brn-dropdown>
    <div slot="button" class="brn-button brn-button--light brn-button__icon--right">
        Menu options
        <i class="brn-button__icon brn-button__icon--small ion-ios-arrow-down"></i>
    </div>
    <div slot="menu">
        <ul>
            <li>
                <a href="#">Some text</a>
            </li>
            <li>
                <a href="#">Another text</a>
            </li>
            <li class="divider"></li>
            <li>
                <a href="#">Separated option</a>
            </li>
        </ul>
    </div>
</brn-dropdown>`}
          </code>
        </pre>

        <hr />
      </div>
    );
  }
}
