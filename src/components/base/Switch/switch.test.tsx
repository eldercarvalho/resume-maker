import { render, fireEvent } from '@/test-utils';
import Switch from '@/components/base/Switch';

describe('Switch Component', () => {
  it('should show thumb on correct position according prop checked', () => {
    const onChangeMock = jest.fn();
    const sut = render(<Switch checked={false} onChange={onChangeMock} />);
    const thumb = sut.getByTestId('thumb');

    expect(thumb).toHaveStyle('left: 0');

    sut.rerender(<Switch checked onChange={onChangeMock} />);

    expect(thumb).toHaveStyle('left: 8px');
  });

  it('should call onChange prop when its clicked', () => {
    const onChangeMock = jest.fn();
    const sut = render(<Switch checked={false} onChange={onChangeMock} />);

    fireEvent.click(sut.getByRole('checkbox'));

    expect(onChangeMock).toHaveBeenCalled();
  });
});
