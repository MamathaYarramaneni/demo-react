import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function Header() {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        DEMO
      </Link>
      {/* <ul>
        <CustomLink to="/doctors">Doctors</CustomLink>
        <CustomLink to="/departments">Departments</CustomLink>
        <CustomLink to="/patients">Patients</CustomLink>
        <CustomLink to="/inpatients">OutPatients</CustomLink>
        <CustomLink to="/outpatients">InPatients</CustomLink>
        <CustomLink to="/employees">Employees</CustomLink>
        <CustomLink to="/bills">Bills</CustomLink>
      </ul> */}
    </nav>
  )
}

// function CustomLink({ to, children, ...props }) {
//   const resolvedPath = useResolvedPath(to)
//   const isActive = useMatch({ path: resolvedPath.pathname, end: true })

//   return (
//     <li className={isActive ? "active" : ""}>
//       <Link to={to} {...props}>
//         {children}
//       </Link>
//     </li>
//   )
// }