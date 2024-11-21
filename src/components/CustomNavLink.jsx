/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";

export const CustomNavLink = ({ to, onClick, className, children }) => (
    <NavLink to={to} onClick={onClick} className={className}>
        {children}
    </NavLink>
);