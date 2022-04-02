export interface IContainedButton01Props {
  content: string;
  size: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset" | undefined;
  responsive?: boolean;
  id?: string;
}

export interface IContainedButton01UIProps {
  content: string;
  size: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset" | undefined;
  responsive?: boolean;
  id?: string;
}

export interface IContainedButton01UIEmotionProps {
  bigBtn: boolean;
  size: string;
  onClick?: () => void;
  disabled?: boolean;
  responsive?: boolean;
}
