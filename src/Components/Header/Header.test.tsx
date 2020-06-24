import React from 'react';
import { render, act } from '@testing-library/react';
import Header from './Header';

jest.useFakeTimers();

describe('Header', () => {

  const date1 = new Date('2020-06-24T10:00:00');
  const date2 = new Date('2020-06-24T11:02:00');
  let useDate2 = false;

  beforeAll(() => {
    // @ts-ignore
    global.Date = class extends Date {
      constructor() {
        super();
        if (useDate2) {
          return date2;
        }

        return date1;
      }
    };
  });

  it('should renders header', () => {

    const { getByText } = render(<Header />);
    expect(getByText(/10:00/i)).toBeInTheDocument();

    act(() => {
      jest.runTimersToTime(1000);
    });

    expect(getByText(/10:00/i)).toBeInTheDocument();

    act(() => {
      useDate2 = true;
      jest.runTimersToTime(1000);
    });

    expect(getByText(/11:02/i)).toBeInTheDocument();
  });
});
