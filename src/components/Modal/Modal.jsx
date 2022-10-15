import { Component } from 'react';
import s from './Modal.module.css';
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
      image: { src, alt },
    } = this.props;
    return (
      <div className={s.backdrop} onClick={this.closeByBackdrop}>
        <div className={s.modal}>
          <img src={src} alt={alt} width="1000" height="600" />
        </div>
      </div>
    );
  }
}
