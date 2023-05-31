import { Component } from 'react';

export class Modal extends Component {
  closeByEscape = e => {
    if (e.code === 'Escape') {
      this.props.closeModal();
    }
  };

  closeByBackdrop = event => {
    if (event.currentTarget === event.target) {
      this.props.closeModal();
    }
  };

  componentDidMount() {
    window.addEventListener('keydown', this.closeByEscape);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.closeByEscape);
  }
  render() {
    const {
      modalImage: { src, alt },
    } = this.props;

    return (
      <div className="Overlay" onClick={this.closeByBackdrop}>
        <div className="Modal">
          <img src={src} alt={alt} />
        </div>
      </div>
    );
  }
}
