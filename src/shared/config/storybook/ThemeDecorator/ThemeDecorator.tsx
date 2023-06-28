import { type Story } from '@storybook/react'
import { type Theme, ThemeProvider } from '@/app/providers/ThemeProvider'

export const ThemeDecorator = (theme: Theme) => (StoryComponent: Story) => (
  <ThemeProvider initialTheme={theme}>
    <div className={`app ${theme}`}>
      <StoryComponent/>
    </div>
  </ThemeProvider>
)
