import React, { PropsWithChildren } from "react";
import style from "./Button.module.scss";

interface PropsButton {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
}

export default function Button({ onClick, type, children }: PropsButton) {
  return (
    <button onClick={onClick} type={type} className={style.button}>
      {children}
    </button>
  );
}

class Button1 extends React.Component<PropsButton> {
  render(): React.ReactNode {
    const { type = "button", onClick } = this.props;
    return (
      <button onClick={onClick} type={type} className={style.button}>
        {this.props.children}
      </button>
    );
  }
}
