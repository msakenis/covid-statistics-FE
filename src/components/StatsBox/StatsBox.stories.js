import { storiesOf } from '@storybook/react';
import React from 'react';
import StatsBox from './StatsBox';
import { ThemeProvider } from 'styled-components';
import theme from '../../theme';
import { stats } from '../../utils/stats';

storiesOf('StatsBox', module).add('StatsBox', () => (
    <ThemeProvider theme={theme}>
        <StatsBox statsData={stats} />
    </ThemeProvider>
));
