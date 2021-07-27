import ComingUpNav from "./ComingUpNav";
import { ReactComponent as ServIcon } from "../../Images/icons/sevices.svg";
import { Options } from "../Detail-Lists/Monitor";
import { TweenMax, Power3 } from "gsap";

export default {
  title: "Nav/ComingUp Nav",
  componrnt: ComingUpNav,
};

const Template = (args) => <ComingUpNav {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: "بیا بالا",
  variant: "filter-items",
  animDuration: 0.8,
  btnVariant: "btn-secondary",
  btnTitle: "فیلتر",
  checkList: true,
  header: "Header",
  items: Options,
  animEase:Power3.easeInOut,
  top:"35%",
};
