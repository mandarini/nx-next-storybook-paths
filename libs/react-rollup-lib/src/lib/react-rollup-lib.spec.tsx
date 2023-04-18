import { render } from '@testing-library/react';

import ReactRollupLib from './react-rollup-lib';

describe('ReactRollupLib', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ReactRollupLib />);
    expect(baseElement).toBeTruthy();
  });
});
