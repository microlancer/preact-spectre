/**
 * https://picturepan2.github.io/spectre/elements/buttons.html
 */

class Button extends Component
{
  render() {
    console.log("Button::render()");
    let params = this.props.params;

    // Seperate parameters not directly applied to button
    let pending = params.pending;
    delete params.pending;

    // Set default classes if none are set. Check if button is in loading state.
    params.class = params.classes || "btn btn-primary";

    if (pending != undefined && pending) {
      params.class += " loading";
    }
    
    delete params.classes;

    // Render component
    return h("button", params, this.props.children);
  }
}
