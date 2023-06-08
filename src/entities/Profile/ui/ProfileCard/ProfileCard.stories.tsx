import React from 'react'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { ProfileCard } from 'entities/Profile'
import { Country } from 'entities/Country'
import { Currency } from 'entities/Currency'

export default {
  title: 'entities/ProfileCard',
  component: ProfileCard,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof ProfileCard>

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />

export const Primary = Template.bind({})
Primary.args = {
  data: {
    username: 'admin',
    age: 22,
    country: Country.Belarus,
    lastname: 'smith',
    first: 'asd',
    city: 'asf',
    currency: Currency.EUR,
    avatar: 'https://pic.rutubelist.ru/user/3b/27/3b2758ad5492a76b578f7ee072e4e894.jpg'
  }
}

export const withError = Template.bind({})
withError.args = {
  error: 'true'
}

export const Loading = Template.bind({})
Loading.args = {
  isLoading: true
}
