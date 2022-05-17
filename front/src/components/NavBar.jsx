import React, { useEffect, useState } from 'react';
import '../styles/NavBar.scss';
// import { Divider } from '@mui/material';

// FontAwesome Icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faFlagCheckered,
	faHomeLgAlt,
	faEdit,
	faCircleUser,
	faGear,
	faRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';
import { Link, Outlet } from 'react-router-dom';
import Logout from 'utils/Logout';

function NavBar({ imgSrc }) {
	const [showMenu, setShowMenu] = useState(false);
	const toggleMenu = () => {
		setShowMenu((showMenu) => !showMenu);
	};

	return (
		<>
			<nav className="navBar">
				<div className="navLogo">
					<a href="/circuit" style={{ textDecoration: 'none' }}>
						Circuit
						{/* <FontAwesomeIcon icon={faFlagCheckered} /> */}
					</a>
				</div>
				<ul className="navItems">
					{/* <li className="navItem">
					<Link to="/">
						<FontAwesomeIcon icon={faHomeLgAlt} />
					</Link>
				</li> */}
					{/* <li className="navItem">
					<Link to="/Writing">
						<FontAwesomeIcon icon={faEdit} />
					</Link>
				</li> */}
					<li className="navItem">
						<div className="navItem__menu-container">
							<img
								src={imgSrc}
								alt="profile"
								onClick={() => toggleMenu()}
								aria-hidden="true"
								className="navItem__trigger"
							/>
							{showMenu ? (
								<nav className="menu">
									<div className="menu__square" />
									<div className="menu__lists">
										<li className="menu__mypage">
											<FontAwesomeIcon icon={faCircleUser} className="menu__icon" />
											<Link to="/my-page" style={{ textDecoration: 'none' }}>
												마이 페이지
											</Link>
										</li>
										{/* <Divider /> */}
										{/* <Divider /> */}
										{/* <Divider>Or</Divider> */}
										{/* <li>
										<FontAwesomeIcon icon={faGear} className="menu__icon" />
										<Link to="/">설정</Link>
									</li> */}
										<li>
											<FontAwesomeIcon icon={faRightFromBracket} className="menu__icon" />
											<Link to="/auth/login" onClick={Logout} style={{ textDecoration: 'none' }}>
												로그아웃
											</Link>
										</li>
									</div>
								</nav>
							) : null}
						</div>
					</li>
				</ul>
			</nav>
			<Outlet />
		</>
	);
}

export default NavBar;
