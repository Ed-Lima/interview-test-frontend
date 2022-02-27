import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    background: string,
    title: string,
    text: string,
    borderRadius: string;

    colors: {
      main: string;
      secondary: string;
    };
  }
}