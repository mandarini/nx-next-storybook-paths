import { render } from '@testing-library/react';

import ReactRollupLib2 from './react-rollup-lib-2';

describe('ReactRollupLib2', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ReactRollupLib2 />);
    expect(baseElement).toBeTruthy();
  });
});
