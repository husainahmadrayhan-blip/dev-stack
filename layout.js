import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { AppProvider } from "../components/Providers";
import ToastBridge from "../components/ToastBridge";
export const metadata={title:"FitLog — Workout Library",description:"Train with intent. Log every set."};
export default function RootLayout({children}){return <html lang="en"><body><AppProvider><Navbar/><main>{children}</main><Footer/><ToastBridge/></AppProvider></body></html>}