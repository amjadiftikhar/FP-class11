import React from 'react';
import Notification from './notification.component';
import { withKnobs, text } from '@storybook/addon-knobs';

export default {
  title: 'Notification',
  component: Notification,
  decorators: [withKnobs],
};

export const Error = () => (
  <Notification
    text={text('Error text', 'This is error message for wrong email address.')}
  />
);
