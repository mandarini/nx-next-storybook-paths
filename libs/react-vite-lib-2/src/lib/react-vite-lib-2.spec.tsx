import { render } from '@testing-library/react';

import ReactViteLib2 from './react-vite-lib-2';

describe('ReactViteLib2', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ReactViteLib2 />);
    expect(baseElement).toBeTruthy();
  });
});
