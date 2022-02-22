import 'styled-components';

declare module 'styled-components' {
  export interface IThemeConfig {
    borderRadius: string;

    colors:{
      mainColor: string;
      white: string;
      black: string;
      gray: string;
      navBg: string;
      lightMainColor: string;
      darkGray: string;
      fontGray: string;
      interfaceBg: string;
    }
  }
}
