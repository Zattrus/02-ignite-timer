// import { useState } from "react";
import { ThemeProvider } from "styled-components";

import { defaultTheme } from "./styles/theme/default";
import { GlobalStyle } from "./styles/global";

export function App() {
    // const [count, setCount] = useState(0);

    return (
        <ThemeProvider theme={defaultTheme}>
            <h1>Hello World</h1>

            <GlobalStyle />
        </ThemeProvider>
    );
}
