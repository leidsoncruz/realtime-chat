export interface FormElements extends HTMLFormControlsCollection {
  message: HTMLInputElement;
}

export interface FormElement extends HTMLFormElement {
  readonly elements: FormElements;
}
