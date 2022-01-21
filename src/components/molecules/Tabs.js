import { Tabs, Tab, TabList } from 'react-web-tabs';
import NavBarLink from '../atoms/NavBarLink';

const TabsComponent = () => {
	const cursorStyle = { cursor: "pointer" };

	return (
		<Tabs id="Tab" defaultTab="one" className="GalleryContainer">
			<TabList className="TabList" style={{ border: 'none', margin: '0em 0 1em 0em', color: 'black' }}>
				<Tab style={cursorStyle} tabFor="one">
					<NavBarLink classes="text-dark" link="/featured">Featured</NavBarLink>
				</Tab>
				<Tab className="nav-bar-link" style={cursorStyle} tabFor="two">
					<NavBarLink classes="text-dark" link="/landscape">Landscape</NavBarLink>
				</Tab>
				<Tab className="nav-bar-link" style={cursorStyle} tabFor="three">
					<NavBarLink classes="text-dark" link="/people">People</NavBarLink>
				</Tab>
				{/* <Tab style={cursorStyle} tabFor="four">
					<NavBarLink classes="text-dark" link="/aerial">Aerial</NavBarLink>
				</Tab> */}
				<Tab className="nav-bar-link"  style={cursorStyle} tabFor="five">
					<NavBarLink classes="text-dark" link="/nightsky">Night Sky</NavBarLink>
				</Tab>
			</TabList>
		</Tabs>
	)
}

export default TabsComponent;