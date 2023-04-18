import { render } from '@testing-library/react';

import ReactViteLib from './react-vite-lib';

describe('ReactViteLib', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ReactViteLib />);
    expect(baseElement).toBeTruthy();
  });
});
