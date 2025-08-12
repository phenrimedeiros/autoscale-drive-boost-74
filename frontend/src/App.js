import React, { useState, useEffect } from "react";

import "react-toastify/dist/ReactToastify.css";
import { QueryClient, QueryClientProvider } from "react-query";
import lightBackground from '../src/assets/wa-background-light.png';
import darkBackground from '../src/assets/wa-background-dark.jpg';
import { ptBR } from "@material-ui/core/locale";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { useMediaQuery } from "@material-ui/core";
import ColorModeContext from "./layout/themeContext";
import { SocketContext, SocketManager } from './context/Socket/SocketContext';

import Routes from "./routes";

const queryClient = new QueryClient();

const App = () => {
    const [locale, setLocale] = useState();

    const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
    const preferredTheme = window.localStorage.getItem("preferredTheme");
    const [mode, setMode] = useState(preferredTheme ? preferredTheme : prefersDarkMode ? "dark" : "light");

    const colorMode = React.useMemo(
        () => ({
            toggleColorMode: () => {
                setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
            },
        }),
        []
    );

    const theme = createTheme(
        {
            scrollbarStyles: {
                "&::-webkit-scrollbar": {
                    width: '8px',
                    height: '8px',
					borderRadius: "8px",
                },
                "&::-webkit-scrollbar-thumb": {
                    boxShadow: 'inset 0 0 6px rgba(0, 0, 0, 0.3)',
                    backgroundColor: "#344257",
					borderRadius: "8px",
                },
            },
            scrollbarStylesSoft: {
                "&::-webkit-scrollbar": {
                    width: "8px",
					borderRadius: "8px",
                },
                "&::-webkit-scrollbar-thumb": {
                    backgroundColor: mode === "light" ? "#F3F3F3" : "#333333",
					borderRadius: "8px",
                },
            },
            palette: {
                type: mode,
                // Cor principal da AutoScale (brand) – usar o azul já adotado no front
                primary: { main: mode === "light" ? "#344257" : "#FFFFFF" },

                // Itens e ícones auxiliares
                quicktags: { main: mode === "light" ? "#344257" : "#C9C9C9" },
                sair: { main: mode === "light" ? "#344257" : "#EAEAEA" },
                vcard: { main: mode === "light" ? "#344257" : "#EAEAEA" },

                // Texto e borda primários
                textPrimary: mode === "light" ? "#344257" : "#FFFFFF",
                borderPrimary: mode === "light" ? "#C9C9C9" : "#666",

                // Tons claros/escuros
                dark: { main: mode === "light" ? "#333333" : "#F3F3F3" },
                light: { main: mode === "light" ? "#F3F3F3" : "#333333" },

                // Backgrounds neutros (alinhados ao que já está publicado)
                tabHeaderBackground: mode === "light" ? "#EAEAEA" : "#666",
                ticketlist: mode === "light" ? "#FAFAFA" : "#333",
                optionsBackground: mode === "light" ? "#FAFAFA" : "#333",
                options: mode === "light" ? "#FAFAFA" : "#666",
                fontecor: mode === "light" ? "#344257" : "#FFFFFF",
                fancyBackground: mode === "light" ? "#FAFAFA" : "#333",
                bordabox: mode === "light" ? "#EAEAEA" : "#333",
                newmessagebox: mode === "light" ? "#EAEAEA" : "#333",
                inputdigita: mode === "light" ? "#FFFFFF" : "#666",
                contactdrawer: mode === "light" ? "#FFFFFF" : "#666",
                announcements: mode === "light" ? "#EAEAEA" : "#333",
                login: mode === "light" ? "#FFFFFF" : "#1C1C1C",
                announcementspopover: mode === "light" ? "#FFFFFF" : "#666",
                chatlist: mode === "light" ? "#EAEAEA" : "#666",
                boxlist: mode === "light" ? "#EAEAEA" : "#666",
                boxchatlist: mode === "light" ? "#EAEAEA" : "#333",
                total: mode === "light" ? "#FFFFFF" : "#222",
                messageIcons: mode === "light" ? "#344257" : "#F3F3F3",
                inputBackground: mode === "light" ? "#FFFFFF" : "#333",

                // Barra superior com a cor da marca
                barraSuperior: mode === "light"
                    ? "linear-gradient(to right, #344257, #344257 , #344257)"
                    : "#666",

                boxticket: mode === "light" ? "#EAEAEA" : "#666",
                campaigntab: mode === "light" ? "#EAEAEA" : "#666",
                mediainput: mode === "light" ? "#EAEAEA" : "#1c1c1c",

                // Contador do dashboard (mantido como estava)
                contadordash: mode == "light" ? "#fff" : "#fff",

                // Erro/alerta
                error: { main: "#dc2626" },
            },
            mode,
        },
        locale
    );

    useEffect(() => {
        const i18nlocale = localStorage.getItem("i18nextLng");
        const browserLocale =
            i18nlocale.substring(0, 2) + i18nlocale.substring(3, 5);

        if (browserLocale === "ptBR") {
            setLocale(ptBR);
        }
    }, []);

    useEffect(() => {
        window.localStorage.setItem("preferredTheme", mode);
    }, [mode]);



    return (
        <ColorModeContext.Provider value={{ colorMode }}>
            <ThemeProvider theme={theme}>
                <QueryClientProvider client={queryClient}>
                  <SocketContext.Provider value={SocketManager}>
                      <Routes />
                  </SocketContext.Provider>
                </QueryClientProvider>
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
};

export default App;
