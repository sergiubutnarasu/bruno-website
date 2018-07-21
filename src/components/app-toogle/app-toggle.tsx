import { Component, ComponentDidLoad, Element } from "@stencil/core";
import hljs from "highlight.js";

@Component({
    tag: 'app-toggle'
})
export class AppToggle implements ComponentDidLoad {
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
          <div class="display display--large margin-bottom">Toggles</div>
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
            <brn-toggle checked={true}>Default</brn-toggle>
          </div>
  
          <pre>
            <code class="html">
              {'<brn-toggle checked="true">Default</brn-toggle>'}
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
            <brn-toggle checked={true} type="primary">
              Primary
            </brn-toggle>
            <brn-toggle checked={true} type="secondary">
              Secondary
            </brn-toggle>
            <brn-toggle checked={true} type="success">
              Success
            </brn-toggle>
            <brn-toggle checked={true} type="danger">
              Danger
            </brn-toggle>
            <brn-toggle checked={true} type="info">
              Info
            </brn-toggle>
            <brn-toggle checked={true} type="light">
              Light
            </brn-toggle>
            <brn-toggle checked={true} type="dark">
              Dark
            </brn-toggle>
          </div>
  
          <pre>
            <code class="html">
              {
                '<brn-toggle checked="true" type="primary">Primary</brn-toggle>'
              }
              <br />
              {
                '<brn-toggle checked="true" type="secondary">Secondary</brn-toggle>'
              }
              <br />
              {
                '<brn-toggle checked="true" type="success">Success</brn-toggle>'
              }
              <br />
              {'<brn-toggle checked="true" type="danger">Danger</brn-toggle>'}
              <br />
              {'<brn-toggle checked="true" type="info">Info</brn-toggle>'}
              <br />
              {'<brn-toggle checked="true" type="light">Light</brn-toggle>'}
              <br />
              {'<brn-toggle checked="true" type="dark">Dark</brn-toggle>'}
              <br />
            </code>
          </pre>
        </div>
      );
    }
  }
  