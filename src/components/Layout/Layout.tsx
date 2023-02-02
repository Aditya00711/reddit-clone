import { Navbar } from '../Navbar/Navbar'
interface ILayoutProps {
	children: React.ReactNode
}

export const Layout: React.FC<ILayoutProps> = ({ children }) => {
	return (
		<>
			<Navbar />
			<main>{children}</main>
		</>
	)
}
