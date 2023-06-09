import React from 'react'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { Text, TextSize, TextTheme } from './Text'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'shared/Text',
  component: Text,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof Text>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />

export const Primary = Template.bind({})
Primary.args = {
  title: 'Title lorem ipsum',
  text: 'description description description description'
}

export const Error = Template.bind({})
Error.args = {
  title: 'Title lorem ipsum',
  text: 'description description description description',
  theme: TextTheme.ERROR
}

export const OnlyTitle = Template.bind({})
OnlyTitle.args = {
  title: 'Title lorem ipsum'
}

export const OnlyText = Template.bind({})
OnlyText.args = {
  text: 'description description description description'
}

export const PrimaryDark = Template.bind({})
PrimaryDark.args = {
  title: 'Title lorem ipsum',
  text: 'description description description description'
}
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)]

export const OnlyTitleDark = Template.bind({})
OnlyTitleDark.args = {
  title: 'Title lorem ipsum'
}
OnlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)]

export const OnlyTextDark = Template.bind({})
OnlyTextDark.args = {
  text: 'description description description description'
}
OnlyTextDark.decorators = [ThemeDecorator(Theme.DARK)]

export const SizeL = Template.bind({})
SizeL.args = {
  title: 'Title lorem ipsun',
  text: 'Description Description Description Description',
  size: TextSize.L
}
