import { render } from '@testing-library/react';

import ProbiExamReactUi from './react-ui';

describe('ProbiExamReactUi', () => {
  
  it('should render successfully', () => {
    const { baseElement } = render(<ProbiExamReactUi />);
    expect(baseElement).toBeTruthy();
  });
  
});
