import { Demo } from "./index";

export default {
  title: "Demo",
  component: Demo,
};

const Template = () => ({
  components: { Demo },
  template: `<Demo></Demo>`,
});

export const JustADemo = Template.bind({});



