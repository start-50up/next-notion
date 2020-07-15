import "../styles.css";

const NavItem = props => <li>{props.text}</li>;

export default () => (
  <div>
    <nav className="flex justify-between px-3 py-2">
      <div>
        <span>Notion</span>
      </div>
      <ul className="flex space-x-2">
        <NavItem text="Product" />
        <NavItem text="Download" />
        <NavItem text="Remote work" />
      </ul>
    </nav>
  </div>
);
