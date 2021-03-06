import * as React from 'react';
import { boolean, select } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import Modal from '../Modal';
import ModalHeader from '@/components/molecules/modalHeader';
import ModalDescription from '@/components/molecules/modalDescription';
import ModalFooter from '@/components/molecules/modalFooter';
import ModalBody from '@/components/molecules/modalBody';
import Button from '@/components/atoms/button';
import { updateKnob } from '@/utils/storybookEventEmitter';
import { Text, Paragraph } from '@/index';

export const all = () => {
  const open = boolean('open', true);
  const backdropClose = boolean('backdropClose', false);
  const dimension = select(
    'dimension',
    ['small', 'medium', 'large'],
    'small'
  );

  const onClose = () => {
    updateKnob('open', false);
    action('on close triggered')();
  };

  const options = {
    open,
    dimension,
    backdropClose: backdropClose ? onClose : undefined
  };

  const modalHeaderOptions = {
    onClose,
    icon: 'pan_tool',
    heading: 'Heading',
    subHeading: 'Subheading'
  };

  const modalDescriptionOptions = {
    title: 'Description Title',
    description: 'Adding a subheading clearly indicates the hierarchy of the information.',
    removePadding: true
  };

  const modalDescriptionOptionsWithoutTitle = {
    description: 'Card Sections include supporting text like an article summary or a restaurant description.',
    removePadding: true
  };

  return (
    <div>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br />
        Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<br />
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. <br />
        Excepteur sint occaecat cupidatat non proident,
        sunt in culpa qui officia deserunt mollit anim id est laborum.<br />
      </Paragraph>
      <Modal {...options}>
        <ModalHeader {...modalHeaderOptions} />
        <ModalBody>
          <Text>Modal Body</Text>
          <ModalDescription {...modalDescriptionOptions} />
          <ModalDescription {...modalDescriptionOptionsWithoutTitle} />
        </ModalBody>
        <ModalFooter>
          <Button appearance="basic" onClick={action('Basic button click')}>Basic</Button>
          <Button appearance="primary" onClick={action('Primary button click')}>Primary</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

const customCode = `() => {
  const [open, setOpen] = React.useState(true);

  const onClose = () => {
    setOpen(!open);
  };

  const options = {
    open,
    backdropClose: onClose
  };

  const modalHeaderOptions = {
    onClose,
    icon: 'pan_tool',
    heading: 'Heading',
    subHeading: 'Subheading'
  };

  const modalDescriptionOptions = {
    title: 'Description Title',
    description: 'Adding a subheading clearly indicates the hierarchy of the information.',
    removePadding: true
  };

  const modalDescriptionOptionsWithoutTitle = {
    description: 'Card Sections include supporting text like an article summary or a restaurant description.',
    removePadding: true
  };

  return (
    <div>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br />
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <br />
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. <br />
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <br />
        <Button appearance="primary" onClick={() => setOpen(true)}>Open</Button>
      </Paragraph>
      <Modal {...options}>
        <ModalHeader {...modalHeaderOptions} />
        <ModalBody>
          <Text>Modal Body</Text>
          <ModalDescription {...modalDescriptionOptions} />
          <ModalDescription {...modalDescriptionOptionsWithoutTitle} />
        </ModalBody>
        <ModalFooter>
          <Button appearance="basic">Basic</Button>
          <Button appearance="primary">Primary</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}`;

export default {
  title: 'Molecules|Modal',
  component: Modal,
  subcomponents: { ModalHeader, ModalBody, ModalDescription, ModalFooter },
  parameters: {
    docs: {
      docPage: {
        customCode,
        title: 'Modal',
        noHtml: true,
      }
    }
  }
};
