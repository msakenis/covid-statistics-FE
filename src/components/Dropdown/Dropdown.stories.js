import { storiesOf } from '@storybook/react';
import React from 'react';
import Dropdown from './Dropdown';
import { ThemeProvider } from 'styled-components';
import theme from '../../theme';

storiesOf('Dropdown', module).add('Dropdown', () => (
    <ThemeProvider theme={theme}>
        <Dropdown options={['Lithuania', 'Belgium', 'Norway']} handleChange={() => console.log('changed!')} />
    </ThemeProvider>
));
