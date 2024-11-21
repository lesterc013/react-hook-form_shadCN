import { ModeToggle } from "@/components/mode-toggle";
import "../globals.css";
import { ThemeProvider } from "@/components/theme-provider";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    <ModeToggle />
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
