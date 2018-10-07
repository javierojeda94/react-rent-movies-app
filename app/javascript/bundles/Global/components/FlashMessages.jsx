import React, {Component} from 'react';

export default class FlashMessages extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const error = this.props.error;
    const success = this.props.success;
    const info = this.props.info;
    return (
      <div className='flash-messages'>
        {info &&
          <article className='info'>
            <span>
              {info}
            </span>
          </article>
        }
        {success &&
          <article className='success'>
            <span>
              {success}
            </span>
          </article>
        }
        {error &&
          <article className='error'>
            <span>
              {error}
            </span>
          </article>
        }
      </div>
    );
  }
}