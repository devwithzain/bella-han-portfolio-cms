import "@/styles/globals.css";
import type { Metadata } from "next";
import Providers from "@/provider/provider";
import ToasterProvider from "@/provider/ToastProvide";

export const metadata: Metadata = {
	title: "Bella Han Admin Panel",
	description: "Bella Portfolio Webiste Admin Panel by devwithzain",
};
export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body>
				<Providers>
					<ToasterProvider />
					{children}
				</Providers>
			</body>
		</html>
	);
}
