import {
    IClicker,
    IClickerState,
} from "@/interfaces";

const initClickerState: IClicker = {
  background: {
    path: 'clicker/backgrounds/test.gif',
    width: 100,
    height: 100,
  },
  size: {
    width: 100,
    height: 200,
  },
  likeDislikeButtons: {
    like: {
      style: {
        width: '50px',
        height: '50px',
      },
      imgStyle: {
        width: '50px',
        height: '50px',
      },
      iconPath: 'clicker/icons/like.svg',
    },
    dislike: {
      style: {
        width: '50px',
        height: '50px',
      },
      imgStyle: {
        width: '50px',
        height: '50px',
      },
      iconPath: 'clicker/icons/dislike.svg',
    },
  },
  points: 0,
}

export const clicker = {
  state: {
    clicker: initClickerState,
  },
  getters: {
    getClicker(state: IClickerState): IClicker {
      return state.clicker;
    },
    getPoints(state: IClickerState): number {
      return state.clicker.points;
    }
  },
  mutations: {
    SET_BIGGER_POINTS(state: IClickerState, points: number): void {
      state.clicker.points += points;
    },
    SET_SMALLER_POINTS(state: IClickerState, points: number): void {
      state.clicker.points -= points;
    },
  },
  actions: {
    ADD_POINTS({ commit }: any, points: number): void {
      commit('SET_BIGGER_POINTS', points);
    },
    REMOVE_POINTS({ commit }: any, points: number): void {
      commit('SET_SMALLER_POINTS', points);
    }
  },
  namespaced: true,
}