import { Meta, Story } from "@storybook/react/types-6-0";
import Select, { SelectProps } from "../components/Select";

export default {
    title: "Compoent/Select",
    component: Select
} as Meta;

const Template: Story<SelectProps> = (args: any) => <Select {...args} />;

export const Default = Template.bind({});
Default.args = {
    options: [
        { value: "chocolate", label: "Chocolate" },
        { value: "strawberry", label: "Strawberry" },
        { value: "vanilla", label: "Vanilla" }
    ],
    placeholder: "Select..."
};

export const Multiple = Template.bind({});
Multiple.args = {
    ...Default.args,
    isMultiple: true
};

export const Clearable = Template.bind({});
Clearable.args = {
    ...Default.args,
    isClearable: true
};

export const Searchable = Template.bind({});
Searchable.args = {
    ...Default.args,
    isSearchable: true
};

export const Disabled = Template.bind({});
Disabled.args = {
    ...Default.args,
    isDisabled: true
};

export const Loading = Template.bind({});
Loading.args = {
    ...Default.args,
    loading: true
};

export const CustomNoOptionsMessage = Template.bind({});
CustomNoOptionsMessage.args = {
    ...Default.args,
    noOptionsMessage: "No results found"
};

export const CustomPrimaryColor = Template.bind({});
CustomPrimaryColor.args = {
    ...Default.args,
    primaryColor: "blue"
};
