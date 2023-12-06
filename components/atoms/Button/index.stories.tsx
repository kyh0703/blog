import { Meta, StoryObj } from '@storybook/react'
import Input from './index'

const meta: Meta<typeof Input> = {
  component: Input,
  title: 'Atoms/Input',
  tags: ['autodocs'],
  argTypes: {},
}

export default meta
type Story = StoryObj<typeof Input>

export const Normal: Story = {}
