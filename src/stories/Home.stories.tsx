import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Home from "../components/Home";

export default {
  title: "Core/Home",
  component: Home,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Home>;

const Template: ComponentStory<typeof Home> = () => <Home />;

export const Default = Template.bind({});
Default.args = {};
