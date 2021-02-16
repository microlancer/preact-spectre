/**
 * https://picturepan2.github.io/spectre/elements/buttons.html
 */

class Button extends Component
{
  render() {
    let buttonProps = {};
    
    switch (this.props.kind) {
      case 'secondary': 
        buttonProps.class = 'btn btn-secondary';
        break;
      case 'link': 
        buttonProps.class = 'btn btn-link';
        break;
      case 'success':
        buttonProps.class = 'btn btn-success';
        break;
      case 'error':
        buttonProps.class = 'btn btn-error';
        break;
      default:
        buttonProps.class = 'btn btn-primary';
    }
    
    switch (this.props.size) {
      case 'small':
        buttonProps.class += ' btn-sm';
        break;
      case 'large':
        buttonProps.class += ' btn-lg';
        break;
      default:
    }
    
    switch (this.props.shape) {
      case 'square':
        buttonProps.class += ' btn-action';
        break;
      case 'circle':
        buttonProps.class += ' btn-action s-circle';
        break;
      default:
    }
    
    let buttonContent = false;
    
    switch (this.props.icon) {
      case 'menu':
        buttonContent = html`<i class="icon icon-menu"></i>`;
        break;
    }
    
    if (this.props.active == "true") {
      buttonProps.class += ' active';
    }
    
    if (this.props.disabled == "true") {
      buttonProps.class += ' disabled';
    }
    
    if (this.props.loading == "true") {
      buttonProps.class += ' loading';
    }
    
    // Render component
    return h("button", buttonProps, buttonContent ? buttonContent : this.props.children);
  }
};
