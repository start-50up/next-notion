import "../styles.css";

function NavItem(props) {
  return (
    <li>
      <a
        href={props.href}
        className="text-sm font-bold text-gray-700 px-2 py-1 hover:bg-gray-300 rounded"
      >
        {props.text}
      </a>
    </li>
  );
}

const Button = props => (
  <Button
    type={props.type}
    className="bg-red-400 hover:bg-red-500 transition-colors duration-300"
  />
);

export default () => (
  <div>
    <nav className="flex justify-between px-3 py-2">
      <div>
        <span>Notion</span>
      </div>
      <ul className="flex space-x-2">
        <NavItem href="/product" text="Product" />
        <NavItem href="/download" text="Download" />
        <NavItem href="/remote-work" text="Remote work" />
      </ul>
    </nav>
  </div>
);
