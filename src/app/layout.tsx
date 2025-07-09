import "./globals.css";
import "@mantine/core/styles.css";
import { createTheme, MantineProvider } from "@mantine/core";
import type { Metadata } from "next";

const myColor: [
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string
] = [
  "#f7fdff",
  "#edfaff",
  "#e2f7ff",
  "#cceaff",
  "#9bd1ff",
  "#67b7fc",
  "#3ca1f9",
  "#1f93f8",
  "#038cf9",
  "#0079df",
];

const theme = createTheme({
  colors: {
    myColor,
  },
  primaryColor: "myColor",
  primaryShade: 7,
  components: {
    Anchor: {
      styles: {
        root: {
          textDecoration: "none",
        },
      },
    },
  },
});

export const metadata: Metadata = {
  title: "Pipeline From Point",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <MantineProvider theme={theme}>{children}</MantineProvider>
      </body>
    </html>
  );
}

