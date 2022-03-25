import { FunctionComponent } from 'react';
import { Category } from '../types';

export const NavItem: FunctionComponent<{
  value: Category | 'all';
  categoryFilter: Function;
}> = ({ value, categoryFilter }) => {
  return (
    <li
      className="capitalize cursor-pointer hover:text-green"
      onClick={() => categoryFilter(value)}
    >
      {value}
    </li>
  );
};

const ProjectsNavbar: FunctionComponent<{ categoryFilter: Function }> = (
  props
) => {
  return (
    <div className="flex px-3 py-2 space-x-3 overflow-x-auto list-none">
      <NavItem value="all" {...props} />
      <NavItem value="node" {...props} />
      <NavItem value="react" {...props} />
      <NavItem value="nextjs" {...props} />
      <NavItem value="ruby on rails" {...props} />
      <NavItem value="ruby" {...props} />
    </div>
  );
};

export default ProjectsNavbar;
