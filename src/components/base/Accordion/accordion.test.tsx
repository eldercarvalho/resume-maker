import { render, fireEvent, screen } from '@testing-library/react';
import Accordion from '@/components/base/Accordion';

const makeSut = (defaultItemKey = '') => {
  render(
    <Accordion defaultItemKey={defaultItemKey}>
      <Accordion.Item itemKey="0">
        <Accordion.Header>Header 1</Accordion.Header>
        <Accordion.Content>Content 1</Accordion.Content>
      </Accordion.Item>
      <Accordion.Item itemKey="1">
        <Accordion.Header>Header 2</Accordion.Header>
        <Accordion.Content>Content 2</Accordion.Content>
      </Accordion.Item>
    </Accordion>,
  );
};

describe('Accordion Component', () => {
  it('should show item when associated header is clicked', () => {
    makeSut();

    fireEvent.click(screen.getAllByRole('button')[0]);

    expect(screen.getAllByRole('region')[0]).toHaveClass('isOpen');
  });

  it('should close others items when a closed item is opened', () => {
    makeSut();

    fireEvent.click(screen.getAllByRole('button')[0]);

    expect(screen.getAllByRole('region')[0]).toHaveClass('isOpen');

    fireEvent.click(screen.getAllByRole('button')[1]);

    expect(screen.getAllByRole('region')[0]).not.toHaveClass('isOpen');
    expect(screen.getAllByRole('region')[1]).toHaveClass('isOpen');
  });

  it('should close current opened item if its header is clicked', () => {
    makeSut();

    fireEvent.click(screen.getAllByRole('button')[0]);

    expect(screen.getAllByRole('region')[0]).toHaveClass('isOpen');

    fireEvent.click(screen.getAllByRole('button')[0]);

    expect(screen.getAllByRole('region')[0]).not.toHaveClass('isOpen');
  });

  it('should initialy show respective item if defaultItemKey prop is provided', () => {
    makeSut('1');

    expect(screen.getAllByRole('region')[1]).toHaveClass('isOpen');
  });
});
