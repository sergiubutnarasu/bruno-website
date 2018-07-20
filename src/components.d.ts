/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */

import '@stencil/core';

declare global {
  namespace JSX {
    interface Element {}
    export interface IntrinsicElements {}
  }
  namespace JSXElements {}

  interface HTMLElement {
    componentOnReady?: () => Promise<this | null>;
  }

  interface HTMLStencilElement extends HTMLElement {
    componentOnReady(): Promise<this>;

    forceUpdate(): void;
  }

  interface HTMLAttributes {}
}

import '@stencil/router';
import '@stencil/state-tunnel';
import 'bruno-ui';


declare global {

  namespace StencilComponents {
    interface AppButtons {

    }
  }

  interface HTMLAppButtonsElement extends StencilComponents.AppButtons, HTMLStencilElement {}

  var HTMLAppButtonsElement: {
    prototype: HTMLAppButtonsElement;
    new (): HTMLAppButtonsElement;
  };
  interface HTMLElementTagNameMap {
    'app-buttons': HTMLAppButtonsElement;
  }
  interface ElementTagNameMap {
    'app-buttons': HTMLAppButtonsElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'app-buttons': JSXElements.AppButtonsAttributes;
    }
  }
  namespace JSXElements {
    export interface AppButtonsAttributes extends HTMLAttributes {

    }
  }
}


declare global {

  namespace StencilComponents {
    interface AppComponents {

    }
  }

  interface HTMLAppComponentsElement extends StencilComponents.AppComponents, HTMLStencilElement {}

  var HTMLAppComponentsElement: {
    prototype: HTMLAppComponentsElement;
    new (): HTMLAppComponentsElement;
  };
  interface HTMLElementTagNameMap {
    'app-components': HTMLAppComponentsElement;
  }
  interface ElementTagNameMap {
    'app-components': HTMLAppComponentsElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'app-components': JSXElements.AppComponentsAttributes;
    }
  }
  namespace JSXElements {
    export interface AppComponentsAttributes extends HTMLAttributes {

    }
  }
}


declare global {

  namespace StencilComponents {
    interface AppHome {

    }
  }

  interface HTMLAppHomeElement extends StencilComponents.AppHome, HTMLStencilElement {}

  var HTMLAppHomeElement: {
    prototype: HTMLAppHomeElement;
    new (): HTMLAppHomeElement;
  };
  interface HTMLElementTagNameMap {
    'app-home': HTMLAppHomeElement;
  }
  interface ElementTagNameMap {
    'app-home': HTMLAppHomeElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'app-home': JSXElements.AppHomeAttributes;
    }
  }
  namespace JSXElements {
    export interface AppHomeAttributes extends HTMLAttributes {

    }
  }
}


declare global {

  namespace StencilComponents {
    interface AppRoot {

    }
  }

  interface HTMLAppRootElement extends StencilComponents.AppRoot, HTMLStencilElement {}

  var HTMLAppRootElement: {
    prototype: HTMLAppRootElement;
    new (): HTMLAppRootElement;
  };
  interface HTMLElementTagNameMap {
    'app-root': HTMLAppRootElement;
  }
  interface ElementTagNameMap {
    'app-root': HTMLAppRootElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'app-root': JSXElements.AppRootAttributes;
    }
  }
  namespace JSXElements {
    export interface AppRootAttributes extends HTMLAttributes {

    }
  }
}

declare global { namespace JSX { interface StencilJSX {} } }
