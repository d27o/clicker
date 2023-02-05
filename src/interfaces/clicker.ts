export interface IClicker {
  background: IClickerBackgroundConfig,
  size: IClickerSize,
  likeDislikeButtons: ILikeDislikeButtons,
  points: number,
}

export interface IClickerSize {
  width: number,
  height: number,
}

export interface IClickerBackgroundConfig {
  path: string,
  width: number,
  height: number,
}

export interface ILikeDislikeButtons {
  like?: IClickerButton,
  dislike?: IClickerButton,
}

export interface IClickerButton {
  style: object,
  imgStyle?: object,
  iconPath?: string,
  text?: string,
}

// VUEX begin

export interface IClickerState {
  clicker: IClicker,
}

// VUEX end
