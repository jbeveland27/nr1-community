import React from 'react';
import PropTypes from 'prop-types';
import { Stack, StackItem, Button } from 'nr1';
import styles from './style.scss';

export class EmptyState extends React.Component {
  static propTypes = {
    heading: PropTypes.string,
    description: PropTypes.string,
    buttonText: PropTypes.string,
    buttonOnClick: PropTypes.func,
    buttonUrl: PropTypes.string
  };

  constructor(props) {
    super(props);

    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleButtonClick() {
    const { buttonOnClick } = this.props;
    if (buttonOnClick !== undefined) {
      return buttonOnClick();
    } else {
      console.log('You clicked the empty state button!');
    }
  }

  render() {
    const { heading, description, buttonText, buttonUrl } = this.props;
    return (
      <>
        <Stack
          className={styles['empty-state']}
          verticalType={Stack.VERTICAL_TYPE.CENTER}
          horizontalType={Stack.HORIZONTAL_TYPE.CENTER}
          directionType={Stack.DIRECTION_TYPE.VERTICAL}
          gapType={Stack.GAP_TYPE.NONE}
        >
          <StackItem>
            <h4 className={styles['empty-state-header']}>
              {heading || 'Lorem ipsum dolor'}
            </h4>
          </StackItem>
          <StackItem className={description === '' ? styles.hidden : ''}>
            <p className={styles['empty-state-description']}>
              {description ||
                'Morbi malesuada nulla nec purus convallis consequat. Vivamus id mollis quam. Morbi ac commodo nulla. In condimentum orci id nisl volutpat bibendum. Quisque commodo hendrerit lorem quis egestas. Maecenas quis tortor arcu. Vivamus rutrum nunc non neque consectetur quis placerat neque lobortis.'}
            </p>
          </StackItem>
          <StackItem className={buttonText === '' ? styles.hidden : ''}>
            <Button onClick={this.handleButtonClick} to={buttonUrl}>
              {buttonText || 'Call to action'}
            </Button>
          </StackItem>
        </Stack>
      </>
    );
  }
}
