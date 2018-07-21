import { Component, ComponentDidLoad, Element } from "@stencil/core";
import hljs from "highlight.js";

@Component({
  tag: "app-typography"
})
export class AppTypography implements ComponentDidLoad {
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
        <div class="display display--large margin-bottom">Typography</div>
        <p class="margin-bottom">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae aliquam
          iste facere dolor deleniti similique sequi eligendi. Numquam at enim
          alias amet esse harum illo fugiat aspernatur ea autem, iure rerum
          reprehenderit, doloribus quaerat repudiandae expedita pariatur quidem
          aliquam consectetur, nisi accusantium deserunt possimus! Dignissimos
          porro quis et fuga quam! atque?
        </p>

        <hr />

        <h5 class="margin-bottom">Headers</h5>

        <p class="margin-bottom">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae aliquam
          iste facere dolor deleniti similique sequi eligendi. Numquam at enim
          alias amet esse harum illo fugiat aspernatur ea autem.
        </p>

        <div class="margin-bottom child-margin-right">
          <h1>H1. Lorem ipsum dolor sit amet.</h1>
          <h2>H2. Lorem ipsum dolor sit amet.</h2>
          <h3>H3. Lorem ipsum dolor sit amet.</h3>
          <h4>H4. Lorem ipsum dolor sit amet.</h4>
          <h5>H5. Lorem ipsum dolor sit amet.</h5>
          <h6>H6. Lorem ipsum dolor sit amet.</h6>
        </div>

        <pre>
          <code class="html">
            {"<h1>H1. Lorem ipsum dolor sit amet.</h1>"}
            <br />
            {"<h2>H2. Lorem ipsum dolor sit amet.</h2>"}
            <br />
            {"<h3>H3. Lorem ipsum dolor sit amet.</h3>"}
            <br />
            {"<h4>H4. Lorem ipsum dolor sit amet.</h4>"}
            <br />
            {"<h5>H5. Lorem ipsum dolor sit amet.</h5>"}
            <br />
            {"<h6>H6. Lorem ipsum dolor sit amet.</h6>"}
            <br />
          </code>
        </pre>

        <hr />

        <h5 class="margin-bottom">Display</h5>

        <p class="margin-bottom">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae aliquam
          iste facere dolor deleniti similique sequi eligendi. Numquam at enim
          alias amet esse harum illo fugiat aspernatur ea autem.
        </p>

        <div class="margin-bottom child-margin-right">
          <div class="display display--small">Display small</div>
          <div class="display display--medium">Display medium</div>
          <div class="display display--large">Display large</div>
        </div>

        <pre>
          <code class="html">
            {'<div class="display display--small">Display small</div>'}
            <br />
            {'<div class="display display--medium">Display medium</div>'}
            <br />
            {'<div class="display display--large">Display large</div>'}
          </code>
        </pre>

        <hr />

        <h5 class="margin-bottom">Paragraph</h5>

        <p class="margin-bottom">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae aliquam
          iste facere dolor deleniti similique sequi eligendi. Numquam at enim
          alias amet esse harum illo fugiat aspernatur ea autem.
        </p>

        <div class="margin-bottom child-margin-right">
          <p>
            Paragraph: Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>

        <pre>
          <code class="html">
            {
              " <p>Paragraph: Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>"
            }
          </code>
        </pre>

        <hr />
      </div>
    );
  }
}
