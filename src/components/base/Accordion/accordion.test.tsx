import { render, fireEvent, screen } from '@/test-utils';
import Accordion from '@/components/base/Accordion';

type SutType = {
  clickItem(index: number): void;
};

const makeSut = (defaultItemKey = ''): SutType => {
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

  const clickItem = (index = 0) => {
    fireEvent.click(screen.getAllByRole('button')[index]);
  };

  return {
    clickItem,
  };
};

describe('Accordion Component', () => {
  it('should show item when associated header is clicked', () => {
    const { clickItem } = makeSut();

    clickItem(0);

    expect(screen.getAllByRole('region')[0]).toHaveClass('isOpen');
  });

  it('should close others items when a closed item is opened', () => {
    const { clickItem } = makeSut();

    clickItem(0);

    expect(screen.getAllByRole('region')[0]).toHaveClass('isOpen');

    clickItem(1);

    expect(screen.getAllByRole('region')[0]).not.toHaveClass('isOpen');
    expect(screen.getAllByRole('region')[1]).toHaveClass('isOpen');
  });

  it('should close current opened item if its header is clicked', () => {
    const { clickItem } = makeSut();

    clickItem(0);

    expect(screen.getAllByRole('region')[0]).toHaveClass('isOpen');

    clickItem(0);

    expect(screen.getAllByRole('region')[0]).not.toHaveClass('isOpen');
  });

  it('should initialy show respective item if defaultItemKey prop is provided', () => {
    makeSut('1');

    expect(screen.getAllByRole('region')[1]).toHaveClass('isOpen');
  });

  it('should show an down arrow in header when item is closed', () => {
    makeSut();

    expect(screen.getAllByRole('img')[0]).toHaveAttribute('aria-label', 'Closed Indicator');
    expect(screen.getAllByRole('img')[1]).toHaveAttribute('aria-label', 'Closed Indicator');
  });

  it('should show an up arrow in header when item is opened', () => {
    const { clickItem } = makeSut();

    clickItem(0);

    expect(screen.getAllByRole('img')[0]).toHaveAttribute('aria-label', 'Opened Indicator');
    expect(screen.getAllByRole('img')[1]).toHaveAttribute('aria-label', 'Closed Indicator');

    clickItem(1);

    expect(screen.getAllByRole('img')[0]).toHaveAttribute('aria-label', 'Closed Indicator');
    expect(screen.getAllByRole('img')[1]).toHaveAttribute('aria-label', 'Opened Indicator');
  });
});
