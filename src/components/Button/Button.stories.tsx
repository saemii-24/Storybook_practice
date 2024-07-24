//스토리북에 정리할 컴포넌트를 불러온다.
import Button from "./Button";

// CSF포맷을 사용해 Button 컴포넌트를 묘사한다.
export default {
  title: "Button",
  //만약 게층화 해서 작성하고 싶다면 아래와 같이 Common 폴더 안의 Button으로 계층화 한다.
  // title: 'Common/Button',
  component: Button,
};

//표현할 컴포넌트를 작성한다.
// const HelloButton = 스토리북 상에 렌더링 되는 해당 버튼의 이름이 된다.
// Hello World! = Button 컴포넌트에 Props로 내려주게 된다.
export const HelloButton = () => <Button>Hello World!</Button>;
export const ClickButton = () => <Button>Click!</Button>;

//색상을 넣은 컴포넌트를 만들어 본다.
export const Default = () => <Button>Default</Button>;
//primary는 button.css에서 classname으로 정의했다.
export const Primary = () => <Button color="primary">Primary</Button>;
export const Danger = () => <Button color="danger">Danger</Button>;

//크기를 변경한 버튼을 만들어 본다.
export const PrimarySmall = () => (
  <Button size="sm" color="primary">
    Small
  </Button>
);
export const PrimaryLarge = () => (
  <Button size="lg" color="primary">
    Large
  </Button>
);
