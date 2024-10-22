"use client";
import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { AuthProvider } from "@/app/context/AuthContext";
import ReactQueryProvider from "@/app/providers/ReactQueryProvider";


const theme = createTheme();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
      <ReactQueryProvider>
            <AppRouterCacheProvider>
                <ThemeProvider theme={theme}>
                    <AuthProvider>
                        <CssBaseline/>
                        {children}
                    </AuthProvider>
                </ThemeProvider>
            </AppRouterCacheProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
