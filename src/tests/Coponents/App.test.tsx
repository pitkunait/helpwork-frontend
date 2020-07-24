import React from 'react';
import { render } from '../utils/test-utils';
import App from '../../App';




it('Renders app', () => {
    const { getByText } = render(<App/>);
    const linkElement = getByText(/username/i);
    expect(linkElement).toBeInTheDocument();
});
