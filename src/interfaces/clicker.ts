export interface IClicker {
  background: IClickerBackgroundConfig,
  size: IClickerSize,
  likeDislikeButtons: ILikeDislikeButtons,
}

export interface IClickerSize {
  width: Number,
  height: Number,
}

export interface IClickerBackgroundConfig {
  path: String,
  width: Number,
  height: Number,
}

export interface ILikeDislikeButtons {
  like?: IClickerButton,
  dislike?: IClickerButton,
}

export interface IClickerButton {
  style: Object,
  iconPath?: String,
}
